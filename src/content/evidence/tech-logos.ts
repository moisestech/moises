export type LogoAspect = 'square' | 'horizontal';

export type TechLogoVariants = {
  /** 1:1 mark — icon chips, snapshot/fit strips */
  square?: string;
  /** Wide lockup — marquee, hero banners, OG logo rows */
  horizontal?: string;
};

export type TechLogoEntry = {
  id: string;
  label: string;
  /** Default src (square when variants exist) */
  imageSrc?: string;
  variants?: TechLogoVariants;
  imageClassName?: string;
};

const base = '/images/tech-logos';
const jobsCdn = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Simple Icons CDN — colored brand marks */
function si(slug: string, color?: string): string {
  return color ? `https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}` : `https://cdn.simpleicons.org/${slug}`;
}

function logoEntry(
  id: string,
  label: string,
  horizontal: string,
  square?: string,
  imageClassName?: string,
): TechLogoEntry {
  const squareSrc = square ?? horizontal;
  return {
    id,
    label,
    imageSrc: squareSrc,
    variants: { square: squareSrc, horizontal },
    imageClassName,
  };
}

function simpleIconEntry(
  id: string,
  label: string,
  slug: string,
  color?: string,
  imageClassName?: string,
  horizontalOverride?: string,
): TechLogoEntry {
  const square = si(slug, color);
  return logoEntry(id, label, horizontalOverride ?? square, square, imageClassName);
}

