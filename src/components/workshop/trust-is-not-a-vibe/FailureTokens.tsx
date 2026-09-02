'use client'

import type { TrustFailure } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

export function FailureTokens({
  failures,
  selected,
  onToggle,
  revealed,
  onReveal,
  minNamed = 3,
}: {
  failures: readonly TrustFailure[]
  selected: string[]
  onToggle: (id: string) => void
  revealed: boolean
  onReveal: () => void
  minNamed?: number
}) {
  return (
    <div className="space-y-4">
      {!revealed ? (
        <button
          type="button"
          onClick={onReveal}
          className="inline-flex items-center rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-cyan-500 dark:text-stone-950"
        >
          Reveal the seeded failures
        </button>
      ) : (
        <>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Name at least {minNamed}. “Hallucination” alone is not enough.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {failures.map((failure) => {
              const active = selected.includes(failure.id)
              return (
                <button
                  key={failure.id}
                  type="button"
                  onClick={() => onToggle(failure.id)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-xl border p-4 text-left',
                    active
                      ? 'border-red-400 bg-red-50 dark:bg-red-950/30'
                      : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900'
                  )}
                >
                  <p className="text-[10px] uppercase tracking-wide text-stone-500">{failure.visible}</p>
                  <p className="mt-1 text-sm font-semibold text-stone-950 dark:text-stone-50">{failure.label}</p>
                  <p className="mt-2 text-xs text-stone-600 dark:text-stone-400">{failure.detail}</p>
                  <p className="mt-2 text-[11px] text-stone-400">{failure.technical}</p>
                </button>
              )
            })}
          </div>
          <p className="text-xs text-stone-500">
            {selected.length} selected · {selected.length >= minNamed ? 'Checkpoint met' : `Select ${minNamed - selected.length} more`}
          </p>
        </>
      )}
    </div>
  )
}
