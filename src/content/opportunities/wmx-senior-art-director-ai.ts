/**
 * WMX — Senior Art Director, Creative + AI Expertise
 * /opportunities/wmx-senior-art-director-ai
 *
 * Listing: https://www.indeed.com/viewjob?jk=20436875097d9fd3
 * Company: https://www.wearewmx.com/about/
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { wmxSeniorArtDirectorBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Senior Art Director — Creative + AI Expertise';
const COMPANY = 'WMX';
const lore = evidenceProjects['lore-machine'];
const multimodal = evidenceProjects['multimodal-image-systems'];

export const wmxCreativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Five capability areas mapped to how WMX ships branded work across travel, hospitality, entertainment, and nonprofit clients—under human direction, with AI as acceleration rather than substitute judgment.',
  caseStudiesIntro:
    'Four bodies of work that demonstrate visual systems, AI production under human direction, UX/UI shipping, and creative leadership. Delivery status is labeled per project. Missing production artifacts are marked TODO—not invented.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — Miami light, measured hospitality',
    conceptBody:
      'A hospitality / destination campaign system that treats Miami as a sensory brand territory: heat, waterline, night commerce, and cultural density—without resorting to postcard cliché. Master image establishes the territory; channel adaptations protect typography, crop logic, and CTA hierarchy across social, email, display, presentation, and print.',
    intro:
      'WMX serves travel, tourism, hospitality, entertainment, and nonprofit clients. This section is a clearly labeled self-initiated Miami-oriented campaign study—not a WMX client engagement.',
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'WMX priorities mapped to demonstrated evidence. Gaps stay labeled—especially conventional agency campaigns, hospitality case results, and WooCommerce depth.',
  ctaHeadline: 'Let’s build an AI workflow with taste, accountability, and a human eye.',
});

export const wmxSeniorArtDirectorAiOpportunity = createCreativeAgencyOpportunity({
  slug: 'wmx-senior-art-director-ai',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — WMX · Senior Art Director, Creative + AI Expertise',
  seoDescription:
    'Application dossier for WMX Senior Art Director — Creative + AI Expertise. Human-directed, AI-accelerated, brand-controlled visual systems from Miami.',
  banner: wmxSeniorArtDirectorBanner,
  heroEyebrow: 'APPLICATION DOSSIER · MIAMI',
  headline: 'Human-directed. AI-accelerated. Brand-controlled.',
  subheadline: `${ROLE_TITLE} · Selected work for WMX`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist, design technologist, and AI product builder. I lead visual systems from concept through responsive interfaces, campaign assets, creative pipelines, and production—helping teams use emerging technology without losing taste, control, or brand integrity.',
  ],
  trustLine: 'Lore Machine · Oolite Arts · AI24 · Bakehouse · Miami hybrid',
  heroMetaChips: [
    'Miami-based / Hybrid-ready',
    'AI creative workflows',
    'UX/UI + web development',
    'Adobe production',
    'Creative leadership',
  ],
  audienceTerms: [
    {
      label: 'WMX',
      detail:
        'Miami creative agency serving travel, tourism, hospitality, entertainment, and nonprofit clients.',
    },
    {
      label: 'Senior Art Director',
      detail: 'Visual systems, AI production under human direction, UX/UI, Adobe craft, mentorship.',
    },
    {
      label: 'Miami · hybrid',
      detail: 'Exact location fit for hybrid creative leadership.',
    },
  ],
  creativeAgency: wmxCreativeAgency,
  roleMatchIntro: wmxCreativeAgency.alignmentIntro,
  roleMatchRows: [
    {
      requirement: 'Branding and visual design',
      evidence:
        'Visual systems across Lore Machine product UI, AI24 editorial identity, Bakehouse SmartSign formats, and studio art direction. Campaign channel study in progress (self-initiated).',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'AI creative tools',
      evidence:
        'Production prompt systems and generative pipelines at Lore Machine; Firefly / Midjourney / multimodal workflows; human review before publish at AI24.',
      status: 'demonstrated',
      illustration: {
        src: multimodal.imageSrc,
        alt: multimodal.imageAlt,
        local: multimodal.imageLocal,
      },
    },
    {
      requirement: 'UX/UI',
      evidence:
        'Figma-to-production interfaces for Lore Machine and AI24; responsive institutional and product surfaces; accessibility-minded frontend craft.',
      status: 'demonstrated',
    },
    {
      requirement: 'Adobe production',
      evidence:
        'Photoshop, Illustrator, After Effects, Premiere for compositing, motion, and delivery prep across product, editorial, and installation contexts.',
      status: 'demonstrated',
    },
    {
      requirement: 'Responsive web',
      evidence:
        'Shipped React / Next.js interfaces; HTML/CSS/JS production. Responsive email + WooCommerce: adjacent familiarity—HTML email specimen is a TODO; do not overclaim.',
      status: 'transferable',
    },
    {
      requirement: 'Project ownership',
      evidence:
        'Founding ownership at Lore Machine; Technical Director of Digital at Oolite; co-founder production ownership at AI24.',
      status: 'demonstrated',
      illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
    },
    {
      requirement: 'Mentorship',
      evidence:
        'Oolite artist support and public workshops; AI24 literacy programs; critique and technical translation for collaborators adopting new tools.',
      status: 'demonstrated',
    },
    {
      requirement: 'Miami cultural context',
      evidence:
        'Miami-based practice across Oolite Arts, Bakehouse Art Complex, AI24, and cultural programming—hybrid-ready for WMX’s Miami schedule.',
      status: 'demonstrated',
    },
  ],
  emailSubject: 'WMX — Senior Art Director (Creative + AI) — Moises Sanabria',
  availabilityNote:
    'Miami-based · hybrid-ready · available for WMX Senior Art Director — Creative + AI Expertise.',
});
