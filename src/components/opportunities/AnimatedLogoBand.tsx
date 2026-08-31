'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';

export type AnimatedLogoBandProps = {
  logos: LogoBandItem[];
  /** Screen-reader label for the decorative strip */
  ariaLabel?: string;
  className?: string;
  /** Break out of horizontal padding for edge-to-edge band */
  bleed?: boolean;
  /** Tailwind animation duration override, e.g. `duration-[60s]` */
  durationClassName?: string;
};

/**
 * Infinite horizontal marquee of partner logos. Duplicates the list for a seamless loop.
 * Respects `prefers-reduced-motion` (animation disabled).
 */
export function AnimatedLogoBand({
  logos,
  ariaLabel = 'Technology and platform partners',
  className,
  bleed = false,
  durationClassName,
}: AnimatedLogoBandProps) {
  if (!logos.length) return null;

  const track = [...logos, ...logos];

  return (
    <div
      className={cn(
        'border-y border-stone-200 dark:border-stone-700 bg-gradient-to-b from-stone-50 to-white dark:from-stone-900 dark:to-stone-950 py-4 shadow-inner',
        bleed && '-mx-3 w-[calc(100%+1.5rem)] sm:-mx-4 sm:w-[calc(100%+2rem)]',
        className,
      )}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="pointer-events-none select-none overflow-hidden">
        <div
          className={cn(
            'flex w-max items-center motion-reduce:animate-none animate-logo-marquee [animation-duration:48s]',
            durationClassName,
          )}
        >
          {track.map((logo, index) => {
            const h = logo.height ?? 36;
            const w = Math.round(h * 3.2);
            return (
              <div
                key={`${logo.src}-${index}`}
                className="mx-6 flex shrink-0 items-center justify-center sm:mx-10"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={w}
                  height={h}
                  className="h-10 w-auto max-w-[min(160px,30vw)] object-contain opacity-[0.92] transition-opacity hover:opacity-100 sm:h-11"
                  sizes="(max-width: 640px) 30vw, 160px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
