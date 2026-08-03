'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import WeightOfTheCloudDiagram from '@/components/research/WeightOfTheCloudDiagram';
import {
  weightOfTheCloud,
  weightOfTheCloudDefaultIterationId,
  weightOfTheCloudFabricationSequence,
  weightOfTheCloudHeroMedia,
  weightOfTheCloudIterations,
  weightOfTheCloudNav,
  weightOfTheCloudReferenceImages,
  weightOfTheCloudReferenceIntro,
  weightOfTheCloudTechnicalSpecs,
  type ResearchMedia,
} from '@/content/research/weight-of-the-cloud';

function MediaLabel({ label }: { label?: string }) {
  if (!label) return null;
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
      {label}
    </p>
  );
}

function ResearchFigure({
  media,
  priority = false,
  aspectClass = 'aspect-[16/10]',
}: {
  media: ResearchMedia;
  priority?: boolean;
  aspectClass?: string;
}) {
  return (
    <figure>
      <MediaLabel label={media.label} />
      <div
        className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900`}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 42rem"
        />
      </div>
      {media.caption ? (
        <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function SectionNav() {
  const [activeId, setActiveId] = useState(weightOfTheCloudNav[0].id);

  useEffect(() => {
    const compute = () => {
      const offset = 200;
      let current = weightOfTheCloudNav[0].id;
      for (const section of weightOfTheCloudNav) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = section.id;
      }
      setActiveId(current);
    };
    compute();
    window.addEventListener('scroll', compute, { passive: true });
    return () => window.removeEventListener('scroll', compute);
  }, []);

  return (
    <nav
      className="sticky top-[4.75rem] z-30 -mx-4 mb-10 overflow-x-auto border-b border-gray-200 bg-white/95 px-4 py-2 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/95 md:top-[8.4rem]"
      aria-label="Section navigation"
    >
      <ul className="flex min-w-max gap-2">
        {weightOfTheCloudNav.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  'inline-flex min-h-11 items-center rounded-sm border px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors',
                  isActive
                    ? 'border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900'
                    : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 dark:border-neutral-700 dark:text-gray-400 dark:hover:border-neutral-500 dark:hover:text-gray-100',
                )}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function IterationPicker() {
  const [activeId, setActiveId] = useState(weightOfTheCloudDefaultIterationId);
  const active = weightOfTheCloudIterations.find((i) => i.id === activeId) ?? weightOfTheCloudIterations[2];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Artwork iterations"
        className="flex flex-wrap gap-2 mb-6"
      >
        {weightOfTheCloudIterations.map((iteration) => {
          const selected = iteration.id === active.id;
          return (
            <button
              key={iteration.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`iteration-tab-${iteration.id}`}
              aria-controls="iteration-panel"
              onClick={() => setActiveId(iteration.id)}
              className={cn(
                'inline-flex min-h-11 items-center gap-2 rounded-lg border px-3 sm:px-4 py-2 text-left transition-colors',
                selected
                  ? 'border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 dark:border-neutral-700 dark:bg-neutral-950 dark:text-gray-300 dark:hover:border-neutral-500',
              )}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                {iteration.number}
              </span>
              <span className="text-sm font-medium">{iteration.title}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="iteration-panel"
        aria-labelledby={`iteration-tab-${active.id}`}
        className="space-y-4"
      >
        <ResearchFigure media={active.media} aspectClass="aspect-[16/10]" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            <span className="font-mono text-sm text-gray-500 dark:text-gray-400 mr-2">
              {active.number}
            </span>
            {active.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{active.description}</p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30 p-4 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
          Preferred synthesis
        </p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
          {weightOfTheCloud.preferredSynthesis}
        </p>
      </div>
    </div>
  );
}

function ReferenceLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: ResearchMedia[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const current = images[index];
  const hasPrev = images.length > 1;
  const hasNext = images.length > 1;

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, goPrev, goNext]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-10 min-h-11 border border-white/30 px-3 py-2 text-sm text-white transition hover:bg-white/10"
        onClick={onClose}
      >
        Close
      </button>

      {hasPrev ? (
        <button
          type="button"
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          onClick={(event) => {
            event.stopPropagation();
            goPrev();
          }}
        >
          ‹
        </button>
      ) : null}

      {hasNext ? (
        <button
          type="button"
          aria-label="Next image"
          className="absolute right-2 sm:right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          onClick={(event) => {
            event.stopPropagation();
            goNext();
          }}
        >
          ›
        </button>
      ) : null}

      <figure
        className="relative max-h-[90vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="mt-3 text-center text-sm text-stone-200">
          {current.caption}
          <span className="ml-2 text-stone-400">
            ({index + 1} / {images.length})
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

function ReferenceGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        {weightOfTheCloudReferenceIntro}
      </p>
      <ul className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {weightOfTheCloudReferenceImages.map((media, index) => (
          <li key={media.src}>
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-100 rounded-xl"
              aria-label={`Enlarge ${media.caption ?? media.alt}`}
            >
              <figure>
                <MediaLabel label={media.label} />
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 group-hover:ring-gray-400 dark:group-hover:ring-gray-500 transition">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 21rem"
                  />
                  <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                    Enlarge
                  </span>
                </div>
                {media.caption ? (
                  <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {media.caption}
                  </figcaption>
                ) : null}
              </figure>
            </button>
          </li>
        ))}
      </ul>

      {lightboxIndex !== null ? (
        <ReferenceLightbox
          images={weightOfTheCloudReferenceImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </div>
  );
}

export default function WeightOfTheCloudClient() {
  const project = weightOfTheCloud;

  return (
    <article id="the-weight-of-the-cloud" className="max-w-3xl mx-auto pb-16 sm:pb-24">
      <header className="mb-10 sm:mb-14">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
          {project.eyebrow}
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/40 px-3 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
            {project.status}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
          {project.title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-100 font-medium mb-3">
          {project.artists}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{project.metadata}</p>
      </header>

      <div className="mb-8">
        <ResearchFigure media={weightOfTheCloudHeroMedia} priority aspectClass="aspect-[16/10]" />
      </div>

      <SectionNav />

      <section id="statement" className="scroll-mt-44 md:scroll-mt-52 mb-14" aria-labelledby="statement-heading">
        <h2 id="statement-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Project statement
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-800 dark:text-gray-200 border-l-2 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 mb-8">
          {project.lede}
        </p>
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          {project.statement.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        <blockquote className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white leading-snug">
            {project.researchQuestion}
          </p>
        </blockquote>
      </section>

      <section id="goal" className="scroll-mt-44 md:scroll-mt-52 mb-14" aria-labelledby="goal-heading">
        <h2 id="goal-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Project goal
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {project.projectGoal.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="system" className="scroll-mt-44 md:scroll-mt-52 mb-14" aria-labelledby="system-heading">
        <h2 id="system-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Five-part physical system
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The cube is designed as a modular system rather than one permanently fused mass. Electronic
          components do not carry the sculpture’s structural load.
        </p>
        <ol className="space-y-5">
          {project.physicalSystem.map((part) => (
            <li
              key={part.number}
              className="flex gap-4 border-b border-gray-100 dark:border-neutral-800 pb-5 last:border-0 last:pb-0"
            >
              <span className="font-mono text-sm text-gray-500 dark:text-gray-400 shrink-0 pt-0.5">
                {part.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{part.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{part.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="iterations"
        className="scroll-mt-44 md:scroll-mt-52 mb-14"
        aria-labelledby="iterations-heading"
      >
        <h2 id="iterations-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Artwork iterations
        </h2>
        <IterationPicker />
      </section>

      <section
        id="references"
        className="scroll-mt-44 md:scroll-mt-52 mb-14"
        aria-labelledby="references-heading"
      >
        <h2 id="references-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Related reference studies
        </h2>
        <ReferenceGallery />
      </section>

      <section
        id="materials"
        className="scroll-mt-44 md:scroll-mt-52 mb-14"
        aria-labelledby="materials-heading"
      >
        <h2 id="materials-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Materials and safety
        </h2>
        <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 bg-gray-50/50 dark:bg-gray-900/30">
          {weightOfTheCloudTechnicalSpecs.map((spec) => (
            <div key={spec.label} className={spec.label === 'Safety' ? 'sm:col-span-2' : undefined}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {spec.label}
              </dt>
              <dd className="mt-1 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="construction"
        className="scroll-mt-44 md:scroll-mt-52 mb-14"
        aria-labelledby="construction-heading"
      >
        <h2 id="construction-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Construction
        </h2>
        <figure className="mb-10">
          <WeightOfTheCloudDiagram />
          <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Exploded modular build — structural frame, six removable e-waste panels, illuminated void,
            and access + power zone.
          </figcaption>
        </figure>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          On-site fabrication sequence
        </h3>
        <ol className="space-y-5">
          {weightOfTheCloudFabricationSequence.map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white dark:bg-gray-100 dark:text-gray-900">
                {item.step}
              </span>
              <div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="credits"
        className="scroll-mt-44 md:scroll-mt-52 mb-14 border-t border-gray-200 dark:border-gray-700 pt-10"
        aria-labelledby="credits-heading"
      >
        <h2 id="credits-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Credits
        </h2>
        <p className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mb-3">
          {project.artists}
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{project.medium}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
          Proposed dimensions: {project.dimensionsIn} ({project.dimensionsCm})
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{project.productionMethod}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Research dossier · Miami, Florida ·{' '}
          <Link href="https://www.moises.tech" className="underline underline-offset-4 hover:no-underline">
            moises.tech
          </Link>
        </p>
      </section>

      <section className="border-t border-gray-200 dark:border-gray-700 pt-10">
        <Link
          href="/research"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline underline-offset-4"
        >
          ← Back to Research
        </Link>
      </section>
    </article>
  );
}
