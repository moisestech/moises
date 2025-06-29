import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ArtworkGrid = dynamic(() => import('@/components/shared/ArtworkGrid'), { ssr: false });

export const metadata: Metadata = {
  title: 'Collection 2015-2019 | Moises Sanabria',
  description: 'Works from 2015-2019 by Moises Sanabria, exploring digital culture and contemporary art practices.',
};

export default function Collection2015to2019() {
  return (
    <main className="pt-40 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-6xl font-extrabold mb-4">Collection 2015–2019</h1>
        <div className="text-2xl font-bold mb-8 max-w-3xl">
          Works from 2015-2019 exploring digital culture, social media, and contemporary art practices.
        </div>
      </div>
      
      <ArtworkGrid minYear={2015} maxYear={2019} />
    </main>
  );
} 