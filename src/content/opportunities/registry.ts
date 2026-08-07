import type { Opportunity } from './types';
import { affirmAiSolutionsEngineerOpportunity } from './affirm-ai-solutions-engineer';
import { airSpaceIntelligenceFullStackEngineerOpportunity } from './air-space-intelligence-full-stack-engineer';
import { aiSolutionsArchitectOpportunity } from './ai-solutions-architect';
import { blueAcornAgenticAiOpportunity } from './blue-acorn-ici-agentic-ai-integration-engineer';
import { corestoryAiEngineerOpportunity } from './corestory-ai-engineer';
import { cvsGenaiEngineerOpportunity } from './cvs-genai-engineer';
import { deepgramSolutionsArchitectOpportunity } from './deepgram-solutions-architect';
import { digitasAssociateDirectorCreativeOpportunity } from './digitas-associate-director-creative';
import { endorLabsSolutionsArchitectOpportunity } from './endor-labs-solutions-architect';
import { harveyAutomationEngineerOpportunity } from './harvey-automation-engineer-customer-education';
import { knightJournalismTechProductStrategistOpportunity } from './knight-journalism-tech-product-strategist';
import { morleyArtDirectorFloridaOpportunity } from './morley-art-director-florida';
import { mscCruisesCreativeDirectorTravelExperiencesOpportunity } from './msc-cruises-creative-director-travel-experiences';
import { neogovStaffAgenticAiOpportunity } from './neogov-staff-agentic-ai-developer';
import { netflixFullStackEngineerOpportunity } from './netflix-full-stack-engineer';
import { newIncMediaFabricationLabManagerOpportunity } from './new-inc-media-fabrication-lab-manager';
import { ogilvySeniorAiDrivenCreativeDirectorOpportunity } from './ogilvy-senior-ai-driven-creative-director';
import { playwireOpportunity } from './playwire';
import { forwardDeployedAiEngineerOpportunity } from './forward-deployed-ai-engineer';
import { comfyMtsFrontendOpportunity } from './comfy-mts-frontend';
import { floraFoundingDataEngineerOpportunity } from './flora-founding-data-engineer';
import { razorfishJuniorArtDirectorOpportunity } from './razorfish-junior-art-director';
import { wmxAiDrivenDesignLeaderOpportunity } from './wmx-senior-art-director-ai-driven-design-leader';
import { wmxSeniorArtDirectorAiOpportunity } from './wmx-senior-art-director-ai';

const bySlug: Record<string, Opportunity> = {
  [affirmAiSolutionsEngineerOpportunity.slug]: affirmAiSolutionsEngineerOpportunity,
  [airSpaceIntelligenceFullStackEngineerOpportunity.slug]:
    airSpaceIntelligenceFullStackEngineerOpportunity,
  [aiSolutionsArchitectOpportunity.slug]: aiSolutionsArchitectOpportunity,
  [blueAcornAgenticAiOpportunity.slug]: blueAcornAgenticAiOpportunity,
  [comfyMtsFrontendOpportunity.slug]: comfyMtsFrontendOpportunity,
  [corestoryAiEngineerOpportunity.slug]: corestoryAiEngineerOpportunity,
  [cvsGenaiEngineerOpportunity.slug]: cvsGenaiEngineerOpportunity,
  [deepgramSolutionsArchitectOpportunity.slug]: deepgramSolutionsArchitectOpportunity,
  [digitasAssociateDirectorCreativeOpportunity.slug]: digitasAssociateDirectorCreativeOpportunity,
  [endorLabsSolutionsArchitectOpportunity.slug]: endorLabsSolutionsArchitectOpportunity,
  [floraFoundingDataEngineerOpportunity.slug]: floraFoundingDataEngineerOpportunity,
  [forwardDeployedAiEngineerOpportunity.slug]: forwardDeployedAiEngineerOpportunity,
  [harveyAutomationEngineerOpportunity.slug]: harveyAutomationEngineerOpportunity,
  [knightJournalismTechProductStrategistOpportunity.slug]:
    knightJournalismTechProductStrategistOpportunity,
  [morleyArtDirectorFloridaOpportunity.slug]: morleyArtDirectorFloridaOpportunity,
  [mscCruisesCreativeDirectorTravelExperiencesOpportunity.slug]:
    mscCruisesCreativeDirectorTravelExperiencesOpportunity,
  [neogovStaffAgenticAiOpportunity.slug]: neogovStaffAgenticAiOpportunity,
  [netflixFullStackEngineerOpportunity.slug]: netflixFullStackEngineerOpportunity,
  [newIncMediaFabricationLabManagerOpportunity.slug]: newIncMediaFabricationLabManagerOpportunity,
  [ogilvySeniorAiDrivenCreativeDirectorOpportunity.slug]:
    ogilvySeniorAiDrivenCreativeDirectorOpportunity,
  [playwireOpportunity.slug]: playwireOpportunity,
  [razorfishJuniorArtDirectorOpportunity.slug]: razorfishJuniorArtDirectorOpportunity,
  [wmxAiDrivenDesignLeaderOpportunity.slug]: wmxAiDrivenDesignLeaderOpportunity,
  [wmxSeniorArtDirectorAiOpportunity.slug]: wmxSeniorArtDirectorAiOpportunity,
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
