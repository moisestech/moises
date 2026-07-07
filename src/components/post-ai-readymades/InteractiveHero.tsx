'use client';

import { useCallback, useMemo, useState } from 'react';
import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';
import { readymadesAccent } from '@/config/post-ai-readymades-theme';
import { readymadesSectionHighlights } from '@/content/post-ai-readymades/postAiReadymadesKeywords';
import { readymadesGalleryImages, readymadesHeroParagraphs } from '@/content/post-ai-readymades/postAiReadymadesStory';
import { ReadymadesMediaPanel } from '@/components/post-ai-readymades/ReadymadesMediaPanel';
import { ReadymadesStoryParagraph } from '@/components/post-ai-readymades/ReadymadesStoryParagraph';
import { StatusChip } from '@/components/post-ai-readymades/StatusChip';
import { postAiReadymadesStudies } from '@/content/post-ai-readymades/postAiReadymades';

const heroImageIds = ['study-001', 'study-003', 'study-005', 'study-004'] as const;

export function InteractiveHero() {
  const project = postAiReadymadesPage;
  const featuredStudy = postAiReadymadesStudies[0];
  const accent = readymadesAccent;
  const highlights = readymadesSectionHighlights.hero;

  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>('hero-0');
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const handleParagraphActivate = useCallback((key: string | null) => {
    setActiveParagraphKey(key);
  }, []);

  const handleKeywordActivate = useCallback((term: string | null) => {
    setActiveKeyword(term);
  }, []);

  const activeImageId = useMemo(() => {
    if (activeParagraphKey === 'hero-1') return heroImageIds[1];
    if (activeParagraphKey === 'hero-2') return heroImageIds[2];
    if (activeParagraphKey === 'hero-0') return heroImageIds[0];
    return heroImageIds[3];
  }, [activeParagraphKey]);

  const activeImage = readymadesGalleryImages[activeImageId];

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
            {project.parentLabel} · AI Sprint {project.year}
          </p>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-sm border border-emerald-800/20 bg-emerald-50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
              {project.status}
            </span>
          </div>
          <h1 className="mb-2 text-4xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-[#777777] dark:text-neutral-300 sm:text-xl">{project.subtitle}</p>

          <div className="space-y-2 text-base leading-relaxed text-[#111111] dark:text-neutral-200 sm:text-lg">
            {readymadesHeroParagraphs.map((paragraph, index) => (
              <ReadymadesStoryParagraph
                key={`hero-${index}`}
                text={paragraph}
                paragraphKey={`hero-${index}`}
                highlights={highlights}
                accent={accent}
                activeParagraphKey={activeParagraphKey}
                activeKeyword={activeKeyword}
                onParagraphActivate={handleParagraphActivate}
                onKeywordActivate={handleKeywordActivate}
              />
            ))}
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-500">
            Hover paragraphs · underline keywords
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none lg:ml-auto">
          <ReadymadesMediaPanel
            image={activeImage}
            accent={accent}
            isActive={Boolean(activeParagraphKey || activeKeyword)}
            isHero
          />
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
              9:16 · paired study
            </p>
            <StatusChip status={featuredStudy.status} />
          </div>
        </div>
      </div>
    </section>
  );
}
