import { resolveTechLogos } from '@/content/evidence/tech-logos';
import type { Opportunity } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';

type TechStackLogosProps = {
  opportunity: Opportunity;
};

export function TechStackLogos({ opportunity }: TechStackLogosProps) {
  if (!opportunity.techLogoIds.length) return null;
  const entries = resolveTechLogos(opportunity.techLogoIds);

  return (
    <section className={opp.sectionSm}>
      <h2 className={opp.h2Bold}>Technical stack</h2>
      <p className={`mt-1 max-w-2xl ${opp.subtle}`}>
        Monochrome tiles are on-brand placeholders; swap in official marks under{' '}
        <code className={opp.code}>public/images/tech-logos/</code> when permitted.
      </p>
      <ul className="mt-4 flex gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] snap-x snap-mandatory">
        {entries.map((entry) => (
          <li key={entry.id} className="snap-start shrink-0">
            {entry.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={entry.imageSrc}
                alt={entry.label}
                width={120}
                height={36}
                className="h-9 w-[120px] rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-900 object-contain shadow-sm"
              />
            ) : (
              <span className="inline-flex h-9 min-w-[100px] items-center justify-center rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-900 px-2 text-xs font-semibold text-stone-700 dark:text-stone-300 shadow-sm">
                {entry.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
