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
  sfccPreviewUrl,
  sfccStatement,
  sfccSupportMaterials,
  type SfccWorkSample,
} from '@/content/grants/sfcc-2026';

const sectionAnchorClass =
  'scroll-mt-[calc(var(--site-header-height,5rem)+var(--grant-dossier-subnav-height,5.5rem)+0.75rem)]';

const cardClass = 'overflow-hidden border border-stone-200 bg-white';
const linkClass =
  'font-medium text-stone-900 underline underline-offset-2 transition hover:opacity-70';

function StatementParagraphs({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text.split('\n\n').map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className="max-w-[62ch] text-base leading-relaxed text-stone-700"
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
        <div className="relative aspect-[3/2] w-full bg-stone-100">
          <Image
            src={sample.images[0].url}
            alt={sample.images[0].caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 64rem"
          />
        </div>
      ) : null}

      <figcaption className="space-y-2 p-4 sm:p-5">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-stone-500 sm:text-xs">
          {index + 1} of {total} · {sample.source} · {sample.year}
        </p>
        <h3 className="text-lg font-semibold text-stone-900">{sample.title}</h3>
        <p className="text-base leading-relaxed text-stone-700">{sample.caption}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-600">
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
        <div className="border-t border-stone-200 px-4 pb-6 sm:px-5">
          <ArtworkGallery
            title={sample.title}
            images={[...extraImages]}
            className="mt-4"
            heading={extraImages.length === 1 ? 'Additional view' : 'Photographs'}
            headingClassName="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-stone-500"
          />
        </div>
      ) : null}
    </figure>
  );
}

export default function SfccSupportMaterialsPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <article
        className={`mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 sm:pb-28 ${grantPageTopPaddingClass}`}
      >
        <header className="mb-6 max-w-3xl">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-stone-500 sm:text-xs">
            {sfccIntro.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {sfccIntro.headline}
          </h1>
          <p className="mt-3 text-xl font-medium leading-snug text-stone-800 sm:text-2xl">
            {sfccMeta.applicant}
          </p>
          <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-stone-700">
            {sfccIntro.lede}
          </p>
        </header>

        <SfccSectionNav />

        <section
          id="works"
          aria-labelledby="applied-works-heading"
          className={sectionAnchorClass}
        >
          <div className="mb-8 max-w-3xl">
            <h2 id="applied-works-heading" className="text-2xl font-semibold">
              Applied works
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              All five pieces submitted with this application. Use the menu or the index to jump.
            </p>
          </div>

          <ul className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {sfccAppliedWorks.map((sample, index) => {
              const preview = sfccPreviewUrl(sample);
              return (
                <li key={sample.id}>
                  <a
                    href={`#${sample.id}`}
                    className="group block border border-stone-200 bg-white transition hover:border-stone-900"
                  >
                    <div className="relative aspect-[4/3] bg-stone-100">
                      {preview ? (
                        <Image
                          src={preview}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />
                      ) : null}
                    </div>
                    <div className="space-y-1 p-3">
                      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
                        {index + 1} · {sample.year}
                      </p>
                      <p className="text-sm font-semibold leading-snug text-stone-900 group-hover:underline">
                        {sample.title}
                      </p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto max-w-3xl space-y-10">
            {sfccAppliedWorks.map((sample, index) => (
              <SampleFigure
                key={sample.id}
                sample={sample}
                index={index}
                total={sfccAppliedWorks.length}
              />
            ))}
          </div>
        </section>

        <section
          id="support"
          aria-labelledby="support-heading"
          className={`mx-auto mt-16 max-w-3xl space-y-10 border-t border-stone-200 pt-10 ${sectionAnchorClass}`}
        >
          <div>
            <h2 id="support-heading" className="text-2xl font-semibold">
              Support materials
            </h2>
            <p className="mt-2 text-sm text-stone-600">
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
          className={`mx-auto mt-16 max-w-3xl border-t border-stone-200 pt-10 ${sectionAnchorClass}`}
        >
          <h2 className="text-2xl font-semibold">Artist statement</h2>
          <div className="mt-6">
            <StatementParagraphs text={sfccStatement} />
          </div>
        </section>

        <section
          id="bio"
          className={`mx-auto mt-16 max-w-3xl border-t border-stone-200 pt-10 ${sectionAnchorClass}`}
        >
          <h2 className="text-2xl font-semibold">Artist bio</h2>
          <div className="mt-6">
            <StatementParagraphs text={sfccBio} />
          </div>
          <ul className="mt-6 space-y-2 text-sm text-stone-600">
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
