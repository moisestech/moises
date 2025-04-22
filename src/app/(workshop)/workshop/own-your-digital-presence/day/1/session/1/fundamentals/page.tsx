import { Metadata } from 'next'
import Day1Session1Fundamentals from '@/components/workshop/Day1Session1Fundamentals'

export const metadata: Metadata = {
  title: 'Web Fundamentals | Digital Presence Workshop',
  description: 'Learn the core concepts of digital presence and website building. Discover how to structure, showcase, and maintain your website like a professional gallery.',
  keywords: 'web fundamentals, website structure, digital presence, portfolio, artist website, content organization',
  openGraph: {
    title: 'Web Fundamentals',
    description: 'Learn how to build and maintain your digital presence like a professional gallery.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/fundamentals',
    images: [
      {
        url: '/images/web-fundamentals.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Fundamentals Workshop'
      }
    ]
  }
}

export default function FundamentalsPage() {
  return <Day1Session1Fundamentals />
} 