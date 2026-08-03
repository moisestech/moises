import { opp } from '@/components/opportunities/opportunityTheme';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import type {
  RolePortfolioEvidenceItemStatus,
  RolePortfolioEvidenceRoadmap,
} from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

const STATUS_LABEL: Record<RolePortfolioEvidenceItemStatus, string> = {
  ready: 'Ready',
  'in-progress': 'In progress',
  todo: 'TODO',
};

type EvidenceRoadmapSectionProps = {
  data: RolePortfolioEvidenceRoadmap;
  sectionId?: string;
};

export function EvidenceRoadmapSection({
  data,
  sectionId = 'evidence',
}: EvidenceRoadmapSectionProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.intro ? (
        <p className={`mt-2 max-w-3xl ${opp.muted}`}>
          <OpportunityRichText text={data.intro} />
        </p>
      ) : null}

      <ol className="mt-8 space-y-4">
        {data.items.map((item, index) => (
          <li key={item.id} className={cn(opp.card, 'p-5')}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-bold text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={opp.matrixPrimary}>{item.title}</h3>
              <span className={opp.pill}>{STATUS_LABEL[item.status]}</span>
            </div>
            <p className={`mt-3 ${opp.body}`}>
              <OpportunityRichText text={item.body} />
            </p>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`mt-3 inline-flex text-sm ${opp.linkAccent}`}
              >
                {item.linkLabel ?? 'View'}
              </a>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
