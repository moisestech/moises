'use client';

import { useState, useEffect } from 'react';
import { artist } from '@/constants/artworks';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function LandingCollection() {
  const [randomArtworks, setRandomArtworks] = useState<[string, any][]>([]);

  useEffect(() => {
    // Convert artworks object to array of entries and shuffle
    const artworkEntries = Object.entries(artist.artworks);
    const shuffled = [...artworkEntries].sort(() => 0.5 - Math.random());
    setRandomArtworks(shuffled.slice(0, 9));
  }, []);

  return (
    <section className="w-full px-6 py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-7 gap-12">
        {/* Column 1 - Text Content */}
        <div className="col-span-2 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['MoMA_Sans'] font-bold leading-tight">
            Art in our collection
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Discover artwork that speaks to you, from 1990 to today.
          </p>
          <div className="flex items-center space-x-2 font-bold text-lg cursor-pointer group">
            <span>Find your favorites</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Column 2 - Artwork Grid */}
        <div className="col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
          {randomArtworks.map(([key, artwork]) => (
            <div key={key} className="flex flex-col space-y-2">
              <div className="relative aspect-[4/3]">
                <Image
                  src={artwork.images[0].url}
                  alt={artwork.images[0].caption || artwork.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg line-clamp-1 leading-none">{artwork.title}</p>
                {artwork.medium && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm italic line-clamp-1 -mt-0.5 leading-none">
                    {artwork.medium}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 