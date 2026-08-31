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
  | 'bookleggers-commerce-automation'
  | 'agentic-ops'
  | 'comfyui-output-provenance'
  | 'flora-field-kit'
  | 'agentic-evidence-pipeline';

export type EvidenceProject = {
  id: EvidenceProjectId;
  title: string;
  category: string;
  summary: string;
  skillTags: string[];
  imageSrc: string;
  imageAlt: string;
  /** Optional dark-theme landscape. Falls back to `imageSrc`. */
  imageSrcDark?: string;
  /** Local file in /public — use img; remote use next/image in consumer */
  imageLocal?: boolean;
  href?: string;
};

export const PLAYWIRE_CARD_V2 =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788213852/dccmiami/workshops/agentic-engineering-for-beginners/playwire-adtech-solutions-engineering-card-v2_nhro3m.png';
export const PLAYWIRE_CARD_V2_DARK =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788213855/dccmiami/workshops/agentic-engineering-for-beginners/playwire-adtech-solutions-engineering-card-v2-dark_n47bcz.png';
export const AEP_CARD_V2 =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788213853/dccmiami/workshops/agentic-engineering-for-beginners/agentic-evidence-pipeline-governed-workflow-card-v2_omzcro.png';
export const AEP_CARD_V2_DARK =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788213854/dccmiami/workshops/agentic-engineering-for-beginners/agentic-evidence-pipeline-governed-workflow-card-v2-dark_ms4dqs.png';

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
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1752671997/art/moisestech-website/artworks/2021_beyond_money/moises-sanabria-beyond-money-1_2021_deslxp.png',
    imageAlt:
      'Beyond Money — landscape still from GAN banknote model (Moises Sanabria generative image workflow)',
    href: '/art/beyond_money',
  },
  'playwire-alumni': {
    id: 'playwire-alumni',
    title: 'Playwire — Data & Solutions (2021–2022)',
    category: 'Ad tech · publisher systems',
    summary:
      'Two years in-house: Solutions Engineer delivering publisher integrations and JS debugging for SaaS onboarding; Data Analyst migrating Kinesis/Athena pipelines to Snowflake, building Tableau auction analytics, and Slack alerting for data reliability.',
    skillTags: ['Snowflake', 'Tableau', 'AWS Kinesis', 'JavaScript', 'Publisher integrations', 'Slack alerts'],
    imageSrc: PLAYWIRE_CARD_V2,
    imageSrcDark: PLAYWIRE_CARD_V2_DARK,
    imageAlt:
      'Confidentiality-safe AdTech abstraction: publisher integration, diagnostics, and solutions handoff — no client names or metrics',
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
  'agentic-ops': {
    id: 'agentic-ops',
    title: 'Agentic Ops — auditable multi-tool agent runtime',
    category: 'AI engineering · Building',
    summary:
      'Planner → tools → state → retrieval → synthesis → human approval → execute. Public engineering flagship for MCP, HITL, evals, and reusable agent patterns. Building until demo and regression gates are live — not claimed as production ServiceNow.',
    skillTags: ['MCP', 'HITL', 'Python', 'FastAPI', 'TypeScript', 'Evals', 'CI'],
    imageSrc: AI24_WEBSITE_HERO_IMAGE,
    imageAlt: 'Agentic Ops — organizational multi-tool agent runtime',
    href: 'https://github.com/moisestech/agentic-ops',
  },
  'comfyui-output-provenance': {
    id: 'comfyui-output-provenance',
    title: 'ComfyUI Output Provenance — tests, CI, and docs',
    category: 'Production engineering · public repo',
    summary:
      'Typed monorepo with Zod-validated graph parse, upstream provenance trace, GitHub Actions, and written architecture/testing docs. Evidence of maintainable code, versioning, and reviewable documentation — not a ServiceNow SDK claim.',
    skillTags: ['TypeScript', 'CI/CD', 'Testing', 'Documentation', 'GitHub Actions'],
    imageSrc:
      'https://raw.githubusercontent.com/moisestech/comfyui-output-provenance/main/docs/assets/readme-hero.svg',
    imageAlt: 'ComfyUI Output Provenance Explorer — public engineering artifact',
    imageLocal: true,
    href: 'https://github.com/moisestech/comfyui-output-provenance',
  },
  'flora-field-kit': {
    id: 'flora-field-kit',
    title: 'FLORA Field Kit — client workflow console',
    category: 'Forward-deployed delivery · prototype',
    summary:
      'Standalone Next.js console for brief intake, technique recommendation, run/review, and shareable case-study export. Models the FDE loop: sit with a customer problem, prototype a working path, leave something the team can reuse. Fixture demo at flora-field-kit.vercel.app; live FLORA Techniques need published IDs and paid API access.',
    skillTags: ['Next.js', 'TypeScript', 'Client delivery', 'Runbooks', 'Prototyping'],
    imageSrc:
      '/images/opportunities/flora-forward-deployed-creative/flora-field-kit-overview-concept-study.png',
    imageAlt: 'FLORA Field Kit — brief-to-handoff client workflow console',
    imageLocal: true,
    href: 'https://flora-field-kit.vercel.app',
  },
  'agentic-evidence-pipeline': {
    id: 'agentic-evidence-pipeline',
    title: 'Agentic Evidence Pipeline',
    category: 'Reference implementation · governance',
    summary:
      'Evidence in. Reviewable decisions out. TypeScript reference with hybrid retrieval, citation fail-closed, persisted human review, and an append-only audit trail. Synthetic fixtures and a fake-model harness — not a hosted customer product.',
    skillTags: ['TypeScript', 'Postgres', 'Human review', 'Citation gate', 'LangGraph'],
    imageSrc: AEP_CARD_V2,
    imageSrcDark: AEP_CARD_V2_DARK,
    imageAlt:
      'Conceptual cover for a governed evidence workflow — reference implementation, not a hosted product UI',
    imageLocal: false,
    href: 'https://github.com/moisestech/agentic-evidence-pipeline',
  },
};

export function getEvidenceProject(id: string): EvidenceProject | undefined {
  return evidenceProjects[id as EvidenceProjectId];
}
