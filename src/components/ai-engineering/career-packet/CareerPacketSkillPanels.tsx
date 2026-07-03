'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { techLogoRegistry } from '@/content/evidence/tech-logos';
import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';
import { resolveCareerPacketIllustration } from '@/content/ai-engineering/career-packet-visuals';

type CareerPacketTechLogoStripProps = {
  logoIds: string[];
  accent: CareerPacketSectionAccent;
  active?: boolean;
  size?: 'sm' | 'md';
  className?: string;
};

export function CareerPacketTechLogoStrip({
  logoIds,
  accent,
  active = false,
  size = 'sm',
  className,
}: CareerPacketTechLogoStripProps) {
  if (!logoIds.length) return null;

  const box = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const img = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';

  return (
    <div className={cn('flex flex-wrap gap-1.5', className)} aria-hidden>
      {logoIds.map((id) => {
        const entry = techLogoRegistry[id];
        if (!entry?.imageSrc) return null;
        return (
          <span
            key={id}
            className={cn(
              'flex items-center justify-center rounded-md border bg-white/90 transition duration-300 motion-reduce:transition-none dark:bg-stone-900/90',
              box,
              accent.mediaBorder,
              active
                ? cn(accent.chipActive, 'scale-105 shadow-sm')
                : 'opacity-70 grayscale-[0.15] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:grayscale-0',
            )}
            title={entry.label}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.imageSrc}
              alt=""
              className={cn('object-contain', img, entry.imageClassName)}
            />
          </span>
        );
      })}
    </div>
  );
}

type CareerPacketIllustrationPanelProps = {
  title: string;
  caption: string;
  logoIds?: string[];
  illustration: {
    src: string;
    alt: string;
    local?: boolean;
  };
  accent: CareerPacketSectionAccent;
  panelKey: string;
  /** Portrait crops for recruiter snapshot banners; default landscape for role-fit. */
  orientation?: 'landscape' | 'portrait';
};

export function CareerPacketIllustrationPanel({
  title,
  caption,
  logoIds = [],
  illustration,
  accent,
  panelKey,
  orientation = 'landscape',
}: CareerPacketIllustrationPanelProps) {
  const resolvedSrc = resolveCareerPacketIllustration(illustration.src, illustration.local);
  const remote = resolvedSrc.startsWith('http');
  const frameClass =
    orientation === 'portrait'
      ? 'aspect-[3/4] max-h-[min(56vh,540px)] w-full'
      : 'aspect-[4/3] w-full';
  const imageClass =
    orientation === 'portrait'
      ? 'object-contain object-center'
      : 'object-cover object-top';

  return (
    <div
      className={cn(
        'career-packet-skill-panel relative overflow-hidden rounded-xl border bg-white shadow-sm dark:bg-stone-900',
        accent.mediaBorder,
      )}
      style={{ '--cp-glow-rgb': accent.mediaGlowRgb } as React.CSSProperties}
      aria-live="polite"
    >
      <div className={cn('group relative overflow-hidden bg-stone-100 dark:bg-stone-800', frameClass)}>
        <div
          key={panelKey}
          className="absolute inset-0 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-300 motion-reduce:animate-none"
        >
          {illustration.local && !remote ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={resolvedSrc}
              alt={illustration.alt}
              className={cn('h-full w-full transition duration-500 motion-reduce:transition-none [@media(hover:hover)]:group-hover:scale-[1.02]', imageClass)}
            />
          ) : remote ? (
            <Image
              src={resolvedSrc}
              alt={illustration.alt}
              fill
              className={cn('transition duration-500 motion-reduce:transition-none [@media(hover:hover)]:group-hover:scale-[1.02]', imageClass)}
              sizes={orientation === 'portrait' ? '(max-width: 1024px) 100vw, 320px' : '(max-width: 1024px) 100vw, 420px'}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={resolvedSrc}
              alt={illustration.alt}
              className={cn('h-full w-full transition duration-500 motion-reduce:transition-none [@media(hover:hover)]:group-hover:scale-[1.02]', imageClass)}
            />
          )}
        </div>
        <div className="career-packet-portrait-glow pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
          <div className={cn('absolute inset-0 bg-gradient-to-t opacity-80', accent.mediaOverlay)} />
        </div>
        {logoIds.length ? (
          <div className="absolute bottom-3 left-3 right-3 z-[2] flex flex-wrap gap-1.5">
            <CareerPacketTechLogoStrip logoIds={logoIds} accent={accent} active size="md" />
          </div>
        ) : null}
      </div>
      <div className="border-t border-stone-200 bg-white/95 px-4 py-3 backdrop-blur-sm dark:border-stone-700 dark:bg-stone-900/95">
        <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>{title}</p>
        <p className={cn('mt-1 text-sm text-stone-600 dark:text-stone-400')}>{caption}</p>
      </div>
    </div>
  );
}
