'use client';

import Image from 'next/image';
import { AssetPlaceholder } from '@/components/opportunities/creative-agency/AssetPlaceholder';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { MotionSection } from '@/content/opportunities/creativeAgencyDossier';
import { cn } from '@/lib/utils';

type MotionAndAnimationSectionProps = {
  data: MotionSection;
  sectionId?: string;
  className?: string;
};

export function MotionAndAnimationSection({
  data,
  sectionId = 'motion',
  className,
}: MotionAndAnimationSectionProps) {
  return (
    <section id={sectionId} className={cn(opp.section, className)}>
      <h2 className={opp.h2}>{data.title}</h2>
      <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{data.intro}</p>
      <p className={cn(opp.subtle, 'mt-2 max-w-3xl')}>{data.toolsLine}</p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {data.clips.map((clip) => (
          <li
            key={clip.id}
            className="overflow-hidden border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-950"
          >
            <div className="relative aspect-video bg-stone-100 dark:bg-stone-900">
              {clip.videoSrc ? (
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={clip.posterSrc}
                >
                  <source src={clip.videoSrc} />
                </video>
              ) : clip.posterLocal || !clip.posterSrc.startsWith('http') ? (
                <OpportunityCardImage
                  src={clip.posterSrc}
                  alt={clip.posterAlt}
                  local
                />
              ) : (
                <Image
                  src={clip.posterSrc}
                  alt={clip.posterAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
            <div className="p-4 sm:p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300">
                {clip.roleLabel}
              </p>
              <h3 className={cn(opp.h3, 'mt-1.5')}>{clip.title}</h3>
              <p className={cn(opp.body, 'mt-2 text-sm')}>{clip.contribution}</p>
              {clip.placeholderNote ? (
                <div className="mt-3">
                  <AssetPlaceholder
                    badge="Clip pending"
                    title="Motion file not attached yet"
                    note={clip.placeholderNote}
                    aspectClass="aspect-auto min-h-0 py-3"
                  />
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
