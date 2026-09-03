'use client'

import { useState } from 'react'
import { HiOutlineExclamationTriangle } from 'react-icons/hi2'
import {
  getTrustRole,
  TRUST_GRADERS,
  TRUST_JUDGE_CAVEAT,
  TRUST_SCORING_APPROACHES,
  type TrustGraderId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE, TRUST_SCROLL_MT } from './trust-tokens'

/**
 * Four graders, each with something it is good at and something it cannot see.
 * Shown as a set of claims rather than a table, because the limitation is the
 * teaching point and a table cell buries it.
 */
export function TrustGraderMatrix({ showOwners, className }: { showOwners?: boolean; className?: string }) {
  const [openId, setOpenId] = useState<TrustGraderId | null>(null)

  return (
    <div className={cn('space-y-2', className)}>
      <ul className="grid gap-2 sm:grid-cols-2">
        {TRUST_GRADERS.map((grader) => {
          const open = openId === grader.id
          const tone = TRUST_ROLE_TONE[grader.lead]
          const LeadIcon = ROLE_ICON[grader.lead]
          return (
            <li key={grader.id}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : grader.id)}
                className={cn(
                  'h-full w-full rounded-xl border px-3 py-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                  TRUST_SCROLL_MT,
                  open
                    ? 'border-stone-400 bg-stone-50 dark:border-stone-500 dark:bg-stone-900/60'
                    : 'border-stone-200 bg-white hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900'
                )}
              >
                <span className="block text-sm font-semibold text-stone-950 dark:text-stone-50">
                  {grader.label}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-stone-600 dark:text-stone-400">
                  Good for: {grader.bestFor}
                </span>
                <span
                  className={cn(
                    'mt-1.5 flex items-start gap-1.5 text-xs leading-snug',
                    open ? 'text-amber-800 dark:text-amber-300' : 'text-stone-500'
                  )}
                >
                  <HiOutlineExclamationTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                  {open ? grader.limitation : 'Cannot see everything'}
                </span>
                {showOwners ? (
                  <span className={cn('mt-1.5 flex items-center gap-1 text-[11px] font-medium', tone.icon)}>
                    <LeadIcon className="h-3 w-3 shrink-0" aria-hidden />
                    {getTrustRole(grader.lead)?.label} owns this one
                  </span>
                ) : null}
                {open ? (
                  <span className="mt-1.5 block text-[11px] text-stone-500">
                    Settles: {grader.handles.map((id) => TRUST_SCORING_APPROACHES.find((a) => a.id === id)?.label).join(', ')}
                  </span>
                ) : null}
              </button>
            </li>
          )
        })}
      </ul>
      <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">{TRUST_JUDGE_CAVEAT}</p>
    </div>
  )
}
