'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useTrustPresentation } from './TrustPresentation'
import { TRUST_SCROLL_MT } from './trust-tokens'

/**
 * Optional depth, collapsed by default, in the same place on every chapter.
 * Teaching cards, vocabulary, diagrams, and the instructor clip live here so the
 * top of each chapter stays the learner's task.
 */
export function TrustGoDeeper({
  children,
  hint,
  className,
}: {
  children: ReactNode
  /** One short line naming what is inside. */
  hint?: string
  className?: string
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
        'rounded-xl border border-stone-200 px-4 py-3 dark:border-stone-700',
        TRUST_SCROLL_MT,
        className
      )}
    >
      <summary className="cursor-pointer text-sm font-semibold text-stone-800 dark:text-stone-100">
        Go deeper
        {hint ? <span className="ml-2 font-normal text-stone-500">{hint}</span> : null}
      </summary>
      <div className="mt-3 space-y-6">{children}</div>
    </details>
  )
}
