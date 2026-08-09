'use client';

import { ChevronRight } from 'lucide-react';
import type { OpportunityNavItem } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { scrollToDossierSection } from '@/components/opportunities/creative-agency/scrollToDossierSection';
import { cn } from '@/lib/utils';

type DossierSectionNavProps = {
  items: OpportunityNavItem[];
  title?: string;
  intro?: string;
  className?: string;
};

/**
 * In-page jump list so every dossier section is labeled, color-coded, and reachable
 * without relying only on the sticky mini-nav.
 */
export function DossierSectionNav({
  items,
  title = 'Dossier map',
  intro = 'Jump to any section. Pending specimens are labeled in place—nothing unfinished is presented as shipped client work.',
  className,
}: DossierSectionNavProps) {
  if (!items.length) return null;

  return (
    <nav
      id="dossier-map"
      className={cn(opp.callout, 'scroll-mt-32', className)}
      aria-labelledby="dossier-map-heading"
    >
      <h2 id="dossier-map-heading" className={opp.h3MoMA}>
        {title}
      </h2>
      <p className={`mt-1.5 max-w-2xl ${opp.subtle}`}>{intro}</p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const accent = getOpportunityCompactAccent(item.id);
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  'group flex min-h-12 items-center gap-3 rounded-lg border border-l-[3px] bg-white px-3 py-2.5 text-sm font-medium text-stone-800 shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:bg-stone-900 dark:text-stone-100',
                  accent.rail,
                  'border-stone-200 hover:border-stone-300 dark:border-stone-700 dark:hover:border-stone-600',
                  accent.softBg,
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToDossierSection(item.id);
                }}
              >
                <span
                  className={cn(
                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums',
                    accent.navIdle,
                    accent.eyebrow,
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1 leading-snug">{item.label}</span>
                <ChevronRight
                  className="h-4 w-4 shrink-0 text-stone-400 transition group-hover:translate-x-0.5 group-hover:text-stone-600 motion-reduce:transition-none dark:text-stone-500 dark:group-hover:text-stone-300"
                  aria-hidden
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
