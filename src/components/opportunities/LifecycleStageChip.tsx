import { LIFECYCLE_META, isLifecycleStage } from '@/content/opportunities/lifecycle';
import { cn } from '@/lib/utils';

export function LifecycleStageChip({
  stage,
  className,
  showIcon = true,
}: {
  stage: string;
  className?: string;
  showIcon?: boolean;
}) {
  if (!isLifecycleStage(stage)) {
    return (
      <span
        className={cn(
          'inline-flex w-fit items-center gap-1 rounded-md border border-stone-300 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-600 dark:border-stone-600 dark:text-stone-300',
          className,
        )}
      >
        {stage}
      </span>
    );
  }
  const meta = LIFECYCLE_META[stage];
  const Icon = meta.icon;
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
        meta.textClass,
        meta.bgClass,
        meta.borderClass,
        className,
      )}
    >
      {showIcon ? <Icon className="h-3 w-3" aria-hidden /> : null}
      {stage}
    </span>
  );
}
