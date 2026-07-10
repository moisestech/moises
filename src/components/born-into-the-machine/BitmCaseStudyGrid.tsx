'use client';

import { useRef } from 'react';
import { bitmCaseStudies } from '@/content/born-into-the-machine/bitm-case-studies';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmCaseStudyCard } from '@/components/born-into-the-machine/BitmCaseStudyCard';
import { BitmContactSheetTransition } from '@/components/born-into-the-machine/BitmContactSheetTransition';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';
import Link from 'next/link';

export function BitmCaseStudyGrid() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('case-studies', ref);
  const accent = getBitmChapterAccent('case-studies');

  return (
    <section
      id="case-studies"
      ref={ref}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader
        eyebrow="Chapter 05"
        title="Case Studies"
        iconKey="iteration"
        accent={accent}
      />
      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#111111] dark:text-neutral-200">
        {bitmPage.caseStudiesIntro}
      </p>

      <BitmContactSheetTransition />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {bitmCaseStudies.map((study) => (
          <BitmCaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      <p className="mt-10 text-center">
        <Link
          href="/research/born-into-the-machine/365-post-ai-readymades"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#ff5c00] underline underline-offset-4 hover:no-underline"
        >
          365 Post-AI Readymades — daily catalogue →
        </Link>
      </p>

      <BitmLaborReveal chapterId="case-studies" />
    </section>
  );
}
