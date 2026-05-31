export type TechLogoEntry = {
  id: string;
  label: string;
  /** Public path, Cloudinary URL, or CDN brand mark */
  imageSrc?: string;
  /** Optional classes on the logo img (e.g. dark-mode invert for monochrome marks) */
  imageClassName?: string;
};

const base = '/images/tech-logos';
const jobsCdn = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Simple Icons CDN — colored brand marks */
function si(slug: string, color?: string): string {
  return color ? `https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}` : `https://cdn.simpleicons.org/${slug}`;
}

export const techLogoRegistry: Record<string, TechLogoEntry> = {
  openai: { id: 'openai', label: 'OpenAI', imageSrc: `${jobsCdn}/v1778692505/jobs/open-ai-logo_vvvlks.png` },
  huggingface: { id: 'huggingface', label: 'Hugging Face', imageSrc: si('huggingface', 'FFD21E') },
  python: { id: 'python', label: 'Python', imageSrc: `${jobsCdn}/v1778692505/jobs/python-logo_edccrx.png` },
  langchain: { id: 'langchain', label: 'LangChain', imageSrc: `${jobsCdn}/v1778692506/jobs/LangChain_Logo.svg_n0z55e.png` },
  langgraph: { id: 'langgraph', label: 'LangGraph', imageSrc: `${jobsCdn}/v1778692505/jobs/lang-graph-logo_g4x6ik.svg` },
  crewai: { id: 'crewai', label: 'CrewAI', imageSrc: `${jobsCdn}/v1778692505/jobs/crew_only_logo_x3lqxj.png` },
  'openai-agents': { id: 'openai-agents', label: 'OpenAI Agents', imageSrc: `${jobsCdn}/v1778692505/jobs/open-ai-logo_vvvlks.png` },
  azure: { id: 'azure', label: 'Azure', imageSrc: `${jobsCdn}/v1780254976/jobs/Microsoft_Azure.svg_tzplre.png` },
  replicate: { id: 'replicate', label: 'Replicate', imageSrc: si('replicate') },
  vercel: { id: 'vercel', label: 'Vercel', imageSrc: si('vercel'), imageClassName: 'dark:invert' },
  supabase: { id: 'supabase', label: 'Supabase', imageSrc: si('supabase', '3FCF8E') },
  'stable-diffusion': { id: 'stable-diffusion', label: 'Stable Diffusion', imageSrc: si('stabilityai') },
  typescript: { id: 'typescript', label: 'TypeScript', imageSrc: si('typescript', '3178C6') },
  nextjs: { id: 'nextjs', label: 'Next.js', imageSrc: si('nextdotjs'), imageClassName: 'dark:invert' },
  n8n: { id: 'n8n', label: 'n8n', imageSrc: si('n8n', 'EA4B71') },
  pytorch: { id: 'pytorch', label: 'PyTorch', imageSrc: si('pytorch', 'EE4C2C') },
  docker: { id: 'docker', label: 'Docker', imageSrc: si('docker', '2496ED') },
  postgres: { id: 'postgres', label: 'Postgres', imageSrc: si('postgresql', '4169E1') },
  comfyui: { id: 'comfyui', label: 'ComfyUI', imageSrc: `${base}/comfyui.svg` },
  react: { id: 'react', label: 'React', imageSrc: si('react', '61DAFB') },
  tailwind: { id: 'tailwind', label: 'Tailwind CSS', imageSrc: si('tailwindcss', '06B6D4') },
  github: { id: 'github', label: 'GitHub', imageSrc: si('github'), imageClassName: 'dark:invert' },
  aws: { id: 'aws', label: 'AWS S3', imageSrc: `${jobsCdn}/v1780254939/jobs/Amazon-S3-Logo_mmkpap.png` },
  cloudinary: { id: 'cloudinary', label: 'Cloudinary', imageSrc: si('cloudinary', '3448C5') },
  sam: { id: 'sam', label: 'SAM', imageSrc: si('meta', '0467DF'), imageClassName: 'rounded-sm' },
  iiif: { id: 'iiif', label: 'IIIF', imageSrc: `${jobsCdn}/v1780254871/jobs/iiif-logo_bmvqko.png` },
  openseadragon: { id: 'openseadragon', label: 'OpenSeadragon', imageSrc: `${base}/openseadragon.svg` },
};

export function resolveTechLogos(ids: string[]): TechLogoEntry[] {
  return ids.map((id) => techLogoRegistry[id] ?? { id, label: id });
}
