import type { Metadata } from 'next';
import { research } from '@/constants/research';
import {
  bornIntoTheMachineSprint,
  ideaCenterLogos,
  ideaCenterProgram,
} from '@/content/research/born-into-the-machine-sprint';
import Link from 'next/link';
import Image from 'next/image';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: 'Research — Moises Sanabria',
  description:
    'Practice-based research tied to artworks and public programs: Born into the Machine, Noisy Systems, public art proposals, and sculptural research in development.',
  alternates: { canonical: `${SITE}/research` },
  openGraph: {
    title: 'Research — Moises Sanabria',
    description:
      'Practice-based research tied to artworks and public programs: Born into the Machine, Noisy Systems, and public art proposals.',
    type: 'website',
    url: `${SITE}/research`,
    siteName: 'Moises Sanabria',
    locale: 'en_US',
  },
};

export default function ResearchIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          Research supports the art practice—it does not compete with it. These projects stage how
          algorithmic environments, consumer objects, and networked systems shape belief, labor, value,
          and desire. Writing, proposals, and public programs grow out of the same body of work.
        </p>
        <p className="text-lg leading-relaxed">
          The central framework is{' '}
          <Link href="/research/born-into-the-machine" className="underline underline-offset-4 hover:no-underline">
            Born into the Machine
          </Link>
          —a long-form project about what happens when intelligence becomes infrastructure. Current writing
          also includes a practice-based paper on noise, slop, and synthetic abundance in generative AI:{' '}
          <Link href="/noisy-systems" className="underline underline-offset-4 hover:no-underline">
            Noisy Systems
          </Link>
          .
        </p>
      </div>

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
              priority
            />
          </div>
          <div className="px-6 py-6 md:py-8 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5c00] mb-2">
              {ideaCenterProgram.program} · {bornIntoTheMachineSprint.year}
            </p>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-[#ff5c00] transition-colors">
              {bornIntoTheMachineSprint.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{bornIntoTheMachineSprint.subtitle}</p>
          </div>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(research).map(([slug, item]) => (
          <Link
            key={slug}
            href={
              slug === 'value_of_the_image' ? '/research/the-value-and-future-of-the-image' :
              slug === 'echo_economies' ? '/research/locust-echo-economies' :
              slug === 'broken_acceleration' ? '/research/broken-acceleration' :
              slug === 'touch_grass_circuit_floor' ? '/research/touch-grass-circuit-floor' :
              slug === 'weight_of_the_cloud' ? '/research/weight-of-the-cloud' :
              `/research/${slug}`
            }
            className="block group border rounded-xl overflow-hidden shadow-lg bg-white dark:bg-black/40 hover:shadow-2xl transition-shadow duration-200"
          >
            <div className="relative aspect-[4/3] mb-4">
              <Image
                src={item.images && item.images.length > 0 ? item.images[0].url : '/placeholder.jpg'}
                alt={item.images && item.images.length > 0 ? item.images[0].caption || item.title : item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
