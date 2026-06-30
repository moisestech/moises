'use client';

import { cn } from '@/lib/utils';
import type { WolfsonianImageEffect } from '@/content/grants/wolfsonian-fellowship';
import type { WolfsonianSectionAccent } from '@/config/wolfsonian-section-theme';
import { WolfsonianHeroNetwork } from './WolfsonianHeroNetwork';

type WolfsonianMediaOverlaysProps = {
  effect?: WolfsonianImageEffect | null;
  accent: WolfsonianSectionAccent;
  activeKeyword?: string | null;
  citationStep?: string | null;
  showNetwork?: boolean;
};

export function WolfsonianMediaOverlays({
  effect,
  accent,
  activeKeyword,
  citationStep,
  showNetwork,
}: WolfsonianMediaOverlaysProps) {
  const activeEffect = effect ?? 'none';

  return (
    <>
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 motion-reduce:transition-none',
          accent.mediaOverlay,
          (activeEffect === 'glow' || activeEffect === 'pressure') && 'opacity-100',
        )}
        aria-hidden="true"
      />

      {(activeEffect === 'network' || showNetwork) ? (
        <div className="pointer-events-none absolute inset-0 text-stone-900 dark:text-stone-100">
          <WolfsonianHeroNetwork />
        </div>
      ) : null}

      {activeEffect === 'pressure' && activeKeyword ? (
        <div
          className="pointer-events-none absolute bottom-3 left-3 border bg-white/90 px-2 py-1 text-xs font-medium capitalize dark:bg-neutral-900/90"
          aria-hidden="true"
        >
          {activeKeyword}
        </div>
      ) : null}

      {activeEffect === 'citation' ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-2 p-3" aria-hidden="true">
          {(['source', 'interpretation', 'uncertainty'] as const).map((step) => (
            <span
              key={step}
              className={cn(
                'border px-2 py-1 text-[0.65rem] uppercase tracking-wide transition',
                citationStep === step ? accent.chipActive : 'border-white/40 bg-black/40 text-white/70',
              )}
            >
              {step}
            </span>
          ))}
        </div>
      ) : null}

      {activeEffect === 'contaminate' ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen motion-safe:animate-pulse motion-reduce:opacity-20"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.08) 8px, rgba(255,255,255,0.08) 16px)',
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 translate-x-1 translate-y-1 opacity-20 blur-[1px]" aria-hidden="true">
            <div className="h-full w-full bg-gradient-to-r from-rose-500/20 to-yellow-300/20" />
          </div>
        </>
      ) : null}
    </>
  );
}
