import { cn } from '@/lib/utils';
import type { StudyStatus } from '@/content/post-ai-readymades/postAiReadymades';

const statusStyles: Record<StudyStatus, string> = {
  'Daily Selection': 'border-emerald-700/30 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200',
  'Website Candidate': 'border-sky-700/30 bg-sky-50 text-sky-900 dark:bg-sky-950/30 dark:text-sky-200',
  'Physical Build Candidate': 'border-orange-700/30 bg-orange-50 text-orange-900 dark:bg-orange-950/30 dark:text-orange-200',
  'Content Only': 'border-neutral-400/40 bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300',
  'Existing Work / Study Anchor': 'border-neutral-800/20 bg-neutral-50 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200',
  'Daily Selection Placeholder': 'border-dashed border-neutral-400 bg-transparent text-neutral-600 dark:text-neutral-400',
};

export function StatusChip({ status }: { status: StudyStatus }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]',
        statusStyles[status],
      )}
    >
      {status}
    </span>
  );
}
