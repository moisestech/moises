'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ImageWithSkeleton from '@/components/shared/ImageWithSkeleton';
import { cn } from '@/lib/utils';

type CarouselImage = { url: string; caption?: string };

type CarouselVideo = {
  url: string;
  title: string;
  caption?: string;
};

type Slide =
  | { kind: 'image'; url: string; caption?: string; key: string }
  | { kind: 'video'; url: string; title: string; caption?: string; key: string };

function cloudinaryWidth(url: string, width: number) {
  const marker = '/image/upload/';
  const at = url.indexOf(marker);
  if (at === -1) return url;
  const rest = url.slice(at + marker.length);
  if (/^(f_|q_|c_|w_|h_)/.test(rest)) return url;
  return `${url.slice(0, at)}${marker}f_auto,q_auto,w_${width}/${rest}`;
}

function buildSlides(images: CarouselImage[], video?: CarouselVideo | null): Slide[] {
  const imageSlides: Slide[] = images.map((image, index) => ({
    kind: 'image',
    url: image.url,
    caption: image.caption,
    key: `${image.url}-${index}`,
  }));
  if (!video?.url) return imageSlides;
  const videoSlide: Slide = {
    kind: 'video',
    url: video.url,
    title: video.title,
    caption: video.caption,
    key: video.url,
  };
  if (imageSlides.length < 2) return [...imageSlides, videoSlide];
  return [...imageSlides.slice(0, 2), videoSlide, ...imageSlides.slice(2)];
}

