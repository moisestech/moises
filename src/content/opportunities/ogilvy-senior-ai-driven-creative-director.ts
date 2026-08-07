/**
 * Ogilvy — Creative Editor / AI
 * Canonical: /opportunities/ogilvy-senior-ai-driven-creative-director
 * Alias:     /opportunities/ogilvy-senior-ai-driven-creative-editor → redirect
 *
 * Listing: Creative Editor/AI (Miami-active). Banner may still say Creative Director.
 * Do not invent Ogilvy client work or network title history.
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  miamiLightCampaignSpecimens,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { ogilvySeniorAiDrivenCreativeDirectorBanner } from '@/content/evidence/applicationBanners';

/** Listing title on LinkedIn; keep slug stable for existing links. */
const ROLE_TITLE = 'Creative Editor / AI';
const COMPANY = 'Ogilvy';
const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities framed for a Creative Editor/AI seat: editorial judgment, generative production under review, and systems that protect brand voice and story craft.',
  caseStudiesIntro:
    'Evidence of AI-native visual systems, editorial identity, and human critique—not network campaign claims.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — editorial clarity, brand-safe AI craft',
    conceptBody:
      'A self-initiated campaign system showing how a strong visual idea moves from exploration to channel rollout with critique gates—built to demonstrate Ogilvy-adjacent editorial discipline, not to claim Ogilvy client work.',
    eyebrow: 'Self-Initiated Brand-Safe AI Campaign Study',
    specimens: miamiLightCampaignSpecimens,
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Ogilvy Creative Editor/AI priorities mapped to demonstrated practice. Do not read this as prior Ogilvy employment or network ACD title history.',
  ctaHeadline: 'Let’s put AI in service of editorial craft—not the other way around.',
});

export const ogilvySeniorAiDrivenCreativeDirectorOpportunity = createCreativeAgencyOpportunity({
  slug: 'ogilvy-senior-ai-driven-creative-director',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — Ogilvy · Creative Editor / AI',
  seoDescription:
    'Private application dossier for Ogilvy Creative Editor/AI — editorial judgment, human-directed generative systems, and brand craft.',
  banner: ogilvySeniorAiDrivenCreativeDirectorBanner,
  heroEyebrow: 'APPLICATION DOSSIER · OGILVY · MIAMI',
  headline: 'Editorial craft first. AI as production acceleration.',
  subheadline: `${ROLE_TITLE} · Selected work for Ogilvy`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist. I lead editorial and visual systems where generative tools expand exploration while human critique protects taste, narrative clarity, brand integrity, and cultural precision—the standard an Ogilvy Creative Editor/AI seat requires.',
  ],
  trustLine: 'Lore Machine · AI24 · Oolite Arts · Cooper Union BFA',
  heroMetaChips: [
    'Editorial + AI production',
    'Brand voice under review',
    'Adobe finishing',
    'Cross-functional translation',
    'Miami-active',
  ],
  audienceTerms: [
    {
      label: 'Ogilvy',
      detail: 'Global creative network — ideas, brand craft, and emerging technology under discipline.',
    },
    {
      label: 'Creative Editor / AI',
      detail: 'Editorial judgment with generative production fluency—not tool novelty alone.',
    },
    {
      label: 'Human review',
      detail: 'Pipelines that require critique before publish.',
    },
  ],
  creativeAgency,
  roleMatchIntro: creativeAgency.alignmentIntro,
  roleMatchRows: [
    {
      requirement: 'Editorial judgment with AI production',
      evidence:
        'AI24 editorial pipeline with human review before publish; Lore Machine prompt systems turning narrative into structured multimedia under craft control.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Visual and conceptual craft',
      evidence:
        'Museum-legible art practice plus product and editorial visual systems—original POV with production finish.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'Enablement and critique culture',
      evidence:
        'Oolite workshops and artist mentorship; translating emerging tools for non-engineers; review gates as pedagogy.',
      status: 'demonstrated',
      illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
    },
    {
      requirement: 'Network / agency campaign ownership',
      evidence:
        'Not claimed. Conventional agency ACD title path and Ogilvy client campaigns remain an honest gap—addressed via self-initiated channel study.',
      status: 'todo',
    },
  ],
  emailSubject: 'Ogilvy — Creative Editor / AI — Moises Sanabria',
  availabilityNote:
    'Available for Ogilvy Creative Editor/AI conversations; Miami-active listing — confirm location and hybrid expectations against the live post.',
  applicationStatus: 'ready',
});
