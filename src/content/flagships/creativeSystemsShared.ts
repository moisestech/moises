/**
 * Shared creative-systems flagship building blocks.
 * Reuses Ogilvy / creative-agency components without employer-specific JD framing.
 */

import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import {
  creativeAiSkillLogoBand,
  moisesSanabriaHeadshot,
} from '@/content/evidence/recruitingLogoBand';
import {
  creativeAiFlagshipBanner,
  creativeStrategistFlagshipBanner,
  creativeTechImageToolsBanner,
} from '@/content/evidence/applicationBanners';
import type { MotionSection } from '@/content/opportunities/creativeAgencyDossier';
import type { FitPillar } from '@/content/opportunities/systemsDossier';
import type { OpportunityNavItem } from '@/content/opportunities/types';
import {
  buildCreativeCapabilities,
  buildCreativeRolePortfolio,
  submissionCreativeCaseStudies,
  submissionCreativeWorkflow,
} from '@/content/opportunities/creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const GENERATIVE_LANDSCAPE_STILL = `${CDN}/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-2_ljoygv.png`;

export const BEYOND_MONEY_LANDSCAPE = `${CDN}/v1752671997/art/moisestech-website/artworks/2021_beyond_money/moises-sanabria-beyond-money-1_2021_deslxp.png`;

export const POST_AI_READYMADES_HREF = '/research/born-into-the-machine/post-ai-readymades';

const ytPoster = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const ALL_STUDIOS_EVERYTHING_YT = 'XuSwUBULiQs';
const BEYOND_MONEY_YT = 'd_mRjNcVc70';
const BEYOND_MARKETS_YT = 'Dw84ovAAROY';
const BEYOND_THE_MATRIX_YT = 'Rln1Q5-vGMM';
const LATENT_LOVERS_YT = 'r13KZ9a59ek';
const AI_HERO_MANIFESTO_YT = 'WBC0KxCwWIo';
const DIGITAL_DIVINITIES_YT = 'XpE6swmnkxk';
const WEBSITE_NOT_FOUND_YT = '67By5afHB0I';
const AI24_OOLITE_YT = 'fQUgo2vBXUI';

export { creativeAiFlagshipBanner, creativeStrategistFlagshipBanner, creativeTechImageToolsBanner };

export const creativeSystemsHeadshot = {
  src: moisesSanabriaHeadshot,
  alt: 'Moises Sanabria — portrait',
};

export const creativeSystemsLogoBand: LogoBandItem[] = creativeAiSkillLogoBand;

export const creativeSystemsNavItems: OpportunityNavItem[] = [
  { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: 'fileText' },
  { id: 'capabilities', label: 'What I bring', shortLabel: 'Capabilities', icon: 'sparkles' },
  { id: 'case-studies', label: 'Case studies', shortLabel: 'Cases', icon: 'image' },
  { id: 'workflow', label: 'Workflow', shortLabel: 'Workflow', icon: 'workflow' },
  { id: 'motion', label: 'Motion & AI video', shortLabel: 'Motion', icon: 'tv' },
  { id: 'gan', label: 'GAN & ML art', shortLabel: 'GAN', icon: 'cpu' },
  { id: 'stack', label: 'Production stack', shortLabel: 'Stack', icon: 'layers' },
  { id: 'future-cases', label: 'Future cases', shortLabel: 'Future', icon: 'rocket' },
  { id: 'related', label: 'Related', shortLabel: 'Related', icon: 'target' },
];

export const creativeSystemsCapabilities: FitPillar[] = buildCreativeCapabilities();

export const creativeSystemsCases = submissionCreativeCaseStudies;

export const creativeSystemsWorkflow = submissionCreativeWorkflow;

export const creativeSystemsStack = buildCreativeRolePortfolio(
  'Open to Creative AI, Creative Strategist, and Creative Editor/AI roles where editorial judgment leads and generative tools accelerate production.',
).capabilityMap;

