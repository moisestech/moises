/**
 * WMX — Senior Art Director, AI-Driven Design Leader
 * /opportunities/wmx-senior-art-director-ai-driven-design-leader
 * Company: https://www.wearewmx.com/
 *
 * Differentiation vs MSC Travel & Experiences: lead with AI production systems,
 * mentorship, and review gates—not guest-journey / destination storytelling.
 * Differentiation vs WMX Creative + AI: leadership of generative workflows and
 * team critique, not primarily hospitality channel craft.
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
import { wmxAiDrivenDesignLeaderBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Senior Art Director — AI-Driven Design Leader';
const COMPANY = 'WMX';
const lore = evidenceProjects['lore-machine'];
const multimodal = evidenceProjects['multimodal-image-systems'];

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities for an AI-driven design leadership seat: critique standards, generative pipeline design, mentorship under review gates, and production finish that keeps brand taste intact when volume rises.',
  caseStudiesIntro:
    'Selected systems that show how AI enters a design practice as a directed production engine—not as unsupervised output. Delivery status is labeled; unfinished artifacts stay TODO.',
  campaign: buildCampaignSystem({
    eyebrow: 'Self-Initiated AI Production System Study',
    conceptTitle: 'Working concept — Review-gated generative territory',
    conceptBody:
      'One visual territory produced under leadership discipline: brief constraints first, generative exploration second, Adobe finish third, channel crops last. The master still and early social crops are study specimens—proof of a review gate, not a travel campaign pitch.',
    intro:
      'This dossier leads with how AI production is directed and reviewed. The channel study is evidence of a controlled pipeline—not a hospitality guest-journey case (see the MSC Travel & Experiences dossier for that framing).',
    specimens: miamiLightCampaignSpecimens,
  }),
  alignmentTitle: 'Role alignment — AI-Driven Design Leader',
  alignmentIntro:
    'Mapped to generative design leadership: systems thinking, mentorship, and the discipline to keep brand taste intact when AI accelerates volume. Not framed as cruise/hospitality CD tenure.',
  ctaHeadline: 'Let’s lead AI-augmented design with critique, mentorship, and a human eye.',
});

export const wmxAiDrivenDesignLeaderOpportunity = createCreativeAgencyOpportunity({
  slug: 'wmx-senior-art-director-ai-driven-design-leader',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — WMX · Senior Art Director, AI-Driven Design Leader',
  seoDescription:
    'Application dossier for WMX Senior Art Director — AI-Driven Design Leader. Review-gated generative workflows, mentorship, brand systems, Miami hybrid.',
  banner: wmxAiDrivenDesignLeaderBanner,
  heroEyebrow: 'APPLICATION DOSSIER · AI DESIGN LEADERSHIP · MIAMI',
  headline: 'Lead the AI production system—not just the prompt.',
  subheadline: `${ROLE_TITLE} · Selected work for WMX`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist applying for WMX’s AI-Driven Design Leader framing. I build visual production systems where generative tools accelerate exploration while humans own taste, critique, consistency, and brand safety.',
    'This page is about leadership of the pipeline—briefing constraints, reviewing generative drafts, mentoring craft standards, and finishing in Adobe/Figma—not about inventing agency tenure or hospitality campaign metrics. Companion dossier: Creative + AI Expertise (channel craft under the same thesis).',
  ],
  trustLine: 'Lore Machine · Oolite Arts · AI24 · Bakehouse · Miami hybrid',
  heroMetaChips: [
    'AI design leadership',
    'Review gates',
    'Creative mentorship',
    'Brand systems',
    'Adobe + Figma production',
    'Miami hybrid',
  ],
  audienceTerms: [
    {
      label: 'WMX',
      detail: 'Miami creative agency — travel, hospitality, entertainment, nonprofit.',
    },
    {
      label: 'AI-Driven Design Leader',
      detail: 'Own generative workflows, critique standards, and team craft—not unsupervised AI dumps.',
    },
    {
      label: 'Companion dossier',
      detail: 'Creative + AI Expertise listing focuses channel craft; this page focuses leadership systems.',
    },
  ],
  creativeAgency,
  roleMatchIntro: creativeAgency.alignmentIntro,
  roleMatchRows: [
    {
      requirement: 'AI-driven visual direction',
      evidence:
        'Lore Machine prompt operations as art direction; AI24 human-in-the-loop editorial illustration; multimodal research pipelines with explicit review.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'Design leadership & mentorship',
      evidence:
        'Oolite Digital Lab technical direction; founding creative-technical leadership at Lore Machine and AI24; workshops and artist mentorship—critique culture, not title inflation.',
      status: 'demonstrated',
      illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
    },
    {
      requirement: 'Review-gated production systems',
      evidence:
        'Constraint-first generative workflows; Adobe compositing; campaign study with Ready vs Placeholder labels so unfinished work is never oversold.',
      status: 'demonstrated',
      illustration: {
        src: multimodal.imageSrc,
        alt: multimodal.imageAlt,
        local: multimodal.imageLocal,
      },
    },
    {
      requirement: 'Conventional agency ACD tenure / WMX employment',
      evidence: 'Not claimed. Dossier shows transferable leadership of AI-augmented craft from institutional and product contexts.',
      status: 'todo',
    },
  ],
  emailSubject: 'WMX — Senior Art Director (AI-Driven Design Leader) — Moises Sanabria',
  availabilityNote:
    'Miami-based · hybrid-ready · available for WMX Senior Art Director — AI-Driven Design Leader.',
  processIntro:
    'AI design leadership operating motion: lock brand constraints, brief exploration bounds, run generative drafts under critique, select and composite in Adobe, adapt channels, QA for consistency and accessibility—mentor the team through the same gates.',
});
