export type TechLogoEntry = {
  id: string;
  label: string;
  /** Public path under /public, or omit to show text badge only */
  imageSrc?: string;
};

/**
 * Registry of stack logos / labels per opportunity.
 * Add `imageSrc` when you have SVG/PNG assets under public/.
 */
export const techLogoRegistry: Record<string, TechLogoEntry> = {
  openai: { id: 'openai', label: 'OpenAI' },
  huggingface: { id: 'huggingface', label: 'Hugging Face' },
  python: { id: 'python', label: 'Python' },
  langchain: { id: 'langchain', label: 'LangChain' },
  azure: { id: 'azure', label: 'Azure' },
  replicate: { id: 'replicate', label: 'Replicate' },
  vercel: { id: 'vercel', label: 'Vercel' },
  supabase: { id: 'supabase', label: 'Supabase' },
  'stable-diffusion': { id: 'stable-diffusion', label: 'Stable Diffusion' },
  typescript: { id: 'typescript', label: 'TypeScript' },
  nextjs: { id: 'nextjs', label: 'Next.js' },
  n8n: { id: 'n8n', label: 'n8n' },
};

export function resolveTechLogos(ids: string[]): TechLogoEntry[] {
  return ids.map((id) => techLogoRegistry[id] ?? { id, label: id });
}
