import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { waterResearchReferences, waterStudies } from '@/content/research/water-and-ai';

const SITE = 'https://moises.tech';
const CANONICAL = `${SITE}/research/the-cloud-is-thirsty`;
const ogImage = waterStudies[0];

export const metadata: Metadata = {
  title: 'The Cloud Is Thirsty — Water, AI, and the Material Internet | Moises Sanabria',
  description:
    'Nine image studies from 365 Post-AI Readymades on drinking water, cooling, leakage, and the material body of computation.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'The Cloud Is Thirsty — Moises Sanabria',
    description:
      'A focused selection of water studies from 365 Post-AI Readymades, for curators and teachers.',
    url: CANONICAL,
    siteName: 'Moises Sanabria',
    type: 'article',
    locale: 'en_US',
    images: [{ url: ogImage.image, alt: ogImage.alt }],
  },
};

export default function TheCloudIsThirstyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <nav
        aria-label="Research breadcrumbs"
        className="mb-12 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400"
      >
        <Link href="/research" className="underline underline-offset-4 hover:no-underline">
          Research
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href="/research/born-into-the-machine"
          className="underline underline-offset-4 hover:no-underline"
        >
          Born Into the Machine
        </Link>
        <span aria-hidden="true">/</span>
        <span>The Cloud Is Thirsty</span>
      </nav>

      <header className="border-b border-stone-300 pb-12 dark:border-stone-700 md:pb-16">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
          Focused selection · 2026 · Image studies
        </p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          The cloud <span className="italic font-normal">is thirsty.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-stone-700 dark:text-stone-200 md:text-2xl">
          Water, artificial intelligence, and the material internet.
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
          Moises Sanabria · Nine studies from{' '}
          <Link
            href="/research/born-into-the-machine/365-post-ai-readymades"
            className="underline underline-offset-4 hover:no-underline"
          >
            365 Post-AI Readymades
          </Link>
        </p>
      </header>

      <nav
        aria-label="In this research note"
        className="my-6 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] print:hidden"
      >
        <a
          href="#studies"
          className="border border-stone-300 px-3 py-2 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-900"
        >
          Nine studies ↘
        </a>
        <a
          href="#method"
          className="border border-stone-300 px-3 py-2 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-900"
        >
          Method ↘
        </a>
        <a
          href="#lineage"
          className="border border-stone-300 px-3 py-2 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-900"
        >
          Earlier work ↘
        </a>
      </nav>

      <section
        aria-labelledby="opening"
        className="grid gap-10 border-b border-stone-300 py-14 dark:border-stone-700 md:grid-cols-12 md:gap-16"
      >
        <div className="md:col-span-4">
          <h2 id="opening" className="text-xl font-semibold">
            The question
          </h2>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">
            What keeps the machine alive?
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-stone-800 dark:text-stone-200 md:col-span-8">
          <p>
            The internet is routinely described as a cloud, as though computation takes place
            somewhere without bodies, geography, or material cost. Water complicates that fiction.
            Servers need cooling. A picture of the sea, a bottle, a hydrant, or a wet-floor sign
            can put that dependency in the room.
          </p>
          <p>
            These nine studies come from the daily archive of 365 Post-AI Readymades. They are
            gathered here for readers who want the water works in one place: teachers, curators,
            and anyone tracing how ordinary objects give computation a body.
          </p>
          <p>
            In this selection, water shifts roles: <strong>resource, coolant, leak, warning, picture, and residue.</strong>{' '}
            Feed Spill has no literal water. The printed feed pools on the floor instead.
          </p>
        </div>
      </section>

      <section aria-labelledby="studies" className="py-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
              Nine studies / 2026
            </p>
            <h2 id="studies" className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              The water selection
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-500 dark:text-stone-400">
            AI-assisted image studies. The white room is part of the image. These are not
            photographs of fabricated installations.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {waterStudies.map((study) => (
            <article key={study.id} id={study.id}>
              <figure>
                <Image
                  src={study.image}
                  alt={study.alt}
                  width={study.width}
                  height={study.height}
                  className="h-auto w-full bg-stone-100 object-contain dark:bg-stone-900"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <figcaption className="mt-3 text-sm text-stone-500 dark:text-stone-400">
                  {study.title} · study {study.number} · image study, 2026
                </figcaption>
              </figure>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">
                {study.number}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{study.title}</h3>
              <p className="mt-3 text-base font-medium">{study.premise}</p>
              <p className="mt-3 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                {study.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="method" className="border-y border-stone-300 py-14 dark:border-stone-700">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
              Where this sits
            </p>
            <h2 id="method" className="mt-3 text-3xl font-semibold tracking-tight">
              A selection, not the whole archive
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-stone-800 dark:text-stone-200 md:col-span-8">
            <p>
              The full daily archive is{' '}
              <Link
                href="/research/born-into-the-machine/365-post-ai-readymades"
                className="underline underline-offset-4"
              >
                365 Post-AI Readymades
              </Link>
              . This page holds the studies in which water, cooling, or a pictured sea makes the
              material cost of computation visible. The parent research is{' '}
              <Link href="/research/born-into-the-machine" className="underline underline-offset-4">
                Born Into the Machine
              </Link>
              .
            </p>
            <p>
              The image can precede the sculpture. Selecting, rejecting, and deciding whether to
              build the object remain the work. A study should be recognizable at a glance, and
              difficult to forget once its ordinary parts have changed roles.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="lineage" className="py-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
          Earlier and adjacent work
        </p>
        <h2 id="lineage" className="mb-9 mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Before this selection
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {waterResearchReferences.map((work) => (
            <article key={work.id} className="border border-stone-300 dark:border-stone-700">
              <Link href={work.href} className="group block">
                <div className="relative aspect-[5/4] overflow-hidden bg-stone-200 dark:bg-stone-900">
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 md:p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">
                    {work.year} · {work.status}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{work.title} ↗</h3>
                  <p className="mt-3 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                    {work.description}
                  </p>
                  <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
                    {work.caption} · {work.credit}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-stone-300 pt-8 text-sm leading-relaxed text-stone-600 dark:border-stone-700 dark:text-stone-400">
        <p>
          Nine image studies, 2026. They are proposals inside{' '}
          <Link
            href="/research/born-into-the-machine/365-post-ai-readymades"
            className="underline underline-offset-4"
          >
            365 Post-AI Readymades
          </Link>
          , not records of built sculptures.
        </p>
        <p className="mt-5">
          <Link href="/research" className="underline underline-offset-4">
            ← More research
          </Link>
        </p>
      </footer>
    </main>
  );
}
