/**
 * Muted section colors for the career packet recruiter hub.
 * Mirrors Wolfsonian fellowship patterns — static strings for Tailwind JIT.
 */
export type CareerPacketSectionAccent = {
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
  mediaGlowRgb: string;
  chipActive: string;
  chipIdle: string;
  cardHover: string;
};

const hero: CareerPacketSectionAccent = {
  navActive: 'border-cyan-600 bg-cyan-700/95 dark:border-cyan-400 dark:bg-cyan-300',
  navActiveText: 'text-white dark:text-cyan-950',
  navIdle: 'border-stone-300 hover:border-cyan-500 dark:border-stone-600 dark:hover:border-cyan-400',
  sectionBorder: 'border-cyan-600/35 dark:border-cyan-400/35',
  sectionGradient: 'from-cyan-500/10 via-sky-400/5 to-transparent',
  eyebrow: 'text-cyan-700 dark:text-cyan-300',
  keywordUnderline: 'decoration-cyan-600/60 dark:decoration-cyan-400/60',
  keywordActive: 'text-cyan-950 dark:text-cyan-100',
  paragraphActiveBg: 'bg-cyan-50/80 dark:bg-cyan-950/25',
  paragraphActiveBorder: 'border-cyan-600 dark:border-cyan-400',
  mediaOverlay: 'from-cyan-500/25 via-transparent to-transparent',
  mediaBorder: 'border-cyan-600/30 dark:border-cyan-400/30',
  mediaGlowRgb: '6, 182, 212',
  chipActive: 'border-cyan-600 bg-cyan-50 text-cyan-950 dark:border-cyan-400 dark:bg-cyan-950/40 dark:text-cyan-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
  cardHover:
    'hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.18)] dark:hover:border-cyan-500/45 dark:hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]',
};

const links: CareerPacketSectionAccent = {
  navActive: 'border-sky-700 bg-sky-800/95 dark:border-sky-400 dark:bg-sky-200',
  navActiveText: 'text-white dark:text-sky-950',
  navIdle: 'border-stone-300 hover:border-sky-600 dark:border-stone-600 dark:hover:border-sky-400',
  sectionBorder: 'border-sky-700/35 dark:border-sky-400/35',
  sectionGradient: 'from-sky-500/10 via-cyan-300/5 to-transparent',
  eyebrow: 'text-sky-800 dark:text-sky-300',
  keywordUnderline: 'decoration-sky-600/60 dark:decoration-sky-400/60',
  keywordActive: 'text-sky-950 dark:text-sky-100',
  paragraphActiveBg: 'bg-sky-50/80 dark:bg-sky-950/25',
  paragraphActiveBorder: 'border-sky-600 dark:border-sky-400',
  mediaOverlay: 'from-sky-500/20 via-transparent to-transparent',
  mediaBorder: 'border-sky-700/30 dark:border-sky-400/30',
  mediaGlowRgb: '14, 165, 233',
  chipActive: 'border-sky-700 bg-sky-50 text-sky-950 dark:border-sky-400 dark:bg-sky-950/40 dark:text-sky-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
  cardHover:
    'hover:border-sky-400/50 hover:shadow-[0_0_24px_rgba(14,165,233,0.16)] dark:hover:border-sky-500/45',
};

const fit: CareerPacketSectionAccent = {
  navActive: 'border-violet-700 bg-violet-800/95 dark:border-violet-400 dark:bg-violet-200',
  navActiveText: 'text-white dark:text-violet-950',
  navIdle: 'border-stone-300 hover:border-violet-600 dark:border-stone-600 dark:hover:border-violet-400',
  sectionBorder: 'border-violet-700/35 dark:border-violet-400/35',
  sectionGradient: 'from-violet-500/10 via-indigo-400/5 to-transparent',
  eyebrow: 'text-violet-800 dark:text-violet-300',
  keywordUnderline: 'decoration-violet-600/60 dark:decoration-violet-400/60',
  keywordActive: 'text-violet-950 dark:text-violet-100',
  paragraphActiveBg: 'bg-violet-50/80 dark:bg-violet-950/25',
  paragraphActiveBorder: 'border-violet-600 dark:border-violet-400',
  mediaOverlay: 'from-violet-500/20 via-transparent to-transparent',
  mediaBorder: 'border-violet-700/30 dark:border-violet-400/30',
  mediaGlowRgb: '124, 58, 237',
  chipActive:
    'border-violet-700 bg-violet-50 text-violet-950 dark:border-violet-400 dark:bg-violet-950/40 dark:text-violet-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
  cardHover:
    'hover:border-violet-400/50 hover:shadow-[0_0_24px_rgba(124,58,237,0.16)] dark:hover:border-violet-500/45',
};

