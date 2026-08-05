'use client';

import { useCallback, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import Image from 'next/image';
import { AssetNeeded } from './AssetNeeded';
import type { NeededAsset } from '@/content/oolite-arts/case-study';

type Side = { src: string; alt: string } | null;

type Props = {
  beforeLabel: string;
  afterLabel: string;
  before: Side;
  after: Side;
  needed: NeededAsset;
};

export function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  before,
  after,
  needed,
}: Props) {
  const [position, setPosition] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  const updateFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updateFromClientX(e.clientX);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(100);
    }
  };

  if (!before || !after) {
    return (
      <div className="space-y-3">
        <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
          {after ? (
            <Image src={after.src} alt={after.alt} fill className="object-cover" sizes="100vw" />
          ) : before ? (
            <Image src={before.src} alt={before.alt} fill className="object-cover" sizes="100vw" />
          ) : null}
          <div className="absolute inset-0 bg-black/35 flex items-end p-4 sm:p-6">
            <p className="text-white text-sm sm:text-base max-w-md">
              Matched before/after media required for the interactive slider. Showing available lab
              documentation until the pair is ready.
            </p>
          </div>
        </div>
        <AssetNeeded asset={needed} />
      </div>
    );
  }

  return (
    <div>
      <div
        ref={trackRef}
        role="slider"
        aria-labelledby={labelId}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} percent ${afterLabel} revealed`}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
        className="relative aspect-[16/10] overflow-hidden bg-neutral-200 cursor-ew-resize touch-none select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <Image src={after.src} alt={after.alt} fill className="object-cover" sizes="100vw" priority={false} />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={before.src} alt={before.alt} fill className="object-cover" sizes="100vw" />
        </div>
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-black/20 flex items-center justify-center text-xs font-mono">
            ↔
          </span>
        </div>
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.14em] uppercase bg-black/70 text-white px-2 py-1">
          {beforeLabel}
        </span>
        <span className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.14em] uppercase bg-black/70 text-white px-2 py-1">
          {afterLabel}
        </span>
      </div>
      <p id={labelId} className="sr-only">
        Before and after comparison slider. Use arrow keys to adjust.
      </p>
    </div>
  );
}
