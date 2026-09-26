import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  LAB_BASE,
  LAB_CHAPTERS,
  LAB_LEARN,
  LAB_STATUS,
  LAB_TITLE,
  type LabChapterId,
} from '@/content/workshops/artist-infrastructure-lab'
import { cn } from '@/lib/utils'

export const labPage = 'min-h-screen bg-[#f3eee6] text-[#1c1916]'
export const labWrap = 'mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 sm:py-12'

export function LabStatus({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        'border border-[#e2b8a2] bg-[#f8efe8] px-3 py-2 font-mono text-[11px] leading-relaxed tracking-wide text-[#7a3412]',
        className,
      )}
    >
      {LAB_STATUS}
    </p>
  )
}

export function LabKicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0f5f5c]">{children}</p>
  )
}

export function LabButton({
  children,
  type = 'button',
  onClick,
  disabled,
  testId,
}: {
  children: ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  testId?: string
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      className="border border-[#1c1916] bg-[#1c1916] px-3 py-2 text-sm text-[#f3eee6] disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  )
}

export function LabGhostButton({
  children,
  onClick,
  testId,
}: {
  children: ReactNode
  onClick?: () => void
  testId?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testId}
      className="border border-[#1c1916] bg-transparent px-3 py-2 text-sm text-[#1c1916]"
    >
      {children}
    </button>
  )
}

export function LabChoice({
  selected,
  onClick,
  children,
  testId,
}: {
  selected: boolean
  onClick: () => void
  children: ReactNode
  testId?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      data-testid={testId}
      className={cn(
        'border px-3 py-2 text-left text-sm leading-snug',
        selected
          ? 'border-[#0f5f5c] bg-[#e5f2f1] text-[#0f5f5c]'
          : 'border-[#d9d0c3] bg-white text-[#1c1916]',
      )}
    >
      {children}
    </button>
  )
}

export function LabNotes({ notes }: { notes: string[] }) {
  if (notes.length === 0) return null
  return (
    <ul className="space-y-1 border border-[#e2b8a2] bg-[#f8efe8] px-3 py-2 text-sm text-[#7a3412]">
      {notes.map((note) => (
        <li key={note}>{note}</li>
      ))}
    </ul>
  )
}

export function LabSaved({ artifact }: { artifact: string }) {
  return (
    <p className="border border-[#0f5f5c] bg-[#e5f2f1] px-3 py-2 text-sm text-[#0f5f5c]" data-testid="artifact-saved">
      Saved to the project package: {artifact}.
    </p>
  )
}

export function LabChapterNav({ current }: { current?: LabChapterId }) {
  return (
    <nav aria-label="Chapters" className="flex flex-wrap gap-2">
      {LAB_CHAPTERS.map((chapter) => {
        const active = chapter.id === current
        return (
          <Link
            key={chapter.id}
            href={`${LAB_LEARN}/${chapter.id}`}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'border px-2 py-1 font-mono text-[11px] uppercase tracking-wide',
              active
                ? 'border-[#0f5f5c] bg-[#0f5f5c] text-[#f3eee6]'
                : 'border-[#d9d0c3] text-[#3d3832] hover:border-[#1c1916]',
            )}
          >
            {chapter.number} {chapter.title}
          </Link>
        )
      })}
    </nav>
  )
}

export function LabHeader({ current }: { current?: LabChapterId }) {
  return (
    <header className="space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <Link href={LAB_BASE} className="text-sm tracking-wide">
          {LAB_TITLE}
        </Link>
        <Link href={LAB_BASE} className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0f5f5c]">
          Working proposal
        </Link>
      </div>
      <LabStatus />
      <LabChapterNav current={current} />
    </header>
  )
}
