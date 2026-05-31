export type TechLogoEntry = {
  id: string;
  label: string;
  /** Public path under /public */
  imageSrc?: string;
};

const base = '/images/tech-logos';

export const techLogoRegistry: Record<string, TechLogoEntry> = {
  openai: { id: 'openai', label: 'OpenAI', imageSrc: `${base}/openai.svg` },
  huggingface: { id: 'huggingface', label: 'Hugging Face', imageSrc: `${base}/huggingface.svg` },
  python: { id: 'python', label: 'Python', imageSrc: `${base}/python.svg` },
  langchain: { id: 'langchain', label: 'LangChain', imageSrc: `${base}/langchain.svg` },
  langgraph: { id: 'langgraph', label: 'LangGraph', imageSrc: `${base}/langgraph.svg` },
  crewai: { id: 'crewai', label: 'CrewAI', imageSrc: `${base}/crewai.svg` },
  'openai-agents': { id: 'openai-agents', label: 'OpenAI Agents', imageSrc: `${base}/openai-agents.svg` },
  azure: { id: 'azure', label: 'Azure', imageSrc: `${base}/azure.svg` },
  replicate: { id: 'replicate', label: 'Replicate', imageSrc: `${base}/replicate.svg` },
  vercel: { id: 'vercel', label: 'Vercel', imageSrc: `${base}/vercel.svg` },
  supabase: { id: 'supabase', label: 'Supabase', imageSrc: `${base}/supabase.svg` },
  'stable-diffusion': { id: 'stable-diffusion', label: 'Stable Diffusion', imageSrc: `${base}/stable-diffusion.svg` },
  typescript: { id: 'typescript', label: 'TypeScript', imageSrc: `${base}/typescript.svg` },
  nextjs: { id: 'nextjs', label: 'Next.js', imageSrc: `${base}/nextjs.svg` },
  n8n: { id: 'n8n', label: 'n8n', imageSrc: `${base}/n8n.svg` },
  pytorch: { id: 'pytorch', label: 'PyTorch', imageSrc: `${base}/pytorch.svg` },
  docker: { id: 'docker', label: 'Docker', imageSrc: `${base}/docker.svg` },
  postgres: { id: 'postgres', label: 'Postgres', imageSrc: `${base}/postgres.svg` },
  comfyui: { id: 'comfyui', label: 'ComfyUI', imageSrc: `${base}/comfyui.svg` },
  react: { id: 'react', label: 'React', imageSrc: `${base}/react.svg` },
  tailwind: { id: 'tailwind', label: 'Tailwind CSS', imageSrc: `${base}/tailwind.svg` },
  github: { id: 'github', label: 'GitHub', imageSrc: `${base}/github.svg` },
  aws: { id: 'aws', label: 'AWS', imageSrc: `${base}/aws.svg` },
  cloudinary: { id: 'cloudinary', label: 'Cloudinary', imageSrc: `${base}/cloudinary.svg` },
  sam: { id: 'sam', label: 'SAM', imageSrc: `${base}/sam.svg` },
  iiif: { id: 'iiif', label: 'IIIF', imageSrc: `${base}/iiif.svg` },
  openseadragon: { id: 'openseadragon', label: 'OpenSeadragon', imageSrc: `${base}/openseadragon.svg` },
};

export function resolveTechLogos(ids: string[]): TechLogoEntry[] {
  return ids.map((id) => techLogoRegistry[id] ?? { id, label: id });
}
