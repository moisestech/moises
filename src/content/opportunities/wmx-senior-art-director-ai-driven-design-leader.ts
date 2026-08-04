/**
 * WMX — Senior Art Director, AI-Driven Design Leader
 * /opportunities/wmx-senior-art-director-ai-driven-design-leader
 * Company: https://www.wearewmx.com/
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { wmxAiDrivenDesignLeaderBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Senior Art Director — AI-Driven Design Leader';
const COMPANY = 'WMX';
const lore = evidenceProjects['lore-machine'];
const multimodal = evidenceProjects['multimodal-image-systems'];

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities framed for an AI-driven design leadership seat: visual judgment first, generative acceleration second, brand control always.',
  caseStudiesIntro:
    'Selected systems that show how AI enters a design practice without replacing direction, critique, or production craft.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — Miami as design system, not postcard',
    conceptBody:
      'A travel and hospitality campaign study built as a controlled visual system: one territory, many channels, human-reviewed AI exploration, Adobe finishing.',
    intro:
      'Self-initiated study for WMX’s AI-driven design leadership framing—travel and hospitality adjacent, clearly labeled as non-client work.',
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Mapped to AI-driven design leadership: systems thinking, generative fluency, and the discipline to keep brand taste intact.',
  ctaHeadline: 'Let’s lead AI-augmented design with a human eye.',
});

export const wmxAiDrivenDesignLeaderOpportunity = createCreativeAgencyOpportunity({
  slug: 'wmx-senior-art-director-ai-driven-design-leader',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — WMX · Senior Art Director, AI-Driven Design Leader',
  seoDescription:
    'Application dossier for WMX Senior Art Director — AI-Driven Design Leader. Human-directed generative workflows, brand systems, and Miami hybrid fit.',
  banner: wmxAiDrivenDesignLeaderBanner,
  heroEyebrow: 'APPLICATION DOSSIER · MIAMI · WMX',
  headline: 'AI-driven design with human accountability.',
  subheadline: `${ROLE_TITLE} · Selected work for WMX`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist who builds visual systems where generative tools accelerate exploration while humans keep taste, consistency, and brand safety. This dossier is prepared for WMX’s AI-Driven Design Leader framing.',
  ],
  trustLine: 'Lore Machine · Oolite Arts · AI24 · Bakehouse · Miami hybrid',
  heroMetaChips: [
    'Miami hybrid',
    'AI design leadership',
    'Brand systems',
    'Adobe + Figma production',
    'Creative mentorship',
  ],
  audienceTerms: [
    {
      label: 'WMX',
      detail: 'Miami creative agency — travel, hospitality, entertainment, nonprofit.',
    },
    {
      label: 'AI-Driven Design Leader',
      detail: 'Art direction that integrates generative tools into controlled production.',
    },
    {
      label: 'wearewmx.com',
      detail: 'Companion dossier to the Creative + AI Expertise listing.',
    },
  ],
  creativeAgency,
  roleMatchIntro: creativeAgency.alignmentIntro,
  roleMatchRows: [
    {
      requirement: 'AI-driven visual direction',
      evidence:
        'Lore Machine prompt operations as art direction; AI24 human-in-the-loop editorial illustration; multimodal research pipelines.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'Design leadership',
      evidence:
        'Oolite Digital Lab technical direction; founding creative-technical leadership at Lore Machine and AI24; workshops and artist mentorship.',
      status: 'demonstrated',
      illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
    },
    {
      requirement: 'Brand-controlled production',
      evidence:
        'Constraint-first generative workflows; Adobe compositing; campaign channel study with explicit placeholders for unfinished specimens.',
      status: 'demonstrated',
      illustration: {
        src: multimodal.imageSrc,
        alt: multimodal.imageAlt,
        local: multimodal.imageLocal,
      },
    },
    {
      requirement: 'Miami hybrid readiness',
      evidence: 'Miami-based practice with institutional and cultural partners; available for hybrid schedule.',
      status: 'demonstrated',
    },
  ],
  emailSubject: 'WMX — Senior Art Director (AI-Driven Design Leader) — Moises Sanabria',
  availabilityNote:
    'Miami-based · hybrid-ready · available for WMX Senior Art Director — AI-Driven Design Leader.',
});
