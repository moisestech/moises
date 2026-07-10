'use client';

import { useState } from 'react';
import { Images } from 'lucide-react';
import { readymadesGalleryImages, readymadesGalleryStripIds } from '@/content/post-ai-readymades/postAiReadymadesStory';
import { StoryFrame } from '@/components/post-ai-readymades/StoryFrame';
import { ReadymadesSectionHeader } from '@/components/post-ai-readymades/ReadymadesSectionHeader';
import { cn } from '@/lib/utils';

export function ReadymadesStoryGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="mb-16 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20">
      <ReadymadesSectionHeader
        eyebrow="Visual index"
        title="Studies in vertical format"
        description="A scroll of 9:16 frames—the same ratio as the daily IG Story selection before it becomes catalogue entry."
        icon={Images}
      />

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {readymadesGalleryStripIds.map((id) => {
          const image = readymadesGalleryImages[id];
          const isActive = activeId === id;

          return (
            <div
              key={id}
              className="w-[min(42vw,200px)] shrink-0 snap-start"
              onMouseEnter={() => setActiveId(id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <StoryFrame
                imageUrl={image.src || undefined}
                alt={image.alt}
                label={image.studyNumber ? `Study ${image.studyNumber}` : image.id}
                statusLabel={image.caption.split('·').pop()?.trim()}
                hovered={isActive}
              />
              <p
                className={cn(
                  'mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#777777] transition dark:text-neutral-500',
                  isActive && 'text-emerald-800 dark:text-emerald-300',
                )}
              >
                {image.caption}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
