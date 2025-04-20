import { Metadata } from 'next';
import SustainabilityClient from '@/components/workshop/SustainabilityClient';

export const metadata: Metadata = {
  title: 'Sustainable Digital Presence | Digital Presence Workshop',
  description: 'Learn how to build and maintain a sustainable digital presence as an artist. Choose the right platform, engage your audience, and create meaningful connections.',
  keywords: 'sustainable digital presence, artist website, platform choice, audience engagement, digital strategy, artist practice',
  openGraph: {
    title: 'Sustainable Digital Presence for Artists',
    description: 'Build a sustainable digital presence that grows with your artistic practice.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/introduction/sustainability',
    images: [
      {
        url: '/images/sustainability-fundamentals.jpg',
        width: 1200,
        height: 630,
        alt: 'Sustainable Digital Presence'
      }
    ]
  }
};

export default function SustainabilityPage() {
  return <SustainabilityClient />;
} 