'use client';

import Link from 'next/link';
import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';
import {
  readymadesFeaturedNarratives,
  readymadesStorySections,
} from '@/content/post-ai-readymades/postAiReadymadesStory';
import { InteractiveHero } from '@/components/post-ai-readymades/InteractiveHero';
import { ReadymadesStorySectionView } from '@/components/post-ai-readymades/ReadymadesStorySection';
import { ReadymadesStoryGallery } from '@/components/post-ai-readymades/ReadymadesStoryGallery';
import { ReadymadesFeaturedNarratives } from '@/components/post-ai-readymades/ReadymadesFeaturedNarratives';
import { RitualDiagram } from '@/components/post-ai-readymades/RitualDiagram';
import { StudyGrid, StudyGridFooterNote } from '@/components/post-ai-readymades/StudyGrid';
import { ObjectFamilies } from '@/components/post-ai-readymades/ObjectFamilies';
import { ProgressBlock } from '@/components/post-ai-readymades/ProgressBlock';

export function PostAiReadymadesPageClient() {
  const page = postAiReadymadesPage;

  return (
    <article className="mx-auto max-w-6xl bg-[#f7f5f0] px-4 pb-20 pt-44 text-[#111111] dark:bg-neutral-950 dark:text-neutral-100 md:px-8 md:pt-52 md:pb-28">
      <InteractiveHero />

      {readymadesStorySections.map((section) => (
        <ReadymadesStorySectionView key={section.id} section={section} />
      ))}

      <ReadymadesStoryGallery />
      <ReadymadesFeaturedNarratives items={readymadesFeaturedNarratives} />
      <RitualDiagram />
      <StudyGrid />
      <StudyGridFooterNote />
      <ObjectFamilies />
      <ProgressBlock />

      <section className="border-t border-[#dedede] pt-10 dark:border-neutral-800">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
          Continue
        </p>
        <div className="mb-8 max-w-3xl space-y-5 text-base leading-relaxed text-[#111111] dark:text-neutral-200 sm:text-lg">
          {page.parentConnection.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link
          href={page.parentConnection.backHref}
          className="inline-flex min-h-11 items-center border border-[#111111] px-4 py-2 text-sm font-medium text-[#111111] transition-colors hover:bg-[#111111] hover:text-white dark:border-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-black"
        >
          {page.parentConnection.backLabel}
        </Link>
      </section>
    </article>
  );
}
