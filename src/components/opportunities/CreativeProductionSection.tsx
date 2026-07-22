import Image from 'next/image';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { RolePortfolioCreativeBlock } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type CreativeProductionSectionProps = {
  data: RolePortfolioCreativeBlock;
  sectionId?: string;
};

export function CreativeProductionSection({
  data,
  sectionId = 'creative',
}: CreativeProductionSectionProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl text-base font-medium text-stone-800 dark:text-stone-200`}>{data.lead}</p>

      <div className={cn('mt-8 grid gap-8', data.imageSrc && 'lg:grid-cols-2 lg:items-start')}>
        <ul className="space-y-3">
          {data.points.map((point) => (
            <li key={point.slice(0, 48)} className={cn(opp.card, 'p-4', opp.body)}>
              {point}
            </li>
          ))}
        </ul>

        {data.imageSrc ? (
          <div className={cn(opp.card, 'overflow-hidden')}>
            <div className="relative aspect-[16/10] bg-stone-100 dark:bg-stone-800">
              {data.imageLocal ? (
                <OpportunityCardImage src={data.imageSrc} alt={data.imageAlt ?? ''} local />
              ) : data.imageSrc.startsWith('http') ? (
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt ?? ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <OpportunityCardImage src={data.imageSrc} alt={data.imageAlt ?? ''} local />
              )}
            </div>
            {data.imageAlt ? (
              <p className="border-t border-stone-100 px-4 py-3 text-xs text-stone-500 dark:border-stone-800 dark:text-stone-400">
                {data.imageAlt}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
