import Image from 'next/image';
import Link from 'next/link';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import type { PointOfViewBlock } from '@/content/opportunities/creativeAgencyDossier';
import { cn } from '@/lib/utils';

type PointOfViewGalleryProps = {
  data: PointOfViewBlock;
  sectionId?: string;
  className?: string;
};

export function PointOfViewGallery({
  data,
  sectionId = 'pov',
  className,
}: PointOfViewGalleryProps) {
  const accent = getOpportunityCompactAccent(sectionId);

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        Artistic practice
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>

      <blockquote className={cn(opp.callout, 'mt-6 border-l-[3px]', accent.rail, accent.softBg)}>
        <p className="font-['MoMA_Sans'] text-base font-semibold leading-snug text-stone-950 dark:text-stone-50 sm:text-lg md:text-xl">
          “{data.pullQuote}”
        </p>
      </blockquote>

      <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4">
        {data.items.map((item) => {
          const card = (
            <>
              <div className="relative aspect-[4/5] bg-stone-100 dark:bg-stone-800">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-stone-100 px-2.5 py-2 dark:border-stone-800 sm:px-3 sm:py-2.5">
                <span className={cn(opp.matrixPrimary, 'text-xs sm:text-sm')}>{item.title}</span>
              </div>
            </>
          );

          return (
            <li key={item.id}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    opp.card,
                    'group block h-full transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                  )}
                >
                  {card}
                </Link>
              ) : (
                <div className={cn(opp.card, 'h-full')}>{card}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
