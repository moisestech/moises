'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
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
import { EducationContinuingSection } from '@/components/opportunities/EducationContinuingSection';
import { SelectedTechnologiesSection } from '@/components/opportunities/SelectedTechnologiesSection';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/content/opportunities/types';

type RolePortfolioClientProps = {
  opportunity: Opportunity;
};

/**
 * Role-specific portfolio composer for forward-deployed / creative AI engineer dossiers.
 * Data-driven via `opportunity.rolePortfolio` — supports full-bleed banners unlike systems-dossier.
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

  return (
    <OpportunityShell navItems={opportunity.navItems}>
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
        className={cn(opp.main, hasBanner ? 'pt-4 sm:pt-6' : 'pt-8 sm:pt-10')}
      >
        <OpportunityHero opportunity={opportunity} />

        {dossier.fitPillars?.length && dossier.fitSectionTitle ? (
          <FitPillars
            title={dossier.fitSectionTitle}
            intro={dossier.fitIntro}
            pillars={dossier.fitPillars}
            sectionId="fit"
          />
        ) : null}

        <CapabilityMap data={capabilityMap} sectionId="capabilities" />

        {dossier.experienceRoles?.length ? (
          <ProfessionalExperienceSection
            title={dossier.experienceRolesTitle ?? 'Professional Experience'}
            intro={dossier.experienceRolesIntro}
            roles={dossier.experienceRoles}
            sectionId="experience"
          />
        ) : dossier.experience?.length ? (
          <ExperienceSnapshot
            title={dossier.experienceTitle ?? 'Experience'}
            intro={dossier.experienceIntro}
            items={dossier.experience}
            sectionId="experience"
          />
        ) : null}

        {dossier.selectedProject ? (
          <SelectedProjectSection project={dossier.selectedProject} sectionId="selected-project" />
        ) : null}

        {dossier.education?.length ? (
          <EducationContinuingSection
            educationTitle={dossier.educationTitle ?? 'Education'}
            education={dossier.education}
            continuing={dossier.continuingDevelopment}
            sectionId="education"
          />
        ) : null}

        {dossier.technologies?.length ? (
          <SelectedTechnologiesSection
            title={dossier.technologiesTitle ?? 'Selected Technologies'}
            groups={dossier.technologies}
            sectionId="technologies"
          />
        ) : null}

        {dossier.caseStudies?.length ? (
          <SystemsCaseStudyGrid
            title={dossier.caseStudiesTitle ?? 'Selected systems'}
            intro={dossier.caseStudiesIntro}
            studies={dossier.caseStudies}
            sectionId="work"
          />
        ) : null}

        {dossier.creative ? (
          <CreativeProductionSection data={dossier.creative} sectionId="creative" />
        ) : null}

        {dossier.clientFacing ? (
          <ClientFacingSection data={dossier.clientFacing} sectionId="client" />
        ) : null}

        {dossier.principles?.length && dossier.principlesTitle ? (
          <PrinciplesSection
            title={dossier.principlesTitle}
            principles={dossier.principles}
            sectionId="principles"
          />
        ) : null}

        {opportunity.processSteps?.length ? (
          <InnovationProcess opportunity={opportunity} sectionId="process" layout="horizontal" />
        ) : null}

        <section id="contact" className={opp.section} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">
            Contact
          </h2>
          <ResumeCTA opportunity={opportunity} />
          <p className={`mt-4 max-w-3xl ${opp.subtle}`}>{dossier.availabilityNote}</p>
        </section>
      </main>
    </OpportunityShell>
  );
}
