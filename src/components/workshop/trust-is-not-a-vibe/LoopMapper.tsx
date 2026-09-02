'use client'

import { TRUST_LOOP, type TrustFailure, type TrustLoopStage } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_STAGE_CLASS } from './trust-tokens'
import { SimpleLoopSvg } from './TrustDiagrams'

export function LoopMapper({
  failures,
  placements,
  onPlace,
}: {
  failures: readonly TrustFailure[]
  placements: Partial<Record<string, TrustLoopStage>>
  onPlace: (failureId: string, stage: TrustLoopStage) => void
}) {
  const placed = Object.keys(placements).length

  return (
    <div className="space-y-4">
      <SimpleLoopSvg />
      <p className="text-sm text-stone-600 dark:text-stone-400">
        Place at least three failures. Visible labels first; technical names sit on the token.
      </p>
      <div className="space-y-3">
        {failures.map((failure) => (
          <div key={failure.id} className="rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900">
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{failure.label}</p>
            <p className="text-xs text-stone-500">
              {failure.visible} · {failure.technical}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {TRUST_LOOP.map((node) => {
                const active = placements[failure.id] === node.id
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => onPlace(failure.id, node.id)}
                    aria-pressed={active}
                    className={cn(
                      'rounded-full border px-2.5 py-1 text-[11px] font-semibold',
                      active ? TRUST_STAGE_CLASS[node.id] : 'border-stone-200 text-stone-600 dark:border-stone-600'
                    )}
                  >
                    <span className="sr-only">{node.technical}. </span>
                    {node.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-stone-500">
        {placed} placed · {placed >= 3 ? 'Checkpoint met' : `Place ${3 - placed} more`}
      </p>
    </div>
  )
}
