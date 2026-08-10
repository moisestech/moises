/**
 * Ogilvy / DAVID Agency — Creative Editor / AI
 * Canonical: /opportunities/ogilvy-senior-ai-driven-creative-director
 * Alias:     /opportunities/ogilvy-senior-ai-driven-creative-editor → redirect
 *
 * Listing: Creative Editor/AI · DAVID Agency (WPP / Ogilvy network) · Miami · posted 08/04/2026
 * Do not invent Ogilvy or DAVID client work or network title history.
 *
 * Submission surface: no recruiter-visible TODO / Placeholder tiles.
 */

import { createCreativeAgencyOpportunity } from './createCreativeAgencyOpportunity';
import {
  buildCampaignSystem,
  buildCreativeAgencyDossier,
  creativeAgencyNavItems,
  miamiLightCampaignSpecimens,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
  submissionCreativeCaseStudies,
  submissionCreativeWorkflow,
} from './creativeAgencyShared';
import type { MotionSection } from './creativeAgencyDossier';
import type { RoleReferenceData } from '@/content/opportunities/systemsDossier';
import type { SkillsMatrixRow } from '@/content/opportunities/types';
import { evidenceProjects } from '@/content/evidence/projects';
import { ogilvySeniorAiDrivenCreativeDirectorBanner } from '@/content/evidence/applicationBanners';
import { creativeAiSkillLogoBand } from '@/content/evidence/recruitingLogoBand';

/** Listing title on LinkedIn; keep slug stable for existing links. */
const ROLE_TITLE = 'Creative Editor / AI';
const COMPANY = 'Ogilvy';
const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;
const multimodal = evidenceProjects['multimodal-image-systems'];

/** Landscape generative still (~1.79) — fits motion card better than portrait BA-1. */
const GENERATIVE_LANDSCAPE_STILL =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-2_ljoygv.png';

const ALL_STUDIOS_EVERYTHING_YT = 'XuSwUBULiQs';
const ALL_STUDIOS_POSTER = `https://i.ytimg.com/vi/${ALL_STUDIOS_EVERYTHING_YT}/hqdefault.jpg`;
const LINDEMANN_ICH_WEISS_ES_NICHT_YT = 'obY4c9aqUqs';
const LINDEMANN_POSTER = `https://i.ytimg.com/vi/${LINDEMANN_ICH_WEISS_ES_NICHT_YT}/hqdefault.jpg`;
const POST_AI_READYMADES_HREF = '/research/born-into-the-machine/post-ai-readymades';

const ogilvyMotionSection: MotionSection = {
  title: 'Motion, edit & viral craft',
  intro:
    'Editorial and motion proof for a Creative Editor/AI seat: culture-native video that earns attention, then production systems that keep taste and brand intact under AI acceleration — including pre-hype GAN music-video programming.',
  toolsLine:
    'YouTube · Premiere · After Effects · GANs / StyleGAN · Python face-swap pipelines · generative stills → edit · human review before publish',
  clips: [
    {
      id: 'all-studios-everything',
      title: 'All Studios Everything',
      roleLabel: 'Creator · Edit · Direction · 18M+ views',
      contribution:
        'Original YouTube piece with 18M+ views—scroll-stopping concept, edit rhythm, and cultural hook. Proof that platform-native storytelling can scale without abandoning craft.',
      posterSrc: ALL_STUDIOS_POSTER,
      posterAlt: 'All Studios Everything — YouTube thumbnail',
      youtubeId: ALL_STUDIOS_EVERYTHING_YT,
      featured: true,
    },
    {
      id: 'lindemann-ich-weiss-es-nicht',
      title: 'Lindemann — Ich weiss es nicht (GAN music video)',
      roleLabel: 'Programming · Deep face swaps · Python · ~113k likes · ~2019',
      contribution:
        'Official Lindemann / Universal GAN music video years before the current AI hype. Credited programming on a StyleGAN-class pipeline; Moises specifically owned deep face-swap work in Python (team: Selam X / Daylight Filmproduktion). Honest collaborative credit for an agency Creative Editor/AI conversation about production systems under taste.',
      posterSrc: LINDEMANN_POSTER,
      posterAlt: 'Lindemann — Ich weiss es nicht — official GAN music video still',
      youtubeId: LINDEMANN_ICH_WEISS_ES_NICHT_YT,
      featured: true,
      href: `https://www.youtube.com/watch?v=${LINDEMANN_ICH_WEISS_ES_NICHT_YT}`,
      linkLabel: 'Watch on YouTube',
    },
    {
      id: 'generative-to-edit',
      title: 'Generative still → editorial cut',
      roleLabel: 'AI exploration · Edit · Compositing',
      contribution:
        'Controlled generative exploration refined into editorial pacing—human direction at every gate so AI expands options without owning the final cut. Continues in the Post-AI Readymades research archive.',
      posterSrc: GENERATIVE_LANDSCAPE_STILL,
      posterAlt:
        'Landscape generative still from Broken Acceleration research — source material for editorial cut',
      href: POST_AI_READYMADES_HREF,
      linkLabel: 'Open Post-AI Readymades',
    },
    {
      id: 'ai24-editorial-pipeline',
      title: 'AI24 editorial review pipeline',
      roleLabel: 'Editorial systems · Review gates',
      contribution:
        'Product and editorial surfaces where generative drafts require critique before publish—the same discipline an agency Creative Editor/AI seat needs under brand guidelines.',
      posterSrc: ai24.imageSrc,
      posterAlt: ai24.imageAlt,
    },
  ],
};

