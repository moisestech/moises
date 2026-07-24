'use client';

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
import { ThirtySixtyNinetyPlan } from '@/components/opportunities/ThirtySixtyNinetyPlan';
import { SystemsOpportunityClient } from '@/components/opportunities/SystemsOpportunityClient';
import { RolePortfolioClient } from '@/components/opportunities/RolePortfolioClient';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/content/opportunities/types';

type OpportunityPageClientProps = {
  opportunity: Opportunity;
};

export function OpportunityPageClient({ opportunity }: OpportunityPageClientProps) {
  if (opportunity.variant === 'full-dossier') {
    return <TechnologyProductStrategyClient />;
  }

  if (opportunity.variant === 'systems-dossier') {
    return <SystemsOpportunityClient opportunity={opportunity} />;
  }

  if (opportunity.variant === 'role-portfolio') {
    return <RolePortfolioClient opportunity={opportunity} />;
  }

  const hasBanner = Boolean(opportunity.applicationBanner?.src);

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
          {opportunity.plan ? <ThirtySixtyNinetyPlan data={opportunity.plan} sectionId="plan" /> : null}
          <ResumeCTA opportunity={opportunity} />
        </main>
      </>
    </OpportunityShell>
  );
}
