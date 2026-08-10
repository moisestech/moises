/**
 * Morley — Art Director (Remote, Florida)
 * /opportunities/morley-art-director-florida
 *
 * Applied Aug 6 — Motion & Animation section required for dossier completeness.
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  miamiLightCampaignSpecimens,
  creativeAgencyNavItems,
} from './creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';
import { morleyArtDirectorBanner } from '@/content/evidence/applicationBanners';
import type { MotionSection } from './creativeAgencyDossier';

const ROLE_TITLE = 'Art Director';
const COMPANY = 'Morley';
const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;
const multimodal = evidenceProjects['multimodal-image-systems'];

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

const morleyMotionSection: MotionSection = {
  title: 'Motion & Animation',
  intro:
    'Selected motion craft for a Florida-remote art director seat: personally animated sequences, motion paths and keyframes, editing, and compositing—with role labels so ownership is clear.',
  toolsLine:
    'After Effects · Premiere · Photoshop compositing · generative stills refined into motion under human direction',
  clips: [
    {
      id: 'generative-to-composite',
      title: 'Generative still → composited motion study',
      roleLabel: 'Animation · Compositing · Direction',
      contribution:
        'Keyframe timing, layered compositing, and color finish from AI-assisted stills into a controlled motion beat—human direction at every gate.',
      posterSrc: multimodal.imageSrc,
      posterAlt: multimodal.imageAlt,
      placeholderNote:
        'Attach personal motion export (MP4/WebM) when cleared for this dossier. Poster shows related generative-media research still.',
    },
    {
      id: 'editorial-motion-cut',
      title: 'Editorial motion cut / title timing',
      roleLabel: 'Edit · Motion paths · Typography timing',
      contribution:
        'Edit structure, motion-path hierarchy, and title keyframes for editorial pacing—craft that supports story, not novelty effects.',
      posterSrc: ai24.imageSrc,
      posterAlt: ai24.imageAlt,
      placeholderNote:
        'Attach edited sequence with on-screen role credit. Poster is AI24 editorial interface still until clip is uploaded.',
    },
    {
      id: 'product-ui-motion',
      title: 'Product / interface motion polish',
      roleLabel: 'Motion design · UI timing',
      contribution:
        'Micro-timing and transition polish for product surfaces—After Effects / Premiere finish aligned to shipped UI craft.',
      posterSrc: lore.imageSrc,
      posterAlt: lore.imageAlt,
      placeholderNote:
        'Attach UI motion or branded bumper when permission-cleared. Poster is Lore Machine product still.',
    },
    {
      id: 'installation-atmosphere',
      title: 'Installation / atmosphere motion documentation',
      roleLabel: 'Camera · Edit · Atmosphere',
      contribution:
        'Documented motion around installed work—editing and atmosphere cuts that show how images move in space.',
      posterSrc: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
      posterAlt: 'Doomscrolling Treadmill installation — motion documentation context',
      placeholderNote:
        'Attach 10–20s walkthrough or atmosphere cut. Installation still used as honest poster until video is linked.',
    },
  ],
};

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Art-direction capabilities for a Florida-remote seat: visual systems, AI-assisted production under human review, Adobe / Figma craft, and motion finishing.',
  caseStudiesIntro:
    'Selected work showing concept-to-channel thinking, generative production with critique, and shipped interfaces.',
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — Florida light, commercial clarity',
    conceptBody:
      'A self-initiated campaign system oriented to Florida audiences: clear hierarchy, strong stills, and channel adaptations that stay on-brand across social, web, email, and print placeholders.',
    specimens: miamiLightCampaignSpecimens,
  }),
  motionSection: morleyMotionSection,
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Mapped to remote Florida art direction: craft ownership, AI fluency, motion finish, and reliable remote collaboration habits.',
  ctaHeadline: 'Let’s ship art-directed work from Florida—with AI under control.',
});

const morleyNavItems = [
  ...creativeAgencyNavItems.slice(0, 5),
  { id: 'motion', label: 'Motion & Animation', shortLabel: 'Motion', icon: 'tv' as const },
  ...creativeAgencyNavItems.slice(5),
];

export const morleyArtDirectorFloridaOpportunity = createCreativeAgencyOpportunity({
  slug: 'morley-art-director-florida',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  seoTitle: 'Moises Sanabria — Morley · Art Director (Remote, Florida)',
  seoDescription:
    'Private application dossier for Morley Art Director (Remote, Florida) — visual systems, motion craft, AI production, Adobe finish.',
  banner: morleyArtDirectorBanner,
  heroEyebrow: 'APPLICATION DOSSIER · FLORIDA REMOTE',
  headline: 'Art direction with production finish—and AI that stays on brief.',
  subheadline: `${ROLE_TITLE} · Remote · Florida · Selected work for Morley`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist. I art-direct visual systems from concept through Adobe finishing, motion, responsive interfaces, and AI-accelerated exploration—ready for a Florida-remote art director seat that values craft and accountability.',
  ],
  trustLine: 'Miami, Florida · Lore Machine · AI24 · Oolite Arts',
  heroMetaChips: [
    'Florida remote',
    'Art direction',
    'Motion & animation',
    'AI creative workflows',
    'Adobe + Figma',
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
  navItems: morleyNavItems,
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
      requirement: 'Motion, animation & editing',
      evidence:
        'After Effects / Premiere motion paths, keyframes, compositing, and edit structure—see Motion & Animation section with role labels (clips attaching as cleared).',
      status: 'demonstrated',
      illustration: { src: multimodal.imageSrc, alt: multimodal.imageAlt },
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
  applicationStatus: 'submitted',
});
