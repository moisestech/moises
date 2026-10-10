import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import YouTubePlayer from '@/components/common/YouTubePlayer';

export const metadata: Metadata = {
  title: 'Visit the studio | Moises Sanabria',
  description:
    'Studio 43 at Bakehouse Art Complex, Miami. Hours, a filmed studio visit, and how the practice becomes material.',
};

const materialWorks = [
  {
    href: '/art/baby_agi',
    title: 'Baby AGI',
    note: 'A stroller assembled from gaming hardware, a display, and robotic hands.',
  },
  {
    href: '/art/doomscrolling_treadmill',
    title: 'Doom Scrolling Treadmill',
    note: 'A treadmill, vertical screens, a coding workstation, a grass patch, and an LED panel.',
  },
];

export default function Visit() {
  return (
    <PageLayout>
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-[calc(var(--site-header-expanded-height,10rem)+1.5rem)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Bakehouse Art Complex
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl font-bold sm:text-6xl">Visit the studio</h1>
        <p className="mt-6 max-w-3xl text-xl leading-snug">
          Studio 43 is free and open to the public. The room is where consumer objects, screens, and
          electronics are taken apart and reassembled.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <section aria-labelledby="studio-location">
            <h2 id="studio-location" className="text-2xl font-semibold">
              Location
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Bakehouse Art Complex
              <br />
              561 NW 32nd St
              <br />
              Miami, FL 33127
            </p>
            <a
              href="https://maps.google.com/?q=Bakehouse+Art+Complex+561+NW+32nd+St+Miami+FL+33127"
              className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4"
            >
              Open in maps
            </a>
            <h3 className="mt-8 text-lg font-semibold">Hours</h3>
            <p className="mt-2 text-lg leading-relaxed">
              Tuesday–Saturday, 10 a.m.–5 p.m.
              <br />
              Sunday–Monday, closed
            </p>
            <h3 className="mt-8 text-lg font-semibold">Admission</h3>
            <p className="mt-2 text-lg">Free and open to the public</p>
          </section>
          <section aria-labelledby="studio-contact">
            <h2 id="studio-contact" className="text-2xl font-semibold">
              Contact
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              <a className="underline underline-offset-4" href="mailto:m@moises.tech">
                m@moises.tech
              </a>
              <br />
              Instagram: @moisesdsanabria
              <br />
              Twitter: @moisesdsanabria
            </p>
          </section>
        </div>

        <section className="mt-20 border-t border-neutral-200 pt-12 dark:border-neutral-800" aria-labelledby="studio-visit-film">
          <h2 id="studio-visit-film" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Studio visit
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            VernissageTV filmed Studio 43 in 2025. The visit documents the production environment,
            works in progress, and how recent propositions become material practice.
          </p>
          <div className="mt-8 max-w-5xl">
            <YouTubePlayer
              videoId="_8UDJ-n-PB0"
              title="Studio Visit: Moises Sanabria / Bakehouse Art Complex, Miami"
            />
          </div>
          <a
            href="https://www.youtube.com/watch?v=_8UDJ-n-PB0"
            className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4"
          >
            Watch on YouTube
          </a>
        </section>

        <section className="mt-16 border-t border-neutral-200 pt-12 dark:border-neutral-800" aria-labelledby="material-process">
          <h2 id="material-process" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Material process
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            The film is the record of the room. Each work below documents how a proposition became
            an object.
          </p>
          <ul className="mt-8 max-w-3xl divide-y divide-neutral-200 dark:divide-neutral-800">
            {materialWorks.map((work) => (
              <li key={work.href}>
                <Link href={work.href} className="block py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                  <span className="text-2xl font-semibold underline-offset-4 hover:underline">{work.title}</span>
                  <span className="mt-2 block text-base leading-relaxed">{work.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </PageLayout>
  );
}
