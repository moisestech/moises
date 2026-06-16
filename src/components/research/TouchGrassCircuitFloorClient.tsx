'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  touchGrassCircuitFloor,
  touchGrassGalleryMedia,
  touchGrassHeroMedia,
  touchGrassLayoutDiagrams,
  touchGrassPrototypeLog,
  touchGrassRelatedWorks,
  touchGrassTechnicalSpecs,
  type PrototypeEntry,
  type ResearchMedia,
} from '@/content/research/touch-grass-circuit-floor';

function MediaLabel({ label }: { label?: string }) {
  if (!label) return null;
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
      {label}
    </p>
  );
}

function PlaceholderFrame({
  alt,
  caption,
  label,
  aspectClass = 'aspect-[16/10]',
}: {
  alt: string;
  caption?: string;
  label?: string;
  aspectClass?: string;
}) {
  return (
    <figure>
      <MediaLabel label={label} />
      <div
        className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center`}
        role="img"
        aria-label={alt}
      >
        <p className="text-sm text-gray-500 dark:text-gray-400 px-6 text-center">
          {label ?? 'Asset'} — pending upload
        </p>
      </div>
      {caption ? (
        <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2">{caption}</figcaption>
      ) : null}
    </figure>
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
  if (media.isPlaceholder && !media.src) {
    return (
      <PlaceholderFrame
        alt={media.alt}
        caption={media.caption}
        label={media.label}
        aspectClass={aspectClass}
      />
    );
  }

  return (
    <figure>
      <MediaLabel label={media.label} />
      <div
        className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 ${
          media.isPlaceholder ? 'ring-1 ring-amber-200/80 dark:ring-amber-800/60' : ''
        }`}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 42rem"
        />
        {media.isPlaceholder ? (
          <div className="absolute top-3 left-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
            Placeholder — replace after upload
          </div>
        ) : null}
      </div>
      {media.caption ? (
        <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function PrototypeLogEntry({ entry }: { entry: PrototypeEntry }) {
  const [open, setOpen] = useState(entry.prototype === 'Prototype 01');

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-4 sm:px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
        aria-expanded={open}
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
            {entry.prototype}
            {entry.date ? ` · ${entry.date}` : ''}
          </p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{entry.title}</h3>
        </div>
        <span className="text-gray-400 shrink-0 mt-1" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <div className="px-4 sm:px-5 pb-5 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{entry.description}</p>
          {entry.findings && entry.findings.length > 0 ? (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Findings</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                {entry.findings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {entry.nextSteps && entry.nextSteps.length > 0 ? (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Next steps</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                {entry.nextSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default function TouchGrassCircuitFloorClient() {
  const project = touchGrassCircuitFloor;
  const halfGallery = touchGrassGalleryMedia.filter((m) => m.layout === 'half');
  const fullGallery = touchGrassGalleryMedia.filter((m) => m.layout !== 'half');

  return (
    <article className="max-w-3xl mx-auto pb-16 sm:pb-24">
      <header className="mb-10 sm:mb-14">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
          Research / proposed work · {project.year}
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/40 px-3 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
            {project.status}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {project.title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-3">
          {project.subtitle}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{project.metadata}</p>
      </header>

      <div className="mb-8">
        <ResearchFigure media={touchGrassHeroMedia} priority aspectClass="aspect-[16/10]" />
      </div>

      <p className="text-lg sm:text-xl leading-relaxed text-gray-800 dark:text-gray-200 border-l-2 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 mb-12">
        {project.lede}
      </p>

      <section className="prose prose-lg dark:prose-invert max-w-none mb-14">
        <h2>The Ground Is Online</h2>
        {project.introduction.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Proposed experience</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {project.proposedExperience.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mb-14" aria-labelledby="touch-grass-gallery-heading">
        <h2 id="touch-grass-gallery-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Visual studies
        </h2>
        <div className="space-y-8">
          {fullGallery.map((media) => (
            <ResearchFigure key={media.alt} media={media} />
          ))}
          {halfGallery.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {halfGallery.map((media) => (
                <ResearchFigure key={media.alt} media={media} aspectClass="aspect-square" />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Material logic</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {project.materialLogic.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mb-14" aria-labelledby="touch-grass-tech-heading">
        <h2 id="touch-grass-tech-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Technical development
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          {project.technicalDevelopment.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 bg-gray-50/50 dark:bg-gray-900/30">
          {touchGrassTechnicalSpecs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {spec.label}
              </dt>
              <dd className="mt-1 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-14" aria-labelledby="touch-grass-prototype-heading">
        <h2 id="touch-grass-prototype-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Prototype log
        </h2>
        <div className="space-y-4">
          {touchGrassPrototypeLog.map((entry) => (
            <PrototypeLogEntry key={entry.prototype} entry={entry} />
          ))}
        </div>
      </section>

      <section className="mb-14" aria-labelledby="touch-grass-layouts-heading">
        <h2 id="touch-grass-layouts-heading" className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Alternate layouts
        </h2>
        <div className="space-y-10">
          {touchGrassLayoutDiagrams.map((layout) => (
            <div key={layout.id}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{layout.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{layout.description}</p>
              <ResearchFigure media={layout.media} aspectClass="aspect-[16/9]" />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project status</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.projectStatus}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Moises Sanabria · Miami, Florida ·{' '}
          <Link href="https://www.moises.tech" className="underline underline-offset-4 hover:no-underline">
            moises.tech
          </Link>
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Related works</h2>
        <ul className="space-y-10">
          {touchGrassRelatedWorks.map((work) => (
            <li key={work.slug}>
              <Link href={`/art/${work.slug}`} className="group flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="relative w-full sm:w-44 shrink-0 aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={work.image}
                    alt={`${work.title} — related work`}
                    fill
                    className="object-cover transition group-hover:opacity-90"
                    sizes="(max-width: 640px) 100vw, 11rem"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline">
                    {work.title}{' '}
                    <span className="text-gray-500 font-normal">({work.year})</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{work.blurb}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
