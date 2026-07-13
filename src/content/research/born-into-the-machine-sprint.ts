import { moisesRecruitingProfiles } from '@/content/evidence/recruitingDefaults';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const ideaCenterLogos = {
  horizontal:
    `${CDN}/v1783705543/art/moisestech-website/research/born-into-the-machine/the-idea-center-horizontal-transparent_xcjnkj.png`,
  square:
    `${CDN}/v1783705544/art/moisestech-website/research/born-into-the-machine/the-idea-center-logo-square_vu6zaw.jpg`,
} as const;

export const ideaCenterProgram = {
  name: 'The Idea Center',
  institution: 'Miami Dade College',
  program: 'AI Sprint for Artists',
} as const;

export const bornIntoTheMachineSprintHeroImage = bitmAssets.hero.og;

export const bornIntoTheMachineSprint = {
  title: 'Born into the Machine',
  subtitle: 'AI as studio infrastructure for public art, grants, and physical work.',
  status: 'AI Sprint · in development',
  year: 2026,
  lede:
    'Born into the Machine is a long-form art and research project by Moises Sanabria about what happens when intelligence becomes infrastructure. For the AI Sprint, I am developing it as a context-rich studio engine for grants, public presentation, outreach, and future physical or screen-based artworks.',
  positioning:
    'Moises Sanabria is a Miami-based artist and AI/web systems builder developing Born into the Machine as a grantable public art and research project—positioned for public talks, funding applications, workshops, and physical or screen-based work.',
  sprintFocus:
    'I am not approaching AI only as a prompt or image-generation tool. I am using the sprint to build a reusable AI studio system that helps organize research, clarify language, prepare grants, develop outreach, and translate concepts into public or physical work.',
  noVacancy: {
    title: 'Current application target',
    body: 'No Vacancy Miami Beach is the urgent application target (deadline July 16, 2026). Dual public proposals are live: Volver a Valer (primary candidate — migrating value in hotel space) and Touch Grass: Circuit Floor (alternate modular floor installation).',
  },
  sprintGoals: [
    'Build a context-rich AI project around Born into the Machine',
    'Use No Vacancy as the first urgent grant/application target',
    'Develop reusable language for future grants and public programs',
    'Prepare a talk/workshop pathway around AI beyond prompting',
    'Identify mentors, collaborators, and institutional pathways',
  ],
  engines: [
    {
      title: 'The Attention Engine',
      description:
        'How feeds, platforms, chatbots, and AI assistants shape what people notice, repeat, desire, and value.',
    },
    {
      title: 'The Adaptation Tax',
      description:
        'The unpaid labor of learning, verifying, correcting, and translating AI systems.',
    },
    {
      title: 'The Agency Gap',
      description:
        'The distance between AI-enabled convenience and meaningful human control.',
    },
  ],
  building: [
    'A context-rich Claude Project',
    'A grant-writing and proposal system',
    'A No Vacancy application draft',
    'A public presentation framework',
    'An outreach and contact strategy',
    'A future physical or screen-based artwork branch',
  ],
  lookingFor: [
    'Feedback on structuring the system',
    'Grant and funding pathways',
    'Public talk opportunities',
    'Workshop opportunities',
    'Mentorship',
    'Prototype opportunities',
    'Consulting and job pathways',
    'Collaborators interested in AI beyond prompting',
  ],
  funnel:
    'This sprint-facing page is a doorway into the larger Born into the Machine project—sculptural engines, research, vocabulary, sources, artworks, public programs, and future book development.',
} as const;

export const bornIntoTheMachineSprintLinks = [
  { label: 'Full project page', href: '/research/born-into-the-machine' },
  { label: 'Contact', href: '/contact' },
  { label: 'LinkedIn', href: moisesRecruitingProfiles.linkedin, external: true },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Research index', href: '/research' },
  { label: 'Selected works', href: '/selected-works' },
  { label: 'No Vacancy 2026 packet', href: '/grant/no-vacancy-2026' },
  { label: 'Volver a Valer proposal', href: '/grant/no-vacancy-2026/volver-a-valer' },
] as const;

export const bornIntoTheMachineDeeperLinks = [
  {
    label: 'Born into the Machine — full project',
    href: '/research/born-into-the-machine',
    description: 'AI Studio Infrastructure for Public Art — the complete research hub.',
  },
  {
    label: 'Introduction',
    href: '/research/born-into-the-machine/introduction-embracing-ai-k-hole',
    description: 'Opening chapter — embracing the AI k-hole and the project thesis.',
  },
  {
    label: 'Ethics & Method',
    href: '/research/born-into-the-machine/ethics-method',
    description: 'Stance, method, and vocabulary for human–AI co-writing in the project.',
  },
  {
    label: '365 Post-AI Readymades',
    href: '/research/born-into-the-machine/365-post-ai-readymades',
    description: 'Daily symbolic archive of speculative sculptures, institutional images, and skipped objects.',
  },
  {
    label: 'Sculptural engines',
    href: '/research/born-into-the-machine/sculptural-engines',
    description:
      'Research chapters on intelligence, adaptation, attention, agency, and refusal. (In development)',
  },
  {
    label: 'Bibliography',
    href: '/research/born-into-the-machine/bibliography',
    description: 'Source material and reference library for the project. (In development)',
  },
  {
    label: 'Quote bank',
    href: '/research/born-into-the-machine/quote-bank',
    description: 'Collected language, citations, and vocabulary. (In development)',
  },
  {
    label: 'Noisy Systems',
    href: '/noisy-systems',
    description: 'Research companion on noise, slop, and synthetic abundance in generative AI.',
  },
  {
    label: 'Broken Acceleration',
    href: '/research/broken-acceleration',
    description: 'Proposed public sculpture on civic command and technological acceleration.',
  },
  {
    label: 'Workshops',
    href: '/workshops',
    description: 'Teaching and public program pathways around digital presence and AI.',
  },
] as const;

export const bornIntoTheMachineSprintSeo = {
  title: 'Born into the Machine — AI Sprint for Artists · The Idea Center',
  description:
    'Miami-based artist Moises Sanabria develops Born into the Machine for the AI Sprint for Artists at The Idea Center / Miami Dade College — a grantable public art and research project.',
  ogImageAlt: 'Born into the Machine — AI Sprint for Artists at The Idea Center, Miami Dade College',
  ogImage: ideaCenterLogos.square,
} as const;