const ogilvySkillsMatrix: SkillsMatrixRow[] = [
  {
    category: 'Editorial + AI production',
    skills:
      'Concept → script → execution with AI as accelerator; human critique on taste, brand voice, and cultural precision',
    icon: 'sparkles',
  },
  {
    category: 'Visual design & art direction',
    skills: 'Branding, visual systems, decks, print, information design, UX sensibility',
    icon: 'image',
  },
  {
    category: 'AI creative tools',
    skills:
      'Google AI / VEO 3, OpenAI, Adobe Firefly, Runway-class video, ComfyUI, prompt systems, compositing under human review',
    icon: 'cpu',
  },
  {
    category: 'Adobe craft',
    skills:
      'Expert Photoshop, Illustrator, InDesign (+ Premiere / After Effects finish) — shippable files, not prompt screenshots',
    icon: 'layers',
  },
  {
    category: 'Social & platform-native',
    skills: 'Hooks, formats, repurposing across channels; trend → brief → asset with performance awareness',
    icon: 'tv',
  },
  {
    category: 'Leadership & mentorship',
    skills: 'Directing creators, workshops, critique culture, cross-functional translation (creative ↔ product ↔ leadership)',
    icon: 'users',
  },
];

const ogilvyRoleReference: RoleReferenceData = {
  title: 'Listing snapshot — expand for role meta & network context',
  fields: [
    { label: 'Role', value: 'Creative Editor / AI' },
    { label: 'Agency', value: 'DAVID Agency (Ogilvy / WPP network)' },
    { label: 'Location', value: 'Miami' },
    { label: 'Posted', value: '08/04/2026' },
    { label: 'Focus', value: 'Digital creative + AI production leadership' },
    { label: 'Experience signal', value: '7+ years visual design, art direction, creative strategy' },
  ],
  narrativeSections: [
    {
      heading: 'About DAVID',
      body: 'DAVID is a global creative boutique (founded 2012) with offices including Miami, New York, Madrid, Buenos Aires, São Paulo, and Bogotá. Part of WPP and Ogilvy’s global creative network, it is known for high-craft campaigns and festival recognition (Cannes Lions, EFFIEs, Agency of the Year honors). This dossier does not claim prior DAVID client work.',
    },
    {
      heading: 'About Ogilvy',
      body: 'Ogilvy, part of WPP, builds Borderless Creativity across advertising, PR, relationship design, consulting, and health—ranked #1 global agency network for creative excellence and effectiveness by WARC. The Creative Editor/AI seat sits inside that craft standard.',
    },
    {
      heading: 'About WPP',
      body: 'WPP is the parent network powering media, creativity, production, and enterprise solutions—including the agentic marketing platform WPP Open. Network context only; not an employment claim.',
    },
  ],
  platformReferences: [
    'Adobe Photoshop / Illustrator / InDesign',
    'Adobe Firefly',
    'Google AI / VEO 3',
    'OpenAI',
    'Runway-class video tools',
    'Premiere / After Effects',
    'Social & video storytelling',
  ],
  listingUrl: 'https://www.linkedin.com/jobs/view/creative-editor-ai-at-ogilvy-4400258835',
  listingUrlLabel: 'LinkedIn listing',
};

