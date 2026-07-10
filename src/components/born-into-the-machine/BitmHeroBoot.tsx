'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { BitmImageStateToggle } from '@/components/born-into-the-machine/BitmImageStateToggle';
import { BitmCursorLens } from '@/components/born-into-the-machine/BitmCursorLens';
import { useBitm, useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmHeroBoot() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('boot', ref);
  const { reducedMotion, showSecondaryChrome } = useBitm();

  const [phase, setPhase] = useState<'cursor' | 'init' | 'title' | 'stable'>(
    reducedMotion ? 'stable' : 'cursor',
  );
  const [cableFill, setCableFill] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const t1 = setTimeout(() => setPhase('init'), 500);
    const t2 = setTimeout(() => setPhase('title'), 1200);
    const t3 = setTimeout(() => setPhase('stable'), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reducedMotion]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCableFill(Math.min(100, (y / 400) * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const heroImage = (
    <BitmImageStateToggle
      photoSrc={bitmAssets.hero.poster}
      alt="Baby AGI sculpture — hero visual for Born into the Machine"
      caption="Scanned silhouette — photograph, point cloud, wireframe"
    />
  );

  return (
    <section
      id="boot"
      ref={ref}
      className="relative mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#ff5c00]">
        {bitmPage.eyebrow}
      </p>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          {phase !== 'stable' && phase !== 'title' ? (
            <p className="mb-4 font-mono text-sm text-[#ff5c00]">
              {phase === 'cursor' ? '_' : 'INITIALIZING BIRTH SEQUENCE'}
            </p>
          ) : null}

          <motion.h1
            className={cn(
              'text-4xl font-bold tracking-tight text-[#111111] dark:text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl',
              phase === 'title' && !reducedMotion && 'tracking-widest',
            )}
            initial={reducedMotion ? false : { opacity: 0, letterSpacing: '0.3em' }}
            animate={
              phase === 'stable' || reducedMotion
                ? { opacity: 1, letterSpacing: '0em' }
                : phase === 'title'
                  ? { opacity: 1, letterSpacing: '0.05em' }
                  : {}
            }
            transition={{ duration: 0.8 }}
          >
            {bitmPage.title}
          </motion.h1>

          <p className="mt-4 text-xl font-medium text-[#111111] dark:text-neutral-100 sm:text-2xl">
            {bitmPage.subtitle}
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#777777] sm:text-xs">
            {bitmPage.secondaryDescriptor}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#777777] dark:text-neutral-400">
            {bitmPage.supportingLine}
          </p>

          <dl className="mt-8 grid gap-2 sm:grid-cols-2">
            {bitmPage.heroMetadata.map((m) => (
              <div key={m.key} className="font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
                <dt className="text-[#777777]">{m.key}</dt>
                <dd className="text-[#111111] dark:text-neutral-200">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex items-center gap-3">
            <div className="relative h-16 w-px bg-[#dedede] dark:bg-neutral-700">
              <div
                className="absolute bottom-0 left-0 w-full bg-[#ff5c00] transition-all duration-300"
                style={{ height: `${cableFill}%` }}
              />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777777]">
              {bitmPage.scrollIndicator}
            </p>
          </div>
        </div>

        {showSecondaryChrome ? (
          <BitmCursorLens
            caption="Baby AGI — point cloud / wireframe alternates"
            className="relative aspect-[4/5] overflow-hidden border border-[#dedede] dark:border-neutral-700"
          >
            {heroImage}
          </BitmCursorLens>
        ) : (
          <div className="relative aspect-[4/5] overflow-hidden border border-[#dedede] dark:border-neutral-700">
            {heroImage}
          </div>
        )}
      </div>

      <BitmLaborReveal chapterId="boot" />
    </section>
  );
}
