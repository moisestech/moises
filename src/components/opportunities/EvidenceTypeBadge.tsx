import { Check } from 'lucide-react';
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

/** Shape / line treatments — not the lifecycle hue system. */
const TREATMENTS: Record<EvidenceType, string> = {
  'production-experience': 'border-solid bg-stone-800 text-stone-50 dark:bg-stone-200 dark:text-stone-900',
  'shipped-product':
    'border-solid bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-100',
  'reference-implementation':
    'border-solid bg-transparent text-stone-700 dark:text-stone-200',
  'fixture-prototype':
    'border-dotted bg-transparent text-stone-700 dark:text-stone-200',
  'teaching-instrument':
    'border-solid bg-[repeating-linear-gradient(-45deg,transparent,transparent_3px,rgba(120,113,108,0.18)_3px,rgba(120,113,108,0.18)_6px)] text-stone-800 dark:text-stone-100',
  'proposed-approach':
    'border-dashed bg-transparent text-stone-600 dark:text-stone-300',
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
        'inline-flex w-fit items-center gap-1 rounded-md border-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
        TREATMENTS[type],
        className,
      )}
    >
      {type === 'shipped-product' ? <Check className="h-3 w-3" aria-hidden /> : null}
      {EVIDENCE_TYPE_LABEL[type]}
    </span>
  );
}

export const MATURITY_LEGEND: { type: EvidenceType; mark: string }[] = [
  { type: 'production-experience', mark: 'solid fill' },
  { type: 'shipped-product', mark: 'check' },
  { type: 'reference-implementation', mark: 'outline' },
  { type: 'fixture-prototype', mark: 'dotted' },
  { type: 'teaching-instrument', mark: 'striped' },
  { type: 'proposed-approach', mark: 'dashed' },
];
