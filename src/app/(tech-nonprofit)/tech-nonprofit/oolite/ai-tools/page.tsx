import { Metadata } from 'next'
import OoliteAIToolsClientPage from './OoliteAIToolsClientPage'

export const metadata: Metadata = {
  title: 'AI Tools - Oolite Digital Arts Lab',
  description: 'Explore AI tools and automation workflows for the Digital Arts Lab. Learn about n8n, OpenAI integration, and creative AI applications.',
  keywords: ['ai tools', 'automation', 'n8n', 'openai', 'digital arts lab', 'oolite', 'miami'],
}

export default function OoliteAIToolsPage() {
  return <OoliteAIToolsClientPage />
} 