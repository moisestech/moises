/**
 * Color-categorized section accents for compact + role-portfolio opportunity dossiers.
 * Static Tailwind strings so JIT can see every class.
 */
export type OpportunityCompactSectionAccent = {
  navActive: string;
  navActiveText: string;
  navIdle: string;
  mediaBorder?: string;
  rail: string;
  eyebrow: string;
  softBg: string;
  /** Card / button hover border, lift, and tinted shadow. */
  cardHover: string;
  /** Visible keyboard focus ring. */
  focusRing: string;
  /** Active row / selected step wash. */
  activeRow: string;
  /** Selected process-step card. */
  processSelected: string;
  processSelectedBadge: string;
  processIdleBadge: string;
  /** Portrait hover ring (inset glass). */
  portraitRing: string;
  /** Portrait hover shadow (dark mode tint). */
  portraitShadow: string;
  /** Hero chip hover. */
  chipHover: string;
};

type AccentHue =
  | 'sky'
  | 'emerald'
  | 'violet'
  | 'amber'
  | 'teal'
  | 'cyan'
  | 'stone'
  | 'rose'
  | 'indigo'
  | 'fuchsia';

const interactive: Record<
  AccentHue,
  Pick<
    OpportunityCompactSectionAccent,
    | 'cardHover'
    | 'focusRing'
    | 'activeRow'
    | 'processSelected'
    | 'processSelectedBadge'
    | 'processIdleBadge'
    | 'portraitRing'
    | 'portraitShadow'
    | 'chipHover'
  >
