/**
 * Razorfish / Publicis Groupe — Junior Art Director
 * /opportunities/razorfish-junior-art-director
 *
 * Title is junior; evidence is senior-capable. Frame honestly: apply with craft strength,
 * do not invent junior-only experience or Publicis employment history.
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  miamiLightCampaignSpecimens,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { razorfishJuniorArtDirectorBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Junior Art Director';
const COMPANY = 'Razorfish';
const lore = evidenceProjects['lore-machine'];
const multimodal = evidenceProjects['multimodal-image-systems'];

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Capabilities for a Razorfish / Publicis Junior Art Director seat: strong visual craft, AI-assisted production under direction, and eagerness to learn agency systems—without overstating network experience.',
  caseStudiesIntro:
    'Selected work demonstrates art-direction range beyond a junior title. Listing title is Junior Art Director; this dossier shows transferable senior craft with honest gaps on conventional agency campaigns.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — digital-first brand system study',
    conceptBody:
      'A self-initiated multi-channel study showing how one idea becomes social, web, email, display, and print-ready frames—useful proof for a Razorfish digital creative culture.',
    specimens: miamiLightCampaignSpecimens,
  }),
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Junior Art Director requirements mapped to demonstrated craft. Title level vs evidence depth is intentional and transparent.',
  ctaHeadline: 'Let’s make digital art direction that holds up under critique.',
});

export const razorfishJuniorArtDirectorOpportunity = createCreativeAgencyOpportunity({
  slug: 'razorfish-junior-art-director',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — Razorfish · Junior Art Director (Publicis Groupe)',
  seoDescription:
    'Private application dossier for Razorfish Junior Art Director — visual craft, AI production, Adobe finish, Publicis Groupe.',
  banner: razorfishJuniorArtDirectorBanner,
  heroEyebrow: 'APPLICATION DOSSIER · RAZORFISH · PUBLICIS GROUPE',
  headline: 'Digital art direction with AI craft—and a willingness to grow inside the system.',
  subheadline: `${ROLE_TITLE} · Publicis Groupe · Selected work for Razorfish`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist applying for Razorfish’s Junior Art Director role. My practice already spans visual systems, AI-assisted production, Adobe craft, and shipped interfaces. I am transparent that my evidence reads senior—while I remain excited to learn Razorfish’s agency process, account rhythms, and Publicis standards from inside the team.',
  ],
  trustLine: 'Publicis Groupe listing · Lore Machine · AI24 · Adobe + Figma',
  heroMetaChips: [
    'Junior Art Director title',
    'Senior-capable craft (honest)',
    'AI creative workflows',
    'Digital-first production',
    'Publicis Groupe',
  ],
  audienceTerms: [
    {
      label: 'Razorfish',
      detail: 'Digital creative agency within Publicis Groupe.',
    },
    {
      label: 'Junior Art Director',
      detail: 'Listing title — dossier shows transferable craft without inventing agency tenure.',
    },
    {
      label: 'Publicis Groupe',
      detail: 'Network context; no prior Publicis employment claimed.',
    },
  ],
  creativeAgency,
  roleMatchIntro: creativeAgency.alignmentIntro,
  roleMatchRows: [
    {
      requirement: 'Art direction craft',
      evidence:
        'Strong visual systems across product, editorial, and studio practice; Adobe production fluency.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'Digital / AI creative tools',
      evidence:
        'Generative pipelines with human review; Midjourney / Firefly / multimodal workflows used as production tools under direction.',
      status: 'demonstrated',
      illustration: {
        src: multimodal.imageSrc,
        alt: multimodal.imageAlt,
        local: multimodal.imageLocal,
      },
    },
    {
      requirement: 'Agency process & junior ownership patterns',
      evidence:
        'Honest ramp. No Publicis/Razorfish employment history. Ready to adopt agency briefs, reviews, and trafficking systems.',
      status: 'learning',
    },
    {
      requirement: 'Portfolio campaign book',
      evidence:
        'Self-initiated multi-channel study included; conventional agency case studies not claimed.',
      status: 'todo',
    },
  ],
  emailSubject: 'Razorfish — Junior Art Director — Moises Sanabria',
  availabilityNote:
    'Available for Razorfish Junior Art Director (Publicis Groupe); location expectations to confirm against the live listing.',
});
