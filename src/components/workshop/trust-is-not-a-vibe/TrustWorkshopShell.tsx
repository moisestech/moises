'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import {
  TRUST_BASE,
  TRUST_CHAPTERS,
  TRUST_LEARN_BASE,
  TRUST_SUBTITLE,
  trustBannerCopyForPath,
  trustBannerForPath,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustBannerQuote, TrustLabBanner } from './TrustLabBanner'
import { TrustWorkshopNav } from './TrustWorkshopNav'
import { trust } from './trust-tokens'

/** Clears the compact Trust site header (title row, not the program strip). */
const TRUST_HEADER_CLEARANCE =
  'pt-[calc(var(--site-header-expanded-height,8rem)+0.5rem)] md:pt-[calc(var(--site-header-expanded-height,8rem)+0.75rem)]'

/** Learn chapters use live header height so the lesson starts closer to the fold. */
const TRUST_LEARN_HEADER_CLEARANCE =
  'pt-[calc(var(--site-header-height,4.5rem)+0.25rem)]'

export function TrustWorkshopShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const banner = trustBannerForPath(pathname)
  const copy = trustBannerCopyForPath(pathname)
  const learnChapter = Boolean(pathname?.startsWith(`${TRUST_LEARN_BASE}/`))

  return (
    <div
      className={cn(
        trust.shell,
        learnChapter ? TRUST_LEARN_HEADER_CLEARANCE : TRUST_HEADER_CLEARANCE,
        'print:pt-0'
      )}
    >
      <TrustWorkshopNav />
      <TrustLabBanner
        asset={banner}
        copy={copy}
        compact={learnChapter}
        lede={pathname === TRUST_BASE ? TRUST_SUBTITLE : undefined}
        cta={
          pathname === TRUST_BASE
            ? { href: `${TRUST_LEARN_BASE}/${TRUST_CHAPTERS[0].slug}`, label: 'Start the lab' }
            : undefined
        }
      />
      {learnChapter ? null : <TrustBannerQuote asset={banner} />}
      {children}
    </div>
  )
}
