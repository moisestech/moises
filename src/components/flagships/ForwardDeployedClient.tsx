'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
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
import { HonestyOverlaySection } from '@/components/opportunities/HonestyOverlaySection';
import { ProofSnapshotSection } from '@/components/opportunities/ProofSnapshotSection';
import { FdeFlagshipCallout } from '@/components/opportunities/FdeFlagshipCallout';
import { LifecycleStageStrip } from '@/components/opportunities/LifecycleStageStrip';
import { FdeDigitalDivider } from '@/components/opportunities/FdeDigitalDivider';
import { AllowAskDeny } from '@/components/opportunities/AepHarnessDiagrams';
import { SupportingEvidenceRow } from '@/components/opportunities/SupportingEvidenceRow';
import { N8nAuthorityBoundary } from '@/components/opportunities/FdeCaseDiagrams';
import { SectionFlourish } from '@/components/opportunities/SectionFlourish';
import { CapabilitiesDeepLink } from '@/components/capabilities/CapabilitiesDeepLink';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { RECRUITING_FDE_SCROLL_MT, RECRUITING_FDE_SUBNAV_TOP } from '@/config/recruiting-layout';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import { forwardDeployedFlagship } from '@/content/flagships/forward-deployed';
import {
  FdeAgenticOpsSection,
  FdeAnatomySection,
  FdeAepInspectSection,
  FdeFrameworkHonestySection,
  FdeHardwareSection,
  FdeHardenNextSection,
  FdeTechMatrixSection,
  FdeTrustSection,
} from '@/components/flagships/FdeEngineeringSections';