/** GAN / machine-learning art pillars — Beyond Money + related ML stills. */
export const creativeGanPillars: FitPillar[] = [
  {
    id: 'beyond-money',
    title: 'Beyond Money',
    body: 'Machine-learning model trained on international banknotes until it generated its own currency-like image—GAN practice as critique of value, nation, and belief.',
    icon: 'sparkles',
    imageSrc: BEYOND_MONEY_LANDSCAPE,
    imageAlt: 'Beyond Money — GAN-generated banknote landscape still',
  },
  {
    id: 'beyond-markets',
    title: 'Beyond Markets #1',
    body: 'Algorithmic trading imagined through a GAN trained on S&P 500 logos—a post-human investor operating without greed or fear.',
    icon: 'lineChart',
    imageSrc: ytPoster(BEYOND_MARKETS_YT),
    imageAlt: 'Beyond Markets #1 — YouTube still from GAN trading work',
  },
  {
    id: 'beyond-the-matrix',
    title: 'Beyond The Matrix',
    body: 'AI music-video simulation with Wav2Lip and Face2Face—face reenactment and lip sync under editorial control (face-recognition adjacency for client deep-media work).',
    icon: 'tv',
    imageSrc: ytPoster(BEYOND_THE_MATRIX_YT),
    imageAlt: 'Beyond The Matrix — AI face/video workflow YouTube still',
  },
  {
    id: 'digital-divinities',
    title: 'Digital Divinities',
    body: 'Collaborative interactive AI installation (Fabiola Larios, Moises Sanabria, Andres Cedillo)—live generative experience for museum and public-art contexts.',
    icon: 'users',
    imageSrc: `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`,
    imageAlt: 'Digital Divinities — collaborative generative installation documentation',
  },
  {
    id: 'in-crypto-we-trust',
    title: 'In Crypto We Trust',
    body: 'StyleGAN2 trained on 500+ cryptocurrency logos, materialised as a sculptural / 3D coin—faith language of crypto communities as techno-denomination.',
    icon: 'cpu',
    imageSrc: ytPoster(BEYOND_MARKETS_YT),
    imageAlt: 'Logo-GAN practice still — related StyleGAN / market-logo machine-learning work',
  },
];

