import { cn } from '@/lib/utils'

/** Page shell — follows site `html.dark` (same as global nav) */
export function learnAiPageRoot(className?: string) {
  return cn(
    'min-h-screen antialiased transition-colors duration-300',
    'bg-zinc-50 text-zinc-950',
    'dark:bg-zinc-950 dark:text-zinc-100',
    className
  )
}

/** Navy / slate atmosphere band */
export function learnAiAtmosphereNavy(className?: string) {
  return cn(
    'relative overflow-hidden',
    'bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-50',
    'dark:from-slate-950/90 dark:via-zinc-950 dark:to-zinc-950',
    className
  )
}

export function learnAiSectionEyebrow(className?: string) {
  return cn('text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-3', className)
}

export function learnAiSectionTitle(className?: string) {
  return cn(
    'text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100',
    className
  )
}

export const learnAiAccentLimeTop =
  'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-lime-600/35 before:to-transparent dark:before:via-lime-500/40'

export function learnAiCardInteractive(className?: string) {
  return cn(
    'rounded-sm border transition-all duration-300',
    'border-zinc-200 bg-white/90 shadow-sm',
    'hover:-translate-y-0.5 hover:border-lime-600/35 hover:shadow-[0_0_0_1px_rgba(101,163,13,0.12)]',
    'dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none',
    'dark:hover:border-lime-500/30 dark:hover:shadow-[0_0_0_1px_rgba(163,230,53,0.1)]',
    className
  )
}
