'use client'

import { TRUST_CASE_A, TRUST_CENTRAL_QUESTION, TRUST_FIXTURE_LABEL } from '@/content/workshops/trust-is-not-a-vibe'
import type { TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_VERDICT_LABEL } from './trust-tokens'

export function TrustCaseContext({
  vote,
  className,
}: {
  vote?: TrustVerdict | null
  className?: string
}) {
  return (
    <aside
      className={cn(
        'rounded-xl border border-stone-200 bg-white px-4 py-4 dark:border-stone-700 dark:bg-stone-900',
        className
      )}
    >
      <p className="font-space-mono text-[11px] uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
        The object · {TRUST_CASE_A.title} · {TRUST_FIXTURE_LABEL}
      </p>
      <p className="mt-2 text-base font-semibold text-stone-950 dark:text-stone-50">{TRUST_CASE_A.output.headline}</p>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">The agent wants to:</p>
      <ul className="mt-1 space-y-1 text-sm text-stone-800 dark:text-stone-200">
        {TRUST_CASE_A.output.proposedActions.map((action) => (
          <li key={action}>→ {action}</li>
        ))}
      </ul>
      <p className="mt-3 text-sm font-medium text-stone-900 dark:text-stone-100">{TRUST_CENTRAL_QUESTION}</p>
      {vote ? (
        <p className="mt-2 text-xs uppercase tracking-wide text-stone-500">
          Saved vote · {TRUST_VERDICT_LABEL[vote]}
        </p>
      ) : null}
    </aside>
  )
}
