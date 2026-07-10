/** Born Into the Machine — silver + black + warm white + safety orange */

export const bitmPalette = {
  warmWhite: '#faf8f4',
  carbon: '#111111',
  gray: '#777777',
  silver: '#c4c4c4',
  orange: '#ff5c00',
  orangeMuted: 'rgba(255, 92, 0, 0.12)',
  orangeBorder: 'rgba(255, 92, 0, 0.35)',
} as const;

export type BitmChapterId =
  | 'boot'
  | 'thesis'
  | 'condition'
  | 'studio'
  | 'method'
  | 'case-studies'
  | 'public'
  | 'ethics'
  | 'author';

export type BitmConceptualIconKey =
  | 'birth-boot'
  | 'human-machine'
  | 'model'
  | 'dataset'
  | 'latent-space'
  | 'studio'
  | 'public-space'
  | 'institution'
  | 'workshop'
  | 'consent'
  | 'maintenance'
  | 'energy'
  | 'archive'
  | 'iteration'
  | 'access'
  | 'governance';

export type BitmChapterAccent = {
  eyebrow: string;
  border: string;
  tint: string;
  hover: string;
  iconTint: string;
  navActive: string;
  navActiveText: string;
  navIdle: string;
};

const baseNavIdle =
  'border-[#dedede] text-[#777777] hover:border-[#111111] hover:text-[#111111] dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-300 dark:hover:text-neutral-100';

export const bitmChapterAccents: Record<BitmChapterId, BitmChapterAccent> = {
  boot: {
    eyebrow: 'text-[#ff5c00]',
    border: 'border-[#ff5c00]/30',
    tint: 'bg-[#ff5c00]/8',
    hover: 'hover:border-[#ff5c00]/50 hover:bg-[#ff5c00]/12',
    iconTint: 'text-[#ff5c00]',
    navActive: 'border-[#ff5c00] bg-[#ff5c00]/10',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
  thesis: {
    eyebrow: 'text-[#777777]',
    border: 'border-[#c4c4c4]/60',
    tint: 'bg-[#faf8f4]',
    hover: 'hover:border-[#111111]/30',
    iconTint: 'text-[#111111] dark:text-neutral-100',
    navActive: 'border-[#111111] bg-[#faf8f4] dark:bg-neutral-900',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
  condition: {
    eyebrow: 'text-[#777777]',
    border: 'border-[#dedede]',
    tint: 'bg-white/80 dark:bg-neutral-950/80',
    hover: 'hover:border-[#ff5c00]/40',
    iconTint: 'text-[#777777]',
    navActive: 'border-[#ff5c00]/60 bg-orange-50/50 dark:bg-orange-950/20',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
  studio: {
    eyebrow: 'text-[#777777]',
    border: 'border-[#c4c4c4]/50',
    tint: 'bg-[#faf8f4]/90',
    hover: 'hover:border-[#111111]/25',
    iconTint: 'text-[#111111]',
    navActive: 'border-[#c4c4c4] bg-[#faf8f4] dark:bg-neutral-900',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
  method: {
    eyebrow: 'text-[#ff5c00]',
    border: 'border-[#ff5c00]/25',
    tint: 'bg-[#ff5c00]/6',
    hover: 'hover:border-[#ff5c00]/45',
    iconTint: 'text-[#ff5c00]',
    navActive: 'border-[#ff5c00] bg-[#ff5c00]/8',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
  'case-studies': {
    eyebrow: 'text-[#777777]',
    border: 'border-[#dedede]',
    tint: 'bg-white dark:bg-neutral-950',
    hover: 'hover:border-[#111111]/20',
    iconTint: 'text-[#111111]',
    navActive: 'border-[#111111] bg-white dark:bg-neutral-900',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
  public: {
    eyebrow: 'text-[#777777]',
    border: 'border-[#c4c4c4]/40',
    tint: 'bg-[#faf8f4]',
    hover: 'hover:border-[#ff5c00]/35',
    iconTint: 'text-[#777777]',
    navActive: 'border-[#c4c4c4] bg-[#faf8f4] dark:bg-neutral-900',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
  ethics: {
    eyebrow: 'text-[#ff5c00]',
    border: 'border-[#ff5c00]/20',
    tint: 'bg-orange-50/40 dark:bg-orange-950/15',
    hover: 'hover:border-[#ff5c00]/40',
    iconTint: 'text-[#ff5c00]',
    navActive: 'border-[#ff5c00]/70 bg-orange-50/60 dark:bg-orange-950/25',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
  author: {
    eyebrow: 'text-[#777777]',
    border: 'border-[#111111]/15',
    tint: 'bg-[#111111]/5 dark:bg-white/5',
    hover: 'hover:border-[#ff5c00]/50',
    iconTint: 'text-[#111111] dark:text-neutral-100',
    navActive: 'border-[#111111] bg-[#faf8f4] dark:bg-neutral-900',
    navActiveText: 'text-[#111111] dark:text-neutral-100',
    navIdle: baseNavIdle,
  },
};

export function getBitmChapterAccent(id: BitmChapterId): BitmChapterAccent {
  return bitmChapterAccents[id];
}

export const bitmChapterIconMap: Record<BitmChapterId, BitmConceptualIconKey> = {
  boot: 'birth-boot',
  thesis: 'human-machine',
  condition: 'model',
  studio: 'studio',
  method: 'dataset',
  'case-studies': 'iteration',
  public: 'public-space',
  ethics: 'consent',
  author: 'human-machine',
};
