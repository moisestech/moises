'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { GlitchText } from '@/components/common/GlitchText';

interface BornIntoTheMachineHeroProps {
  title?: string;
}

export function BornIntoTheMachineHero({ title = 'Born into the Machine' }: BornIntoTheMachineHeroProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`mt-[60px] min-h-[120px] flex flex-col justify-center mb-12 sm:mb-16 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <GlitchText
          as="h1"
          className={`text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[200px] font-bold tracking-tight leading-[0.9] ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title}
        </GlitchText>
      </div>
    </section>
  );
}
