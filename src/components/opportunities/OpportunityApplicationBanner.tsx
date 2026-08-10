'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { ApplicationBanner } from '@/content/opportunities/types';

type OpportunityApplicationBannerProps = {
  banner?: ApplicationBanner;
  className?: string;
};

/**
 * Shared height-locked strip — same chrome on every opportunity.
 * Sharp art fills this height; sides get blurred fill when the viewport is wider than the art.
 */
export const APPLICATION_BANNER_FRAME =
  'relative h-[160px] w-full sm:h-[200px] md:h-[248px] lg:h-[288px] xl:h-[312px]';

const coverFrame =
  'relative aspect-[21/9] min-h-[120px] w-full max-h-[min(42vh,420px)] sm:aspect-[2.8/1] sm:max-h-[min(38vh,380px)]';

type BannerLayerProps = {
  src: string;
  alt: string;
  remote: boolean;
  presentation: 'contain-blur' | 'cover';
  intrinsicRatio?: number;
  className?: string;
  priority?: boolean;
};

function BannerLayer({
  src,
  alt,
  remote,
  presentation,
  intrinsicRatio,
  className,
  priority,
}: BannerLayerProps) {
  const isSvgLocal = !remote && src.endsWith('.svg');

  if (presentation === 'contain-blur') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden', className)}>
        {/* Blurred ambient fill — same asset, cover + blur */}
        {isSvgLocal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-2xl"
          />
        ) : (
          <Image
            src={src}
            alt=""
            aria-hidden
            fill
            className="scale-125 object-cover opacity-70 blur-2xl"
            sizes="100vw"
            priority={priority}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-stone-950/15 via-transparent to-stone-950/20 dark:from-black/35 dark:to-black/40"
          aria-hidden
        />

        {/* Sharp art — full frame height; width from intrinsic ratio */}
        <div className="relative z-[1] flex h-full w-full items-center justify-center">
          {isSvgLocal ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="h-full w-auto max-w-full object-contain object-center"
            />
          ) : intrinsicRatio && intrinsicRatio > 0 ? (
            <div
              className="relative h-full max-w-full"
              style={{ aspectRatio: `${intrinsicRatio} / 1` }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, min(100vw, 1200px)"
                priority={priority}
              />
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-center"
              sizes="100vw"
              priority={priority}
            />
          )}
        </div>
      </div>
    );
  }

  if (isSvgLocal) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={cn('h-full w-full object-cover object-top', className)} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn('object-cover object-top', className)}
      sizes="100vw"
      priority={priority}
    />
  );
}

/**
 * Full-viewport-width banner directly under the fixed recruiting header.
 *
 * Default presentation (`contain-blur`):
 * - Shared fixed-height strip (legible consistency across opportunities)
 * - Sharp art fills the strip’s **full height** (never crushed by ultra-wide cover)
 * - Same image blurred + covered behind for side fill
 *
 * Pass `intrinsicRatio` (width÷height) so the sharp layer keeps the asset’s true aspect.
 * Use `presentation: 'cover'` only for cinematic assets designed to survive crop.
 *
 * @see docs/opportunities/application-banners.md
 */
export function OpportunityApplicationBanner({ banner, className }: OpportunityApplicationBannerProps) {
  if (!banner?.src) return null;

  const remote = banner.src.startsWith('http');
  const presentation = banner.presentation ?? 'contain-blur';
  const frame =
    presentation === 'cover'
      ? coverFrame
      : cn(APPLICATION_BANNER_FRAME, banner.frameClass);

  return (
    <div
      className={cn(
        'relative left-1/2 mb-8 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden shadow-sm dark:shadow-none',
        opp.bannerBorder,
        'bg-stone-200 dark:bg-stone-900',
        className,
      )}
    >
      <div className={cn(frame, presentation === 'cover' ? banner.aspectClass : undefined)}>
        {banner.srcExtraWide && banner.srcWide ? (
          <>
            <BannerLayer
              src={banner.src}
              alt={banner.alt}
              remote={remote}
              presentation={presentation}
              intrinsicRatio={banner.intrinsicRatio}
              className="sm:hidden"
              priority
            />
            <BannerLayer
              src={banner.srcWide}
              alt={banner.alt}
              remote
              presentation={presentation}
              intrinsicRatio={banner.intrinsicRatio}
              className="hidden sm:block lg:hidden"
              priority
            />
            <BannerLayer
              src={banner.srcExtraWide}
              alt={banner.alt}
              remote
              presentation={presentation}
              intrinsicRatio={banner.intrinsicRatio}
              className="hidden lg:block"
              priority
            />
          </>
        ) : banner.srcWide ? (
          <>
            <BannerLayer
              src={banner.src}
              alt={banner.alt}
              remote={remote}
              presentation={presentation}
              intrinsicRatio={banner.intrinsicRatio}
              className="sm:hidden"
              priority
            />
            <BannerLayer
              src={banner.srcWide}
              alt={banner.alt}
              remote
              presentation={presentation}
              intrinsicRatio={banner.intrinsicRatio}
              className="hidden sm:block"
              priority
            />
          </>
        ) : (
          <BannerLayer
            src={banner.src}
            alt={banner.alt}
            remote={remote}
            presentation={presentation}
            intrinsicRatio={banner.intrinsicRatio}
            priority
          />
        )}
      </div>
    </div>
  );
}
