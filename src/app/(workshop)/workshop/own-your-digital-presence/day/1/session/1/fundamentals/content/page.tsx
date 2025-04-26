import { Metadata } from 'next';
import Day1Session1FundamentalsContent from '@/components/workshop/Day1Session1FundamentalsContent';

export const metadata: Metadata = {
  title: 'Content Management Fundamentals | Digital Presence Workshop',
  description: 'Learn how to effectively manage and organize content across different platforms. Compare content management features in Wix, Squarespace, and GitHub Pages.',
  keywords: 'content management, Wix, Squarespace, GitHub Pages, content organization, digital presence, website content',
  openGraph: {
    title: 'Content Management Fundamentals',
    description: 'Master content management across different platforms for your digital presence.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/fundamentals/content',
    images: [
      {
        url: '/images/content-fundamentals.jpg',
        width: 1200,
        height: 630,
        alt: 'Content Management Fundamentals'
      }
    ]
  }
};

export default function ContentPage() {
  return <Day1Session1FundamentalsContent />
} 