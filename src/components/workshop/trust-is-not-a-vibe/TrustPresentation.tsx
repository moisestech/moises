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
  exit: () => void
  /** Whether every Go deeper panel is forced open. */
  depthOpen: boolean
  setDepthOpen: (open: boolean) => void
  steps: { id: string; label: string }[]
  stepIndex: number
  registerStep: (id: string, label: string, element: HTMLElement | null) => void
  goToStep: (index: number) => void
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
  exit: () => {},
  depthOpen: false,
  setDepthOpen: () => {},
  steps: [],
  stepIndex: -1,
  registerStep: () => {},
  goToStep: () => {},
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
  children: ReactNode
}) {
  const router = useRouter()
  const reduceMotion = useReducedMotion()

  const [present, setPresent] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [depthOpen, setDepthOpen] = useState(false)
  const [stepIndex, setStepIndex] = useState(-1)
  const [steps, setSteps] = useState<TrustStep[]>([])
  const [announcement, setAnnouncement] = useState('')

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

  const exit = useCallback(() => {
    window.sessionStorage.removeItem(TRUST_PRESENT_KEY)
    setPresent(false)
    setDepthOpen(false)
    setStepIndex(-1)
  }, [])

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

  const goToStep = useCallback(
    (index: number) => {
      const step = steps[index]
      if (!step) return
      setStepIndex(index)
      step.element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      // Focus without a second scroll, so the smooth scroll above is not cut short.
      step.element.focus({ preventScroll: true })
      setAnnouncement(`Step ${index + 1} of ${steps.length}. ${step.label}`)
    },
    [reduceMotion, steps]
  )

  const next = useCallback(() => {
    // Sections render on the server but only register after hydration. Without
    // this guard an early keypress reads zero steps, looks like "past the last
    // step", and jumps the room into the next chapter.
    if (steps.length === 0) return
    if (stepIndex + 1 < steps.length) {
      goToStep(stepIndex + 1)
      return
    }
    // Past the last section, carry on into the next chapter. Presentation mode
    // survives the navigation through sessionStorage.
    if (!slug) {
      const first = TRUST_CHAPTERS[0]
      if (first) router.push(`${TRUST_LEARN_BASE}/${first.slug}`)
      return
    }
    const { next: nextChapter } = getAdjacentTrustChapters(slug)
    router.push(nextChapter ? `${TRUST_LEARN_BASE}/${nextChapter.slug}` : TRUST_BASE)
  }, [goToStep, router, slug, stepIndex, steps.length])

  // Clamps at the first step rather than paging back a chapter. Advancing off
  // the end is a deliberate "we are done here"; going back is usually a
  // correction, and jumping the room to the previous chapter is not that.
  const prev = useCallback(() => {
    if (stepIndex > 0) goToStep(stepIndex - 1)
    else goToStep(0)
  }, [goToStep, stepIndex])

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
        goToStep(steps.length - 1)
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
      exit,
      depthOpen,
      setDepthOpen,
      steps: publicSteps,
      stepIndex,
      registerStep,
      goToStep,
      next,
      prev,
    }),
    [depthOpen, exit, goToStep, hydrated, next, prev, present, publicSteps, registerStep, stepIndex]
  )

  return (
    <TrustPresentationContext.Provider value={value}>
      {children}
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
  const { registerStep, steps, stepIndex, present } = useTrustPresentation()
  const generated = useId()

  const ref = useCallback(
    (element: HTMLElement | null) => {
      registerStep(generated, label, element)
    },
    [generated, label, registerStep]
  )

  // Only meaningful while presenting: a self-paced learner scrolls freely and
  // should not see a block marked as the room's current one.
  const current = present && stepIndex >= 0 && steps[stepIndex]?.id === generated

  return { ref, current }
}
