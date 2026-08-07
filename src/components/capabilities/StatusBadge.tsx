import { cn } from '@/lib/utils';
import type { CapabilitySkillStatus } from '@/content/capabilities';
import { CAPABILITY_STATUS_LABEL } from '@/content/capabilities';

type StatusBadgeProps = {
  status: CapabilitySkillStatus;
  /** Pillar hex color for proven fill / building outline. */
  color: string;
  className?: string;
};

export function StatusBadge({ status, color, className }: StatusBadgeProps) {
  const label = CAPABILITY_STATUS_LABEL[status];

  if (status === 'proven') {
    return (
      <span
        className={cn(
          'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white',
          className,
        )}
        style={{ backgroundColor: color }}
      >
        {label}
      </span>
    );
  }

  if (status === 'building') {
    return (
      <span
        className={cn(
          'inline-flex items-center rounded-full border border-dashed bg-transparent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
          className,
        )}
        style={{ borderColor: color, color }}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-stone-300 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-500 dark:border-stone-600 dark:text-stone-400',
        className,
      )}
    >
      {label}
    </span>
  );
}
