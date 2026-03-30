import { cn } from '@/lib/utils'

/** Dark editorial shell for this workshop page */
export function learnAiPageRoot(className?: string) {
  return cn(
    'min-h-screen bg-zinc-950 text-zinc-100 antialiased transition-colors duration-300',
    className
  )
}

/** Navy / slate atmosphere band */
export function learnAiAtmosphereNavy(className?: string) {
  return cn(
    'relative overflow-hidden',
    'bg-gradient-to-b from-slate-950/90 via-zinc-950 to-zinc-950',
    className
  )
}

export function learnAiSectionEyebrow(className?: string) {
  return cn('text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-3', className)
}

export function learnAiSectionTitle(className?: string) {
  return cn('text-xl sm:text-2xl font-medium text-zinc-100 tracking-tight', className)
}

export const learnAiAccentLimeTop =
  'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-lime-500/40 before:to-transparent'

export function learnAiCardInteractive(className?: string) {
  return cn(
    'rounded-sm border transition-all duration-300',
    'border-zinc-800 bg-zinc-900/40',
    'hover:-translate-y-0.5 hover:border-lime-500/30 hover:shadow-[0_0_0_1px_rgba(163,230,53,0.1)]',
    className
  )
}
