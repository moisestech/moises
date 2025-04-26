import { Metadata } from 'next';
import SquarespacePlatformClientDay1 from '@/components/workshop/squarespace/SquarespacePlatformClientDay1';

export const metadata: Metadata = {
  title: 'Squarespace Guide | Digital Presence Workshop',
  description: 'Learn how to build your professional portfolio website using Squarespace\'s powerful platform and features.',
  keywords: 'Squarespace, website builder, artist website, Squarespace templates, e-commerce, digital presence',
  openGraph: {
    title: 'Squarespace Platform Guide',
    description: 'Master Squarespace for your artist website with this comprehensive guide.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/squarespace',
    images: [
      {
        url: '/images/squarespace-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'Squarespace Platform Guide'
      }
    ]
  }
};

export default function SquarespacePlatformPage() {
  return <SquarespacePlatformClientDay1 />;
} 