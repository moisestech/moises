'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { PositioningStatement } from '@/components/opportunities/PositioningStatement';
import { NestedEnvironmentDiagram } from '@/components/opportunities/NestedEnvironmentDiagram';
import { FitPillars } from '@/components/opportunities/FitPillars';
import { AgentUniverseExplorer } from '@/components/opportunities/AgentUniverseExplorer';
import { EvaluationPhilosophy } from '@/components/opportunities/EvaluationPhilosophy';
import { SystemArchitectureFlow } from '@/components/opportunities/SystemArchitectureFlow';
import { PermissionScenario } from '@/components/opportunities/PermissionScenario';
import { ReliabilityControlPanel } from '@/components/opportunities/ReliabilityControlPanel';
import { EvidenceMatrix } from '@/components/opportunities/EvidenceMatrix';
import { SystemsCaseStudyGrid } from '@/components/opportunities/SystemsCaseStudyGrid';
import { FailureTaxonomy } from '@/components/opportunities/FailureTaxonomy';
import { ResearchQuestions } from '@/components/opportunities/ResearchQuestions';
import { TranslationPanel } from '@/components/opportunities/TranslationPanel';
import { CapabilityMap } from '@/components/opportunities/CapabilityMap';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { ThirtySixtyNinetyPlan } from '@/components/opportunities/ThirtySixtyNinetyPlan';
import { CulturalPerspective } from '@/components/opportunities/CulturalPerspective';
import { RoleReferenceAccordion } from '@/components/opportunities/RoleReferenceAccordion';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { TechStackLogos } from '@/components/opportunities/TechStackLogos';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/content/opportunities/types';

type SystemsOpportunityClientProps = {
  opportunity: Opportunity;
};

/**
 * Systems-engineering application dossier composer.
 * Data-driven via `opportunity.systemsDossier` — not Affirm-specific.
 * When `agentUniverse` is present, uses the research-engineering section order
 * (positioning → lab → evidence → architecture → transition).
 * Does not render full-bleed application banners (text hero only).
 */