export const creativeSystemsMotion: MotionSection = {
  title: 'Motion, AI video & YouTube craft',
  intro:
    'Application-ready YouTube evidence from the 2026 authorship audit: viral editorial craft, GAN documentation films, AI music-video workflows, and co-directed generative cinema—credited honestly.',
  toolsLine:
    'YouTube · Premiere · After Effects · GANs · Wav2Lip / Face2Face · DALL·E / Runway · human review before publish',
  clips: [
    {
      id: 'all-studios-everything',
      title: 'All Studios Everything',
      roleLabel: 'Concept · Edit · Production · 18M+ views',
      contribution:
        'Original YouTube piece with 18M+ views—scroll-stopping concept, edit rhythm, and cultural hook. Strongest reach signal on the personal channel.',
      posterSrc: ytPoster(ALL_STUDIOS_EVERYTHING_YT),
      posterAlt: 'All Studios Everything — YouTube thumbnail',
      youtubeId: ALL_STUDIOS_EVERYTHING_YT,
      featured: true,
    },
    {
      id: 'beyond-money',
      title: 'Beyond Money',
      roleLabel: 'Artist · ML concept · GAN documentation',
      contribution:
        'Trained a machine-learning model on international banknotes until it generated its own currency-like image—GAN practice presented as film.',
      posterSrc: BEYOND_MONEY_LANDSCAPE,
      posterAlt: 'Beyond Money — GAN banknote landscape still',
      youtubeId: BEYOND_MONEY_YT,
      href: '/art/beyond_money',
      linkLabel: 'Artwork page',
    },
    {
      id: 'beyond-markets',
      title: 'Beyond Markets #1',
      roleLabel: 'Artist · GAN · Speculative systems',
      contribution:
        'Algorithmic trading as subject: generative adversarial network work imagining a post-human investor without greed or fear.',
      posterSrc: ytPoster(BEYOND_MARKETS_YT),
      posterAlt: 'Beyond Markets #1 — YouTube thumbnail',
      youtubeId: BEYOND_MARKETS_YT,
    },
    {
      id: 'beyond-the-matrix',
      title: 'Beyond The Matrix',
      roleLabel: 'AI video · Wav2Lip · Face2Face',
      contribution:
        'Transdimensional deep music-video simulation using Wav2Lip and Face2Face—AI lip sync and face reenactment under editorial control.',
      posterSrc: ytPoster(BEYOND_THE_MATRIX_YT),
      posterAlt: 'Beyond The Matrix — YouTube thumbnail',
      youtubeId: BEYOND_THE_MATRIX_YT,
    },
    {
      id: 'latent-lovers',
      title: 'Latent Lovers',
      roleLabel: 'Co-directed with Fabiola Larios',
      contribution:
        'Neural search for connection through latent space—concise AI film selected by Chroma Art Film Festival.',
      posterSrc: ytPoster(LATENT_LOVERS_YT),
      posterAlt: 'Latent Lovers — YouTube thumbnail',
      youtubeId: LATENT_LOVERS_YT,
    },
    {
      id: 'ai-hero-manifesto',
      title: 'Ai Hero Manifesto',
      roleLabel: 'Co-produced · Damjanski · Fabiola Larios · Moises',
      contribution:
        'Generative image/video production with DALL·E 2, RunwayML, and post tools—collaborative AI filmmaking with explicit tool credits.',
      posterSrc: ytPoster(AI_HERO_MANIFESTO_YT),
      posterAlt: 'Ai Hero Manifesto — YouTube thumbnail',
      youtubeId: AI_HERO_MANIFESTO_YT,
    },
    {
      id: 'digital-divinities',
      title: 'Digital Divinities',
      roleLabel: 'Collaborative · Fabiola Larios · Andres Cedillo · Moises',
      contribution:
        'Interactive AI installation documentation—short fragment for applications; collaborative credit only.',
      posterSrc: ytPoster(DIGITAL_DIVINITIES_YT),
      posterAlt: 'Digital Divinities — YouTube documentation still',
      youtubeId: DIGITAL_DIVINITIES_YT,
    },
    {
      id: 'website-not-found',
      title: 'Website Not Found',
      roleLabel: 'Exhibition video · role to confirm on page',
      contribution:
        'Concise net-art / exhibition documentation from the personal YouTube archive—useful for media-art contexts.',
      posterSrc: ytPoster(WEBSITE_NOT_FOUND_YT),
      posterAlt: 'Website Not Found — YouTube thumbnail',
      youtubeId: WEBSITE_NOT_FOUND_YT,
    },
    {
      id: 'ai24-oolite',
      title: 'AI24 Live @ Oolite — Recursive Value',
      roleLabel: 'Platform / founder evidence · co-founded with Fabiola Larios',
      contribution:
        'Public proof that AI24 was presented as a 24/7 AI-generated programming network—system evidence, not a solo film credit.',
      posterSrc: ytPoster(AI24_OOLITE_YT),
      posterAlt: 'AI24 Live at Oolite Arts — Recursive Value still',
      youtubeId: AI24_OOLITE_YT,
      href: '/ai24',
      linkLabel: 'AI24 hub',
    },
    {
      id: 'generative-to-edit',
      title: 'Generative still → editorial cut',
      roleLabel: 'AI exploration · Edit · Compositing',
      contribution:
        'Controlled generative exploration refined into editorial pacing. Continues in the Post-AI Readymades research archive.',
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
        'Product and editorial surfaces where generative drafts require critique before publish.',
      posterSrc: evidenceProjects.ai24.imageSrc,
      posterAlt: evidenceProjects.ai24.imageAlt,
    },
  ],
};
