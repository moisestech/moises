'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { OpportunityColorSection } from '@/components/opportunities/OpportunityColorSection';
import { RoleMatchMatrix } from '@/components/opportunities/RoleMatchMatrix';
import { CaseStudyGrid } from '@/components/opportunities/CaseStudyGrid';
import { HonestyOverlaySection } from '@/components/opportunities/HonestyOverlaySection';
import { OpportunityTeachingCredentials } from '@/components/opportunities/OpportunityTeachingCredentials';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { FitStrip } from '@/components/opportunities/deloitte/FitStrip';
import { FacilitationModel } from '@/components/opportunities/deloitte/FacilitationModel';
import { BookleggersWorkflowCase } from '@/components/opportunities/deloitte/BookleggersWorkflowCase';
import { NinetyMinuteSprint } from '@/components/opportunities/deloitte/NinetyMinuteSprint';
import { HitlWorkflowDiagram } from '@/components/opportunities/deloitte/HitlWorkflowDiagram';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import {
  deloitteBookleggersCase,
  deloitteFacilitationModel,
  deloitteFitStrip,
  deloitteHitlDiagram,
  deloitteNinetyMinuteSprint,
} from '@/content/opportunities/deloitte-ai-design-facilitator-fde';
import type { Opportunity } from '@/content/opportunities/types';

type DeloitteAiDesignFacilitatorClientProps = {
  opportunity: Opportunity;
};

export function DeloitteAiDesignFacilitatorClient({
  opportunity,
}: DeloitteAiDesignFacilitatorClientProps) {
  return (
    <OpportunityShell
      navItems={opportunity.navItems}
      getSectionNavAccent={getOpportunityCompactAccent}
      stickyNavTopClassName="top-[4.75rem] md:top-[8.4rem]"
    >
      <>
        <OpportunityApplicationBanner banner={opportunity.applicationBanner} />
        <main className={cn(opp.main, 'overflow-x-clip pt-3 sm:pt-6')}>
          {opportunity.visibilityNote ? (
            <p className="mb-3 px-1 text-center text-[11px] leading-relaxed text-stone-500 dark:text-stone-400 sm:mb-4 sm:text-xs">
              {opportunity.visibilityNote}
            </p>
          ) : null}

          <OpportunityColorSection sectionId="hero" className="mt-2 sm:mt-4">
            <OpportunityHero opportunity={opportunity} />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="pillars" className="mt-10 sm:mt-14">
            <FitStrip data={deloitteFitStrip} />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="fit" className="mt-10 sm:mt-14">
            <RoleMatchMatrix opportunity={opportunity} framed />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="case-studies" className="mt-10 sm:mt-14">
            <CaseStudyGrid opportunity={opportunity} framed />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="facilitation" className="mt-10 sm:mt-14">
            <FacilitationModel data={deloitteFacilitationModel} />
          </OpportunityColorSection>

          {opportunity.teachingHighlights?.length ? (
            <OpportunityColorSection sectionId="teaching-cred" className="mt-10 sm:mt-14">
              <OpportunityTeachingCredentials opportunity={opportunity} framed />
            </OpportunityColorSection>
          ) : null}

          <OpportunityColorSection sectionId="bookleggers" className="mt-10 sm:mt-14">
            <BookleggersWorkflowCase data={deloitteBookleggersCase} />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="sprint" className="mt-10 sm:mt-14">
            <NinetyMinuteSprint data={deloitteNinetyMinuteSprint} />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="hitl" className="mt-10 sm:mt-14">
            <HitlWorkflowDiagram data={deloitteHitlDiagram} codeInspect={opportunity.codeInspect} />
          </OpportunityColorSection>

          {opportunity.honestyOverlay ? (
            <OpportunityColorSection sectionId="honesty" className="mt-10 sm:mt-14">
              <HonestyOverlaySection data={opportunity.honestyOverlay} framed />
            </OpportunityColorSection>
          ) : null}

          <OpportunityColorSection sectionId="resume" className="mt-10 sm:mt-14">
            <ResumeCTA opportunity={opportunity} framed />
          </OpportunityColorSection>
        </main>
      </>
    </OpportunityShell>
  );
}
