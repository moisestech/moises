import { Metadata } from 'next';
import CollectionPage from '@/features/collection/CollectionPage';

export const metadata: Metadata = {
  title: 'The Collection | Moises Sanabria',
  description: 'Explore the evolving collection of artworks, installations, and digital experiments by Moises Sanabria. Modern and contemporary art, on view and online.'
};

export default function Collection() {
  return <CollectionPage />;
} 