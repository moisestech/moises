'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { BitmCaseStudyStage } from '@/content/born-into-the-machine/bitm-case-studies';
import { cn } from '@/lib/utils';

export function BitmStageSlider({
  stages,
  title,
}: {
  stages: BitmCaseStudyStage[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const stage = stages[index] ?? stages[0];

  return (
    <div className="mt-4 border border-[#dedede] p-3 dark:border-neutral-700">
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#777777]">
        Generated → built — {title}
      </p>
      <div className="relative mb-3 aspect-video overflow-hidden bg-[#faf8f4] dark:bg-neutral-900">
        <Image
          src={stage.imageUrl}
          alt={`${title} — ${stage.label}`}
          fill
          className="object-cover"
          sizes="400px"
        />
        <span className="absolute left-2 top-2 bg-[#111111]/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white">
          {stage.label}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={stages.length - 1}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        className="w-full accent-[#ff5c00]"
        aria-label={`Stage slider for ${title}`}
      />
      <div className="mt-2 flex justify-between font-mono text-[8px] uppercase tracking-[0.1em] text-[#777777]">
        {stages.map((s, i) => (
          <span key={s.key} className={cn(i === index && 'text-[#ff5c00]')}>
            {s.label}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-[#111111] dark:text-neutral-300">{stage.caption}</p>
    </div>
  );
}
