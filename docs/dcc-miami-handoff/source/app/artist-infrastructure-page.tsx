import type { Metadata } from 'next';
import { ArtistInfrastructureClient } from '@/components/institutions/ArtistInfrastructureClient';
import { artistInfrastructurePage } from '@/content/institutions/artistInfrastructure';

const { meta } = artistInfrastructurePage;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: '/artist-infrastructure' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'website',
    url: meta.url,
    images: [
      {
        url: meta.ogImage,
        width: 1030,
        height: 579,
        alt: 'Oolite Arts Digital Lab — creative infrastructure for artists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ArtistInfrastructurePage() {
  return <ArtistInfrastructureClient />;
}