> = {
  sky: {
    cardHover:
      'hover:border-sky-400/40 dark:hover:border-sky-500/45 hover:shadow-md hover:shadow-sky-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-sky-400 dark:focus-visible:outline-sky-500',
    activeRow:
      'bg-sky-50/80 dark:bg-sky-950/40 ring-1 ring-inset ring-sky-200/80 dark:ring-sky-800/50',
    processSelected:
      'border-sky-400 bg-sky-50/90 shadow-md shadow-sky-500/10 ring-1 ring-sky-300/50 dark:border-sky-600 dark:bg-sky-950/40 dark:ring-sky-800/40',
    processSelectedBadge: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-stone-950',
    processIdleBadge: 'bg-sky-400/15 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300',
    portraitRing: 'dark:ring-sky-400/25',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(56,189,248,0.22)]',
    chipHover:
      'transition-colors hover:border-sky-400/50 hover:bg-sky-50/80 dark:hover:border-sky-500/40 dark:hover:bg-sky-950/40',
  },
  emerald: {
    cardHover:
      'hover:border-emerald-400/40 dark:hover:border-emerald-500/45 hover:shadow-md hover:shadow-emerald-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-emerald-400 dark:focus-visible:outline-emerald-500',
    activeRow:
      'bg-emerald-50/80 dark:bg-emerald-950/40 ring-1 ring-inset ring-emerald-200/80 dark:ring-emerald-800/50',
    processSelected:
      'border-emerald-400 bg-emerald-50/90 shadow-md shadow-emerald-500/10 ring-1 ring-emerald-300/50 dark:border-emerald-600 dark:bg-emerald-950/40 dark:ring-emerald-800/40',
    processSelectedBadge: 'bg-emerald-600 text-white dark:bg-emerald-400 dark:text-stone-950',
    processIdleBadge: 'bg-emerald-400/15 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300',
    portraitRing: 'dark:ring-emerald-400/25',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(52,211,153,0.22)]',
    chipHover:
      'transition-colors hover:border-emerald-400/50 hover:bg-emerald-50/80 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/40',
  },
  violet: {
    cardHover:
      'hover:border-violet-400/40 dark:hover:border-violet-500/45 hover:shadow-md hover:shadow-violet-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-violet-400 dark:focus-visible:outline-violet-500',
    activeRow:
      'bg-violet-50/80 dark:bg-violet-950/40 ring-1 ring-inset ring-violet-200/80 dark:ring-violet-800/50',
    processSelected:
      'border-violet-400 bg-violet-50/90 shadow-md shadow-violet-500/10 ring-1 ring-violet-300/50 dark:border-violet-600 dark:bg-violet-950/40 dark:ring-violet-800/40',
    processSelectedBadge: 'bg-violet-600 text-white dark:bg-violet-400 dark:text-stone-950',
    processIdleBadge: 'bg-violet-400/15 text-violet-800 dark:bg-violet-500/20 dark:text-violet-300',
    portraitRing: 'dark:ring-violet-400/25',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(167,139,250,0.22)]',
    chipHover:
      'transition-colors hover:border-violet-400/50 hover:bg-violet-50/80 dark:hover:border-violet-500/40 dark:hover:bg-violet-950/40',
  },
  amber: {
    cardHover:
      'hover:border-amber-400/40 dark:hover:border-amber-500/45 hover:shadow-md hover:shadow-amber-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-amber-400 dark:focus-visible:outline-amber-500',
    activeRow:
      'bg-amber-50/80 dark:bg-amber-950/40 ring-1 ring-inset ring-amber-200/80 dark:ring-amber-800/50',
    processSelected:
      'border-amber-400 bg-amber-50/90 shadow-md shadow-amber-500/10 ring-1 ring-amber-300/50 dark:border-amber-600 dark:bg-amber-950/40 dark:ring-amber-800/40',
    processSelectedBadge: 'bg-amber-600 text-white dark:bg-amber-400 dark:text-stone-950',
    processIdleBadge: 'bg-amber-400/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-300',
    portraitRing: 'dark:ring-amber-400/25',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(251,191,36,0.22)]',
    chipHover:
      'transition-colors hover:border-amber-400/50 hover:bg-amber-50/80 dark:hover:border-amber-500/40 dark:hover:bg-amber-950/40',
  },
  teal: {
    cardHover:
      'hover:border-teal-400/40 dark:hover:border-teal-500/45 hover:shadow-md hover:shadow-teal-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-teal-400 dark:focus-visible:outline-teal-500',
    activeRow:
      'bg-teal-50/80 dark:bg-teal-950/40 ring-1 ring-inset ring-teal-200/80 dark:ring-teal-800/50',
    processSelected:
      'border-teal-400 bg-teal-50/90 shadow-md shadow-teal-500/10 ring-1 ring-teal-300/50 dark:border-teal-600 dark:bg-teal-950/40 dark:ring-teal-800/40',
    processSelectedBadge: 'bg-teal-600 text-white dark:bg-teal-400 dark:text-stone-950',
    processIdleBadge: 'bg-teal-400/15 text-teal-800 dark:bg-teal-500/20 dark:text-teal-300',
    portraitRing: 'dark:ring-teal-400/25',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(45,212,191,0.22)]',
    chipHover:
      'transition-colors hover:border-teal-400/50 hover:bg-teal-50/80 dark:hover:border-teal-500/40 dark:hover:bg-teal-950/40',
  },
  cyan: {
    cardHover:
      'hover:border-cyan-400/40 dark:hover:border-cyan-500/45 hover:shadow-md hover:shadow-cyan-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-cyan-400 dark:focus-visible:outline-cyan-500',
    activeRow:
      'bg-cyan-50/80 dark:bg-cyan-950/40 ring-1 ring-inset ring-cyan-200/80 dark:ring-cyan-800/50',
    processSelected:
      'border-cyan-400 bg-cyan-50/90 shadow-md shadow-cyan-500/10 ring-1 ring-cyan-300/50 dark:border-cyan-600 dark:bg-cyan-950/40 dark:ring-cyan-800/40',
    processSelectedBadge: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-stone-950',
    processIdleBadge: 'bg-cyan-400/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300',
    portraitRing: 'dark:ring-cyan-400/20',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(34,211,238,0.22)]',
    chipHover:
      'transition-colors hover:border-cyan-400/50 hover:bg-cyan-50/80 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-950/40',
  },
  stone: {
    cardHover:
      'hover:border-stone-400/50 dark:hover:border-stone-500/50 hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-stone-400 dark:focus-visible:outline-stone-500',
    activeRow:
      'bg-stone-100/90 dark:bg-stone-800/60 ring-1 ring-inset ring-stone-200/80 dark:ring-stone-700/50',
    processSelected:
      'border-stone-400 bg-stone-100/90 shadow-md ring-1 ring-stone-300/50 dark:border-stone-500 dark:bg-stone-800/60 dark:ring-stone-600/40',
    processSelectedBadge: 'bg-stone-700 text-white dark:bg-stone-300 dark:text-stone-950',
    processIdleBadge: 'bg-stone-400/15 text-stone-700 dark:bg-stone-500/20 dark:text-stone-300',
    portraitRing: 'dark:ring-stone-400/25',
    portraitShadow: 'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(0,0,0,0.45)]',
    chipHover:
      'transition-colors hover:border-stone-400/50 hover:bg-stone-50/80 dark:hover:border-stone-500/40 dark:hover:bg-stone-800/40',
  },
  rose: {
    cardHover:
      'hover:border-rose-400/40 dark:hover:border-rose-500/45 hover:shadow-md hover:shadow-rose-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-rose-400 dark:focus-visible:outline-rose-500',
    activeRow:
      'bg-rose-50/80 dark:bg-rose-950/40 ring-1 ring-inset ring-rose-200/80 dark:ring-rose-800/50',
    processSelected:
      'border-rose-400 bg-rose-50/90 shadow-md shadow-rose-500/10 ring-1 ring-rose-300/50 dark:border-rose-600 dark:bg-rose-950/40 dark:ring-rose-800/40',
    processSelectedBadge: 'bg-rose-600 text-white dark:bg-rose-400 dark:text-stone-950',
    processIdleBadge: 'bg-rose-400/15 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300',
    portraitRing: 'dark:ring-rose-400/25',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(251,113,133,0.22)]',
    chipHover:
      'transition-colors hover:border-rose-400/50 hover:bg-rose-50/80 dark:hover:border-rose-500/40 dark:hover:bg-rose-950/40',
  },
  indigo: {
    cardHover:
      'hover:border-indigo-400/40 dark:hover:border-indigo-500/45 hover:shadow-md hover:shadow-indigo-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-indigo-400 dark:focus-visible:outline-indigo-500',
    activeRow:
      'bg-indigo-50/80 dark:bg-indigo-950/40 ring-1 ring-inset ring-indigo-200/80 dark:ring-indigo-800/50',
    processSelected:
      'border-indigo-400 bg-indigo-50/90 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-300/50 dark:border-indigo-600 dark:bg-indigo-950/40 dark:ring-indigo-800/40',
    processSelectedBadge: 'bg-indigo-600 text-white dark:bg-indigo-400 dark:text-stone-950',
    processIdleBadge: 'bg-indigo-400/15 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300',
    portraitRing: 'dark:ring-indigo-400/25',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(129,140,248,0.22)]',
    chipHover:
      'transition-colors hover:border-indigo-400/50 hover:bg-indigo-50/80 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-950/40',
  },
  fuchsia: {
    cardHover:
      'hover:border-fuchsia-400/40 dark:hover:border-fuchsia-500/45 hover:shadow-md hover:shadow-fuchsia-500/10 motion-safe:hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
    focusRing: 'focus-visible:outline-fuchsia-400 dark:focus-visible:outline-fuchsia-500',
    activeRow:
      'bg-fuchsia-50/80 dark:bg-fuchsia-950/40 ring-1 ring-inset ring-fuchsia-200/80 dark:ring-fuchsia-800/50',
    processSelected:
      'border-fuchsia-400 bg-fuchsia-50/90 shadow-md shadow-fuchsia-500/10 ring-1 ring-fuchsia-300/50 dark:border-fuchsia-600 dark:bg-fuchsia-950/40 dark:ring-fuchsia-800/40',
    processSelectedBadge: 'bg-fuchsia-600 text-white dark:bg-fuchsia-400 dark:text-stone-950',
    processIdleBadge: 'bg-fuchsia-400/15 text-fuchsia-800 dark:bg-fuchsia-500/20 dark:text-fuchsia-300',
    portraitRing: 'dark:ring-fuchsia-400/25',
    portraitShadow:
      'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(232,121,249,0.22)]',
    chipHover:
      'transition-colors hover:border-fuchsia-400/50 hover:bg-fuchsia-50/80 dark:hover:border-fuchsia-500/40 dark:hover:bg-fuchsia-950/40',
  },
};

