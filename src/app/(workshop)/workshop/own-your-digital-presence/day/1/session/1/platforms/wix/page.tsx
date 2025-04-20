import { Metadata } from 'next';
import WixPlatformClient from '@/components/workshop/wix/WixPlatformClientDay1';

export const metadata: Metadata = {
  title: 'Wix Platform Guide | Digital Presence Workshop',
  description: 'Learn how to effectively use Wix for your artist website. Comprehensive guide to Wix features, templates, and best practices.',
  keywords: 'Wix, website builder, artist website, Wix templates, Wix features, digital presence',
  openGraph: {
    title: 'Wix Platform Guide',
    description: 'Master Wix for your artist website with this comprehensive guide.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/platforms/wix',
    images: [
      {
        url: '/images/wix-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'Wix Platform Guide'
      }
    ]
  }
};

export default function WixPlatformPage() {
  return <WixPlatformClient />;
} 