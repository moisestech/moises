import { Metadata } from 'next';
import WebsiteArchitecture from '@/components/workshop/WebsiteArchitecture';

export const metadata: Metadata = {
  title: 'Website Structure | Digital Presence Workshop',
  description: 'Learn about the essential pages and structure for your artist website. Understand how to organize your content and create a meaningful navigation flow.',
  keywords: 'website structure, artist website, portfolio, navigation, architecture',
  openGraph: {
    title: 'Website Structure Guide',
    description: 'Learn how to structure your artist website for maximum impact and engagement.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/fundamentals/structure',
    images: [
      {
        url: '/images/website-structure.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Structure Guide'
      }
    ]
  }
};

export default function StructurePage() {
  return <WebsiteArchitecture />;
} 