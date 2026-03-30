'use client'

import Link from 'next/link'
import { WORKSHOP_NAV_PROGRAMS, WORKSHOP_NAV_SITE } from '@/config/site-navigation'

function NavLink(item: { label: string; path: string; external?: boolean }) {
  const className =
    'whitespace-nowrap rounded px-1.5 py-0.5 text-[11px] text-zinc-300 transition-colors hover:bg-white/5 hover:text-white sm:text-xs'

  if (item.external) {
    return (
      <a href={item.path} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
      </a>
    )
  }
  return (
    <Link href={item.path} className={className}>
      {item.label}
    </Link>
  )
}

/**
 * Compact strip for `(workshop)/workshop/*`: programs · site links.
 */
export function WorkshopAreaTopNav() {
  return (
    <nav
      className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/95 px-2 py-2 backdrop-blur-md sm:px-4"
      aria-label="Workshop navigation"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-1 gap-y-1.5 sm:justify-start sm:gap-x-0.5">
        <span className="mr-1 hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:inline">
          Programs
        </span>
        {WORKSHOP_NAV_PROGRAMS.map((item) => (
          <NavLink key={item.path} {...item} />
        ))}
        <span
          className="mx-1 hidden text-zinc-600 sm:inline"
          aria-hidden
        >
          |
        </span>
        <span className="mr-1 shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 sm:hidden">
          Site
        </span>
        {WORKSHOP_NAV_SITE.map((item) => (
          <NavLink key={item.path} {...item} />
        ))}
      </div>
    </nav>
  )
}
