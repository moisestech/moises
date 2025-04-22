import { Metadata } from 'next'
import Day1Session1FundamentalsAssetManagement from '@/components/workshop/Day1Session1FundamentalsAssetManagement'

export const metadata: Metadata = {
  title: 'Asset Management | Web Fundamentals',
  description: 'Learn how to organize and manage your digital assets effectively. Master file organization, media types, and storage solutions.',
  keywords: 'asset management, file organization, digital assets, media management, storage solutions, file structure',
  openGraph: {
    title: 'Asset Management | Web Fundamentals',
    description: 'Master digital asset management for your artist website.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/fundamentals/assets',
    images: [
      {
        url: '/images/asset-management.jpg',
        width: 1200,
        height: 630,
        alt: 'Asset Management Guide'
      }
    ]
  }
}

export default function AssetsPage() {
  return <Day1Session1FundamentalsAssetManagement />
} 