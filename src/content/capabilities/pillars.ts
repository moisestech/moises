import type { CapabilityPillarId, CapabilityPillarMeta } from './types';

export const CAPABILITY_PILLARS: readonly CapabilityPillarMeta[] = [
  {
    id: 'ai-engineering',
    name: 'AI Engineering',
    shortName: 'AI Eng',
    description:
      'Prompt systems, LLM product workflows, agents, and retrieval — with honest gates where public proof is still shipping.',
    color: '#7C3AED',
    icon: 'sparkles',
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    shortName: 'Software',
    description:
      'Production TypeScript, Python, React/Next.js, APIs, and auth — the shipping layer behind AI and creative products.',
    color: '#2563EB',
    icon: 'code2',
  },
  {
    id: 'data-infrastructure',
    name: 'Data / Infrastructure',
    shortName: 'Data',
    description:
      'Warehousing, SQL, BI, and pipelines — Playwire Snowflake spine plus product databases on Supabase/Postgres.',
    color: '#0D9488',
    icon: 'database',
  },
  {
    id: 'design-creative-technology',
    name: 'Design + Creative Technology',
    shortName: 'Creative Tech',
    description:
      'Where the practice is rare: ComfyUI/diffusion pipelines, installations, WebXR, and institutional digital lab ops.',
    color: '#DB2777',
    icon: 'palette',
  },
  {
    id: 'devops-deployment',
    name: 'DevOps + Deployment',
    shortName: 'DevOps',
    description:
      'Vercel production paths, GitHub Actions, Docker, and AWS surfaces used in product and data work.',
    color: '#D97706',
    icon: 'server',
  },
  {
    id: 'leadership-communication',
    name: 'Leadership / Communication',
    shortName: 'Leadership',
    description:
      'Cross-functional leadership, teaching, and technical translation — evidence-only, no certifications needed.',
    color: '#059669',
    icon: 'users',
  },
] as const;

export function getPillarMeta(id: CapabilityPillarId): CapabilityPillarMeta {
  const pillar = CAPABILITY_PILLARS.find((p) => p.id === id);
  if (!pillar) {
    throw new Error(`Unknown capability pillar: ${id}`);
  }
  return pillar;
}

/** Hash anchors used across opportunity / archetype deep-links. */
export function capabilitiesPillarHref(id: CapabilityPillarId): string {
  return `/capabilities#${id}`;
}
