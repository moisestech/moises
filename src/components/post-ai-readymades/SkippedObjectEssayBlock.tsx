'use client';

import { useCallback, useState } from 'react';
import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';
import { readymadesAccent } from '@/config/post-ai-readymades-theme';
import { readymadesSectionHighlights } from '@/content/post-ai-readymades/postAiReadymadesKeywords';
import { ScrollText } from 'lucide-react';
import { ReadymadesStoryParagraph } from '@/components/post-ai-readymades/ReadymadesStoryParagraph';
import { ReadymadesSectionHeader } from '@/components/post-ai-readymades/ReadymadesSectionHeader';

export function SkippedObjectEssayBlock() {
  const { skippedObject } = postAiReadymadesPage;
  const accent = readymadesAccent;
  const highlights = readymadesSectionHighlights.skipped;

  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>(null);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const handleParagraphActivate = useCallback((key: string | null) => {
    setActiveParagraphKey(key);
  }, []);

  const handleKeywordActivate = useCallback((term: string | null) => {
    setActiveKeyword(term);
  }, []);

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <ReadymadesSectionHeader eyebrow="Essay anchor" title={skippedObject.title} icon={ScrollText} className="mb-6" />
      <div className="max-w-3xl space-y-2 rounded-sm border border-[#dedede]/80 bg-gradient-to-br from-white/90 to-stone-100/40 p-5 dark:border-neutral-800 dark:from-neutral-950 dark:to-neutral-900/60 sm:p-6">
        {skippedObject.body.map((paragraph, index) => (
          <ReadymadesStoryParagraph
            key={`skipped-${index}`}
            text={paragraph}
            paragraphKey={`skipped-${index}`}
            highlights={highlights}
            accent={accent}
            activeParagraphKey={activeParagraphKey}
            activeKeyword={activeKeyword}
            onParagraphActivate={handleParagraphActivate}
            onKeywordActivate={handleKeywordActivate}
          />
        ))}
      </div>
      <button
        type="button"
        disabled
        className="mt-8 inline-flex min-h-11 cursor-not-allowed items-center border border-[#dedede] px-4 py-2 text-sm font-medium text-[#777777] dark:border-neutral-700 dark:text-neutral-500"
      >
        Read essay draft / Coming soon
      </button>
    </section>
  );
}
