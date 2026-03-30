'use client'

import { cn } from '@/lib/utils'

type GlyphProps = { className?: string; 'aria-hidden'?: boolean }

export function GlyphBracketPair({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-lime-600/70 dark:text-lime-400/50', className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <path d="M6 3v14M14 3v14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function GlyphNodeChain({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-400 dark:text-zinc-600', className)}
      width="48"
      height="12"
      viewBox="0 0 48 12"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <circle cx="6" cy="6" r="2" fill="currentColor" />
      <line x1="10" y1="6" x2="22" y2="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="26" cy="6" r="2" fill="currentColor" />
      <line x1="30" y1="6" x2="42" y2="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="46" cy="6" r="2" fill="currentColor" />
    </svg>
  )
}

export function GlyphSignalBars({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-500 dark:text-zinc-500', className)}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <rect x="1" y="10" width="3" height="5" fill="currentColor" opacity="0.5" />
      <rect x="6" y="7" width="3" height="8" fill="currentColor" opacity="0.65" />
      <rect x="11" y="4" width="3" height="11" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

export function GlyphStackTiles({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-amber-700/60 dark:text-amber-200/45', className)}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <rect x="2" y="2" width="14" height="10" stroke="currentColor" strokeWidth="1" />
      <rect x="5" y="6" width="14" height="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function GlyphArrowRight({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-500 dark:text-zinc-400', className)}
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <path d="M1 5h10M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GlyphDotRow({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-lime-600/50 dark:text-lime-400/40', className)}
      width="24"
      height="6"
      viewBox="0 0 24 6"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <circle cx="3" cy="3" r="1.5" fill="currentColor" />
      <circle cx="12" cy="3" r="1.5" fill="currentColor" />
      <circle cx="21" cy="3" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function GlyphListMark({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 mt-1.5 text-amber-600/75 dark:text-amber-200/55', className)}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <rect x="1" y="1" width="8" height="8" stroke="currentColor" strokeWidth="1" />
      <line x1="3" y1="5" x2="7" y2="5" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}

export function GlyphCheckTile({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-lime-700/80 dark:text-lime-400/65', className)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <rect x="1.5" y="1.5" width="15" height="15" stroke="currentColor" strokeWidth="1" />
      <path d="M5 9l2.5 2.5L13 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GlyphWritingLines({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-500 dark:text-zinc-400', className)}
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <line x1="2" y1="3" x2="20" y2="3" stroke="currentColor" strokeWidth="1" />
      <line x1="2" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="2" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function GlyphResearchFrame({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-500 dark:text-zinc-400', className)}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <rect x="2" y="2" width="16" height="14" stroke="currentColor" strokeWidth="1" />
      <path d="M6 6h8M6 10h5" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  )
}

export function GlyphBrainstormBurst({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-500 dark:text-zinc-400', className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1" />
      <line x1="10" y1="2" x2="10" y2="5" stroke="currentColor" strokeWidth="0.8" />
      <line x1="10" y1="15" x2="10" y2="18" stroke="currentColor" strokeWidth="0.8" />
      <line x1="2" y1="10" x2="5" y2="10" stroke="currentColor" strokeWidth="0.8" />
      <line x1="15" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}

export function GlyphAssistantsGrid({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-500 dark:text-zinc-400', className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <rect x="2" y="2" width="6" height="6" stroke="currentColor" strokeWidth="0.9" />
      <rect x="12" y="2" width="6" height="6" stroke="currentColor" strokeWidth="0.9" />
      <rect x="2" y="12" width="6" height="6" stroke="currentColor" strokeWidth="0.9" />
      <rect x="12" y="12" width="6" height="6" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  )
}

/** Paragraph / cursor + quotation flourish for writing outcomes */
export function GlyphWritingCursorQuote({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-500 dark:text-zinc-400', className)}
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <path d="M4 2v14M4 2h12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="4" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="0.9" opacity="0.65" />
      <line x1="4" y1="11" x2="11" y2="11" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
      <path
        d="M17 4c1.5 1.2 2 2.5 2 4.5M17 4v2M19 8.5h-2"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Branch / cluster motif for brainstorming */
export function GlyphBrainstormBranch({ className, 'aria-hidden': ariaHidden = true }: GlyphProps) {
  return (
    <svg
      className={cn('shrink-0 text-zinc-500 dark:text-zinc-400', className)}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      aria-hidden={ariaHidden}
    >
      <circle cx="11" cy="10" r="2" stroke="currentColor" strokeWidth="1" />
      <path d="M11 2v5M11 13v5M2 10h5M15 10h5M4 4l4 3M18 4l-4 3M4 16l4-3M18 16l-4-3" stroke="currentColor" strokeWidth="0.85" strokeLinecap="round" />
    </svg>
  )
}