export default function ArtworkMediaCarousel({
  title,
  images,
  video,
  photoCredit,
}: {
  title: string;
  images: CarouselImage[];
  video?: CarouselVideo | null;
  photoCredit?: string;
}) {
  const slides = useMemo(() => buildSlides(images, video), [images, video]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const userUnmuted = useRef(false);
  const programmaticPause = useRef(false);
  const [armVideo, setArmVideo] = useState(false);
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const active = slides[index];
  const countLabel = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;

  const scrollToIndex = useCallback(
    (next: number) => {
      const el = scrollerRef.current;
      if (!el || slides.length === 0) return;
      const clamped = Math.min(slides.length - 1, Math.max(0, next));
      setIndex(clamped);
      el.scrollTo({
        left: clamped * el.clientWidth,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    },
    [reducedMotion, slides.length],
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.6),
      { threshold: [0, 0.6, 1] },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return undefined;
    const activeIsVideo = active?.kind === 'video';
    const shouldPlay = activeIsVideo && inView && tabVisible && !reducedMotion && !lightbox && !userPaused.current;

    if (!activeIsVideo) userPaused.current = false;

    if (shouldPlay) {
      videoEl.muted = !userUnmuted.current;
      const play = videoEl.play();
      if (play) {
        play.catch(() => {
          videoEl.muted = true;
          userUnmuted.current = false;
          void videoEl.play().catch(() => undefined);
        });
      }
      return undefined;
    }

    if (!videoEl.paused) {
      programmaticPause.current = true;
      videoEl.pause();
    }
    return undefined;
  }, [active, armVideo, inView, lightbox, reducedMotion, tabVisible, videoReady]);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(false);
      if (event.key === 'ArrowLeft') scrollToIndex(index - 1);
      if (event.key === 'ArrowRight') scrollToIndex(index + 1);
    };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [index, lightbox, scrollToIndex]);

  useEffect(() => {
    const videoIndex = slides.findIndex((slide) => slide.kind === 'video');
    if (videoIndex >= 0 && Math.abs(videoIndex - index) <= 1) setArmVideo(true);
  }, [index, slides]);

  if (slides.length === 0) return null;

  const onScrollerScroll = () => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    const next = Math.round(el.scrollLeft / el.clientWidth);
    const clamped = Math.min(slides.length - 1, Math.max(0, next));
    setIndex((current) => (current === clamped ? current : clamped));
  };

  const openViewer = () => {
    if (active?.kind === 'video') {
      void videoRef.current?.requestFullscreen?.();
      return;
    }
    setLightbox(true);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-8 sm:pt-12">
      <div
        ref={frameRef}
        className="outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black dark:focus-visible:outline-white"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} documentation. Use the arrow keys to move between slides.`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            scrollToIndex(index - 1);
          }
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            scrollToIndex(index + 1);
          }
        }}
      >
        <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={onScrollerScroll}
          className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth bg-neutral-950 motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, slideIndex) => {
            const near = Math.abs(slideIndex - index) <= 1;
            return (
              <div
                key={slide.key}
                className={cn(
                  'relative aspect-[3/4] w-full shrink-0 snap-center bg-neutral-950 sm:aspect-[4/5] lg:aspect-[16/10]',
                  slideIndex !== index && 'pointer-events-none',
                )}
                aria-hidden={slideIndex !== index}
              >
                {slide.kind === 'image' && near ? (
                  <ImageWithSkeleton
                    src={cloudinaryWidth(slide.url, slideIndex === index ? 2000 : 1200)}
                    alt={slide.caption || title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80rem"
                    priority={slideIndex === 0}
                    className="object-contain"
                  />
                ) : null}
                {slide.kind === 'video' && armVideo ? (
                  <>
                    <span
                      aria-hidden
                      className={cn(
                        'pointer-events-none absolute inset-0 bg-neutral-800',
                        videoReady ? 'opacity-0' : 'animate-pulse motion-reduce:animate-none',
                      )}
                    />
                    <video
                      ref={videoRef}
                      aria-label={slide.title}
                      src={slide.url}
                      poster={images[0] ? cloudinaryWidth(images[0].url, 1600) : undefined}
                      controls
                      playsInline
                      loop
                      muted
                      preload={near ? 'metadata' : 'none'}
                      className={cn(
                        'absolute inset-0 h-full w-full object-contain transition-opacity duration-300',
                        videoReady ? 'opacity-100' : 'opacity-0',
                      )}
                      onLoadedData={() => setVideoReady(true)}
                      onPlay={() => {
                        userPaused.current = false;
                      }}
                      onPause={() => {
                        if (programmaticPause.current) {
                          programmaticPause.current = false;
                          return;
                        }
                        userPaused.current = true;
                      }}
                      onVolumeChange={(event) => {
                        userUnmuted.current = !event.currentTarget.muted;
                      }}
                    >
                      <a href={slide.url}>Watch {slide.title}</a>
                    </video>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/80 to-transparent px-3 pt-16 text-sm text-white',
          active?.kind === 'video' ? 'pb-14' : 'pb-3',
        )}>
          <p className="tabular-nums tracking-wide" aria-live="polite">
            {countLabel}
            <span className="sr-only">
              {active?.kind === 'video' ? ', video' : ', photograph'}
              {active?.caption ? `. ${active.caption}` : ''}
            </span>
          </p>
          <div className="pointer-events-auto flex items-center">
            <button
              type="button"
              className="inline-flex min-h-11 items-center px-3 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40"
              onClick={() => scrollToIndex(index - 1)}
              disabled={index === 0}
            >
              Previous
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center px-3 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40"
              onClick={() => scrollToIndex(index + 1)}
              disabled={index === slides.length - 1}
            >
              Next
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center px-3 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={openViewer}
            >
              Fullscreen
            </button>
          </div>
        </div>
        </div>
        {active?.caption ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {active.caption}
          </p>
        ) : (
          <p className="mt-3 text-sm text-neutral-500"> </p>
        )}
        {photoCredit && active?.kind === 'image' ? (
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Photos: {photoCredit}</p>
        ) : null}
      </div>

      {lightbox && active?.kind === 'image' ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption || title}
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-sm uppercase tracking-wide text-white underline underline-offset-4"
            onClick={() => setLightbox(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-sm uppercase tracking-wide text-white sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              scrollToIndex(index - 1);
            }}
          >
            Previous
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm uppercase tracking-wide text-white sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              scrollToIndex(index + 1);
            }}
          >
            Next
          </button>
          <figure className="relative h-[80vh] w-full max-w-[90vw]" onClick={(event) => event.stopPropagation()}>
            <ImageWithSkeleton
              src={cloudinaryWidth(active.url, 2400)}
              alt={active.caption || title}
              fill
              sizes="90vw"
              className="object-contain"
            />
            {active.caption ? (
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/70 p-3 text-sm text-white">
                {active.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </div>
  );
}
