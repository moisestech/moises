import type { Opportunity } from './types';
import { cvsGenaiEngineerOpportunity } from './cvs-genai-engineer';
import { knightJournalismTechProductStrategistOpportunity } from './knight-journalism-tech-product-strategist';
import { newIncMediaFabricationLabManagerOpportunity } from './new-inc-media-fabrication-lab-manager';
import { playwireOpportunity } from './playwire';

const bySlug: Record<string, Opportunity> = {
  [cvsGenaiEngineerOpportunity.slug]: cvsGenaiEngineerOpportunity,
  [knightJournalismTechProductStrategistOpportunity.slug]:
    knightJournalismTechProductStrategistOpportunity,
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
