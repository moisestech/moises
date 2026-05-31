'use client';

import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            'group relative w-full overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-left shadow-sm transition',
            'hover:border-cyan-400/40 dark:hover:border-cyan-500/45 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400',
          )}
        >
          <div className="relative aspect-[16/10] bg-stone-100 dark:bg-stone-800">
            <Image
              key={imageSrc}
              src={imageSrc}
              alt={diagram.alt}
              fill
              className="object-contain p-2 transition-transform duration-200 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-stone-900/75 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm dark:bg-stone-950/85">
              <Maximize2 className="h-3.5 w-3.5" aria-hidden />
              Full screen
            </span>
          </div>
          {diagram.caption ? (
            <p className={`border-t border-stone-100 dark:border-stone-800 px-3 py-2 ${opp.subtle}`}>
              {diagram.caption}
            </p>
          ) : null}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[96vh] w-[min(96vw,1200px)] max-w-[96vw] border-stone-200 bg-stone-50 p-3 dark:border-stone-700 dark:bg-stone-950 sm:p-4">
        <DialogTitle className="sr-only">{diagram.alt}</DialogTitle>
        <DialogDescription className="sr-only">Expanded view of architecture diagram</DialogDescription>
        <div className="relative max-h-[calc(96vh-4rem)] w-full overflow-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={diagram.alt}
            className="mx-auto h-auto max-h-[calc(96vh-4rem)] w-full object-contain"
          />
        </div>
        {diagram.caption ? (
          <p className={`mt-2 text-center ${opp.muted}`}>{diagram.caption}</p>
        ) : null}
      </DialogContent>
    </Dialog>
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
