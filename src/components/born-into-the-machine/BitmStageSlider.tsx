'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { BitmCaseStudyStage } from '@/content/born-into-the-machine/bitm-case-studies';
import { BitmAssetPlaceholder } from '@/components/born-into-the-machine/BitmAssetPlaceholder';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmStageSlider({
  stages,
  title,
}: {
  stages: BitmCaseStudyStage[];
  title: string;
}) {
  const { isMobile } = useBitm();
  const [index, setIndex] = useState(0);
  const stage = stages[index] ?? stages[0];
  const hasImage = stage.imageUrl && stage.imageStatus !== 'needed';

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(stages.length - 1, i + 1));

  return (
    <div className="mt-4 border border-[#dedede] p-3 dark:border-neutral-700">
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#777777]">
        Generated → built — {title}
      </p>
      <div className="relative mb-3 aspect-video overflow-hidden bg-[#faf8f4] dark:bg-neutral-900">
        {hasImage ? (
          <Image
            src={stage.imageUrl!}
            alt={`${title} — ${stage.label}`}
            fill
            className="object-cover"
            sizes="400px"
          />
        ) : (
          <BitmAssetPlaceholder caption={stage.caption} className="h-full w-full border-0" />
        )}
        <span className="absolute left-2 top-2 bg-[#111111]/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white">
          {stage.label}
        </span>
      </div>

      {isMobile ? (
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            className="flex items-center gap-1 font-mono text-[9px] uppercase text-[#777777] disabled:opacity-30"
            aria-label="Previous stage"
          >
            <ChevronLeft className="h-4 w-4" /> Prev
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={index === stages.length - 1}
            className="flex items-center gap-1 font-mono text-[9px] uppercase text-[#777777] disabled:opacity-30"
            aria-label="Next stage"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <input
          type="range"
          min={0}
          max={stages.length - 1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="w-full accent-[#ff5c00]"
          aria-label={`Stage slider for ${title}`}
        />
      )}

      <div className="mt-2 flex justify-between font-mono text-[8px] uppercase tracking-[0.1em] text-[#777777]">
        {stages.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(i === index && 'text-[#ff5c00]')}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-[#111111] dark:text-neutral-300">{stage.caption}</p>
    </div>
  );
}