type AccentBase = Omit<
  OpportunityCompactSectionAccent,
  | 'cardHover'
  | 'focusRing'
  | 'activeRow'
  | 'processSelected'
  | 'processSelectedBadge'
  | 'processIdleBadge'
  | 'portraitRing'
  | 'portraitShadow'
  | 'chipHover'
>;

function accent(hue: AccentHue, base: AccentBase): OpportunityCompactSectionAccent {
  return { ...base, ...interactive[hue] };
}

const hero = accent('sky', {
  navActive: 'border-sky-700 bg-sky-800/95 dark:border-sky-300 dark:bg-sky-200',
  navActiveText: 'text-white dark:text-sky-950',
  navIdle: 'border-stone-300 hover:border-sky-600 dark:border-stone-600 dark:hover:border-sky-400',
  mediaBorder: 'border-b-sky-600/40 dark:border-b-sky-400/35',
  rail: 'border-l-sky-600 dark:border-l-sky-400',
  eyebrow: 'text-sky-800 dark:text-sky-300',
  softBg: 'bg-gradient-to-br from-sky-500/8 via-transparent to-transparent',
});

const fit = accent('emerald', {
  navActive: 'border-emerald-700 bg-emerald-800/95 dark:border-emerald-300 dark:bg-emerald-200',
  navActiveText: 'text-white dark:text-emerald-950',
  navIdle: 'border-stone-300 hover:border-emerald-600 dark:border-stone-600 dark:hover:border-emerald-400',
  mediaBorder: 'border-b-emerald-600/40 dark:border-b-emerald-400/35',
  rail: 'border-l-emerald-600 dark:border-l-emerald-400',
  eyebrow: 'text-emerald-800 dark:text-emerald-300',
  softBg: 'bg-gradient-to-br from-emerald-500/8 via-transparent to-transparent',
});

