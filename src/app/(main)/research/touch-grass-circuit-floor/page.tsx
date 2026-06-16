import { Metadata } from 'next';
import TouchGrassCircuitFloorClient from '@/components/research/TouchGrassCircuitFloorClient';
import { touchGrassHeroMedia, touchGrassIndexImage } from '@/content/research/touch-grass-circuit-floor';

export const metadata: Metadata = {
  title: 'Touch Grass: Circuit Floor — The Ground Is Online',
  description:
    'Modular walkable installation built from reclaimed circuit boards and illuminated transparent tiles. Research dossier for a temporary public floor sculpture in development.',
  keywords: [
    'Touch Grass',
    'circuit floor',
    'reclaimed electronics',
    'Miami art',
    'public art',
    'No Vacancy',
    'installation',
    'Moises Sanabria',
  ],
  openGraph: {
    title: 'Touch Grass: Circuit Floor — Moises Sanabria',
    description:
      'The digital world is no longer somewhere else. It has become the environment. Modular floor installation in development.',
    images: [
      {
        url: touchGrassIndexImage.url,
        alt: touchGrassHeroMedia.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [touchGrassIndexImage.url],
  },
};

export default function TouchGrassCircuitFloorPage() {
  return <TouchGrassCircuitFloorClient />;
}
