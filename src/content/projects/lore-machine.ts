import type { ProjectDossier } from './types';
import { evidenceProjects } from '@/content/evidence/projects';

export const loreMachineProject: ProjectDossier = {
  slug: 'lore-machine',
  seo: {
    title: 'Lore Machine — AI Product Engineering | Moises Sanabria',
    description:
      'Founding engineer / Chief Prompt Officer on an AI narrative-to-media platform: prompt workflows, generative image systems, and production Next.js delivery.',
  },
  title: 'Lore Machine',
  category: 'AI storytelling product',
  whatItIs:
    'AI narrative-to-media platform turning scripts, books, and lyrics into structured multimedia outputs — a production creative AI product used by writers and media teams.',
  whatIBuilt:
    'As founding engineer and Chief Prompt Officer, I built the frontend web application, authentication, design systems, and data API transactions for a real-time AI image storytelling platform on Vercel. I managed prompt workflows, generative image pipelines, third-party contractor coordination, sprint reporting, and leadership communication across technical, business, and marketing stakeholders.',
  stack: ['TypeScript', 'Next.js', 'Vercel', 'LLMs', 'Stable Diffusion', 'Replicate', 'Azure', 'Python'],
  whyItMatters:
    'Demonstrates production AI product engineering in a startup context — agentic creative workflows, multimodal pipelines, and the ability to ship POCs to production with a small engineering team.',
  imageSrc: evidenceProjects['lore-machine'].imageSrc,
  imageAlt: evidenceProjects['lore-machine'].imageAlt,
  externalHref: 'https://loremachine.world/',
  externalLabel: 'loremachine.world',
};
