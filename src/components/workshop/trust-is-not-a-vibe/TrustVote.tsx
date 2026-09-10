'use client'

import { type TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'
import { usePresentationMode } from './TrustPresentation'
import {
  TRUST_VERDICT_CLASS,
  TRUST_VERDICT_FOCUS,
  TRUST_VERDICT_HINT,
  TRUST_VERDICT_HOVER,
  TRUST_VERDICT_LABEL,
  trustPresent,
} from './trust-tokens'

const VERDICTS: TrustVerdict[] = ['allow', 'ask', 'deny']

const VERDICT_RING = {
  allow: 'ring-emerald-400',
  ask: 'ring-amber-400',
  deny: 'ring-red-400',
} as const

export function TrustVote({
  value,
  onChange,
  legend,
  disabled,
  compact,
  stack,
}: {
  value: TrustVerdict | null
  onChange: (verdict: TrustVerdict) => void
  legend: string
  disabled?: boolean
  compact?: boolean
  /** One column — for a narrow left rail beside the specimen. */
  stack?: boolean
}) {
  const { present } = usePresentationMode()
  const large = present && !compact

  return (
    <fieldset className={cn(large ? 'space-y-6' : 'space-y-2', present && compact && 'space-y-5')} data-trust-vote>
      <legend
        className={cn(
          'font-semibold text-stone-900 dark:text-stone-100',
          large
            ? 'text-3xl leading-snug sm:text-4xl'
            : present
              ? 'text-2xl leading-snug sm:text-3xl'
              : compact
                ? 'text-sm sm:text-base'
                : 'text-base sm:text-lg'
        )}
      >
        {legend}
      </legend>
      {compact ? null : (
        <p
          className={cn(
            present
              ? cn(trustPresent.note, 'max-w-none text-xl sm:text-2xl')
              : 'text-sm text-stone-600 dark:text-stone-400'
          )}
        >
          Allow, Ask, or Deny. Ask is a real answer — pause when evidence or a person is missing.
        </p>
      )}
      <div className={cn('grid', stack ? 'grid-cols-1' : 'sm:grid-cols-3', large ? 'gap-5' : present ? 'gap-4' : 'gap-2')}>
        {VERDICTS.map((verdict) => {
          const selected = value === verdict
          return (
            <button
              key={verdict}
              type="button"
              disabled={disabled}
              onClick={() => onChange(verdict)}
              aria-pressed={selected}
              className={cn(
                'rounded-xl border text-left transition duration-200 motion-safe:hover:-translate-y-0.5',
                large ? 'px-5 py-5' : present ? 'px-5 py-5' : compact ? 'px-3 py-2.5' : 'px-4 py-3.5',
                selected
                  ? cn(
                      TRUST_VERDICT_CLASS[verdict],
                      'ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
                      VERDICT_RING[verdict]
                    )
                  : cn(
                      'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
                      TRUST_VERDICT_HOVER[verdict],
                      TRUST_VERDICT_FOCUS[verdict]
                    ),
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950',
                disabled && 'cursor-not-allowed opacity-60'
              )}
            >
              <span className="flex items-center gap-2">
                <TrustMark id={verdict} className={large || present ? 'h-8 w-8' : 'h-5 w-5'} />
                <span
                  className={cn(
                    'font-space-mono font-bold uppercase tracking-wide',
                    large ? 'text-2xl' : present ? 'text-2xl' : 'text-sm'
                  )}
                >
                  {TRUST_VERDICT_LABEL[verdict]}
                </span>
              </span>
              <span
                className={cn(
                  'mt-1 block leading-snug',
                  large
                    ? 'mt-2 text-lg text-stone-700 dark:text-stone-200'
                    : present
                      ? 'mt-2 text-lg text-stone-700 dark:text-stone-200'
                      : 'text-xs text-stone-600 dark:text-stone-300'
                )}
              >
                {TRUST_VERDICT_HINT[verdict]}
              </span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
