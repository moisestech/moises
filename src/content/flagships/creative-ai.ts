import { flagshipEvidence, listClaimableCases } from '@/content/evidence/flagships';
import {
  creativeAiFlagshipBanner,
  creativeGanPillars,
  creativeSystemsCapabilities,
  creativeSystemsCases,
  creativeSystemsHeadshot,
  creativeSystemsLogoBand,
  creativeSystemsMotion,
  creativeSystemsNavItems,
  creativeSystemsStack,
  creativeSystemsWorkflow,
  LINDEMANN_ICH_WEISS_ES_NICHT_YT,
} from '@/content/flagships/creativeSystemsShared';
import type { SkillsMatrixIconKey } from '@/content/opportunities/types';

export type CreativeLayerId = 'direction' | 'production' | 'software';

export type CreativeLayer = {
  id: CreativeLayerId;
  title: string;
  body: string;
  caseIds: string[];
  icon?: SkillsMatrixIconKey;
  imageSrc?: string;
  imageAlt?: string;
  outcome?: string;
};

const hub = flagshipEvidence['creative-ai'];
const lore = flagshipEvidence['lore-machine'];
const ai24 = flagshipEvidence.ai24;

const ytPoster = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const shippedCases = listClaimableCases('creative-ai').map((c) => ({
  id: c.id,
  title: c.title,
  subtitle: c.subtitle,
  summary: c.summary,
  href: c.href,
  imageSrc: c.imageSrc,
  imageAlt: c.imageAlt,
  status: c.status,
  repoUrl: c.repoUrl,
}));

