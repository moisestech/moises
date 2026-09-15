import Image from 'next/image';
import Link from 'next/link';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import VimeoPlayer from '@/components/common/VimeoPlayer';
import ArtworkGallery from '@/components/art/ArtworkGallery';
import { grantPageTopPaddingClass } from '@/config/site-header-layout';
import {
  sfccBio,
  sfccIntro,
  sfccMeta,
  sfccStatement,
  sfccWorkSamples,
} from '@/content/grants/sfcc-2026';

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

export default function SfccSupportMaterialsPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <article
        className={`mx-auto w-full max-w-3xl px-4 pb-20 sm:px-6 sm:pb-28 ${grantPageTopPaddingClass}`}
      >
        <header className="mb-10 sm:mb-14">
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
          </p>
        </header>

        <section aria-labelledby="work-samples-heading" className="space-y-10">
          <div>
            <h2 id="work-samples-heading" className="text-2xl font-semibold">
              Work samples
            </h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              Recent works and supporting video for the FY 2026–2027 review.
            </p>
          </div>

          {sfccWorkSamples.map((sample, index) => {
            const isVertical = sample.aspectRatio === '9:16';

            return (
              <figure key={sample.id} className={cardClass}>
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
                    Sample {index + 1} · {sample.source} · {sample.year}
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
                    {sample.articleHref ? (
                      <a
                        href={sample.articleHref}
                        className={linkClass}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {sample.articleLabel ?? 'Press'}
                      </a>
                    ) : null}
                  </p>
                </figcaption>

                {sample.kind !== 'image' && sample.images && sample.images.length > 0 ? (
                  <div className="border-t border-stone-300 px-4 pb-6 dark:border-stone-700 sm:px-5">
                    <ArtworkGallery
                      title={sample.title}
                      images={[...sample.images]}
                      className="mt-4"
                      heading="Photographs"
                    />
                  </div>
                ) : null}
              </figure>
            );
          })}
        </section>

        <section className="mt-14 border-t border-stone-300 pt-10 dark:border-stone-700">
          <h2 className="text-2xl font-semibold">Artist statement</h2>
          <div className="mt-6">
            <StatementParagraphs text={sfccStatement} />
          </div>
        </section>

        <section className="mt-14 border-t border-stone-300 pt-10 dark:border-stone-700">
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
