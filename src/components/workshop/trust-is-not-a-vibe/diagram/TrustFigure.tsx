import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { TRUST_SCROLL_MT } from '../trust-tokens'

/**
 * The shared frame every course diagram sits in.
 *
 * Generalizes the mat, border, and caption that `TrustDiagrams`,
 * `TrustPlaceholderFrame`, and `TrustSpecimen` each built separately. Carries
 * `TRUST_SCROLL_MT` so a diagram anchored or stepped to is not covered by the
 * sticky header and subnav.
 */
export function TrustFigure({
  eyebrow,
  title,
  caption,
  legend,
  className,
  children,
}: {
  /** Short kicker above the title. */
  eyebrow?: string
  /** Visible heading for the figure. */
  title?: string
  /** What to take away from it. */
  caption?: ReactNode
  legend?: ReactNode
  className?: string
  children: ReactNode
}) {
  return (
    <figure
      className={cn(
        'rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900',
        TRUST_SCROLL_MT,
        className
      )}
    >
      {eyebrow || title ? (
        <div className="mb-3">
          {eyebrow ? (
            <p className="font-space-mono text-[10px] uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <p className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{title}</p>
          ) : null}
        </div>
      ) : null}

      {children}

      {legend ? <div className="mt-3 border-t border-stone-200 pt-3 dark:border-stone-700">{legend}</div> : null}

      {caption ? (
        <figcaption className="mt-3 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