export const techLogoRegistry: Record<string, TechLogoEntry> = {
  anthropic: logoEntry(
    'anthropic',
    'Claude',
    `${jobsCdn}/v1783032752/jobs/claude_logo_2023_wihocz.png`,
  ),
  airtable: logoEntry('airtable', 'Airtable', `${jobsCdn}/v1783032752/jobs/airtable_logo_xserwf.png`),
  openai: logoEntry('openai', 'OpenAI', `${jobsCdn}/v1778692505/jobs/open-ai-logo_vvvlks.png`),
  huggingface: logoEntry(
    'huggingface',
    'Hugging Face',
    `${jobsCdn}/v1778692505/jobs/hugging-face-logo_crknti.svg`,
    si('huggingface', 'FFD21E'),
  ),
  python: logoEntry('python', 'Python', `${jobsCdn}/v1778692505/jobs/python-logo_edccrx.png`),
  javascript: simpleIconEntry('javascript', 'JavaScript', 'javascript', 'F7DF1E'),
  langchain: logoEntry(
    'langchain',
    'LangChain',
    `${jobsCdn}/v1778692506/jobs/LangChain_Logo.svg_n0z55e.png`,
  ),
  langgraph: logoEntry(
    'langgraph',
    'LangGraph',
    `${jobsCdn}/v1778692505/jobs/lang-graph-logo_g4x6ik.svg`,
  ),
  crewai: logoEntry('crewai', 'CrewAI', `${jobsCdn}/v1778692505/jobs/crew_only_logo_x3lqxj.png`),
  'openai-agents': logoEntry(
    'openai-agents',
    'OpenAI Agents',
    `${jobsCdn}/v1778692505/jobs/open-ai-logo_vvvlks.png`,
  ),
  azure: logoEntry('azure', 'Azure', `${jobsCdn}/v1780254976/jobs/Microsoft_Azure.svg_tzplre.png`),
  replicate: simpleIconEntry('replicate', 'Replicate', 'replicate'),
  vercel: simpleIconEntry('vercel', 'Vercel', 'vercel', undefined, 'dark:invert'),
  supabase: simpleIconEntry('supabase', 'Supabase', 'supabase', '3FCF8E'),
  'stable-diffusion': simpleIconEntry('stable-diffusion', 'Stable Diffusion', 'stabilityai'),
  typescript: simpleIconEntry('typescript', 'TypeScript', 'typescript', '3178C6'),
  nextjs: simpleIconEntry('nextjs', 'Next.js', 'nextdotjs', undefined, 'dark:invert'),
  n8n: simpleIconEntry('n8n', 'n8n', 'n8n', 'EA4B71'),
  pytorch: simpleIconEntry('pytorch', 'PyTorch', 'pytorch', 'EE4C2C'),
  docker: simpleIconEntry('docker', 'Docker', 'docker', '2496ED'),
  postgres: simpleIconEntry('postgres', 'Postgres', 'postgresql', '4169E1'),
  comfyui: logoEntry(
    'comfyui',
    'ComfyUI',
    `${jobsCdn}/v1786372919/jobs/comfy-ui-logo-full_width_viyj7a.png`,
    `${base}/comfyui.svg`,
  ),
  vue: logoEntry('vue', 'Vue.js', `${base}/vue.svg`),
  vite: logoEntry('vite', 'Vite', `${base}/vite.svg`),
  react: simpleIconEntry('react', 'React', 'react', '61DAFB'),
  tailwind: simpleIconEntry('tailwind', 'Tailwind CSS', 'tailwindcss', '06B6D4'),
  github: simpleIconEntry('github', 'GitHub', 'github', undefined, 'dark:invert'),
  aws: logoEntry('aws', 'AWS', `${jobsCdn}/v1780254939/jobs/Amazon-S3-Logo_mmkpap.png`),
  snowflake: simpleIconEntry('snowflake', 'Snowflake', 'snowflake', '29B5E8'),
  tableau: simpleIconEntry('tableau', 'Tableau', 'tableau', 'E97627'),
  posthog: simpleIconEntry('posthog', 'PostHog', 'posthog', 'F54E00'),
  cloudinary: simpleIconEntry('cloudinary', 'Cloudinary', 'cloudinary', '3448C5'),
  'adobe-premiere': logoEntry(
    'adobe-premiere',
    'Adobe Premiere Pro',
    `${jobsCdn}/v1786372919/jobs/Adobe_Premiere_Pro_CC_icon.svg_rpmu3o.webp`,
  ),
  'adobe-after-effects': logoEntry(
    'adobe-after-effects',
    'Adobe After Effects',
    `${jobsCdn}/v1786372919/jobs/Adobe_After_Effects_CC_icon.svg_q4r9tg.webp`,
  ),
  'adobe-firefly': logoEntry(
    'adobe-firefly',
    'Adobe Firefly',
    `${jobsCdn}/v1786372919/jobs/Adobe_Firefly_Logo.svg_xcwqvc.webp`,
  ),
  adobe: simpleIconEntry('adobe', 'Adobe', 'adobe', 'FF0000'),
  figma: simpleIconEntry('figma', 'Figma', 'figma', 'F24E1E'),
  canva: simpleIconEntry('canva', 'Canva', 'canva', '00C4CC'),
  capcut: simpleIconEntry('capcut', 'CapCut', 'capcut', '000000', 'dark:invert'),
  tiktok: simpleIconEntry('tiktok', 'TikTok', 'tiktok'),
  instagram: simpleIconEntry('instagram', 'Instagram', 'instagram', 'E4405F'),
  youtube: simpleIconEntry('youtube', 'YouTube', 'youtube', 'FF0000'),
  sam: simpleIconEntry('sam', 'SAM', 'meta', '0467DF', 'rounded-sm'),
  iiif: logoEntry('iiif', 'IIIF', `${jobsCdn}/v1780254871/jobs/iiif-logo_bmvqko.png`),
  openseadragon: logoEntry('openseadragon', 'OpenSeadragon', `${base}/openseadragon.svg`),
  weaviate: logoEntry(
    'weaviate',
    'Weaviate',
    `${jobsCdn}/v1778692506/jobs/weaviate-logo_g6kh3i.svg`,
  ),
  pinecone: logoEntry(
    'pinecone',
    'Pinecone',
    `${jobsCdn}/v1778692505/jobs/Pinecone-Full-Logo-Black_wwrbcu.svg`,
  ),
  fastapi: logoEntry(
    'fastapi',
    'FastAPI',
    `${jobsCdn}/v1778692505/jobs/FastAPI_logo.svg_qrodn7.png`,
  ),
  mapbox: simpleIconEntry('mapbox', 'Mapbox', 'mapbox', '4264FB'),
  kubernetes: simpleIconEntry('kubernetes', 'Kubernetes', 'kubernetes', '326CE5'),
  terraform: simpleIconEntry('terraform', 'Terraform', 'terraform', '844FBA'),
  redux: simpleIconEntry('redux', 'Redux', 'redux', '764ABC'),
};

export function resolveTechLogoSrc(
  entry: TechLogoEntry | undefined,
  aspect: LogoAspect = 'square',
): string | undefined {
  if (!entry) return undefined;
  const { variants, imageSrc } = entry;
  if (aspect === 'horizontal') {
    return variants?.horizontal ?? imageSrc ?? variants?.square;
  }
  return variants?.square ?? imageSrc ?? variants?.horizontal;
}

export function resolveTechLogos(ids: string[]): TechLogoEntry[] {
  return ids.map((id) => techLogoRegistry[id] ?? { id, label: id });
}

export function resolveTechLogo(id: string, aspect: LogoAspect = 'square') {
  const entry = techLogoRegistry[id] ?? { id, label: id };
  return {
    ...entry,
    resolvedSrc: resolveTechLogoSrc(entry, aspect),
  };
}

/** Update square or horizontal URL after Cloudinary upload — single swap point per logo. */
export function patchTechLogoVariant(id: string, aspect: LogoAspect, src: string) {
  const entry = techLogoRegistry[id];
  if (!entry) return;
  entry.variants = { ...entry.variants, [aspect]: src };
  if (aspect === 'square') entry.imageSrc = src;
}
