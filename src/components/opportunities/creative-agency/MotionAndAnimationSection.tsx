'use client';

import Image from 'next/image';
import { AssetPlaceholder } from '@/components/opportunities/creative-agency/AssetPlaceholder';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { MotionClip, MotionSection } from '@/content/opportunities/creativeAgencyDossier';
import { cn } from '@/lib/utils';

type MotionAndAnimationSectionProps = {
  data: MotionSection;
  sectionId?: string;
  className?: string;
};

function ClipMedia({ clip }: { clip: MotionClip }) {
  if (clip.youtubeId) {
    return (
      <iframe
        title={clip.title}
        src={`https://www.youtube-nocookie.com/embed/${clip.youtubeId}?rel=0`}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  if (clip.videoSrc) {
    return (
      <video
        className="h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={clip.posterSrc}
      >
        <source src={clip.videoSrc} />
      </video>
    );
  }

  if (clip.posterLocal || !clip.posterSrc.startsWith('http')) {
    return <OpportunityCardImage src={clip.posterSrc} alt={clip.posterAlt} local />;
  }

  return (
    <Image
      src={clip.posterSrc}
      alt={clip.posterAlt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

function ClipCard({ clip, featured }: { clip: MotionClip; featured?: boolean }) {
  return (
    <li
      className={cn(
        'overflow-hidden border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-950',
        featured && 'sm:col-span-2',
      )}
    >
      <div className="relative aspect-video bg-stone-100 dark:bg-stone-900">
        <ClipMedia clip={clip} />
      </div>
      <div className={cn('p-4 sm:p-5', featured && 'sm:p-6')}>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300">
          {clip.roleLabel}
        </p>
        <h3 className={cn(opp.h3, 'mt-1.5')}>{clip.title}</h3>
        <p className={cn(opp.body, 'mt-2 text-sm', featured && 'max-w-3xl sm:text-base')}>
          {clip.contribution}
        </p>
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
  );
}

export function MotionAndAnimationSection({
  data,
  sectionId = 'motion',
  className,
}: MotionAndAnimationSectionProps) {
  const featured = data.clips.filter((c) => c.featured);
  const rest = data.clips.filter((c) => !c.featured);

  return (
    <section id={sectionId} className={cn(opp.section, className)}>
      <h2 className={opp.h2}>{data.title}</h2>
      <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{data.intro}</p>
      <p className={cn(opp.subtle, 'mt-2 max-w-3xl')}>{data.toolsLine}</p>

      {featured.length ? (
        <ul className="mt-8 grid gap-6">
          {featured.map((clip) => (
            <ClipCard key={clip.id} clip={clip} featured />
          ))}
        </ul>
      ) : null}

      {rest.length ? (
        <ul className={cn('grid gap-6 sm:grid-cols-2', featured.length ? 'mt-6' : 'mt-8')}>
          {rest.map((clip) => (
            <ClipCard key={clip.id} clip={clip} />
          ))}
        </ul>
      ) : null}
    </section>
  );
}
