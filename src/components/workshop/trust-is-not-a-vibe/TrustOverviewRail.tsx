'use client'

import { useEffect, useState } from 'react'
import {
  TRUST_OVERVIEW_SECTIONS,
  type TrustOverviewSectionId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_STICKY_TOP } from './trust-tokens'

/**
 * Tracks which band is being read. The chapter subnav already owns the sticky
 * slot, so this rail sits inside the content column instead of adding a second
 * pinned bar.
 */
function useActiveSection() {
  const [active, setActive] = useState<TrustOverviewSectionId>(TRUST_OVERVIEW_SECTIONS[0].id)

  useEffect(() => {
    const nodes = TRUST_OVERVIEW_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (node): node is HTMLElement => Boolean(node)
    )
    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id as TrustOverviewSectionId)
      },
      // Discount the sticky header band so the heading under it counts as current.
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return active
}

export function TrustOverviewRail() {
  const active = useActiveSection()

  return (
    <nav
      aria-label="On this page"
      className={cn('hidden lg:sticky lg:block lg:self-start', TRUST_STICKY_TOP)}
    >
      <p className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">On this page</p>
      <ol className="mt-3 space-y-1">
        {TRUST_OVERVIEW_SECTIONS.map((section) => {
          const current = section.id === active
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? 'true' : undefined}
                className={cn(
                  'flex items-baseline gap-2 rounded border-l-2 py-1 pl-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                  current
                    ? 'border-cyan-500 font-semibold text-stone-950 dark:border-cyan-400 dark:text-stone-50'
                    : 'border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-800 dark:border-stone-700 dark:hover:text-stone-200'
                )}
              >
                <span className="font-space-mono text-[10px] text-stone-400">{section.number}</span>
                {section.navLabel}
                {current ? <span className="sr-only"> (current section)</span> : null}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/** Small-screen equivalent. The subnav is already pinned there, so this stays in flow. */
export function TrustOverviewContents({ className }: { className?: string }) {
  return (
    <nav
      aria-label="On this page"
      className={cn(
        'rounded-xl border border-stone-200 px-4 py-3 lg:hidden dark:border-stone-700',
        className
      )}
    >
      <p className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">On this page</p>
      <ol className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
        {TRUST_OVERVIEW_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="flex items-baseline gap-1.5 text-sm text-stone-700 underline-offset-2 hover:underline dark:text-stone-300"
            >
              <span className="font-space-mono text-[10px] text-stone-400">{section.number}</span>
              {section.navLabel}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
