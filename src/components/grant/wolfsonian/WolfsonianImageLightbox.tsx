'use client';

import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import type { WolfsonianImage } from '@/content/grants/wolfsonian-fellowship';

type WolfsonianImageLightboxProps = {
  image: WolfsonianImage;
  open: boolean;
  onClose: () => void;
};

export function WolfsonianImageLightbox({ image, open, onClose }: WolfsonianImageLightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-10 border border-white/30 px-3 py-1 text-sm text-white transition hover:bg-white/10"
        onClick={onClose}
      >
        Close
      </button>
      <figure
        className="relative max-h-[90vh] w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="mt-3 text-center text-sm text-stone-200">{image.caption}</figcaption>
      </figure>
    </div>
  );
}
