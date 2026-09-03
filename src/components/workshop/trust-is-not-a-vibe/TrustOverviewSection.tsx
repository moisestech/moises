import type { ReactNode } from 'react'
import type { TrustOverviewSection as TrustOverviewSectionData } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_SCROLL_MT, trustOverview } from './trust-tokens'

/**
 * One band of the Overview. Title first, then the deck — the chapters' section
 * header prints its note above the heading, which inverts the hierarchy and is
 * the main reason the Overview read like lesson material.
 */
export function TrustOverviewSection({
  section,
  children,
  className,
}: {
  section: TrustOverviewSectionData
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className={cn(
        'border-t border-stone-200 pt-10 first:border-t-0 first:pt-0 sm:pt-14 dark:border-stone-800',
        TRUST_SCROLL_MT,
        className
      )}
    >
      <div className="sm:grid sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-4">
        <p className={cn(trustOverview.eyebrow, 'sm:pt-2')} aria-hidden>
          {section.number}
        </p>
        <div>
          <h2 id={`${section.id}-title`} className={trustOverview.title}>
            {section.title}
          </h2>
          <p className={cn(trustOverview.deck, 'mt-3')}>{section.deck}</p>
        </div>
      </div>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  )
}
