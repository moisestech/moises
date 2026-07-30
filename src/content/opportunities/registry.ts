import type { Opportunity } from './types';
import { affirmAiSolutionsEngineerOpportunity } from './affirm-ai-solutions-engineer';
import { anthropicResearchEngineerUniversesOpportunity } from './anthropic-research-engineer-universes';
import { banescoAiDeveloperOpportunity } from './banesco-ai-developer';
import { blueAcornAgenticAiOpportunity } from './blue-acorn-ici-agentic-ai-integration-engineer';
import { corestoryAiEngineerOpportunity } from './corestory-ai-engineer';
import { cvsGenaiEngineerOpportunity } from './cvs-genai-engineer';
import { deepgramSolutionsArchitectOpportunity } from './deepgram-solutions-architect';
import { endorLabsSolutionsArchitectOpportunity } from './endor-labs-solutions-architect';
import { harveyAutomationEngineerOpportunity } from './harvey-automation-engineer-customer-education';
import { instacartAiSolutionsArchitectOpportunity } from './instacart-ai-solutions-architect';
import { knightJournalismTechProductStrategistOpportunity } from './knight-journalism-tech-product-strategist';
import { neogovStaffAgenticAiOpportunity } from './neogov-staff-agentic-ai-developer';
import { netflixFullStackEngineerOpportunity } from './netflix-full-stack-engineer';
import { newIncMediaFabricationLabManagerOpportunity } from './new-inc-media-fabrication-lab-manager';
import { playwireOpportunity } from './playwire';
import { forwardDeployedAiEngineerOpportunity } from './forward-deployed-ai-engineer';
import { renderSolutionsEngineerOpportunity } from './render-solutions-engineer';
import { stacklokStaffForwardDeployedEngineerOpportunity } from './stacklok-staff-forward-deployed-engineer';
import { talkiatrySeniorAiEngineerOpportunity } from './talkiatry-senior-ai-engineer';
import { wppHexCreativeInnovationLeadOpportunity } from './wpp-hex-creative-innovation-lead-acd';

const bySlug: Record<string, Opportunity> = {
  [affirmAiSolutionsEngineerOpportunity.slug]: affirmAiSolutionsEngineerOpportunity,
  [anthropicResearchEngineerUniversesOpportunity.slug]:
    anthropicResearchEngineerUniversesOpportunity,
  [banescoAiDeveloperOpportunity.slug]: banescoAiDeveloperOpportunity,
  [blueAcornAgenticAiOpportunity.slug]: blueAcornAgenticAiOpportunity,
  [corestoryAiEngineerOpportunity.slug]: corestoryAiEngineerOpportunity,
  [cvsGenaiEngineerOpportunity.slug]: cvsGenaiEngineerOpportunity,
  [deepgramSolutionsArchitectOpportunity.slug]: deepgramSolutionsArchitectOpportunity,
  [endorLabsSolutionsArchitectOpportunity.slug]: endorLabsSolutionsArchitectOpportunity,
  [forwardDeployedAiEngineerOpportunity.slug]: forwardDeployedAiEngineerOpportunity,
  [harveyAutomationEngineerOpportunity.slug]: harveyAutomationEngineerOpportunity,
  [instacartAiSolutionsArchitectOpportunity.slug]: instacartAiSolutionsArchitectOpportunity,
  [knightJournalismTechProductStrategistOpportunity.slug]:
    knightJournalismTechProductStrategistOpportunity,
  [neogovStaffAgenticAiOpportunity.slug]: neogovStaffAgenticAiOpportunity,
  [netflixFullStackEngineerOpportunity.slug]: netflixFullStackEngineerOpportunity,
  [newIncMediaFabricationLabManagerOpportunity.slug]: newIncMediaFabricationLabManagerOpportunity,
  [playwireOpportunity.slug]: playwireOpportunity,
  [renderSolutionsEngineerOpportunity.slug]: renderSolutionsEngineerOpportunity,
  [stacklokStaffForwardDeployedEngineerOpportunity.slug]:
    stacklokStaffForwardDeployedEngineerOpportunity,
  [talkiatrySeniorAiEngineerOpportunity.slug]: talkiatrySeniorAiEngineerOpportunity,
  [wppHexCreativeInnovationLeadOpportunity.slug]: wppHexCreativeInnovationLeadOpportunity,
};

export function getOpportunity(slug: string): Opportunity | undefined {
  return bySlug[slug];
}

export function listOpportunities(): Opportunity[] {
  return Object.values(bySlug);
}

export function listActiveOpportunities(): Opportunity[] {
  return listOpportunities()
    .filter((o) => o.status === 'active' && o.listed !== false)
    .sort((a, b) => {
      const companyCmp = (a.company ?? a.roleTitle ?? a.slug).localeCompare(
        b.company ?? b.roleTitle ?? b.slug,
        undefined,
        { sensitivity: 'base' },
      );
      if (companyCmp !== 0) return companyCmp;
      return (a.roleTitle ?? a.hero.headline).localeCompare(
        b.roleTitle ?? b.hero.headline,
        undefined,
        { sensitivity: 'base' },
      );
    });
}

/** For `generateStaticParams` — all active slugs including unlisted private dossiers. */
export function opportunityStaticSlugs(): { slug: string }[] {
  return listOpportunities()
    .filter((o) => o.status === 'active')
    .map((o) => ({ slug: o.slug }));
}
