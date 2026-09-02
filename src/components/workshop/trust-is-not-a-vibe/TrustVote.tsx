'use client'

import type { TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'
import { TRUST_VERDICT_CLASS, TRUST_VERDICT_HINT, TRUST_VERDICT_LABEL } from './trust-tokens'

const VERDICTS: TrustVerdict[] = ['allow', 'ask', 'deny']

export function TrustVote({
  value,
  onChange,
  legend,
  disabled,
}: {
  value: TrustVerdict | null
  onChange: (verdict: TrustVerdict) => void
  legend: string
  disabled?: boolean
}) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-stone-900 dark:text-stone-100">{legend}</legend>
      <div className="grid gap-2 sm:grid-cols-3">
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
                'rounded-xl border px-4 py-3 text-left transition',
                selected
                  ? TRUST_VERDICT_CLASS[verdict]
                  : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200',
                disabled && 'cursor-not-allowed opacity-60'
              )}
            >
              <span className="flex items-center gap-2 text-sm font-bold">
                <TrustMark id={verdict} className="h-5 w-5" />
                {TRUST_VERDICT_LABEL[verdict]}
              </span>
              <span className="mt-1 block text-xs opacity-80">{TRUST_VERDICT_HINT[verdict]}</span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
