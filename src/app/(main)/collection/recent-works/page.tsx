import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ArtworkGrid = dynamic(() => import('@/components/shared/ArtworkGrid'), { ssr: false });

export const metadata: Metadata = {
  title: 'Recent Works (2020-2025) | Moises Sanabria',
  description: 'Recent works from 2020-2025 by Moises Sanabria, featuring AI art, installations, and contemporary digital practices.',
};

export default function RecentWorksCollection() {
  return (
    <main className="pt-40 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-6xl font-extrabold mb-4">Recent Works</h1>
        <div className="text-2xl font-bold mb-8 max-w-3xl">
          Recent works from 2020-2025 exploring AI art, digital installations, and contemporary technological practices.
        </div>
      </div>
      
      <ArtworkGrid minYear={2020} maxYear={2025} />
    </main>
  );
} 