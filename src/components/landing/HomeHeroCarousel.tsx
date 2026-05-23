'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HomeHeroSlide } from '@/constants/homeHero';

const SWIPE_THRESHOLD = 50;

type HomeHeroCarouselProps = {
  slides: HomeHeroSlide[];
  defaultSlug: string;
};

export function HomeHeroCarousel({ slides, defaultSlug }: HomeHeroCarouselProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const touchStartX = useRef<number | null>(null);

  const initialIndex = useMemo(() => {
    const index = slides.findIndex((slide) => slide.slug === defaultSlug);
    return index >= 0 ? index : 0;
  }, [slides, defaultSlug]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const hasMultiple = slides.length > 1;
  const currentSlide = slides[currentIndex];

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrentIndex(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  const goPrev = useCallback(() => goTo(currentIndex - 1, -1), [currentIndex, goTo]);
  const goNext = useCallback(() => goTo(currentIndex + 1, 1), [currentIndex, goTo]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!hasMultiple || touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      touchStartX.current = null;
      if (Math.abs(diff) < SWIPE_THRESHOLD) return;
      if (diff > 0) goNext();
      else goPrev();
    },
    [goNext, goPrev, hasMultiple],
  );

  if (!currentSlide) return null;

  const transition = reduceMotion
    ? { duration: 0 }
    : { type: 'tween' as const, duration: 0.35, ease: 'easeInOut' as const };

  return (
    <div className="mt-40 w-[min(92vw,1400px)] mx-auto">
      <div
        className="group relative overflow-hidden"
        onTouchStart={hasMultiple ? handleTouchStart : undefined}
        onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
      >
        <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[550px]">
          <AnimatePresence initial={false} mode="sync" custom={direction}>
            <motion.div
              key={currentSlide.slug}
              className="absolute inset-0"
              custom={direction}
              initial={reduceMotion ? false : { x: direction > 0 ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: direction > 0 ? '-100%' : '100%' }}
              transition={transition}
            >
              <Link
                href={currentSlide.href}
                aria-label={`${currentSlide.title}, ${currentSlide.year}`}
                className="relative block h-full w-full"
              >
                <Image
                  src={currentSlide.imageUrl}
                  alt={currentSlide.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1400px"
                  priority={currentIndex === initialIndex}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-5 pb-5 pt-16 sm:px-8 sm:pb-8"
                  aria-hidden
                >
                  <p className="font-['MoMA_Sans'] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    {currentSlide.title}
                  </p>
                  <p className="mt-1 text-base font-bold text-white/90 sm:text-lg">{currentSlide.year}</p>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white opacity-70 transition-opacity hover:bg-black/60 hover:opacity-100 focus:opacity-100 md:opacity-0 md:group-hover:opacity-70 md:focus:opacity-100"
                aria-label="Previous featured work"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white opacity-70 transition-opacity hover:bg-black/60 hover:opacity-100 focus:opacity-100 md:opacity-0 md:group-hover:opacity-70 md:focus:opacity-100"
                aria-label="Next featured work"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="absolute bottom-4 right-4 z-10 flex gap-2 sm:bottom-6 sm:right-6">
            {slides.map((slide, index) => (
              <button
                key={slide.slug}
                type="button"
                onClick={() => index !== currentIndex && goTo(index, index > currentIndex ? 1 : -1)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'scale-125 bg-white' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to ${slide.title}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
