import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';

export const bitmPage = {
  title: 'BORN INTO THE MACHINE',
  titleDisplay: 'Born into the Machine',
  subtitle: 'AI Studio Infrastructure for Public Art',
  year: 2026,
  version: '2026.1',
  location: 'MIAMI',
  format: 'RESEARCH / SCULPTURE / SOFTWARE',
  author: 'MOISES SANABRIA',
  status: 'ACTIVE',

  thesis:
    'We are no longer merely using machines. We are being born into their systems of vision, labor, memory and governance.',

  thesisMarginal:
    '// A generated image becomes politically meaningful only when someone decides how it enters the world.',

  scrollIndicator: 'BEGIN DEPLOYMENT ↓',

  bootSequence: [
    { delay: 0, text: '_' },
    { delay: 500, text: 'INITIALIZING BIRTH SEQUENCE' },
    { delay: 1200, text: 'BORN INTO THE MACHINE' },
  ],

  heroMetadata: [
    { key: 'STATUS', value: 'ACTIVE' },
    { key: 'LOCATION', value: 'MIAMI' },
    { key: 'FORMAT', value: 'RESEARCH / SCULPTURE / SOFTWARE' },
    { key: 'VERSION', value: '2026.1' },
    { key: 'AUTHOR', value: 'MOISES SANABRIA' },
  ],

  conditionIntro:
    'Everyday interfaces accumulate — phone, feed, recommendation, camera, model, agent — until intelligence feels ambient rather than optional.',

  studioIntro:
    'The studio is not a laptop. It is a maintained production environment: printers, GPUs, cables, maquettes, and the labor to keep them running.',

  methodIntro:
    'Born Into the Machine converts cultural observation into public material culture through a repeatable pipeline — not a single prompt.',

  caseStudiesIntro:
    'Eight works ground the argument. Each answers a different facet of machine birth — prophecy, archive, consumption, attention, faith, privacy, ritual, dependency.',

  publicIntro:
    'Public art requires institutions, workshops, funding, and distribution — a network, not a solo genius with a GPU.',

  ethicsIntro:
    'Ethics here is operational: consent, maintenance, energy, access — checked like a studio preflight, not preached like a manifesto.',

  authorIntro:
    'Moises Sanabria operates as artist, engineer, fabricator, and teacher — building infrastructure for how AI enters public culture.',

  ctas: [
    { label: 'COLLABORATE', href: '/contact', kind: 'collaborate' },
    { label: 'INVITE A TALK', href: '/contact?subject=Talk%20invitation', kind: 'talk' },
    { label: 'HOST A WORKSHOP', href: '/workshops', kind: 'workshop' },
    { label: 'COMMISSION PUBLIC RESEARCH', href: '/contact?subject=Commission', kind: 'commission' },
  ],

  deeperLinks: [
    {
      label: '365 Post-AI Readymades',
      href: '/research/born-into-the-machine/365-post-ai-readymades',
      description: 'Daily symbolic archive of speculative sculptures and skipped objects.',
    },
    {
      label: 'Ethics & Method',
      href: '/research/born-into-the-machine/ethics-method',
      description: 'Stance, method, and vocabulary for human–AI co-writing.',
    },
    {
      label: 'Introduction',
      href: '/research/born-into-the-machine/introduction-embracing-ai-k-hole',
      description: 'Opening chapter — embracing the AI k-hole and project thesis.',
    },
    {
      label: 'Noisy Systems',
      href: '/noisy-systems',
      description: 'Noise, slop, and synthetic abundance in generative AI.',
    },
    {
      label: 'Broken Acceleration',
      href: '/research/broken-acceleration',
      description: 'Public sculpture on civic command and technological acceleration.',
    },
    {
      label: 'Teaching & Workshops',
      href: '/workshops',
      description: 'Public program pathways around digital presence and AI.',
    },
  ],
} as const;

export const bitmSeo = {
  title: 'Born into the Machine — AI Studio Infrastructure for Public Art',
  description:
    'Miami-based artist Moises Sanabria presents Born into the Machine as AI studio infrastructure for public art — a working artistic operating system for grants, institutions, fabrication, and public culture.',
  ogImageAlt: 'Born into the Machine — AI Studio Infrastructure for Public Art',
  ogImage: bitmAssets.hero.og,
} as const;
