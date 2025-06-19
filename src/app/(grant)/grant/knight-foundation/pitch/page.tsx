"use client";

import { ProposalTextReveal } from '@/components/proposal/ProposalTextReveal';
import { useTheme } from '@/contexts/ThemeContext';

// export const metadata = {
//   title: 'Knight Foundation Pitch | Scroll Reveal Demo',
//   description: 'A minimal page to demo the scroll-based proposal text reveal animation.'
// };

export default function KnightFoundationPitchPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center ${
      isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      <ProposalTextReveal />
    </main>
  );
} 