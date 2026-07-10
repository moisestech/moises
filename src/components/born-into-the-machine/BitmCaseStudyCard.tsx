'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { BitmCaseStudy } from '@/content/born-into-the-machine/bitm-case-studies';
import { BitmInfoBlock } from '@/components/born-into-the-machine/BitmInfoBlock';
import { BitmStageSlider } from '@/components/born-into-the-machine/BitmStageSlider';
import { cn } from '@/lib/utils';

export function BitmCaseStudyCard({ study }: { study: BitmCaseStudy }) {
  return (
    <article className="group border border-[#dedede] bg-white transition-shadow hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-950">
      <Link href={study.href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={study.imageUrl}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <p className="absolute bottom-3 left-3 right-3 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
            {study.hoverLine}
          </p>
        </div>
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
        {study.hasStageSlider && study.stages ? (
          <BitmStageSlider stages={study.stages} title={study.title} />
        ) : null}
        <BitmInfoBlock study={study} />
      </div>
    </article>
  );
}
