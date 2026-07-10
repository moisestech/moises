import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { readymadesAccent } from '@/config/post-ai-readymades-theme';

type ReadymadesSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
};

export function ReadymadesSectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
  className,
}: ReadymadesSectionHeaderProps) {
  return (
    <div className={cn('mb-8', className)}>
      <div className="mb-4 flex items-center gap-3">
        {Icon ? (
          <span
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#dedede]/80',
              readymadesAccent.iconBg,
              readymadesAccent.iconText,
            )}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </span>
        ) : null}
        <p className={cn('font-mono text-xs uppercase tracking-[0.22em]', readymadesAccent.eyebrow)}>{eyebrow}</p>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#777777] dark:text-neutral-300">{description}</p>
      ) : null}
    </div>
  );
}
