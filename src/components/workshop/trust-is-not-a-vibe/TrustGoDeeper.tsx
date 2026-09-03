import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
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
  return (
    <details
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
