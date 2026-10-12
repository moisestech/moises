"use client";

import Link from 'next/link';
import ArtworkGrid from '@/components/shared/ArtworkGrid';
import { useTheme } from '@/contexts/ThemeContext';
import { SELECTED_WORK_SLUGS } from '@/constants/artworks';

export default function SelectedWorksPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main
      className={`min-h-screen pt-64 transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl font-bold mb-4">Selected Works</h1>
          <p className="text-lg leading-relaxed opacity-80">
            Materializing the Internet through sculpture, performance, moving image, and computational
            systems. These works trace recurring questions around value, attention, labor, belief,
            identity, and agency.
          </p>
          <p className="mt-4 text-base">
            <Link
              href="/eyebeam"
              className="underline-offset-4 opacity-70 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Current inquiry: Who Can Say No? →
            </Link>
          </p>
        </div>
        <ArtworkGrid slugs={SELECTED_WORK_SLUGS} imageSkeleton />
      </div>
    </main>
  );
}
