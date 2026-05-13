'use client';

import { resolveTechLogos } from '@/content/evidence/tech-logos';

type TechLogoMarqueeProps = {
  techLogoIds: string[];
  title?: string;
};

export function TechLogoMarquee({ techLogoIds, title = 'Tools and platforms' }: TechLogoMarqueeProps) {
  if (!techLogoIds.length) return null;
  const entries = resolveTechLogos(techLogoIds);

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone-500">{title}</p>
      <div className="flex gap-2 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] snap-x snap-mandatory">
        {entries.map((e) => (
          <div key={e.id} className="snap-start shrink-0">
            {e.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={e.imageSrc}
                alt={e.label}
                width={120}
                height={36}
                className="h-9 w-[120px] rounded-lg border border-stone-200 bg-white object-contain shadow-sm"
              />
            ) : (
              <span className="inline-flex h-9 min-w-[100px] items-center justify-center rounded-lg border border-stone-200 bg-white px-2 text-xs font-semibold text-stone-700">
                {e.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
