/**
 * Shared list for the workshops hub (/workshops) “Explore our workshops” grid (also used by WorkshopClient).
 */
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
}

export const WORKSHOP_FEATURES: WorkshopFeature[] = [
  {
    title: 'Digital Presence',
    description: 'Build and optimize your online portfolio and website.',
    link: '/workshop/own-your-digital-presence',
    disabled: false,
    instructor: null,
    instructorRole: null,
  },
  {
    title: 'SEO Workshop',
    description: 'Get found, get seen, and expand your reach with search engine optimization strategies.',
    link: 'https://fabiola.io/workshop_seo/index.html',
    disabled: false,
    instructor: 'Fabiola Larios',
    instructorRole: 'SEO Workshop Lead',
    instructorAvatar: 'https://ui-avatars.com/api/?name=Fabiola+Larios&background=7c3aed&color=fff&size=64',
  },
  {
    title: 'Scale Tech Non-Profits',
    description: 'Custom software solutions to help your organization and community grow.',
    link: '/workshop/tech-nonprofit',
    disabled: false,
    instructor: null,
    instructorRole: null,
  },
  {
    title: 'The Art of AI Agents',
    description: 'Artist task automation—n8n, AI agents, and workflow design.',
    link: '/workshop/the-art-of-ai-agents',
    disabled: false,
    instructor: null,
    instructorRole: null,
  },
  {
    title: 'Learn AI Without Losing Yourself',
    description:
      'Live workshop-performance on practical AI, burnout culture, and staying human in the loop—writing, research, and creative work without flattening your voice.',
    link: '/workshop/learn-ai-without-losing-yourself',
    disabled: false,
    instructor: null,
    instructorRole: null,
    featured: true,
  },
  {
    title: 'AI & Art',
    description: 'Learn how to integrate AI tools into your creative process.',
    link: '/workshop/ai-and-the-arts',
    disabled: true,
    instructor: null,
    instructorRole: null,
  },
  {
    title: 'The Art of AI Marketing',
    description: 'Learn how to stand out in the age of AI-generated content.',
    link: '/workshop/the-art-of-ai-marketing',
    disabled: true,
    instructor: null,
    instructorRole: null,
  },
]
