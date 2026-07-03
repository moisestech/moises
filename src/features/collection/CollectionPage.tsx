"use client";
import { artist } from '@/constants/artworks';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CollectionPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const artworks = Object.entries(artist.artworks);

  return (
    <section className={`min-h-screen w-full ${isDark ? 'bg-black text-white' : 'bg-white text-black'} pt-32 md:pt-36 font-['MoMA_Sans']`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-6xl font-extrabold mb-4">The Collection</h1>
        <div className="text-2xl font-bold mb-8 max-w-2xl">
          Our evolving collection contains works of modern and contemporary art. Explore the latest artworks, installations, and digital experiments by Moises Sanabria.
        </div>
        {/* Search and Filters */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <label className="font-bold text-xl mr-4" htmlFor="search">Search artists and works</label>
            <input id="search" type="text" placeholder="Search..." className="flex-1 border-b-2 border-black bg-transparent px-2 py-1 text-lg outline-none" />
            <button className="ml-2 text-2xl">🔍</button>
          </div>
          <div className="flex flex-wrap gap-6 mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-black dark:accent-cyan-400 w-6 h-6" defaultChecked />
              <span className="font-bold text-lg">Has image</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-black dark:accent-cyan-400 w-6 h-6" />
              <span className="font-bold text-lg">On view in the Studio</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-black dark:accent-cyan-400 w-6 h-6" />
              <span className="font-bold text-lg">Recent acquisition</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-black dark:accent-cyan-400 w-6 h-6" />
              <span className="font-bold text-lg">Include uncatalogued works</span>
            </label>
          </div>
        </div>
        <div className="text-lg font-bold mb-6">Showing {artworks.length} artworks online</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {artworks.map(([slug, art]) => (
            <Link
              key={slug}
              href={`/art/${slug}`}
              className="flex flex-col group transition-transform hover:scale-[1.02] duration-200"
            >
              <div className="relative w-full h-48 mb-3 overflow-hidden bg-gray-200 dark:bg-gray-800">
                {art.images && art.images[0] && (
                  <Image src={art.images[0].url} alt={art.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                )}
              </div>
              <div className="text-xl font-bold leading-tight mb-1 group-hover:underline">{art.title}</div>
              <div className="text-md text-gray-600 dark:text-gray-300 mb-1">{art.year}</div>
              {art.on_view && <div className="text-green-500 font-bold text-sm mb-1">On view</div>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 