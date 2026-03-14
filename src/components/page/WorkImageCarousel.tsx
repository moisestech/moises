'use client';

import { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import VimeoPlayer from '@/components/common/VimeoPlayer';

export type WorkMediaItem =
  | { type: 'image'; url: string; caption?: string }
  | { type: 'video'; vimeoId: string; caption?: string };

interface WorkImageCarouselProps {
  images: readonly WorkMediaItem[];
  alt: string;
  className?: string;
}

const SWIPE_THRESHOLD = 50;

export function WorkImageCarousel({ images, alt, className = '' }: WorkImageCarouselProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrentIndex(((index % images.length) + images.length) % images.length);
    },
    [images.length]
  );

  const goPrev = useCallback(() => goTo(currentIndex - 1, -1), [currentIndex, goTo]);
  const goNext = useCallback(() => goTo(currentIndex + 1, 1), [currentIndex, goTo]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      touchStartX.current = null;
      if (Math.abs(diff) < SWIPE_THRESHOLD) return;
      if (diff > 0) goNext();
      else goPrev();
    },
    [goNext, goPrev]
  );

  const hasMultiple = images.length > 1;
  const currentItem = images[currentIndex];

  return (
    <div
      className={`relative overflow-hidden rounded-lg group ${className}`}
      onTouchStart={hasMultiple ? handleTouchStart : undefined}
      onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <AnimatePresence initial={false} mode="sync" custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 flex items-center justify-center bg-black"
            custom={direction}
            initial={{ x: direction > 0 ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
          >
            {currentItem.type === 'image' ? (
              <Image
                src={currentItem.url}
                alt={currentItem.caption || alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
                priority={currentIndex === 0}
              />
            ) : (
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <VimeoPlayer
                  videoId={currentItem.vimeoId}
                  title={currentItem.caption || alt}
                  aspectRatio="4:3"
                  className="w-full"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next arrows */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100 md:opacity-60 md:hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100 md:opacity-60 md:hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {hasMultiple && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => index !== currentIndex && goTo(index, index > currentIndex ? 1 : -1)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? isDark
                    ? 'bg-white scale-125'
                    : 'bg-gray-900 scale-125'
                  : isDark
                    ? 'bg-white/50 hover:bg-white/75'
                    : 'bg-gray-500/50 hover:bg-gray-600/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
