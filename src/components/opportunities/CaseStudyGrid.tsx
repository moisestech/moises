import Link from 'next/link';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { resolveCaseStudyCards } from '@/content/evidence/caseStudyCards';
import type { Opportunity } from '@/content/opportunities/types';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type CaseStudyGridProps = {
  opportunity: Opportunity;
  framed?: boolean;
};

export function CaseStudyGrid({ opportunity, framed = false }: CaseStudyGridProps) {
  const cards = resolveCaseStudyCards(
    opportunity.featuredProjectIds,
    opportunity.caseStudyOverrides,
  );
  const cols = opportunity.caseStudyColumns === 3 ? 'lg:grid-cols-3' : 'sm:grid-cols-2';
  const stackLabel = opportunity.caseStudyColumns === 3 ? 'Relevant stack' : 'Relevant skills';

  return (
    <section id="case-studies" className={framed ? 'scroll-mt-32' : opp.section}>
      <h2 className={opp.h2}>{opportunity.caseStudiesSectionTitle ?? 'Case studies'}</h2>
      {opportunity.caseStudiesIntro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{opportunity.caseStudiesIntro}</p> : null}
      <div className={cn('mt-6 grid gap-5 sm:mt-8 sm:gap-8', cols)}>
        {cards.map((cs) => (
          <article key={cs.id} className={`flex flex-col ${opp.card}`}>
            <div className={opp.cardMedia}>
              <OpportunityCardImage src={cs.imageSrc} alt={cs.imageAlt} local={cs.imageLocal} />
            </div>
            <div className={opp.cardPad}>
              <p className={opp.accentCategory}>{cs.category}</p>
              <h3 className={cn(opp.matrixPrimary, 'mt-1')}>{cs.title}</h3>
              <p className={opp.matrixSecondary}>{cs.summary}</p>
              <p className={`mt-3 ${opp.label}`}>{stackLabel}</p>
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {cs.skillTags.map((t) => (
                  <li key={t} className={opp.pill}>
                    {t}
                  </li>
                ))}
              </ul>
              {cs.href ? (
                cs.href.startsWith('/') ? (
                  <Link href={cs.href} className={`mt-4 inline-flex min-h-11 items-center gap-1 text-sm ${opp.linkAccent}`}>
                    {cs.linkLabel ?? 'View context'}
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                ) : (
                  <a
                    href={cs.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex min-h-11 items-center gap-1 text-sm ${opp.linkAccent}`}
                  >
                    {cs.linkLabel ?? 'View site'}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                )
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
