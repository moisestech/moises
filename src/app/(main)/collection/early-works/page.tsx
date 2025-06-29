import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ArtworkGrid = dynamic(() => import('@/components/shared/ArtworkGrid'), { ssr: false });

export const metadata: Metadata = {
  title: 'Early Works (2010-2014) | Moises Sanabria',
  description: 'Early works and experiments from 2010-2014 by Moises Sanabria.',
};

export default function EarlyWorksCollection() {
  return (
    <main className="pt-40 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-6xl font-extrabold mb-4">Early Works</h1>
        <div className="text-2xl font-bold mb-8 max-w-3xl">
          Early experiments and foundational works from 2010-2014, exploring the intersection of art and technology.
        </div>
      </div>
      
      <ArtworkGrid minYear={2010} maxYear={2014} />
    </main>
  );
} 