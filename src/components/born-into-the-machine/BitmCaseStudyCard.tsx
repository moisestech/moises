'use client';

import Link from 'next/link';
import type { BitmCaseStudy } from '@/content/born-into-the-machine/bitm-case-studies';
import { BitmInfoBlock } from '@/components/born-into-the-machine/BitmInfoBlock';
import { BitmStageSlider } from '@/components/born-into-the-machine/BitmStageSlider';
import { BitmPlausibilityBlock } from '@/components/born-into-the-machine/BitmPlausibilityBlock';
import { BitmCredits } from '@/components/born-into-the-machine/BitmCredits';
import { BitmArchivePresentation } from '@/components/born-into-the-machine/BitmArchivePresentation';
import { BitmPhotographicSequence } from '@/components/born-into-the-machine/BitmPhotographicSequence';
import { BitmCaseStudyCardImage } from '@/components/born-into-the-machine/BitmCaseStudyCardImage';

export function BitmCaseStudyCard({ study }: { study: BitmCaseStudy }) {
  return (
    <article className="group border border-[#dedede] bg-white transition-shadow hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-950">
      <Link href={study.href} className="block">
        <BitmCaseStudyCardImage study={study} />
        <div className="p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ff5c00]">
            CASE {study.caseNumber}
          </p>
          <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-neutral-50">{study.title}</h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#777777]">
            {study.medium} · {study.year}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <BitmPlausibilityBlock audit={study.plausibility} title={study.title} />
        {study.caseStudyPresentation === 'stage-slider' && study.stages ? (
          <BitmStageSlider stages={study.stages} title={study.title} />
        ) : null}
        {study.caseStudyPresentation === 'archive' && study.archiveEntries ? (
          <BitmArchivePresentation entries={study.archiveEntries} title={study.title} />
        ) : null}
        {study.caseStudyPresentation === 'photographic-sequence' && study.photoSequence ? (
          <BitmPhotographicSequence steps={study.photoSequence} title={study.title} />
        ) : null}
        <BitmInfoBlock study={study} />
        {study.credits ? <BitmCredits credits={study.credits} /> : null}
      </div>
    </article>
  );
}
