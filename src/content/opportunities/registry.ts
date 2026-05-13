import type { Opportunity } from './types';
import { cvsGenaiEngineerOpportunity } from './cvs-genai-engineer';
import { knightJournalismTechProductStrategistOpportunity } from './knight-journalism-tech-product-strategist';

const bySlug: Record<string, Opportunity> = {
  [cvsGenaiEngineerOpportunity.slug]: cvsGenaiEngineerOpportunity,
  [knightJournalismTechProductStrategistOpportunity.slug]:
    knightJournalismTechProductStrategistOpportunity,
};

export function getOpportunity(slug: string): Opportunity | undefined {
  return bySlug[slug];
}

export function listOpportunities(): Opportunity[] {
  return Object.values(bySlug);
}

export function listActiveOpportunities(): Opportunity[] {
  return listOpportunities().filter((o) => o.status === 'active');
}

/** For `generateStaticParams` — only statically generate active slugs. */
export function opportunityStaticSlugs(): { slug: string }[] {
  return listActiveOpportunities().map((o) => ({ slug: o.slug }));
}
