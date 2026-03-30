/**
 * Chapter manifest for The Art of AI Agents — used by sidebar, breadcrumbs, and /chapter/[slug] routes.
 * `legacyHash` matches element ids on the full one-pager at /workshop/the-art-of-ai-agents/full
 */
export const ART_OF_AI_AGENTS_BASE = '/workshop/the-art-of-ai-agents' as const

export interface ArtOfAiAgentsChapter {
  slug: string
  title: string
  description: string
  /** Anchor on the legacy full page (same document as ArtOfAIAgents.tsx section ids) */
  legacyHash: string
}

export const ART_OF_AI_AGENTS_CHAPTERS: ArtOfAiAgentsChapter[] = [
  {
    slug: 'overview',
    title: 'Overview & hero',
    description: 'Opening section — positioning, visuals, and how the workshop runs.',
    legacyHash: 'hero',
  },
  {
    slug: 'course-overview',
    title: 'Course overview',
    description: 'Structure, modules, and learning arc (maps to the course overview block on the full page).',
    legacyHash: 'overview',
  },
  {
    slug: 'getting-started',
    title: 'Getting started',
    description: 'OpenAI and environment setup.',
    legacyHash: 'getting-started',
  },
  {
    slug: 'first-steps',
    title: 'First steps with n8n',
    description: 'Getting started inside the tool — orientation and first moves.',
    legacyHash: 'first-steps',
  },
  {
    slug: 'ui-editor',
    title: 'Editor UI',
    description: 'Navigating the n8n workflow editor.',
    legacyHash: 'ui-editor',
  },
  {
    slug: 'building-blocks',
    title: 'Building blocks & nodes',
    description: 'Core nodes and workflow ingredients.',
    legacyHash: 'building-blocks',
  },
  {
    slug: 'first-workflow',
    title: 'First workflow',
    description: 'End-to-end build of a first automation.',
    legacyHash: 'first-workflow',
  },
  {
    slug: 'keyboard-shortcuts',
    title: 'Keyboard shortcuts',
    description: 'Editor shortcuts for faster building.',
    legacyHash: 'keyboard-shortcuts',
  },
]

export function getArtOfAiAgentsChapter(slug: string): ArtOfAiAgentsChapter | undefined {
  return ART_OF_AI_AGENTS_CHAPTERS.find((c) => c.slug === slug)
}
