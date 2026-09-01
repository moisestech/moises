'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { OpportunityNavItem } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { HorizontalOverflowNav } from '@/components/nav/HorizontalOverflowNav';
import { cn } from '@/lib/utils';

export type OpportunitySectionNavAccent = {
  navActive: string;
  navActiveText: string;
  navIdle: string;
  mediaBorder?: string;
};

type OpportunityShellProps = {
  children: React.ReactNode;
  navItems?: OpportunityNavItem[];
  getSectionNavAccent?: (sectionId: string) => OpportunitySectionNavAccent | undefined;
  /** Tailwind top classes for sticky subnav (e.g. career-packet mobile header). */
  stickyNavTopClassName?: string;
  /** Fixed scroll-spy offset; omit to measure sticky nav bottom when `stickyNavTopClassName` is set. */
  sectionSpyOffsetPx?: number;
};

/** Viewport offset from top: sections whose top is above this line count as “passed” for scroll-spy (header + sticky mini-nav). */
const SECTION_SPY_OFFSET_PX = 186;

function StickyMiniNav({
  items,
  getSectionNavAccent,
  stickyNavTopClassName,
  sectionSpyOffsetPx,
}: {
  items: OpportunityNavItem[];
  getSectionNavAccent?: (sectionId: string) => OpportunitySectionNavAccent | undefined;
  stickyNavTopClassName?: string;
  sectionSpyOffsetPx?: number;
}) {
  const navRef = useRef<HTMLElement>(null);
  const [measuredSpyOffset, setMeasuredSpyOffset] = useState(SECTION_SPY_OFFSET_PX);
  const spyOffset = sectionSpyOffsetPx ?? measuredSpyOffset;
  const ids = useMemo(() => items.filter((i) => !i.href).map((i) => i.id), [items]);
  const idsKey = ids.join('|');

  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    setActiveId((prev) => (ids.includes(prev) ? prev : ids[0] ?? ''));
  }, [ids, idsKey]);

  useEffect(() => {
    if (!ids.length) return;
    const raw = window.location.hash.replace(/^#/, '');
    if (!raw || !ids.includes(raw)) return;
    const el = document.getElementById(raw);
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
    });
    setActiveId(raw);
  }, [ids, idsKey]);

  useEffect(() => {
    if (sectionSpyOffsetPx != null || !stickyNavTopClassName) return;

    const measure = () => {
      if (!navRef.current) return;
      setMeasuredSpyOffset(Math.round(navRef.current.getBoundingClientRect().bottom + 8));
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [sectionSpyOffsetPx, stickyNavTopClassName]);

  useEffect(() => {
    if (!ids.length) return;

    const computeActive = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= spyOffset) current = id;
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    computeActive();
    window.addEventListener('scroll', computeActive, { passive: true });
    window.addEventListener('resize', computeActive);
    return () => {
      window.removeEventListener('scroll', computeActive);
      window.removeEventListener('resize', computeActive);
    };
  }, [ids, idsKey, spyOffset]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduceMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setActiveId(id);
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        opp.stickyNav,
        getSectionNavAccent?.(activeId)?.mediaBorder,
        stickyNavTopClassName ?? 'top-[8.4rem]',
      )}
      aria-label="Section navigation"
    >
      <HorizontalOverflowNav
        asNav={false}
        ariaLabel="Section navigation"
        activeKey={activeId}
        className="mx-auto max-w-5xl px-3 sm:px-4"
        scrollerClassName="gap-1.5 pb-1.5 sm:pb-1"
      >
        {items.map((item) => {
          const accent = getSectionNavAccent?.(item.id);
          const outbound = Boolean(item.href);
          const active = !outbound && activeId === item.id;
          const short = item.shortLabel ?? item.label;
          const className = cn(
            'inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 sm:min-h-9 sm:px-3 sm:py-1.5 md:min-h-0',
            active && accent
              ? cn(accent.navActive, accent.navActiveText)
              : active
                ? opp.stickyNavActive
                : accent
                  ? cn(accent.navIdle, 'text-stone-600 dark:text-stone-400')
                  : opp.stickyNavIdle,
          );
          if (outbound && item.href) {
            const external = item.href.startsWith('http');
            return (
              <a
                key={item.id}
                href={item.href}
                className={className}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="md:hidden">{short}</span>
                <span className="hidden md:inline">{item.label}</span>
              </a>
            );
          }
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-nav-active={active ? 'true' : undefined}
              className={className}
              aria-current={active ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              <span className="md:hidden">{short}</span>
              <span className="hidden md:inline">{item.label}</span>
            </a>
          );
        })}
      </HorizontalOverflowNav>
    </nav>
  );
}

export function OpportunityShell({
  navItems,
  children,
  getSectionNavAccent,
  stickyNavTopClassName,
  sectionSpyOffsetPx,
}: OpportunityShellProps) {
  return (
    <div className={opp.shell}>
      {navItems?.length ? (
        <StickyMiniNav
          items={navItems}
          getSectionNavAccent={getSectionNavAccent}
          stickyNavTopClassName={stickyNavTopClassName}
          sectionSpyOffsetPx={sectionSpyOffsetPx}
        />
      ) : null}
      {children}
    </div>
  );
}
