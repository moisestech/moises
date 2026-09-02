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

export const trust = {
  shell: opp.shell,
  main: cn(opp.main, 'pt-5 sm:pt-6'),
  eyebrow: opp.accent,
  title: opp.h1,
  h2: opp.h2,
  body: opp.body,
  muted: opp.muted,
  card: opp.card,
  cardPad: 'p-4 sm:p-5',
  btnPrimary: opp.btnPrimary,
  btnSecondary: opp.btnSecondary,
  link: opp.linkAccent,
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
  allow: 'Safe to execute automatically.',
  ask: 'Pause for clarification or authorized review.',
  deny: 'The action violates a boundary or cannot be made safe.',
}

export function trustPlaceholderBox(className?: string) {
  return cn(
    'flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100/80 px-4 text-center dark:border-stone-600 dark:bg-stone-900/40',
    className
  )
}
