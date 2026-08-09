import type { Metadata } from 'next';
import { research } from '@/constants/research';
import {
  bornIntoTheMachineSprint,
  ideaCenterLogos,
  ideaCenterProgram,
} from '@/content/research/born-into-the-machine-sprint';
import {
  indexCard,
  projectMeta,
} from '@/content/research/the-internet-is-other-ai/projectData';
import Link from 'next/link';
import Image from 'next/image';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: 'Research — Moises Sanabria',
  description:
    'BORN INTO THE MACHINE and related practice-based research: computation as an inherited environment shaping attention, labor, value, belief, and agency.',
  alternates: { canonical: `${SITE}/research` },
  openGraph: {
    title: 'Research — Moises Sanabria',
    description:
      'Research into computation as an inherited environment shaping attention, labor, value, belief, and agency.',
    type: 'website',
    url: `${SITE}/research`,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
  },
};

function researchHref(slug: string) {
  if (slug === 'value_of_the_image') return '/research/the-value-and-future-of-the-image';
  if (slug === 'echo_economies') return '/research/locust-echo-economies';
  if (slug === 'broken_acceleration') return '/research/broken-acceleration';
  if (slug === 'touch_grass_circuit_floor') return '/research/touch-grass-circuit-floor';
  if (slug === 'weight_of_the_cloud') return '/research/weight-of-the-cloud';
  return `/research/${slug}`;
}

export default function ResearchIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-12 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
          Research
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          BORN INTO THE MACHINE
        </h1>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          Research into computation as an inherited environment shaping attention,
          labor, value, belief, and agency.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          The long-form framework lives at{' '}
          <Link
            href="/research/born-into-the-machine"
            className="underline underline-offset-4 hover:no-underline"
          >
            Born into the Machine
          </Link>
          . Related writing includes{' '}
          <Link href="/noisy-systems" className="underline underline-offset-4 hover:no-underline">
            Noisy Systems
          </Link>
          . Additional research dossiers appear below.
        </p>
      </header>

      {/* Featured: The Internet Is Other AI */}
      <section className="mb-10" aria-labelledby="featured-tioa">
        <h2 id="featured-tioa" className="sr-only">
          Featured research project
        </h2>
        <Link
          href={indexCard.href}
          className="block group border border-gray-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-black/40 hover:shadow-xl transition-shadow duration-200 md:flex"
        >
          <div className="relative aspect-[16/10] md:aspect-auto md:w-1/2 md:min-h-[260px] shrink-0 bg-[#10110f]">
            <Image
              src={indexCard.image.src}
              alt={indexCard.image.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="px-6 py-6 md:py-8 flex flex-col justify-center md:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              {indexCard.status}
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8d9088] mb-3">
              {indexCard.category}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:opacity-80 transition-opacity">
              {indexCard.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              {indexCard.description}
            </p>
            <span className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.16em] text-[#10110f] dark:text-[#f0eee5] underline underline-offset-4">
              Enter project →
            </span>
          </div>
        </Link>
      </section>

      {/* Space for future research projects — no invented entries */}
      <p className="mb-12 text-sm text-gray-500 dark:text-gray-400 font-mono uppercase tracking-widest">
        {projectMeta.researchSeries} · further projects will appear here
      </p>

      {/* Existing program banner */}
      <div className="mb-12">
        <Link
          href="/research/born-into-the-machine/sprint"
          className="block group border-2 border-[#ff5c00]/25 dark:border-[#ff5c00]/30 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-black/40 hover:shadow-2xl transition-shadow duration-200 md:flex"
        >
          <div className="relative aspect-[16/9] md:aspect-auto md:w-2/5 md:min-h-[220px] shrink-0 bg-white flex items-center justify-center p-6">
            <Image
              src={ideaCenterLogos.horizontal}
              alt={`${ideaCenterProgram.name} — ${ideaCenterProgram.program}`}
              width={400}
              height={100}
              className="object-contain max-h-full w-full"
            />
          </div>
          <div className="px-6 py-6 md:py-8 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5c00] mb-2">
              {ideaCenterProgram.program} · {bornIntoTheMachineSprint.year}
            </p>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-[#ff5c00] transition-colors">
              {bornIntoTheMachineSprint.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {bornIntoTheMachineSprint.subtitle}
            </p>
          </div>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(research).map(([slug, item]) => (
          <Link
            key={slug}
            href={researchHref(slug)}
            className="block group border rounded-xl overflow-hidden shadow-lg bg-white dark:bg-black/40 hover:shadow-2xl transition-shadow duration-200"
          >
            <div className="relative aspect-[4/3] mb-4">
              <Image
                src={item.images && item.images.length > 0 ? item.images[0].url : '/placeholder.jpg'}
                alt={
                  item.images && item.images.length > 0
                    ? item.images[0].caption || item.title
                    : item.title
                }
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
