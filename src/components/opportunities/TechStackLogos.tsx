import Image from 'next/image';
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
      <h2 className="font-serif text-lg font-semibold text-stone-950">Technical stack</h2>
      <p className="mt-1 text-xs text-stone-500">
        Labels reflect tools used across projects; add logo assets in{' '}
        <code className="rounded bg-stone-200 px-1 py-0.5 text-[10px]">src/content/evidence/tech-logos.ts</code>.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-700 shadow-sm"
          >
            {entry.imageSrc ? (
              <span className="relative block h-5 w-5 shrink-0">
                <Image src={entry.imageSrc} alt="" fill className="object-contain" sizes="20px" />
              </span>
            ) : null}
            {entry.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
