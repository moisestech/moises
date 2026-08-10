/**
 * Shared list for the workshops hub (/workshops) “Explore our workshops” grid (also used by WorkshopClient).
 */
export type WorkshopCardVisual =
  | 'digital-presence'
  | 'seo'
  | 'nonprofit'
  | 'ai-agents'
  | 'learn-ai'
  | 'generic'

export interface WorkshopFeature {
  title: string
  description: string
  link: string
  disabled: boolean
  instructor: string | null
  instructorRole: string | null
  instructorAvatar?: string
  /** Highlights the card in “Explore our workshops” grids */
  featured?: boolean
  /** Large icon / hero strip on hub cards */
  cardVisual: WorkshopCardVisual
  /** Primary button label */
  ctaLabel?: string
}

export const WORKSHOP_FEATURES: WorkshopFeature[] = [
  {
    title: 'Digital Presence',
    description: 'Build and optimize your online portfolio and website.',
    link: '/workshop/own-your-digital-presence',
    disabled: false,
    instructor: null,
    instructorRole: null,
    cardVisual: 'digital-presence',
    ctaLabel: 'Open program',
  },
  {
    title: 'SEO Workshop',
    description: 'Get found, get seen, and expand your reach with search engine optimization strategies.',
    link: '/workshop/seo-for-artists-in-the-age-of-ai-search',
    disabled: false,
    instructor: 'Fabiola Larios',
    instructorRole: 'SEO Workshop Lead',
    instructorAvatar: 'https://ui-avatars.com/api/?name=Fabiola+Larios&background=7c3aed&color=fff&size=64',
    cardVisual: 'seo',
    ctaLabel: 'Open workshop',
  },
  {
    title: 'Scale Tech Non-Profits',
    description: 'Custom software solutions to help your organization and community grow.',
    link: '/workshop/tech-nonprofit',
    disabled: false,
    instructor: null,
    instructorRole: null,
    cardVisual: 'nonprofit',
    ctaLabel: 'View programs',
  },
  {
    title: 'The Art of AI Agents',
    description:
      'Artist task automation—n8n, AI agents, and workflow design. Program overview, formats, booking, and chapter materials.',
    link: '/workshop/the-art-of-ai-agents',
    disabled: false,
    instructor: null,
    instructorRole: null,
    featured: true,
    cardVisual: 'ai-agents',
    ctaLabel: 'View overview',
  },
  {
    title: 'Learn AI Without Losing Yourself',
    description:
      'Separate live workshop-performance on practical AI, burnout culture, and staying human in the loop—writing, research, and creative work without flattening your voice.',
    link: '/workshop/learn-ai-without-losing-yourself',
    disabled: false,
    instructor: null,
    instructorRole: null,
    cardVisual: 'learn-ai',
    ctaLabel: 'View workshop',
  },
  {
    title: 'AI & Art',
    description: 'Learn how to integrate AI tools into your creative process.',
    link: '/workshop/ai-and-the-arts',
    disabled: true,
    instructor: null,
    instructorRole: null,
    cardVisual: 'generic',
  },
  {
    title: 'The Art of AI Marketing',
    description: 'Learn how to stand out in the age of AI-generated content.',
    link: '/workshop/the-art-of-ai-marketing',
    disabled: true,
    instructor: null,
    instructorRole: null,
    cardVisual: 'generic',
  },
]
