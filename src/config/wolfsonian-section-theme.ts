/**
 * Muted section colors for the Wolfsonian fellowship story page.
 * Keep classes as static strings for Tailwind JIT.
 */
export type WolfsonianSectionAccent = {
  navActive: string;
  navActiveText: string;
  navIdle: string;
  sectionBorder: string;
  sectionGradient: string;
  eyebrow: string;
  keywordUnderline: string;
  keywordActive: string;
  paragraphActiveBg: string;
  paragraphActiveBorder: string;
  mediaOverlay: string;
  mediaBorder: string;
  progressDot: string;
  chipActive: string;
  chipIdle: string;
  pressureColorMap?: Record<string, string>;
};

const premise: WolfsonianSectionAccent = {
  navActive: 'border-teal-700 bg-teal-800/95 dark:border-teal-400 dark:bg-teal-200',
  navActiveText: 'text-white dark:text-teal-950',
  navIdle: 'border-stone-300 hover:border-teal-600 dark:border-stone-600 dark:hover:border-teal-400',
  sectionBorder: 'border-teal-700/40 dark:border-teal-400/40',
  sectionGradient: 'from-teal-500/10 via-amber-300/5 to-transparent',
  eyebrow: 'text-teal-800 dark:text-teal-300',
  keywordUnderline: 'decoration-teal-600/60 dark:decoration-teal-400/60',
  keywordActive: 'text-teal-950 dark:text-teal-100',
  paragraphActiveBg: 'bg-teal-50/80 dark:bg-teal-950/20',
  paragraphActiveBorder: 'border-teal-600 dark:border-teal-400',
  mediaOverlay: 'from-teal-500/25 via-transparent to-transparent',
  mediaBorder: 'border-teal-700/30 dark:border-teal-400/30',
  progressDot: 'bg-teal-600 dark:bg-teal-400',
  chipActive: 'border-teal-700 bg-teal-50 text-teal-950 dark:border-teal-400 dark:bg-teal-950/40 dark:text-teal-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
};

const whyWolfsonian: WolfsonianSectionAccent = {
  navActive: 'border-orange-800 bg-orange-900/95 dark:border-orange-400 dark:bg-orange-200',
  navActiveText: 'text-white dark:text-orange-950',
  navIdle: 'border-stone-300 hover:border-orange-700 dark:border-stone-600 dark:hover:border-orange-400',
  sectionBorder: 'border-orange-800/40 dark:border-orange-400/40',
  sectionGradient: 'from-orange-700/10 via-amber-500/5 to-slate-500/5',
  eyebrow: 'text-orange-900 dark:text-orange-300',
  keywordUnderline: 'decoration-orange-700/60 dark:decoration-orange-400/60',
  keywordActive: 'text-orange-950 dark:text-orange-100',
  paragraphActiveBg: 'bg-orange-50/80 dark:bg-orange-950/20',
  paragraphActiveBorder: 'border-orange-700 dark:border-orange-400',
  mediaOverlay: 'from-orange-600/20 via-transparent to-transparent',
  mediaBorder: 'border-orange-800/30 dark:border-orange-400/30',
  progressDot: 'bg-orange-700 dark:bg-orange-400',
  chipActive: 'border-orange-800 bg-orange-50 text-orange-950 dark:border-orange-400 dark:bg-orange-950/40 dark:text-orange-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
};

