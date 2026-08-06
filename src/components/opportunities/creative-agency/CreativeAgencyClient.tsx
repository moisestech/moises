'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { OpportunityColorSection } from '@/components/opportunities/OpportunityColorSection';
import { RoleApplicationBar } from '@/components/opportunities/RoleApplicationBar';
import { FitPillars } from '@/components/opportunities/FitPillars';
import { RoleMatchMatrix } from '@/components/opportunities/RoleMatchMatrix';
import { CapabilityMap } from '@/components/opportunities/CapabilityMap';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { CreativeCaseStudyModules } from '@/components/opportunities/creative-agency/CreativeCaseStudyModules';
import { CampaignChannelSystem } from '@/components/opportunities/creative-agency/CampaignChannelSystem';
import { HumanAiWorkflow } from '@/components/opportunities/creative-agency/HumanAiWorkflow';
import { LeadershipInPractice } from '@/components/opportunities/creative-agency/LeadershipInPractice';
import { PointOfViewGallery } from '@/components/opportunities/creative-agency/PointOfViewGallery';
import { DossierSectionNav } from '@/components/opportunities/creative-agency/DossierSectionNav';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/content/opportunities/types';

type CreativeAgencyClientProps = {
  opportunity: Opportunity;
};

/**
 * Shared creative-agency application dossier composer
 * (art direction / creative director roles with campaign + AI workflow sections).
 */
export function CreativeAgencyClient({ opportunity }: CreativeAgencyClientProps) {
  const dossier = opportunity.rolePortfolio;
  const agency = opportunity.creativeAgency;
  const hasBanner = Boolean(opportunity.applicationBanner?.src);

  if (!dossier || !agency) {
    return (
      <OpportunityShell navItems={opportunity.navItems}>
        <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
          <p className={opp.body}>Creative agency dossier content is missing for this opportunity.</p>
        </main>
      </OpportunityShell>
    );
  }

  const sectionClass = 'mt-8 sm:mt-10 md:mt-14';
  const framed = '!mt-0 !border-0 !pt-0 scroll-mt-28 sm:scroll-mt-32';

  return (
    <OpportunityShell
      navItems={opportunity.navItems}
      getSectionNavAccent={getOpportunityCompactAccent}
      stickyNavTopClassName="top-[4.75rem] md:top-[8.4rem]"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow dark:focus:bg-stone-900"
      >
        Skip to content
      </a>

      <RoleApplicationBar opportunity={opportunity} />
      <OpportunityApplicationBanner banner={opportunity.applicationBanner} />

      <main
        id="main-content"
        className={cn(
          opp.main,
          'overflow-x-clip',
          hasBanner ? 'pt-4 sm:pt-6' : 'pt-8 sm:pt-10',
        )}
      >
        {opportunity.visibilityNote ? (
          <p className="mb-3 px-1 text-center text-[11px] leading-relaxed text-stone-500 dark:text-stone-400 sm:mb-4 sm:text-xs">
            {opportunity.visibilityNote}
          </p>
        ) : null}
        {opportunity.audienceKeywords?.terms?.length ? (
          <OpportunityAudienceKeywords data={opportunity.audienceKeywords} />
        ) : null}

        <OpportunityColorSection sectionId="hero" className="mt-2 sm:mt-4">
          <OpportunityHero opportunity={opportunity} />
        </OpportunityColorSection>

        {opportunity.navItems?.length ? (
          <div className="mt-6 sm:mt-8">
            <DossierSectionNav
              items={opportunity.navItems.filter((item) => item.id !== 'hero')}
              title="Dossier map"
              intro="Tap any section to jump. Sticky nav at the top stays in sync as you scroll. Amber labels mark placeholders—nothing unfinished is presented as shipped client work."
            />
          </div>
        ) : null}

        <OpportunityColorSection sectionId="capabilities" className={sectionClass}>
          <FitPillars
            title={agency.capabilitiesTitle}
            intro={agency.capabilitiesIntro}
            pillars={agency.capabilities}
            sectionId="capabilities"
            className={framed}
          />
        </OpportunityColorSection>

        <OpportunityColorSection sectionId="case-studies" className={sectionClass}>
          <CreativeCaseStudyModules
            title={agency.caseStudiesTitle}
            intro={agency.caseStudiesIntro}
            studies={agency.caseStudies}
            sectionId="case-studies"
            className={framed}
          />
        </OpportunityColorSection>

        <OpportunityColorSection sectionId="campaign" className={sectionClass}>
          <CampaignChannelSystem data={agency.campaign} sectionId="campaign" className={framed} />
        </OpportunityColorSection>

        <OpportunityColorSection sectionId="workflow" className={sectionClass}>
          <HumanAiWorkflow data={agency.workflow} sectionId="workflow" className={framed} />
        </OpportunityColorSection>

        <OpportunityColorSection sectionId="leadership" className={sectionClass}>
          <LeadershipInPractice
            data={agency.leadership}
            sectionId="leadership"
            className={framed}
          />
        </OpportunityColorSection>

        <OpportunityColorSection sectionId="pov" className={sectionClass}>
          <PointOfViewGallery data={agency.pointOfView} sectionId="pov" className={framed} />
        </OpportunityColorSection>

        <OpportunityColorSection sectionId="fit" className={sectionClass}>
          <RoleMatchMatrix opportunity={opportunity} framed />
        </OpportunityColorSection>

        <OpportunityColorSection sectionId="stack" className={sectionClass}>
          <CapabilityMap data={dossier.capabilityMap} sectionId="stack" className={framed} />
        </OpportunityColorSection>

        <OpportunityColorSection sectionId="contact" className={sectionClass}>
          <ResumeCTA opportunity={opportunity} framed sectionId="contact" />
          <p className={`mt-4 max-w-3xl ${opp.subtle}`}>{dossier.availabilityNote}</p>
        </OpportunityColorSection>
      </main>
    </OpportunityShell>
  );
}
