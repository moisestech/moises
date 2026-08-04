import type { OpportunityNavItem } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type DossierSectionNavProps = {
  items: OpportunityNavItem[];
  title?: string;
  intro?: string;
  className?: string;
};

/**
 * In-page jump list so every dossier section is labeled and reachable
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
      <p className={`mt-1.5 ${opp.subtle}`}>{intro}</p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                'flex min-h-11 items-center gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm font-medium text-stone-800 transition hover:border-cyan-400/50 hover:bg-cyan-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-950/30',
              )}
            >
              <span className="tabular-nums text-xs font-semibold text-stone-400 dark:text-stone-500">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
