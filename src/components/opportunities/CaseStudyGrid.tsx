import Link from 'next/link';
import { ExternalLink, ChevronRight } from 'lucide-react';
import {
  resolveCaseStudyCards,
  resolveRecipeCaseStudyCards,
} from '@/content/evidence/caseStudyCards';
import type { Opportunity } from '@/content/opportunities/types';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { OpportunityZoomTrigger } from '@/components/opportunities/OpportunityZoomLightbox';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type CaseStudyGridProps = {
  opportunity: Opportunity;
  framed?: boolean;
};

function CaseStudyLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className: string;
}) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {label}
        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {label}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
    </a>
  );
}

export function CaseStudyGrid({ opportunity, framed = false }: CaseStudyGridProps) {
  const cards = opportunity.evidenceRecipe
    ? resolveRecipeCaseStudyCards(opportunity.evidenceRecipe, { includeBuilding: true })
    : resolveCaseStudyCards(opportunity.featuredProjectIds, opportunity.caseStudyOverrides);
  const cols = opportunity.caseStudyColumns === 3 ? 'lg:grid-cols-3' : 'sm:grid-cols-2';
  const stackLabel = opportunity.caseStudyColumns === 3 ? 'Relevant stack' : 'Relevant skills';
  const accent = getOpportunityCompactAccent('case-studies');
  const linkClass = cn(
    'inline-flex min-h-11 items-center gap-1 text-sm',
    opp.linkAccent,
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    accent.focusRing,
  );

  return (
    <section id="case-studies" className={framed ? 'scroll-mt-32' : opp.section}>
      <h2 className={opp.h2}>{opportunity.caseStudiesSectionTitle ?? 'Case studies'}</h2>
      {opportunity.caseStudiesIntro ? (
        <p className={`mt-2 max-w-3xl ${opp.muted}`}>{opportunity.caseStudiesIntro}</p>
      ) : null}
      <div className={cn('mt-6 grid gap-5 sm:mt-8 sm:gap-8', cols)}>
        {cards.map((cs) => (
          <article
            key={cs.id}
            className={cn(
              'group/card flex flex-col transition duration-300 motion-reduce:transition-none',
              opp.card,
              accent.cardHover,
            )}
          >
            <OpportunityZoomTrigger
              src={cs.imageSrc}
              alt={cs.imageAlt}
              caption={cs.title}
              className={opp.cardMedia}
            >
              <OpportunityCardImage src={cs.imageSrc} alt={cs.imageAlt} local={cs.imageLocal} />
            </OpportunityZoomTrigger>
            <div className={opp.cardPad}>
              <p className={cn(opp.accentCategory, accent.eyebrow)}>{cs.category}</p>
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
              {cs.href || cs.secondaryHref ? (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                  {cs.href ? (
                    <CaseStudyLink
                      href={cs.href}
                      label={cs.linkLabel ?? (cs.href.startsWith('/') ? 'View context' : 'View site')}
                      className={linkClass}
                    />
                  ) : null}
                  {cs.secondaryHref ? (
                    <CaseStudyLink
                      href={cs.secondaryHref}
                      label={cs.secondaryLinkLabel ?? 'Related'}
                      className={linkClass}
                    />
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
