'use client';

import { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal';
import { dossierTypography, grantCardClass } from '@/components/grant/dossier/GrantDossierUi';
import { getWolfsonianAccent } from '@/config/wolfsonian-section-theme';
import {
  wolfsonianImageById,
  type WolfsonianImageEffect,
  type WolfsonianStoryBlock,
} from '@/content/grants/wolfsonian-fellowship';
import { WolfsonianKeywordText } from './WolfsonianKeywordText';
import { WolfsonianCitationChain } from './WolfsonianCitationChain';
import { WolfsonianRoleExplorer } from './WolfsonianRoleExplorer';
import { WolfsonianWorkEvidence } from './WolfsonianWorkEvidence';
import { WolfsonianDownloadCards } from './WolfsonianDownloadCards';
import { WolfsonianPsychographicMap } from './WolfsonianPsychographicMap';
import { WolfsonianMediaFrame } from './WolfsonianMediaFrame';
import { WolfsonianStoryParagraphs, type ParagraphActivation } from './WolfsonianStoryParagraph';
import { WolfsonianInteractHint } from './WolfsonianInteractHint';

type WolfsonianStoryBlockProps = {
  block: WolfsonianStoryBlock;
  isHero?: boolean;
};

export function WolfsonianStoryBlockView({ block, isHero = false }: WolfsonianStoryBlockProps) {
  const accent = getWolfsonianAccent(block.id);
  const image = block.media?.type === 'image' ? wolfsonianImageById(block.media.imageId) : undefined;

  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>(null);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);
  const [imageEffect, setImageEffect] = useState<WolfsonianImageEffect | null>(null);
  const [citationStep, setCitationStep] = useState<string | null>(null);

  const handleParagraphActivate = useCallback((activation: ParagraphActivation | null) => {
    if (!activation) {
      setActiveParagraphKey(null);
      setImageEffect(null);
      return;
    }
    setActiveParagraphKey(activation.activeKey ?? null);
    setImageEffect(activation.imageEffect ?? null);
  }, []);

  const handleKeywordActivate = useCallback((term: string | null) => {
    setActiveKeyword(term);
  }, []);

  const handlePressureActivate = useCallback((word: string | null) => {
    setActiveKeyword(word);
    if (word) setImageEffect('pressure');
  }, []);

  const textColumn = (
    <div className={cn(dossierTypography.prose)}>
      {block.eyebrow ? <p className={cn(dossierTypography.eyebrow, accent.eyebrow)}>{block.eyebrow}</p> : null}
      {isHero ? (
        <h1 className={cn('mt-3', dossierTypography.h1)}>{block.title}</h1>
      ) : (
        <h2 className={cn('mt-3', dossierTypography.h2)}>{block.title}</h2>
      )}
      {block.thesis ? (
        <p className={cn('mt-4 italic', dossierTypography.pullQuote)}>
          <WolfsonianKeywordText
            text={block.thesis}
            highlights={block.highlightWords}
            accent={accent}
            activeKeyword={activeKeyword}
            onKeywordActivate={handleKeywordActivate}
          />
        </p>
      ) : null}
      <WolfsonianStoryParagraphs
        paragraphs={block.body}
        highlights={block.highlightWords}
        accent={accent}
        activeParagraphKey={activeParagraphKey}
        activeKeyword={activeKeyword}
        onParagraphActivate={handleParagraphActivate}
        onKeywordActivate={handleKeywordActivate}
        className={cn('mt-5', dossierTypography.body)}
      />
      {block.aside ? (
        <p className={cn('mt-4 border-l-2 pl-4', accent.paragraphActiveBorder, dossierTypography.meta)}>
          {block.id === 'society-inside-archive' ? (
            <WolfsonianInteractHint
              touch="Tap a role below to trace its relationships across the institutional network."
              hover={block.aside}
            />
          ) : (
            block.aside
          )}
        </p>
      ) : null}
      {block.goals ? (
        <ol className="mt-6 space-y-3">
          {block.goals.map((goal, index) => (
            <li key={goal.label} className={cn(grantCardClass, 'flex gap-4 p-4', accent.mediaBorder)}>
              <span className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{goal.label}</p>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{goal.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : null}
      {block.media?.type === 'interactive' && block.media.component === 'psychographic' ? (
        <div className="mt-6">
          <WolfsonianPsychographicMap variant="typology" />
        </div>
      ) : null}
      {block.id === 'designed-belief' ? (
        <div className="mt-6">
          <WolfsonianPsychographicMap variant="pressures" onPressureActivate={handlePressureActivate} />
        </div>
      ) : null}
      {block.id === 'citation-layer' ? (
        <WolfsonianCitationChain onStepChange={setCitationStep} />
      ) : null}
    </div>
  );

  const imageColumn = image ? (
    <WolfsonianMediaFrame
      image={image}
      sectionId={block.id}
      accent={accent}
      isHero={isHero}
      activeKeyword={activeKeyword}
      imageEffect={imageEffect ?? (block.id === 'citation-layer' ? 'citation' : null)}
      citationStep={citationStep}
    />
  ) : null;

  const interactiveColumn = () => {
    if (block.media?.type !== 'interactive') return null;
    switch (block.media.component) {
      case 'works':
        return <WolfsonianWorkEvidence />;
      case 'downloads':
        return <WolfsonianDownloadCards />;
      default:
        return null;
    }
  };

  const layout = block.layout ?? 'stack';
  const splitLayout = (layout === 'textLeft' || layout === 'textRight') && Boolean(imageColumn);

  const whyWolfsonianTypology =
    block.id === 'why-wolfsonian' ? (
      <div className={cn(splitLayout && 'mt-8')}>
        <WolfsonianPsychographicMap variant="typology" />
      </div>
    ) : null;

  const sectionBelowGrid = (
    <>
      {whyWolfsonianTypology}
      {interactiveColumn()}
      {block.id === 'related-works' ? <WolfsonianWorkEvidence collapsibleOnMobile /> : null}
      {block.id === 'society-inside-archive' ? (
        <WolfsonianRoleExplorer activeKeyword={activeKeyword} />
      ) : null}
    </>
  );

  return (
    <LearnAiReveal
      as="section"
      id={block.id}
      className={cn(
        'scroll-mt-[var(--wolfsonian-scroll-offset,12rem)] border-t pt-10 sm:pt-14',
        accent.sectionBorder,
        'bg-gradient-to-b',
        accent.sectionGradient,
      )}
    >
      {splitLayout ? (
        <>
          <div
            className={cn(
              'grid items-start gap-8 md:grid-cols-2 md:gap-12 [&>*]:min-w-0',
              layout === 'textRight' && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1',
            )}
          >
            {textColumn}
            {imageColumn}
          </div>
          {sectionBelowGrid}
        </>
      ) : (
        <div className="space-y-8">
          {textColumn}
          {imageColumn}
          {sectionBelowGrid}
        </div>
      )}
    </LearnAiReveal>
  );
}
