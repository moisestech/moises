/**
 * Compact engineering / SA / FDE evidence project ID subsets.
 */

import type { EvidenceProjectId } from '@/content/evidence/projects';

export const engineeringEvidencePack = {
  loreProduct: ['lore-machine'] as const satisfies readonly EvidenceProjectId[],
  automation: [
    'n8n-gmail-intelligence',
    'bookleggers-commerce-automation',
  ] as const satisfies readonly EvidenceProjectId[],
  culturalInfra: [
    'ai24',
    'digital-culture-infrastructure',
  ] as const satisfies readonly EvidenceProjectId[],
  generativeMedia: ['multimodal-image-systems'] as const satisfies readonly EvidenceProjectId[],
  adTech: ['playwire-alumni'] as const satisfies readonly EvidenceProjectId[],
  fullStackAiDefault: [
    'lore-machine',
    'ai24',
    'n8n-gmail-intelligence',
  ] as const satisfies readonly EvidenceProjectId[],
  solutionsArchitectDefault: [
    'lore-machine',
    'n8n-gmail-intelligence',
    'digital-culture-infrastructure',
  ] as const satisfies readonly EvidenceProjectId[],
} as const;
