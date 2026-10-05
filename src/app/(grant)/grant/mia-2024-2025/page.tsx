import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { miaActivities, miaGrant, miaRelatedLinks } from '@/content/grants/mia-2024-2025';

export const metadata: Metadata = {
  title: miaGrant.title,
  description: miaGrant.description,
  alternates: { canonical: miaGrant.canonicalUrl },
  openGraph: {
    title: miaGrant.title,
    description: miaGrant.description,
    type: 'article',
    url: miaGrant.canonicalUrl,
    siteName: 'Moises Sanabria',
    images: [{ url: miaGrant.ogImage.url, alt: miaGrant.ogImage.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: miaGrant.title,
    description: miaGrant.description,
    images: [miaGrant.ogImage.url],
  },
};

export default function MiaGrantActivityPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-36 md:px-6 md:pt-44">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide">Moises Sanabria</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
          Miami Individual Artists Grant — FY2024–2025
        </h1>
        <h2 className="mt-4 text-xl font-semibold leading-snug md:text-2xl">
          Artistic Activity · October 1, 2024 – September 30, 2025
        </h2>
        <p className="mt-6 text-lg leading-relaxed">
          During the FY2024–2025 grant period, Moises Sanabria continued developing an
          interdisciplinary practice spanning sculpture, moving image, artificial intelligence,
          software, networked media, exhibition, and artist education. The period marked an
          increasing movement from screen-based investigations of internet culture toward physical
          technological readymades examining privacy, desire, automation, platforms, and networked
          life.
        </p>
      </header>

      <section className="mt-16" aria-labelledby="activity-timeline">
        <h2 id="activity-timeline" className="text-2xl font-bold md:text-3xl">
          Activity
        </h2>
        <ol className="mt-8 space-y-14">
          {miaActivities.map((activity) => (
            <li key={activity.href} className="border-t border-neutral-300 pt-8 dark:border-neutral-700">
              <p className="text-sm font-semibold uppercase tracking-wide">{activity.date}</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight">
                <Link href={activity.href} className="underline-offset-2 hover:underline">
                  {activity.title}
                </Link>
              </h3>
              <p className="mt-2">{activity.venue}</p>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{activity.type}</p>
              <p className="mt-4 text-lg leading-relaxed">{activity.body}</p>
              {activity.image ? (
                <figure className="mt-6">
                  <Image
                    src={activity.image.src}
                    alt={activity.image.alt}
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
                  {activity.image.caption ? (
                    <figcaption className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {activity.image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
              <p className="mt-4">
                <Link
                  href={activity.href}
                  className="font-medium text-blue-700 underline-offset-2 hover:underline dark:text-blue-400"
                >
                  {activity.linkLabel}
                </Link>
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 border-t border-neutral-300 pt-10 dark:border-neutral-700">
        <h2 className="text-2xl font-bold md:text-3xl">Research and Development</h2>
        <p className="mt-4 text-lg leading-relaxed">
          The year consolidated a transition in the practice toward technological readymades and
          other physical manifestations of digital systems. Artificial intelligence, privacy,
          platform logic, and algorithmic desire were treated as conditions the work could hold,
          not only as subjects to depict. Attention economies, surveillance, network
          infrastructure, and digital identity ran through the sculpture, the screenings, and the
          teaching. Taste the Algorithm was developed in the studio and selected in September 2025
          for a Museum of Sex Miami exhibition that opened the following year. The Bakehouse
          workshop treated an artist’s website as part of the same question: who maintains the
          systems that present a practice, and on what terms.
        </p>
      </section>

      <section className="mt-16 border-t border-neutral-300 pt-10 dark:border-neutral-700">
        <h2 className="text-2xl font-bold md:text-3xl">Related Work</h2>
        <ul className="mt-4 space-y-2">
          {miaRelatedLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium text-blue-700 underline-offset-2 hover:underline dark:text-blue-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
