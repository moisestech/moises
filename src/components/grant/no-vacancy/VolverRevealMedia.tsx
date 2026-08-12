'use client';

import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NvPlaceholderFigure } from '@/components/grant/no-vacancy/NoVacancyUi';
import { VolverIcon, type VolverIconId } from '@/components/grant/no-vacancy/VolverIcons';
import { toGrantMedia, type VolverMediaAsset } from '@/content/grants/no-vacancy-2026/volver-a-valer-media';

export type VolverRevealConfig = {
  iconId: VolverIconId;
  caption: string;
  media?: VolverMediaAsset;
};

export function VolverRevealMedia({
  primary,
  reveal,
  aspectClass = 'aspect-[16/10]',
  priority = false,
}: {
  primary: VolverMediaAsset;
  reveal: VolverRevealConfig;
  aspectClass?: string;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group/reveal relative"
      onMouseEnter={() => {
        if (window.matchMedia('(hover: hover)').matches) setOpen(true);
      }}
      onMouseLeave={() => {
        if (window.matchMedia('(hover: hover)').matches) setOpen(false);
      }}
    >
      <NvPlaceholderFigure media={toGrantMedia(primary)} aspectClass={aspectClass} priority={priority} />

      <button
        type="button"
        className={cn(
          'mt-3 inline-flex min-h-11 items-center gap-2 border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 dark:focus-visible:outline-stone-200',
          open
            ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
            : 'border-stone-300 text-stone-700 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300',
        )}
        aria-expanded={open}
        aria-controls={`reveal-${primary.id}`}
        onClick={() => setOpen((v) => !v)}
      >
        <VolverIcon id={reveal.iconId} />
        {open ? 'Hide alternate view' : 'Reveal icon / detail'}
      </button>

      <div
        id={`reveal-${primary.id}`}
        hidden={!open}
        className={cn(
          'mt-4 overflow-hidden border border-dashed border-stone-300 bg-stone-50/80 p-4 dark:border-stone-600 dark:bg-neutral-900/60',
          open && !reduceMotion && 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-1 motion-safe:duration-200',
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-stone-300 text-stone-800 dark:border-stone-600 dark:text-stone-100">
            <VolverIcon id={reveal.iconId} className="h-10 w-10" title={reveal.caption} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1">
              Reveal slot — replace with your icon or still
            </p>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{reveal.caption}</p>
            {reveal.media ? (
              <div className="mt-4">
                <NvPlaceholderFigure media={toGrantMedia(reveal.media)} aspectClass="aspect-[4/3]" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
