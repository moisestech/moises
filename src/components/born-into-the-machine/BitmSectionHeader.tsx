'use client';

import type { BitmChapterAccent } from '@/config/born-into-the-machine-theme';
import type { BitmConceptualIconKey } from '@/config/born-into-the-machine-theme';
import { BitmConceptualIcon } from '@/components/born-into-the-machine/icons/BitmConceptualIcons';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  title: string;
  iconKey?: BitmConceptualIconKey;
  accent?: BitmChapterAccent;
  className?: string;
};

export function BitmSectionHeader({ eyebrow, title, iconKey, accent, className }: Props) {
  return (
    <header className={cn('mb-8 md:mb-10', className)}>
      <div className="flex items-start gap-4">
        {iconKey ? (
          <span
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border',
              accent?.border ?? 'border-[#dedede] dark:border-neutral-700',
              accent?.tint ?? 'bg-[#faf8f4] dark:bg-neutral-900',
              accent?.iconTint,
            )}
          >
            <BitmConceptualIcon iconKey={iconKey} className="h-5 w-5" />
          </span>
        ) : null}
        <div>
          <p
            className={cn(
              'font-mono text-[10px] uppercase tracking-[0.2em]',
              accent?.eyebrow ?? 'text-[#777777]',
            )}
          >
            {eyebrow}
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#111111] dark:text-neutral-50 sm:text-4xl">
            {title}
          </h2>
        </div>
      </div>
    </header>
  );
}
