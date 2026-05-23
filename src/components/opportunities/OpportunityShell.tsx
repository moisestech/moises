'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { OpportunityNavItem } from '@/content/opportunities/types';
import { RECRUITING_HEADER_OFFSET } from '@/config/recruiting-layout';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type OpportunityShellProps = {
  children: React.ReactNode;
  navItems?: OpportunityNavItem[];
};

/** Viewport offset from top: sections whose top is above this line count as “passed” for scroll-spy (header + sticky mini-nav). */
const SECTION_SPY_OFFSET_PX = 186;

function StickyMiniNav({ items }: { items: OpportunityNavItem[] }) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
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
      setActiveId(raw);
    });
  }, [ids, idsKey]);

  useEffect(() => {
    if (!ids.length) return;

    const computeActive = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= SECTION_SPY_OFFSET_PX) current = id;
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
  }, [ids, idsKey]);

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
      className={opp.stickyNav}
      style={{ top: RECRUITING_HEADER_OFFSET }}
      aria-label="Section navigation"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-4 pb-1 text-sm whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
        {items.map((item) => {
          const active = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'rounded-full border px-3 py-1 transition-colors',
                active ? opp.stickyNavActive : opp.stickyNavIdle,
              )}
              aria-current={active ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export function OpportunityShell({ navItems, children }: OpportunityShellProps) {
  return (
    <div className={opp.shell}>
      {navItems?.length ? <StickyMiniNav items={navItems} /> : null}
      {children}
    </div>
  );
}
