'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useVolverInteraction } from '@/components/grant/no-vacancy/VolverSectionNav';
import type { VolverChapterAccent } from '@/content/grants/no-vacancy-2026/volver-a-valer';

export type VolverDetailTag = {
  id: string;
  label: string;
  /** Opened automatically in Full detail mode when true */
  openInFull?: boolean;
  content: ReactNode;
};

const accentChip: Record<VolverChapterAccent, string> = {
  arrival: 'data-[open=true]:border-[#C4A574] data-[open=true]:text-[#8B6B3D] dark:data-[open=true]:border-[#D4B896] dark:data-[open=true]:text-[#D4B896]',
  recognition:
    'data-[open=true]:border-[#1F6B5A] data-[open=true]:text-[#1F6B5A] dark:data-[open=true]:border-[#7EB8A8] dark:data-[open=true]:text-[#7EB8A8]',
  embodiment:
    'data-[open=true]:border-[#8B6B3D] data-[open=true]:text-[#8B6B3D] dark:data-[open=true]:border-[#C4A574] dark:data-[open=true]:text-[#C4A574]',
  exchange:
    'data-[open=true]:border-stone-900 data-[open=true]:text-stone-900 dark:data-[open=true]:border-stone-100 dark:data-[open=true]:text-stone-100',
  operations:
    'data-[open=true]:border-[#5C6670] data-[open=true]:text-[#5C6670] dark:data-[open=true]:border-stone-400 dark:data-[open=true]:text-stone-400',
};

export function VolverDetailTags({
  tags,
  accent = 'operations',
  className,
}: {
  tags: VolverDetailTag[];
  accent?: VolverChapterAccent;
  className?: string;
}) {
  const interaction = useVolverInteraction();
  const reduceMotion = useReducedMotion() ?? false;
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!interaction) return;
    if (interaction.detailMode === 'scan') {
      setOpenId(null);
      return;
    }
    const preferred = tags.find((t) => t.openInFull)?.id ?? tags[0]?.id ?? null;
    setOpenId(preferred);
    // tags are stable per section mount; mode/epoch drive open state
    // eslint-disable-next-line react-hooks/exhaustive-deps -- avoid reopening on every parent render
  }, [interaction?.detailMode, interaction?.scanEpoch]);

  const openTag = tags.find((t) => t.id === openId);

  return (
    <div className={cn('mt-6', className)}>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Detail layers">
        {tags.map((tag) => {
          const selected = tag.id === openId;
          return (
            <button
              key={tag.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-expanded={selected}
              data-open={selected}
              id={`tag-${tag.id}`}
              aria-controls={`panel-${tag.id}`}
              onClick={() => setOpenId((prev) => (prev === tag.id ? null : tag.id))}
              className={cn(
                'min-h-11 border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 dark:focus-visible:outline-stone-200',
                selected
                  ? cn('bg-stone-50 dark:bg-neutral-900', accentChip[accent])
                  : 'border-stone-300 text-stone-600 hover:border-stone-500 dark:border-stone-600 dark:text-stone-300',
              )}
            >
              {tag.label}
            </button>
          );
        })}
      </div>

      {openTag ? (
        <div
          role="tabpanel"
          id={`panel-${openTag.id}`}
          aria-labelledby={`tag-${openTag.id}`}
          className={cn(
            'mt-4 border border-stone-200 bg-white/50 p-4 dark:border-stone-700 dark:bg-black/20',
            !reduceMotion && 'motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150',
          )}
        >
          {openTag.content}
        </div>
      ) : (
        <p className="mt-3 text-xs text-stone-500 dark:text-stone-400">
          Select a tag to zoom into materials, construction, site, or risk notes.
        </p>
      )}
    </div>
  );
}

export function VolverTagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
