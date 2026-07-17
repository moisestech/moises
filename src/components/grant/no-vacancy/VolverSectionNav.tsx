'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { siteHeaderStickyTopClass } from '@/config/site-header-layout';
import {
  type VolverChapter,
  type VolverChapterAccent,
} from '@/content/grants/no-vacancy-2026/volver-a-valer';
import { VolverIcon, chapterIconId } from '@/components/grant/no-vacancy/VolverIcons';

export type VolverDetailMode = 'scan' | 'full';

type VolverInteractionContextValue = {
  detailMode: VolverDetailMode;
  setDetailMode: (mode: VolverDetailMode) => void;
  /** Incremented when Scan is chosen — sections close expanders */
  scanEpoch: number;
};

const VolverInteractionContext = createContext<VolverInteractionContextValue | null>(null);

export function useVolverInteraction() {
  return useContext(VolverInteractionContext);
}

const chipAccent: Record<VolverChapterAccent, string> = {
  arrival: 'border-[#C4A574] text-[#8B6B3D] dark:border-[#D4B896] dark:text-[#D4B896]',
  recognition: 'border-[#1F6B5A] text-[#1F6B5A] dark:border-[#7EB8A8] dark:text-[#7EB8A8]',
  embodiment: 'border-[#8B6B3D] text-[#8B6B3D] dark:border-[#C4A574] dark:text-[#C4A574]',
  exchange: 'border-stone-900 text-stone-900 dark:border-stone-100 dark:text-stone-100',
  operations: 'border-[#5C6670] text-[#5C6670] dark:border-stone-400 dark:text-stone-400',
};

function ScrollProgress({ reduceMotion }: { reduceMotion: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const next = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(next);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className="h-0.5 w-full bg-stone-200/80 dark:bg-stone-800"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Reading progress"
    >
      <div
        className={cn(
          'h-full bg-stone-900 dark:bg-stone-100',
          !reduceMotion && 'transition-[width] duration-150 ease-out',
        )}
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export function VolverSectionNav({
  chapters,
  detailMode,
  onDetailModeChange,
}: {
  chapters: readonly VolverChapter[];
  detailMode: VolverDetailMode;
  onDetailModeChange: (mode: VolverDetailMode) => void;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? '');

  useEffect(() => {
    const ids = chapters.map((c) => c.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.id;
        if (top) setActiveId(top);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav
      aria-label="Proposal sections"
      data-grant-dossier-sticky-nav
      className={cn(
        'sticky z-30 -mx-4 sm:-mx-6 mb-10 border-y border-stone-200 bg-[#f7f4ef]/95 backdrop-blur dark:border-stone-700 dark:bg-neutral-950/95',
        siteHeaderStickyTopClass,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 pt-2">
        <p className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400">
          Navigate proposal
        </p>
        <div
          className="flex gap-1"
          role="group"
          aria-label="Detail density"
        >
          {(['scan', 'full'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => onDetailModeChange(mode)}
              aria-pressed={detailMode === mode}
              className={cn(
                'min-h-9 px-3 text-[10px] font-semibold uppercase tracking-wide border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 dark:focus-visible:outline-stone-200',
                detailMode === mode
                  ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                  : 'border-stone-300 text-stone-600 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300',
              )}
            >
              {mode === 'scan' ? 'Scan' : 'Full detail'}
            </button>
          ))}
        </div>
      </div>

      <ul className="flex gap-2 overflow-x-auto overscroll-x-contain px-4 sm:px-6 py-2.5 [-webkit-overflow-scrolling:touch]">
        {chapters.map((chapter) => {
          const active = chapter.id === activeId;
          const iconId = chapterIconId(chapter.id);
          return (
            <li key={chapter.id} className="shrink-0 group/chip relative">
              <a
                href={`#${chapter.id}`}
                aria-current={active ? 'true' : undefined}
                title={chapter.label}
                className={cn(
                  'inline-flex min-h-11 items-center gap-2 border px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 dark:focus-visible:outline-stone-200',
                  active
                    ? 'border-transparent bg-stone-900 text-white dark:bg-stone-100 dark:text-black'
                    : cn(
                        'border-stone-300 text-stone-600 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300 dark:hover:border-stone-400',
                        chipAccent[chapter.accent],
                      ),
                  !active &&
                    'hover:underline hover:decoration-2 hover:underline-offset-4 focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4',
                )}
              >
                <VolverIcon id={iconId} className="opacity-80" />
                <span className="tabular-nums opacity-70 hidden sm:inline">{chapter.number}</span>
                <span>{chapter.label}</span>
              </a>
              <span
                className="pointer-events-none absolute left-1/2 top-full z-40 mt-1 hidden -translate-x-1/2 whitespace-nowrap border border-stone-200 bg-white px-2 py-1 text-[10px] text-stone-600 opacity-0 shadow-sm transition-opacity [@media(hover:hover)]:group-hover/chip:opacity-100 [@media(hover:hover)]:group-focus-within/chip:opacity-100 dark:border-stone-700 dark:bg-neutral-900 dark:text-stone-300 sm:block"
                aria-hidden
              >
                {chapter.number} · {chapter.label}
              </span>
            </li>
          );
        })}
      </ul>
      <ScrollProgress reduceMotion={reduceMotion} />
    </nav>
  );
}

export function VolverInteractionProvider({ children }: { children: ReactNode }) {
  const [detailMode, setDetailModeState] = useState<VolverDetailMode>('scan');
  const [scanEpoch, setScanEpoch] = useState(0);

  const setDetailMode = useCallback((mode: VolverDetailMode) => {
    setDetailModeState(mode);
    if (mode === 'scan') setScanEpoch((n) => n + 1);
  }, []);

  const value = useMemo(
    () => ({ detailMode, setDetailMode, scanEpoch }),
    [detailMode, setDetailMode, scanEpoch],
  );

  return <VolverInteractionContext.Provider value={value}>{children}</VolverInteractionContext.Provider>;
}

function VolverInteractiveChromeInner({
  chapters,
  children,
}: {
  chapters: readonly VolverChapter[];
  children: ReactNode;
}) {
  const ctx = useVolverInteraction();
  if (!ctx) return null;

  return (
    <>
      <VolverSectionNav
        chapters={chapters}
        detailMode={ctx.detailMode}
        onDetailModeChange={ctx.setDetailMode}
      />
      {children}
    </>
  );
}

/** Client shell: sticky nav + Scan/Full detail context for expanders */
export function VolverInteractiveChrome({
  chapters,
  children,
}: {
  chapters: readonly VolverChapter[];
  children: ReactNode;
}) {
  return (
    <VolverInteractionProvider>
      <VolverInteractiveChromeInner chapters={chapters}>{children}</VolverInteractiveChromeInner>
    </VolverInteractionProvider>
  );
}
