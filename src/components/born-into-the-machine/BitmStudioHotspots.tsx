'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { bitmStudioHotspots } from '@/content/born-into-the-machine/bitm-keywords';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmStudioHotspots() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('studio', ref);
  const accent = getBitmChapterAccent('studio');
  const [active, setActive] = useState<string | null>(null);
  const activeSpot = bitmStudioHotspots.find((s) => s.id === active);

  return (
    <section
      id="studio"
      ref={ref}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader eyebrow="Chapter 03" title="The Studio" iconKey="studio" accent={accent} />
      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#111111] dark:text-neutral-200">
        {bitmPage.studioIntro}
      </p>

      <div className="relative aspect-[16/10] overflow-hidden border border-[#c4c4c4]/50">
        <Image
          src={bitmAssets.studio.workstation}
          alt="Studio workstation at Bakehouse — annotated infrastructure"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 80vw"
        />
        {bitmStudioHotspots.map((spot) => (
          <button
            key={spot.id}
            type="button"
            className={cn(
              'absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-transform',
              active === spot.id
                ? 'border-[#ff5c00] bg-[#ff5c00] scale-125'
                : 'border-white bg-[#ff5c00]/80 hover:scale-110',
            )}
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onMouseEnter={() => setActive(spot.id)}
            onFocus={() => setActive(spot.id)}
            onBlur={() => setActive(null)}
            aria-label={spot.label}
          />
        ))}
      </div>

      {activeSpot ? (
        <div className="mt-4 border-l-2 border-[#ff5c00] pl-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ff5c00]">
            {activeSpot.label}
          </p>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-[#111111] dark:text-neutral-200">
            {activeSpot.body}
          </p>
        </div>
      ) : (
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777]">
          Hover hotspots — artistic role, not specifications
        </p>
      )}

      <BitmLaborReveal chapterId="studio" />
    </section>
  );
}
