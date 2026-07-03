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
  isHero?: boolean;
};

export function WolfsonianMediaOverlays({
  effect,
  accent,
  activeKeyword,
  citationStep,
  showNetwork,
  isHero = false,
}: WolfsonianMediaOverlaysProps) {
  const activeEffect = effect ?? 'none';

  return (
    <>
      {isHero ? (
        <div className="wolfsonian-hero-glow-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
          <div className={cn('absolute inset-0 bg-gradient-to-t opacity-80', accent.mediaOverlay)} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(20,184,166,0.45),transparent_62%)] dark:bg-[radial-gradient(ellipse_at_50%_35%,rgba(45,212,191,0.35),transparent_62%)]" />
        </div>
      ) : null}

      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 motion-reduce:transition-none',
          accent.mediaOverlay,
          (activeEffect === 'glow' || activeEffect === 'pressure') && 'opacity-100',
        )}
        aria-hidden="true"
      />

      {(activeEffect === 'network' || showNetwork) ? (
        <div
          className={cn(
            'pointer-events-none absolute inset-0 z-[2] text-stone-900 transition-opacity duration-700 dark:text-stone-100',
            isHero && 'opacity-75 [@media(hover:hover)]:group-hover:opacity-100',
          )}
        >
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
