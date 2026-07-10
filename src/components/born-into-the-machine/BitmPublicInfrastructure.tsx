'use client';

import { useRef } from 'react';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmStudioInfrastructureDiagram } from '@/components/born-into-the-machine/BitmStudioInfrastructureDiagram';
import { BitmPublicDocumentationCarousel } from '@/components/born-into-the-machine/BitmPublicDocumentationCarousel';
import { BitmInstitutionBanner } from '@/components/born-into-the-machine/BitmInstitutionBanner';
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

      <BitmInstitutionBanner />

      <BitmPublicDocumentationCarousel />

      <BitmLaborReveal chapterId="public" />
    </section>
  );
}
