'use client'

import type { ReactNode } from 'react'
import type { TrustOverviewSection as TrustOverviewSectionData } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustPresentPortions } from './TrustPresentPortions'
import { useRegisterTrustStep, useTrustPresentation } from './TrustPresentation'
import { TRUST_SCROLL_MT, trustOverview, trustPresent } from './trust-tokens'

/**
 * One band of the Overview. Title first, then the deck — the chapters' section
 * header prints its note above the heading, which inverts the hierarchy and is
 * the main reason the Overview read like lesson material.
 *
 * Self-paced keeps every band in the document. Present hides every band except
 * the focused one, the way a lesson accordion isolates the open card.
 */
export function TrustOverviewSection({
  section,
  children,
  className,
  hideDeck = false,
  lead,
}: {
  section: TrustOverviewSectionData
  children: ReactNode
  className?: string
  /** Path sits the deck beside the portrait so it is not repeated above. */
  hideDeck?: boolean
  /** Stays on screen while Present pages the children — used for the question prompt. */
  lead?: ReactNode
}) {
  const { ref, current, focused } = useRegisterTrustStep(section.title)
  const { present } = useTrustPresentation()
  const type = present ? trustPresent : trustOverview

  return (
    <section
      id={section.id}
      ref={ref}
      tabIndex={-1}
      data-trust-step
      data-trust-step-current={current || undefined}
      hidden={present && !focused}
      aria-labelledby={`${section.id}-title`}
      className={cn(
        present
          ? 'border-t-0 pt-0'
          : 'border-t border-stone-200 pt-10 first:border-t-0 first:pt-0 sm:pt-14 dark:border-stone-800',
        TRUST_SCROLL_MT,
        'outline-none motion-safe:transition-[box-shadow,padding]',
        current && 'rounded-r-lg pl-4 shadow-[inset_3px_0_0_0_theme(colors.cyan.500)]',
        present && !focused && 'hidden',
        className
      )}
    >
      <div className="sm:grid sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-4">
        <p className={cn(trustOverview.eyebrow, 'sm:pt-2')} aria-hidden>
          {section.number}
        </p>
        <div>
          <h2 id={`${section.id}-title`} className={type.title}>
            {section.title}
          </h2>
          {hideDeck ? null : <p className={cn(type.deck, 'mt-3')}>{section.deck}</p>}
        </div>
      </div>
      <div className="mt-8 sm:mt-10">
        {!present || focused ? (
          <>
            {lead ? <div className="mb-6 sm:mb-8">{lead}</div> : null}
            <TrustPresentPortions animate={present}>{children}</TrustPresentPortions>
          </>
        ) : null}
      </div>
    </section>
  )
}
