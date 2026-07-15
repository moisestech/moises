import { opp } from '@/components/opportunities/opportunityTheme';
import {
  EVIDENCE_STATUS_LABELS,
  type EvidenceStatus,
} from '@/content/opportunities/systemsDossier';
import type { RoleMatchRow } from '@/content/opportunities/types';
import { cn } from '@/lib/utils';

type EvidenceMatrixProps = {
  title: string;
  intro?: string;
  rows: RoleMatchRow[];
  columnHeaders?: { left: string; right: string; status?: string };
  sectionId?: string;
  className?: string;
};

function StatusBadge({ status }: { status?: EvidenceStatus }) {
  if (!status) return null;
  const styles: Record<EvidenceStatus, string> = {
    demonstrated:
      'border-emerald-300/80 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
    transferable:
      'border-sky-300/80 bg-sky-50 text-sky-900 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-200',
    'role-specific':
      'border-violet-300/80 bg-violet-50 text-violet-900 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-200',
    learning:
      'border-amber-300/80 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100',
    todo: 'border-stone-300 bg-stone-100 text-stone-700 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200',
  };
  return (
    <span
      className={cn(
        'inline-flex w-fit rounded-md border px-2 py-0.5 text-[11px] font-semibold tracking-wide',
        styles[status],
      )}
    >
      {EVIDENCE_STATUS_LABELS[status]}
    </span>
  );
}

export function EvidenceMatrix({
  title,
  intro,
  rows,
  columnHeaders = {
    left: 'Requirement',
    right: 'Evidence',
    status: 'Status',
  },
  sectionId = 'evidence',
  className,
}: EvidenceMatrixProps) {
  return (
    <section id={sectionId} className={cn(opp.section, className)} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}

      {/* Mobile: stacked cards */}
      <ul className="mt-8 space-y-3 lg:hidden" aria-label={title}>
        {rows.map((row, index) => (
          <li key={`${row.requirement}-${index}`} className={cn(opp.card, 'p-4')}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className={opp.matrixPrimary}>{row.requirement}</h3>
              <StatusBadge status={row.status} />
            </div>
            <p className={`mt-2 ${opp.matrixSecondary}`}>{row.evidence}</p>
          </li>
        ))}
      </ul>

      {/* Desktop: table */}
      <div className={`mt-8 hidden lg:block ${opp.tableWrap}`}>
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">{title}</caption>
          <thead className={opp.tableHead}>
            <tr>
              <th scope="col" className="px-4 py-3">
                {columnHeaders.left}
              </th>
              <th scope="col" className="px-4 py-3">
                {columnHeaders.right}
              </th>
              <th scope="col" className="px-4 py-3">
                {columnHeaders.status ?? 'Status'}
              </th>
            </tr>
          </thead>
          <tbody className={opp.divide}>
            {rows.map((row, index) => (
              <tr
                key={`${row.requirement}-${index}`}
                className="border-t border-stone-100 dark:border-stone-800"
              >
                <th scope="row" className={opp.tableCellStrong}>
                  {row.requirement}
                </th>
                <td className={opp.tableCell}>{row.evidence}</td>
                <td className={opp.tableCell}>
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
