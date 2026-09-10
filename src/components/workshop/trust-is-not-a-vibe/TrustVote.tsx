'use client'

import Image from 'next/image'
import { TRUST_PLACEHOLDERS, type TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'
import { usePresentationMode } from './TrustPresentation'
import {
  TRUST_VERDICT_CLASS,
  TRUST_VERDICT_HINT,
  TRUST_VERDICT_HOVER,
  TRUST_VERDICT_LABEL,
  trustPresent,
} from './trust-tokens'

const VERDICTS: TrustVerdict[] = ['allow', 'ask', 'deny']

const VERDICT_STILL = {
  allow: { position: 'object-left', wash: 'bg-emerald-950/55', ring: 'ring-emerald-400', idle: 'hover:ring-emerald-400' },
  ask: { position: 'object-center', wash: 'bg-amber-950/55', ring: 'ring-amber-400', idle: 'hover:ring-amber-400' },
  deny: { position: 'object-right', wash: 'bg-red-950/55', ring: 'ring-red-400', idle: 'hover:ring-red-400' },
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
  const still = TRUST_PLACEHOLDERS.verdictCards
  const src = still.src
  const remote = Boolean(src?.startsWith('https://'))

  if (compact) {
    return (
      <fieldset className={cn('space-y-2', present && 'space-y-5')}>
        <legend
          className={cn(
            'font-semibold text-stone-900 dark:text-stone-100',
            present ? 'text-2xl leading-snug sm:text-3xl' : 'text-sm sm:text-base'
          )}
        >
          {legend}
        </legend>
        <div className={cn('grid', stack ? 'grid-cols-1' : 'sm:grid-cols-3', present ? 'gap-4' : 'gap-2')}>
          {VERDICTS.map((verdict) => {
            const selected = value === verdict
            const look = VERDICT_STILL[verdict]
            return (
              <button
                key={verdict}
                type="button"
                disabled={disabled}
                onClick={() => onChange(verdict)}
                aria-pressed={selected}
                className={cn(
                  'rounded-xl border text-left transition duration-200 motion-safe:hover:-translate-y-0.5',
                  present ? 'px-5 py-5' : 'px-3 py-2.5',
                  selected
                    ? cn(
                        TRUST_VERDICT_CLASS[verdict],
                        'ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
                        look.ring
                      )
                    : cn(
                        'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
                        TRUST_VERDICT_HOVER[verdict]
                      ),
                  disabled && 'cursor-not-allowed opacity-60'
                )}
              >
                <span className="flex items-center gap-2">
                  <TrustMark id={verdict} className={present ? 'h-8 w-8' : 'h-5 w-5'} />
                  <span
                    className={cn(
                      'font-space-mono font-bold uppercase tracking-wide',
                      present ? 'text-2xl' : 'text-sm'
                    )}
                  >
                    {TRUST_VERDICT_LABEL[verdict]}
                  </span>
                </span>
                <span
                  className={cn(
                    'mt-1 block leading-snug',
                    present
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

  return (
    <fieldset className={cn(present ? 'space-y-6' : 'space-y-3')} data-trust-vote>
      <legend
        className={cn(
          'font-semibold text-stone-900 dark:text-stone-100',
          present ? 'text-3xl leading-snug sm:text-4xl' : 'text-base sm:text-lg'
        )}
      >
        {legend}
      </legend>
      <p
        className={cn(
          present
            ? cn(trustPresent.note, 'max-w-none text-xl sm:text-2xl')
            : 'text-sm text-stone-600 dark:text-stone-400'
        )}
      >
        Allow, Ask, or Deny. Ask is a real answer — pause when evidence or a person is missing.
      </p>
      <div className={cn('grid sm:grid-cols-3', present ? 'gap-5' : 'gap-3')}>
        {VERDICTS.map((verdict) => {
          const selected = value === verdict
          const look = VERDICT_STILL[verdict]
          return (
            <button
              key={verdict}
              type="button"
              disabled={disabled}
              onClick={() => onChange(verdict)}
              aria-pressed={selected}
              className={cn(
                'overflow-hidden rounded-xl border text-left transition duration-200 motion-safe:hover:-translate-y-0.5',
                selected
                  ? cn(
                      TRUST_VERDICT_CLASS[verdict],
                      'border-transparent ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
                      look.ring
                    )
                  : cn('border-stone-200 dark:border-stone-700', TRUST_VERDICT_HOVER[verdict]),
                disabled && 'cursor-not-allowed opacity-60'
              )}
            >
              <span className={cn('relative block bg-stone-900', present ? 'aspect-[16/9]' : 'aspect-[16/10]')}>
                {src ? (
                  <Image
                    src={src}
                    alt=""
                    fill
                    unoptimized={remote}
                    className={cn('object-cover', look.position)}
                    sizes="(max-width: 768px) 100vw, 240px"
                  />
                ) : null}
                <span className={cn('absolute inset-0', look.wash)} aria-hidden />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                  <TrustMark id={verdict} className={present ? 'h-12 w-12 text-white' : 'h-10 w-10 text-white'} />
                  <span
                    className={cn(
                      'font-space-mono font-bold uppercase tracking-wide',
                      present ? 'text-3xl sm:text-4xl' : 'text-2xl'
                    )}
                  >
                    {TRUST_VERDICT_LABEL[verdict]}
                  </span>
                </span>
              </span>
              <span
                className={cn(
                  'block bg-white dark:bg-stone-900 dark:text-stone-200',
                  present
                    ? 'px-5 py-4 text-xl leading-snug text-stone-800 sm:text-2xl'
                    : 'px-3 py-3 text-sm text-stone-700'
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
