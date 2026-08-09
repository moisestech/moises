/**
 * WPP HEX — Creative Innovation Lead / ACD
 * /opportunities/wpp-hex-creative-innovation-lead-acd
 *
 * https://wpp.careersitecloud.com/job-6a50e0a35431fb4852d2dc16-creative-innovation-lead-acd-new-york
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
import { wppHexCreativeInnovationLeadBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Creative Innovation Lead / ACD';
const COMPANY = 'WPP HEX';
const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities for a Creative Innovation Lead / ACD seat: concept leadership, AI-native production under critique, and translation between creative, product, and technical partners.',
  caseStudiesIntro:
    'Evidence of innovation systems and editorial craft—not invented WPP network campaign ownership.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — innovation with brand-safe gates',
    conceptBody:
      'A self-initiated system showing how an idea moves from exploration to channel rollout with critique—built to demonstrate HEX-adjacent innovation discipline, not to claim WPP client work.',
    eyebrow: 'Self-Initiated Creative Innovation Study',
    specimens: miamiLightCampaignSpecimens,
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Mapped to Creative Innovation Lead / ACD priorities. Do not read as prior WPP employment or network ACD title history.',
  ctaHeadline: 'Let’s lead creative innovation with AI under human judgment.',
});

export const wppHexCreativeInnovationLeadAcdOpportunity = createCreativeAgencyOpportunity({
  slug: 'wpp-hex-creative-innovation-lead-acd',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — WPP HEX · Creative Innovation Lead / ACD',
  seoDescription:
    'Private application dossier for WPP HEX Creative Innovation Lead / ACD — AI-native craft, critique culture, and creative leadership.',
  banner: wppHexCreativeInnovationLeadBanner,
  heroEyebrow: 'APPLICATION DOSSIER · WPP HEX · NYC',
  headline: 'Innovation with taste. AI with review gates.',
  subheadline: `${ROLE_TITLE} · Selected work for WPP HEX`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist. I lead creative-technology systems where generative tools accelerate exploration while critique protects brand voice, cultural precision, and idea quality—the standard a Creative Innovation Lead / ACD seat requires.',
  ],
  trustLine: 'Lore Machine · AI24 · Oolite Arts · Cooper Union BFA',
  heroMetaChips: [
    'Creative innovation',
    'AI production systems',
    'Critique culture',
    'Cross-functional translation',
    'Open to NYC',
  ],
  audienceTerms: [
    {
      label: 'WPP HEX',
      detail: 'Creative innovation unit — ideas, emerging tech, network craft.',
    },
    {
      label: 'Creative Innovation Lead / ACD',
      detail: 'Senior creative judgment with AI fluency—not tool novelty alone.',
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
      requirement: 'Creative innovation leadership',
      evidence:
        'Lore Machine founding engineer / Chief Prompt Officer; AI24 editorial systems with human review before publish.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'AI-native creative production',
      evidence:
        'Prompt systems, generative pipelines, Adobe finishing, and critique gates—not unsupervised Midjourney grids.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Enablement and translation',
      evidence:
        'Oolite workshops and artist mentorship; translating emerging tools for non-engineers.',
      status: 'demonstrated',
      illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
    },
    {
      requirement: 'Network ACD title path / WPP client ownership',
      evidence:
        'Not claimed. Conventional agency ACD tenure remains an honest gap—addressed via self-initiated innovation study.',
      status: 'todo',
    },
  ],
  emailSubject: 'WPP HEX — Creative Innovation Lead / ACD — Moises Sanabria',
  availabilityNote:
    'Available for WPP HEX Creative Innovation Lead / ACD conversations; NYC location expectations to confirm against the live listing.',
  applicationStatus: 'ready',
});
