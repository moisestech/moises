'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { OpportunityColorSection } from '@/components/opportunities/OpportunityColorSection';
import { RoleApplicationBar } from '@/components/opportunities/RoleApplicationBar';
import { FitPillars } from '@/components/opportunities/FitPillars';
import { SystemsCaseStudyGrid } from '@/components/opportunities/SystemsCaseStudyGrid';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { CapabilityMap } from '@/components/opportunities/CapabilityMap';
import { CreativeProductionSection } from '@/components/opportunities/CreativeProductionSection';
import { ClientFacingSection } from '@/components/opportunities/ClientFacingSection';
import { PrinciplesSection } from '@/components/opportunities/PrinciplesSection';
import { ExperienceSnapshot } from '@/components/opportunities/ExperienceSnapshot';
import { ProfessionalExperienceSection } from '@/components/opportunities/ProfessionalExperienceSection';
import { SelectedProjectSection } from '@/components/opportunities/SelectedProjectSection';
import { EvidenceRoadmapSection } from '@/components/opportunities/EvidenceRoadmapSection';
import { ComingSoonSection } from '@/components/opportunities/ComingSoonSection';
import { EducationContinuingSection } from '@/components/opportunities/EducationContinuingSection';
import { SelectedTechnologiesSection } from '@/components/opportunities/SelectedTechnologiesSection';
import { SkillsMatrix } from '@/components/opportunities/SkillsMatrix';
import { TechStackLogos } from '@/components/opportunities/TechStackLogos';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/content/opportunities/types';

type RolePortfolioClientProps = {
  opportunity: Opportunity;
};

/**
 * Role-specific portfolio composer for forward-deployed / creative AI engineer dossiers.
 * Borrows compact-dossier chrome: audience keywords, color section rails, sticky nav accents,
 * skills matrix, and hero logo band / company mark when provided on the opportunity.
 */
