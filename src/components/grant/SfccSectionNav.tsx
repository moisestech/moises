'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  GRANT_DOSSIER_STICKY_NAV_SELECTOR,
  GRANT_DOSSIER_SUBNAV_HEIGHT_VAR,
  siteHeaderStickyTopClass,
} from '@/config/site-header-layout';
import {
  sfccAppliedWorks,
  sfccSectionForId,
  sfccSections,
  type SfccSectionId,
} from '@/content/grants/sfcc-2026';

export default function SfccSectionNav() {
  const [activeId, setActiveId] = useState<string>(sfccSections[0].id);
  const activeSection: SfccSectionId = sfccSectionForId(activeId);

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
    const ids = [
      ...sfccSections.map((section) => section.id),
      ...sfccAppliedWorks.map((sample) => sample.id),
    ];
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
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Application sections"
      data-grant-dossier-sticky-nav
      className={cn(
        'sticky z-30 -mx-4 mb-8 border-y border-stone-200 bg-white/95 backdrop-blur sm:-mx-6',
        siteHeaderStickyTopClass,
      )}
    >
      <p className="px-4 pt-2 text-[10px] uppercase tracking-widest text-stone-500 sm:px-6">
        Jump to
      </p>
      <ul className="flex gap-2 overflow-x-auto overscroll-x-contain px-4 pt-2 sm:px-6 [-webkit-overflow-scrolling:touch]">
        {sfccSections.map((section) => {
          const active = section.id === activeSection;
          return (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  'inline-flex min-h-10 items-center border px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors',
                  active
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-300 text-stone-700 hover:border-stone-500',
                )}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 overflow-x-auto overscroll-x-contain px-4 py-2.5 sm:px-6 [-webkit-overflow-scrolling:touch]">
        {sfccAppliedWorks.map((sample) => {
          const active = sample.id === activeId;
          return (
            <li key={sample.id} className="shrink-0">
              <a
                href={`#${sample.id}`}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  'inline-flex min-h-10 items-center border px-3 py-1.5 text-xs font-medium transition-colors',
                  active
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-200 text-stone-700 hover:border-stone-400',
                )}
              >
                {sample.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
