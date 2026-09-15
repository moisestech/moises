'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

type GalleryImage = {
  url: string;
  caption?: string;
};

export default function ArtworkGallery({
  title,
  images,
  className = 'mt-24',
  heading,
}: {
  title: string;
  images: GalleryImage[];
  className?: string;
  heading?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current + images.length - 1) % images.length;
    });
  }, [images.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [close, openIndex, showNext, showPrev]);

  if (images.length === 0) return null;

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className={className}>
        <h2 className="text-3xl font-bold mb-8">
          {heading ??
            `${images.length} Variation${images.length !== 1 ? 's' : ''} Online`}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="aspect-square relative group overflow-hidden rounded-lg text-left"
              aria-label={`View ${image.caption || `${title} — ${index + 1}`} fullscreen`}
            >
              <Image
                src={image.url}
                alt={image.caption || `${title} - Variation ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {image.caption ? (
                <span className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm">{image.caption}</span>
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption || title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 text-white text-sm uppercase tracking-wide underline underline-offset-4"
          >
            Close
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 sm:left-6 text-white text-sm uppercase tracking-wide"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white text-sm uppercase tracking-wide"
              >
                Next
              </button>
            </>
          ) : null}
          <figure
            className="relative max-h-[90vh] max-w-[90vw] w-full h-[80vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.url}
              alt={active.caption || title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
            {active.caption ? (
              <figcaption className="absolute bottom-0 inset-x-0 bg-black/70 text-white text-sm p-3">
                {active.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </>
  );
}
