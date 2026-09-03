import { cn } from '@/lib/utils'
import { opp } from '@/components/opportunities/opportunityTheme'
import type { TrustControlId, TrustLoopStage, TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'

/** Compact-theme section ids — same hues as the FDE submenu pills. */
export const TRUST_NAV_ACCENT_ID = {
  overview: 'overview',
  'looks-right': 'skills',
  'four-lenses': 'case-studies',
  'seeded-failures': 'campaign',
  'the-loop': 'principles',
  'the-harness': 'process',
  transfer: 'fit',
  rehearse: 'leadership',
  surfaces: 'hero',
  card: 'coming-soon',
} as const

export type TrustNavItemId = keyof typeof TRUST_NAV_ACCENT_ID

/** Readable text-link tones — pill `navActiveText` is white-on-fill and unusable here. */
export const TRUST_NAV_TEXT: Record<TrustNavItemId, { active: string; hover: string }> = {
  overview: {
    active: 'text-sky-800 dark:text-sky-300',
    hover: 'hover:text-sky-800 hover:border-sky-600 dark:hover:text-sky-300',
  },
  'looks-right': {
    active: 'text-amber-900 dark:text-amber-300',
    hover: 'hover:text-amber-900 hover:border-amber-600 dark:hover:text-amber-300',
  },
  'four-lenses': {
    active: 'text-violet-800 dark:text-violet-300',
    hover: 'hover:text-violet-800 hover:border-violet-600 dark:hover:text-violet-300',
  },
  'seeded-failures': {
    active: 'text-rose-800 dark:text-rose-300',
    hover: 'hover:text-rose-800 hover:border-rose-600 dark:hover:text-rose-300',
  },
  'the-loop': {
    active: 'text-cyan-800 dark:text-cyan-300',
    hover: 'hover:text-cyan-800 hover:border-cyan-600 dark:hover:text-cyan-300',
  },
  'the-harness': {
    active: 'text-teal-800 dark:text-teal-300',
    hover: 'hover:text-teal-800 hover:border-teal-600 dark:hover:text-teal-300',
  },
  transfer: {
    active: 'text-emerald-800 dark:text-emerald-300',
    hover: 'hover:text-emerald-800 hover:border-emerald-600 dark:hover:text-emerald-300',
  },
  rehearse: {
    active: 'text-indigo-800 dark:text-indigo-300',
    hover: 'hover:text-indigo-800 hover:border-indigo-600 dark:hover:text-indigo-300',
  },
  surfaces: {
    active: 'text-sky-800 dark:text-sky-300',
    hover: 'hover:text-sky-800 hover:border-sky-600 dark:hover:text-sky-300',
  },
  card: {
    active: 'text-amber-900 dark:text-amber-300',
    hover: 'hover:text-amber-900 hover:border-amber-600 dark:hover:text-amber-300',
  },
}

export const TRUST_ROLE_TONE = {
  pm: {
    border: 'border-sky-500 dark:border-sky-400',
    fill: 'bg-sky-950 text-sky-50 dark:bg-sky-200 dark:text-sky-950',
    wash: 'bg-sky-50 dark:bg-sky-950/50',
    text: 'text-sky-900 dark:text-sky-100',
    icon: 'text-sky-600 dark:text-sky-300',
    overlay: 'bg-sky-500/20',
    ring: 'ring-2 ring-sky-400 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
  },
  engineering: {
    border: 'border-slate-500 dark:border-slate-300',
    fill: 'bg-slate-950 text-slate-50 dark:bg-slate-200 dark:text-slate-950',
    wash: 'bg-slate-50 dark:bg-slate-950/50',
    text: 'text-slate-900 dark:text-slate-100',
    icon: 'text-slate-600 dark:text-slate-300',
    overlay: 'bg-slate-500/20',
    ring: 'ring-2 ring-slate-400 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
  },
  design: {
    border: 'border-violet-500 dark:border-violet-400',
    fill: 'bg-violet-950 text-violet-50 dark:bg-violet-200 dark:text-violet-950',
    wash: 'bg-violet-50 dark:bg-violet-950/50',
    text: 'text-violet-900 dark:text-violet-100',
    icon: 'text-violet-600 dark:text-violet-300',
    overlay: 'bg-violet-500/20',
    ring: 'ring-2 ring-violet-400 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
  },
  strategy: {
    border: 'border-emerald-500 dark:border-emerald-400',
    fill: 'bg-emerald-950 text-emerald-50 dark:bg-emerald-200 dark:text-emerald-950',
    wash: 'bg-emerald-50 dark:bg-emerald-950/50',
    text: 'text-emerald-900 dark:text-emerald-100',
    icon: 'text-emerald-600 dark:text-emerald-300',
    overlay: 'bg-emerald-500/20',
    ring: 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
  },
} as const

export const TRUST_CHAPTER_TONE: Record<
  'looks-right' | 'four-lenses' | 'seeded-failures' | 'the-loop' | 'the-harness' | 'transfer',
  { border: string; wash: string; text: string; icon: string; hover: string }
> = {
  'looks-right': {
    border: 'border-amber-400',
    wash: 'bg-amber-50 dark:bg-amber-950/40',
    text: 'text-amber-950 dark:text-amber-100',
    icon: 'text-amber-700 dark:text-amber-300',
    hover:
      'hover:border-amber-400 hover:bg-amber-50 hover:text-amber-950 dark:hover:bg-amber-950/40 dark:hover:text-amber-100',
  },
  'four-lenses': {
    border: 'border-violet-400',
    wash: 'bg-violet-50 dark:bg-violet-950/40',
    text: 'text-violet-950 dark:text-violet-100',
    icon: 'text-violet-700 dark:text-violet-300',
    hover:
      'hover:border-violet-400 hover:bg-violet-50 hover:text-violet-950 dark:hover:bg-violet-950/40 dark:hover:text-violet-100',
  },
  'seeded-failures': {
    border: 'border-rose-400',
    wash: 'bg-rose-50 dark:bg-rose-950/40',
    text: 'text-rose-950 dark:text-rose-100',
    icon: 'text-rose-700 dark:text-rose-300',
    hover:
      'hover:border-rose-400 hover:bg-rose-50 hover:text-rose-950 dark:hover:bg-rose-950/40 dark:hover:text-rose-100',
  },
  'the-loop': {
    border: 'border-cyan-400',
    wash: 'bg-cyan-50 dark:bg-cyan-950/40',
    text: 'text-cyan-950 dark:text-cyan-100',
    icon: 'text-cyan-700 dark:text-cyan-300',
    hover:
      'hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-950 dark:hover:bg-cyan-950/40 dark:hover:text-cyan-100',
  },
  'the-harness': {
    border: 'border-teal-400',
    wash: 'bg-teal-50 dark:bg-teal-950/40',
    text: 'text-teal-950 dark:text-teal-100',
    icon: 'text-teal-700 dark:text-teal-300',
    hover:
      'hover:border-teal-400 hover:bg-teal-50 hover:text-teal-950 dark:hover:bg-teal-950/40 dark:hover:text-teal-100',
  },
  transfer: {
    border: 'border-emerald-400',
    wash: 'bg-emerald-50 dark:bg-emerald-950/40',
    text: 'text-emerald-950 dark:text-emerald-100',
    icon: 'text-emerald-700 dark:text-emerald-300',
    hover:
      'hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-950 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-100',
  },
}

/** Same column as chapter nav and landing body. */
export const TRUST_PAGE_GUTTER = 'mx-auto w-full max-w-5xl px-3 sm:px-4'

/** Live site header plus the measured Trust subnav. Published by `TrustWorkshopNav`. */
export const TRUST_SUBNAV_HEIGHT_VAR = '--trust-subnav-height'

export const TRUST_STICKY_TOP =
  'top-[calc(var(--site-header-height,5rem)+var(--trust-subnav-height,3.5rem)+0.5rem)]'

/** Keeps anchored and focused lesson content clear of the sticky header and subnav. */
export const TRUST_SCROLL_MT =
  'scroll-mt-[calc(var(--site-header-height,5rem)+var(--trust-subnav-height,3.5rem)+0.75rem)]'

/**
 * Overview-only type scale. The chapters use `trust.h2`; the contents page needs
 * a heavier top end and a measured deck so it reads as a document rather than a
 * lesson step.
 */
export const trustOverview = {
  eyebrow: 'font-space-mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400',
  title:
    'text-3xl font-bold leading-[1.08] tracking-tight text-stone-950 text-balance sm:text-4xl md:text-5xl dark:text-stone-50',
  deck: 'max-w-[58ch] text-lg leading-relaxed text-stone-600 sm:text-xl dark:text-stone-400',
  body: 'max-w-[68ch] text-base leading-relaxed text-stone-700 dark:text-stone-300',
} as const

export const trust = {
  shell: opp.shell,
  gutter: TRUST_PAGE_GUTTER,
  main: cn(TRUST_PAGE_GUTTER, "pb-20 font-['MoMA_Sans'] sm:pb-24 pt-5 sm:pt-6"),
  eyebrow: opp.accent,
  title: opp.h1,
  h2: opp.h2,
  body: opp.body,
  muted: opp.muted,
  card: opp.card,
  cardPad: 'p-4 sm:p-5',
  btnPrimary: cn(
    opp.btnPrimary,
    'motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 hover:ring-2 hover:ring-cyan-400 hover:ring-offset-2 hover:ring-offset-stone-50 dark:hover:ring-cyan-300 dark:hover:ring-offset-stone-950'
  ),
  btnSecondary: cn(
    opp.btnSecondary,
    'motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-950 dark:hover:border-cyan-400 dark:hover:bg-cyan-950/50 dark:hover:text-cyan-50'
  ),
  link: cn(opp.linkAccent, 'hover:text-cyan-700 dark:hover:text-cyan-200'),
  label: opp.label,
} as const

export const TRUST_CONTROL_CLASS: Record<TrustControlId, string> = {
  ground: 'border-cyan-400/50 bg-cyan-50 text-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-200',
  validate: 'border-slate-400/50 bg-slate-50 text-slate-800 dark:bg-slate-900/60 dark:text-slate-200',
  restrict: 'border-amber-400/50 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
  approve: 'border-rose-400/50 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200',
  trace: 'border-violet-400/50 bg-violet-50 text-violet-800 dark:bg-violet-950/40 dark:text-violet-200',
  recover: 'border-emerald-400/50 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200',
}

export const TRUST_STAGE_CLASS: Record<TrustLoopStage, string> = {
  observe: 'border-cyan-400/50 bg-cyan-50 text-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-200',
  decide: 'border-violet-400/50 bg-violet-50 text-violet-800 dark:bg-violet-950/40 dark:text-violet-200',
  act: 'border-blue-400/50 bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-200',
  check: 'border-slate-400/50 bg-slate-50 text-slate-800 dark:bg-slate-900/60 dark:text-slate-200',
  stop: 'border-amber-400/50 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
}

export const TRUST_VERDICT_CLASS: Record<TrustVerdict, string> = {
  allow: 'border-emerald-400/60 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200',
  ask: 'border-amber-400/60 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
  deny: 'border-red-400/60 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200',
}

export const TRUST_VERDICT_LABEL: Record<TrustVerdict, string> = {
  allow: 'Allow',
  ask: 'Ask',
  deny: 'Deny',
}

export const TRUST_VERDICT_HINT: Record<TrustVerdict, string> = {
  allow: 'It has sufficient evidence and permission to act.',
  ask: 'Pause for missing evidence or a human decision.',
  deny: 'The action conflicts with a rule, permission, or acceptable risk.',
}

export function trustPlaceholderBox(className?: string) {
  return cn(
    'flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100/80 px-4 text-center dark:border-stone-600 dark:bg-stone-900/40',
    className
  )
}
