'use client';

import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Study } from '@/content/post-ai-readymades/postAiReadymades';
import { studyTombstoneDate } from '@/content/post-ai-readymades/postAiReadymades';
import { StoryFrame } from '@/components/post-ai-readymades/StoryFrame';
import { StatusChip } from '@/components/post-ai-readymades/StatusChip';
import { cn } from '@/lib/utils';

type StudyCardProps = {
  study: Study;
  onSelect: (study: Study) => void;
};

function StudyTombstone({ study }: { study: Study }) {
  const lines = [
    studyTombstoneDate(study),
    study.medium,
    study.materials,
    study.dimensions,
    study.location,
  ].filter(Boolean) as string[];

  if (lines.length === 0) return null;

  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.14em] leading-relaxed text-[#777777] dark:text-neutral-500">
      {lines.join(' · ')}
    </p>
  );
}

export function StudyCard({ study, onSelect }: StudyCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(study)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'group w-full overflow-hidden border bg-white text-left transition duration-300 dark:bg-neutral-950',
        hovered
          ? 'border-emerald-600/40 shadow-[0_16px_40px_rgba(4,120,87,0.12)] -translate-y-0.5'
          : 'border-[#dedede] dark:border-neutral-700',
      )}
    >
      <div className="relative">
        <StoryFrame
          imageUrl={study.imageUrl}
          alt={`${study.title} — study ${study.number}`}
          hovered={hovered}
        />
        {study.shortDescription ? (
          <div
            className={cn(
              'absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12 transition-opacity duration-300',
              hovered ? 'opacity-100' : 'opacity-0',
            )}
          >
            <p className="text-xs leading-relaxed text-white/95">{study.shortDescription}</p>
            <span className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-200">
              Open study
              <ArrowRight className="h-3 w-3" aria-hidden />
            </span>
          </div>
        ) : (
          <div
            className={cn(
              'absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12 transition-opacity duration-300',
              hovered ? 'opacity-100' : 'opacity-0',
            )}
          >
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-200">
              Open study
              <ArrowRight className="h-3 w-3" aria-hidden />
            </span>
          </div>
        )}
      </div>
      <div className="space-y-3 border-t border-[#dedede] bg-gradient-to-b from-white to-[#faf8f4] p-4 dark:border-neutral-700 dark:from-neutral-950 dark:to-neutral-900">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#777777] dark:text-neutral-400">
            {study.number}
          </p>
          <StatusChip status={study.status} />
        </div>
        <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-[#111111] group-hover:text-emerald-900 dark:text-white dark:group-hover:text-emerald-200">
          {study.title}
          {study.artworkSlug ? <ExternalLink className="h-3.5 w-3.5 opacity-40" aria-hidden /> : null}
        </h3>
        <StudyTombstone study={study} />
        {study.shortDescription ? (
          <p className="text-sm leading-relaxed text-[#777777] dark:text-neutral-300">{study.shortDescription}</p>
        ) : null}
        {study.objectFamily ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-500">
            Object family: {study.objectFamily}
          </p>
        ) : null}
      </div>
    </button>
  );
}
