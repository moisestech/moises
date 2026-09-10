'use client'

import {
  TRUST_CASE_A_CARD_NOTE,
  TRUST_CASE_A_LEARNER_NAME,
  TRUST_CENTRAL_QUESTION,
  type TrustCase,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { usePresentationMode } from './TrustPresentation'

export function AgentOutputCard({
  caseData,
  peeled,
  compact,
  frameless,
}: {
  caseData: TrustCase
  peeled?: boolean
  compact?: boolean
  /** Inside `TrustSpecimen` the window supplies the border and the naming. */
  frameless?: boolean
}) {
  const caseA = caseData.id === 'case-a'
  const { present } = usePresentationMode()
  return (
    <article
      className={
        frameless
          ? 'bg-white dark:bg-stone-900'
          : 'overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-900'
      }
    >
      <div
        className={
          compact
            ? 'border-b border-stone-100 bg-stone-50 px-3 py-2 dark:border-stone-800 dark:bg-stone-800/60'
            : present
              ? 'border-b border-stone-100 bg-stone-50 px-6 py-5 dark:border-stone-800 dark:bg-stone-800/60'
              : 'border-b border-stone-100 bg-stone-50 px-4 py-3 dark:border-stone-800 dark:bg-stone-800/60'
        }
      >
        {frameless ? null : (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
              {caseA ? TRUST_CASE_A_LEARNER_NAME : caseData.title}
            </p>
            <p className={compact ? 'mt-0.5 text-xs text-stone-600 dark:text-stone-400' : 'mt-1 text-sm text-stone-600 dark:text-stone-400'}>
              {caseA ? TRUST_CASE_A_CARD_NOTE : caseData.domain}
            </p>
          </>
        )}
        <h3
          className={cn(
            compact
              ? 'text-sm font-semibold text-stone-950 dark:text-stone-50'
              : present
                ? 'text-3xl font-semibold leading-snug text-stone-950 sm:text-4xl dark:text-stone-50'
                : 'text-lg font-semibold text-stone-950 sm:text-xl dark:text-stone-50',
            frameless ? null : compact ? 'mt-1' : 'mt-3'
          )}
        >
          {caseData.output.headline}
        </h3>
        <p
          className={cn(
            'mt-1.5 inline-flex rounded-full bg-stone-200/80 px-2 py-0.5 font-semibold uppercase tracking-wide text-stone-700 dark:bg-stone-700 dark:text-stone-200',
            present && !compact ? 'text-base' : 'text-[10px]'
          )}
        >
          {caseData.output.confidence}
        </p>
      </div>
      {/* Compact renders inside narrow columns, where a claims grid would truncate. */}
      {compact ? null : (
        <dl className="grid gap-px bg-stone-100 sm:grid-cols-2 dark:bg-stone-800">
          {caseData.output.claims.map((claim) => (
            <div key={claim.label} className={cn('bg-white dark:bg-stone-900', present ? 'px-6 py-5' : 'px-4 py-3')}>
              <dt
                className={cn(
                  'uppercase tracking-wide text-stone-500',
                  present ? 'text-base' : 'text-[10px]'
                )}
              >
                {claim.label}
              </dt>
              <dd
                className={cn(
                  'mt-1 font-medium text-stone-900 dark:text-stone-100',
                  present ? 'text-xl sm:text-2xl' : 'text-sm'
                )}
              >
                {claim.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      <div
        className={
          compact
            ? 'border-t border-stone-100 px-3 py-1.5 dark:border-stone-800'
            : present
              ? 'border-t border-stone-100 px-6 py-5 dark:border-stone-800'
              : 'border-t border-stone-100 px-4 py-3 dark:border-stone-800'
        }
      >
        <p
          className={cn(
            'font-semibold uppercase tracking-wide text-stone-500',
            present && !compact ? 'text-base' : 'text-[11px]'
          )}
        >
          What it wants to do
        </p>
        <ul
          className={
            compact
              ? 'mt-0.5 space-y-0.5 text-xs text-stone-700 dark:text-stone-300'
              : present
                ? 'mt-3 space-y-2 text-xl text-stone-700 sm:text-2xl dark:text-stone-300'
                : 'mt-2 space-y-1 text-sm text-stone-700 dark:text-stone-300'
          }
        >
          {caseData.output.proposedActions.map((action) => (
            <li key={action}>→ {action}</li>
          ))}
        </ul>
      </div>
      {peeled ? (
        <p className="border-t border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          Looks right. {TRUST_CENTRAL_QUESTION}
        </p>
      ) : null}
    </article>
  )
}
