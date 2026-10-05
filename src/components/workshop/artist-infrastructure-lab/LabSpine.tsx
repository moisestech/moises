'use client'

import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import {
  LAB_BASE,
  LAB_CHAPTERS,
  LAB_LEARN,
  type LabChapterId,
} from '@/content/workshops/artist-infrastructure-lab'
import { cn } from '@/lib/utils'
import { LAB_OVERVIEW_SECTIONS, LAB_VISUAL } from './labVisual'

export function LabSpine({ current }: { current?: LabChapterId }) {
  const reduce = useReducedMotion()
  const onOverview = !current

  return (
    <nav
      aria-label="Lab"
      className="sticky top-[var(--site-header-height,5rem)] z-40 border-b border-[#d9d0c3] bg-[#f3eee6]/95 backdrop-blur-sm lg:fixed lg:bottom-0 lg:left-0 lg:w-60 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-[#d9d0c3]"
    >
      <div className="flex gap-2 overflow-x-auto px-3 py-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-3 lg:py-4">
        <div className="shrink-0 lg:mb-2">
          <Link
            href={LAB_BASE}
            aria-current={onOverview ? 'page' : undefined}
            className={cn(
              'flex items-center gap-2 px-2 py-2 text-sm',
              onOverview ? 'text-[#1c1916]' : 'text-[#5c564e] hover:text-[#1c1916]',
            )}
          >
            <span className={cn('h-2 w-2 shrink-0', onOverview ? 'bg-[#1c1916]' : 'bg-[#d9d0c3]')} />
            Overview
          </Link>
          {onOverview ? (
            <ul className="mt-1 hidden space-y-0.5 pl-6 lg:block">
              {LAB_OVERVIEW_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block py-1 text-sm text-[#5c564e] hover:text-[#0f5f5c]"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {LAB_CHAPTERS.map((chapter) => {
          const visual = LAB_VISUAL[chapter.id]
          const Icon = visual.icon
          const active = chapter.id === current
          return (
            <Link
              key={chapter.id}
              href={`${LAB_LEARN}/${chapter.id}`}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'group flex shrink-0 items-center gap-2 border border-[#d9d0c3] px-2 py-2 lg:border-0 lg:px-2 lg:py-2',
                active && visual.active,
                !active && 'text-[#1c1916] hover:bg-[#e7e0d4]',
                !reduce && 'transition-colors duration-200',
              )}
            >
              <span className={cn('h-2.5 w-2.5 shrink-0', visual.tick, active && 'ring-1 ring-[#f3eee6]')} />
              <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em]">
                  {chapter.number} {chapter.title}
                </span>
                <span
                  className={cn(
                    'hidden text-[11px] leading-snug text-current/80 lg:block lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-8 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-8 lg:group-focus-visible:opacity-100',
                    !reduce && 'lg:transition-all lg:duration-300',
                  )}
                >
                  {chapter.artifact}
                </span>
              </span>
            </Link>
          )
        })}
      </div>
      {onOverview ? (
        <div className="flex gap-3 overflow-x-auto border-t border-[#d9d0c3] px-4 py-2 lg:hidden">
          {LAB_OVERVIEW_SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="shrink-0 text-xs text-[#5c564e]">
              {section.label}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  )
}

export function LabFrame({
  current,
  children,
}: {
  current?: LabChapterId
  children: React.ReactNode
}) {
  return (
    <>
      <LabSpine current={current} />
      <div className="lg:pl-60">{children}</div>
    </>
  )
}