const designedBelief: WolfsonianSectionAccent = {
  navActive: 'border-amber-700 bg-amber-800/95 dark:border-amber-400 dark:bg-amber-200',
  navActiveText: 'text-white dark:text-amber-950',
  navIdle: 'border-stone-300 hover:border-amber-600 dark:border-stone-600 dark:hover:border-amber-400',
  sectionBorder: 'border-amber-700/40 dark:border-amber-400/40',
  sectionGradient: 'from-yellow-500/10 via-rose-500/5 to-indigo-500/5',
  eyebrow: 'text-amber-900 dark:text-amber-300',
  keywordUnderline: 'decoration-amber-700/60 dark:decoration-amber-400/60',
  keywordActive: 'text-amber-950 dark:text-amber-100',
  paragraphActiveBg: 'bg-amber-50/80 dark:bg-amber-950/20',
  paragraphActiveBorder: 'border-amber-700 dark:border-amber-400',
  mediaOverlay: 'from-yellow-500/20 via-rose-500/10 to-transparent',
  mediaBorder: 'border-amber-700/30 dark:border-amber-400/30',
  progressDot: 'bg-amber-700 dark:bg-amber-400',
  chipActive: 'border-amber-700 bg-amber-50 text-amber-950 dark:border-amber-400 dark:bg-amber-950/40 dark:text-amber-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
  pressureColorMap: {
    aspiration: 'border-amber-500 bg-amber-50 text-amber-900 dark:border-amber-400 dark:bg-amber-950/30 dark:text-amber-100',
    fear: 'border-rose-600 bg-rose-50 text-rose-900 dark:border-rose-400 dark:bg-rose-950/30 dark:text-rose-100',
    discipline: 'border-stone-600 bg-stone-100 text-stone-900 dark:border-stone-400 dark:bg-stone-900/30 dark:text-stone-100',
    comfort: 'border-sky-600 bg-sky-50 text-sky-900 dark:border-sky-400 dark:bg-sky-950/30 dark:text-sky-100',
    patriotism: 'border-red-700 bg-red-50 text-red-900 dark:border-red-400 dark:bg-red-950/30 dark:text-red-100',
    obedience: 'border-orange-700 bg-orange-50 text-orange-900 dark:border-orange-400 dark:bg-orange-950/30 dark:text-orange-100',
    belonging: 'border-indigo-600 bg-indigo-50 text-indigo-900 dark:border-indigo-400 dark:bg-indigo-950/30 dark:text-indigo-100',
    grief: 'border-violet-700 bg-violet-50 text-violet-900 dark:border-violet-400 dark:bg-violet-950/30 dark:text-violet-100',
    scarcity: 'border-zinc-600 bg-zinc-100 text-zinc-900 dark:border-zinc-400 dark:bg-zinc-900/30 dark:text-zinc-100',
    desire: 'border-pink-600 bg-pink-50 text-pink-900 dark:border-pink-400 dark:bg-pink-950/30 dark:text-pink-100',
    optimism: 'border-emerald-600 bg-emerald-50 text-emerald-900 dark:border-emerald-400 dark:bg-emerald-950/30 dark:text-emerald-100',
  },
};

const agents: WolfsonianSectionAccent = {
  navActive: 'border-violet-700 bg-violet-800/95 dark:border-violet-400 dark:bg-violet-200',
  navActiveText: 'text-white dark:text-violet-950',
  navIdle: 'border-stone-300 hover:border-violet-600 dark:border-stone-600 dark:hover:border-violet-400',
  sectionBorder: 'border-violet-700/40 dark:border-violet-400/40',
  sectionGradient: 'from-violet-500/10 via-cyan-500/5 to-amber-500/5',
  eyebrow: 'text-violet-900 dark:text-violet-300',
  keywordUnderline: 'decoration-violet-600/60 dark:decoration-violet-400/60',
  keywordActive: 'text-violet-950 dark:text-violet-100',
  paragraphActiveBg: 'bg-violet-50/80 dark:bg-violet-950/20',
  paragraphActiveBorder: 'border-violet-600 dark:border-violet-400',
  mediaOverlay: 'from-violet-500/20 via-cyan-500/10 to-transparent',
  mediaBorder: 'border-violet-700/30 dark:border-violet-400/30',
  progressDot: 'bg-violet-600 dark:bg-violet-400',
  chipActive: 'border-violet-700 bg-violet-50 text-violet-950 dark:border-violet-400 dark:bg-violet-950/40 dark:text-violet-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
};

