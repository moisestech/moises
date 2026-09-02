'use client'

import { TRUST_CONTROLS, type TrustControlId, type TrustFailure } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { FullHarnessSvg } from './TrustDiagrams'

export function ControlMatch({
  failures,
  matches,
  onMatch,
}: {
  failures: readonly TrustFailure[]
  matches: Partial<Record<string, TrustControlId>>
  onMatch: (failureId: string, control: TrustControlId) => void
}) {
  const matched = Object.keys(matches).length

  return (
    <div className="space-y-4">
      <FullHarnessSvg />
      <p className="text-sm text-stone-600 dark:text-stone-400">
        One primary control per failure. An eval measures. A guardrail constrains. An approval grants authority.
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {TRUST_CONTROLS.map((control) => (
          <article key={control.id} className="rounded-xl border border-stone-200 bg-stone-50 p-3 dark:border-stone-700 dark:bg-stone-800/50">
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{control.label}</p>
            <p className="text-xs text-stone-500">{control.verb}</p>
            <p className="mt-1 text-xs text-stone-600 dark:text-stone-400">{control.body}</p>
          </article>
        ))}
      </div>
      <div className="space-y-3">
        {failures.map((failure) => (
          <div key={failure.id} className="rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900">
            <p className="text-sm font-semibold">{failure.label}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {TRUST_CONTROLS.map((control) => {
                const active = matches[failure.id] === control.id
                return (
                  <button
                    key={control.id}
                    type="button"
                    onClick={() => onMatch(failure.id, control.id)}
                    aria-pressed={active}
                    className={cn(
                      'rounded-full border px-2.5 py-1 text-[11px] font-semibold',
                      active
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
                        : 'border-stone-200 text-stone-600 dark:border-stone-600'
                    )}
                  >
                    {control.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-stone-500">
        {matched} of {failures.length} matched
        {matched === failures.length ? ' · Checkpoint met' : ''}
      </p>
    </div>
  )
}