const creativeAgency = buildCreativeAgencyDossier({
  capabilitiesIntro:
    'Built for DAVID’s Creative Editor/AI seat: originate AI-native concepts, lead production workflows, protect brand craft, and mentor creators—under Borderless Creativity, not tool novelty.',
  caseStudiesIntro:
    'Three shipped proof lines—product generative systems, institutional enablement, and editorial AI literacy. Self-initiated channel study below is labeled; not DAVID or Ogilvy client work.',
  caseStudies: submissionCreativeCaseStudies,
  workflow: submissionCreativeWorkflow,
  campaign: buildCampaignSystem({
    conceptTitle: 'Working concept — editorial clarity, brand-safe AI craft',
    conceptBody:
      'A self-initiated campaign system showing how a strong visual idea moves from exploration to channel crops under critique—built to demonstrate DAVID/Ogilvy-adjacent editorial discipline, not to claim network client work.',
    eyebrow: 'Self-Initiated Brand-Safe AI Campaign Study',
    intro:
      'Ready channel specimens from one master still. Additional formats stay off this page until they are finished—no placeholder tiles on the submission surface.',
    disclaimer:
      'Self-initiated study for application evidence. Not a DAVID or Ogilvy client project. Specimens shown are Ready crops of the master still.',
    specimens: miamiLightCampaignSpecimens,
    readyOnly: true,
  }),
  motionSection: ogilvyMotionSection,
  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'Creative Editor/AI priorities from the Miami listing mapped to demonstrated practice. Do not read this as prior DAVID or Ogilvy employment.',
  ctaHeadline: 'Let’s put AI in service of editorial craft—at DAVID speed.',
});

const ogilvyNavItems = [
  ...creativeAgencyNavItems.slice(0, 2),
  { id: 'skills', label: 'Skills & tools', shortLabel: 'Skills', icon: 'cpu' as const },
  ...creativeAgencyNavItems.slice(2, 5),
  { id: 'motion', label: 'Motion & YouTube', shortLabel: 'Motion', icon: 'tv' as const },
  { id: 'process', label: 'How I’d work', shortLabel: 'Process', icon: 'workflow' as const },
  ...creativeAgencyNavItems.slice(5),
];

