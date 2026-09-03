import {
  TRUST_CASE_A_CARD_NOTE,
  TRUST_CASE_A_LEARNER_NAME,
  TRUST_CENTRAL_QUESTION,
  type TrustCase,
} from '@/content/workshops/trust-is-not-a-vibe'

export function AgentOutputCard({
  caseData,
  peeled,
  compact,
}: {
  caseData: TrustCase
  peeled?: boolean
  compact?: boolean
}) {
  const caseA = caseData.id === 'case-a'
  return (
    <article className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-900">
      <div
        className={
          compact
            ? 'border-b border-stone-100 bg-stone-50 px-3 py-2 dark:border-stone-800 dark:bg-stone-800/60'
            : 'border-b border-stone-100 bg-stone-50 px-4 py-3 dark:border-stone-800 dark:bg-stone-800/60'
        }
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
          {caseA ? TRUST_CASE_A_LEARNER_NAME : caseData.title}
        </p>
        <p className={compact ? 'mt-0.5 text-xs text-stone-600 dark:text-stone-400' : 'mt-1 text-sm text-stone-600 dark:text-stone-400'}>
          {caseA ? TRUST_CASE_A_CARD_NOTE : caseData.domain}
        </p>
        <h3
          className={
            compact
              ? 'mt-1 text-sm font-semibold text-stone-950 dark:text-stone-50'
              : 'mt-3 text-lg font-semibold text-stone-950 sm:text-xl dark:text-stone-50'
          }
        >
          {caseData.output.headline}
        </h3>
        <p className="mt-0.5 text-xs text-stone-500">{caseData.output.confidence}</p>
      </div>
      <dl className={compact ? 'grid gap-px bg-stone-100 dark:bg-stone-800 sm:grid-cols-4' : 'grid gap-px bg-stone-100 dark:bg-stone-800 sm:grid-cols-2'}>
        {caseData.output.claims.map((claim) => (
          <div key={claim.label} className={compact ? 'bg-white px-3 py-2 dark:bg-stone-900' : 'bg-white px-4 py-3 dark:bg-stone-900'}>
            <dt className="text-[10px] uppercase tracking-wide text-stone-500">{claim.label}</dt>
            <dd className="mt-0.5 text-sm font-medium text-stone-900 dark:text-stone-100">{claim.value}</dd>
          </div>
        ))}
      </dl>
      <div className={compact ? 'border-t border-stone-100 px-3 py-1.5 dark:border-stone-800' : 'border-t border-stone-100 px-4 py-3 dark:border-stone-800'}>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">What it wants to do</p>
        <ul className={compact ? 'mt-0.5 space-y-0.5 text-xs text-stone-700 dark:text-stone-300' : 'mt-2 space-y-1 text-sm text-stone-700 dark:text-stone-300'}>
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
