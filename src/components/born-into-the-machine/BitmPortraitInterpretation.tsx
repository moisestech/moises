'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

const labels = ['ARTIST', 'ENGINEER', 'OPERATOR', 'MODEL', 'STUDIO', 'PUBLIC'] as const;

type InterpretPhase = 'photo' | 'depth' | 'pose' | 'labels';

export function BitmPortraitInterpretation() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('thesis', ref);
  const accent = getBitmChapterAccent('thesis');
  const [phase, setPhase] = useState<InterpretPhase>('photo');
  const [activeLabels, setActiveLabels] = useState<string[]>([]);

  const runInterpretation = () => {
    setPhase('depth');
    setTimeout(() => setPhase('pose'), 600);
    setTimeout(() => {
      setPhase('labels');
      setActiveLabels(labels.slice(0, 3));
    }, 1200);
    setTimeout(() => setActiveLabels([...labels]), 1800);
    setTimeout(() => {
      setPhase('photo');
      setActiveLabels([]);
    }, 3200);
  };

  return (
    <section
      id="thesis"
      ref={ref}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader
        eyebrow="Chapter 01"
        title="Thesis"
        iconKey="human-machine"
        accent={accent}
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <blockquote className="text-2xl font-medium leading-relaxed text-[#111111] dark:text-neutral-100 sm:text-3xl">
          {bitmPage.thesis}
        </blockquote>

        <div
          className="relative"
          onMouseEnter={runInterpretation}
          onFocus={runInterpretation}
          tabIndex={0}
          role="img"
          aria-label="Portrait interpretation — hover to reveal depth map and pose skeleton"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-[#c4c4c4]/60">
            <Image
              src={bitmAssets.portraits.primary}
              alt="Moises Sanabria in studio — artist, engineer, operator"
              fill
              className={cn(
                'object-cover transition-all duration-700',
                phase === 'depth' && 'grayscale contrast-125 brightness-90',
              )}
              sizes="(max-width:768px) 100vw, 40vw"
            />
            {phase === 'depth' || phase === 'pose' || phase === 'labels' ? (
              <div
                className="absolute inset-0 opacity-70 mix-blend-luminosity"
                style={{
                  background: 'linear-gradient(160deg, #fff 0%, #666 45%, #111 100%)',
                }}
              />
            ) : null}
            {(phase === 'pose' || phase === 'labels') && (
              <div
                className="absolute inset-0 bg-center bg-no-repeat opacity-90"
                style={{
                  backgroundImage: `url(${bitmAssets.portraits.poseSvg})`,
                  backgroundSize: '45%',
                }}
              />
            )}
            {phase === 'labels' &&
              activeLabels.map((label, i) => (
                <span
                  key={label}
                  className="absolute font-mono text-[9px] uppercase tracking-[0.2em] text-[#ff5c00] bg-[#faf8f4]/90 px-2 py-1"
                  style={{
                    top: `${15 + i * 12}%`,
                    left: i % 2 === 0 ? '8%' : 'auto',
                    right: i % 2 === 1 ? '8%' : 'auto',
                  }}
                >
                  {label}
                </span>
              ))}
          </div>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
            Hover to interpret — photo → depth → pose → labels
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-2xl font-mono text-xs text-[#777777] dark:text-neutral-500">
        {bitmPage.thesisMarginal}
      </p>

      <BitmLaborReveal chapterId="thesis" />
    </section>
  );
}
