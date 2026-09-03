'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

function FrameField({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <p className="font-space-mono text-[10px] uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
        {label}
      </p>
      <div className="mt-0.5 text-sm leading-snug text-stone-800 dark:text-stone-200">{children}</div>
    </div>
  )
}

export function TrustChapterFrame({
  where,
  goal,
  card,
  job,
  doNow,
  doneWhen,
  className,
}: {
  where: string
  goal: string
  card: ReactNode
  job: ReactNode
  doNow: string
  doneWhen: string
  className?: string
}) {
  return (
    <header className={cn('grid gap-2 md:grid-cols-2', className)}>
      <div className="md:col-span-2">
        <p className="font-space-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">{where}</p>
        <p className="mt-0.5 text-sm font-semibold text-stone-950 sm:text-base dark:text-stone-50">{goal}</p>
      </div>
      <FrameField label="The card">{card}</FrameField>
      <FrameField label="Your job">{job}</FrameField>
      <FrameField label="Do this now">{doNow}</FrameField>
      <p className="self-start rounded-lg border border-cyan-400/40 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-950 dark:border-cyan-500/40 dark:bg-cyan-950/40 dark:text-cyan-100">
        {doneWhen}
      </p>
    </header>
  )
}
