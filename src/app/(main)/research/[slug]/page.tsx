import { research } from '@/constants/research'
import ResearchPageClient from '@/components/page/ResearchPageClient'
import BrokenAccelerationPageClient from '@/components/page/BrokenAccelerationPageClient'
import TouchGrassCircuitFloorClient from '@/components/research/TouchGrassCircuitFloorClient'
import WeightOfTheCloudClient from '@/components/research/WeightOfTheCloudClient'
import { notFound } from 'next/navigation'

/** Pretty URLs use kebab-case; keys in `research` use snake_case. */
const RESEARCH_SLUG_TO_KEY: Record<string, string> = {
  'broken-acceleration': 'broken_acceleration',
  'the-value-and-future-of-the-image': 'value_of_the_image',
  'locust-echo-economies': 'echo_economies',
  'touch-grass-circuit-floor': 'touch_grass_circuit_floor',
  'weight-of-the-cloud': 'weight_of_the_cloud',
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

  if (key === 'touch_grass_circuit_floor') {
    return <TouchGrassCircuitFloorClient />
  }

  if (key === 'weight_of_the_cloud') {
    return <WeightOfTheCloudClient />
  }

  const item = research[key]

  if (!item) {
    notFound()
  }

  return <ResearchPageClient item={item} />
} 