'use client';

import dynamic from 'next/dynamic';
import TechnologyProductStrategyClient from '@/components/technology-product-strategy/TechnologyProductStrategyClient';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { RoleMatchMatrix } from '@/components/opportunities/RoleMatchMatrix';
import { CaseStudyGrid } from '@/components/opportunities/CaseStudyGrid';
import { OpportunityTeachingCredentials } from '@/components/opportunities/OpportunityTeachingCredentials';
import { SkillsMatrix } from '@/components/opportunities/SkillsMatrix';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { TechStackLogos } from '@/components/opportunities/TechStackLogos';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/content/opportunities/types';

const PublisherJourneyDemo = dynamic(
  () => import('@/features/playwire-demo/PublisherJourneyDemo').then((m) => m.PublisherJourneyDemo),
  { ssr: false },
);

type OpportunityPageClientProps = {
  opportunity: Opportunity;
};

export function OpportunityPageClient({ opportunity }: OpportunityPageClientProps) {
  if (opportunity.variant === 'full-dossier') {
    return <TechnologyProductStrategyClient />;
  }

  const hasBanner = Boolean(opportunity.applicationBanner?.src);
  const isPlaywire = opportunity.slug === 'playwire';

  return (
    <OpportunityShell navItems={opportunity.navItems}>
      <>
        <OpportunityApplicationBanner banner={opportunity.applicationBanner} />
        <main className={cn(opp.main, hasBanner ? 'pt-4 sm:pt-6' : 'pt-8 sm:pt-10')}>
          {opportunity.visibilityNote ? (
            <p className="mb-4 text-center text-xs text-stone-500 dark:text-stone-400">{opportunity.visibilityNote}</p>
          ) : null}
          {opportunity.audienceKeywords?.terms?.length ? (
            <OpportunityAudienceKeywords data={opportunity.audienceKeywords} />
          ) : opportunity.audienceLine ? (
            <p className={opp.audienceLine}>{opportunity.audienceLine}</p>
          ) : null}
          <OpportunityHero opportunity={opportunity} />
          {isPlaywire ? <PublisherJourneyDemo /> : null}
          <RoleMatchMatrix opportunity={opportunity} />
          <CaseStudyGrid opportunity={opportunity} />
          <OpportunityTeachingCredentials opportunity={opportunity} />
          <SkillsMatrix opportunity={opportunity} />
          <InnovationProcess opportunity={opportunity} />
          {opportunity.animatedLogoBand?.length ? (
            <section className="mt-16" aria-labelledby="platform-logos-heading">
              <h2 id="platform-logos-heading" className={`mb-4 ${opp.h2Bold}`}>
                Platforms and tools
              </h2>
              <AnimatedLogoBand logos={opportunity.animatedLogoBand} bleed ariaLabel="Partner and stack logos" />
            </section>
          ) : (
            <TechStackLogos opportunity={opportunity} />
          )}
          <ResumeCTA opportunity={opportunity} />
        </main>
      </>
    </OpportunityShell>
  );
}
