'use client';

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type HorizontalOverflowNavProps = {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
  scrollerClassName?: string;
  /** When this key changes, the element matching `[data-nav-active="true"]` scrolls into view. */
  activeKey?: string;
  /** Edge fade start color (must include `from-*`). */
  fadeFromClassName?: string;
  /** When false, the scroller is a div (parent already provides a nav). */
  asNav?: boolean;
};

/**
 * Single-row native-scroll navigation: no wrap, arrows only when overflowing,
 * edge fades, keyboard left/right, reduced-motion instant scroll.
 */
export function HorizontalOverflowNav({
  children,
  ariaLabel,
  className,
  scrollerClassName,
  activeKey,
  fadeFromClassName = 'from-stone-50 dark:from-stone-950',
  asNav = true,
}: HorizontalOverflowNavProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canStart, setCanStart] = useState(false);
  const [canEnd, setCanEnd] = useState(false);

  const updateOverflow = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const overflowing = scrollWidth > clientWidth + 1;
    setCanStart(overflowing && scrollLeft > 2);
    setCanEnd(overflowing && scrollLeft + clientWidth < scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateOverflow();
    const ro = new ResizeObserver(updateOverflow);
    ro.observe(el);
    el.addEventListener('scroll', updateOverflow, { passive: true });
    window.addEventListener('resize', updateOverflow);
    return () => {
      ro.disconnect();
      el.removeEventListener('scroll', updateOverflow);
      window.removeEventListener('resize', updateOverflow);
    };
  }, [updateOverflow, children]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const active = scroller.querySelector<HTMLElement>('[data-nav-active="true"]');
    if (!active) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    active.scrollIntoView({
      behavior: reduce ? 'instant' : 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [activeKey]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({
      left: dir * Math.max(160, el.clientWidth * 0.6),
      behavior: reduce ? 'instant' : 'smooth',
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollByDir(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollByDir(1);
    }
  };

  const overflowing = canStart || canEnd;

  return (
    <div className={cn('relative', className)}>
      {canStart ? (
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r to-transparent',
            fadeFromClassName,
          )}
          aria-hidden
        />
      ) : null}
      {canEnd ? (
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l to-transparent',
            fadeFromClassName,
          )}
          aria-hidden
        />
      ) : null}

      {canStart ? (
        <button
          type="button"
          className="absolute left-0 top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white/95 text-stone-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-stone-600 dark:bg-stone-900/95 dark:text-stone-100"
          aria-label="Scroll navigation left"
          onClick={() => scrollByDir(-1)}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
      ) : null}
      {canEnd ? (
        <button
          type="button"
          className="absolute right-0 top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white/95 text-stone-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-stone-600 dark:bg-stone-900/95 dark:text-stone-100"
          aria-label="Scroll navigation right"
          onClick={() => scrollByDir(1)}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      ) : null}

      <div
        ref={scrollerRef}
        role={asNav ? 'navigation' : undefined}
        aria-label={asNav ? ariaLabel : undefined}
        tabIndex={overflowing ? 0 : undefined}
        onKeyDown={onKeyDown}
        className={cn(
          'flex flex-nowrap items-center gap-x-6 overflow-x-auto overflow-y-hidden whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
          scrollerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