export function ForwardDeployedClient() {
  const opportunity = forwardDeployedFlagship;
  const quoteAfter = (after: 'hero' | 'proof' | 'cases' | 'teaching') =>
    opportunity.sectionQuotes?.find((quote) => quote.after === after);
  const scrollMt = RECRUITING_FDE_SCROLL_MT;

  return (
    <OpportunityShell
      navItems={opportunity.navItems}
      getSectionNavAccent={getOpportunityCompactAccent}
      stickyNavTopClassName={RECRUITING_FDE_SUBNAV_TOP}
    >
      <main className="overflow-x-clip pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-3 font-['MoMA_Sans'] sm:px-4 pt-6 sm:pt-10">
          {opportunity.audienceKeywords?.terms?.length ? (
            <OpportunityAudienceKeywords data={opportunity.audienceKeywords} />
          ) : null}

          <OpportunityColorSection sectionId="hero" className={cn('mt-2 sm:mt-4', scrollMt)}>
            <OpportunityHero opportunity={opportunity} />
            <FdeFlagshipCallout className="mt-8 sm:mt-10" />
          </OpportunityColorSection>

          <FdeDigitalDivider label="Discover → Handoff" />
          <LifecycleStageStrip className="mt-6 sm:mt-8" />
        </div>

        <div className="mx-auto max-w-5xl px-3 font-['MoMA_Sans'] sm:px-4">
          {quoteAfter('hero') ? <SectionFlourish quote={quoteAfter('hero')!} className="mt-10 sm:mt-12" /> : null}

          {opportunity.proofSnapshot ? (
            <OpportunityColorSection sectionId="honesty" className={cn('mt-10 sm:mt-14', scrollMt)}>
              <ProofSnapshotSection data={opportunity.proofSnapshot} framed />
            </OpportunityColorSection>
          ) : null}

          {opportunity.honestyOverlay ? (
            <OpportunityColorSection sectionId="proven" className={cn('mt-10 sm:mt-14', scrollMt)}>
              <HonestyOverlaySection data={opportunity.honestyOverlay} framed sectionId="proven" />
            </OpportunityColorSection>
          ) : null}

          {quoteAfter('proof') ? <SectionFlourish quote={quoteAfter('proof')!} className="mt-10 sm:mt-12" /> : null}

          <OpportunityColorSection sectionId="runtime" className={cn('mt-10 sm:mt-14', scrollMt)}>
            <section id="runtime" className={scrollMt} aria-labelledby="runtime-heading">
              <h2 id="runtime-heading" className={opp.h2}>
                Agentic Ops
              </h2>
              <p className={cn(opp.label, 'mt-2')}>Reference implementation · Python / FastAPI / LangGraph</p>
              <div className="mt-6">
                <FdeAgenticOpsSection />
              </div>
              <div className="mt-10 border-t border-stone-200 pt-8 dark:border-stone-700">
                <p className={opp.label}>TypeScript sibling</p>
                <div className="mt-4">
                  <FdeAepInspectSection />
                </div>
              </div>
            </section>
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="anatomy" className={cn('mt-10 sm:mt-14', scrollMt)}>
            <FdeAnatomySection />
          </OpportunityColorSection>

          {opportunity.processSteps.length ? (
            <OpportunityColorSection sectionId="process" className={cn('mt-10 sm:mt-14', scrollMt)}>
              <InnovationProcess opportunity={opportunity} framed layout="horizontal" />
            </OpportunityColorSection>
          ) : null}

          <OpportunityColorSection sectionId="case-studies" className="mt-10 sm:mt-14">
            <CaseStudyGrid opportunity={opportunity} framed />
            <SupportingEvidenceRow opportunity={opportunity} />
            <N8nAuthorityBoundary />
          </OpportunityColorSection>

          {quoteAfter('cases') ? <SectionFlourish quote={quoteAfter('cases')!} className="mt-10 sm:mt-12" /> : null}

          <OpportunityColorSection sectionId="reliability" className={cn('mt-10 sm:mt-14', scrollMt)}>
            <FdeTrustSection />
            <div className="mt-10">
              <AllowAskDeny />
            </div>
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="stack" className={cn('mt-10 sm:mt-14', scrollMt)}>
            <FdeTechMatrixSection />
            <FdeFrameworkHonestySection />
            {opportunity.skillsMatrixRows.length ? (
              <div className="mt-10">
                <SkillsMatrix opportunity={opportunity} framed />
                {opportunity.capabilitiesHref ? (
                  <CapabilitiesDeepLink href={opportunity.capabilitiesHref} className="mt-6" />
                ) : null}
              </div>
            ) : null}
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="hardware" className={cn('mt-10 sm:mt-14', scrollMt)}>
            <FdeHardwareSection />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="fit" className={cn('mt-10 sm:mt-14', scrollMt)}>
            <RoleMatchMatrix opportunity={opportunity} framed />
          </OpportunityColorSection>

          <OpportunityColorSection sectionId="harden" className={cn('mt-10 sm:mt-14', scrollMt)}>
            <FdeHardenNextSection />
          </OpportunityColorSection>

          {opportunity.teachingHighlights?.length || opportunity.certifications?.length ? (
            <OpportunityColorSection sectionId="teaching-cred" className="mt-10 sm:mt-14">
              <OpportunityTeachingCredentials opportunity={opportunity} framed />
            </OpportunityColorSection>
          ) : null}

          {quoteAfter('teaching') ? (
            <SectionFlourish quote={quoteAfter('teaching')!} className="mt-10 sm:mt-12" />
          ) : null}

          {opportunity.animatedLogoBand?.length ? (
            <section className="mt-12 sm:mt-16" aria-labelledby="platform-logos-heading">
              <h2 id="platform-logos-heading" className={`mb-4 ${opp.h2Bold}`}>
                Platforms and tools
              </h2>
              <AnimatedLogoBand logos={opportunity.animatedLogoBand} bleed ariaLabel="Evidenced stack marks" />
            </section>
          ) : (
            <TechStackLogos opportunity={opportunity} />
          )}

          <OpportunityColorSection sectionId="resume" className="mt-10 sm:mt-14">
            <ResumeCTA opportunity={opportunity} framed />
          </OpportunityColorSection>
        </div>
      </main>
    </OpportunityShell>
  );
}
