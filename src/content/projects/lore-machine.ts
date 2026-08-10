import type { ProjectDossier } from './types';
import { evidenceProjects } from '@/content/evidence/projects';

/**
 * Lore Machine technical case depth — ownership, stack, decisions.
 * Public-safe metrics stay honest when unverified.
 */
export const loreMachineProject: ProjectDossier = {
  slug: 'lore-machine',
  seo: {
    title: 'Lore Machine — AI Product Engineering | Moises Sanabria',
    description:
      'Founding engineer / Chief Prompt Officer on an AI narrative-to-media platform: prompt workflows, generative image systems, architecture decisions, and production Next.js delivery.',
  },
  title: 'Lore Machine',
  category: 'AI storytelling product · Creative AI case',
  whatItIs:
    'AI narrative-to-media platform turning scripts, books, and lyrics into structured multimedia outputs — a production creative AI product used by writers and media teams at loremachine.world.',
  whatIBuilt:
    'As founding engineer and Chief Prompt Officer on a three-person engineering team, I owned the frontend web application, authentication, design systems, and data API transactions for a real-time AI image storytelling platform on Vercel. I designed prompt workflows and generative image pipelines (Stable Diffusion / Replicate / Azure paths), coordinated third-party contractors, ran sprint reporting, and translated experimental model behavior into product features non-technical creators could operate. Exact ownership: product UI + prompt/ops layer as primary; infra and model hosting shared with the team.',
  stack: [
    'TypeScript',
    'Next.js',
    'React',
    'Vercel',
    'LLMs',
    'Stable Diffusion',
    'Replicate',
    'Azure',
    'Python',
    'PromptOps',
  ],
  whyItMatters:
    'Demonstrates production AI product engineering in a startup context — multimodal pipelines, agentic-adjacent creative workflows, architecture tradeoffs under shipping pressure, and stakeholder communication across engineering, business, and marketing. Primary Creative AI + Applied AI proof; secondary Forward-Deployed adjacency for ambiguous product delivery.',
  imageSrc: evidenceProjects['lore-machine'].imageSrc,
  imageAlt: evidenceProjects['lore-machine'].imageAlt,
  externalHref: 'https://loremachine.world/',
  externalLabel: 'loremachine.world',
};
