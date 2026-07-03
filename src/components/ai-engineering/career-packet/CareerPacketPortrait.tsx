'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';

type CareerPacketPortraitProps = {
  src: string;
  alt: string;
  accent: CareerPacketSectionAccent;
  glowActive?: boolean;
  activeKeyword?: string | null;
  className?: string;
};

export function CareerPacketPortrait({
  src,
  alt,
  accent,
  glowActive = false,
  activeKeyword,
  className,
}: CareerPacketPortraitProps) {
  const showGlow = glowActive || Boolean(activeKeyword);

  return (
    <figure
      className={cn(
        'career-packet-portrait overflow-hidden rounded-xl border bg-stone-100 dark:bg-stone-800',
        accent.mediaBorder,
        showGlow && 'career-packet-portrait--glow',
        className,
      )}
      style={{ '--cp-glow-rgb': accent.mediaGlowRgb } as React.CSSProperties}
    >
      <button type="button" className="group relative block w-full cursor-default text-left" aria-label={alt}>
        <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden">
          <Image src={src} alt={alt} fill className="object-cover transition duration-500 motion-reduce:transition-none [@media(hover:hover)]:group-hover:scale-[1.015] [@media(hover:hover)]:group-hover:brightness-105" sizes="(max-width: 1024px) 100vw, 400px" priority />
          <div className="career-packet-portrait-glow pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
            <div className={cn('absolute inset-0 bg-gradient-to-t opacity-80', accent.mediaOverlay)} />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background: `radial-gradient(ellipse at 50% 35%, rgba(var(--cp-glow-rgb), 0.42), transparent 62%)`,
              }}
            />
          </div>
        </div>
      </button>
      <figcaption className="border-t border-stone-200 px-4 py-2 text-center text-xs text-stone-500 dark:border-stone-700 dark:text-stone-400">
        <span className="[@media(hover:hover)]:hidden">Tap keywords to explore stack fit</span>
        <span className="hidden [@media(hover:hover)]:inline">Hover paragraphs and keywords to highlight stack fit</span>
      </figcaption>
    </figure>
  );
}
