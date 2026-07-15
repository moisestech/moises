'use client';

import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { FitPillars } from '@/components/opportunities/FitPillars';
import { SystemArchitectureFlow } from '@/components/opportunities/SystemArchitectureFlow';
import { PermissionScenario } from '@/components/opportunities/PermissionScenario';
import { ReliabilityControlPanel } from '@/components/opportunities/ReliabilityControlPanel';
import { EvidenceMatrix } from '@/components/opportunities/EvidenceMatrix';
import { SystemsCaseStudyGrid } from '@/components/opportunities/SystemsCaseStudyGrid';
import { TranslationPanel } from '@/components/opportunities/TranslationPanel';
import { CapabilityMap } from '@/components/opportunities/CapabilityMap';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { ThirtySixtyNinetyPlan } from '@/components/opportunities/ThirtySixtyNinetyPlan';
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

        <FitPillars
          title={dossier.fitSectionTitle}
          intro={dossier.fitIntro}
          pillars={dossier.fitPillars}
          sectionId="fit"
        />

        <SystemArchitectureFlow data={dossier.architecture} sectionId="systems-demo" />

        <PermissionScenario data={dossier.permissions} sectionId="permissions" />

        <ReliabilityControlPanel data={dossier.reliability} sectionId="reliability" />

        <EvidenceMatrix
          title={opportunity.roleMatchSectionTitle ?? 'Role requirement to demonstrated evidence'}
          intro={opportunity.roleMatchIntro}
          rows={opportunity.roleMatchRows}
          columnHeaders={{
            left: opportunity.roleMatchColumnHeaders?.left ?? 'Affirm requirement',
            right: opportunity.roleMatchColumnHeaders?.right ?? 'Evidence to present',
            status: 'Status',
          }}
          sectionId="evidence"
        />

        <SystemsCaseStudyGrid
          title={dossier.caseStudiesTitle}
          intro={dossier.caseStudiesIntro}
          studies={dossier.caseStudies}
          sectionId="work"
        />

        <TranslationPanel data={dossier.translation} sectionId="translation" />

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

        <section id="gap" className={opp.sectionSm} aria-labelledby="gap-heading">
          <h2 id="gap-heading" className={opp.h2Bold}>
            {dossier.gapStatement.title}
          </h2>
          <p className={cn(opp.callout, 'mt-4 max-w-3xl', opp.body)}>{dossier.gapStatement.body}</p>
        </section>

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
