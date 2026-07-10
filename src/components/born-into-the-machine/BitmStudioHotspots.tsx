'use client';

import { useRef } from 'react';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { BitmStudio360Experience } from '@/components/born-into-the-machine/BitmStudio360Experience';
import { useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';

export function BitmStudioHotspots() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('studio', ref);
  const accent = getBitmChapterAccent('studio');

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

      <BitmStudio360Experience />

      <BitmLaborReveal chapterId="studio" />
    </section>
  );
}
