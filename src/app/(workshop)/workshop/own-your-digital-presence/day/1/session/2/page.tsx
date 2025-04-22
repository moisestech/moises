import { Metadata } from 'next'
import Day1Session2Client from '@/components/workshop/Day1Session2Client'

export const metadata: Metadata = {
  title: 'Session 2: AI & Resources | Digital Presence Workshop',
  description: 'Learn how to use AI tools and resources to enhance your website creation process. Discover AI-powered layout mockups, art asset generation, and smart content creation.',
  keywords: 'AI tools, website resources, digital presence, AI mockups, art assets, content creation',
  openGraph: {
    title: 'Session 2: AI & Resources',
    description: 'Enhance your website creation with AI tools and valuable resources.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/2',
    images: [
      {
        url: '/images/ai-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'AI & Resources Workshop Session'
      }
    ]
  }
}

export default function Day1Session2Page() {
  return <Day1Session2Client />
} 