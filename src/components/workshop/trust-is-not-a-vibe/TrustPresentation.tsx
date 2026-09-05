'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'
import { useReducedMotion } from 'framer-motion'
import {
  getAdjacentTrustChapters,
  TRUST_BASE,
  TRUST_LEARN_BASE,
  TRUST_CHAPTERS,
} from '@/content/workshops/trust-is-not-a-vibe'

export const TRUST_PRESENT_PARAM = 'present'
export const TRUST_PRESENT_KEY = 'trust-is-not-a-vibe:present'

type TrustStep = { id: string; label: string; element: HTMLElement }

type TrustPresentationValue = {
  present: boolean
  hydrated: boolean
  /** Chapter slug, or undefined on the overview. Lets the bar price the section against the budget. */
  slug?: string
  enter: () => void
  exit: () => void
  /** Whether every Go deeper panel is forced open. */
  depthOpen: boolean
  setDepthOpen: (open: boolean) => void
  steps: { id: string; label: string }[]
  stepIndex: number
  /**
   * Which accordion panel is open. Follows `stepIndex` while presenting; self-paced
   * readers set it from the rail without turning on the room controls.
   */
  focusIndex: number
  /** At the last step, with a pending press to leave the chapter. */
  armed: boolean
  /**
   * What is still hidden on this chapter, when leaving would skip it. Set by the
   * lesson, because only the lesson knows whether its reveal has happened.
   */
  pending: string | null
  setPending: (hint: string | null) => void
  registerStep: (id: string, label: string, element: HTMLElement | null) => void
  goToStep: (index: number, opts?: { at?: 'start' | 'end' }) => void
  /** Close every registered panel. Used by the orientation accordion so The idea can yield. */
  releaseFocus: () => void
  /** How many slides the open section has declared. */
  portionIndex: number
  portionCount: number
  registerPortions: (count: number) => void
  next: () => void
  prev: () => void
}

/**
 * Default value rather than a thrown error: chapters render inside Rehearse and
 * in tests without a provider, and presentation mode is an overlay, so its
 * absence should quietly mean "not presenting" instead of breaking the lesson.
 */
const FALLBACK: TrustPresentationValue = {
  present: false,
  hydrated: false,
  enter: () => {},
  exit: () => {},
  depthOpen: false,
  setDepthOpen: () => {},
  steps: [],
  stepIndex: -1,
  focusIndex: 0,
  armed: false,
  pending: null,
  setPending: () => {},
  registerStep: () => {},
  goToStep: () => {},
  releaseFocus: () => {},
  portionIndex: 0,
  portionCount: 1,
  registerPortions: () => {},
  next: () => {},
  prev: () => {},
}

const TrustPresentationContext = createContext<TrustPresentationValue>(FALLBACK)

export function useTrustPresentation() {
  return useContext(TrustPresentationContext)
}

/** Compatibility shape for the components that only need the flag. */
export function usePresentationMode() {
  const { present, hydrated, exit } = useTrustPresentation()
  return { present, hydrated, exit }
}

function isTypingTarget(node: EventTarget | null): boolean {
  if (!(node instanceof HTMLElement)) return false
  return Boolean(node.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]'))
}

/** Space and Enter belong to whatever control has focus, not to the deck. */
function isActivatableTarget(node: EventTarget | null): boolean {
  if (!(node instanceof HTMLElement)) return false
  return Boolean(node.closest('button, a[href], summary, [role="button"], [role="tab"], [role="checkbox"]'))
}

