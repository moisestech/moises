'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react';
import { Maximize2, Minus, Plus, RotateCcw } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const MIN_SCALE = 1;
const MAX_SCALE = 5;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type OpportunityZoomLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Full-viewport image inspector: wheel / pinch zoom, drag to pan, keyboard +/- / 0.
 */
export function OpportunityZoomLightbox({
  open,
  onOpenChange,
  src,
  alt,
  caption,
}: OpportunityZoomLightboxProps) {
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [viewportEl, setViewportEl] = useState<HTMLDivElement | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);
  const dragStart = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);

  const reset = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  const zoomBy = useCallback((factor: number) => {
    setScale((current) => {
      const next = clamp(current * factor, MIN_SCALE, MAX_SCALE);
      if (next <= MIN_SCALE) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  useEffect(() => {
    const el = viewportEl;
    if (!open || !el) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      zoomBy(event.deltaY < 0 ? 1.12 : 0.9);
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        zoomBy(1.2);
      } else if (event.key === '-' || event.key === '_') {
        event.preventDefault();
        zoomBy(0.85);
      } else if (event.key === '0') {
        event.preventDefault();
        reset();
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      el.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, [open, reset, zoomBy, viewportEl]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      pinchStart.current = { distance, scale };
      dragStart.current = null;
      return;
    }
    if (scale > 1) {
      dragStart.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
    }
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.current.size === 2 && pinchStart.current) {
      const [a, b] = [...pointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const next = clamp(
        pinchStart.current.scale * (distance / Math.max(pinchStart.current.distance, 1)),
        MIN_SCALE,
        MAX_SCALE,
      );
      setScale(next);
      if (next <= MIN_SCALE) setPan({ x: 0, y: 0 });
      return;
    }

    if (dragStart.current && scale > 1) {
      setPan({
        x: dragStart.current.panX + (event.clientX - dragStart.current.x),
        y: dragStart.current.panY + (event.clientY - dragStart.current.y),
      });
    }
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinchStart.current = null;
    if (pointers.current.size === 0) dragStart.current = null;
  };

  const onDoubleClick = () => {
    if (scale > 1) {
      reset();
      return;
    }
    setScale(2.4);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          'flex h-[100dvh] max-h-[100dvh] w-screen max-w-none translate-x-[-50%] translate-y-[-50%] flex-col gap-0 overflow-hidden rounded-none border-0 bg-stone-950 p-0 text-stone-50 shadow-none',
          'sm:rounded-none',
        )}
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Full-screen image. Scroll or pinch to zoom, drag to pan, plus and minus keys to zoom, zero to reset, escape to
          close.
        </DialogDescription>

        <div className="flex shrink-0 items-center justify-center gap-2 border-b border-white/10 bg-stone-950/90 px-12 py-2 sm:justify-start sm:px-4">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/20 text-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            onClick={() => zoomBy(0.85)}
            aria-label="Zoom out"
          >
            <Minus className="h-4 w-4" aria-hidden />
          </button>
          <span className="min-w-[3.5rem] text-center text-xs tabular-nums text-stone-300">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/20 text-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            onClick={() => zoomBy(1.2)}
            aria-label="Zoom in"
          >
            <Plus className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-white/20 px-3 text-xs font-medium hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            onClick={reset}
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Reset
          </button>
          <p className="ml-auto hidden text-[11px] text-stone-400 sm:block">
            Scroll or pinch to zoom · drag to pan · Esc to close
          </p>
        </div>

        <div
          ref={setViewportEl}
          className={cn(
            'relative min-h-0 flex-1 overflow-hidden touch-none',
            scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in',
          )}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDoubleClick={onDoubleClick}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="pointer-events-none absolute left-1/2 top-1/2 max-h-[calc(100dvh-6.5rem)] max-w-[min(96vw,1400px)] select-none object-contain"
            style={{
              transform: `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
              transformOrigin: 'center center',
            }}
          />
        </div>

        {caption ? (
          <p className="shrink-0 border-t border-white/10 bg-stone-950/90 px-4 py-2 text-center text-xs text-stone-300">
            {caption}
          </p>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

type OpportunityZoomTriggerProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  children: ReactNode;
  /** Visible chip on the thumbnail. */
  chip?: boolean;
};

/** Thumbnail control that opens the zoom lightbox. */
export function OpportunityZoomTrigger({
  src,
  alt,
  caption,
  className,
  children,
  chip = true,
}: OpportunityZoomTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={cn(
          'group/zoom relative block w-full cursor-zoom-in overflow-hidden text-left',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:focus-visible:outline-cyan-500',
          className,
        )}
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${alt}`}
      >
        {children}
        {chip ? (
          <span className="pointer-events-none absolute bottom-2 right-2 z-[2] inline-flex items-center gap-1 rounded-md bg-stone-950/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white opacity-90 backdrop-blur-sm transition group-hover/zoom:opacity-100 sm:text-xs">
            <Maximize2 className="h-3.5 w-3.5" aria-hidden />
            Zoom
          </span>
        ) : null}
      </button>
      <OpportunityZoomLightbox
        open={open}
        onOpenChange={setOpen}
        src={src}
        alt={alt}
        caption={caption}
      />
    </>
  );
}
