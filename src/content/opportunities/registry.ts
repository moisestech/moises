import type { Opportunity } from './types';
import { affirmAiSolutionsEngineerOpportunity } from './affirm-ai-solutions-engineer';
import { airSpaceIntelligenceFullStackEngineerOpportunity } from './air-space-intelligence-full-stack-engineer';
import { blueAcornAgenticAiOpportunity } from './blue-acorn-ici-agentic-ai-integration-engineer';
import { corestoryAiEngineerOpportunity } from './corestory-ai-engineer';
import { cvsGenaiEngineerOpportunity } from './cvs-genai-engineer';
import { deepgramSolutionsArchitectOpportunity } from './deepgram-solutions-architect';
import { endorLabsSolutionsArchitectOpportunity } from './endor-labs-solutions-architect';
import { harveyAutomationEngineerOpportunity } from './harvey-automation-engineer-customer-education';
import { knightJournalismTechProductStrategistOpportunity } from './knight-journalism-tech-product-strategist';
import { neogovStaffAgenticAiOpportunity } from './neogov-staff-agentic-ai-developer';
import { netflixFullStackEngineerOpportunity } from './netflix-full-stack-engineer';
import { newIncMediaFabricationLabManagerOpportunity } from './new-inc-media-fabrication-lab-manager';
import { playwireOpportunity } from './playwire';
import { forwardDeployedAiEngineerOpportunity } from './forward-deployed-ai-engineer';

const bySlug: Record<string, Opportunity> = {
  [affirmAiSolutionsEngineerOpportunity.slug]: affirmAiSolutionsEngineerOpportunity,
  [airSpaceIntelligenceFullStackEngineerOpportunity.slug]:
    airSpaceIntelligenceFullStackEngineerOpportunity,
  [blueAcornAgenticAiOpportunity.slug]: blueAcornAgenticAiOpportunity,
  [corestoryAiEngineerOpportunity.slug]: corestoryAiEngineerOpportunity,
  [cvsGenaiEngineerOpportunity.slug]: cvsGenaiEngineerOpportunity,
  [deepgramSolutionsArchitectOpportunity.slug]: deepgramSolutionsArchitectOpportunity,
  [endorLabsSolutionsArchitectOpportunity.slug]: endorLabsSolutionsArchitectOpportunity,
  [forwardDeployedAiEngineerOpportunity.slug]: forwardDeployedAiEngineerOpportunity,
  [harveyAutomationEngineerOpportunity.slug]: harveyAutomationEngineerOpportunity,
  [knightJournalismTechProductStrategistOpportunity.slug]:
    knightJournalismTechProductStrategistOpportunity,
  [neogovStaffAgenticAiOpportunity.slug]: neogovStaffAgenticAiOpportunity,
  [netflixFullStackEngineerOpportunity.slug]: netflixFullStackEngineerOpportunity,
  [newIncMediaFabricationLabManagerOpportunity.slug]: newIncMediaFabricationLabManagerOpportunity,
  [playwireOpportunity.slug]: playwireOpportunity,
};

export function getOpportunity(slug: string): Opportunity | undefined {
  return bySlug[slug];
}

export function listOpportunities(): Opportunity[] {
  return Object.values(bySlug);
}

export function listActiveOpportunities(): Opportunity[] {
  return listOpportunities().filter((o) => o.status === 'active' && o.listed !== false);
}

/** For `generateStaticParams` — all active slugs including unlisted private dossiers. */
export function opportunityStaticSlugs(): { slug: string }[] {
  return listOpportunities()
    .filter((o) => o.status === 'active')
    .map((o) => ({ slug: o.slug }));
}
