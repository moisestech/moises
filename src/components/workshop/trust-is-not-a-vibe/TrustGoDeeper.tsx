'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { HiOutlineMap } from 'react-icons/hi2'
import { cn } from '@/lib/utils'
import { useTrustPresentation } from './TrustPresentation'
import { TRUST_SCROLL_MT } from './trust-tokens'
import { TRUST_CHAPTER_ICON } from './TrustWorkshopMarks'
import { TRUST_CHAPTERS } from '@/content/workshops/trust-is-not-a-vibe'
import { TRUST_CHAPTER_TONE } from './trust-tokens'

const PREVIEW_STAGE: Record<string, string> = {
  'looks-right': 'Decision',
  'four-lenses': 'Criteria',
  'seeded-failures': 'Cases',
  'the-loop': 'Graders',
  'the-harness': 'Evidence',
  transfer: 'Back to cases',
}

function TrustGoDeeperPreview() {
  const [index, setIndex] = useState(0)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(media.matches)
    if (media.matches) return
    const tick = window.setInterval(() => {
      setIndex((current) => (current + 1) % TRUST_CHAPTERS.length)
    }, 1600)
    return () => window.clearInterval(tick)
  }, [])

  if (reduce) {
    return (
      <p
        data-trust-go-deeper-preview
        className="mt-3 flex flex-wrap gap-2 text-sm text-stone-600 dark:text-stone-400"
      >
        {TRUST_CHAPTERS.map((chapter) => (
          <span key={chapter.id}>{PREVIEW_STAGE[chapter.id]}</span>
        ))}
      </p>
    )
  }

  const chapter = TRUST_CHAPTERS[index]
  const Icon = TRUST_CHAPTER_ICON[chapter.id]
  const tone = TRUST_CHAPTER_TONE[chapter.id]

  return (
    <p
      data-trust-go-deeper-preview
      className={cn(
        'mt-3 inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium motion-safe:animate-pulse',
        tone.wash,
        tone.text
      )}
      aria-live="polite"
    >
      <Icon className="h-4 w-4" aria-hidden />
      {chapter.title}
      <span className="font-normal opacity-80">· {PREVIEW_STAGE[chapter.id]}</span>
    </p>
  )
}

/**
 * Optional depth, collapsed by default, in the same place on every chapter.
 * Teaching cards, vocabulary, diagrams, and the instructor clip live here so the
 * top of each chapter stays the learner's task.
 */
export function TrustGoDeeper({
  children,
  hint,
  className,
  preview,
}: {
  children: ReactNode
  /** One short line naming what is inside. */
  hint?: string
  className?: string
  /** Animated peek of what the panel holds. Used on Overview path. */
  preview?: boolean
}) {
  const { depthOpen } = useTrustPresentation()
  const [open, setOpen] = useState(false)

  // Seeded rather than controlled. One toggle in the presentation bar opens
  // every panel for a technical question, and each panel can still be closed
  // individually afterwards without fighting the shared value.
  useEffect(() => {
    setOpen(depthOpen)
  }, [depthOpen])

  return (
    <details
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      className={cn(
        'rounded-xl border border-stone-200 px-5 py-4 dark:border-stone-700',
        TRUST_SCROLL_MT,
        className
      )}
    >
      <summary className="flex cursor-pointer list-none items-start gap-3 text-stone-800 dark:text-stone-100 [&::-webkit-details-marker]:hidden">
        <HiOutlineMap className="mt-0.5 h-6 w-6 shrink-0 text-cyan-700 dark:text-cyan-300" aria-hidden />
        <span>
          <span className="block text-lg font-semibold">Go deeper</span>
          {hint ? <span className="mt-1 block text-base leading-snug text-stone-600 dark:text-stone-400">{hint}</span> : null}
          {preview && !open ? <TrustGoDeeperPreview /> : null}
        </span>
      </summary>
      <div className="mt-4 space-y-6">{children}</div>
    </details>
  )
}
