'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { Maximize2 } from 'lucide-react';
import { OpportunityZoomLightbox } from '@/components/opportunities/OpportunityZoomLightbox';
import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';

export type OpportunityProfileImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Extra classes on the outer interactive frame (tilt / glass). */
  frameClassName?: string;
  /** Inset ring on hover (section-colored). */
  accentRingClassName?: string;
  /** Dark-mode hover shadow (section-colored). */
  accentShadowClassName?: string;
  priority?: boolean;
  sizes?: string;
};

type PointerState = {
  x: number;
  y: number;
  rx: number;
  ry: number;
  active: boolean;
};

const IDLE: PointerState = { x: 50, y: 38, rx: 0, ry: 0, active: false };

/**
 * Reusable recruiting headshot with glass specular + mouse-follow tilt.
 * Used by opportunity heroes; safe to drop into future application surfaces.
 * Respects `prefers-reduced-motion`.
 */
export function OpportunityProfileImage({
  src,
  alt,
  className,
  frameClassName,
  accentRingClassName,
  accentShadowClassName,
  priority = true,
  sizes = '(max-width: 1024px) 100vw, 400px',
}: OpportunityProfileImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState<PointerState>(IDLE);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (reduceMotion) return;
      const el = frameRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setPointer({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
        ry: ((x - 50) / 50) * 7,
        rx: -((y - 50) / 50) * 5,
        active: true,
      });
    },
    [reduceMotion],
  );

  const onPointerEnter = useCallback(() => {
    if (reduceMotion) return;
    setPointer((prev) => ({ ...prev, active: true }));
  }, [reduceMotion]);

  const onPointerLeave = useCallback(() => {
    setPointer(IDLE);
  }, []);

  const useNextImage = src.startsWith('http') || !src.endsWith('.svg');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const frameStyle = reduceMotion
    ? undefined
    : ({
        '--opp-profile-x': `${pointer.x}%`,
        '--opp-profile-y': `${pointer.y}%`,
        transform: pointer.active
          ? `rotateX(${pointer.rx}deg) rotateY(${pointer.ry}deg) scale(1.02)`
          : 'rotateX(0deg) rotateY(0deg) scale(1)',
      } as CSSProperties);

  return (
    <div
      ref={frameRef}
      className={cn(
        'group/profile relative mx-auto max-w-md [perspective:1200px]',
        frameClassName,
      )}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div
        className={cn(
          opp.headshot,
          'mx-auto w-full transform-gpu transition-[transform,box-shadow] duration-300 ease-out will-change-transform',
          'motion-safe:group-hover/profile:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.45)]',
          accentShadowClassName ??
            'motion-safe:dark:group-hover/profile:shadow-[0_24px_48px_-18px_rgba(34,211,238,0.22)]',
          className,
        )}
        style={frameStyle}
      >
        {useNextImage ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition duration-500 ease-out motion-safe:group-hover/profile:scale-[1.04]"
            sizes={sizes}
            priority={priority}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition duration-500 ease-out motion-safe:group-hover/profile:scale-[1.04]"
          />
        )}

        {/* Mouse-follow glass specular */}
        <span
          className={cn(
            'pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300',
            'motion-safe:group-hover/profile:opacity-100',
          )}
          style={{
            background:
              'radial-gradient(circle 42% at var(--opp-profile-x, 50%) var(--opp-profile-y, 38%), rgba(255,255,255,0.38), rgba(255,255,255,0.08) 32%, transparent 58%)',
            mixBlendMode: 'soft-light',
          }}
          aria-hidden
        />

        {/* Flash / sheen sweep on hover */}
        <span
          className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-0 transition-opacity duration-300 motion-safe:group-hover/profile:opacity-100"
          aria-hidden
        >
          <span className="grant-portrait-sheen absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent motion-safe:group-hover/profile:animate-[grant-portrait-sheen_0.9s_ease-in-out]" />
        </span>

        {/* Glass rim + cyan accent for recruiting theme */}
        <span
          className={cn(
            'pointer-events-none absolute inset-0 z-[3] rounded-[inherit] opacity-0 transition-opacity duration-500',
            'bg-gradient-to-tr from-stone-950/15 via-transparent to-white/25',
            'ring-1 ring-inset ring-white/25',
            accentRingClassName ?? 'dark:ring-cyan-400/20',
            'motion-safe:group-hover/profile:opacity-100',
          )}
          aria-hidden
        />
      </div>
      <button
        type="button"
        className="absolute bottom-2 right-2 z-10 inline-flex min-h-11 items-center gap-1 rounded-md bg-stone-950/80 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm hover:bg-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:text-xs"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation();
          setLightboxOpen(true);
        }}
        aria-label={`Enlarge portrait: ${alt}`}
      >
        <Maximize2 className="h-3.5 w-3.5" aria-hidden />
        Zoom
      </button>
      <OpportunityZoomLightbox open={lightboxOpen} onOpenChange={setLightboxOpen} src={src} alt={alt} />
    </div>
  );
}
