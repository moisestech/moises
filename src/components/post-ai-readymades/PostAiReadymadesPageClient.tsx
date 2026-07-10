'use client';

import Link from 'next/link';
import { InteractiveHero } from '@/components/post-ai-readymades/InteractiveHero';
import { ProjectStatementBlock } from '@/components/post-ai-readymades/ProjectStatementBlock';
import { RitualDiagram } from '@/components/post-ai-readymades/RitualDiagram';
import { StudyGrid, StudyGridFooterNote } from '@/components/post-ai-readymades/StudyGrid';
import { ObjectFamilies } from '@/components/post-ai-readymades/ObjectFamilies';
import { SkippedObjectEssayBlock } from '@/components/post-ai-readymades/SkippedObjectEssayBlock';
import { ProgressBlock } from '@/components/post-ai-readymades/ProgressBlock';
import { ParentConnectionBlock } from '@/components/post-ai-readymades/ParentConnectionBlock';
import { ReadymadesStoryGallery } from '@/components/post-ai-readymades/ReadymadesStoryGallery';
import { readymadesPageShell } from '@/config/post-ai-readymades-theme';

export function PostAiReadymadesPageClient() {
  return (
    <article
      className={`relative mx-auto max-w-6xl px-4 pb-20 pt-44 text-[#111111] dark:text-neutral-100 md:px-8 md:pt-52 md:pb-28 ${readymadesPageShell}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-32 h-64 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]"
      />
      <div className="relative">
        <InteractiveHero />
        <ProjectStatementBlock />
        <RitualDiagram />
        <StudyGrid />
        <StudyGridFooterNote />
        <ReadymadesStoryGallery />
        <ObjectFamilies />
        <SkippedObjectEssayBlock />
        <ProgressBlock />
        <ParentConnectionBlock />
      </div>
    </article>
  );
}
