'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { GlitchText } from '@/components/common/GlitchText';
import { cn } from '@/lib/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const VARIANT_TITLE_CLASS: Record<
  'massive' | 'large' | 'medium',
  string
> = {
  massive:
    'text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[200px] font-bold tracking-tight leading-[0.9]',
  large:
    'text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.05] max-w-[min(100%,42rem)]',
  medium:
    'text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl',
};

export type GlitchDisplayHeroProps = {
  children: string;
  as?: HeadingTag;
  /** `massive`: full-bleed display (Born into the Machine index). `large`: workshop / long titles. `medium`: section scale. */
  variant?: keyof typeof VARIANT_TITLE_CLASS;
  /** Title ink color; `zinc` matches workshop / zinc UI surfaces. */
  palette?: 'gray' | 'zinc';
  /** Section wrapper; default includes top offset and bottom margin for standalone pages. */
  className?: string;
  /** Inner width constraint (default max-w-7xl). */
  containerClassName?: string;
  /** Extra classes on the glitch title (e.g. max-w-xl). */
  titleClassName?: string;
};

/**
 * Standalone editorial hero: theme-aware text + hover glitch (see {@link GlitchText}).
 * Reuse on research, workshops, and grant-style pages.
 */
export function GlitchDisplayHero({
  children,
  as = 'h1',
  variant = 'massive',
  palette = 'gray',
  className,
  containerClassName,
  titleClassName,
}: GlitchDisplayHeroProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const ink =
    palette === 'zinc'
      ? 'text-zinc-900 dark:text-zinc-50'
      : isDark
        ? 'text-white'
        : 'text-gray-900';

  return (
    <section
      className={cn(
        'mt-[60px] min-h-[120px] flex flex-col justify-center mb-12 sm:mb-16',
        ink,
        className
      )}
    >
      <div className={cn('w-full max-w-7xl mx-auto', containerClassName)}>
        <GlitchText as={as} className={cn(VARIANT_TITLE_CLASS[variant], ink, titleClassName)}>
          {children}
        </GlitchText>
      </div>
    </section>
  );
}
