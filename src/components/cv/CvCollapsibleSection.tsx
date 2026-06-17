'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type CvCollapsibleSectionProps = {
  id: string;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
};

export function CvCollapsibleSection({
  id,
  title,
  defaultOpen = true,
  children,
  className,
}: CvCollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section id={id} className={cn('scroll-mt-28 border-b border-gray-200 dark:border-gray-700', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-3 py-3 text-left print:pointer-events-none"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white print:text-base">{title}</h2>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-gray-500 transition-transform print:hidden',
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
