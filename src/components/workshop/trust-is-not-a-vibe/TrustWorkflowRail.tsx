'use client'

import Link from 'next/link'
import { TRUST_CHAPTERS, TRUST_LEARN_BASE, type TrustChapterId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

export function TrustWorkflowRail({
  current,
  completed,
}: {
  current: TrustChapterId
  completed: readonly TrustChapterId[]
}) {
  return (
    <nav aria-label="Lab chapters" className="w-full overflow-x-auto">
      <ol className="flex min-w-max gap-1 md:grid md:min-w-0 md:grid-cols-6 md:gap-2">
        {TRUST_CHAPTERS.map((chapter) => {
          const active = chapter.id === current
          const done = completed.includes(chapter.id)
          return (
            <li key={chapter.id} className="min-w-[6.5rem] md:min-w-0">
              <Link
                href={`${TRUST_LEARN_BASE}/${chapter.slug}`}
                aria-current={active ? 'step' : undefined}
                className={cn(
                  'block rounded-lg border px-2 py-2 text-center font-mono text-[10px] uppercase tracking-wide',
                  active
                    ? 'border-cyan-500 bg-cyan-500 text-stone-950'
                    : done
                      ? 'border-emerald-400/40 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200'
                      : 'border-stone-200 bg-white/70 text-stone-500 dark:border-stone-700 dark:bg-stone-900/40'
                )}
              >
                <span className="block opacity-70">0{chapter.number}</span>
                <span className="mt-0.5 block truncate">{chapter.title}</span>
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
