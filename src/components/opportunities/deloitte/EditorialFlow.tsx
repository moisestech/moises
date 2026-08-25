import { cn } from '@/lib/utils';
import { deloitteUi } from '@/components/opportunities/deloitte/deloitteTheme';

type EditorialFlowProps = {
  steps: readonly string[];
  className?: string;
};

/** Accessible flow that stacks on mobile and reads left-to-right on desktop. */
export function EditorialFlow({ steps, className }: EditorialFlowProps) {
  return (
    <ol
      className={cn(
        'flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-3',
        className,
      )}
    >
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="inline-flex min-h-11 items-center border border-stone-800 bg-white px-3 py-2 text-sm font-semibold text-stone-950 dark:border-stone-200 dark:bg-stone-950 dark:text-stone-50">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span className={cn('hidden font-mono text-sm sm:inline', deloitteUi.limeText)} aria-hidden>
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
