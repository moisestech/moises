'use client';

import { useCallback, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { readymadesAccent } from '@/config/post-ai-readymades-theme';
import { readymadesSectionHighlights } from '@/content/post-ai-readymades/postAiReadymadesKeywords';
import {
  readymadesGalleryImages,
  type ReadymadesStorySection,
} from '@/content/post-ai-readymades/postAiReadymadesStory';
import { ReadymadesMediaPanel } from '@/components/post-ai-readymades/ReadymadesMediaPanel';
import { ReadymadesStoryParagraph } from '@/components/post-ai-readymades/ReadymadesStoryParagraph';

type ReadymadesStorySectionViewProps = {
  section: ReadymadesStorySection;
};

export function ReadymadesStorySectionView({ section }: ReadymadesStorySectionViewProps) {
  const accent = readymadesAccent;
  const highlights = readymadesSectionHighlights[section.highlightKey] ?? [];

  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>(null);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const handleParagraphActivate = useCallback((key: string | null) => {
    setActiveParagraphKey(key);
  }, []);

  const handleKeywordActivate = useCallback((term: string | null) => {
    setActiveKeyword(term);
  }, []);

  const activeImageId = useMemo(() => {
    if (activeParagraphKey) {
      const paragraph = section.paragraphs.find((p) => p.key === activeParagraphKey);
      if (paragraph?.imageId) return paragraph.imageId;
    }
    return section.defaultImageId;
  }, [activeParagraphKey, section.defaultImageId, section.paragraphs]);

  const activeImage = readymadesGalleryImages[activeImageId];

  const textColumn = (
    <div>
      <p className={cn('font-mono text-xs uppercase tracking-[0.22em]', accent.eyebrow)}>{section.eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
        {section.title}
      </h2>
      <div className="mt-6 space-y-2 text-base leading-relaxed text-[#111111] dark:text-neutral-200 sm:text-lg">
        {section.paragraphs.map((paragraph) => (
          <ReadymadesStoryParagraph
            key={paragraph.key}
            text={paragraph.text}
            paragraphKey={paragraph.key}
            highlights={highlights}
            accent={accent}
            activeParagraphKey={activeParagraphKey}
            activeKeyword={activeKeyword}
            onParagraphActivate={handleParagraphActivate}
            onKeywordActivate={handleKeywordActivate}
          />
        ))}
      </div>
    </div>
  );

  const imageColumn = (
    <ReadymadesMediaPanel
      image={activeImage}
      accent={accent}
      isActive={Boolean(activeParagraphKey || activeKeyword)}
    />
  );

  const isSplit = section.layout === 'textLeft' || section.layout === 'textRight';

  return (
    <section
      id={section.id}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20"
    >
      {isSplit ? (
        <div
          className={cn(
            'grid items-start gap-10 lg:grid-cols-2 lg:gap-14',
            section.layout === 'textRight' && 'lg:[&>*:first-child]:order-2',
          )}
        >
          {textColumn}
          {imageColumn}
        </div>
      ) : (
        <div className="space-y-10">
          {textColumn}
          <div className="mx-auto max-w-md">{imageColumn}</div>
        </div>
      )}
    </section>
  );
}
