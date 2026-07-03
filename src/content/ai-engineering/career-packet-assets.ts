/**
 * Career packet recruiting assets — delivery checklist and OG creative spec.
 * Upload finished files to Cloudinary under `jobs/recruiter/logos/` and `jobs/recruiter/`.
 */

export const CAREER_PACKET_OG_SPEC = {
  filename: 'career-packet-og-card.png',
  cloudinaryFolder: 'jobs/recruiter',
  width: 1200,
  height: 630,
  safeZone: 'Keep name + headline inside center 80% (crop on mobile link previews)',
  headline: 'AI Engineering Career Packet',
  subheadline: 'Full-Stack AI Systems Builder · Miami / Remote',
  stackLine: 'Claude · OpenAI · Next.js · Supabase · Airtable · n8n',
  portrait: 'Use moises-headshot or portrait crop — right third or left third',
  background: 'Match recruiter banner system (stone/cyan, icon row optional)',
  footer: 'moises.tech/career-packet',
} as const;

export type LogoAssetStatus = 'ready' | 'horizontal_only' | 'square_needed' | 'missing';

export type CareerPacketLogoAsset = {
  id: string;
  label: string;
  status: LogoAssetStatus;
  /** Where the mark appears on career packet */
  usedIn: string[];
  /** Cloudinary basename(s) to upload — square + horizontal when both needed */
  uploadBasenames: { square?: string; horizontal?: string };
  notes?: string;
};

/**
 * Canonical list of stack marks for `/career-packet`.
 * `horizontal_only` = marquee/banner OK; need square for icon chips.
 * `square_needed` = using Simple Icons or generic fallback in chips until square uploaded.
 * `missing` = not in techLogoRegistry yet.
 */
export const CAREER_PACKET_LOGO_MANIFEST: CareerPacketLogoAsset[] = [
  {
    id: 'anthropic',
    label: 'Claude / Anthropic',
    status: 'horizontal_only',
    usedIn: ['logo band', 'fit rows', 'snapshot', 'icon chips'],
    uploadBasenames: { horizontal: 'claude_logo_2023', square: 'claude_logo_2023_square' },
    notes: 'Have horizontal PNG on CDN; add 1:1 square for chip strip.',
  },
  {
    id: 'openai',
    label: 'OpenAI',
    status: 'horizontal_only',
    usedIn: ['logo band', 'fit rows', 'snapshot', 'icon chips'],
    uploadBasenames: { horizontal: 'open-ai-logo', square: 'open-ai-logo_square' },
  },
  {
    id: 'langgraph',
    label: 'LangGraph',
    status: 'horizontal_only',
    usedIn: ['logo band', 'snapshot'],
    uploadBasenames: { horizontal: 'lang-graph-logo', square: 'lang-graph-logo_square' },
  },
  {
    id: 'langchain',
    label: 'LangChain',
    status: 'horizontal_only',
    usedIn: ['logo band'],
    uploadBasenames: { horizontal: 'LangChain_Logo.svg', square: 'langchain_logo_square' },
  },
  {
    id: 'crewai',
    label: 'CrewAI',
    status: 'horizontal_only',
    usedIn: ['logo band'],
    uploadBasenames: { horizontal: 'crew_only_logo', square: 'crewai_logo_square' },
  },
  {
    id: 'python',
    label: 'Python',
    status: 'horizontal_only',
    usedIn: ['logo band'],
    uploadBasenames: { horizontal: 'python-logo', square: 'python-logo_square' },
  },
  {
    id: 'huggingface',
    label: 'Hugging Face',
    status: 'square_needed',
    usedIn: ['logo band', 'icon chips'],
    uploadBasenames: { horizontal: 'hugging-face-logo', square: 'hugging-face-logo_square' },
    notes: 'Chips use Simple Icons; band uses Cloudinary SVG — unify with paired assets.',
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    status: 'square_needed',
    usedIn: ['logo band', 'fit rows', 'snapshot', 'icon chips'],
    uploadBasenames: { horizontal: 'nextjs-logo_horizontal', square: 'nextjs-logo_square' },
    notes: 'Chips use Simple Icons (inverts in dark mode).',
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    status: 'square_needed',
    usedIn: ['logo band', 'fit rows', 'snapshot', 'icon chips'],
    uploadBasenames: { horizontal: 'typescript-logo_horizontal', square: 'typescript-logo_square' },
  },
  {
    id: 'react',
    label: 'React',
    status: 'square_needed',
    usedIn: ['logo band', 'fit rows', 'icon chips'],
    uploadBasenames: { horizontal: 'react-logo_horizontal', square: 'react-logo_square' },
  },
  {
    id: 'supabase',
    label: 'Supabase',
    status: 'square_needed',
    usedIn: ['logo band', 'fit rows', 'snapshot', 'icon chips'],
    uploadBasenames: { horizontal: 'supabase-logo_horizontal', square: 'supabase-logo_square' },
  },
  {
    id: 'postgres',
    label: 'PostgreSQL',
    status: 'square_needed',
    usedIn: ['logo band', 'fit rows', 'icon chips'],
    uploadBasenames: { horizontal: 'postgres-logo_horizontal', square: 'postgres-logo_square' },
  },
  {
    id: 'airtable',
    label: 'Airtable',
    status: 'horizontal_only',
    usedIn: ['logo band', 'fit rows', 'snapshot', 'icon chips'],
    uploadBasenames: { horizontal: 'airtable_logo', square: 'airtable_logo_square' },
  },
  {
    id: 'n8n',
    label: 'n8n',
    status: 'square_needed',
    usedIn: ['logo band', 'fit rows', 'snapshot', 'icon chips'],
    uploadBasenames: { horizontal: 'n8n-logo_horizontal', square: 'n8n-logo_square' },
  },
  {
    id: 'vercel',
    label: 'Vercel',
    status: 'square_needed',
    usedIn: ['logo band', 'fit rows', 'snapshot', 'icon chips'],
    uploadBasenames: { horizontal: 'vercel-logo_horizontal', square: 'vercel-logo_square' },
    notes: 'Chips invert in dark mode today.',
  },
  {
    id: 'github',
    label: 'GitHub',
    status: 'square_needed',
    usedIn: ['logo band', 'fit rows', 'icon chips'],
    uploadBasenames: { horizontal: 'github-logo_horizontal', square: 'github-logo_square' },
  },
  {
    id: 'weaviate',
    label: 'Weaviate',
    status: 'horizontal_only',
    usedIn: ['logo band only'],
    uploadBasenames: { horizontal: 'weaviate-logo', square: 'weaviate-logo_square' },
    notes: 'In marquee via genAi extras; not yet in chip registry.',
  },
  {
    id: 'pinecone',
    label: 'Pinecone',
    status: 'horizontal_only',
    usedIn: ['logo band only'],
    uploadBasenames: { horizontal: 'Pinecone-Full-Logo-Black', square: 'pinecone-logo_square' },
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    status: 'horizontal_only',
    usedIn: ['logo band only'],
    uploadBasenames: { horizontal: 'FastAPI_logo.svg', square: 'fastapi-logo_square' },
  },
];

export function careerPacketLogosNeedingUpload() {
  return CAREER_PACKET_LOGO_MANIFEST.filter((item) => item.status !== 'ready');
}
