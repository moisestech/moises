import { flagshipEvidence } from '@/content/evidence/flagships';
import {
  creativeGanPillars,
  creativeStrategistFlagshipBanner,
  creativeSystemsCapabilities,
  creativeSystemsCases,
  creativeSystemsHeadshot,
  creativeSystemsLogoBand,
  creativeSystemsMotion,
  creativeSystemsNavItems,
  creativeSystemsStack,
  creativeSystemsWorkflow,
} from '@/content/flagships/creativeSystemsShared';

/**
 * Creative Strategist hiring flagship — reuses the creative-agency component set
 * with strategy / brief / channel framing (sibling to `/creative-ai`).
 */
export const creativeStrategistFlagship = {
  seo: {
    title: 'Creative Strategist — Moises Sanabria',
    description:
      'Creative Strategist flagship: brief clarity, cultural insight, channel systems, GAN art, and AI-accelerated production under human editorial control.',
  },
  eyebrow: 'Hiring flagship · Strategy + production',
  title: 'Creative Strategist',
  subtitle: 'Briefs that survive production. Ideas that survive AI speed.',
  intro:
    'I translate culture, brand constraints, and channel reality into executable creative systems — then stay close enough to production that strategy does not die in the handoff. Generative tools and GAN practice widen exploration; critique, taste, and brand safety decide what ships.',
  primaryCta: {
    label: 'Creative AI flagship',
    href: '/creative-ai',
  },
  secondaryCta: {
    label: 'DAVID / Ogilvy dossier',
    href: '/opportunities/ogilvy-senior-ai-driven-creative-director',
  },
  tertiaryCta: { label: 'Capabilities', href: '/capabilities#design-creative-technology' },
  banner: creativeStrategistFlagshipBanner,
  headshotSrc: creativeSystemsHeadshot.src,
  headshotAlt: creativeSystemsHeadshot.alt,
  logoBand: creativeSystemsLogoBand,
  navItems: creativeSystemsNavItems,
  capabilitiesTitle: 'What strategy looks like in practice',
  capabilitiesIntro:
    'Strategy here is not a deck silo. It is brief discipline, visual territories, review gates, and channel adaptation — the same spine used on creative-agency application dossiers.',
  capabilities: creativeSystemsCapabilities.map((pillar) => {
    if (pillar.id === 'brand-systems') {
      return {
        ...pillar,
        title: 'Insight → visual territory',
        body: 'Audience, offer, and cultural tension translated into mood, lighting, and brand non-negotiables before any generative volume.',
      };
    }
    if (pillar.id === 'ai-production') {
      return {
        ...pillar,
        title: 'AI under brand control',
        body: 'Prompt systems and controlled variation that expand options without inventing off-brand noise — critique kills what fails taste or safety.',
      };
    }
    if (pillar.id === 'creative-ops') {
      return {
        ...pillar,
        title: 'Channel systems',
        body: 'One idea adapted across social, display, web, presentation, and print — with governance so speed does not erase craft.',
      };
    }
    return pillar;
  }),
  ganTitle: 'GAN & machine-learning art',
  ganIntro:
    'Strategy that can point to machine-learning artworks already in the world—Beyond Money, Beyond Markets, StyleGAN sculpture—not hypothetical decks.',
  ganPillars: creativeGanPillars,
  caseStudiesTitle: 'Cases that prove strategy ↔ production',
  caseStudiesIntro:
    'Product storytelling, institutional enablement, and editorial systems — evidence that strategy can be operated, not only presented.',
  caseStudies: creativeSystemsCases,
  workflow: {
    ...creativeSystemsWorkflow,
    title: 'Strategy → production workflow',
    intro:
      'A repeatable path from brief to shippable assets: audience and constraints first, AI exploration second, Adobe finish and channel adaptation last — with QA before delivery.',
  },
  motionSection: creativeSystemsMotion,
  stack: creativeSystemsStack,
  digilabBridge: {
    title: 'Institutional enablement as strategy',
    body: 'Oolite Digital Lab shows strategy as adoption design: tools, curriculum, and critique that make creative technology usable for real collaborators.',
    href: '/oolite-arts',
    imageSrc: flagshipEvidence['oolite-digilab'].imageSrc,
    imageAlt: flagshipEvidence['oolite-digilab'].imageAlt,
  },
  futureCases: {
    id: 'future-cases',
    title: 'Future client production cases',
    body: 'Reserved slots. Rammstein face-recognition documentation (~2020) pending video attach.',
    slots: [
      {
        id: 'rammstein-face',
        title: 'Rammstein — face recognition effect (~2020)',
        note: 'Face-recognition / deep-media effect from ~2020. Video pending—do not treat as live client proof until attached.',
        imageSrc: 'https://i.ytimg.com/vi/Rln1Q5-vGMM/hqdefault.jpg',
        imageAlt: 'Placeholder — AI face/video workflow still until Rammstein clip is attached',
      },
    ],
  },
  relatedFlagships: [
    { id: 'creative-ai', href: '/creative-ai', label: 'Creative AI', status: 'live' as const },
    { id: 'forward-deployed', href: '/forward-deployed', label: 'Forward-Deployed', status: 'live' as const },
    {
      id: 'ogilvy',
      href: '/opportunities/ogilvy-senior-ai-driven-creative-director',
      label: 'DAVID / Ogilvy dossier',
      status: 'live' as const,
    },
  ],
};
