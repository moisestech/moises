/**
 * MSC Cruises — Creative Director, Travel & Experiences (Hybrid, Miami)
 * /opportunities/msc-cruises-creative-director-travel-experiences
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { mscCruisesCreativeDirectorBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Creative Director — Travel & Experiences';
const COMPANY = 'MSC Cruises';
const lore = evidenceProjects['lore-machine'];

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities for travel and experience creative direction: destination storytelling, multi-channel brand systems, and AI-accelerated production under hospitality-grade brand control.',
  caseStudiesIntro:
    'Prior work is adjacent to travel/hospitality through Miami cultural and venue-sited projects—not MSC cruise campaigns. Gaps stay labeled.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — voyage as sensory brand territory',
    conceptBody:
      'A self-initiated travel and experiences campaign system: master image, landing, social ratios, email, display, presentation, and print placeholders—built to close the hospitality channel-system gap for this MSC Creative Director seat.',
    intro:
      'MSC needs travel and experience storytelling at brand scale. This self-initiated study is the portfolio bridge—clearly labeled, not claimed as MSC work.',
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Travel & Experiences creative direction mapped to demonstrated systems and an honest hospitality campaign gap addressed via the channel study.',
  ctaHeadline: 'Let’s design travel experiences that feel authored—not generated.',
});

export const mscCruisesCreativeDirectorTravelExperiencesOpportunity =
  createCreativeAgencyOpportunity({
    slug: 'msc-cruises-creative-director-travel-experiences',
    company: COMPANY,
    roleTitle: ROLE_TITLE,
    seoTitle: 'Moises Sanabria — MSC Cruises · Creative Director, Travel & Experiences',
    seoDescription:
      'Private application dossier for MSC Cruises Creative Director Travel & Experiences (Hybrid, Miami) — destination storytelling, AI craft, channel systems.',
    banner: mscCruisesCreativeDirectorBanner,
    heroEyebrow: 'APPLICATION DOSSIER · MIAMI HYBRID · MSC CRUISES',
    headline: 'Travel creative that earns trust at every touchpoint.',
    subheadline: `${ROLE_TITLE} · Hybrid, Miami · Selected work for MSC Cruises`,
    introParagraphs: [
      'I’m a Miami-based interdisciplinary artist and design technologist. I build visual systems for places, experiences, and audiences—leading concept through channel adaptation with AI as acceleration under human brand control. This dossier is prepared for MSC Cruises’ Travel & Experiences creative direction seat.',
    ],
    trustLine: 'Miami hybrid · Bakehouse / cultural venues · AI24 · Lore Machine',
    heroMetaChips: [
      'Miami hybrid',
      'Travel & experiences',
      'Brand systems',
      'AI under review',
      'Multi-channel craft',
    ],
    audienceTerms: [
      {
        label: 'MSC Cruises',
        detail: 'Travel & Experiences creative leadership — hybrid Miami.',
      },
      {
        label: 'Creative Director',
        detail: 'Concept, brand voice, experience storytelling across channels.',
      },
      {
        label: 'Hospitality gap',
        detail: 'Addressed via self-initiated campaign system—not invented cruise metrics.',
      },
    ],
    creativeAgency,
    roleMatchIntro: creativeAgency.alignmentIntro,
    roleMatchRows: [
      {
        requirement: 'Travel / experience storytelling',
        evidence:
          'Miami cultural and venue-sited work (Bakehouse SmartSign, institutional programs). Cruise hospitality campaigns not claimed—channel study is the bridge.',
        status: 'transferable',
      },
      {
        requirement: 'Creative direction & brand systems',
        evidence:
          'Editorial and product visual systems (AI24, Lore Machine); spatial-to-digital brand touchpoints at Bakehouse.',
        status: 'demonstrated',
        illustration: { src: lore.imageSrc, alt: lore.imageAlt },
      },
      {
        requirement: 'Miami hybrid leadership',
        evidence:
          'Miami-based; Oolite Digital Lab technical direction; comfortable hybrid institutional collaboration.',
        status: 'demonstrated',
        illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
      },
      {
        requirement: 'Hospitality campaign results',
        evidence:
          'TODO / not claimed. Self-initiated travel campaign system included with placeholders for finished specimens.',
        status: 'todo',
      },
    ],
    emailSubject: 'MSC Cruises — Creative Director Travel & Experiences — Moises Sanabria',
    availabilityNote:
      'Miami-based · hybrid-ready · available for MSC Cruises Creative Director — Travel & Experiences.',
  });