export function SystemsOpportunityClient({ opportunity }: SystemsOpportunityClientProps) {
  const dossier = opportunity.systemsDossier;
  if (!dossier) {
    return (
      <OpportunityShell navItems={opportunity.navItems}>
        <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
          <p className={opp.body}>Systems dossier content is missing for this opportunity.</p>
        </main>
      </OpportunityShell>
    );
  }

  const isResearchDossier = Boolean(dossier.agentUniverse);
  const architectureSectionId = isResearchDossier ? 'architecture' : 'systems-demo';
  const transitionSectionId = isResearchDossier ? 'transition' : 'gap';

  const evidenceMatrix = (
    <EvidenceMatrix
      title={opportunity.roleMatchSectionTitle ?? 'Role requirement to demonstrated evidence'}
      intro={opportunity.roleMatchIntro}
      rows={opportunity.roleMatchRows}
      columnHeaders={{
        left: opportunity.roleMatchColumnHeaders?.left ?? 'Requirement',
        right: opportunity.roleMatchColumnHeaders?.right ?? 'Evidence to present',
        status: 'Status',
      }}
      sectionId="evidence"
    />
  );

  const gapSection = (
    <section
      id={transitionSectionId}
      className={cn(opp.sectionSm, isResearchDossier && 'border-stone-300 dark:border-stone-600')}
      aria-labelledby={`${transitionSectionId}-heading`}
    >
      <h2 id={`${transitionSectionId}-heading`} className={opp.h2Bold}>
        {dossier.gapStatement.title}
      </h2>
      <p
        className={cn(
          'mt-4 max-w-3xl',
          opp.body,
          isResearchDossier
            ? 'rounded-xl border border-stone-300 bg-stone-100/90 p-5 dark:border-stone-600 dark:bg-stone-900/80'
            : opp.callout,
        )}
      >
        {dossier.gapStatement.body}
      </p>
    </section>
  );

  return (
    <OpportunityShell navItems={opportunity.navItems}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow dark:focus:bg-stone-900"
      >
        Skip to content
      </a>
      <main id="main-content" className={cn(opp.main, 'pt-8 sm:pt-10')}>
        {opportunity.visibilityNote ? (
          <p className="mb-4 text-center text-xs text-stone-500 dark:text-stone-400">
            {opportunity.visibilityNote}
          </p>
        ) : null}
        {opportunity.audienceKeywords?.terms?.length ? (
          <OpportunityAudienceKeywords data={opportunity.audienceKeywords} />
        ) : null}

        <OpportunityHero opportunity={opportunity} />

        {isResearchDossier ? (
          <div className="mt-10">
            <NestedEnvironmentDiagram />
          </div>
        ) : null}

        {dossier.positioningStatement ? (
          <PositioningStatement data={dossier.positioningStatement} sectionId="position" />
        ) : null}

        <FitPillars
          title={dossier.fitSectionTitle}
          intro={dossier.fitIntro}
          pillars={dossier.fitPillars}
          sectionId="fit"
        />

        {isResearchDossier ? (
          <>
            {dossier.agentUniverse ? (
              <AgentUniverseExplorer data={dossier.agentUniverse} sectionId="evaluation-lab" />
            ) : null}
            {dossier.evaluationPhilosophy ? (
              <EvaluationPhilosophy data={dossier.evaluationPhilosophy} />
            ) : null}
            {evidenceMatrix}
            <SystemsCaseStudyGrid
              title={dossier.caseStudiesTitle}
              intro={dossier.caseStudiesIntro}
              studies={dossier.caseStudies}
              sectionId="work"
            />
            <SystemArchitectureFlow data={dossier.architecture} sectionId={architectureSectionId} />
            {dossier.failureTaxonomy ? (
              <FailureTaxonomy data={dossier.failureTaxonomy} />
            ) : null}
            {dossier.researchQuestions ? (
              <ResearchQuestions data={dossier.researchQuestions} />
            ) : null}
            {gapSection}
            <CapabilityMap data={dossier.capabilityMap} sectionId="capabilities" />
            <InnovationProcess opportunity={opportunity} sectionId="approach" />
            <ThirtySixtyNinetyPlan data={dossier.plan} sectionId="plan" />
            <section id="why" className={opp.section} aria-labelledby="why-heading">
              <h2 id="why-heading" className={opp.h2}>
                {dossier.whyCompany.title}
              </h2>
              <div className={`mt-4 max-w-3xl space-y-4 ${opp.body}`}>
                {dossier.whyCompany.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </section>
            {dossier.culturalPerspective ? (
              <CulturalPerspective data={dossier.culturalPerspective} />
            ) : null}
          </>
        ) : (
          <>
            <SystemArchitectureFlow data={dossier.architecture} sectionId={architectureSectionId} />
            {dossier.permissions ? (
              <PermissionScenario data={dossier.permissions} sectionId="permissions" />
            ) : null}
            {dossier.reliability ? (
              <ReliabilityControlPanel data={dossier.reliability} sectionId="reliability" />
            ) : null}
            {evidenceMatrix}
            <SystemsCaseStudyGrid
              title={dossier.caseStudiesTitle}
              intro={dossier.caseStudiesIntro}
              studies={dossier.caseStudies}
              sectionId="work"
            />
            {dossier.translation ? (
              <TranslationPanel data={dossier.translation} sectionId="translation" />
            ) : null}
            <CapabilityMap data={dossier.capabilityMap} sectionId="capabilities" />
            <InnovationProcess opportunity={opportunity} sectionId="approach" />
            <ThirtySixtyNinetyPlan data={dossier.plan} sectionId="plan" />
            <section id="why" className={opp.section} aria-labelledby="why-heading">
              <h2 id="why-heading" className={opp.h2}>
                {dossier.whyCompany.title}
              </h2>
              <div className={`mt-4 max-w-3xl space-y-4 ${opp.body}`}>
                {dossier.whyCompany.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </section>
            {gapSection}
          </>
        )}

        <RoleReferenceAccordion data={dossier.roleReference} />

        {!opportunity.animatedLogoBand?.length && opportunity.techLogoIds?.length ? (
          <TechStackLogos opportunity={opportunity} />
        ) : null}

        <section id="contact" className={opp.section} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">
            Contact
          </h2>
          <ResumeCTA opportunity={opportunity} />
        </section>
      </main>
    </OpportunityShell>
  );
}
