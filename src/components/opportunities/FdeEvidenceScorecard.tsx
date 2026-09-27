import Link from 'next/link'
import {
  FDE_EVIDENCE,
  FDE_EVIDENCE_STATUS_LABEL,
  type FdeEvidenceStatus,
  type FdeScorecardItem,
} from '@/content/fde-evidence'
import { opp } from '@/components/opportunities/opportunityTheme'
import { cn } from '@/lib/utils'

function statusTone(status: FdeEvidenceStatus) {
  if (status === 'shipped') return 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'
  if (status === 'in_progress') return 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200'
  return 'border-stone-300 bg-stone-100 text-stone-700 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300'
}

function ScorecardRow({ item }: { item: FdeScorecardItem }) {
  const label = FDE_EVIDENCE_STATUS_LABEL[item.status]
  return (
    <article
      id={item.id}
      className="grid gap-3 border-b border-stone-200 px-4 py-4 last:border-b-0 dark:border-stone-800 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start"
    >
      <div>
        <h3 className={opp.h3}>{item.label}</h3>
        {item.note ? <p className={cn(opp.muted, 'mt-1')}>{item.note}</p> : null}
        {item.evidence.length > 0 ? (
          <ul className="mt-2 flex flex-col gap-1">
            {item.evidence.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('/') ? (
                  <Link href={link.href} className={opp.linkAccent}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className={opp.linkAccent} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <p
        className={cn(
          'inline-flex h-fit w-fit items-center rounded-full border px-2.5 py-1 text-xs font-semibold',
          statusTone(item.status)
        )}
      >
        {label}
      </p>
    </article>
  )
}

export function FdeEvidenceScorecard({ className }: { className?: string }) {
  const { flagship, items, updated } = FDE_EVIDENCE

  return (
    <section aria-labelledby="fde-scorecard-heading" className={className}>
      <header className="mb-6">
        <p className={opp.label}>Flagship build</p>
        <h2 id="fde-scorecard-heading" className={cn(opp.h2, 'mt-2')}>
          {flagship.name}
        </h2>
        <p className={cn(opp.body, 'mt-2')}>{flagship.deployment}</p>
        <p className={cn(opp.subtle, 'mt-3')}>
          Updated {updated}.{' '}
          <a href={flagship.repo} className={opp.linkAccent} target="_blank" rel="noreferrer">
            Repository
          </a>
        </p>
      </header>
      <div className={opp.tableWrap}>
        {items.map((item) => (
          <ScorecardRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
