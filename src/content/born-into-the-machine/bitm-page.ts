import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { bitmMethodology } from '@/content/born-into-the-machine/bitm-methodology';

export const bitmPage = {
  title: 'BORN INTO THE MACHINE',
  titleDisplay: 'Born into the Machine',
  subtitle: 'A Material Practice for Life Inside Machine Systems',
  secondaryDescriptor: 'AI Studio Infrastructure for Public Art',
  eyebrow: 'RESEARCH / PUBLIC ART / STUDIO INFRASTRUCTURE',
  supportingLine:
    'A research platform tracing how generated propositions become physical, public, and maintainable artworks.',
  year: 2026,
  version: '2026.1',
  location: 'MIAMI',
  format: 'RESEARCH / SCULPTURE / SOFTWARE / PUBLIC PROGRAM',
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
    { key: 'FORMAT', value: 'RESEARCH / SCULPTURE / SOFTWARE / PUBLIC PROGRAM' },
    { key: 'VERSION', value: '2026.1' },
    { key: 'AUTHOR', value: 'MOISES SANABRIA' },
    { key: 'DESCRIPTOR', value: 'AI STUDIO INFRASTRUCTURE FOR PUBLIC ART' },
  ],

  conditionIntro:
    'Everyday interfaces accumulate — phone, feed, recommendation, camera, model, agent — until intelligence feels ambient rather than optional.',

  studioIntro:
    'The studio is not a laptop. It is a maintained production environment at Bakehouse Studio 43 and across a distributed network — printers, GPUs, cables, maquettes, and the labor to keep them running.',

  methodIntro:
    `${bitmMethodology.workingTitle} converts cultural observation into public material culture through a repeatable pipeline — not a single prompt. ${bitmMethodology.shortDefinition}`,

  methodology: bitmMethodology,

  caseStudiesIntro:
    'Eight works ground the argument. Each includes a Plausibility Study — documenting how a machine proposition becomes material, institutional, and public reality.',

  publicIntro:
    'Public art requires institutions, workshops, funding, and distribution — a distributed network of studios, partners, and civic contexts that sustain work beyond the screen.',

  ethicsIntro:
    'Ethics here is operational: consent, maintenance, energy, access — checked like a studio preflight, not preached like a manifesto.',

  authorIntro:
    'Moises Sanabria operates from Bakehouse Studio 43 as artist, fabricator, and teacher — building infrastructure for how AI enters public culture. Collaborators are credited on individual works.',

  ctas: [
    { label: 'COMMISSION / INSTITUTIONAL COLLABORATION', href: '/contact?subject=Commission', kind: 'commission' },
    { label: 'INVITE A TALK', href: '/contact?subject=Talk%20invitation', kind: 'talk' },
    { label: 'HOST A WORKSHOP', href: '/workshops', kind: 'workshop' },
  ],

  deeperLinks: [
    {
      label: 'AI Sprint — The Idea Center',
      href: '/research/born-into-the-machine/sprint',
      description: 'Sprint-facing page for the AI Sprint for Artists at Miami Dade College.',
    },
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
  title: 'Born into the Machine — A Material Practice for Life Inside Machine Systems',
  description:
    'Miami-based artist Moises Sanabria presents Born into the Machine — Plausibility Studies, studio infrastructure, and public art practice for grants, institutions, and fabrication.',
  ogImageAlt: 'Born into the Machine — AI Studio Infrastructure for Public Art',
  ogImage: bitmAssets.hero.og,
} as const;
