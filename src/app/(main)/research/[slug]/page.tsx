import { research } from '@/constants/research'
import ResearchPageClient from '@/components/page/ResearchPageClient'
import BrokenAccelerationPageClient from '@/components/page/BrokenAccelerationPageClient'
import { notFound } from 'next/navigation'

/** Pretty URLs use kebab-case; keys in `research` use snake_case. */
const RESEARCH_SLUG_TO_KEY: Record<string, string> = {
  'broken-acceleration': 'broken_acceleration',
  'the-value-and-future-of-the-image': 'value_of_the_image',
  'locust-echo-economies': 'echo_economies',
}

function resolveResearchKey(slug: string): string {
  return RESEARCH_SLUG_TO_KEY[slug] ?? slug
}

interface ResearchPageProps {
  params: {
    slug: string
  }
}

export default function ResearchPage({ params }: ResearchPageProps) {
  const key = resolveResearchKey(params.slug)

  if (key === 'broken_acceleration') {
    return <BrokenAccelerationPageClient />
  }

  const item = research[key]

  if (!item) {
    notFound()
  }

  return <ResearchPageClient item={item} />
} 