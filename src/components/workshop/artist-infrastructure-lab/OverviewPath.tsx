'use client'

import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { LAB_CHAPTERS, LAB_LEARN } from '@/content/workshops/artist-infrastructure-lab'
import { cn } from '@/lib/utils'
import { LAB_VISUAL } from './labVisual'

export function OverviewPath() {
  const reduce = useReducedMotion()

  return (
    <ol className="relative ml-3 space-y-3 border-l border-[#d9d0c3] pl-6">
      {LAB_CHAPTERS.map((chapter) => {
        const visual = LAB_VISUAL[chapter.id]
        const Icon = visual.icon
        return (
          <li key={chapter.id} className="relative">
            <span
              className={cn('absolute -left-[31px] top-5 h-3.5 w-3.5', visual.tick)}
              aria-hidden
            />
            <Link
              href={`${LAB_LEARN}/${chapter.id}`}
              className={cn(
                'group block border p-4',
                visual.node,
                !reduce && 'transition duration-300 hover:-translate-y-1',
              )}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                  {chapter.number} · {chapter.title}
                </span>
                <span className="text-sm">{chapter.artifact}</span>
              </span>
              <p
                className={cn(
                  'max-h-0 overflow-hidden text-sm leading-relaxed opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100',
                  !reduce && 'transition-all duration-300',
                )}
              >
                {chapter.question}
              </p>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
