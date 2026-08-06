/**
 * MSC Cruises — Creative Director, Travel & Experiences (Hybrid, Miami)
 * /opportunities/msc-cruises-creative-director-travel-experiences
 *
 * Differentiation: guest-journey / destination trust / hospitality touchpoints.
 * Not an AI-systems leadership page — lead with place, experience, and channel craft.
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
import { mscCruisesCreativeDirectorBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Creative Director — Travel & Experiences';
const COMPANY = 'MSC Cruises';
const lore = evidenceProjects['lore-machine'];
const bakehouse =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg';

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities for travel and experience creative direction: destination storytelling, guest-journey clarity across channels, and production systems that keep hospitality brand trust intact when AI accelerates asset volume.',
  caseStudiesIntro:
    'Evidence is adjacent to travel and hospitality through Miami cultural venues, spatial screens, and editorial systems—not MSC cruise campaigns. The channel study below is the commercial bridge.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — Embarkation light',
    conceptBody:
      'A self-initiated voyage campaign system built around one sensory idea: the hour when water, skyline, and arrival anticipation share the same color temperature. Master still sets the territory; landing, social, email, display, deck, and print adapt hierarchy for guest journeys—never MSC trademarks, never claimed as MSC work.',
    intro:
      'MSC needs experience storytelling that holds from destination dream to onboard decision. This labeled study shows channel discipline for Travel & Experiences creative direction.',
    eyebrow: 'Self-Initiated Voyage Campaign Study',
    specimens: miamiLightCampaignSpecimens,
  }),
  alignmentTitle: 'Role alignment — Travel & Experiences',
  alignmentIntro:
    'Mapped to destination creative direction and Miami hybrid leadership. Cruise campaign metrics and MSC employment are not claimed.',
  ctaHeadline: 'Let’s make travel creative that guests trust before they board.',
});

export const mscCruisesCreativeDirectorTravelExperiencesOpportunity =
  createCreativeAgencyOpportunity({
    slug: 'msc-cruises-creative-director-travel-experiences',
    company: COMPANY,
    roleTitle: ROLE_TITLE,
    seoTitle: 'Moises Sanabria — MSC Cruises · Creative Director, Travel & Experiences',
    seoDescription:
      'Private application dossier for MSC Cruises Creative Director Travel & Experiences (Hybrid, Miami) — destination storytelling, guest journeys, channel systems.',
    banner: mscCruisesCreativeDirectorBanner,
    heroEyebrow: 'APPLICATION DOSSIER · MIAMI HYBRID · TRAVEL & EXPERIENCES',
    headline: 'Destination stories that stay clear from dream to decision.',
    subheadline: `${ROLE_TITLE} · Hybrid, Miami · Selected work for MSC Cruises`,
    introParagraphs: [
      'I’m a Miami-based interdisciplinary artist and design technologist applying for MSC Cruises’ Creative Director — Travel & Experiences seat. My work builds visual systems for places and audiences: spatial brand touchpoints, editorial identity, and multi-channel adaptation under human review.',
      'I do not claim cruise hospitality campaign results. What I do bring is Miami hybrid readiness, destination-adjacent storytelling, and a repeatable method for turning one visual idea into landing, social, email, display, presentation, and print—without losing brand control when AI accelerates production.',
    ],
    trustLine: 'Miami hybrid · Bakehouse venue screens · Oolite · AI24 editorial systems',
    heroMetaChips: [
      'Miami hybrid',
      'Guest-journey storytelling',
      'Destination brand systems',
      'Multi-channel craft',
      'AI under human review',
    ],
    audienceTerms: [
      {
        label: 'MSC Cruises',
        detail: 'Travel & Experiences creative leadership — hybrid Miami.',
      },
      {
        label: 'Guest journey',
        detail: 'Clarity from aspiration to booking to onboard experience.',
      },
      {
        label: 'Honest gap',
        detail: 'No MSC cruise campaign metrics—channel study is the bridge.',
      },
    ],
    creativeAgency,
    roleMatchIntro: creativeAgency.alignmentIntro,
    roleMatchRows: [
      {
        requirement: 'Travel / experience storytelling',
        evidence:
          'Miami venue and cultural storytelling (Bakehouse SmartSign formats, open-studio / public-facing screens). Cruise campaigns not claimed—voyage channel study included.',
        status: 'transferable',
        illustration: {
          src: bakehouse,
          alt: 'Bakehouse Art Complex — public-facing cultural and venue context in Miami',
        },
      },
      {
        requirement: 'Multi-channel brand systems',
        evidence:
          'Editorial and product systems (AI24, Lore Machine) plus spatial-to-digital touchpoints—same discipline as travel channel rollout.',
        status: 'demonstrated',
        illustration: { src: lore.imageSrc, alt: lore.imageAlt },
      },
      {
        requirement: 'Miami hybrid creative leadership',
        evidence:
          'Based in Miami; Oolite Digital Lab technical direction; hybrid collaboration with institutional partners.',
        status: 'demonstrated',
        illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
      },
      {
        requirement: 'Hospitality / cruise campaign results',
        evidence:
          'Not claimed. Self-initiated Embarkation light campaign study holds the specimens—labeled, not invented MSC outcomes.',
        status: 'todo',
      },
    ],
    emailSubject: 'MSC Cruises — Creative Director Travel & Experiences — Moises Sanabria',
    availabilityNote:
      'Miami-based · hybrid-ready · available for MSC Cruises Creative Director — Travel & Experiences.',
    processIntro:
      'Travel creative must support guest journeys and brand trust. Operating motion: brief the destination emotion, lock constraints, explore under direction, finish in production tools, adapt channels, QA for accessibility and hospitality clarity.',
  });