export function TrustPresentationProvider({
  slug,
  stepping = true,
  root = true,
  children,
}: {
  /** Chapter slug, or omitted on the overview. Used only at step boundaries. */
  slug?: string
  /**
   * Rehearse embeds a chapter beside its own facilitator chrome. It keeps the
   * presentation affordances but must not swallow arrow keys, or paging the
   * facilitator's own notes would move the embedded lesson instead.
   */
  stepping?: boolean
  /**
   * The page-level provider owns immersive chrome and the fullscreen root.
   * Nested providers (the Rehearse embed) must not write `data-trust-present`
   * or reuse the root id, or they would undo the outer mode.
   */
  root?: boolean
  children: ReactNode
}) {
  const router = useRouter()
  const reduceMotion = useReducedMotion()

  const [present, setPresent] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [depthOpen, setDepthOpen] = useState(false)
  const [stepIndex, setStepIndex] = useState(-1)
  const [focusIndex, setFocusIndex] = useState(0)
  const [armed, setArmed] = useState(false)
  const [pending, setPending] = useState<string | null>(null)
  const [steps, setSteps] = useState<TrustStep[]>([])
  const [announcement, setAnnouncement] = useState('')
  const [portionIndex, setPortionIndex] = useState(0)
  const [portionCount, setPortionCount] = useState(1)
  const preferLastPortion = useRef(false)

  const registry = useRef(new Map<string, { label: string; element: HTMLElement }>())
  const syncPending = useRef(false)

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get(TRUST_PRESENT_PARAM)
    if (fromUrl === '1') {
      window.sessionStorage.setItem(TRUST_PRESENT_KEY, '1')
      setPresent(true)
    } else if (fromUrl === '0') {
      window.sessionStorage.removeItem(TRUST_PRESENT_KEY)
      setPresent(false)
    } else {
      setPresent(window.sessionStorage.getItem(TRUST_PRESENT_KEY) === '1')
    }
    setHydrated(true)
  }, [])

  const enter = useCallback(() => {
    window.sessionStorage.setItem(TRUST_PRESENT_KEY, '1')
    setPresent(true)
    if (!root) return
    const host = document.getElementById('trust-course-root')
    if (host && host.requestFullscreen) {
      void host.requestFullscreen().catch(() => {
        // Chrome-hiding via data-trust-present is the fallback. iOS Safari
        // and some embedded webviews refuse fullscreen without a stronger gesture.
      })
    }
  }, [root])

  const exit = useCallback(() => {
    window.sessionStorage.removeItem(TRUST_PRESENT_KEY)
    setPresent(false)
    setDepthOpen(false)
    setStepIndex(-1)
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (!root) return
    const page = document.documentElement
    if (present) page.dataset.trustPresent = '1'
    else delete page.dataset.trustPresent
    return () => {
      delete page.dataset.trustPresent
    }
  }, [present, root])

  /**
   * Batches registrations from one commit into a single sort and render: a
   * chapter mounts up to eight sections at once.
   *
   * A microtask rather than an animation frame. Animation frames only run when
   * the browser paints, so on a page with nothing animating — and on a second
   * display or an occluded tab, which is exactly where presenting happens — the
   * callback can be deferred indefinitely and no step ever registers.
   */
  const scheduleSync = useCallback(() => {
    if (syncPending.current) return
    syncPending.current = true
    queueMicrotask(() => {
      syncPending.current = false
      const ordered = [...registry.current.entries()]
        .map(([id, entry]) => ({ id, label: entry.label, element: entry.element }))
        .sort((a, b) =>
          a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
        )
      setSteps(ordered)
    })
  }, [])

  const registerStep = useCallback(
    (id: string, label: string, element: HTMLElement | null) => {
      if (element) registry.current.set(id, { label, element })
      else registry.current.delete(id)
      scheduleSync()
    },
    [scheduleSync]
  )

  const releaseFocus = useCallback(() => {
    setFocusIndex(-1)
  }, [])

  const registerPortions = useCallback((count: number) => {
    const n = Math.max(1, count)
    setPortionCount(n)
    setPortionIndex((current) => {
      if (preferLastPortion.current) {
        preferLastPortion.current = false
        return n - 1
      }
      return Math.min(current, n - 1)
    })
  }, [])

  const announceStep = useCallback(
    (index: number, portion = 0, portions = 1) => {
      const step = steps[index]
      if (!step) return
      const slide = portions > 1 ? ` ${portion + 1} of ${portions}.` : ''
      setAnnouncement(`Step ${index + 1} of ${steps.length}. ${step.label}.${slide}`)
    },
    [steps]
  )

  const goToStep = useCallback(
    (index: number, opts?: { at?: 'start' | 'end' }) => {
      const step = steps[index]
      if (!step) return
      preferLastPortion.current = opts?.at === 'end'
      setFocusIndex(index)
      setArmed(false)
      setPortionIndex(opts?.at === 'end' ? 999 : 0)
      if (present) {
        setStepIndex(index)
        announceStep(index, opts?.at === 'end' ? 999 : 0, 1)
      }
      const id = step.id
      // Focus after the accordion re-render. Opening a panel replaces the
      // current node; focusing the pre-commit element leaves focus on body.
      requestAnimationFrame(() => {
        const latest = registry.current.get(id)?.element
        if (!latest) return
        latest.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
        latest.focus({ preventScroll: true })
      })
    },
    [announceStep, present, reduceMotion, steps]
  )

  const leaveChapter = useCallback(() => {
    if (!slug) {
      const first = TRUST_CHAPTERS[0]
      if (first) router.push(`${TRUST_LEARN_BASE}/${first.slug}`)
      return
    }
    const { next: nextChapter } = getAdjacentTrustChapters(slug)
    router.push(nextChapter ? `${TRUST_LEARN_BASE}/${nextChapter.slug}` : TRUST_BASE)
  }, [router, slug])

  const next = useCallback(() => {
    // Sections render on the server but only register after hydration. Without
    // this guard an early keypress reads zero steps, looks like "past the last
    // step", and jumps the room into the next chapter.
    if (steps.length === 0) return
    if (stepIndex < 0) {
      goToStep(0)
      return
    }
    if (portionIndex + 1 < portionCount) {
      const nextPortion = portionIndex + 1
      setPortionIndex(nextPortion)
      setArmed(false)
      announceStep(stepIndex, nextPortion, portionCount)
      return
    }
    if (stepIndex + 1 < steps.length) {
      goToStep(stepIndex + 1)
      return
    }
    /*
      Leaving takes a second press. Some chapters grow as the room works —
      seeded-failures registers one section until the failures are revealed — so
      the end of the list is not reliably the end of the chapter, and a stray
      arrow key would otherwise move everyone on mid-exercise. Presentation mode
      survives the navigation through sessionStorage.
    */
    if (!armed) {
      setArmed(true)
      // Naming what is still hidden matters more than the warning itself. On
      // seeded-failures the room can reach the end of the list with the six
      // failures unrevealed, and "press again to continue" alone would not say
      // that continuing skips the exercise.
      setAnnouncement(
        pending
          ? `${pending} Press again to leave this chapter anyway.`
          : 'End of this chapter. Press again to continue.'
      )
      return
    }
    leaveChapter()
  }, [announceStep, armed, goToStep, leaveChapter, pending, portionCount, portionIndex, stepIndex, steps.length])

  // Clamps at the first step rather than paging back a chapter. Advancing off
  // the end is a deliberate "we are done here"; going back is usually a
  // correction, and jumping the room to the previous chapter is not that.
  const prev = useCallback(() => {
    if (stepIndex < 0) {
      goToStep(0)
      return
    }
    if (portionIndex > 0) {
      const nextPortion = portionIndex - 1
      setPortionIndex(nextPortion)
      setArmed(false)
      announceStep(stepIndex, nextPortion, portionCount)
      return
    }
    if (stepIndex > 0) goToStep(stepIndex - 1, { at: 'end' })
    else goToStep(0)
  }, [announceStep, goToStep, portionCount, portionIndex, stepIndex])

  // A section appearing after the room acts means there is more to show here
  // after all, so the pending exit no longer reflects where we are.
  useEffect(() => {
    setArmed(false)
  }, [steps.length])

  useEffect(() => {
    if (!present || !stepping) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented) return
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return
      if (isTypingTarget(event.target)) return

      const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown'
      const back = event.key === 'ArrowLeft' || event.key === 'ArrowUp'
      const space = event.key === ' ' || event.key === 'Spacebar'

      if (space && isActivatableTarget(event.target)) return

      if (forward || space) {
        event.preventDefault()
        next()
      } else if (back) {
        event.preventDefault()
        prev()
      } else if (event.key === 'Home') {
        event.preventDefault()
        goToStep(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        goToStep(steps.length - 1, { at: 'end' })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goToStep, next, prev, present, stepping, steps.length])

  const publicSteps = useMemo(() => steps.map(({ id, label }) => ({ id, label })), [steps])

  const value = useMemo<TrustPresentationValue>(
    () => ({
      present,
      hydrated,
      slug,
      enter,
      exit,
      depthOpen,
      setDepthOpen,
      steps: publicSteps,
      stepIndex,
      focusIndex,
      armed,
      pending,
      setPending,
      registerStep,
      goToStep,
      releaseFocus,
      portionIndex,
      portionCount,
      registerPortions,
      next,
      prev,
    }),
    [
      armed,
      depthOpen,
      enter,
      exit,
      focusIndex,
      goToStep,
      hydrated,
      next,
      pending,
      portionCount,
      portionIndex,
      prev,
      present,
      publicSteps,
      registerPortions,
      registerStep,
      releaseFocus,
      slug,
      stepIndex,
    ]
  )

  return (
    <TrustPresentationContext.Provider value={value}>
      <div id={root ? 'trust-course-root' : undefined}>
        {children}
      </div>
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        // Registration completes only after hydration, so this doubles as the
        // signal that stepping is ready.
        data-trust-steps={steps.length}
      >
        {announcement}
      </div>
    </TrustPresentationContext.Provider>
  )
}

