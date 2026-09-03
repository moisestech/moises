'use client'

import Image from 'next/image'
import { TRUST_PLACEHOLDERS, type TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'
import { TRUST_VERDICT_HINT, TRUST_VERDICT_LABEL } from './trust-tokens'

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
}: {
  value: TrustVerdict | null
  onChange: (verdict: TrustVerdict) => void
  legend: string
  disabled?: boolean
  compact?: boolean
}) {
  const still = TRUST_PLACEHOLDERS.verdictCards
  const src = still.src
  const remote = Boolean(src?.startsWith('https://'))

  if (compact) {
    return (
      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-stone-900 sm:text-base dark:text-stone-100">{legend}</legend>
        <div className="grid gap-2 sm:grid-cols-3">
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
                  'rounded-xl border px-3 py-2.5 text-left transition duration-200 motion-safe:hover:-translate-y-0.5',
                  selected
                    ? cn('border-transparent ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950', look.ring)
                    : cn('border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900', look.idle),
                  disabled && 'cursor-not-allowed opacity-60'
                )}
              >
                <span className="flex items-center gap-2">
                  <TrustMark id={verdict} className="h-5 w-5" />
                  <span className="font-space-mono text-sm font-bold uppercase tracking-wide">
                    {TRUST_VERDICT_LABEL[verdict]}
                  </span>
                </span>
                <span className="mt-1 block text-xs leading-snug text-stone-600 dark:text-stone-300">
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
    <fieldset className="space-y-3">
      <legend className="text-base font-semibold text-stone-900 sm:text-lg dark:text-stone-100">{legend}</legend>
      <p className="text-sm text-stone-600 dark:text-stone-400">
        Allow, Ask, or Deny. Ask is a real answer — pause when evidence or a person is missing.
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
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
                  ? cn('border-transparent ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950', look.ring)
                  : cn('border-stone-200 dark:border-stone-700', look.idle),
                disabled && 'cursor-not-allowed opacity-60'
              )}
            >
              <span className="relative block aspect-[16/10] bg-stone-900">
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
                  <TrustMark id={verdict} className="h-10 w-10 text-white" />
                  <span className="font-space-mono text-2xl font-bold uppercase tracking-wide">
                    {TRUST_VERDICT_LABEL[verdict]}
                  </span>
                </span>
              </span>
              <span className="block bg-white px-3 py-3 text-sm text-stone-700 dark:bg-stone-900 dark:text-stone-200">
                {TRUST_VERDICT_HINT[verdict]}
              </span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
