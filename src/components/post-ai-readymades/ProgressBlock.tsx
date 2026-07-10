'use client';

import { useState } from 'react';
import { CalendarRange, Target } from 'lucide-react';
import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';
import { readymadesBucketIcons } from '@/config/post-ai-readymades-theme';
import { ReadymadesSectionHeader } from '@/components/post-ai-readymades/ReadymadesSectionHeader';
import { cn } from '@/lib/utils';

export function ProgressBlock() {
  const { review } = postAiReadymadesPage;
  const progressPercent = Math.round((review.entriesArchived / review.totalEntries) * 100);
  const [hoveredBucket, setHoveredBucket] = useState<string | null>(null);

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <ReadymadesSectionHeader eyebrow="60-day review" title={review.title} icon={CalendarRange} />
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-[#111111] dark:text-neutral-200">{review.intro}</p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="border border-[#dedede] bg-gradient-to-br from-white to-emerald-50/30 p-5 dark:border-neutral-700 dark:from-neutral-950 dark:to-emerald-950/15">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
            Entries archived
          </p>
          <p className="mb-4 text-3xl font-semibold tracking-tight text-[#111111] dark:text-white">
            {String(review.entriesArchived).padStart(3, '0')} / {review.totalEntries}
          </p>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#f0eeea] dark:bg-neutral-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-sky-500 transition-all duration-700"
              style={{ width: `${Math.max(progressPercent, 2)}%` }}
            />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-500">
            First review at {review.firstReviewAt} entries
          </p>
        </div>

        <div className="border border-[#dedede] bg-gradient-to-br from-white to-sky-50/20 p-5 dark:border-neutral-700 dark:from-neutral-950 dark:to-sky-950/10">
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-sky-700 dark:text-sky-300" aria-hidden />
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
              Website prototype target
            </p>
          </div>
          <p className="mb-6 text-lg font-medium text-[#111111] dark:text-white">{review.websitePrototypeTarget}</p>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
            Review buckets
          </p>
          <ul className="space-y-2">
            {review.buckets.map((bucket) => {
              const Icon = readymadesBucketIcons[bucket];
              const isHovered = hoveredBucket === bucket;

              return (
                <li
                  key={bucket}
                  onMouseEnter={() => setHoveredBucket(bucket)}
                  onMouseLeave={() => setHoveredBucket(null)}
                  className={cn(
                    'flex items-center gap-2 border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition duration-200',
                    isHovered
                      ? 'border-emerald-600/40 bg-emerald-50/70 text-emerald-950 dark:border-emerald-500/40 dark:bg-emerald-950/25 dark:text-emerald-100'
                      : 'border-[#dedede] text-[#111111] dark:border-neutral-700 dark:text-neutral-200',
                  )}
                >
                  {Icon ? <Icon className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden /> : null}
                  {bucket}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
