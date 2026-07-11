import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';

/** Accent tokens for interactive technology CV (keywords, hover, active job). */
export const technologyCvAccent: CareerPacketSectionAccent = {
  navActive: 'border-cyan-600 bg-cyan-700/95 dark:border-cyan-400 dark:bg-cyan-300',
  navActiveText: 'text-white dark:text-cyan-950',
  navIdle: 'border-stone-300 hover:border-cyan-500 dark:border-stone-600 dark:hover:border-cyan-400',
  sectionBorder: 'border-cyan-600/35 dark:border-cyan-400/35',
  sectionGradient: 'from-cyan-500/10 via-sky-400/5 to-transparent',
  eyebrow: 'text-cyan-700 dark:text-cyan-300',
  keywordUnderline: 'decoration-cyan-600/60 dark:decoration-cyan-400/60',
  keywordActive: 'text-cyan-800 dark:text-cyan-200',
  paragraphActiveBg:
    'bg-gradient-to-r from-cyan-50/90 via-sky-50/40 to-transparent dark:from-cyan-950/35 dark:via-sky-950/20 dark:to-transparent',
  paragraphActiveBorder: 'border-cyan-600 dark:border-cyan-400',
  mediaOverlay: 'from-cyan-500/25 via-transparent to-transparent',
  mediaBorder: 'border-cyan-600/30 dark:border-cyan-400/30',
  mediaGlowRgb: '6, 182, 212',
  chipActive: 'border-cyan-600 bg-cyan-50 text-cyan-950 dark:border-cyan-400 dark:bg-cyan-950/40 dark:text-cyan-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
  cardHover:
    'hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.18)] dark:hover:border-cyan-500/45 dark:hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]',
};

/** Shared body copy — high contrast in both themes. */
export const technologyCvText = {
  primary: 'text-stone-900 dark:text-stone-50',
  secondary: 'text-stone-600 dark:text-stone-300',
  muted: 'text-stone-500 dark:text-stone-400',
  link: 'text-cyan-700 underline underline-offset-4 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100',
} as const;
