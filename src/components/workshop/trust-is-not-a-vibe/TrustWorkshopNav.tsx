'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { HorizontalOverflowNav } from '@/components/nav/HorizontalOverflowNav'
import { opp } from '@/components/opportunities/opportunityTheme'
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme'
import { siteHeaderStickyTopClass } from '@/config/site-header-layout'
import {
  TRUST_BASE,
  TRUST_CHAPTERS,
  TRUST_LEARN_BASE,
  TRUST_TITLE,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_NAV_ACCENT_ID, TRUST_NAV_TEXT, TRUST_PAGE_GUTTER, type TrustNavItemId } from './trust-tokens'

const NAV_ITEMS: readonly { id: TrustNavItemId; href: string; label: string }[] = [
  { id: 'overview', href: TRUST_BASE, label: 'Overview' },
  ...TRUST_CHAPTERS.map((chapter) => ({
    id: chapter.id as TrustNavItemId,
    href: `${TRUST_LEARN_BASE}/${chapter.slug}`,
    label: chapter.title,
  })),
]

export function TrustWorkshopNav() {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const activeHref = NAV_ITEMS.find((item) => item.href === pathname)?.href ?? ''

  return (
    <nav
      data-site-chrome
      className={cn(opp.stickyNav, siteHeaderStickyTopClass, 'print:hidden')}
      aria-label={`${TRUST_TITLE} sections`}
    >
      <HorizontalOverflowNav
        asNav={false}
        ariaLabel={`${TRUST_TITLE} sections`}
        activeKey={activeHref}
        className={TRUST_PAGE_GUTTER}
        scrollerClassName="gap-x-5 pb-1 text-sm sm:gap-x-6 sm:text-base"
      >
        {NAV_ITEMS.map((item) => {
          const active = item.href === activeHref
          const accent = getOpportunityCompactAccent(TRUST_NAV_ACCENT_ID[item.id])
          const tone = TRUST_NAV_TEXT[item.id]
          return (
            <Link
              key={item.id}
              href={item.href}
              data-nav-active={active ? 'true' : undefined}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'relative shrink-0 whitespace-nowrap border-b-2 pb-1 font-medium transition-colors duration-200',
                accent.focusRing,
                active
                  ? cn(tone.active, 'border-current')
                  : cn('border-transparent text-stone-600 dark:text-stone-400', tone.hover)
              )}
            >
              {active && !reduceMotion ? (
                <motion.span
                  layoutId="trust-subnav-active"
                  className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 bg-current"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              ) : null}
              {item.label}
            </Link>
          )
        })}
      </HorizontalOverflowNav>
    </nav>
  )
}
