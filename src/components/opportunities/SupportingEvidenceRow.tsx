import Link from 'next/link';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { EvidenceTypeBadge } from '@/components/opportunities/EvidenceTypeBadge';
import { LifecycleStageChip } from '@/components/opportunities/LifecycleStageChip';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/content/opportunities/types';

function RowLink({ href, label, className }: { href: string; label: string; className: string }) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {label}
        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    );
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {label}
        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {label}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
    </a>
  );
}

export function SupportingEvidenceRow({ opportunity }: { opportunity: Opportunity }) {
  const items = opportunity.supportingEvidence;
  if (!items?.length) return null;
  const accent = getOpportunityCompactAccent('case-studies');
  const linkClass = cn(
    'inline-flex min-h-11 items-center gap-1 text-sm',
    opp.linkAccent,
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    accent.focusRing,
  );

  return (
    <section id="supporting-evidence" className="mt-8 scroll-mt-32" aria-labelledby="supporting-evidence-heading">
      <h3 id="supporting-evidence-heading" className={opp.h3MoMA}>
        {opportunity.supportingEvidenceTitle ?? 'See all — supporting evidence'}
      </h3>
      {opportunity.supportingEvidenceIntro ? (
        <p className={`mt-2 max-w-3xl ${opp.muted}`}>{opportunity.supportingEvidenceIntro}</p>
      ) : null}
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item.id} className={cn(opp.card, 'overflow-hidden sm:grid sm:grid-cols-[minmax(0,11rem)_1fr]')}>
            {item.imageSrc ? (
              <div className={cn(opp.cardMedia, 'border-b sm:border-b-0 sm:border-r')}>
                <OpportunityCardImage
                  src={item.imageSrc}
                  srcDark={item.imageSrcDark}
                  alt={item.imageAlt ?? item.title}
                />
              </div>
            ) : null}
            <div className="p-4">
              <div className="flex flex-wrap items-center gap-2">
                {item.lifecycleStage ? <LifecycleStageChip stage={item.lifecycleStage} /> : null}
                <EvidenceTypeBadge type={item.evidenceType} />
              </div>
              <h4 className={cn(opp.matrixPrimary, 'mt-2')}>{item.title}</h4>
              <p className={cn(opp.matrixSecondary, 'mt-1')}>{item.body}</p>
              {item.limitation ? <p className={cn(opp.subtle, 'mt-2')}>{item.limitation}</p> : null}
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                <RowLink href={item.href} label={item.linkLabel} className={linkClass} />
                {item.secondaryHref ? (
                  <RowLink
                    href={item.secondaryHref}
                    label={item.secondaryLinkLabel ?? 'Related'}
                    className={linkClass}
                  />
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