const caseStudies = accent('violet', {
  navActive: 'border-violet-700 bg-violet-800/95 dark:border-violet-300 dark:bg-violet-200',
  navActiveText: 'text-white dark:text-violet-950',
  navIdle: 'border-stone-300 hover:border-violet-600 dark:border-stone-600 dark:hover:border-violet-400',
  mediaBorder: 'border-b-violet-600/40 dark:border-b-violet-400/35',
  rail: 'border-l-violet-600 dark:border-l-violet-400',
  eyebrow: 'text-violet-800 dark:text-violet-300',
  softBg: 'bg-gradient-to-br from-violet-500/8 via-transparent to-transparent',
});

const skills = accent('amber', {
  navActive: 'border-amber-700 bg-amber-700/95 dark:border-amber-300 dark:bg-amber-200',
  navActiveText: 'text-white dark:text-amber-950',
  navIdle: 'border-stone-300 hover:border-amber-600 dark:border-stone-600 dark:hover:border-amber-400',
  mediaBorder: 'border-b-amber-600/40 dark:border-b-amber-400/35',
  rail: 'border-l-amber-600 dark:border-l-amber-400',
  eyebrow: 'text-amber-900 dark:text-amber-300',
  softBg: 'bg-gradient-to-br from-amber-500/8 via-transparent to-transparent',
});

const process = accent('teal', {
  navActive: 'border-teal-700 bg-teal-800/95 dark:border-teal-300 dark:bg-teal-200',
  navActiveText: 'text-white dark:text-teal-950',
  navIdle: 'border-stone-300 hover:border-teal-600 dark:border-stone-600 dark:hover:border-teal-400',
  mediaBorder: 'border-b-teal-600/40 dark:border-b-teal-400/35',
  rail: 'border-l-teal-600 dark:border-l-teal-400',
  eyebrow: 'text-teal-800 dark:text-teal-300',
  softBg: 'bg-gradient-to-br from-teal-500/8 via-transparent to-transparent',
});

const resume = accent('cyan', {
  navActive: 'border-cyan-700 bg-cyan-700/95 dark:border-cyan-300 dark:bg-cyan-200',
  navActiveText: 'text-white dark:text-cyan-950',
  navIdle: 'border-stone-300 hover:border-cyan-600 dark:border-stone-600 dark:hover:border-cyan-400',
  mediaBorder: 'border-b-cyan-600/40 dark:border-b-cyan-400/35',
  rail: 'border-l-cyan-600 dark:border-l-cyan-400',
  eyebrow: 'text-cyan-800 dark:text-cyan-300',
  softBg: 'bg-gradient-to-br from-cyan-500/8 via-transparent to-transparent',
});

