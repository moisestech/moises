'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { WolfsonianImage, WolfsonianImageEffect, WolfsonianMediaHotspot } from '@/content/grants/wolfsonian-fellowship';
import type { WolfsonianSectionAccent } from '@/config/wolfsonian-section-theme';
import { WolfsonianImageLightbox } from './WolfsonianImageLightbox';
import { WolfsonianMediaOverlays } from './WolfsonianMediaOverlays';

export type WolfsonianMediaFrameProps = {
  image: WolfsonianImage;
  sectionId: string;
  accent: WolfsonianSectionAccent;
  isHero?: boolean;
  activeKey?: string | null;
  activeKeyword?: string | null;
  imageEffect?: WolfsonianImageEffect | null;
  citationStep?: string | null;
  hotspots?: WolfsonianMediaHotspot[];
  enableLightbox?: boolean;
};

export function WolfsonianMediaFrame({
  image,
  accent,
  isHero = false,
  activeKeyword,
  imageEffect,
  citationStep,
  hotspots = [],
  enableLightbox = true,
}: WolfsonianMediaFrameProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const effect = imageEffect ?? 'none';
  const aspectClass =
    image.aspect === 'portrait'
      ? 'aspect-[4/5] sm:aspect-[3/4]'
      : isHero
        ? 'aspect-[3/2] sm:aspect-[16/8]'
        : 'aspect-[5/4] sm:aspect-[4/3]';

  const frame = (
    <div className={cn('relative w-full overflow-hidden', aspectClass)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={isHero}
        className={cn(
          'object-contain bg-stone-100 transition duration-500 motion-reduce:transition-none dark:bg-neutral-950',
          effect === 'zoom' && 'scale-[1.02]',
        )}
        sizes={isHero ? '(max-width: 768px) 100vw, 1200px' : '(max-width: 768px) 100vw, 50vw'}
      />
      <WolfsonianMediaOverlays
        effect={effect}
        accent={accent}
        activeKeyword={activeKeyword}
        citationStep={citationStep}
        showNetwork={isHero}
      />
      {hotspots.map((hotspot) => (
        <span
          key={hotspot.id}
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 border bg-white/90 px-1.5 py-0.5 text-[0.6rem] uppercase tracking-wide dark:bg-neutral-900/90"
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
          aria-hidden="true"
        >
          {hotspot.label}
        </span>
      ))}
    </div>
  );

  return (
    <figure className={cn('overflow-hidden border bg-white dark:bg-neutral-900', accent.mediaBorder)}>
      {enableLightbox ? (
        <button
          type="button"
          className="group relative block w-full cursor-zoom-in text-left"
          onClick={() => setLightboxOpen(true)}
          aria-label={`View full size: ${image.alt}`}
        >
          {frame}
        </button>
      ) : (
        frame
      )}
      <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-700 dark:border-stone-700 dark:text-stone-300">
        {image.caption}
        {enableLightbox ? (
          <span className="mt-1 block text-xs text-stone-500 [@media(hover:hover)]:hidden dark:text-stone-400">
            Tap image to enlarge
          </span>
        ) : null}
        {process.env.NODE_ENV === 'development' && image.sectionAssetPath ? (
          <span className="mt-1 block text-xs text-stone-400">Expected: {image.sectionAssetPath}</span>
        ) : null}
      </figcaption>
      {enableLightbox ? (
        <WolfsonianImageLightbox image={image} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
      ) : null}
    </figure>
  );
}
