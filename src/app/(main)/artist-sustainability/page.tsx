import type { Metadata } from 'next';
import { ArtistSustainabilityClient } from '@/components/institutions/ArtistSustainabilityClient';
import { artistSustainabilityPage } from '@/content/institutions/artistSustainability';

const { meta } = artistSustainabilityPage;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'website',
    url: meta.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
};

export default function ArtistSustainabilityPage() {
  return <ArtistSustainabilityClient />;
}
