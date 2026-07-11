'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { CV_SUBNAV_STICKY_TOP } from '@/config/cv-layout';

const views = [
  { href: '/cv/artist', label: 'Artist CV', description: 'Exhibitions, grants, press' },
  { href: '/cv/tech', label: 'Technology CV', description: 'Engineering, data, product' },
] as const;

export function CvViewSwitcher() {
  const pathname = usePathname();
  if (pathname?.includes('/print')) return null;
  const isTech = pathname?.startsWith('/cv/tech');

  return (
    <nav
      aria-label="CV type"
      className={cn(
        'sticky z-20 -mx-4 border-b border-stone-200 bg-stone-50/95 px-4 py-3 backdrop-blur dark:border-stone-700 dark:bg-stone-950/95 sm:-mx-0 sm:px-0 print:hidden',
        CV_SUBNAV_STICKY_TOP,
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full flex-col gap-2 sm:inline-flex sm:w-auto sm:flex-row sm:rounded-lg sm:border sm:border-stone-200 sm:p-1 dark:sm:border-stone-600">
          {views.map((view) => {
            const active = view.href === '/cv/tech' ? isTech : !isTech;
            return (
              <Link
                key={view.href}
                href={view.href}
                className={cn(
                  'rounded-md px-4 py-2.5 text-center text-sm font-medium transition sm:py-2',
                  active
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'border border-stone-200 text-stone-600 hover:text-stone-900 dark:border-stone-600 dark:text-stone-400 dark:hover:text-stone-50 sm:border-0',
                )}
              >
                {view.label}
              </Link>
            );
          })}
        </div>
        <p className="text-center text-xs text-stone-500 dark:text-stone-400 sm:text-left">
          {isTech
            ? 'For engineering, data, and product roles — PDF available below.'
            : 'For curators, grants, and institutional art contexts.'}
        </p>
      </div>
    </nav>
  );
}
