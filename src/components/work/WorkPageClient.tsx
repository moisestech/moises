'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { SkillLogoTierGrid } from '@/components/opportunities/SkillLogoTierGrid';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { WorkAboutBlock } from '@/components/work/WorkAboutBlock';
import { CaseStudyGrid } from '@/components/opportunities/CaseStudyGrid';
import { workSiteToOpportunity } from '@/content/work/toOpportunity';
import type { WorkSite } from '@/content/work/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type WorkPageClientProps = {
  work: WorkSite;
};

export function WorkPageClient({ work }: WorkPageClientProps) {
  const opportunity = workSiteToOpportunity(work);
  const banner = work.applicationBanner;

  return (
    <OpportunityShell navItems={work.navItems}>
      <div className="flex min-h-full flex-col">
        {banner?.src ? (
          <OpportunityApplicationBanner banner={banner} className="mb-6 sm:mb-8" />
        ) : null}
        <main className={cn(opp.main, 'flex-1', banner?.src ? 'pt-0' : 'pt-8 sm:pt-10')}>
          {work.audienceKeywords?.terms?.length ? (
            <OpportunityAudienceKeywords data={work.audienceKeywords} />
          ) : null}
          <OpportunityHero opportunity={opportunity} />
          <SkillLogoTierGrid tiers={work.skillTiers} />
          <CaseStudyGrid opportunity={opportunity} />
          <InnovationProcess opportunity={opportunity} sectionId="approach" />
          <WorkAboutBlock about={work.about} />
          <ResumeCTA opportunity={opportunity} />
        </main>
      </div>
    </OpportunityShell>
  );
}
