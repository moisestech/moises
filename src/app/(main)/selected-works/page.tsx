"use client";

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
          <p className="text-lg opacity-80">
            A curated selection of works for curators, grant panels, residencies, and institutional
            partners.
          </p>
        </div>
        <ArtworkGrid slugs={SELECTED_WORK_SLUGS} />
      </div>
    </main>
  );
}
