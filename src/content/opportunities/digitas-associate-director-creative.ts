/**
 * Digitas — Associate Director, Creative
 * /opportunities/digitas-associate-director-creative
 *
 * Banner included with the creative-role set. Do not invent Digitas/Publicis employment.
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { digitasAssociateDirectorCreativeBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Associate Director, Creative';
const COMPANY = 'Digitas';
const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities for an Associate Director, Creative seat: directing visual systems, mentoring collaborators, and integrating AI into brand-safe production.',
  caseStudiesIntro:
    'Leadership and systems evidence from product, lab, and editorial contexts—not Digitas client claims.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — data-aware brand storytelling',
    conceptBody:
      'A self-initiated multi-channel campaign system emphasizing clarity, performance-minded hierarchy, and AI exploration under critique—adjacent to Digitas’ digital creative culture.',
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Associate Director creative priorities mapped to demonstrated leadership and craft. Digitas employment not claimed.',
  ctaHeadline: 'Let’s direct creative systems that scale without losing taste.',
});

export const digitasAssociateDirectorCreativeOpportunity = createCreativeAgencyOpportunity({
  slug: 'digitas-associate-director-creative',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — Digitas · Associate Director, Creative',
  seoDescription:
    'Private application dossier for Digitas Associate Director, Creative — leadership, AI craft, brand systems.',
  banner: digitasAssociateDirectorCreativeBanner,
  heroEyebrow: 'APPLICATION DOSSIER · DIGITAS',
  headline: 'Creative leadership that keeps AI accountable to the brand.',
  subheadline: `${ROLE_TITLE} · Selected work for Digitas`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist. I lead visual systems, mentor collaborators, and design AI-augmented production workflows that protect craft. This dossier is prepared for Digitas’ Associate Director, Creative seat.',
  ],
  trustLine: 'Lore Machine · Oolite Arts · AI24 · creative leadership without Digitas tenure claims',
  heroMetaChips: [
    'Associate Director framing',
    'Creative leadership',
    'AI production systems',
    'Mentorship',
    'Digital craft',
  ],
  audienceTerms: [
    {
      label: 'Digitas',
      detail: 'Digital creative network — Associate Director, Creative.',
    },
    {
      label: 'Associate Director',
      detail: 'Direction, quality bar, mentorship—without inventing Digitas headcount.',
    },
    {
      label: 'AI craft',
      detail: 'Generative tools under human review and brand constraints.',
    },
  ],
  creativeAgency,
  roleMatchIntro: creativeAgency.alignmentIntro,
  roleMatchRows: [
    {
      requirement: 'Creative direction & quality bar',
      evidence:
        'Visual systems leadership across Lore Machine and AI24; critique and review gates before publish.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'Mentorship & team enablement',
      evidence:
        'Oolite Digital Lab technical direction, workshops, and artist support; translating emerging tools for collaborators.',
      status: 'demonstrated',
      illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
    },
    {
      requirement: 'AI-integrated creative production',
      evidence:
        'Prompt operations, generative pipelines, Adobe refinement, human-in-the-loop editorial systems.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Digitas / agency Associate Director tenure',
      evidence:
        'Not claimed. Conventional agency ACD path and Digitas client ownership remain an honest gap.',
      status: 'todo',
    },
  ],
  emailSubject: 'Digitas — Associate Director, Creative — Moises Sanabria',
  availabilityNote:
    'Available for Digitas Associate Director, Creative; location and hybrid expectations to confirm against the live listing.',
});
