import Link from 'next/link';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import VimeoPlayer from '@/components/common/VimeoPlayer';
import { grantPageTopPaddingClass } from '@/config/site-header-layout';
import { sfccIntro, sfccMeta, sfccWorkSamples } from '@/content/grants/sfcc-2026';

const cardClass =
  'overflow-hidden border border-stone-300 bg-[#faf9f7] dark:border-stone-700 dark:bg-neutral-900';
const linkClass =
  'font-medium text-stone-900 underline underline-offset-2 transition hover:opacity-80 dark:text-stone-100';

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
              Supporting video for the FY 2026–2027 review.
            </p>
          </div>

          {sfccWorkSamples.map((sample, index) => (
            <figure key={sample.id} className={cardClass}>
              {sample.kind === 'youtube' ? (
                <YouTubePlayer videoId={sample.videoId} title={sample.title} />
              ) : (
                <VimeoPlayer videoId={sample.videoId} title={sample.title} />
              )}
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
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  <a
                    href={sample.href}
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open original
                  </a>
                </p>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="mt-14 border-t border-stone-300 pt-10 dark:border-stone-700">
          <h2 className="text-2xl font-semibold">Artist</h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-stone-700 dark:text-stone-300">
            {sfccIntro.bio}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-stone-600 dark:text-stone-400">
            <li>
              Website:{' '}
              <Link href="/" className={linkClass}>
                moises.tech
              </Link>
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
