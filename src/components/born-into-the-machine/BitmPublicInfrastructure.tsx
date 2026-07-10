'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmStudioInfrastructureDiagram } from '@/components/born-into-the-machine/BitmStudioInfrastructureDiagram';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';

export function BitmPublicInfrastructure() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('public', ref);
  const accent = getBitmChapterAccent('public');

  return (
    <section
      id="public"
      ref={ref}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader
        eyebrow="Chapter 06"
        title="Public Infrastructure"
        iconKey="public-space"
        accent={accent}
      />
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#111111] dark:text-neutral-200">
        {bitmPage.publicIntro}
      </p>

      <BitmStudioInfrastructureDiagram />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-video overflow-hidden border border-[#dedede] dark:border-neutral-700">
          <Image
            src={bitmAssets.studio.workshop}
            alt="Workshop and public program — Digital Divinities installation"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative aspect-video overflow-hidden border border-[#dedede] dark:border-neutral-700">
          <Image
            src={bitmAssets.studio.installation}
            alt="Public installation — Doomscrolling Treadmill at festival"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>

      <BitmLaborReveal chapterId="public" />
    </section>
  );
}
