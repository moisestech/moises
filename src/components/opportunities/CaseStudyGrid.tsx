import Link from 'next/link';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { getEvidenceProject } from '@/content/evidence/projects';
import type { Opportunity } from '@/content/opportunities/types';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type CaseStudyGridProps = {
  opportunity: Opportunity;
};

export function CaseStudyGrid({ opportunity }: CaseStudyGridProps) {
  return (
    <section id="case-studies" className={opp.section}>
      <h2 className={opp.h2}>{opportunity.caseStudiesSectionTitle ?? 'Case studies'}</h2>
      {opportunity.caseStudiesIntro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{opportunity.caseStudiesIntro}</p> : null}
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {opportunity.featuredProjectIds.map((id) => {
          const cs = getEvidenceProject(id);
          if (!cs) return null;
          return (
            <article key={cs.id} className={`flex flex-col ${opp.card}`}>
              <div className={opp.cardMedia}>
                <OpportunityCardImage src={cs.imageSrc} alt={cs.imageAlt} local={cs.imageLocal} />
              </div>
              <div className={opp.cardPad}>
                <p className={opp.accentCategory}>{cs.category}</p>
                <h3 className={cn(opp.matrixPrimary, 'mt-1')}>{cs.title}</h3>
                <p className={opp.matrixSecondary}>{cs.summary}</p>
                <p className={`mt-3 ${opp.label}`}>Relevant skills</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {cs.skillTags.map((t) => (
                    <li key={t} className={opp.pill}>
                      {t}
                    </li>
                  ))}
                </ul>
                {cs.href ? (
                  cs.href.startsWith('/') ? (
                    <Link href={cs.href} className={`mt-4 inline-flex items-center gap-1 text-sm ${opp.linkAccent}`}>
                      View context
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  ) : (
                    <a
                      href={cs.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-flex items-center gap-1 text-sm ${opp.linkAccent}`}
                    >
                      View site
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  )
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
