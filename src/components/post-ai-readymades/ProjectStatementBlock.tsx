'use client';

import { useCallback, useState } from 'react';
import { postAiReadymadesPage } from '@/content/post-ai-readymades/postAiReadymades';
import { readymadesAccent } from '@/config/post-ai-readymades-theme';
import { readymadesSectionHighlights } from '@/content/post-ai-readymades/postAiReadymadesKeywords';
import { ReadymadesStoryParagraph } from '@/components/post-ai-readymades/ReadymadesStoryParagraph';
import { ReadymadesMediaPanel } from '@/components/post-ai-readymades/ReadymadesMediaPanel';
import { FileText } from 'lucide-react';
import { ReadymadesSectionHeader } from '@/components/post-ai-readymades/ReadymadesSectionHeader';
import { readymadesGalleryImages } from '@/content/post-ai-readymades/postAiReadymadesStory';

const statementImageIds = ['study-001', 'study-002', 'study-003'] as const;

export function ProjectStatementBlock() {
  const { projectStatement } = postAiReadymadesPage;
  const accent = readymadesAccent;
  const highlights = readymadesSectionHighlights.method;

  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>(null);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const handleParagraphActivate = useCallback((key: string | null) => {
    setActiveParagraphKey(key);
  }, []);

  const handleKeywordActivate = useCallback((term: string | null) => {
    setActiveKeyword(term);
  }, []);

  const activeImageId =
    activeParagraphKey === 'statement-1'
      ? statementImageIds[2]
      : activeParagraphKey === 'statement-0'
        ? statementImageIds[1]
        : statementImageIds[0];

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <ReadymadesSectionHeader eyebrow="Project statement" title="Wall text" icon={FileText} className="mb-6" />
          <div className="space-y-2 text-base leading-relaxed text-[#111111] dark:text-neutral-200 sm:text-lg">
            {projectStatement.map((paragraph, index) => (
              <ReadymadesStoryParagraph
                key={`statement-${index}`}
                text={paragraph}
                paragraphKey={`statement-${index}`}
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
        <ReadymadesMediaPanel
          image={readymadesGalleryImages[activeImageId]}
          accent={accent}
          isActive={Boolean(activeParagraphKey || activeKeyword)}
        />
      </div>
    </section>
  );
}
