'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export type BitmImageState = 'photo' | 'mask' | 'depth' | 'wireframe' | 'caption';

const states: BitmImageState[] = ['photo', 'mask', 'depth', 'wireframe', 'caption'];

type Props = {
  photoSrc: string;
  alt: string;
  caption?: string;
  className?: string;
};

export function BitmImageStateToggle({ photoSrc, alt, caption, className }: Props) {
  const [state, setState] = useState<BitmImageState>('photo');
  const containerRef = useRef<HTMLDivElement>(null);

  const cycle = () => {
    const i = states.indexOf(state);
    setState(states[(i + 1) % states.length]);
  };

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex flex-wrap gap-1">
        {states.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setState(s)}
            className={cn(
              'font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-1 border transition-colors',
              state === s
                ? 'border-[#111111] bg-[#111111] text-white dark:border-neutral-200 dark:bg-neutral-200 dark:text-[#111111]'
                : 'border-[#dedede] text-[#777777] hover:border-[#111111] dark:border-neutral-700',
            )}
          >
            {s}
          </button>
        ))}
      </div>
      <div
        ref={containerRef}
        className="relative aspect-[4/5] overflow-hidden border border-[#dedede] bg-[#faf8f4] dark:border-neutral-700 dark:bg-neutral-900"
        onClick={cycle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && cycle()}
      >
        <Image src={photoSrc} alt={alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        {state === 'mask' && (
          <div className="absolute inset-0 bg-[#ff5c00]/40 mix-blend-multiply" style={{ filter: 'contrast(1.4)' }} />
        )}
        {state === 'depth' && (
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background: 'linear-gradient(180deg, #fff 0%, #888 50%, #111 100%)',
              mixBlendMode: 'luminosity',
            }}
          />
        )}
        {state === 'wireframe' && (
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `url(/born-into-the-machine/hero/hero-machine-wireframe.svg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        {state === 'caption' && caption && (
          <div className="absolute inset-x-0 bottom-0 bg-[#111111]/85 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-white">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
