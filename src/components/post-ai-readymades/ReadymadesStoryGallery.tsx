'use client';

import { readymadesGalleryImages, readymadesGalleryStripIds } from '@/content/post-ai-readymades/postAiReadymadesStory';
import { StoryFrame } from '@/components/post-ai-readymades/StoryFrame';

export function ReadymadesStoryGallery() {
  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#777777] dark:text-neutral-400">
        Visual index
      </p>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#111111] dark:text-white sm:text-3xl">
        Studies in vertical format
      </h2>
      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#777777] dark:text-neutral-300">
        A scroll of 9:16 frames—the same ratio as the daily IG Story selection before it becomes catalogue entry.
      </p>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {readymadesGalleryStripIds.map((id) => {
          const image = readymadesGalleryImages[id];
          return (
            <div key={id} className="w-[min(42vw,200px)] shrink-0 snap-start">
              <StoryFrame
                imageUrl={image.src || undefined}
                alt={image.alt}
                label={image.studyNumber ? `Study ${image.studyNumber}` : image.id}
                statusLabel={image.caption.split('·').pop()?.trim()}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
