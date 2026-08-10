import { flagshipEvidence, listClaimableCases } from '@/content/evidence/flagships';
import {
  creativeSystemsCapabilities,
  creativeSystemsCases,
  creativeSystemsLogoBand,
  creativeSystemsMotion,
  creativeSystemsNavItems,
  creativeSystemsStack,
  creativeSystemsWorkflow,
} from '@/content/flagships/creativeSystemsShared';

export type CreativeLayerId = 'direction' | 'production' | 'software';

export type CreativeLayer = {
  id: CreativeLayerId;
  title: string;
  body: string;
  caseIds: string[];
};

const hub = flagshipEvidence['creative-ai'];

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
      'Creative AI flagship: direction, generative production systems, and software interfaces — Lore Machine, ComfyUI provenance, Digilab, multimodal systems, AI24, motion craft.',
  },
  eyebrow: 'Hiring flagship · Creative systems',
  title: hub.title,
  subtitle: hub.subtitle,
  intro:
    'This is not a Midjourney portfolio. It is proof that creative direction, generative production systems, and software interfaces can be owned end-to-end — for products, institutions, agencies, and research.',
  primaryCta: {
    label: 'DAVID / Ogilvy dossier',
    href: '/opportunities/ogilvy-senior-ai-driven-creative-director',
  },
  secondaryCta: { label: 'Creative Strategist', href: '/creative-strategist' },
  tertiaryCta: { label: 'Tech CV', href: '/cv/tech' },
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
  caseStudiesTitle: 'Selected production cases',
  caseStudiesIntro:
    'Shipped creative systems across product, institutional enablement, and editorial pipelines. Same evidence spine used on agency application dossiers.',
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
    },
    {
      id: 'production',
      title: 'AI production systems',
      body: 'Pipelines that turn briefs into repeatable generative workflows — prompts, ControlNet, ComfyUI graphs, review loops.',
      caseIds: ['comfyui-provenance', 'multimodal-image-systems', 'lore-machine'],
    },
    {
      id: 'software',
      title: 'Software / interfaces',
      body: 'Product surfaces and tools that make creative AI operable by writers, artists, and institutions — not only by engineers.',
      caseIds: ['lore-machine', 'comfyui-provenance', 'ai24'],
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
    title: 'Future client production cases',
    body: 'Reserved slots for client Creative AI delivery (product case + client interpretation). Not claimed as shipped proof.',
    slots: [
      {
        id: 'artlikes',
        title: flagshipEvidence.artlikes.title,
        note: flagshipEvidence.artlikes.summary,
      },
      {
        id: 'monica-client',
        title: flagshipEvidence['monica-client'].title,
        note: flagshipEvidence['monica-client'].summary,
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
