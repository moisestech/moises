import type { ReactNode } from 'react'
import { resolveTechLogo } from '@/content/evidence/tech-logos'
import { cn } from '@/lib/utils'

const FALLBACK = '/images/tech-logos/github.svg'

export function AepGitHubMark({ className }: { className?: string }) {
  const logo = resolveTechLogo('github', 'square')
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.resolvedSrc ?? FALLBACK}
      alt=""
      width={16}
      height={16}
      className={cn('inline-block h-4 w-4 shrink-0 dark:invert', className)}
      aria-hidden
    />
  )
}

export function AepGitHubLink({
  href,
  children,
  className,
  variant = 'text',
}: {
  href: string
  children: ReactNode
  className?: string
  variant?: 'text' | 'button'
}) {
  const base =
    variant === 'button'
      ? 'inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-stone-800 dark:bg-cyan-500 dark:text-stone-950 dark:hover:bg-cyan-400'
      : 'inline-flex items-center gap-2 font-medium text-cyan-600 underline-offset-2 hover:underline dark:text-cyan-400'

  return (
    <a href={href} target="_blank" rel="noreferrer" className={cn(base, className)}>
      <AepGitHubMark />
      <span>{children}</span>
    </a>
  )
}
