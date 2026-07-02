import type { ProjectDossier } from './types';
import { AI24_WEBSITE_HERO_IMAGE, evidenceProjects } from '@/content/evidence/projects';

export const ai24Project: ProjectDossier = {
  slug: 'ai24',
  seo: {
    title: 'AI24 — Full-Stack AI Infrastructure | Moises Sanabria',
    description:
      'AI education, tools, and cultural R&D: LMS-oriented architecture, automation strategy, and applied AI systems for artists and institutions.',
  },
  title: 'AI24',
  category: 'AI literacy and platforms',
  whatItIs:
    'AI education, tools, and cultural R&D platform focused on making emerging AI legible, usable, and responsibly deployable for artists and institutions.',
  whatIBuilt:
    'Co-founded and led creative direction for AI24 Live: full-stack AI infrastructure, workshop programs, LMS-oriented architecture, automation strategy, realtime news illustration tooling, and institutional programs that translate research into public-facing product systems.',
  stack: [
    'Next.js',
    'TypeScript',
    'GenAI education',
    'Automation',
    'Multimodal workflows',
    'LMS architecture',
    'Workshop delivery',
  ],
  whyItMatters:
    'Shows end-to-end AI systems ownership — product strategy, workflow design, institutional delivery, and the ability to build tools that non-technical users can adopt.',
  imageSrc: AI24_WEBSITE_HERO_IMAGE,
  imageAlt: evidenceProjects.ai24.imageAlt,
  externalHref: 'https://ai24.live',
  externalLabel: 'ai24.live',
};