export function RolePortfolioClient({ opportunity }: RolePortfolioClientProps) {
  const dossier = opportunity.rolePortfolio;
  const hasBanner = Boolean(opportunity.applicationBanner?.src);

  if (!dossier) {
    return (
      <OpportunityShell navItems={opportunity.navItems}>
        <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
          <p className={opp.body}>Role portfolio content is missing for this opportunity.</p>
        </main>
      </OpportunityShell>
    );
  }

  const capabilityMap =
    dossier.currentlyExtending?.length && !dossier.capabilityMap.currentlyExtending
      ? { ...dossier.capabilityMap, currentlyExtending: dossier.currentlyExtending }
      : dossier.capabilityMap;

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

        {dossier.fitPillars?.length && dossier.fitSectionTitle ? (
          <OpportunityColorSection sectionId="fit" className={sectionClass}>
            <FitPillars
              title={dossier.fitSectionTitle}
              intro={dossier.fitIntro}
              pillars={dossier.fitPillars}
              sectionId="fit"
              className={framed}
            />
          </OpportunityColorSection>
        ) : null}

        {dossier.evidenceRoadmap ? (
          <OpportunityColorSection sectionId="evidence" className={sectionClass}>
            <EvidenceRoadmapSection
              data={dossier.evidenceRoadmap}
              sectionId="evidence"
              className={framed}
            />
          </OpportunityColorSection>
        ) : null}

        {dossier.comingSoon ? (
          <OpportunityColorSection sectionId="coming-soon" className={sectionClass}>
            <ComingSoonSection
              data={dossier.comingSoon}
              sectionId="coming-soon"
              className={framed}
            />
          </OpportunityColorSection>
        ) : null}

        {opportunity.skillsMatrixRows?.length ? (
          <OpportunityColorSection sectionId="skills" className={sectionClass}>
            <SkillsMatrix opportunity={opportunity} framed />
          </OpportunityColorSection>
        ) : null}

        {!opportunity.animatedLogoBand?.length && opportunity.techLogoIds?.length ? (
          <TechStackLogos opportunity={opportunity} />
        ) : null}

        <OpportunityColorSection sectionId="capabilities" className={sectionClass}>
          <CapabilityMap data={capabilityMap} sectionId="capabilities" className={framed} />
        </OpportunityColorSection>

        {dossier.experienceRoles?.length ? (
          <OpportunityColorSection sectionId="experience" className={sectionClass}>
            <ProfessionalExperienceSection
              title={dossier.experienceRolesTitle ?? 'Professional Experience'}
              intro={dossier.experienceRolesIntro}
              roles={dossier.experienceRoles}
              sectionId="experience"
            />
          </OpportunityColorSection>
        ) : dossier.experience?.length ? (
          <OpportunityColorSection sectionId="experience" className={sectionClass}>
            <ExperienceSnapshot
              title={dossier.experienceTitle ?? 'Experience'}
              intro={dossier.experienceIntro}
              items={dossier.experience}
              sectionId="experience"
            />
          </OpportunityColorSection>
        ) : null}

        {dossier.selectedProject ? (
          <OpportunityColorSection sectionId="selected-project" className={sectionClass}>
            <SelectedProjectSection
              project={dossier.selectedProject}
              sectionId="selected-project"
              sectionTitle={dossier.selectedProjectSectionTitle ?? 'Selected AI Project'}
              className={framed}
            />
          </OpportunityColorSection>
        ) : null}

        {dossier.education?.length ? (
          <OpportunityColorSection sectionId="education" className={sectionClass}>
            <EducationContinuingSection
              educationTitle={dossier.educationTitle ?? 'Education'}
              education={dossier.education}
              continuing={dossier.continuingDevelopment}
              sectionId="education"
            />
          </OpportunityColorSection>
        ) : null}

        {dossier.technologies?.length ? (
          <OpportunityColorSection sectionId="technologies" className={sectionClass}>
            <SelectedTechnologiesSection
              title={dossier.technologiesTitle ?? 'Selected Technologies'}
              groups={dossier.technologies}
              sectionId="technologies"
            />
          </OpportunityColorSection>
        ) : null}

        {dossier.caseStudies?.length ? (
          <OpportunityColorSection sectionId="work" className={sectionClass}>
            <SystemsCaseStudyGrid
              title={dossier.caseStudiesTitle ?? 'Selected systems'}
              intro={dossier.caseStudiesIntro}
              studies={dossier.caseStudies}
              sectionId="work"
            />
          </OpportunityColorSection>
        ) : null}

        {dossier.creative ? (
          <OpportunityColorSection sectionId="creative" className={sectionClass}>
            <CreativeProductionSection data={dossier.creative} sectionId="creative" />
          </OpportunityColorSection>
        ) : null}

        {dossier.clientFacing ? (
          <ClientFacingSection data={dossier.clientFacing} sectionId="client" />
        ) : null}

        {dossier.principles?.length && dossier.principlesTitle ? (
          <OpportunityColorSection sectionId="principles" className={sectionClass}>
            <PrinciplesSection
              title={dossier.principlesTitle}
              principles={dossier.principles}
              sectionId="principles"
            />
          </OpportunityColorSection>
        ) : null}

        {opportunity.processSteps?.length ? (
          <OpportunityColorSection sectionId="process" className={sectionClass}>
            <InnovationProcess
              opportunity={opportunity}
              sectionId="process"
              layout="horizontal"
              framed
            />
          </OpportunityColorSection>
        ) : null}

        <OpportunityColorSection sectionId="contact" className={sectionClass}>
          <section id="contact" className="scroll-mt-32" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="sr-only">
              Contact
            </h2>
            <ResumeCTA opportunity={opportunity} framed />
            <p className={`mt-4 max-w-3xl ${opp.subtle}`}>{dossier.availabilityNote}</p>
          </section>
        </OpportunityColorSection>
      </main>
    </OpportunityShell>
  );
}
