import Image from 'next/image';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { CulturalPerspectiveData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type CulturalPerspectiveProps = {
  data: CulturalPerspectiveData;
  sectionId?: string;
  className?: string;
};

export function CulturalPerspective({
  data,
  sectionId = 'perspective',
  className,
}: CulturalPerspectiveProps) {
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

      <ul className="mt-8 grid gap-6 sm:grid-cols-3">
        {data.items.map((item) => {
          const body = (
            <>
              {item.imageSrc ? (
                <div className={cn(opp.cardMedia, 'relative')}>
                  {item.imageLocal ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt ?? ''}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? ''}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  )}
                </div>
              ) : null}
              <div className={opp.cardPad}>
                <h3 className={opp.h3}>{item.title}</h3>
                <p className={`mt-2 ${opp.subtle}`}>Research question</p>
                <p className={`mt-1 ${opp.body}`}>{item.researchQuestion}</p>
                <p className={`mt-3 ${opp.subtle}`}>Relevance</p>
                <p className={`mt-1 ${opp.body}`}>{item.relevance}</p>
              </div>
            </>
          );

          return (
            <li key={item.id} className={opp.card}>
              {item.href ? (
                <a href={item.href} className="block h-full transition hover:opacity-95">
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