const citation: WolfsonianSectionAccent = {
  navActive: 'border-emerald-700 bg-emerald-800/95 dark:border-emerald-400 dark:bg-emerald-200',
  navActiveText: 'text-white dark:text-emerald-950',
  navIdle: 'border-stone-300 hover:border-emerald-600 dark:border-stone-600 dark:hover:border-emerald-400',
  sectionBorder: 'border-emerald-700/40 dark:border-emerald-400/40',
  sectionGradient: 'from-sky-500/10 via-emerald-300/5 to-transparent',
  eyebrow: 'text-emerald-900 dark:text-emerald-300',
  keywordUnderline: 'decoration-emerald-600/60 dark:decoration-emerald-400/60',
  keywordActive: 'text-emerald-950 dark:text-emerald-100',
  paragraphActiveBg: 'bg-emerald-50/80 dark:bg-emerald-950/20',
  paragraphActiveBorder: 'border-emerald-600 dark:border-emerald-400',
  mediaOverlay: 'from-sky-500/15 via-emerald-300/10 to-transparent',
  mediaBorder: 'border-emerald-700/30 dark:border-emerald-400/30',
  progressDot: 'bg-emerald-600 dark:bg-emerald-400',
  chipActive: 'border-emerald-700 bg-emerald-50 text-emerald-950 dark:border-emerald-400 dark:bg-emerald-950/40 dark:text-emerald-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
};

const saturation: WolfsonianSectionAccent = {
  navActive: 'border-rose-700 bg-rose-800/95 dark:border-rose-400 dark:bg-rose-200',
  navActiveText: 'text-white dark:text-rose-950',
  navIdle: 'border-stone-300 hover:border-rose-600 dark:border-stone-600 dark:hover:border-rose-400',
  sectionBorder: 'border-rose-700/40 dark:border-rose-400/40',
  sectionGradient: 'from-rose-500/10 via-yellow-300/5 to-zinc-400/5',
  eyebrow: 'text-rose-900 dark:text-rose-300',
  keywordUnderline: 'decoration-rose-600/60 dark:decoration-rose-400/60',
  keywordActive: 'text-rose-950 dark:text-rose-100',
  paragraphActiveBg: 'bg-rose-50/80 dark:bg-rose-950/20',
  paragraphActiveBorder: 'border-rose-600 dark:border-rose-400',
  mediaOverlay: 'from-rose-500/20 via-yellow-300/10 to-transparent',
  mediaBorder: 'border-rose-700/30 dark:border-rose-400/30',
  progressDot: 'bg-rose-600 dark:bg-rose-400',
  chipActive: 'border-rose-700 bg-rose-50 text-rose-950 dark:border-rose-400 dark:bg-rose-950/40 dark:text-rose-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
};

const works: WolfsonianSectionAccent = {
  navActive: 'border-blue-700 bg-blue-800/95 dark:border-blue-400 dark:bg-blue-200',
  navActiveText: 'text-white dark:text-blue-950',
  navIdle: 'border-stone-300 hover:border-blue-600 dark:border-stone-600 dark:hover:border-blue-400',
  sectionBorder: 'border-blue-700/40 dark:border-blue-400/40',
  sectionGradient: 'from-blue-500/8 via-neutral-300/5 to-transparent',
  eyebrow: 'text-blue-900 dark:text-blue-300',
  keywordUnderline: 'decoration-blue-600/60 dark:decoration-blue-400/60',
  keywordActive: 'text-blue-950 dark:text-blue-100',
  paragraphActiveBg: 'bg-blue-50/80 dark:bg-blue-950/20',
  paragraphActiveBorder: 'border-blue-600 dark:border-blue-400',
  mediaOverlay: 'from-blue-500/15 via-transparent to-transparent',
  mediaBorder: 'border-blue-700/30 dark:border-blue-400/30',
  progressDot: 'bg-blue-600 dark:bg-blue-400',
  chipActive: 'border-blue-700 bg-blue-50 text-blue-950 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
};

