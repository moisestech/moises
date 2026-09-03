'use client'

import { useState } from 'react'
import { HiArrowLongRight, HiArrowUturnLeft } from 'react-icons/hi2'
import {
  getTrustRole,
  TRUST_EVAL_ANATOMY,
  type TrustEvalStageId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE, TRUST_SCROLL_MT } from './trust-tokens'

/**
 * Cases, criteria, graders, evidence, decision — one message per node, with the
 * definition revealed on selection rather than printed five times over.
 *
 * The diagram is HTML rather than a drawn image because it carries exact
 * information and has to reflow at 390px, where the row becomes a column.
 */
export function TrustEvalAnatomy({
  showOwners,
  className,
}: {
  /** Ownership tags. Useful presenting to a room; noise for a single learner. */
  showOwners?: boolean
  className?: string
}) {
  const [openId, setOpenId] = useState<TrustEvalStageId>(TRUST_EVAL_ANATOMY[0].id)
  const open = TRUST_EVAL_ANATOMY.find((stage) => stage.id === openId) ?? TRUST_EVAL_ANATOMY[0]
  const lead = getTrustRole(open.lead)
  const LeadIcon = ROLE_ICON[open.lead]
  const leadTone = TRUST_ROLE_TONE[open.lead]

  return (
    <figure className={cn('m-0', className)}>
      <ol className="flex flex-col gap-1.5 sm:flex-row sm:items-stretch" role="list">
        {TRUST_EVAL_ANATOMY.map((stage, index) => {
          const selected = stage.id === openId
          const stageLead = TRUST_ROLE_TONE[stage.lead]
          const StageIcon = ROLE_ICON[stage.lead]
          return (
            <li key={stage.id} className="flex items-center gap-1.5 sm:flex-1">
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setOpenId(stage.id)}
                className={cn(
                  'w-full rounded-xl border px-3 py-2.5 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 sm:h-full dark:focus-visible:ring-offset-stone-950',
                  TRUST_SCROLL_MT,
                  selected
                    ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-950'
                    : 'border-stone-200 bg-white hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900'
                )}
              >
                <span
                  className={cn(
                    'font-space-mono text-[10px] uppercase tracking-[0.16em]',
                    selected ? 'text-current/70' : 'text-stone-500'
                  )}
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    'mt-0.5 block text-sm font-semibold',
                    selected ? 'text-current' : 'text-stone-950 dark:text-stone-50'
                  )}
                >
                  {stage.term}
                </span>
                <span
                  className={cn(
                    'mt-0.5 block text-xs leading-snug',
                    selected ? 'text-current/85' : 'text-stone-600 dark:text-stone-400'
                  )}
                >
                  {stage.question}
                </span>
                {showOwners ? (
                  <span
                    className={cn(
                      'mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium',
                      selected ? 'text-current/80' : stageLead.icon
                    )}
                  >
                    <StageIcon className="h-3 w-3 shrink-0" aria-hidden />
                    {getTrustRole(stage.lead)?.label} leads
                  </span>
                ) : null}
                {selected ? <span className="sr-only"> (showing definition)</span> : null}
              </button>
              {index < TRUST_EVAL_ANATOMY.length - 1 ? (
                <HiArrowLongRight
                  className="hidden h-4 w-4 shrink-0 text-stone-400 sm:block"
                  aria-hidden
                />
              ) : null}
            </li>
          )
        })}
      </ol>

      <p className="mt-2 flex items-center gap-1.5 text-xs text-stone-500">
        <HiArrowUturnLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
        Production failures come back as new cases, so the last step feeds the first.
      </p>

      <div
        className="mt-3 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 dark:border-stone-700 dark:bg-stone-900/60"
        aria-live="polite"
      >
        <p className="text-sm font-semibold text-stone-950 dark:text-stone-50">{open.term}</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{open.definition}</p>
        <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          <span className="font-medium text-stone-800 dark:text-stone-200">On this card. </span>
          {open.onThisCase}
        </p>
        {lead ? (
          <p className={cn('mt-2 flex items-center gap-1.5 text-xs font-medium', leadTone.icon)}>
            <LeadIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {lead.label} leads
            <span className="font-normal text-stone-500">
              · with {open.support.map((id) => getTrustRole(id)?.label).join(' and ')}
            </span>
          </p>
        ) : null}
      </div>
    </figure>
  )
}
