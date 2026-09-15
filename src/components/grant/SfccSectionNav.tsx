'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  GRANT_DOSSIER_STICKY_NAV_SELECTOR,
  GRANT_DOSSIER_SUBNAV_HEIGHT_VAR,
  siteHeaderStickyTopClass,
} from '@/config/site-header-layout';
import { sfccSections } from '@/content/grants/sfcc-2026';

export default function SfccSectionNav() {
  const [activeId, setActiveId] = useState(sfccSections[0].id);

  useEffect(() => {
    const syncSubnavHeight = () => {
      const nodes = document.querySelectorAll(GRANT_DOSSIER_STICKY_NAV_SELECTOR);
      let height = 0;
      nodes.forEach((node) => {
        const el = node as HTMLElement;
        if (el.offsetParent === null) return;
        height = Math.max(height, el.getBoundingClientRect().height);
      });
      if (height > 0) {
        document.documentElement.style.setProperty(
          GRANT_DOSSIER_SUBNAV_HEIGHT_VAR,
          `${Math.round(height)}px`,
        );
      }
    };

    syncSubnavHeight();
    const nodes = document.querySelectorAll(GRANT_DOSSIER_STICKY_NAV_SELECTOR);
    const ro = new ResizeObserver(syncSubnavHeight);
    nodes.forEach((node) => ro.observe(node));
    window.addEventListener('resize', syncSubnavHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncSubnavHeight);
    };
  }, []);

  useEffect(() => {
    const ids = sfccSections.map((section) => section.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.id;
        if (top) setActiveId(top);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Application sections"
      data-grant-dossier-sticky-nav
      className={cn(
        'sticky z-30 -mx-4 mb-10 border-y border-stone-300 bg-[#f7f4ef]/95 backdrop-blur sm:-mx-6 dark:border-stone-700 dark:bg-neutral-950/95',
        siteHeaderStickyTopClass,
      )}
    >
      <p className="px-4 pt-2 text-[10px] uppercase tracking-widest text-stone-500 sm:px-6 dark:text-stone-400">
        Jump to
      </p>
      <ul className="flex gap-2 overflow-x-auto overscroll-x-contain px-4 py-2.5 sm:px-6 [-webkit-overflow-scrolling:touch]">
        {sfccSections.map((section) => {
          const active = section.id === activeId;
          return (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  'inline-flex min-h-11 items-center border px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors',
                  active
                    ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                    : 'border-stone-300 text-stone-700 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300',
                )}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