const fellowship: WolfsonianSectionAccent = {
  navActive: 'border-emerald-800 bg-emerald-900/95 dark:border-emerald-400 dark:bg-emerald-200',
  navActiveText: 'text-white dark:text-emerald-950',
  navIdle: 'border-stone-300 hover:border-emerald-700 dark:border-stone-600 dark:hover:border-emerald-400',
  sectionBorder: 'border-emerald-800/40 dark:border-emerald-400/40',
  sectionGradient: 'from-emerald-500/10 via-stone-300/5 to-transparent',
  eyebrow: 'text-emerald-900 dark:text-emerald-300',
  keywordUnderline: 'decoration-emerald-700/60 dark:decoration-emerald-400/60',
  keywordActive: 'text-emerald-950 dark:text-emerald-100',
  paragraphActiveBg: 'bg-emerald-50/80 dark:bg-emerald-950/20',
  paragraphActiveBorder: 'border-emerald-700 dark:border-emerald-400',
  mediaOverlay: 'from-emerald-500/15 via-transparent to-transparent',
  mediaBorder: 'border-emerald-800/30 dark:border-emerald-400/30',
  progressDot: 'bg-emerald-700 dark:bg-emerald-400',
  chipActive: 'border-emerald-800 bg-emerald-50 text-emerald-950 dark:border-emerald-400 dark:bg-emerald-950/40 dark:text-emerald-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
};

const downloads: WolfsonianSectionAccent = {
  navActive: 'border-zinc-700 bg-zinc-800/95 dark:border-zinc-400 dark:bg-zinc-200',
  navActiveText: 'text-white dark:text-zinc-950',
  navIdle: 'border-stone-300 hover:border-zinc-600 dark:border-stone-600 dark:hover:border-zinc-400',
  sectionBorder: 'border-zinc-600/40 dark:border-zinc-400/40',
  sectionGradient: 'from-zinc-500/8 via-stone-200/5 to-transparent',
  eyebrow: 'text-zinc-700 dark:text-zinc-300',
  keywordUnderline: 'decoration-zinc-600/60 dark:decoration-zinc-400/60',
  keywordActive: 'text-zinc-950 dark:text-zinc-100',
  paragraphActiveBg: 'bg-zinc-100/80 dark:bg-zinc-900/20',
  paragraphActiveBorder: 'border-zinc-600 dark:border-zinc-400',
  mediaOverlay: 'from-zinc-500/10 via-transparent to-transparent',
  mediaBorder: 'border-zinc-600/30 dark:border-zinc-400/30',
  progressDot: 'bg-zinc-600 dark:bg-zinc-400',
  chipActive: 'border-zinc-700 bg-zinc-100 text-zinc-950 dark:border-zinc-400 dark:bg-zinc-900/40 dark:text-zinc-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
};

export const wolfsonianSectionThemeByBlockId: Record<string, WolfsonianSectionAccent> = {
  hero: premise,
  'why-wolfsonian': whyWolfsonian,
  'designed-belief': designedBelief,
  'society-inside-archive': agents,
  'citation-layer': citation,
  'synthetic-saturation': saturation,
  'related-works': works,
  'fellowship-goals': fellowship,
  downloads,
};

export function getWolfsonianAccent(blockId: string): WolfsonianSectionAccent {
  return wolfsonianSectionThemeByBlockId[blockId] ?? premise;
}

/** Presentation path labels (excludes downloads from spoken path) */
export const wolfsonianPresentationPathIds = [
  'hero',
  'why-wolfsonian',
  'designed-belief',
  'society-inside-archive',
  'citation-layer',
  'synthetic-saturation',
  'related-works',
  'fellowship-goals',
] as const;
