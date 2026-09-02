'use client'

import type { IconType } from 'react-icons'
import {
  HiOutlineArrowUturnLeft,
  HiOutlineCalculator,
  HiOutlineHandRaised,
  HiOutlineLink,
  HiOutlineLockClosed,
  HiOutlineQueueList,
} from 'react-icons/hi2'
import { TRUST_CONTROLS, type TrustControlId, type TrustFailure } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { FullHarnessSvg } from './TrustDiagrams'
import { TrustMissingStillNote } from './TrustMissingStill'
import { TRUST_CONTROL_CLASS } from './trust-tokens'

const CONTROL_ICONS: Record<TrustControlId, IconType> = {
  ground: HiOutlineLink,
  validate: HiOutlineCalculator,
  restrict: HiOutlineLockClosed,
  approve: HiOutlineHandRaised,
  trace: HiOutlineQueueList,
  recover: HiOutlineArrowUturnLeft,
}

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
      <TrustMissingStillNote asset="controlCards" />
      <TrustMissingStillNote asset="fullHarness" />
      <FullHarnessSvg />
      <p className="text-sm text-stone-600 dark:text-stone-400">
        One primary control per failure. An eval measures. A guardrail constrains. An approval grants authority.
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {TRUST_CONTROLS.map((control) => {
          const Icon = CONTROL_ICONS[control.id]
          return (
            <article
              key={control.id}
              className={cn(
                'rounded-xl border p-3 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5',
                TRUST_CONTROL_CLASS[control.id],
              )}
            >
              <p className="flex items-center gap-2 text-sm font-bold">
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {control.label}
              </p>
              <p className="text-xs opacity-80">{control.verb}</p>
              <p className="mt-1 text-xs opacity-80">{control.body}</p>
            </article>
          )
        })}
      </div>
      <div className="space-y-3">
        {failures.map((failure) => (
          <div key={failure.id} className="rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900">
            <p className="text-sm font-semibold">{failure.label}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {TRUST_CONTROLS.map((control) => {
                const active = matches[failure.id] === control.id
                const Icon = CONTROL_ICONS[control.id]
                return (
                  <button
                    key={control.id}
                    type="button"
                    onClick={() => onMatch(failure.id, control.id)}
                    aria-pressed={active}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold motion-safe:transition-transform motion-safe:hover:-translate-y-0.5',
                      active ? TRUST_CONTROL_CLASS[control.id] : 'border-stone-200 text-stone-600 dark:border-stone-600',
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden />
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
