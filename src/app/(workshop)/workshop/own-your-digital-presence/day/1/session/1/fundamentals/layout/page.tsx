import { Metadata } from 'next'
import Day1Session1FundamentalsLayout from '@/components/workshop/Day1Session1FundamentalsLayout'

export const metadata: Metadata = {
  title: 'Layout Fundamentals | Digital Presence Workshop',
  description: 'Learn the core principles of effective layout design including hierarchy, alignment, proximity, and contrast.',
  keywords: 'layout design, design principles, visual hierarchy, alignment, proximity, contrast, web design',
  openGraph: {
    title: 'Layout Fundamentals',
    description: 'Master the core principles of effective layout design for your website.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/fundamentals/layout',
    images: [
      {
        url: '/images/layout-fundamentals.jpg',
        width: 1200,
        height: 630,
        alt: 'Layout Fundamentals'
      }
    ]
  }
}

export default function LayoutFundamentalsPage() {
  return <Day1Session1FundamentalsLayout />
} 