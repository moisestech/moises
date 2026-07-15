import Image from 'next/image';
import type { MachineSentenceMediaAsset } from '@/content/grants/modal-gray-area-2026/machine-sentence-media';

export function ProposalFigure({
  media,
  priority = false,
  className = '',
  showStatus = true,
}: {
  media: MachineSentenceMediaAsset;
  priority?: boolean;
  className?: string;
  showStatus?: boolean;
}) {
  const aspectStyle =
    media.aspect === 'wide'
      ? 'aspect-[16/9]'
      : media.aspect === 'square'
        ? 'aspect-square'
        : media.aspect === 'landscape-detail'
          ? 'aspect-[4/3]'
          : 'aspect-[4/5]';

  return (
    <figure className={`w-full ${className}`}>
      {showStatus ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 mb-2">
          {media.status}
        </p>
      ) : null}
      <div className={`relative w-full ${aspectStyle} overflow-hidden bg-neutral-950`}>
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          priority={priority}
          className={`h-full w-full ${media.layout === 'object-cover' ? 'object-cover' : 'object-contain'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 56rem"
        />
      </div>
      {media.caption ? (
        <figcaption className="mt-2 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
