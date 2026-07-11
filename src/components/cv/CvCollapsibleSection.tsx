'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type CvCollapsibleSectionProps = {
  id: string;
  title: string;
  icon?: LucideIcon;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
};

export function CvCollapsibleSection({
  id,
  title,
  icon: Icon,
  defaultOpen = true,
  children,
  className,
}: CvCollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section id={id} className={cn('scroll-mt-28 border-b border-stone-200 dark:border-stone-700', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-3 py-3 text-left print:pointer-events-none"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <h2 className="flex items-center gap-2 text-xl font-semibold text-stone-900 dark:text-stone-50 print:text-base">
          {Icon ? (
            <Icon className="h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300" aria-hidden />
          ) : null}
          {title}
        </h2>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-stone-500 transition-transform dark:text-stone-400 print:hidden',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>
      <div
        id={`${id}-panel`}
        className={cn('pb-6 print:!block', open ? 'block' : 'hidden print:block')}
      >
        {children}
      </div>
    </section>
  );
}
