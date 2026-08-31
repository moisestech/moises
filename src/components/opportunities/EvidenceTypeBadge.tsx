import { cn } from '@/lib/utils';
import type { EvidenceType } from '@/content/opportunities/types';

export const EVIDENCE_TYPE_LABEL: Record<EvidenceType, string> = {
  'production-experience': 'Production experience',
  'shipped-product': 'Shipped product',
  'reference-implementation': 'Reference implementation',
  'fixture-prototype': 'Fixture prototype',
  'teaching-instrument': 'Teaching instrument',
  'proposed-approach': 'Proposed approach',
};

const STYLES: Record<EvidenceType, string> = {
  'production-experience':
    'border-emerald-300/80 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
  'shipped-product':
    'border-sky-300/80 bg-sky-50 text-sky-900 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-200',
  'reference-implementation':
    'border-violet-300/80 bg-violet-50 text-violet-900 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-200',
  'fixture-prototype':
    'border-amber-300/80 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100',
  'teaching-instrument':
    'border-cyan-300/80 bg-cyan-50 text-cyan-900 dark:border-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-200',
  'proposed-approach':
    'border-stone-300 bg-stone-100 text-stone-700 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200',
};

export function EvidenceTypeBadge({
  type,
  className,
}: {
  type: EvidenceType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex w-fit rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
        STYLES[type],
        className,
      )}
    >
      {EVIDENCE_TYPE_LABEL[type]}
    </span>
  );
}
