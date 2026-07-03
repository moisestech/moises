'use client';

import { cn } from '@/lib/utils';
import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';
import type { CareerPacketKeyword } from '@/content/ai-engineering/career-packet-keywords';
import { CareerPacketKeywordText } from './CareerPacketKeywordText';

type CareerPacketParagraphProps = {
  text: string;
  paragraphKey: string;
  highlights?: (string | CareerPacketKeyword)[];
  accent: CareerPacketSectionAccent;
  activeParagraphKey?: string | null;
  activeKeyword?: string | null;
  onParagraphActivate?: (key: string | null) => void;
  onKeywordActivate?: (term: string | null) => void;
  className?: string;
};

export function CareerPacketParagraph({
  text,
  paragraphKey,
  highlights,
  accent,
  activeParagraphKey,
  activeKeyword,
  onParagraphActivate,
  onKeywordActivate,
  className,
}: CareerPacketParagraphProps) {
  const isActive = activeParagraphKey === paragraphKey;

  const handleActivate = () => onParagraphActivate?.(paragraphKey);
  const handleDeactivate = () => onParagraphActivate?.(null);

  const handleClick = () => {
    if (isActive) {
      handleDeactivate();
    } else {
      handleActivate();
    }
  };

  return (
    <p
      className={cn(
        'rounded-sm border-l-2 border-transparent px-3 py-2 transition duration-300 motion-reduce:transition-none',
        isActive && accent.paragraphActiveBorder,
        isActive && accent.paragraphActiveBg,
        className,
      )}
      onMouseEnter={handleActivate}
      onMouseLeave={handleDeactivate}
      onFocus={handleActivate}
      onBlur={handleDeactivate}
      onClick={handleClick}
      tabIndex={0}
      data-paragraph-key={paragraphKey}
    >
      <CareerPacketKeywordText
        text={text}
        highlights={highlights}
        accent={accent}
        activeKeyword={activeKeyword}
        onKeywordActivate={onKeywordActivate}
      />
    </p>
  );
}