export const creativeAiFlagship = {
  seo: {
    title: 'Creative AI — Moises Sanabria',
    description:
      'Creative AI flagship: direction, generative production systems, GAN art, YouTube AI video, and software interfaces — Lore Machine, Beyond Money, Digilab, AI24.',
  },
  eyebrow: 'Hiring flagship · Creative systems',
  title: hub.title,
  subtitle: hub.subtitle,
  intro:
    'This is not a Midjourney portfolio. It is proof that creative direction, generative production systems, GAN practice, AI video, and software interfaces can be owned end-to-end — for products, institutions, agencies, and research.',
  primaryCta: {
    label: 'DAVID / Ogilvy dossier',
    href: '/opportunities/ogilvy-senior-ai-driven-creative-director',
  },
  secondaryCta: { label: 'Creative Strategist', href: '/creative-strategist' },
  tertiaryCta: { label: 'Tech CV', href: '/cv/tech' },
  banner: creativeAiFlagshipBanner,
  headshotSrc: creativeSystemsHeadshot.src,
  headshotAlt: creativeSystemsHeadshot.alt,
  logoBand: creativeSystemsLogoBand,
  navItems: [
    ...creativeSystemsNavItems.slice(0, 2),
    { id: 'layers', label: 'Three layers', shortLabel: 'Layers', icon: 'boxes' as const },
    ...creativeSystemsNavItems.slice(2),
  ],
  capabilitiesTitle: 'What I bring',
  capabilitiesIntro:
    'Creative AI as a production medium: brand systems, generative pipelines under human review, product interfaces, creative ops, and mentorship — not prompt screenshots.',
  capabilities: creativeSystemsCapabilities,
  ganTitle: 'GAN & machine-learning art',
  ganIntro:
    'Long-running ML art practice—Lindemann deep face-swap programming, banknote GANs, market-logo models, crypto StyleGAN sculpture—documented as films and stills, not prompt dumps.',
  ganPillars: creativeGanPillars,
  caseStudiesTitle: 'Selected production cases',
  caseStudiesIntro:
    'Shipped creative systems across product, institutional enablement, and editorial pipelines. Same evidence spine used on agency application dossiers. Status chips show what is ready to cite.',
  caseStudies: creativeSystemsCases,
  workflow: creativeSystemsWorkflow,
  motionSection: creativeSystemsMotion,
  stack: creativeSystemsStack,
  layers: [
    {
      id: 'direction',
      title: 'Creative direction',
      body: 'Concept, visual systems, and editorial judgment that decide what should be generated, shown, or withheld.',
      caseIds: ['lore-machine', 'ai24', 'multimodal-image-systems'],
      icon: 'sparkles',
      imageSrc: lore.imageSrc,
      imageAlt: lore.imageAlt,
      outcome: 'Taste-led briefs, visual territories, and kill decisions before volume scales.',
    },
    {
      id: 'production',
      title: 'AI production systems',
      body: 'Pipelines that turn briefs into repeatable generative workflows — prompts, ControlNet, ComfyUI graphs, review loops.',
      caseIds: ['comfyui-provenance', 'multimodal-image-systems', 'lore-machine'],
      icon: 'workflow',
      imageSrc:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-2_ljoygv.png',
      imageAlt: 'Generative production still — pipelines under editorial control',
      outcome: 'Repeatable generation under brand constraints and human review gates.',
    },
    {
      id: 'software',
      title: 'Software / interfaces',
      body: 'Product surfaces and tools that make creative AI operable by writers, artists, and institutions — not only by engineers.',
      caseIds: ['lore-machine', 'comfyui-provenance', 'ai24'],
      icon: 'code2',
      imageSrc: ai24.imageSrc,
      imageAlt: ai24.imageAlt,
      outcome: 'Creator-facing products and institutional tools that survive real use.',
    },
  ] satisfies CreativeLayer[],
  evidenceCases: shippedCases,
  digilabBridge: {
    title: 'Institutional creative infrastructure',
    body: 'Oolite Digital Lab is the institutional bridge: fabrication, curriculum, and enablement that make creative technology usable in a real arts organization.',
    href: '/oolite-arts',
    imageSrc: flagshipEvidence['oolite-digilab'].imageSrc,
    imageAlt: flagshipEvidence['oolite-digilab'].imageAlt,
  },
  futureCases: {
    id: 'future-cases',
    title: 'Client production cases',
    body: 'Lindemann / Rammstein-adjacent deep face-swap programming is live evidence below. Remaining slots stay unlabeled as shipped proof until assets and permissions clear.',
    slots: [
      {
        id: 'rammstein-face',
        title: 'Lindemann — Ich weiss es nicht (GAN · deep face swaps)',
        note: 'Official StyleGAN music video (~2019, ~113k likes). Credited programming; Moises owned deep face-swap work in Python (Selam X / Daylight team). Watch in Motion & GAN sections.',
        imageSrc: ytPoster(LINDEMANN_ICH_WEISS_ES_NICHT_YT),
        imageAlt: 'Lindemann — Ich weiss es nicht — official GAN music video still',
        youtubeId: LINDEMANN_ICH_WEISS_ES_NICHT_YT,
        status: 'live' as const,
      },
      {
        id: 'artlikes',
        title: flagshipEvidence.artlikes.title,
        note: flagshipEvidence.artlikes.summary,
        status: 'planned' as const,
      },
      {
        id: 'monica-client',
        title: flagshipEvidence['monica-client'].title,
        note: flagshipEvidence['monica-client'].summary,
        status: 'planned' as const,
      },
    ],
  },
  relatedFlagships: [
    { id: 'creative-strategist', href: '/creative-strategist', label: 'Creative Strategist', status: 'live' as const },
    { id: 'forward-deployed', href: '/forward-deployed', label: 'Forward-Deployed', status: 'live' as const },
    { id: 'agentic-ops', href: '/projects/agentic-ops', label: 'Agentic Ops', status: 'building' as const },
    {
      id: 'ogilvy',
      href: '/opportunities/ogilvy-senior-ai-driven-creative-director',
      label: 'DAVID / Ogilvy dossier',
      status: 'live' as const,
    },
  ],
};
