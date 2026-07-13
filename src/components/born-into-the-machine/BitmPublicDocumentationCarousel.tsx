'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  bitmPublicDocumentationSlides,
  bitmPublicDocCategoryLabels,
} from '@/content/born-into-the-machine/bitm-public-documentation';
import { BitmAssetPlaceholder } from '@/components/born-into-the-machine/BitmAssetPlaceholder';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmPublicDocumentationCarousel() {
  const { reducedMotion, isMobile } = useBitm();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = bitmPublicDocumentationSlides;
  const slide = slides[index] ?? slides[0];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reducedMotion || isMobile || paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [reducedMotion, isMobile, paused, next]);

  const showImage = slide.imageUrl && slide.imageStatus !== 'needed';

  return (
    <div
      className="mt-10 border border-[#dedede] dark:border-neutral-700"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between border-b border-[#dedede] px-4 py-2 dark:border-neutral-700">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777]">
          Public documentation
        </p>
        <span className="font-mono text-[9px] text-[#777777]">
          {index + 1} / {slides.length}
        </span>
      </div>

      <div className="relative aspect-video bg-[#faf8f4] dark:bg-neutral-900">
        {showImage ? (
          <Image
            src={slide.imageUrl!}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 80vw"
          />
        ) : (
          <BitmAssetPlaceholder
            label={slide.title.toUpperCase()}
            caption={slide.caption}
            className="h-full w-full border-0"
          />
        )}
        <span className="absolute left-3 top-3 bg-[#111111]/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white">
          {bitmPublicDocCategoryLabels[slide.category]}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-[#111111] dark:text-neutral-100">{slide.title}</h3>
        <p className="mt-1 text-sm text-[#777777] dark:text-neutral-400">{slide.caption}</p>
        {slide.href ? (
          <a
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-[#ff5c00] hover:underline"
          >
            Institutional documentation ↗
          </a>
        ) : null}
      </div>

      <div className="flex items-center justify-between border-t border-[#dedede] px-4 py-2 dark:border-neutral-700">
        <button
          type="button"
          onClick={prev}
          className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#777777] hover:text-[#ff5c00]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <div className="flex gap-1">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-colors',
                i === index ? 'bg-[#ff5c00]' : 'bg-[#c4c4c4]',
              )}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#777777] hover:text-[#ff5c00]"
          aria-label="Next slide"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
