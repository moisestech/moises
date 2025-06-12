"use client";

import ArtworkGrid from '@/components/ArtworkGrid';
import { useTheme } from '@/contexts/ThemeContext';

export default function PortfolioPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <main className={`min-h-screen pt-64 transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center">Portfolio</h1>
        <ArtworkGrid />
      </div>
    </main>
  );
} 