/** Role-portfolio: evidence roadmap */
const evidence = accent('cyan', {
  navActive: 'border-cyan-700 bg-cyan-800/95 dark:border-cyan-300 dark:bg-cyan-200',
  navActiveText: 'text-white dark:text-cyan-950',
  navIdle: 'border-stone-300 hover:border-cyan-600 dark:border-stone-600 dark:hover:border-cyan-400',
  mediaBorder: 'border-b-cyan-600/40 dark:border-b-cyan-400/35',
  rail: 'border-l-cyan-600 dark:border-l-cyan-400',
  eyebrow: 'text-cyan-800 dark:text-cyan-300',
  softBg: 'bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent',
});

/** Role-portfolio: coming-soon / growth track */
const comingSoon = accent('amber', {
  navActive: 'border-amber-700 bg-amber-700/95 dark:border-amber-200 dark:bg-amber-200',
  navActiveText: 'text-white dark:text-amber-950',
  navIdle: 'border-stone-300 hover:border-amber-600 dark:border-stone-600 dark:hover:border-amber-400',
  mediaBorder: 'border-b-amber-600/40 dark:border-b-amber-400/35',
  rail: 'border-l-amber-500 dark:border-l-amber-400',
  eyebrow: 'text-amber-900 dark:text-amber-300',
  softBg: 'bg-gradient-to-br from-amber-500/10 via-transparent to-transparent',
});

const capabilities = accent('violet', {
  navActive: 'border-violet-700 bg-violet-800/95 dark:border-violet-300 dark:bg-violet-200',
  navActiveText: 'text-white dark:text-violet-950',
  navIdle: 'border-stone-300 hover:border-violet-600 dark:border-stone-600 dark:hover:border-violet-400',
  mediaBorder: 'border-b-violet-600/40 dark:border-b-violet-400/35',
  rail: 'border-l-violet-600 dark:border-l-violet-400',
  eyebrow: 'text-violet-800 dark:text-violet-300',
  softBg: 'bg-gradient-to-br from-violet-500/8 via-transparent to-transparent',
});

const experience = accent('sky', {
  navActive: 'border-sky-700 bg-sky-800/95 dark:border-sky-300 dark:bg-sky-200',
  navActiveText: 'text-white dark:text-sky-950',
  navIdle: 'border-stone-300 hover:border-sky-600 dark:border-stone-600 dark:hover:border-sky-400',
  mediaBorder: 'border-b-sky-600/40 dark:border-b-sky-400/35',
  rail: 'border-l-sky-600 dark:border-l-sky-400',
  eyebrow: 'text-sky-800 dark:text-sky-300',
  softBg: 'bg-gradient-to-br from-sky-500/8 via-transparent to-transparent',
});

const selectedProject = accent('emerald', {
  navActive: 'border-emerald-700 bg-emerald-800/95 dark:border-emerald-300 dark:bg-emerald-200',
  navActiveText: 'text-white dark:text-emerald-950',
  navIdle: 'border-stone-300 hover:border-emerald-600 dark:border-stone-600 dark:hover:border-emerald-400',
  mediaBorder: 'border-b-emerald-600/40 dark:border-b-emerald-400/35',
  rail: 'border-l-emerald-600 dark:border-l-emerald-400',
  eyebrow: 'text-emerald-800 dark:text-emerald-300',
  softBg: 'bg-gradient-to-br from-emerald-500/8 via-transparent to-transparent',
});

const technologies = accent('teal', {
  navActive: 'border-teal-700 bg-teal-800/95 dark:border-teal-300 dark:bg-teal-200',
  navActiveText: 'text-white dark:text-teal-950',
  navIdle: 'border-stone-300 hover:border-teal-600 dark:border-stone-600 dark:hover:border-teal-400',
  mediaBorder: 'border-b-teal-600/40 dark:border-b-teal-400/35',
  rail: 'border-l-teal-600 dark:border-l-teal-400',
  eyebrow: 'text-teal-800 dark:text-teal-300',
  softBg: 'bg-gradient-to-br from-teal-500/8 via-transparent to-transparent',
});

