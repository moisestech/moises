'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ReadymadesSectionAccent } from '@/config/post-ai-readymades-theme';
import type { ReadymadesGalleryImage } from '@/content/post-ai-readymades/postAiReadymadesStory';
import { StoryFrame } from '@/components/post-ai-readymades/StoryFrame';

type ReadymadesMediaPanelProps = {
  image?: ReadymadesGalleryImage;
  accent: ReadymadesSectionAccent;
  isActive?: boolean;
  isHero?: boolean;
  className?: string;
};

export function ReadymadesMediaPanel({
  image,
  accent,
  isActive = false,
  isHero = false,
  className,
}: ReadymadesMediaPanelProps) {
  const isStory = image?.aspect !== 'landscape';

  return (
    <figure
      className={cn(
        'overflow-hidden border bg-white transition-shadow duration-500 dark:bg-neutral-950',
        accent.mediaBorder,
        isActive && 'shadow-[0_0_0_1px_rgba(var(--readymades-glow),0.35),0_12px_40px_rgba(0,0,0,0.08)]',
        className,
      )}
      style={{ ['--readymades-glow' as string]: accent.mediaGlowRgb }}
    >
      {image && image.src ? (
        <div
          className={cn(
            'relative w-full overflow-hidden bg-[#f0eeea] dark:bg-neutral-900',
            isStory ? 'aspect-[9/16]' : 'aspect-[4/3]',
            isHero && 'max-h-[min(80vh,720px)]',
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={cn(
              'object-cover transition duration-700 motion-reduce:transition-none',
              isActive && 'scale-[1.02]',
            )}
            sizes={isHero ? '(max-width: 768px) 100vw, 480px' : '(max-width: 768px) 100vw, 40vw'}
            priority={isHero}
          />
          {image.studyNumber ? (
            <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-black/50 px-3 py-2 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white">
                Study {image.studyNumber}
              </p>
            </div>
          ) : null}
        </div>
      ) : (
        <StoryFrame
          alt={image?.alt ?? 'Study placeholder'}
          label={image?.studyNumber ? `Study ${image.studyNumber} / Placeholder` : 'Study / Placeholder'}
        />
      )}
      <figcaption className="border-t border-[#dedede] px-4 py-3 dark:border-neutral-800">
        <p className="text-sm leading-relaxed text-[#111111] dark:text-neutral-200">{image?.caption ?? 'Study image'}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] dark:text-neutral-500">
          Hover paragraphs to pair · tap keywords for notes
        </p>
      </figcaption>
    </figure>
  );
}
