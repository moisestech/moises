'use client';

import Image from 'next/image';
import type { ArtworkDossierGalleryImage } from '@/content/artwork-dossiers/types';

type ArtworkDossierMediaGalleryProps = {
  images: ArtworkDossierGalleryImage[];
};

export function ArtworkDossierMediaGallery({ images }: ArtworkDossierMediaGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:gap-4">
      {images.map((item, index) => (
        <figure key={`${item.role}-${index}`} className="flex flex-col">
          <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={item.url}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
            <figcaption className="mt-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {item.role}
              </p>
              <p className="mt-0.5 text-xs text-neutral-700 dark:text-neutral-300">{item.caption}</p>
            </figcaption>
        </figure>
      ))}
    </div>
  );
}
