'use client'

import type { IconType } from 'react-icons'
import {
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlinePause,
  HiOutlineScale,
} from 'react-icons/hi2'
import { TRUST_LOOP, type TrustFailure, type TrustLoopStage } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_STAGE_CLASS } from './trust-tokens'
import { SimpleLoopSvg } from './TrustDiagrams'

const STAGE_ICONS: Record<TrustLoopStage, IconType> = {
  observe: HiOutlineEye,
  decide: HiOutlineScale,
  act: HiOutlineBolt,
  check: HiOutlineCheckCircle,
  stop: HiOutlinePause,
}

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
      <div className="grid gap-2 sm:grid-cols-5">
        {TRUST_LOOP.map((node) => {
          const Icon = STAGE_ICONS[node.id]
          return (
            <article
              key={node.id}
              className={cn(
                'rounded-xl border px-3 py-2 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5',
                TRUST_STAGE_CLASS[node.id],
              )}
            >
              <p className="flex items-center gap-1.5 text-xs font-bold">
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {node.label}
              </p>
              <p className="mt-1 text-[11px] opacity-80">{node.technical}</p>
            </article>
          )
        })}
      </div>
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
                const Icon = STAGE_ICONS[node.id]
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => onPlace(failure.id, node.id)}
                    aria-pressed={active}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold motion-safe:transition-transform motion-safe:hover:-translate-y-0.5',
                      active ? TRUST_STAGE_CLASS[node.id] : 'border-stone-200 text-stone-600 dark:border-stone-600',
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden />
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
