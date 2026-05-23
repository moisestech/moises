import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import { ArtworkDossierMediaGallery } from '@/components/artwork-dossier/ArtworkDossierMediaGallery';
import { Paragraphs } from '@/components/artwork-dossier/ArtworkDossierProse';
import { artist } from '@/constants/artworks';
import type { ArtworkDossier } from '@/content/artwork-dossiers/types';

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-36 border-b border-black/10 pb-4 text-2xl font-bold tracking-tight dark:border-white/10 sm:text-3xl"
    >
      {children}
    </h2>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium underline underline-offset-4 decoration-black/30 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}

const RECOGNITION_STATUS: Record<ArtworkDossier['recognition'][0]['status'], string> = {
  submitted: 'Submitted to',
  finalist: 'Finalist —',
  winner: 'Winner —',
  'honorable-mention': 'Honorable mention —',
};

type ArtworkDossierPageProps = {
  dossier: ArtworkDossier;
};

export default function ArtworkDossierPage({ dossier }: ArtworkDossierPageProps) {
  const artwork = artist.artworks[dossier.slug];
  if (!artwork) return null;

  const mailto = `mailto:${dossier.inquire.email}?${new URLSearchParams({ subject: dossier.inquire.subject }).toString()}`;

  const metadataRows: { label: string; value: ReactNode }[] = [
    { label: 'Artist', value: 'Moises Sanabria' },
    { label: 'Collaborator', value: artwork.collaboration ?? '—' },
    ...(artwork.technical_assistant
      ? [{ label: 'Technical assistant', value: artwork.technical_assistant }]
      : []),
    { label: 'Title', value: artwork.title },
    { label: 'Year', value: dossier.yearDisplay },
    { label: 'Medium', value: artwork.medium ?? dossier.category },
    {
      label: 'Materials',
      value: artwork.materials?.length ? (
        <ul className="list-disc pl-4 space-y-1">
          {artwork.materials.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      ) : (
        '—'
      ),
    },
    { label: 'Dimensions', value: dossier.dimensions },
    { label: 'Category', value: dossier.category },
    { label: 'Location / presentation', value: artwork.location ?? '—' },
    { label: 'Status', value: dossier.status },
  ];

  return (
    <main className="w-full bg-white font-['MoMA_Sans'] text-black dark:bg-black dark:text-white">
      {/* Hero band */}
      <section className="pt-28 sm:pt-36 md:pt-40" aria-labelledby="dossier-title">
        <div className="mx-auto w-[min(92vw,1400px)] px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Selected work
          </p>
          <h1 id="dossier-title" className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {artwork.title}
          </h1>
          <p className="mt-3 text-lg font-bold sm:text-xl md:text-2xl">{dossier.yearDisplay}</p>
          <p className="mt-2 text-base font-semibold text-neutral-700 dark:text-neutral-300 sm:text-lg">
            {artwork.medium}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-800 dark:text-neutral-200 sm:text-lg">
            {dossier.publicDescription}
          </p>
        </div>

        <div className="mx-auto mt-8 w-[min(92vw,1400px)] px-4 sm:px-6">
          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900 sm:aspect-[16/9] md:h-[min(62vh,620px)] md:aspect-auto">
            <Image
              src={dossier.heroImage.url}
              alt={dossier.heroImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-5 pb-5 pt-16 sm:px-8 sm:pb-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">{dossier.heroImage.role}</p>
              <p className="mt-1 text-sm font-medium text-white sm:text-base">{dossier.heroImage.caption}</p>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:space-y-20 sm:px-8 sm:py-16 md:space-y-24 lg:px-11 md:py-20">
        {/* Metadata + statement */}
        <section aria-labelledby="metadata-heading" className="scroll-mt-36">
          <SectionTitle id="metadata-heading">Artwork information</SectionTitle>
          <dl className="mt-8 divide-y divide-black/10 border border-black/10 dark:divide-white/10 dark:border-white/10">
            {metadataRows.map(({ label, value }) => (
              <div key={label} className="grid gap-1 px-4 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4 sm:px-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {label}
                </dt>
                <dd className="text-sm leading-relaxed sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Description */}
        <section id="description" aria-labelledby="description-heading" className="scroll-mt-36">
          <SectionTitle id="description-heading">Description</SectionTitle>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-neutral-800 dark:text-neutral-200 sm:text-lg">
            <Paragraphs text={dossier.description} className="mb-0" />
          </div>
        </section>

        {/* Media gallery */}
        <section id="gallery" aria-labelledby="gallery-heading" className="scroll-mt-36">
          <SectionTitle id="gallery-heading">Media</SectionTitle>
          <p className="mt-6 mb-8 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
            Installation views, artificial muse outputs, and process documentation.
          </p>
          <ArtworkDossierMediaGallery images={dossier.gallery} />

          {dossier.videos.length > 0 && (
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {dossier.videos.map((video) => (
                <figure key={video.youtubeId}>
                  <YouTubePlayer videoId={video.youtubeId} title={video.title} />
                  <figcaption className="mt-3">
                    <p className="text-sm font-semibold">{video.title}</p>
                    {video.caption && (
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{video.caption}</p>
                    )}
                    <p className="mt-2 text-sm">
                      <ExternalLink href={`https://www.youtube.com/watch?v=${video.youtubeId}`}>
                        Watch on YouTube
                      </ExternalLink>
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>

        {/* How it works */}
        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-36">
          <SectionTitle id="experience-heading">How the work functions</SectionTitle>
          <ol className="mt-8 grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2">
            {dossier.experienceSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 border border-black/10 bg-neutral-50/80 p-5 dark:border-white/10 dark:bg-neutral-950/50 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black text-sm font-bold dark:border-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Recognition */}
        {dossier.recognition.length > 0 && (
          <section id="recognition" aria-labelledby="recognition-heading" className="scroll-mt-36">
            <SectionTitle id="recognition-heading">Recognition</SectionTitle>
            <ul className="mt-8 max-w-3xl space-y-6">
              {dossier.recognition.map((item) => (
                <li
                  key={item.award}
                  className="border-l-2 border-black pl-5 dark:border-white sm:pl-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    {RECOGNITION_STATUS[item.status]} {item.award}
                    {item.category ? ` · ${item.category}` : ''}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
                    {item.summary}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technical */}
        <section id="technical" aria-labelledby="technical-heading" className="scroll-mt-36">
          <SectionTitle id="technical-heading">Technical description</SectionTitle>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-neutral-800 dark:text-neutral-200 sm:text-lg">
            <Paragraphs text={dossier.technicalDescription} className="mb-0" />
          </div>
          {dossier.technicalComponents && dossier.technicalComponents.length > 0 && (
            <div className="mt-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-3">
                Core components
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed sm:text-base">
                {dossier.technicalComponents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <dl className="mt-10 max-w-3xl divide-y divide-black/10 border border-black/10 dark:divide-white/10 dark:border-white/10">
            {dossier.technicalLayers.map(({ layer, function: fn }) => (
              <div key={layer} className="grid gap-2 px-4 py-4 sm:grid-cols-[minmax(8rem,11rem)_1fr] sm:gap-6 sm:px-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {layer}
                </dt>
                <dd className="text-sm leading-relaxed sm:text-base">{fn}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Presentations */}
        <section id="presentations" aria-labelledby="presentations-heading" className="scroll-mt-36">
          <SectionTitle id="presentations-heading">Exhibition &amp; presentation history</SectionTitle>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-black/20 dark:border-white/20">
                  <th className="py-3 pr-4 font-semibold">Year</th>
                  <th className="py-3 pr-4 font-semibold">Presentation</th>
                  <th className="py-3 pr-4 font-semibold">Location</th>
                  <th className="py-3 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                {dossier.presentations.map((row) => (
                  <tr key={`${row.year}-${row.title}`} className="border-b border-black/10 dark:border-white/10">
                    <td className="py-4 pr-4 align-top">{row.year}</td>
                    <td className="py-4 pr-4 align-top font-medium">{row.title}</td>
                    <td className="py-4 pr-4 align-top text-neutral-600 dark:text-neutral-400">{row.location}</td>
                    <td className="py-4 align-top capitalize text-neutral-600 dark:text-neutral-400">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Press */}
        {dossier.press.length > 0 && (
          <section id="press" aria-labelledby="press-heading" className="scroll-mt-36">
            <SectionTitle id="press-heading">Press</SectionTitle>
            <ul className="mt-8 max-w-3xl space-y-6">
              {dossier.press.map((item) => (
                <li key={item.url} className="border border-black/10 p-5 dark:border-white/10 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    {item.publication}
                  </p>
                  <p className="mt-2 font-semibold">{item.title}</p>
                  {item.description && (
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
                  )}
                  <p className="mt-3 text-sm">
                    <ExternalLink href={item.url}>Read article</ExternalLink>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Inquire */}
        <section
          id="inquire"
          aria-labelledby="inquire-heading"
          className="scroll-mt-36 border border-black/10 bg-neutral-50 p-8 dark:border-white/10 dark:bg-neutral-950/80 sm:p-10 md:p-12"
        >
          <h2 id="inquire-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Exhibitions, programs &amp; collaborations
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
            Book the installation, schedule a talk or walkthrough, or propose a workshop format. Share your venue,
            dates, and audience.
          </p>
          <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
            <a
              href={mailto}
              className="inline-flex items-center justify-center bg-black px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black sm:text-base"
            >
              Inquire / Book
            </a>
            <Link
              href="/selected-works"
              className="inline-flex items-center justify-center border border-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/5 dark:border-white dark:hover:bg-white/10 sm:text-base"
            >
              Selected works
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
