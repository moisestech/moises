/**
 * Teaching / education / artist-development evidence pack.
 */

import type { EvidenceProjectId } from '@/content/evidence/projects';
import type { SkillsMatrixRow } from '@/content/opportunities/types';

export const educationEvidencePack = {
  featuredProjectIds: [
    'ai24',
    'digital-culture-infrastructure',
  ] as const satisfies readonly EvidenceProjectId[],
  internalLinks: [
    { label: 'Workshops', href: '/workshops' },
    { label: 'Oolite Arts case study', href: '/oolite-arts' },
    { label: 'Creative infrastructure', href: '/artist-infrastructure' },
  ] as const,
  skillRows: [
    {
      category: 'Teaching',
      skills: 'Artist workshops, curriculum design, critique culture, bilingual facilitation',
      icon: 'users',
    },
    {
      category: 'Creative technology',
      skills: 'AI literacy, vibe coding, digital fabrication workflows, studio automation',
      icon: 'sparkles',
    },
    {
      category: 'Institutional systems',
      skills: 'Lab operations, documentation, booking patterns, artist intake',
      icon: 'workflow',
    },
  ] as const satisfies readonly SkillsMatrixRow[],
} as const;