/**
 * Marks a lesson block as a stop when presenting.
 *
 * Order is read from the document, not from registration order, so blocks that
 * appear conditionally — the seeded-failures re-vote only exists after the
 * reveal — still sort into the position the room sees them in.
 */
export function useRegisterTrustStep(label: string) {
  const { registerStep, steps, stepIndex, focusIndex, present, goToStep } = useTrustPresentation()
  const generated = useId()

  const ref = useCallback(
    (element: HTMLElement | null) => {
      registerStep(generated, label, element)
    },
    [generated, label, registerStep]
  )

  const index = steps.findIndex((step) => step.id === generated)
  // Only meaningful while presenting: a self-paced learner scrolls freely and
  // should not see a block marked as the room's current one.
  const current = present && stepIndex >= 0 && steps[stepIndex]?.id === generated
  const focused = index >= 0 && focusIndex === index

  const select = useCallback(() => {
    if (index >= 0) goToStep(index)
  }, [goToStep, index])

  return { ref, current, focused, select, index }
}

/**
 * Declares that this chapter is still holding something back.
 *
 * Pass a hint while a required reveal has not happened, and `null` once it has.
 * Leaving is never blocked — presenting is not the place for hard gating — but
 * the warning names what would be skipped instead of just saying "end of
 * chapter".
 */
export function useTrustPendingReveal(hint: string | null) {
  const { setPending } = useTrustPresentation()

  useEffect(() => {
    setPending(hint)
    // Clear on unmount so a hint cannot outlive its chapter and warn about a
    // reveal that belongs to a page the room has already left.
    return () => setPending(null)
  }, [hint, setPending])
}