export const ogilvySeniorAiDrivenCreativeDirectorOpportunity = createCreativeAgencyOpportunity({
  slug: 'ogilvy-senior-ai-driven-creative-director',
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  evidenceRecipe: 'wpp-hex',
  caseStudiesIntro:
    'PRIMARY Creative AI proof · SECONDARY Forward-Deployed enablement · SUPPORTING Agentic Ops (Building). Same flagships, agency ordering.',
  seoTitle: 'Moises Sanabria — DAVID / Ogilvy · Creative Editor / AI',
  seoDescription:
    'Application dossier for DAVID Agency Creative Editor/AI (Ogilvy / WPP) — editorial judgment, AI production leadership, and brand craft. Includes All Studios Everything (18M+ views).',
  banner: ogilvySeniorAiDrivenCreativeDirectorBanner,
  heroEyebrow: 'APPLICATION DOSSIER · DAVID · OGILVY / WPP · MIAMI',
  headline: 'Editorial craft first. AI as production acceleration.',
  subheadline: `${ROLE_TITLE} · DAVID Agency · Selected work for Ogilvy`,
  introParagraphs: [
    'I’m a Miami-based interdisciplinary artist and design technologist applying for Creative Editor/AI at DAVID Agency (Ogilvy’s global creative network / WPP). I lead editorial and visual systems where generative tools expand exploration while human critique protects taste, narrative clarity, brand integrity, and cultural precision.',
    'What you’ll get: end-to-end ownership from concept and scripting to AI-accelerated execution, platform-native social craft, Adobe finishing, and the judgment to say no when a generative draft fails the brief—plus proof that culture-native video can scale (All Studios Everything, 18M+ views).',
  ],
  trustLine: 'All Studios Everything · Lore Machine · AI24 · Oolite Arts · Cooper Union BFA',
  heroMetaChips: [
    'Editorial + AI production',
    'DAVID / Miami',
    '18M+ view YouTube proof',
    'Adobe finishing',
    'Social & video storytelling',
    'Mentor creators',
  ],
  audienceTerms: [
    {
      label: 'DAVID Agency',
      detail: 'Global creative boutique in the Ogilvy / WPP network — Cannes-caliber craft with Miami presence.',
    },
    {
      label: 'Ogilvy / WPP',
      detail: 'Borderless Creativity — advertising, PR, relationship design, and emerging tech under one network.',
    },
    {
      label: 'Creative Editor / AI',
      detail: 'Lead AI-integrated creative execution: concepts, workflows, social systems, and creator mentorship.',
    },
    {
      label: 'Human review',
      detail: 'Pipelines that require critique before publish — AI accelerates; taste decides.',
    },
  ],
  creativeAgency,
  navItems: ogilvyNavItems,
  animatedLogoBand: creativeAiSkillLogoBand,
  skillsMatrixRows: ogilvySkillsMatrix,
  roleReference: ogilvyRoleReference,
  // companyLogoSrc: wire when DAVID / Ogilvy brand assets are provided (light + dark).
  roleMatchIntro: creativeAgency.alignmentIntro,
  roleMatchRows: [
    {
      requirement: 'Lead AI production workflows & set the standard',
      evidence:
        'AI24 editorial pipeline with human review before publish; Lore Machine prompt systems turning narrative into structured multimedia under craft control.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Own concept → script → execution with AI',
      evidence:
        'End-to-end creative systems from brief to channel crops; self-initiated campaign study shows exploration → critique → Ready specimens.',
      status: 'demonstrated',
      illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    },
    {
      requirement: 'Platform-native social & audiovisual storytelling',
      evidence:
        'All Studios Everything (18M+ YouTube views) plus multi-format campaign adaptations—hooks, pacing, and channel-aware crops.',
      status: 'demonstrated',
      illustration: { src: ALL_STUDIOS_POSTER, alt: 'All Studios Everything — YouTube proof' },
    },
    {
      requirement: 'Adobe craft + AI creative tools fluency',
      evidence:
        'Expert Adobe finishing (Photoshop, Illustrator, InDesign, Premiere, After Effects) with generative exploration under review—Firefly, Google AI / VEO-class, OpenAI, and ComfyUI workflows as accelerators.',
      status: 'demonstrated',
      illustration: { src: multimodal.imageSrc, alt: multimodal.imageAlt },
    },
    {
      requirement: 'Mentor creators & cross-functional collaboration',
      evidence:
        'Oolite workshops and artist mentorship; translating emerging tools for non-engineers; review gates as pedagogy.',
      status: 'demonstrated',
      illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
    },
    {
      requirement: 'Network / DAVID–Ogilvy client campaign ownership',
      evidence:
        'Not claimed. Conventional agency title path and DAVID/Ogilvy client campaigns remain an honest gap—addressed via self-initiated channel study and viral craft proof (Ready specimens only).',
      status: 'todo',
    },
  ],
  processIntro:
    'How I would operate on DAVID briefs: lock brand constraints, explore under direction, finish in Adobe, adapt for platforms, and mentor creators so speed never outruns taste.',
  emailSubject: 'DAVID / Ogilvy — Creative Editor / AI — Moises Sanabria',
  availabilityNote:
    'Available for DAVID Agency Creative Editor/AI conversations (Ogilvy / WPP · Miami listing posted 08/04/2026). Confirm hybrid / onsite expectations against the live post.',
  applicationStatus: 'ready',
  careerPacketHref: '/creative-ai',
});
