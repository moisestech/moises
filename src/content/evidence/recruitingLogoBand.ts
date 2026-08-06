export type LogoBandItem = {
  src: string;
  alt: string;
  /** Display height in px; width follows aspect ratio */
  height?: number;
};

/**
 * Default partner / stack marks for GenAI recruiting pages (Cloudinary).
 * Reuse `AnimatedLogoBand` with this list or pass a custom array per opportunity.
 */
export const genAiRecruitingLogoBand: LogoBandItem[] = [
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692506/jobs/weaviate-logo_g6kh3i.svg',
    alt: 'Weaviate',
    height: 36,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/hugging-face-logo_crknti.svg',
    alt: 'Hugging Face',
    height: 36,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/Pinecone-Full-Logo-Black_wwrbcu.svg',
    alt: 'Pinecone',
    height: 32,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/lang-graph-logo_g4x6ik.svg',
    alt: 'LangGraph',
    height: 34,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692506/jobs/LangChain_Logo.svg_n0z55e.png',
    alt: 'LangChain',
    height: 40,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/python-logo_edccrx.png',
    alt: 'Python',
    height: 40,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/FastAPI_logo.svg_qrodn7.png',
    alt: 'FastAPI',
    height: 36,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/open-ai-logo_vvvlks.png',
    alt: 'OpenAI',
    height: 36,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692505/jobs/crew_only_logo_x3lqxj.png',
    alt: 'CrewAI',
    height: 40,
  },
];

/** Editorial portrait (optional hero swap vs headshot). */
export const moisesSanabriaPortraitFull =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750944896/portraits/moises-sanabria-portrait_qtathx.jpg';

export const moisesSanabriaHeadshot =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1778692604/portraits/moises-headshot_asgp7d.jpg';

const jobsCdn = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Affirm application — verified skill marks only (no unverified vector-DB / agent frameworks). */
export const affirmAiSolutionsSkillLogoBand: LogoBandItem[] = [
  { src: `${jobsCdn}/v1778692505/jobs/python-logo_edccrx.png`, alt: 'Python', height: 40 },
  { src: `${jobsCdn}/v1778692505/jobs/open-ai-logo_vvvlks.png`, alt: 'OpenAI', height: 36 },
  { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript', height: 36 },
  { src: 'https://cdn.simpleicons.org/nextdotjs', alt: 'Next.js', height: 36 },
  { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React', height: 36 },
  { src: 'https://cdn.simpleicons.org/vercel', alt: 'Vercel', height: 36 },
  { src: 'https://cdn.simpleicons.org/snowflake/29B5E8', alt: 'Snowflake', height: 36 },
  { src: 'https://cdn.simpleicons.org/n8n/EA4B71', alt: 'n8n', height: 36 },
  { src: `${jobsCdn}/v1783032752/jobs/airtable_logo_xserwf.png`, alt: 'Airtable', height: 36 },
  { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker', height: 36 },
  { src: `${jobsCdn}/v1780254976/jobs/Microsoft_Azure.svg_tzplre.png`, alt: 'Azure', height: 36 },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub', height: 36 },
];

/** Affirm wordmarks for opportunity heroes (theme-paired). */
export const affirmCompanyLogos = {
  light: `${jobsCdn}/v1784121432/jobs/application-logos/affirm-logo-type-light-theme-horizontal_opbi4f.webp`,
  dark: `${jobsCdn}/v1784121432/jobs/application-logos/affirm-logo-type-dark-theme-horizontal_yofxgl.avif`,
  alt: 'Affirm',
} as const;

/** Comfy MTS Frontend — verified stack marks + Vue (growth) without claiming LiteGraph mastery. */
export const comfyFrontendSkillLogoBand: LogoBandItem[] = [
  { src: '/images/tech-logos/comfyui.svg', alt: 'ComfyUI', height: 36 },
  { src: 'https://cdn.simpleicons.org/vuedotjs/4FC08D', alt: 'Vue.js', height: 36 },
  { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript', height: 36 },
  { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React', height: 36 },
  { src: 'https://cdn.simpleicons.org/nextdotjs', alt: 'Next.js', height: 36 },
  { src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', alt: 'Tailwind CSS', height: 36 },
  { src: 'https://cdn.simpleicons.org/vercel', alt: 'Vercel', height: 36 },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub', height: 36 },
  { src: 'https://cdn.simpleicons.org/playwright/2EAD33', alt: 'Playwright', height: 36 },
  { src: 'https://cdn.simpleicons.org/vitest/6E9F18', alt: 'Vitest', height: 36 },
];

/** Comfy wordmark placeholder until official brand assets are licensed. */
export const comfyCompanyLogos = {
  light: '/images/tech-logos/comfyui.svg',
  dark: '/images/tech-logos/comfyui.svg',
  alt: 'Comfy / ComfyUI',
} as const;

/** FLORA Founding Data Engineer — warehouse / BI / product analytics marks (verified literacy only). */
export const floraDataEngineerSkillLogoBand: LogoBandItem[] = [
  { src: 'https://cdn.simpleicons.org/snowflake/29B5E8', alt: 'Snowflake', height: 36 },
  { src: 'https://cdn.simpleicons.org/tableau/E97627', alt: 'Tableau', height: 36 },
  { src: 'https://cdn.simpleicons.org/posthog/F54E00', alt: 'PostHog', height: 36 },
  { src: `${jobsCdn}/v1778692505/jobs/python-logo_edccrx.png`, alt: 'Python', height: 40 },
  { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript', height: 36 },
  { src: 'https://cdn.simpleicons.org/postgresql/4169E1', alt: 'PostgreSQL', height: 36 },
  { src: 'https://cdn.simpleicons.org/amazonaws/FF9900', alt: 'AWS', height: 36 },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub', height: 36 },
];
