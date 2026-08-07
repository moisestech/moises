/** Hero screenshot for AI24 — used on opportunity dossiers and job-application case studies. */
export const AI24_WEBSITE_HERO_IMAGE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png';

/** Oolite Arts Digital Lab — production workspace. Source of truth: `@/content/oolite-arts/media`. */
export {
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/oolite-arts/media';

import { automationProjectSpecs } from '@/content/evidence/automationProjects';

export type EvidenceProjectId =
  | 'lore-machine'
  | 'ai24'
  | 'multimodal-image-systems'
  | 'digital-culture-infrastructure'
  | 'playwire-alumni'
  | 'n8n-gmail-intelligence'
  | 'bookleggers-commerce-automation';

export type EvidenceProject = {
  id: EvidenceProjectId;
  title: string;
  category: string;
  summary: string;
  skillTags: string[];
  imageSrc: string;
  imageAlt: string;
  /** Local file in /public — use img; remote use next/image in consumer */
  imageLocal?: boolean;
  href?: string;
};

export const evidenceProjects: Record<EvidenceProjectId, EvidenceProject> = {
  'lore-machine': {
    id: 'lore-machine',
    title: 'Lore Machine — AI narrative-to-media platform',
    category: 'AI storytelling product',
    summary:
      'AI-driven storytelling infrastructure turning scripts, books, and lyrics into structured multimedia outputs. Work included prompt workflows, generative image systems, API integrations, scene-oriented rendering logic, and scalable product-facing AI development.',
    skillTags: [
      'LLMs',
      'PromptOps',
      'Python',
      'TypeScript',
      'Stable Diffusion',
      'Replicate',
      'Azure',
      'Vercel',
      'Workers',
    ],
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780253940/resume/resume-images/lore-machine-home-page_wra1x2.png',
    imageAlt: 'Lore Machine — generative storytelling platform home page and scene workflow UI',
    href: 'https://loremachine.world/',
  },
  ai24: {
    id: 'ai24',
    title: 'AI24 — AI education, tools, and cultural R&D',
    category: 'AI literacy and platforms',
    summary:
      'AI literacy workshops, LMS-oriented architecture, automation strategy, and applied AI systems for artists and institutions — focused on making emerging tools legible, usable, and responsibly deployable.',
    skillTags: [
      'AI product strategy',
      'LMS',
      'GenAI education',
      'Automation',
      'Multimodal workflows',
      'Research translation',
    ],
    imageSrc: AI24_WEBSITE_HERO_IMAGE,
    imageAlt: 'AI24 website — above-the-fold product and program hub',
    href: '/ai24',
  },
  'multimodal-image-systems': {
    id: 'multimodal-image-systems',
    title: 'Multimodal generative image workflows',
    category: 'Generative media',
    summary:
      'AI image pipelines including pose control, character consistency, Stable Diffusion workflows, ComfyUI research, dataset quality, prompt control, and visual generation systems.',
    skillTags: [
      'Stable Diffusion',
      'ComfyUI',
      'ControlNet / pose',
      'Datasets',
      'Visual consistency',
      'Multimodal AI',
    ],
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-1_a1ry99.png',
    imageAlt: 'Generative image research — visual output from practice-based model experimentation',
    href: '/research/broken-acceleration',
  },
  'playwire-alumni': {
    id: 'playwire-alumni',
    title: 'Playwire — Data & Solutions (2021–2022)',
    category: 'Ad tech · publisher systems',
    summary:
      'Two years in-house: Solutions Engineer delivering publisher integrations and JS debugging for SaaS onboarding; Data Analyst migrating Kinesis/Athena pipelines to Snowflake, building Tableau auction analytics, and Slack alerting for data reliability.',
    skillTags: ['Snowflake', 'Tableau', 'AWS Kinesis', 'JavaScript', 'Publisher integrations', 'Slack alerts'],
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659236/product-ai-data-career-direction_ofgnrk.png',
    imageAlt: 'Playwire concept banner — former Data and Solutions team experience',
  },
  'digital-culture-infrastructure': {
    id: 'digital-culture-infrastructure',
    title: 'Digital Culture Infra System — DCC Miami',
    category: 'Digital Culture Center Miami',
    summary:
      'Public website and operational stack for Miami’s Digital Culture Center — programs, workshops, and institutional tooling that connect artists and organizations to shared digital capacity.',
    skillTags: [
      'Systems architecture',
      'Product strategy',
      'Automation',
      'Institutional workflows',
      'Rapid prototyping',
    ],
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
    imageAlt: 'Digital Culture Center Miami website — program and workshop hub screenshot',
    href: 'https://dcc.miami',
  },
  'n8n-gmail-intelligence': {
    id: 'n8n-gmail-intelligence',
    title: automationProjectSpecs['n8n-gmail-intelligence'].title,
    category: automationProjectSpecs['n8n-gmail-intelligence'].category,
    summary: automationProjectSpecs['n8n-gmail-intelligence'].summary,
    skillTags: [...automationProjectSpecs['n8n-gmail-intelligence'].skillTags],
    imageSrc: automationProjectSpecs['n8n-gmail-intelligence'].imageSrc,
    imageAlt: automationProjectSpecs['n8n-gmail-intelligence'].imageAlt,
    imageLocal: automationProjectSpecs['n8n-gmail-intelligence'].imageLocal,
  },
  'bookleggers-commerce-automation': {
    id: 'bookleggers-commerce-automation',
    title: automationProjectSpecs['bookleggers-commerce-automation'].title,
    category: automationProjectSpecs['bookleggers-commerce-automation'].category,
    summary: automationProjectSpecs['bookleggers-commerce-automation'].summary,
    skillTags: [...automationProjectSpecs['bookleggers-commerce-automation'].skillTags],
    imageSrc: automationProjectSpecs['bookleggers-commerce-automation'].imageSrc,
    imageAlt: automationProjectSpecs['bookleggers-commerce-automation'].imageAlt,
  },
};

export function getEvidenceProject(id: string): EvidenceProject | undefined {
  return evidenceProjects[id as EvidenceProjectId];
}
