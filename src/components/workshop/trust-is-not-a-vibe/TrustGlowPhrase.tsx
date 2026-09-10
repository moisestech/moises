'use client'

import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { cn } from '@/lib/utils'
import { TRUST_CHAPTER_TONE, TRUST_ROLE_TONE } from './trust-tokens'
import type { TrustChapterId, TrustRoleId, TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'

export type TrustGlowKind = TrustRoleId | TrustChapterId | TrustVerdict

const ROLE_GLOW: Record<TrustRoleId, string> = {
  pm: 'hover:bg-blue-50 hover:text-blue-800 hover:ring-blue-500 dark:hover:bg-blue-950/60 dark:hover:text-blue-100',
  engineering:
    'hover:bg-slate-100 hover:text-slate-900 hover:ring-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-50',
  design:
    'hover:bg-violet-50 hover:text-violet-800 hover:ring-violet-500 dark:hover:bg-violet-950/60 dark:hover:text-violet-100',
  strategy:
    'hover:bg-fuchsia-50 hover:text-fuchsia-800 hover:ring-fuchsia-500 dark:hover:bg-fuchsia-950/60 dark:hover:text-fuchsia-100',
}

const VERDICT_GLOW: Record<TrustVerdict, string> = {
  allow: 'hover:bg-emerald-50 hover:text-emerald-900 hover:ring-emerald-500 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-100',
  ask: 'hover:bg-amber-50 hover:text-amber-900 hover:ring-amber-500 dark:hover:bg-amber-950/50 dark:hover:text-amber-100',
  deny: 'hover:bg-red-50 hover:text-red-900 hover:ring-red-500 dark:hover:bg-red-950/50 dark:hover:text-red-100',
}

function glowClass(kind: TrustGlowKind) {
  if (kind in ROLE_GLOW) return ROLE_GLOW[kind as TrustRoleId]
  if (kind in VERDICT_GLOW) return VERDICT_GLOW[kind as TrustVerdict]
  const chapter = TRUST_CHAPTER_TONE[kind as TrustChapterId]
  return chapter
    ? cn(chapter.hover, chapter.wash.replace('bg-', 'hover:bg-').split(' ')[0], 'hover:ring-current')
    : ''
}

function idleIcon(kind: TrustGlowKind) {
  if (kind in TRUST_ROLE_TONE) return TRUST_ROLE_TONE[kind as TrustRoleId].icon
  if (kind in TRUST_CHAPTER_TONE) return TRUST_CHAPTER_TONE[kind as TrustChapterId].icon
  return ''
}

export function TrustGlowPhrase({
  kind,
  icon: Icon,
  children,
}: {
  kind: TrustGlowKind
  icon?: IconType
  children: ReactNode
}) {
  return (
    <span
      data-trust-glow={kind}
      tabIndex={0}
      className={cn(
        'inline-flex cursor-default items-center gap-1 rounded-md px-1.5 py-0.5 font-semibold underline decoration-dotted underline-offset-4',
        'ring-0 transition duration-200 hover:ring-2 hover:ring-offset-2 hover:ring-offset-stone-50',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50',
        'dark:hover:ring-offset-stone-950 dark:focus-visible:ring-offset-stone-950',
        'motion-reduce:transition-none',
        idleIcon(kind),
        glowClass(kind)
      )}
    >
      {Icon ? <Icon className="h-[1em] w-[1em] shrink-0" aria-hidden /> : null}
      {children}
    </span>
  )
}

export function TrustGlowIcon({
  kind,
  icon: Icon,
  className,
}: {
  kind: TrustGlowKind
  icon: IconType
  className?: string
}) {
  const chapter = kind in TRUST_CHAPTER_TONE ? TRUST_CHAPTER_TONE[kind as TrustChapterId] : null
  const role = kind in TRUST_ROLE_TONE ? TRUST_ROLE_TONE[kind as TrustRoleId] : null
  return (
    <span
      data-trust-glow-icon={kind}
      className={cn(
        'inline-flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-white transition duration-200',
        'hover:ring-2 hover:ring-offset-2 hover:ring-offset-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:ring-offset-stone-950',
        'motion-reduce:transition-none',
        chapter && cn(chapter.icon, chapter.hover, 'hover:ring-current'),
        role && cn(role.icon, role.border.replace('border-', 'hover:border-'), 'hover:ring-current'),
        className
      )}
    >
      <Icon className="h-6 w-6" aria-hidden />
    </span>
  )
}
