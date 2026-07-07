'use client';

import { cn } from '@/lib/utils';
import type { ReadymadesSectionAccent } from '@/config/post-ai-readymades-theme';
import type { ReadymadesKeyword } from '@/content/post-ai-readymades/postAiReadymadesKeywords';
import { ReadymadesKeywordText } from '@/components/post-ai-readymades/ReadymadesKeywordText';

type ReadymadesStoryParagraphProps = {
  text: string;
  paragraphKey: string;
  highlights?: (string | ReadymadesKeyword)[];
  accent: ReadymadesSectionAccent;
  activeParagraphKey?: string | null;
  activeKeyword?: string | null;
  onParagraphActivate?: (key: string | null) => void;
  onKeywordActivate?: (term: string | null) => void;
  className?: string;
};

export function ReadymadesStoryParagraph({
  text,
  paragraphKey,
  highlights,
  accent,
  activeParagraphKey,
  activeKeyword,
  onParagraphActivate,
  onKeywordActivate,
  className,
}: ReadymadesStoryParagraphProps) {
  const isActive = activeParagraphKey === paragraphKey;

  const handleActivate = () => onParagraphActivate?.(paragraphKey);
  const handleDeactivate = () => onParagraphActivate?.(null);

  return (
    <p
      className={cn(
        'cursor-default rounded-sm border-l-2 border-transparent px-3 py-2 transition duration-300 motion-reduce:transition-none',
        isActive && accent.paragraphActiveBorder,
        isActive && accent.paragraphActiveBg,
        className,
      )}
      onMouseEnter={handleActivate}
      onMouseLeave={handleDeactivate}
      onFocus={handleActivate}
      onBlur={handleDeactivate}
      tabIndex={0}
      data-paragraph-key={paragraphKey}
    >
      <ReadymadesKeywordText
        text={text}
        highlights={highlights}
        accent={accent}
        activeKeyword={activeKeyword}
        onKeywordActivate={onKeywordActivate}
      />
    </p>
  );
}
