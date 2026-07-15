import type { FieldCompletenessStatus } from '@/content/grants/pioneer-works-residency-2027/shared';

const LABELS: Record<FieldCompletenessStatus, string> = {
  complete: 'Complete',
  incomplete: 'Incomplete',
  optional: 'Optional',
  'verify-in-form': 'Verify in application form',
  'draft-ready': 'Draft ready',
};

const STYLES: Record<FieldCompletenessStatus, string> = {
  complete: 'border-[#3d5a3a] text-[#3d5a3a] bg-[#a3be8c]/20',
  'draft-ready': 'border-[#3d5a3a] text-[#3d5a3a] bg-[#a3be8c]/20',
  incomplete: 'border-[#8b3a2a]/60 text-[#8b3a2a]',
  optional: 'border-stone-400 text-stone-600 dark:text-stone-400',
  'verify-in-form': 'border-amber-700/70 text-amber-900 dark:text-amber-200 bg-amber-50/80 dark:bg-amber-950/30',
};

export function PrivateFieldStatus({ status }: { status: FieldCompletenessStatus }) {
  return (
    <span
      className={`inline-flex text-[10px] font-semibold uppercase tracking-wide border px-2 py-0.5 ${STYLES[status]}`}
    >
      {LABELS[status]}
    </span>
  );
}