const snapshot: CareerPacketSectionAccent = {
  navActive: 'border-emerald-700 bg-emerald-800/95 dark:border-emerald-400 dark:bg-emerald-200',
  navActiveText: 'text-white dark:text-emerald-950',
  navIdle: 'border-stone-300 hover:border-emerald-600 dark:border-stone-600 dark:hover:border-emerald-400',
  sectionBorder: 'border-emerald-700/35 dark:border-emerald-400/35',
  sectionGradient: 'from-emerald-500/10 via-teal-300/5 to-transparent',
  eyebrow: 'text-emerald-800 dark:text-emerald-300',
  keywordUnderline: 'decoration-emerald-600/60 dark:decoration-emerald-400/60',
  keywordActive: 'text-emerald-950 dark:text-emerald-100',
  paragraphActiveBg: 'bg-emerald-50/80 dark:bg-emerald-950/25',
  paragraphActiveBorder: 'border-emerald-600 dark:border-emerald-400',
  mediaOverlay: 'from-emerald-500/15 via-transparent to-transparent',
  mediaBorder: 'border-emerald-700/30 dark:border-emerald-400/30',
  mediaGlowRgb: '16, 185, 129',
  chipActive:
    'border-emerald-700 bg-emerald-50 text-emerald-950 dark:border-emerald-400 dark:bg-emerald-950/40 dark:text-emerald-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
  cardHover:
    'hover:border-emerald-400/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.16)] dark:hover:border-emerald-500/45',
};

const materials: CareerPacketSectionAccent = {
  navActive: 'border-amber-700 bg-amber-800/95 dark:border-amber-400 dark:bg-amber-200',
  navActiveText: 'text-white dark:text-amber-950',
  navIdle: 'border-stone-300 hover:border-amber-600 dark:border-stone-600 dark:hover:border-amber-400',
  sectionBorder: 'border-amber-700/35 dark:border-amber-400/35',
  sectionGradient: 'from-amber-500/10 via-orange-300/5 to-transparent',
  eyebrow: 'text-amber-900 dark:text-amber-300',
  keywordUnderline: 'decoration-amber-700/60 dark:decoration-amber-400/60',
  keywordActive: 'text-amber-950 dark:text-amber-100',
  paragraphActiveBg: 'bg-amber-50/80 dark:bg-amber-950/25',
  paragraphActiveBorder: 'border-amber-700 dark:border-amber-400',
  mediaOverlay: 'from-amber-500/20 via-transparent to-transparent',
  mediaBorder: 'border-amber-700/30 dark:border-amber-400/30',
  mediaGlowRgb: '245, 158, 11',
  chipActive:
    'border-amber-700 bg-amber-50 text-amber-950 dark:border-amber-400 dark:bg-amber-950/40 dark:text-amber-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
  cardHover:
    'hover:border-amber-400/50 hover:shadow-[0_0_24px_rgba(245,158,11,0.16)] dark:hover:border-amber-500/45',
};

const resume: CareerPacketSectionAccent = {
  navActive: 'border-blue-700 bg-blue-800/95 dark:border-blue-400 dark:bg-blue-200',
  navActiveText: 'text-white dark:text-blue-950',
  navIdle: 'border-stone-300 hover:border-blue-600 dark:border-stone-600 dark:hover:border-blue-400',
  sectionBorder: 'border-blue-700/35 dark:border-blue-400/35',
  sectionGradient: 'from-blue-500/8 via-indigo-300/5 to-transparent',
  eyebrow: 'text-blue-900 dark:text-blue-300',
  keywordUnderline: 'decoration-blue-600/60 dark:decoration-blue-400/60',
  keywordActive: 'text-blue-950 dark:text-blue-100',
  paragraphActiveBg: 'bg-blue-50/80 dark:bg-blue-950/25',
  paragraphActiveBorder: 'border-blue-600 dark:border-blue-400',
  mediaOverlay: 'from-blue-500/15 via-transparent to-transparent',
  mediaBorder: 'border-blue-700/30 dark:border-blue-400/30',
  mediaGlowRgb: '59, 130, 246',
  chipActive: 'border-blue-700 bg-blue-50 text-blue-950 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-100',
  chipIdle: 'border-stone-300 dark:border-stone-600',
  cardHover:
    'hover:border-blue-400/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.16)] dark:hover:border-blue-500/45',
};

export const careerPacketSectionThemeById: Record<string, CareerPacketSectionAccent> = {
  hero,
  links,
  fit,
  snapshot,
  materials,
  resume,
};

export function getCareerPacketAccent(sectionId: string): CareerPacketSectionAccent {
  return careerPacketSectionThemeById[sectionId] ?? hero;
}
