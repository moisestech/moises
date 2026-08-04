/**
 * Morley — Art Director (Remote, Florida)
 * /opportunities/morley-art-director-florida
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  miamiLightCampaignSpecimens,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { morleyArtDirectorBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Art Director';
const COMPANY = 'Morley';
const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Art-direction capabilities for a Florida-remote seat: visual systems, AI-assisted production under human review, and hands-on Adobe / Figma craft.',
  caseStudiesIntro:
    'Selected work showing concept-to-channel thinking, generative production with critique, and shipped interfaces.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — Florida light, commercial clarity',
    conceptBody:
      'A self-initiated campaign system oriented to Florida audiences: clear hierarchy, strong stills, and channel adaptations that stay on-brand across social, web, email, and print placeholders.',
    specimens: miamiLightCampaignSpecimens,
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Mapped to remote Florida art direction: craft ownership, AI fluency, and reliable remote collaboration habits.',
  ctaHeadline: 'Let’s ship art-directed work from Florida—with AI under control.',
});

export const morleyArtDirectorFloridaOpportunity = createCreativeAgencyOpportunity({
  slug: 'morley-art-director-florida',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — Morley · Art Director (Remote, Florida)',
  seoDescription:
    'Private application dossier for Morley Art Director (Remote, Florida) — visual systems, AI production, Adobe craft.',
  banner: morleyArtDirectorBanner,
  heroEyebrow: 'APPLICATION DOSSIER · FLORIDA REMOTE',
  headline: 'Art direction with production finish—and AI that stays on brief.',
  subheadline: `${ROLE_TITLE} · Remote · Florida · Selected work for Morley`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist. I art-direct visual systems from concept through Adobe finishing, responsive interfaces, and AI-accelerated exploration—ready for a Florida-remote art director seat that values craft and accountability.',
  ],
  trustLine: 'Miami, Florida · Lore Machine · AI24 · Oolite Arts',
  heroMetaChips: [
    'Florida remote',
    'Art direction',
    'AI creative workflows',
    'Adobe + Figma',
    'Self-managed delivery',
  ],
  audienceTerms: [
    {
      label: 'Morley',
      detail: 'Art Director listing — Remote, Florida.',
    },
    {
      label: 'Art Director',
      detail: 'Visual concept, brand consistency, production ownership.',
    },
    {
      label: 'Florida',
      detail: 'Miami-based — exact state fit for remote Florida requirements.',
    },
  ],
  creativeAgency,
  roleMatchIntro: creativeAgency.alignmentIntro,
  roleMatchRows: [
    {
      requirement: 'Art direction & visual craft',
      evidence:
        'Product and editorial visual systems (Lore Machine, AI24); studio practice with strong conceptual POV; Adobe production fluency.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'AI-assisted creative production',
      evidence:
        'Prompt systems, generative pipelines, and human review gates—not Midjourney-only portfolios.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Remote Florida collaboration',
      evidence:
        'Miami-based; experienced leading distributed creative-technical work across product and institutional partners.',
      status: 'demonstrated',
    },
    {
      requirement: 'Conventional agency campaign book',
      evidence:
        'Honest gap. Self-initiated multi-channel campaign study included with clear placeholders.',
      status: 'todo',
    },
  ],
  emailSubject: 'Morley — Art Director (Remote, Florida) — Moises Sanabria',
  availabilityNote: 'Florida-based (Miami) · remote-ready · available for Morley Art Director.',
});
