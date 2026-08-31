'use client';

import TechnologyProductStrategyClient from '@/components/technology-product-strategy/TechnologyProductStrategyClient';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { OpportunityColorSection } from '@/components/opportunities/OpportunityColorSection';
import { RoleMatchMatrix } from '@/components/opportunities/RoleMatchMatrix';
import { CaseStudyGrid } from '@/components/opportunities/CaseStudyGrid';
import { OpportunityTeachingCredentials } from '@/components/opportunities/OpportunityTeachingCredentials';
import { SkillsMatrix } from '@/components/opportunities/SkillsMatrix';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { TechStackLogos } from '@/components/opportunities/TechStackLogos';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { OpportunityApplicationAnswers } from '@/components/opportunities/OpportunityApplicationAnswers';
import { SystemsOpportunityClient } from '@/components/opportunities/SystemsOpportunityClient';
import { RolePortfolioClient } from '@/components/opportunities/RolePortfolioClient';
import { ComfyWorkSampleClient } from '@/components/opportunities/comfy/ComfyWorkSampleClient';
import { CreativeAgencyClient } from '@/components/opportunities/creative-agency/CreativeAgencyClient';
import { CapabilitiesDeepLink } from '@/components/capabilities/CapabilitiesDeepLink';
import { ThirtySixtyNinetyPlan } from '@/components/opportunities/ThirtySixtyNinetyPlan';
import { HonestyOverlaySection } from '@/components/opportunities/HonestyOverlaySection';
import { ProofSnapshotSection } from '@/components/opportunities/ProofSnapshotSection';
import { CodeInspectSection } from '@/components/opportunities/CodeInspectSection';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
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

  if (opportunity.slug === 'comfy-mts-frontend') {
    return <ComfyWorkSampleClient opportunity={opportunity} />;
  }

  if (opportunity.creativeAgency) {
    return <CreativeAgencyClient opportunity={opportunity} />;
  }

  if (opportunity.variant === 'role-portfolio') {
    return <RolePortfolioClient opportunity={opportunity} />;
  }

  const hasBanner = Boolean(opportunity.applicationBanner?.src);
  const bannerAfterHero = opportunity.bannerPlacement === 'after-hero';
  const banner = hasBanner ? (
    <OpportunityApplicationBanner banner={opportunity.applicationBanner} />
  ) : null;

  return (
    <OpportunityShell
      navItems={opportunity.navItems}
      getSectionNavAccent={getOpportunityCompactAccent}
      stickyNavTopClassName="top-[4.75rem] md:top-[8.4rem]"
    >
      <>
        {!bannerAfterHero ? banner : null}
        <main className="overflow-x-clip pb-20 sm:pb-24">
          <div
            className={cn(
              "mx-auto max-w-5xl px-3 font-['MoMA_Sans'] sm:px-4",
              hasBanner && !bannerAfterHero ? 'pt-3 sm:pt-6' : 'pt-6 sm:pt-10',
            )}
          >
          {opportunity.visibilityNote ? (
            <p className="mb-3 px-1 text-center text-[11px] leading-relaxed text-stone-500 dark:text-stone-400 sm:mb-4 sm:text-xs">
              {opportunity.visibilityNote}
            </p>
          ) : null}
          {opportunity.audienceKeywords?.terms?.length ? (
            <OpportunityAudienceKeywords data={opportunity.audienceKeywords} />
          ) : opportunity.audienceLine ? (
            <p className={opp.audienceLine}>{opportunity.audienceLine}</p>
          ) : null}

          <OpportunityColorSection sectionId="hero" className="mt-2 sm:mt-4">
            <OpportunityHero opportunity={opportunity} />
          </OpportunityColorSection>
          </div>

          {bannerAfterHero && banner ? <div className="mt-8 w-full sm:mt-10">{banner}</div> : null}

          <div className="mx-auto max-w-5xl px-3 font-['MoMA_Sans'] sm:px-4">
          {opportunity.proofSnapshot ? (
            <OpportunityColorSection sectionId="honesty" className="mt-10 sm:mt-14">
              <ProofSnapshotSection data={opportunity.proofSnapshot} framed />
            </OpportunityColorSection>
          ) : opportunity.honestyOverlay ? (
            <OpportunityColorSection sectionId="honesty" className="mt-10 sm:mt-14">
              <HonestyOverlaySection data={opportunity.honestyOverlay} framed />
            </OpportunityColorSection>
          ) : null}

          <OpportunityColorSection sectionId="fit" className="mt-10 sm:mt-14">
            <RoleMatchMatrix opportunity={opportunity} framed />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="case-studies" className="mt-10 sm:mt-14">
            <CaseStudyGrid opportunity={opportunity} framed />
          </OpportunityColorSection>

          {opportunity.teachingHighlights?.length || opportunity.certifications?.length ? (
            <OpportunityColorSection sectionId="teaching-cred" className="mt-10 sm:mt-14">
              <OpportunityTeachingCredentials opportunity={opportunity} framed />
            </OpportunityColorSection>
          ) : null}

          {opportunity.codeInspect ? (
            <OpportunityColorSection sectionId="code-inspect" className="mt-10 sm:mt-14">
              <CodeInspectSection data={opportunity.codeInspect} framed />
            </OpportunityColorSection>
          ) : null}

          {opportunity.skillsMatrixRows.length ? (
            <OpportunityColorSection sectionId="skills" className="mt-10 sm:mt-14">
              <SkillsMatrix opportunity={opportunity} framed />
              {opportunity.capabilitiesHref ? (
                <CapabilitiesDeepLink href={opportunity.capabilitiesHref} className="mt-6" />
              ) : null}
            </OpportunityColorSection>
          ) : opportunity.capabilitiesHref ? (
            <div className="mt-10 sm:mt-14">
              <CapabilitiesDeepLink href={opportunity.capabilitiesHref} />
            </div>
          ) : null}

          <OpportunityColorSection sectionId="process" className="mt-10 sm:mt-14">
            <InnovationProcess
              opportunity={opportunity}
              diagrams={opportunity.processDiagrams}
              framed
              layout="horizontal"
            />
          </OpportunityColorSection>

          {opportunity.applicationAnswers?.length ? (
            <OpportunityColorSection sectionId="application-answers" className="mt-10 sm:mt-14">
              <OpportunityApplicationAnswers opportunity={opportunity} framed />
            </OpportunityColorSection>
          ) : null}

          {opportunity.plan ? (
            <OpportunityColorSection sectionId="plan" className="mt-10 sm:mt-14">
              <ThirtySixtyNinetyPlan data={opportunity.plan} sectionId="plan" framed />
            </OpportunityColorSection>
          ) : null}

          {opportunity.animatedLogoBand?.length ? (
            <section className="mt-12 sm:mt-16" aria-labelledby="platform-logos-heading">
              <h2 id="platform-logos-heading" className={`mb-4 ${opp.h2Bold}`}>
                Platforms and tools
              </h2>
              <AnimatedLogoBand logos={opportunity.animatedLogoBand} bleed ariaLabel="Partner and stack logos" />
            </section>
          ) : (
            <TechStackLogos opportunity={opportunity} />
          )}

          <OpportunityColorSection sectionId="resume" className="mt-10 sm:mt-14">
            <ResumeCTA opportunity={opportunity} framed />
          </OpportunityColorSection>
          </div>
        </main>
      </>
    </OpportunityShell>
  );
}
