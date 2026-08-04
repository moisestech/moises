/**
 * Ogilvy — Senior AI-Driven Creative Director
 * /opportunities/ogilvy-senior-ai-driven-creative-director
 *
 * Banner title may appear as Creative Director / Creative Editor depending on listing.
 * Do not invent Ogilvy client work or network title history.
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { ogilvySeniorAiDrivenCreativeDirectorBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Senior AI-Driven Creative Director';
const COMPANY = 'Ogilvy';
const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities framed for a senior AI-driven creative seat: concept leadership, generative production under review, and systems that protect brand voice at network scale.',
  caseStudiesIntro:
    'Evidence of AI-native visual systems, editorial identity, and creative leadership—not network campaign claims.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — culturally sharp, brand-safe AI craft',
    conceptBody:
      'A self-initiated campaign system showing how a strong visual idea moves from exploration to channel rollout with critique gates—built to demonstrate Ogilvy-adjacent creative discipline, not to claim Ogilvy client work.',
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Ogilvy-facing priorities mapped to demonstrated practice. Do not read this as prior Ogilvy employment or network ACD title history.',
  ctaHeadline: 'Let’s put AI in service of ideas—not the other way around.',
});

export const ogilvySeniorAiDrivenCreativeDirectorOpportunity = createCreativeAgencyOpportunity({
  slug: 'ogilvy-senior-ai-driven-creative-director',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — Ogilvy · Senior AI-Driven Creative Director',
  seoDescription:
    'Private application dossier for Ogilvy Senior AI-Driven Creative Director — human-directed generative systems, brand craft, and creative leadership.',
  banner: ogilvySeniorAiDrivenCreativeDirectorBanner,
  heroEyebrow: 'APPLICATION DOSSIER · OGILVY',
  headline: 'Ideas first. AI as craft acceleration.',
  subheadline: `${ROLE_TITLE} · Selected work for Ogilvy`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist. I lead visual and editorial systems where generative tools expand exploration while human critique protects taste, brand integrity, and cultural precision—the standard an Ogilvy creative seat requires.',
  ],
  trustLine: 'Lore Machine · AI24 · Oolite Arts · Cooper Union BFA',
  heroMetaChips: [
    'AI creative leadership',
    'Brand + editorial systems',
    'Adobe production',
    'Cross-functional translation',
    'Miami / remote-flexible',
  ],
  audienceTerms: [
    {
      label: 'Ogilvy',
      detail: 'Global creative network — ideas, brand craft, and emerging technology under discipline.',
    },
    {
      label: 'AI-Driven Creative Director',
      detail: 'Senior creative judgment with generative production fluency—not tool novelty alone.',
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
      requirement: 'AI-driven creative leadership',
      evidence:
        'Chief Prompt Officer / founding engineer at Lore Machine; AI24 editorial pipeline with human review before publish.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'Concept and visual craft',
      evidence:
        'Museum-legible art practice plus product and editorial visual systems—original POV with production finish.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Team enablement',
      evidence:
        'Oolite workshops and artist mentorship; translating emerging tools for non-engineers; critique culture.',
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
  emailSubject: 'Ogilvy — Senior AI-Driven Creative Director — Moises Sanabria',
  availabilityNote:
    'Available for Ogilvy Senior AI-Driven Creative Director conversations; location and hybrid expectations to confirm against the live listing.',
});
