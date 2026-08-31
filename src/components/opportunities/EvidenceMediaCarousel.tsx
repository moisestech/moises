'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { OpportunityZoomTrigger } from '@/components/opportunities/OpportunityZoomLightbox';
import type { TeachingMediaItem } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type EvidenceMediaCarouselProps = {
  items: TeachingMediaItem[];
  title: string;
};

export function EvidenceMediaCarousel({ items, title }: EvidenceMediaCarouselProps) {
  const id = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = (next + items.length) % items.length;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({
      left: clamped * el.clientWidth,
      behavior: reduce ? 'auto' : 'smooth',
    });
    setIndex(clamped);
  }, [items.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const next = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
      setIndex(Math.min(items.length - 1, Math.max(0, next)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className={cn(opp.cardMedia, 'overflow-hidden')} aria-roledescription="carousel" aria-label={`${title} media`}>
      <div
        ref={scrollerRef}
        id={`${id}-scroller`}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={`${item.src}-${i}`} className="relative h-full w-full shrink-0 snap-start">
            <OpportunityZoomTrigger
              src={item.src}
              alt={item.alt}
              caption={item.caption ?? title}
              className="relative h-full w-full"
            >
              <OpportunityCardImage src={item.src} alt={item.alt} local={item.local} />
            </OpportunityZoomTrigger>
            {item.caption ? (
              <p className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-stone-950/65 px-3 py-1.5 text-[11px] text-stone-100">
                {item.caption}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      {items.length > 1 ? (
        <>
          <button
            type="button"
            className="absolute left-2 top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-stone-950/70 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            aria-label="Previous image"
            onClick={() => go(index - 1)}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-stone-950/70 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            aria-label="Next image"
            onClick={() => go(index + 1)}
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
          <div className="absolute inset-x-0 top-2 z-[2] flex justify-center gap-1.5" role="tablist" aria-label="Slides">
            {items.map((item, i) => (
              <button
                key={`${item.src}-dot-${i}`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-controls={`${id}-scroller`}
                className={cn(
                  'h-2 w-2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400',
                  i === index ? 'bg-white' : 'bg-white/40',
                )}
                onClick={() => go(i)}
              >
                <span className="sr-only">
                  Slide {i + 1}: {item.caption ?? item.alt}
                </span>
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
