'use client'

import type { TrustRubricKey, TrustRubricScore } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import type { TrustRubric } from './useTrustProgress'
import { rubricTotal } from './useTrustProgress'

const DIMENSIONS: readonly {
  key: TrustRubricKey
  label: string
  levels: readonly [string, string, string]
}[] = [
  {
    key: 'evidence',
    label: 'Evidence',
    levels: ['Accepts claims', 'Notices uncertainty', 'Verifies source support'],
  },
  {
    key: 'authority',
    label: 'Authority',
    levels: ['Ignores permissions', 'Notices risk', 'Defines an approval boundary'],
  },
  {
    key: 'impact',
    label: 'Impact',
    levels: ['Focuses on output', 'Names an affected user', 'Connects action to consequence'],
  },
  {
    key: 'control',
    label: 'Control',
    levels: ['Offers no safeguard', 'Names a vague safeguard', 'Matches a specific control to failure'],
  },
]

export function TransferRubric({
  rubric,
  onScore,
}: {
  rubric: TrustRubric
  onScore: (key: TrustRubricKey, score: TrustRubricScore) => void
}) {
  const total = rubricTotal(rubric)
  const authorityOk = (rubric.authority ?? 0) > 0
  const targetMet = total >= 6 && authorityOk

  return (
    <div className="space-y-4">
      <p className="text-sm text-stone-600 dark:text-stone-400">
        Eight-point exercise target: 6/8 with no zero in Authority. This is a practice target, not a measured cohort
        result.
      </p>
      {DIMENSIONS.map((dimension) => (
        <fieldset key={dimension.key} className="rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900">
          <legend className="px-1 text-sm font-semibold">{dimension.label}</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {dimension.levels.map((label, score) => {
              const value = score as TrustRubricScore
              const active = rubric[dimension.key] === value
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => onScore(dimension.key, value)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-lg border px-3 py-2 text-left text-xs',
                    active
                      ? 'border-cyan-400 bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-100'
                      : 'border-stone-200 text-stone-600 dark:border-stone-600 dark:text-stone-300'
                  )}
                >
                  <span className="block font-bold">{value}</span>
                  {label}
                </button>
              )
            })}
          </div>
        </fieldset>
      ))}
      <p className={cn('text-sm font-medium', targetMet ? 'text-emerald-700 dark:text-emerald-300' : 'text-stone-600 dark:text-stone-400')}>
        Score {total}/8{rubric.authority === 0 ? ' · Authority is still zero' : ''}
        {targetMet ? ' · Exercise target met' : ''}
      </p>
    </div>
  )
}
