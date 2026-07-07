'use client';

import { useState } from 'react';
import type { Study } from '@/content/post-ai-readymades/postAiReadymades';
import { StoryFrame } from '@/components/post-ai-readymades/StoryFrame';
import { StatusChip } from '@/components/post-ai-readymades/StatusChip';

type StudyCardProps = {
  study: Study;
  onSelect: (study: Study) => void;
};

export function StudyCard({ study, onSelect }: StudyCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(study)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group w-full border border-[#dedede] bg-white text-left transition-colors hover:border-[#111111] dark:border-neutral-700 dark:bg-neutral-950 dark:hover:border-neutral-400"
    >
      <div className="relative">
        <StoryFrame imageUrl={study.imageUrl} alt={`${study.title} — study ${study.number}`} />
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-10 transition-opacity duration-200 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-xs leading-relaxed text-white/95">{study.shortDescription}</p>
        </div>
      </div>
      <div className="space-y-3 border-t border-[#dedede] p-4 dark:border-neutral-700">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#777777] dark:text-neutral-400">
            {study.number}
          </p>
          <StatusChip status={study.status} />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-[#111111] group-hover:underline dark:text-white">
          {study.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#777777] dark:text-neutral-300">{study.shortDescription}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-500">
          {study.objectFamily}
        </p>
      </div>
    </button>
  );
}
