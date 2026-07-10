'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';
import { readymadesAccent } from '@/config/post-ai-readymades-theme';
import { readymadesSectionHighlights } from '@/content/post-ai-readymades/postAiReadymadesKeywords';
import { ReadymadesStoryParagraph } from '@/components/post-ai-readymades/ReadymadesStoryParagraph';
import { ReadymadesMediaPanel } from '@/components/post-ai-readymades/ReadymadesMediaPanel';
import { readymadesGalleryImages } from '@/content/post-ai-readymades/postAiReadymadesStory';

export function ParentConnectionBlock() {
  const { parentConnection } = postAiReadymadesPage;
  const accent = readymadesAccent;
  const highlights = readymadesSectionHighlights.parent;

  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>(null);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const handleParagraphActivate = useCallback((key: string | null) => {
    setActiveParagraphKey(key);
  }, []);

  const handleKeywordActivate = useCallback((term: string | null) => {
    setActiveKeyword(term);
  }, []);

  const activeImageId = activeParagraphKey === 'parent-1' ? 'study-006' : 'bitm-writing';

  return (
    <section className="border-t border-[#dedede] pt-10 dark:border-neutral-800">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
            Parent project
          </p>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
            Born Into the Machine
          </h2>
          <div className="mb-8 space-y-2 text-base leading-relaxed text-[#111111] dark:text-neutral-200 sm:text-lg">
            {parentConnection.body.map((paragraph, index) => (
              <ReadymadesStoryParagraph
                key={`parent-${index}`}
                text={paragraph}
                paragraphKey={`parent-${index}`}
                highlights={highlights}
                accent={accent}
                activeParagraphKey={activeParagraphKey}
                activeKeyword={activeKeyword}
                onParagraphActivate={handleParagraphActivate}
                onKeywordActivate={handleKeywordActivate}
              />
            ))}
          </div>
          <Link
            href={parentConnection.backHref}
            className="inline-flex min-h-11 items-center border border-[#111111] px-4 py-2 text-sm font-medium text-[#111111] transition-colors hover:bg-[#111111] hover:text-white dark:border-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-black"
          >
            {parentConnection.backLabel}
          </Link>
        </div>
        <ReadymadesMediaPanel
          image={readymadesGalleryImages[activeImageId]}
          accent={accent}
          isActive={Boolean(activeParagraphKey || activeKeyword)}
        />
      </div>
    </section>
  );
}
