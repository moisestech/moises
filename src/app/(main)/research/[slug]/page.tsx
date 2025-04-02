import { research } from '@/constants/research'
import ResearchPageClient from '@/components/page/ResearchPageClient'
import { notFound } from 'next/navigation'

interface ResearchPageProps {
  params: {
    slug: string
  }
}

export default function ResearchPage({ params }: ResearchPageProps) {
  const item = research[params.slug]

  if (!item) {
    notFound()
  }

  return <ResearchPageClient item={item} />
} 