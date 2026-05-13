'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ApplicationBanner } from '@/content/opportunities/types';

type OpportunityApplicationBannerProps = {
  banner?: ApplicationBanner;
  className?: string;
};

const defaultFrame =
  'relative aspect-[21/9] min-h-[120px] w-full max-h-[min(42vh,420px)] sm:aspect-[2.8/1] sm:max-h-[min(38vh,380px)]';

/**
 * Full-viewport-width banner directly under the fixed recruiting header.
 * Omit `banner` to hide. Use Cloudinary (or /public) URLs per application.
 */
export function OpportunityApplicationBanner({ banner, className }: OpportunityApplicationBannerProps) {
  if (!banner?.src) return null;

  const remote = banner.src.startsWith('http');

  return (
    <div
      className={cn(
        'relative left-1/2 mb-8 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-b border-stone-200 bg-stone-900/5 shadow-sm',
        className,
      )}
    >
      <div className={cn(defaultFrame, banner.aspectClass)}>
        {remote || !banner.src.endsWith('.svg') ? (
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={banner.src} alt={banner.alt} className="h-full w-full object-cover object-top" />
        )}
      </div>
    </div>
  );
}
