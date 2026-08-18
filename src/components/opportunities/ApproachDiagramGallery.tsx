'use client';

import Image from 'next/image';
import { OpportunityZoomTrigger } from '@/components/opportunities/OpportunityZoomLightbox';
import type { ProcessDiagram } from '@/content/opportunities/types';
import { useTheme } from '@/contexts/ThemeContext';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

function resolveDiagramSrc(diagram: ProcessDiagram, theme: 'light' | 'dark') {
  return theme === 'dark' && diagram.srcDark ? diagram.srcDark : diagram.src;
}

type ApproachDiagramGalleryProps = {
  diagrams: ProcessDiagram[];
  className?: string;
};

function DiagramTile({ diagram }: { diagram: ProcessDiagram }) {
  const { theme } = useTheme();
  const imageSrc = resolveDiagramSrc(diagram, theme);

  return (
    <OpportunityZoomTrigger src={imageSrc} alt={diagram.alt} caption={diagram.caption} className="rounded-xl">
      <div
        className={cn(
          'overflow-hidden rounded-xl border border-stone-200 bg-white text-left shadow-sm transition dark:border-stone-700 dark:bg-stone-900',
          'group-hover/zoom:border-cyan-400/40 group-hover/zoom:shadow-md dark:group-hover/zoom:border-cyan-500/45',
        )}
      >
        <div className="relative aspect-[16/10] bg-stone-100 dark:bg-stone-800">
          <Image
            key={imageSrc}
            src={imageSrc}
            alt={diagram.alt}
            fill
            className="object-contain p-2 transition-transform duration-200 group-hover/zoom:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        {diagram.caption ? (
          <p className={`border-t border-stone-100 px-3 py-2 dark:border-stone-800 ${opp.subtle}`}>
            {diagram.caption}
          </p>
        ) : null}
      </div>
    </OpportunityZoomTrigger>
  );
}

export function ApproachDiagramGallery({ diagrams, className }: ApproachDiagramGalleryProps) {
  if (!diagrams.length) return null;

  return (
    <div className={cn('grid gap-4 sm:grid-cols-2', className)}>
      {diagrams.map((diagram) => (
        <DiagramTile key={diagram.src} diagram={diagram} />
      ))}
    </div>
  );
}
