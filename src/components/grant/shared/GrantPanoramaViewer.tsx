'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

export type GrantPanoramaViewerProps = {
  posterSrc?: string;
  panoramaSrc?: string;
  alt: string;
  caption?: string;
  label?: string;
  /** When true or when panoramaSrc is missing, show labeled poster only — no dead Explore button */
  placeholder?: boolean;
  className?: string;
};

const EquirectCanvas = dynamic(
  () => import('@/components/grant/shared/GrantEquirectCanvas').then((m) => m.GrantEquirectCanvas),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-stone-900 animate-pulse" aria-hidden /> },
);

export function GrantPanoramaViewer({
  posterSrc,
  panoramaSrc,
  alt,
  caption,
  label,
  placeholder = false,
  className = '',
}: GrantPanoramaViewerProps) {
  const [explore, setExplore] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const canExplore = Boolean(panoramaSrc) && !placeholder && !reducedMotion;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) setExplore(false);
  }, [reducedMotion]);

  return (
    <figure className={`w-full ${className}`}>
      {label ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200/90 mb-2">
          {label}
        </p>
      ) : null}

      <div className="relative aspect-[16/10] w-full overflow-hidden border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-900">
        {explore && panoramaSrc && canExplore ? (
          <EquirectCanvas src={panoramaSrc} alt={alt} />
        ) : posterSrc ? (
          <Image
            src={posterSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 56rem"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center px-6 border-dashed border-stone-400"
            role="img"
            aria-label={alt}
          >
            <p className="text-sm text-stone-500 dark:text-stone-400 text-center max-w-md">{label ?? alt}</p>
          </div>
        )}

        {placeholder || !panoramaSrc ? (
          <div className="absolute top-3 left-3 rounded bg-black/75 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
            360 study pending
          </div>
        ) : null}

        {canExplore ? (
          <div className="absolute bottom-3 right-3">
            <button
              type="button"
              onClick={() => setExplore((v) => !v)}
              className="min-h-11 px-4 py-2 text-sm font-medium border border-stone-800 bg-white/95 text-stone-900 transition-colors hover:bg-stone-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 dark:border-stone-200 dark:bg-neutral-950/95 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-black dark:focus-visible:outline-stone-200"
              aria-pressed={explore}
            >
              {explore ? 'Exit 360' : 'Explore 360'}
            </button>
          </div>
        ) : null}
      </div>

      {caption ? (
        <figcaption className="mt-2 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          {caption}
          {reducedMotion && panoramaSrc && !placeholder ? (
            <span className="block mt-1 text-xs">360 interaction paused (reduced motion preference).</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
