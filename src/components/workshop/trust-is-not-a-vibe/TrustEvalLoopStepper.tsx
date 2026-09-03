'use client'

import { useState } from 'react'
import { HiArrowLongRight, HiOutlineArrowPath } from 'react-icons/hi2'
import { getTrustRole, TRUST_EVAL_LOOP } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE, TRUST_SCROLL_MT } from './trust-tokens'

/**
 * Evals are not a launch gate you pass once. Stepping through makes the cycle
 * legible — and the compare step is where the loop turns back on itself rather
 * than ending.
 */
export function TrustEvalLoopStepper({ showOwners, className }: { showOwners?: boolean; className?: string }) {
  const [step, setStep] = useState(0)
  const stage = TRUST_EVAL_LOOP[step]
  const lead = getTrustRole(stage.lead)
  const LeadIcon = ROLE_ICON[stage.lead]
  const tone = TRUST_ROLE_TONE[stage.lead]
  const last = step === TRUST_EVAL_LOOP.length - 1

  return (
    <div className={cn('space-y-3', className)}>
      <ol className="flex flex-wrap gap-1.5" role="list">
        {TRUST_EVAL_LOOP.map((entry, index) => {
          const active = index === step
          const seen = index < step
          return (
            <li key={entry.id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setStep(index)}
                className={cn(
                  'rounded-lg border px-2 py-1 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                  TRUST_SCROLL_MT,
                  active
                    ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-950'
                    : seen
                      ? 'border-stone-400 text-stone-700 dark:border-stone-500 dark:text-stone-300'
                      : 'border-stone-200 text-stone-500 dark:border-stone-700'
                )}
              >
                {index + 1}. {entry.label}
              </button>
            </li>
          )
        })}
      </ol>

      <div
        className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 dark:border-stone-700 dark:bg-stone-900/60"
        aria-live="polite"
      >
        <p className="text-sm font-semibold text-stone-950 dark:text-stone-50">{stage.label}</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{stage.body}</p>
        {showOwners && lead ? (
          <p className={cn('mt-2 flex items-center gap-1.5 text-xs font-medium', tone.icon)}>
            <LeadIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {lead.label} leads this step
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setStep(last ? 0 : step + 1)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium transition hover:border-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-stone-600 dark:focus-visible:ring-offset-stone-950"
        >
          {last ? (
            <>
              <HiOutlineArrowPath className="h-4 w-4" aria-hidden />
              Run it again
            </>
          ) : (
            <>
              Next step
              <HiArrowLongRight className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>
        {last ? (
          <p className="text-xs text-stone-500">
            The loop does not end. New production failures become new cases.
          </p>
        ) : null}
      </div>
    </div>
  )
}
