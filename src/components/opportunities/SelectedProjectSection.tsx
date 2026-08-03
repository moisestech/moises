import { opp } from '@/components/opportunities/opportunityTheme';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import { DELIVERY_STATUS_LABELS, type DeliveryStatus } from '@/content/opportunities/systemsDossier';
import type { RolePortfolioSelectedProject } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type SelectedProjectSectionProps = {
  project: RolePortfolioSelectedProject;
  sectionId?: string;
  sectionTitle?: string;
};

export function SelectedProjectSection({
  project,
  sectionId = 'selected-project',
  sectionTitle = 'Selected AI Project',
}: SelectedProjectSectionProps) {
  const status: DeliveryStatus = project.deliveryStatus;

  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {sectionTitle}
      </h2>

      <article className={cn(opp.card, 'mt-8 p-5 sm:p-6')}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-xl">
            {project.title}
          </h3>
          <span className={opp.pill}>{DELIVERY_STATUS_LABELS[status]}</span>
        </div>
        <p className="mt-1 text-sm font-medium italic text-stone-700 dark:text-stone-300 sm:text-base">
          {project.subtitle}
        </p>
        <ul className="mt-4 space-y-2.5">
          {project.bullets.map((bullet) => (
            <li key={bullet.slice(0, 72)} className={`flex gap-2 ${opp.body}`}>
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/80" aria-hidden />
              <OpportunityRichText text={bullet} />
            </li>
          ))}
        </ul>
        {status === 'prototype' || status === 'research' || status === 'in-development' ? (
          <p className={`mt-5 ${opp.subtle}`}>
            Status reflects shipment honesty — not claimed as a verified-live public production demo unless labeled Deployed.
          </p>
        ) : null}
      </article>
    </section>
  );
}
