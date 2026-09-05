'use client'

import { cn } from '@/lib/utils'
import { useTrustPresentation } from './TrustPresentation'
import { TRUST_STICKY_TOP } from './trust-tokens'

/**
 * In-page portion list for lesson chapters. Items come from the same step
 * registry the presentation arrows use, so the rail and the accordion cannot
 * disagree about what is open.
 */
export function TrustPageRail() {
  const { steps, focusIndex, goToStep } = useTrustPresentation()
  if (steps.length === 0) return null

  return (
    <nav
      aria-label="On this page"
      className={cn('hidden lg:sticky lg:block lg:self-start', TRUST_STICKY_TOP)}
    >
      <p className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">On this page</p>
      <ol className="mt-3 space-y-1">
        {steps.map((step, index) => {
          const current = index === focusIndex
          return (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => goToStep(index)}
                aria-current={current ? 'true' : undefined}
                className={cn(
                  'flex w-full items-baseline gap-2 rounded border-l-2 py-1 pl-2.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                  current
                    ? 'border-cyan-500 font-semibold text-stone-950 dark:border-cyan-400 dark:text-stone-50'
                    : 'border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-800 dark:border-stone-700 dark:hover:text-stone-200'
                )}
              >
                <span className="font-space-mono text-[10px] text-stone-400">{index + 1}</span>
                {step.label}
                {current ? <span className="sr-only"> (current section)</span> : null}
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/** Small-screen equivalent. Stays in flow under the sticky course strip. */
export function TrustPageContents({ className }: { className?: string }) {
  const { steps, focusIndex, goToStep } = useTrustPresentation()
  if (steps.length === 0) return null

  return (
    <nav
      aria-label="On this page"
      className={cn(
        'rounded-xl border border-stone-200 px-4 py-3 lg:hidden dark:border-stone-700',
        className
      )}
    >
      <p className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">On this page</p>
      <ol className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
        {steps.map((step, index) => {
          const current = index === focusIndex
          return (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => goToStep(index)}
                aria-current={current ? 'true' : undefined}
                className={cn(
                  'flex items-baseline gap-1.5 text-left text-sm underline-offset-2 hover:underline',
                  current
                    ? 'font-semibold text-stone-950 dark:text-stone-50'
                    : 'text-stone-700 dark:text-stone-300'
                )}
              >
                <span className="font-space-mono text-[10px] text-stone-400">{index + 1}</span>
                {step.label}
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
