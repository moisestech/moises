import Image from 'next/image';
import Link from 'next/link';
import { opp } from '@/components/opportunities/opportunityTheme';
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
  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>

      <blockquote className={cn(opp.callout, 'mt-6')}>
        <p className="font-['MoMA_Sans'] text-lg font-semibold leading-snug text-stone-950 dark:text-stone-50 sm:text-xl">
          “{data.pullQuote}”
        </p>
      </blockquote>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
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
              <div className="border-t border-stone-100 px-3 py-2.5 dark:border-stone-800">
                <span className={opp.matrixPrimary}>{item.title}</span>
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
