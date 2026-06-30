'use client';

import { cn } from '@/lib/utils';
import type { StoryParagraph, WolfsonianImageEffect } from '@/content/grants/wolfsonian-fellowship';
import { paragraphMeta, paragraphText } from '@/content/grants/wolfsonian-fellowship';
import type { WolfsonianSectionAccent } from '@/config/wolfsonian-section-theme';
import { WolfsonianKeywordText } from './WolfsonianKeywordText';

export type ParagraphActivation = {
  activeKey?: string;
  imageEffect?: WolfsonianImageEffect;
  imageHotspots?: string[];
};

type WolfsonianStoryParagraphProps = {
  paragraph: StoryParagraph;
  index: number;
  highlights?: (string | import('@/content/grants/wolfsonian-fellowship').WolfsonianKeyword)[];
  accent: WolfsonianSectionAccent;
  activeParagraphKey?: string | null;
  activeKeyword?: string | null;
  onParagraphActivate?: (activation: ParagraphActivation | null) => void;
  onKeywordActivate?: (term: string | null) => void;
  className?: string;
};

export function WolfsonianStoryParagraph({
  paragraph,
  index,
  highlights,
  accent,
  activeParagraphKey,
  activeKeyword,
  onParagraphActivate,
  onKeywordActivate,
  className,
}: WolfsonianStoryParagraphProps) {
  const text = paragraphText(paragraph);
  const meta = paragraphMeta(paragraph);
  const paragraphHighlights = meta?.highlightWords ?? highlights;
  const isInteractive = Boolean(meta?.activeKey || meta?.imageEffect);
  const isActive = meta?.activeKey != null && activeParagraphKey === meta.activeKey;

  const handleActivate = () => {
    if (!meta) return;
    onParagraphActivate?.({
      activeKey: meta.activeKey,
      imageEffect: meta.imageEffect,
      imageHotspots: meta.imageHotspots,
    });
  };

  const handleDeactivate = () => {
    if (!meta) return;
    onParagraphActivate?.(null);
  };

  const content = (
    <WolfsonianKeywordText
      text={text}
      highlights={paragraphHighlights}
      accent={accent}
      activeKeyword={activeKeyword}
      onKeywordActivate={onKeywordActivate}
    />
  );

  if (!isInteractive) {
    return (
      <p className={cn(className)}>
        {content}
      </p>
    );
  }

  return (
    <p
      className={cn(
        'rounded-sm border-l-2 border-transparent px-3 py-2 transition',
        isActive && accent.paragraphActiveBorder,
        isActive && accent.paragraphActiveBg,
        className,
      )}
      onMouseEnter={handleActivate}
      onMouseLeave={handleDeactivate}
      onFocus={handleActivate}
      onBlur={handleDeactivate}
      tabIndex={0}
      data-paragraph-key={meta?.activeKey ?? `paragraph-${index}`}
    >
      {content}
    </p>
  );
}

export function WolfsonianStoryParagraphs({
  paragraphs,
  highlights,
  accent,
  activeParagraphKey,
  activeKeyword,
  onParagraphActivate,
  onKeywordActivate,
  className,
}: {
  paragraphs: StoryParagraph[];
  highlights?: (string | import('@/content/grants/wolfsonian-fellowship').WolfsonianKeyword)[];
  accent: WolfsonianSectionAccent;
  activeParagraphKey?: string | null;
  activeKeyword?: string | null;
  onParagraphActivate?: (activation: ParagraphActivation | null) => void;
  onKeywordActivate?: (term: string | null) => void;
  className?: string;
}) {
  return (
    <div className={cn('space-y-4', className)}>
      {paragraphs.map((paragraph, index) => (
        <WolfsonianStoryParagraph
          key={paragraphText(paragraph).slice(0, 48) + index}
          paragraph={paragraph}
          index={index}
          highlights={highlights}
          accent={accent}
          activeParagraphKey={activeParagraphKey}
          activeKeyword={activeKeyword}
          onParagraphActivate={onParagraphActivate}
          onKeywordActivate={onKeywordActivate}
        />
      ))}
    </div>
  );
}
