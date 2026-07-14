'use client';

import type { CSSProperties } from 'react';
import type { BodyScore } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

const DEFAULT: BodyScore = {
  openness: 0.35,
  coherence: 0.7,
  attention: 0.4,
  contradiction: 0.2,
  compression: 0.3,
  organicMachine: 0.25,
  state: 'column',
  mode: 'mock',
};

type Phase = 'idle' | 'reflex' | 'metabolization' | 'rest';

export function LatentMonumentFigure({
  score = DEFAULT,
  phase = 'idle',
  className = '',
}: {
  score?: BodyScore;
  phase?: Phase;
  className?: string;
}) {
  const spread = 12 + score.openness * 36;
  const align = (1 - score.coherence) * 18;
  const lean = (score.attention - 0.5) * 24;
  const oppose = score.contradiction * 28;
  const shrink = 1 - score.compression * 0.28;
  const glow = 0.15 + score.organicMachine * 0.55;
  const active = phase === 'reflex' || phase === 'metabolization';

  const clusterStyle = (i: number): CSSProperties => {
    const side = i === 0 ? -1 : i === 2 ? 1 : 0;
    const rotY = side * spread + (i === 1 ? lean : 0) + (i % 2 === 0 ? oppose : -oppose * 0.5);
    const rotX = align * (i - 1);
    const tx = side * (28 + spread * 0.35) * shrink;
    return {
      transform: `translateX(${tx}%) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(${shrink})`,
      transition: phase === 'reflex' ? 'transform 0.35s ease-out' : 'transform 1.2s ease-in-out',
    };
  };

  return (
    <div
      className={`relative w-full aspect-[4/5] max-w-md mx-auto overflow-hidden bg-neutral-950 text-stone-100 ${className}`}
      role="img"
      aria-label={`Digital movement study in ${score.state} state`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at center, rgba(163,190,140,${glow * 0.35}) 0%, transparent 55%)`,
        }}
      />
      <div className="absolute inset-6 border border-neutral-600/80" style={{ transform: `scale(${shrink})`, transition: 'transform 1.2s ease' }}>
        {/* lattice lines */}
        <div className="absolute inset-x-0 top-1/3 border-t border-neutral-500/50" />
        <div className="absolute inset-x-0 top-2/3 border-t border-neutral-500/50" />
        <div className="absolute inset-y-0 left-1/3 border-l border-neutral-500/50" />
        <div className="absolute inset-y-0 left-2/3 border-l border-neutral-500/50" />
      </div>

      {/* central void */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%] h-[42%] bg-black border border-neutral-700/80"
        style={{
          clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
          boxShadow: active ? `0 0 40px rgba(163,190,140,${glow})` : 'none',
        }}
      />

      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 w-[22%] -ml-[11%] origin-center"
          style={{ ...clusterStyle(i), top: `${18 + i * 2}%`, height: '64%' }}
        >
          <div className="flex flex-col gap-2 h-full justify-center">
            {(i === 1 ? [0, 1, 2] : [0, 1]).map((s) => (
              <div
                key={s}
                className="mx-auto bg-neutral-900 border border-neutral-500"
                style={{
                  width: s === 0 ? '100%' : s === 1 ? '78%' : '42%',
                  aspectRatio: i === 0 ? (s === 0 ? '3/4' : '4/3') : i === 2 ? (s === 0 ? '4/5' : '1/1') : s === 2 ? '1/3' : '16/10',
                  boxShadow: `inset 0 0 20px rgba(163,190,140,${glow * 0.4})`,
                  background: `linear-gradient(${120 + score.organicMachine * 80}deg, #111 0%, #1a1a1a 40%, rgba(163,190,140,${0.08 + glow * 0.2}) 100%)`,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] uppercase tracking-widest text-neutral-400">
        <span>Digital movement study</span>
        <span className={active ? 'text-[#a3be8c]' : ''}>{score.state.replace('_', ' ')}</span>
      </div>
    </div>
  );
}
