import Image from 'next/image';
import Link from 'next/link';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import VimeoPlayer from '@/components/common/VimeoPlayer';
import ArtworkGallery from '@/components/art/ArtworkGallery';
import SfccSectionNav from '@/components/grant/SfccSectionNav';
import { grantPageTopPaddingClass } from '@/config/site-header-layout';
import {
  sfccAppliedWorks,
  sfccBio,
  sfccIntro,
  sfccMeta,
  sfccStatement,
  sfccSupportMaterials,
  type SfccWorkSample,
} from '@/content/grants/sfcc-2026';

const sectionAnchorClass =
  'scroll-mt-[calc(var(--site-header-height,5rem)+var(--grant-dossier-subnav-height,3.5rem)+0.75rem)]';

const cardClass =
  'overflow-hidden border border-stone-300 bg-[#faf9f7] dark:border-stone-700 dark:bg-neutral-900';
const linkClass =
  'font-medium text-stone-900 underline underline-offset-2 transition hover:opacity-80 dark:text-stone-100';

function StatementParagraphs({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text.split('\n\n').map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className="max-w-[62ch] text-base leading-relaxed text-stone-700 dark:text-stone-300"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function SampleFigure({
  sample,
  index,
  total,
}: {
  sample: SfccWorkSample;
  index: number;
  total: number;
}) {
  const isVertical = sample.aspectRatio === '9:16';
  const extraImages =
    sample.kind === 'image' ? sample.images?.slice(1) ?? [] : sample.images ?? [];

  return (
    <figure id={sample.id} className={`${cardClass} ${sectionAnchorClass}`}>
      {sample.kind === 'youtube' && sample.videoId ? (
        <div className={isVertical ? 'mx-auto w-full max-w-[22rem] pt-4' : undefined}>
          <YouTubePlayer
            videoId={sample.videoId}
            title={sample.title}
            aspectRatio={sample.aspectRatio ?? '16:9'}
          />
        </div>
      ) : null}
      {sample.kind === 'vimeo' && sample.videoId ? (
        <VimeoPlayer videoId={sample.videoId} title={sample.title} />
      ) : null}
      {sample.kind === 'image' && sample.images?.[0] ? (
        <div className="relative aspect-[3/2] w-full bg-stone-200 dark:bg-neutral-800">
          <Image
            src={sample.images[0].url}
            alt={sample.images[0].caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>
      ) : null}

      <figcaption className="space-y-2 p-4 sm:p-5">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-stone-500 sm:text-xs dark:text-stone-400">
          {index + 1} of {total} · {sample.source} · {sample.year}
        </p>
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
          {sample.title}
        </h3>
        <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
          {sample.caption}
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-600 dark:text-stone-400">
          {sample.artworkHref ? (
            <Link href={sample.artworkHref} className={linkClass}>
              Artwork page
            </Link>
          ) : null}
          <a
            href={sample.href}
            className={linkClass}
            target={sample.href.startsWith('/') ? undefined : '_blank'}
            rel={sample.href.startsWith('/') ? undefined : 'noopener noreferrer'}
          >
            Open original
          </a>
          {sample.press?.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </p>
      </figcaption>

      {extraImages.length > 0 ? (
        <div className="border-t border-stone-300 px-4 pb-6 dark:border-stone-700 sm:px-5">
          <ArtworkGallery
            title={sample.title}
            images={[...extraImages]}
            className="mt-4"
            heading={extraImages.length === 1 ? 'Additional view' : 'Photographs'}
            headingClassName="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400"
          />
        </div>
      ) : null}
    </figure>
  );
}

export default function SfccSupportMaterialsPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <article
        className={`mx-auto w-full max-w-3xl px-4 pb-20 sm:px-6 sm:pb-28 ${grantPageTopPaddingClass}`}
      >
        <header className="mb-8 sm:mb-10">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-stone-500 sm:text-xs dark:text-stone-400">
            {sfccIntro.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {sfccIntro.headline}
          </h1>
          <p className="mt-4 text-2xl font-medium leading-snug text-stone-800 dark:text-stone-200">
            {sfccMeta.applicant}
          </p>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-stone-700 dark:text-stone-300">
            {sfccIntro.lede}
          </p>
          <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
            Application page:{' '}
            <a href={sfccMeta.canonicalUrl} className={linkClass}>
              {sfccMeta.canonicalUrl.replace('https://', '')}
            </a>
            {' · '}
            <a href="#support" className={linkClass}>
              Support materials
            </a>
          </p>
        </header>

        <SfccSectionNav />

        <section
          id="works"
          aria-labelledby="applied-works-heading"
          className={`space-y-10 ${sectionAnchorClass}`}
        >
          <div>
            <h2 id="applied-works-heading" className="text-2xl font-semibold">
              Applied works
            </h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              The pieces submitted with this application.
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {sfccAppliedWorks.map((sample) => (
                <li key={sample.id}>
                  <a href={`#${sample.id}`} className={linkClass}>
                    {sample.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {sfccAppliedWorks.map((sample, index) => (
            <SampleFigure
              key={sample.id}
              sample={sample}
              index={index}
              total={sfccAppliedWorks.length}
            />
          ))}
        </section>

        <section
          id="support"
          aria-labelledby="support-heading"
          className={`mt-14 space-y-10 border-t border-stone-300 pt-10 dark:border-stone-700 ${sectionAnchorClass}`}
        >
          <div>
            <h2 id="support-heading" className="text-2xl font-semibold">
              Support materials
            </h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              Studio context and institutional video, separate from the applied works.{' '}
              <a href="#support" className={linkClass}>
                moises.tech/grant/sfcc#support
              </a>
            </p>
          </div>

          {sfccSupportMaterials.map((sample, index) => (
            <SampleFigure
              key={sample.id}
              sample={sample}
              index={index}
              total={sfccSupportMaterials.length}
            />
          ))}
        </section>

        <section
          id="statement"
          className={`mt-14 border-t border-stone-300 pt-10 dark:border-stone-700 ${sectionAnchorClass}`}
        >
          <h2 className="text-2xl font-semibold">Artist statement</h2>
          <div className="mt-6">
            <StatementParagraphs text={sfccStatement} />
          </div>
        </section>

        <section
          id="bio"
          className={`mt-14 border-t border-stone-300 pt-10 dark:border-stone-700 ${sectionAnchorClass}`}
        >
          <h2 className="text-2xl font-semibold">Artist bio</h2>
          <div className="mt-6">
            <StatementParagraphs text={sfccBio} />
          </div>
          <ul className="mt-6 space-y-2 text-sm text-stone-600 dark:text-stone-400">
            <li>
              Website:{' '}
              <Link href="/" className={linkClass}>
                moises.tech
              </Link>
            </li>
            <li>
              Digital Culture Center Miami:{' '}
              <a href={sfccMeta.dccHref} className={linkClass} target="_blank" rel="noopener noreferrer">
                dcc.miami
              </a>
            </li>
            <li>
              Selected works:{' '}
              <Link href={sfccMeta.selectedWorksHref} className={linkClass}>
                moises.tech/selected-works
              </Link>
            </li>
            <li>
              Email:{' '}
              <a href={`mailto:${sfccMeta.email}`} className={linkClass}>
                {sfccMeta.email}
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
