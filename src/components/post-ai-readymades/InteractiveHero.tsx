'use client';

import { useCallback, useState } from 'react';
import { BookOpen } from 'lucide-react';
import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';
import { readymadesAccent } from '@/config/post-ai-readymades-theme';
import { readymadesSectionHighlights } from '@/content/post-ai-readymades/postAiReadymadesKeywords';
import { StoryFrame } from '@/components/post-ai-readymades/StoryFrame';
import { StatusChip } from '@/components/post-ai-readymades/StatusChip';
import { postAiReadymadesStudies } from '@/content/post-ai-readymades/postAiReadymades';
import { ReadymadesStoryParagraph } from '@/components/post-ai-readymades/ReadymadesStoryParagraph';
import { CatalogueAnswerCard } from '@/components/post-ai-readymades/CatalogueAnswerCard';
import { cn } from '@/lib/utils';

export function InteractiveHero() {
  const project = postAiReadymadesPage;
  const featuredStudy = postAiReadymadesStudies[0];
  const accent = readymadesAccent;
  const highlights = readymadesSectionHighlights.hero;

  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>(null);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);
  const [frameHovered, setFrameHovered] = useState(false);

  const handleParagraphActivate = useCallback((key: string | null) => {
    setActiveParagraphKey(key);
  }, []);

  const handleKeywordActivate = useCallback((term: string | null) => {
    setActiveKeyword(term);
  }, []);

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <div
        className={cn(
          'rounded-sm border border-[#dedede]/80 p-6 sm:p-8',
          'bg-gradient-to-br from-white/95 via-[#faf8f4] to-emerald-50/25',
          'dark:border-neutral-800 dark:from-neutral-950 dark:via-neutral-950 dark:to-emerald-950/15',
        )}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-emerald-700/20 bg-emerald-50/80 px-3 py-1.5 dark:border-emerald-500/20 dark:bg-emerald-950/30">
              <BookOpen className="h-3.5 w-3.5 text-emerald-800 dark:text-emerald-300" aria-hidden />
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-900 dark:text-emerald-200">
                {project.parentLabel}
              </p>
            </div>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mb-2 text-lg leading-relaxed text-[#777777] dark:text-neutral-300 sm:text-xl">
              {project.subtitle}
            </p>
            <p className="mb-8 text-base italic leading-relaxed text-[#555555] dark:text-neutral-400 sm:text-lg">
              {project.subtitleSharp}
            </p>

            <ReadymadesStoryParagraph
              text={project.heroStatement}
              paragraphKey="hero-statement"
              highlights={highlights}
              accent={accent}
              activeParagraphKey={activeParagraphKey}
              activeKeyword={activeKeyword}
              onParagraphActivate={handleParagraphActivate}
              onKeywordActivate={handleKeywordActivate}
              className="text-base sm:text-lg"
            />
          </div>

          <div
            className="mx-auto w-full max-w-sm lg:max-w-none lg:ml-auto"
            onMouseEnter={() => setFrameHovered(true)}
            onMouseLeave={() => setFrameHovered(false)}
          >
            <div className="rounded-sm bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10 p-1">
              <StoryFrame
                imageUrl={featuredStudy.imageUrl}
                alt={`${featuredStudy.title} — study ${featuredStudy.number}`}
                label={featuredStudy.title}
                statusLabel={featuredStudy.status}
                hovered={frameHovered}
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#777777] dark:text-neutral-400">
                9:16 · IG Story frame
              </p>
              <StatusChip status={featuredStudy.status} />
            </div>
          </div>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-3">
          {project.catalogueAnswers.map((item) => (
            <CatalogueAnswerCard key={item.question} question={item.question} answer={item.answer} />
          ))}
        </dl>
      </div>
    </section>
  );
}
