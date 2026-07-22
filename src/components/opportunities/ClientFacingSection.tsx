import { opp } from '@/components/opportunities/opportunityTheme';
import type { RolePortfolioClientBlock } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type ClientFacingSectionProps = {
  data: RolePortfolioClientBlock;
  sectionId?: string;
};

export function ClientFacingSection({ data, sectionId = 'client' }: ClientFacingSectionProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {data.points.map((point) => (
          <li key={point.slice(0, 48)} className={cn(opp.card, 'p-4', opp.body)}>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
