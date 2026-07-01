'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  grantDossierSectionScrollMarginClass,
  readGrantDossierScrollThresholdPx,
  siteHeaderExpandedPaddingTopClass,
} from '@/config/site-header-layout';
import {
  getWolfsonianAccent,
  wolfsonianPresentationPathIds,
} from '@/config/wolfsonian-section-theme';
import { dossierTypography } from '@/components/grant/dossier/GrantDossierUi';
import { wolfsonianStoryBlocks } from '@/content/grants/wolfsonian-fellowship';
import { WolfsonianStoryBlockView } from '@/components/grant/wolfsonian/WolfsonianStoryBlock';

export default function WolfsonianFellowshipProposalPage() {
  const [activeSectionId, setActiveSectionId] = useState(wolfsonianStoryBlocks[0]?.id ?? 'hero');

  const navItems = useMemo(
    () =>
      wolfsonianStoryBlocks.map((block) => ({
        id: block.id,
        label: block.navLabel,
      })),
    [],
  );

  const presentationPathLabels = useMemo(
    () =>
      wolfsonianPresentationPathIds
        .map((id) => navItems.find((item) => item.id === id)?.label)
        .filter(Boolean)
        .join(' · '),
    [navItems],
  );

  const navIds = useMemo(() => navItems.map((item) => item.id), [navItems]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && navIds.includes(hash)) {
      setActiveSectionId(hash);
    }
  }, [navIds]);

  useEffect(() => {
    const updateScrollOffset = () => {
      const threshold = readGrantDossierScrollThresholdPx();
      document.documentElement.style.setProperty('--wolfsonian-scroll-offset', `${threshold}px`);
    };

    updateScrollOffset();
    window.addEventListener('resize', updateScrollOffset);
    return () => window.removeEventListener('resize', updateScrollOffset);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = readGrantDossierScrollThresholdPx();
      let current = navIds[0] ?? 'hero';
      for (const id of navIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSectionId((prev) => (prev === current ? prev : current));
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [navIds]);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setActiveSectionId(id);
  }, []);

  const activeAccent = getWolfsonianAccent(activeSectionId);

  return (
    <main
      className={cn(
        'min-h-screen bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100',
        siteHeaderExpandedPaddingTopClass,
      )}
    >
      <div className="mx-auto w-[min(96vw,1200px)] px-4 pb-20 sm:px-8">
        <nav
          data-grant-dossier-sticky-nav
          aria-label="Wolfsonian section navigation"
          className={cn(
            'sticky z-40 mb-10 border bg-white/95 px-3 py-3 backdrop-blur dark:bg-neutral-900/95',
            'top-[var(--site-header-height,5rem)] transition-[top] duration-300 ease-in-out',
            activeAccent.mediaBorder,
          )}
        >
          <p className={cn('mb-2 hidden text-[0.65rem] uppercase tracking-[0.15em] md:block', activeAccent.eyebrow)}>
            Presentation path — {presentationPathLabels}
          </p>
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white/95 to-transparent dark:from-neutral-900/95 lg:hidden"
              aria-hidden="true"
            />
            <div className="-mx-1 overflow-x-auto px-1 pb-0.5">
              <div className="flex min-w-max gap-2">
                {navItems.map((item) => {
                  const accent = getWolfsonianAccent(item.id);
                  const isActive = activeSectionId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={cn(
                        'relative inline-flex min-h-11 items-center rounded-full border px-3 py-2.5 text-xs font-medium uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                        isActive
                          ? cn(accent.navActive, accent.navActiveText)
                          : accent.navIdle,
                      )}
                      aria-current={isActive ? 'true' : undefined}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      {item.label}
                      {isActive ? (
                        <span
                          className={cn(
                            'absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full',
                            accent.progressDot,
                          )}
                          aria-hidden="true"
                        />
                      ) : null}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        <article className={cn('space-y-20 sm:space-y-28', grantDossierSectionScrollMarginClass)}>
          {wolfsonianStoryBlocks.map((block, index) => (
            <WolfsonianStoryBlockView key={block.id} block={block} isHero={index === 0} />
          ))}
        </article>

        <footer className={cn('mt-16 border-t border-stone-300 pt-8 dark:border-stone-700', dossierTypography.meta)}>
          <p>
            The Archive Dreams in Public — Wolfsonian-FIU Creative Fellowship proposal by Moises Sanabria.
          </p>
        </footer>
      </div>
    </main>
  );
}
