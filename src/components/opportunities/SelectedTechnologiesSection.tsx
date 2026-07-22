import { opp } from '@/components/opportunities/opportunityTheme';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import type { RolePortfolioTechGroup } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type SelectedTechnologiesSectionProps = {
  title: string;
  groups: RolePortfolioTechGroup[];
  sectionId?: string;
};

export function SelectedTechnologiesSection({
  title,
  groups,
  sectionId = 'technologies',
}: SelectedTechnologiesSectionProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      <dl className="mt-8 space-y-4">
        {groups.map((group) => (
          <div key={group.id} className={cn(opp.card, 'p-4 sm:p-5')}>
            <dt className={opp.label}>{group.label}</dt>
            <dd className={`mt-2 ${opp.body}`}>
              <OpportunityRichText text={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
