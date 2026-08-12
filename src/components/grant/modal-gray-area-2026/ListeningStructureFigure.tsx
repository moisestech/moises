'use client';

import type { CSSProperties } from 'react';
import type { InferenceScore } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';

const DEFAULT: InferenceScore = {
  retention: 0.4,
  transformation: 0.35,
  ambiguity: 0.3,
  certainty: 0.55,
  unresolved: 0.2,
  state: 'sealed',
  mode: 'mock',
};

type Phase = 'idle' | 'acknowledgment' | 'interpretation' | 'rest';

const APERTURE_WIDTH: Record<InferenceScore['state'], number> = {
  sealed: 6,
  listening: 18,
  attentive: 32,
  exposed: 52,
  unresolved: 44,
};

export function ListeningStructureFigure({
  score = DEFAULT,
  phase = 'idle',
  className = '',
}: {
  score?: InferenceScore;
  phase?: Phase;
  className?: string;
}) {
  const baseWidth = APERTURE_WIDTH[score.state];
  const phaseBoost = phase === 'acknowledgment' ? 8 : phase === 'interpretation' ? 4 : 0;
  const gap = Math.min(58, baseWidth + phaseBoost);
  const glow = 0.12 + score.retention * 0.45 + (phase === 'acknowledgment' ? 0.15 : 0);
  const skew = score.state === 'unresolved' ? 6 : 0;
  const active = phase === 'acknowledgment' || phase === 'interpretation';

  const shutterStyle = (side: 'left' | 'right'): CSSProperties => ({
    width: `${50 - gap / 2}%`,
    transition: phase === 'acknowledgment' ? 'width 0.4s ease-out' : 'width 1s ease-in-out',
    transform: side === 'left' && skew ? `skewY(${skew}deg)` : side === 'right' && skew ? `skewY(-${skew}deg)` : undefined,
  });

  return (
    <div
      className={`relative w-full aspect-[5/4] max-w-lg mx-auto overflow-hidden bg-neutral-200 text-stone-900 ${className}`}
      role="img"
      aria-label={`Digital aperture study in ${score.state} state`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-300" />

      <div className="absolute inset-[8%] border border-stone-400 bg-white shadow-inner">
        <div
          className="absolute inset-[18%] overflow-hidden"
          style={{
            boxShadow: `inset 0 0 40px rgba(163,190,140,${glow})`,
          }}
        >
          <div className="absolute inset-0 bg-neutral-950" style={{ opacity: 0.92 }} />
          <div
            className="absolute inset-y-[8%] left-1/2 -translate-x-1/2 w-[70%] rounded-sm opacity-60"
            style={{
              background: 'linear-gradient(180deg, rgba(200,210,220,0.5), rgba(120,130,140,0.35))',
              filter: 'blur(1px)',
            }}
          />
          <div className="absolute inset-0 flex">
            <div className="h-full bg-neutral-950" style={shutterStyle('left')} />
            <div className="h-full bg-neutral-950 ml-auto" style={shutterStyle('right')} />
          </div>
          {active ? (
            <div
              className="absolute bottom-[12%] left-1/2 -translate-x-1/2 h-[3px] bg-[#a3be8c]/80"
              style={{ width: `${gap}%`, transition: 'width 0.6s ease' }}
            />
          ) : null}
        </div>

        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[16%] h-[5%] bg-neutral-800 rounded-sm opacity-80" />
        <div className="absolute bottom-[4%] right-[8%] w-[10%] h-[8%] border border-neutral-400 bg-stone-100" title="Thermal printer" />
      </div>

      <p className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-stone-500 bg-white/80 px-2 py-1">
        {score.state}
      </p>
    </div>
  );
}

/** @deprecated Use ListeningStructureFigure */
export const LatentMonumentFigure = ListeningStructureFigure;
