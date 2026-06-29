/**
 * Muted step colors for the SSRC grant dossier pager.
 * Keep classes as static strings for Tailwind JIT.
 */
export type SsrcZoneAccent = {
  navActive: string;
  navActiveText: string;
  navMarker: string;
  navTopMarker: string;
  iconActive: string;
  iconIdle: string;
  sectionBorder: string;
  eyebrow: string;
  heroCaptionBorder: string;
  progressDot: string;
};

export const ssrcZoneAccentById: Record<string, SsrcZoneAccent> = {
  opening: {
    navActive: 'bg-amber-900/95 dark:bg-amber-200',
    navActiveText: 'text-white dark:text-amber-950',
    navMarker: 'border-l-4 border-amber-500 dark:border-amber-400',
    navTopMarker: 'border-t-4 border-amber-500 dark:border-amber-400',
    iconActive: 'border-amber-200/40 bg-amber-800/50 text-amber-50 dark:border-amber-900/30 dark:bg-amber-950/15 dark:text-amber-950',
    iconIdle: 'border-amber-200 bg-amber-50/90 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200',
    sectionBorder: 'border-amber-700/70 dark:border-amber-400/60',
    eyebrow: 'text-amber-800 dark:text-amber-300',
    heroCaptionBorder: 'border-l-4 border-amber-600 dark:border-amber-400',
    progressDot: 'bg-amber-600 dark:bg-amber-400',
  },
  thesis: {
    navActive: 'bg-red-900/95 dark:bg-red-200',
    navActiveText: 'text-white dark:text-red-950',
    navMarker: 'border-l-4 border-red-600 dark:border-red-400',
    navTopMarker: 'border-t-4 border-red-600 dark:border-red-400',
    iconActive: 'border-red-200/40 bg-red-800/50 text-red-50 dark:border-red-900/30 dark:bg-red-950/15 dark:text-red-950',
    iconIdle: 'border-red-200 bg-red-50/90 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200',
    sectionBorder: 'border-red-800/70 dark:border-red-400/60',
    eyebrow: 'text-red-900 dark:text-red-300',
    heroCaptionBorder: 'border-l-4 border-red-800 dark:border-red-400',
    progressDot: 'bg-red-800 dark:bg-red-400',
  },
  engines: {
    navActive: 'bg-sky-900/95 dark:bg-sky-200',
    navActiveText: 'text-white dark:text-sky-950',
    navMarker: 'border-l-4 border-sky-600 dark:border-sky-400',
    navTopMarker: 'border-t-4 border-sky-600 dark:border-sky-400',
    iconActive: 'border-sky-200/40 bg-sky-800/50 text-sky-50 dark:border-sky-900/30 dark:bg-sky-950/15 dark:text-sky-950',
    iconIdle: 'border-sky-200 bg-sky-50/90 text-sky-900 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-200',
    sectionBorder: 'border-sky-800/70 dark:border-sky-400/60',
    eyebrow: 'text-sky-900 dark:text-sky-300',
    heroCaptionBorder: 'border-l-4 border-sky-700 dark:border-sky-400',
    progressDot: 'bg-sky-700 dark:bg-sky-400',
  },
  public: {
    navActive: 'bg-teal-900/95 dark:bg-teal-200',
    navActiveText: 'text-white dark:text-teal-950',
    navMarker: 'border-l-4 border-teal-600 dark:border-teal-400',
    navTopMarker: 'border-t-4 border-teal-600 dark:border-teal-400',
    iconActive: 'border-teal-200/40 bg-teal-800/50 text-teal-50 dark:border-teal-900/30 dark:bg-teal-950/15 dark:text-teal-950',
    iconIdle: 'border-teal-200 bg-teal-50/90 text-teal-900 dark:border-teal-800 dark:bg-teal-950/50 dark:text-teal-200',
    sectionBorder: 'border-teal-800/70 dark:border-teal-400/60',
    eyebrow: 'text-teal-900 dark:text-teal-300',
    heroCaptionBorder: 'border-l-4 border-teal-700 dark:border-teal-400',
    progressDot: 'bg-teal-700 dark:bg-teal-400',
  },
  field: {
    navActive: 'bg-violet-900/95 dark:bg-violet-200',
    navActiveText: 'text-white dark:text-violet-950',
    navMarker: 'border-l-4 border-violet-600 dark:border-violet-400',
    navTopMarker: 'border-t-4 border-violet-600 dark:border-violet-400',
    iconActive: 'border-violet-200/40 bg-violet-800/50 text-violet-50 dark:border-violet-900/30 dark:bg-violet-950/15 dark:text-violet-950',
    iconIdle: 'border-violet-200 bg-violet-50/90 text-violet-900 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-200',
    sectionBorder: 'border-violet-800/70 dark:border-violet-400/60',
    eyebrow: 'text-violet-900 dark:text-violet-300',
    heroCaptionBorder: 'border-l-4 border-violet-700 dark:border-violet-400',
    progressDot: 'bg-violet-700 dark:bg-violet-400',
  },
  evidence: {
    navActive: 'bg-orange-900/95 dark:bg-orange-200',
    navActiveText: 'text-white dark:text-orange-950',
    navMarker: 'border-l-4 border-orange-600 dark:border-orange-400',
    navTopMarker: 'border-t-4 border-orange-600 dark:border-orange-400',
    iconActive: 'border-orange-200/40 bg-orange-800/50 text-orange-50 dark:border-orange-900/30 dark:bg-orange-950/15 dark:text-orange-950',
    iconIdle: 'border-orange-200 bg-orange-50/90 text-orange-900 dark:border-orange-800 dark:bg-orange-950/50 dark:text-orange-200',
    sectionBorder: 'border-orange-800/70 dark:border-orange-400/60',
    eyebrow: 'text-orange-900 dark:text-orange-300',
    heroCaptionBorder: 'border-l-4 border-orange-700 dark:border-orange-400',
    progressDot: 'bg-orange-700 dark:bg-orange-400',
  },
  application: {
    navActive: 'bg-stone-800 dark:bg-stone-200',
    navActiveText: 'text-white dark:text-stone-900',
    navMarker: 'border-l-4 border-stone-600 dark:border-stone-400',
    navTopMarker: 'border-t-4 border-stone-600 dark:border-stone-400',
    iconActive: 'border-stone-200/40 bg-stone-700/50 text-stone-50 dark:border-stone-900/30 dark:bg-stone-950/15 dark:text-stone-900',
    iconIdle: 'border-stone-300 bg-stone-100 text-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200',
    sectionBorder: 'border-stone-700/70 dark:border-stone-400/60',
    eyebrow: 'text-stone-700 dark:text-stone-300',
    heroCaptionBorder: 'border-l-4 border-stone-600 dark:border-stone-400',
    progressDot: 'bg-stone-600 dark:bg-stone-400',
  },
};

export function getSsrcZoneAccent(zoneId: string): SsrcZoneAccent {
  return ssrcZoneAccentById[zoneId] ?? ssrcZoneAccentById.opening;
}
