'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { RoleMatchMatrix } from '@/components/opportunities/RoleMatchMatrix';
import { CaseStudyGrid } from '@/components/opportunities/CaseStudyGrid';
import { OpportunityTeachingCredentials } from '@/components/opportunities/OpportunityTeachingCredentials';
import { SkillsMatrix } from '@/components/opportunities/SkillsMatrix';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { TechStackLogos } from '@/components/opportunities/TechStackLogos';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import type { Opportunity } from '@/content/opportunities/types';

type OpportunityPageClientProps = {
  opportunity: Opportunity;
};

export function OpportunityPageClient({ opportunity }: OpportunityPageClientProps) {
  return (
    <OpportunityShell navItems={opportunity.navItems}>
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-8 font-['MoMA_Sans'] sm:pt-10">
        {opportunity.audienceLine ? (
          <p className="mb-6 text-center text-xs text-stone-500 sm:text-sm">{opportunity.audienceLine}</p>
        ) : null}
        <OpportunityHero opportunity={opportunity} />
        <RoleMatchMatrix opportunity={opportunity} />
        <CaseStudyGrid opportunity={opportunity} />
        <OpportunityTeachingCredentials opportunity={opportunity} />
        <SkillsMatrix opportunity={opportunity} />
        <InnovationProcess opportunity={opportunity} />
        <TechStackLogos opportunity={opportunity} />
        <ResumeCTA opportunity={opportunity} />
      </main>
    </OpportunityShell>
  );
}
