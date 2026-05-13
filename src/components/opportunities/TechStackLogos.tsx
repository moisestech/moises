import { resolveTechLogos } from '@/content/evidence/tech-logos';
import type { Opportunity } from '@/content/opportunities/types';

type TechStackLogosProps = {
  opportunity: Opportunity;
};

export function TechStackLogos({ opportunity }: TechStackLogosProps) {
  if (!opportunity.techLogoIds.length) return null;
  const entries = resolveTechLogos(opportunity.techLogoIds);

  return (
    <section className="mt-12 border-t border-stone-200 pt-10">
      <h2 className="font-['MoMA_Sans'] text-xl font-bold text-stone-950">Technical stack</h2>
      <p className="mt-1 max-w-2xl text-xs text-stone-500">
        Monochrome tiles are on-brand placeholders; swap in official marks under{' '}
        <code className="rounded bg-stone-200 px-1 py-0.5 text-[10px]">public/images/tech-logos/</code> when
        permitted.
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
                className="h-9 w-[120px] rounded-lg border border-stone-200 bg-white object-contain shadow-sm"
              />
            ) : (
              <span className="inline-flex h-9 min-w-[100px] items-center justify-center rounded-lg border border-stone-200 bg-white px-2 text-xs font-semibold text-stone-700 shadow-sm">
                {entry.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
