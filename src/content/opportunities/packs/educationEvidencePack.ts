/**
 * Teaching / education / artist-development evidence pack.
 */

import type { EvidenceProjectId } from '@/content/evidence/projects';
import type { SkillsMatrixRow, TeachingHighlight } from '@/content/opportunities/types';
import { ART_OF_AI_AGENTS_SCREENSHOTS } from '@/constants/art-of-ai-agents';

const emailInboxDiagram = ART_OF_AI_AGENTS_SCREENSHOTS[0];

export const educationEvidencePack = {
  featuredProjectIds: [
    'ai24',
    'digital-culture-infrastructure',
    'n8n-gmail-intelligence',
  ] as const satisfies readonly EvidenceProjectId[],
  internalLinks: [
    { label: 'Workshops', href: '/workshops' },
    { label: 'The Art of AI Agents', href: '/workshop/the-art-of-ai-agents' },
    { label: 'Email Inbox Organizer', href: '/workshop/the-art-of-ai-agents/share' },
    { label: 'Oolite Arts case study', href: '/oolite-arts' },
    { label: 'Creative infrastructure', href: '/artist-infrastructure' },
  ] as const,
  teachingHighlights: [
    {
      title: 'The Art of AI Agents',
      description: 'Artist Task Automation + n8n Email Inbox Organizer — human-supervised studio workflows.',
      href: '/workshop/the-art-of-ai-agents',
      imageSrc: emailInboxDiagram.src,
      imageAlt: emailInboxDiagram.alt,
    },
    {
      title: 'Learn AI Without Losing Yourself',
      description: 'Structured curriculum for critical, sustainable AI practice.',
      href: '/workshop/learn-ai-without-losing-yourself',
      imageSrc:
        'https://res.cloudinary.com/du1ysiumj/image/upload/v1774826962/learn-ai-without-loosing-yourself-bg-no-text_pz3qno.png',
      imageAlt: 'Learn AI Without Losing Yourself',
    },
  ] as const satisfies readonly TeachingHighlight[],
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
