'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  HiOutlineArrowPath,
  HiOutlineArrowsRightLeft,
  HiOutlineClipboardDocumentCheck,
  HiOutlineExclamationTriangle,
  HiOutlineEye,
  HiOutlinePlay,
  HiOutlineRectangleGroup,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUsers,
} from 'react-icons/hi2'
import { HorizontalOverflowNav } from '@/components/nav/HorizontalOverflowNav'
import { opp } from '@/components/opportunities/opportunityTheme'
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme'
import { siteHeaderStickyTopClass } from '@/config/site-header-layout'
import {
  TRUST_BASE,
  TRUST_CHAPTERS,
  TRUST_DECISION_CARD_HREF,
  TRUST_LEARN_BASE,
  TRUST_REHEARSE_HREF,
  TRUST_SURFACES_HREF,
  TRUST_TITLE,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_NAV_ACCENT_ID, type TrustNavItemId } from './trust-tokens'

const NAV_ICONS: Record<TrustNavItemId, IconType> = {
  overview: HiOutlineSparkles,
  'looks-right': HiOutlineEye,
  'four-lenses': HiOutlineUsers,
  'seeded-failures': HiOutlineExclamationTriangle,
  'the-loop': HiOutlineArrowPath,
  'the-harness': HiOutlineShieldCheck,
  transfer: HiOutlineArrowsRightLeft,
  rehearse: HiOutlinePlay,
  surfaces: HiOutlineRectangleGroup,
  card: HiOutlineClipboardDocumentCheck,
}

const CHAPTER_SHORT: Record<string, string> = {
  'looks-right': 'Looks',
  'four-lenses': 'Lenses',
  'seeded-failures': 'Failures',
  'the-loop': 'Loop',
  'the-harness': 'Harness',
  transfer: 'Transfer',
}

const NAV_ITEMS: readonly { id: TrustNavItemId; href: string; label: string; shortLabel: string }[] = [
  { id: 'overview', href: TRUST_BASE, label: 'Overview', shortLabel: 'Overview' },
  ...TRUST_CHAPTERS.map((chapter) => ({
    id: chapter.id as TrustNavItemId,
    href: `${TRUST_LEARN_BASE}/${chapter.slug}`,
    label: chapter.title,
    shortLabel: CHAPTER_SHORT[chapter.id] ?? chapter.title,
  })),
  { id: 'rehearse', href: TRUST_REHEARSE_HREF, label: 'Rehearse', shortLabel: 'Rehearse' },
  { id: 'surfaces', href: TRUST_SURFACES_HREF, label: 'Surfaces', shortLabel: 'Surfaces' },
  { id: 'card', href: TRUST_DECISION_CARD_HREF, label: 'Decision card', shortLabel: 'Card' },
]

const pillClass =
  'relative inline-flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-9 sm:px-3 sm:py-1.5 md:min-h-0'

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
        className="mx-auto max-w-5xl px-3 sm:px-4"
        scrollerClassName="gap-1.5 pb-1.5 sm:pb-1"
      >
        {NAV_ITEMS.map((item) => {
          const active = item.href === activeHref
          const accent = getOpportunityCompactAccent(TRUST_NAV_ACCENT_ID[item.id])
          const Icon = NAV_ICONS[item.id]
          return (
            <Link
              key={item.id}
              href={item.href}
              data-nav-active={active ? 'true' : undefined}
              aria-current={active ? 'page' : undefined}
              className={cn(
                pillClass,
                accent.focusRing,
                active
                  ? cn(accent.navActive, accent.navActiveText)
                  : cn(accent.navIdle, 'text-stone-600 dark:text-stone-400'),
              )}
            >
              {active && !reduceMotion ? (
                <motion.span
                  layoutId="trust-subnav-active"
                  className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              ) : null}
              <motion.span
                className="relative z-[1] inline-flex"
                animate={active && !reduceMotion ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </motion.span>
              <span className="relative z-[1] md:hidden">{item.shortLabel}</span>
              <span className="relative z-[1] hidden md:inline">{item.label}</span>
            </Link>
          )
        })}
      </HorizontalOverflowNav>
    </nav>
  )
}
