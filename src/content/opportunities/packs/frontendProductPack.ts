/**
 * Frontend / product engineering pack (Comfy, Alpha Drive, Air Space adjacent).
 */

import type { EvidenceProjectId } from '@/content/evidence/projects';
import type { SkillsMatrixRow } from '@/content/opportunities/types';

export const frontendProductPack = {
  featuredProjectIds: [
    'lore-machine',
    'ai24',
    'multimodal-image-systems',
  ] as const satisfies readonly EvidenceProjectId[],
  skillRows: [
    {
      category: 'Frontend',
      skills: 'React, Next.js, TypeScript, Tailwind, design systems, responsive UI',
      icon: 'code2',
    },
    {
      category: 'Product AI',
      skills: 'LLM workflows, generative media APIs, human review gates, prompt systems',
      icon: 'sparkles',
    },
    {
      category: 'Delivery',
      skills: 'Vercel, API integrations, auth, rapid prototyping, stakeholder demos',
      icon: 'workflow',
    },
  ] as const satisfies readonly SkillsMatrixRow[],
} as const;
