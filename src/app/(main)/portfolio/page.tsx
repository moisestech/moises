"use client";

import Link from 'next/link';
import ArtworkGrid from '@/components/shared/ArtworkGrid';
import { useTheme } from '@/contexts/ThemeContext';

export default function PortfolioPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <main className={`min-h-screen pt-64 transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center">Portfolio</h1>
        <section className="mb-16 border-y border-current py-8" aria-labelledby="new-work-heading">
          <p className="text-xs uppercase tracking-widest">2026 · Work in development</p>
          <h2 id="new-work-heading" className="mt-3 text-3xl font-medium">
            <Link href="/art/proof-of-human-work" className="underline underline-offset-4">Proof of Human Work</Link>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">One hundred imitation $100 bills. One hundred different phrases, handwritten in cursive, numbered, signed, and intended to be given away.</p>
        </section>
        <ArtworkGrid />
      </div>
    </main>
  );
} 