const principles = accent('stone', {
  navActive: 'border-stone-700 bg-stone-800/95 dark:border-stone-300 dark:bg-stone-200',
  navActiveText: 'text-white dark:text-stone-950',
  navIdle: 'border-stone-300 hover:border-stone-500 dark:border-stone-600 dark:hover:border-stone-400',
  mediaBorder: 'border-b-stone-500/40 dark:border-b-stone-400/35',
  rail: 'border-l-stone-500 dark:border-l-stone-400',
  eyebrow: 'text-stone-800 dark:text-stone-300',
  softBg: 'bg-gradient-to-br from-stone-500/8 via-transparent to-transparent',
});

/** Creative-agency: campaign channel system */
const campaign = accent('rose', {
  navActive: 'border-rose-700 bg-rose-800/95 dark:border-rose-300 dark:bg-rose-200',
  navActiveText: 'text-white dark:text-rose-950',
  navIdle: 'border-stone-300 hover:border-rose-600 dark:border-stone-600 dark:hover:border-rose-400',
  mediaBorder: 'border-b-rose-600/40 dark:border-b-rose-400/35',
  rail: 'border-l-rose-600 dark:border-l-rose-400',
  eyebrow: 'text-rose-800 dark:text-rose-300',
  softBg: 'bg-gradient-to-br from-rose-500/8 via-transparent to-transparent',
});

/** Creative-agency: leadership */
const leadership = accent('indigo', {
  navActive: 'border-indigo-700 bg-indigo-800/95 dark:border-indigo-300 dark:bg-indigo-200',
  navActiveText: 'text-white dark:text-indigo-950',
  navIdle: 'border-stone-300 hover:border-indigo-600 dark:border-stone-600 dark:hover:border-indigo-400',
  mediaBorder: 'border-b-indigo-600/40 dark:border-b-indigo-400/35',
  rail: 'border-l-indigo-600 dark:border-l-indigo-400',
  eyebrow: 'text-indigo-800 dark:text-indigo-300',
  softBg: 'bg-gradient-to-br from-indigo-500/8 via-transparent to-transparent',
});

/** Creative-agency: point of view */
const pov = accent('fuchsia', {
  navActive: 'border-fuchsia-700 bg-fuchsia-800/95 dark:border-fuchsia-300 dark:bg-fuchsia-200',
  navActiveText: 'text-white dark:text-fuchsia-950',
  navIdle: 'border-stone-300 hover:border-fuchsia-600 dark:border-stone-600 dark:hover:border-fuchsia-400',
  mediaBorder: 'border-b-fuchsia-600/40 dark:border-b-fuchsia-400/35',
  rail: 'border-l-fuchsia-600 dark:border-l-fuchsia-400',
  eyebrow: 'text-fuchsia-800 dark:text-fuchsia-300',
  softBg: 'bg-gradient-to-br from-fuchsia-500/8 via-transparent to-transparent',
});

const byId: Record<string, OpportunityCompactSectionAccent> = {
  hero,
  fit,
  'case-studies': caseStudies,
  skills,
  process,
  resume,
  contact: resume,
  evidence,
  'coming-soon': comingSoon,
  capabilities,
  experience,
  'selected-project': selectedProject,
  technologies,
  principles,
  work: caseStudies,
  education: skills,
  creative: caseStudies,
  credibility: fit,
  'comfyui-experience': selectedProject,
  'work-sample': evidence,
  'provenance-explorer': comingSoon,
  'selected-work': caseStudies,
  'role-fit': fit,
  engineering: principles,
  ramp: comingSoon,
  campaign,
  workflow: process,
  leadership,
  pov,
  stack: technologies,
  motion: campaign,
  gan: technologies,
  layers: capabilities,
  overview: hero,
  'teaching-cred': process,
  'application-answers': leadership,
  plan: evidence,
  honesty: fit,
  'code-inspect': evidence,
  'future-cases': comingSoon,
  related: fit,
  'data-model': process,
};

export function getOpportunityCompactAccent(sectionId: string): OpportunityCompactSectionAccent {
  return byId[sectionId] ?? hero;
}
