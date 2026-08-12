'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { InstMedia } from '@/content/institutions/artistInfrastructure';
import { cn } from '@/lib/utils';

const SWIPE_THRESHOLD = 48;
const AUTOPLAY_MS = 7000;

export type HeroCarouselSlide = InstMedia & {
  /** Short workshop / venue label shown in the chrome */
  title?: string;
  /** In-page section id, e.g. `curriculum` */
  sectionId?: string;
  sectionLabel?: string;
  /** Optional deep link (workshop landing) — preferred over section scroll when set */
  href?: string;
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

export function HeroWorkshopCarousel({
  slides,
  imageNote,
}: {
  slides: readonly HeroCarouselSlide[];
  imageNote?: string;
}) {
  const labelId = useId();
  const regionId = useId();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const pointerActive = useRef(false);
  const count = slides.length;
  const current = slides[index] ?? slides[0];

  const goTo = useCallback(
    (next: number) => {
      if (count < 1) return;
      setIndex(((next % count) + count) % count);
      setDragOffset(0);
    },
    [count],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (count < 2 || paused) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [count, paused, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const root = document.getElementById(regionId);
      const active = document.activeElement;
      if (!root || (active !== root && !root.contains(active))) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [regionId, goPrev, goNext]);

  if (!current) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    if (count < 2 || e.button !== 0) return;
    pointerActive.current = true;
    pointerStartX.current = e.clientX;
    setIsDragging(true);
    setPaused(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointerActive.current || pointerStartX.current === null) return;
    setDragOffset(e.clientX - pointerStartX.current);
  };

  const finishPointer = (e: React.PointerEvent) => {
    if (!pointerActive.current) return;
    pointerActive.current = false;
    const start = pointerStartX.current;
    pointerStartX.current = null;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
    if (start === null) {
      setDragOffset(0);
      return;
    }
    const diff = e.clientX - start;
    if (Math.abs(diff) >= SWIPE_THRESHOLD) {
      if (diff < 0) goNext();
      else goPrev();
    } else {
      setDragOffset(0);
    }
  };

  const linkLabel = current.sectionLabel ?? 'View workshop';
  const linkHref = current.href;
  const linkSection = !linkHref && current.sectionId ? current.sectionId : null;

  return (
    <div className="min-w-0 w-full">
      <figure className="group/media relative" aria-labelledby={labelId}>
        <div
          id={regionId}
          role="region"
          aria-roledescription="carousel"
          aria-label="Workshops given"
          tabIndex={0}
          className="relative aspect-[4/3] touch-pan-y overflow-hidden bg-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[16/10]"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishPointer}
          onPointerCancel={finishPointer}
          onPointerLeave={(e) => {
            if (pointerActive.current) finishPointer(e);
          }}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={cn(
              'absolute inset-0 flex',
              !isDragging && 'transition-transform duration-500 ease-out motion-reduce:transition-none',
            )}
            style={{
              width: `${count * 100}%`,
              transform: `translateX(calc(${(-index * 100) / count}% + ${dragOffset}px))`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={`${slide.src}-${i}`}
                className="relative h-full shrink-0"
                style={{ width: `${100 / count}%` }}
                aria-hidden={i !== index}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  draggable={false}
                  className="pointer-events-none select-none object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 640px"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-90 max-sm:opacity-70" />

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPaused(true);
                  goPrev();
                }}
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-neutral-950/60 text-white backdrop-blur-sm transition hover:bg-neutral-950/80 sm:h-10 sm:w-10"
                aria-label="Previous workshop"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPaused(true);
                  goNext();
                }}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-neutral-950/60 text-white backdrop-blur-sm transition hover:bg-neutral-950/80 sm:h-10 sm:w-10"
                aria-label="Next workshop"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <div className="absolute bottom-0 left-0 right-0 z-10 hidden p-4 sm:block sm:px-5 sm:pb-5 sm:pt-10">
            {current.title ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
                {current.title}
              </p>
            ) : null}
            <p className="mt-1 max-w-md text-sm font-medium text-white drop-shadow">
              {current.caption ?? current.alt}
            </p>
            {linkHref ? (
              <Link
                href={linkHref}
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 underline-offset-4 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {linkLabel}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ) : linkSection ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection(linkSection);
                }}
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 underline-offset-4 hover:underline"
              >
                {linkLabel}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            ) : null}
          </div>
        </div>

        <div className="mt-3 space-y-3 sm:hidden">
          <div>
            {current.title ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                {current.title}
              </p>
            ) : null}
            <p className="mt-1 text-sm font-medium leading-snug text-neutral-900">
              {current.caption ?? current.alt}
            </p>
            {linkHref ? (
              <Link
                href={linkHref}
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 underline-offset-4 hover:underline"
              >
                {linkLabel}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ) : linkSection ? (
              <button
                type="button"
                onClick={() => scrollToSection(linkSection)}
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 underline-offset-4 hover:underline"
              >
                {linkLabel}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            ) : null}
          </div>

          {count > 1 ? (
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setPaused(true);
                    goPrev();
                  }}
                  className="flex h-11 w-11 items-center justify-center border border-neutral-300 bg-white text-neutral-900 transition active:scale-[0.98]"
                  aria-label="Previous workshop"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPaused(true);
                    goNext();
                  }}
                  className="flex h-11 w-11 items-center justify-center border border-neutral-300 bg-white text-neutral-900 transition active:scale-[0.98]"
                  aria-label="Next workshop"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                {index + 1} / {count} · swipe
              </p>
            </div>
          ) : null}
        </div>

        {count > 1 ? (
          <div className="mt-3 flex items-center justify-between gap-3 max-sm:mt-2">
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Workshop slides">
              {slides.map((slide, i) => (
                <button
                  key={`dot-${slide.src}-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show workshop ${i + 1}: ${slide.title ?? slide.caption ?? slide.alt}`}
                  onClick={() => {
                    setPaused(true);
                    goTo(i);
                  }}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    i === index ? 'w-7 bg-neutral-900' : 'w-2.5 bg-neutral-300 hover:bg-neutral-500',
                  )}
                />
              ))}
            </div>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 sm:block">
              {index + 1} / {count}
            </p>
          </div>
        ) : null}

        {(current.credit || imageNote) && (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            {current.credit ?? imageNote}
          </p>
        )}

        <span id={labelId} className="sr-only">
          {current.caption ?? current.alt}
        </span>
      </figure>
    </div>
  );
}
