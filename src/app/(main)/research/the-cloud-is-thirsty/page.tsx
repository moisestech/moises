import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { waterResearchReferences, waterStudies } from '@/content/research/water-and-ai';

const SITE = 'https://moises.tech';
const CANONICAL = `${SITE}/research/the-cloud-is-thirsty`;

export const metadata: Metadata = {
  title: 'The Cloud Is Thirsty — Water, AI, and the Material Internet | Moises Sanabria',
  description:
    'A research note connecting speculative sculptures about drinking water, computer cooling, leakage, digital overflow, and the material infrastructure of AI.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'The Cloud Is Thirsty — Moises Sanabria',
    description:
      'Water, AI, and the material internet: speculative sculpture studies and a note on the artist’s method.',
    url: CANONICAL,
    siteName: 'Moises Sanabria',
    type: 'article',
    locale: 'en_US',
  },
};

function PendingStudyVisual({ number, premise }: { number: string; premise: string }) {
  return (
    <div
      aria-label="Approved study image pending"
      className="relative flex aspect-[4/5] min-h-[280px] flex-col justify-between overflow-hidden border border-white/15 bg-[#141a1a] p-6 text-stone-100 md:p-9"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5d2ca]">
        Water / AI — {number}
      </span>
      <p className="max-w-sm text-2xl font-semibold leading-tight md:text-3xl">
        {premise}
      </p>
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400">
        Approved artwork image to be added
      </span>
    </div>
  );
}

export default function TheCloudIsThirstyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
      <nav aria-label="Research breadcrumbs" className="mb-12 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
        <Link href="/research" className="underline underline-offset-4 hover:no-underline">Research</Link>
        <span aria-hidden="true">/</span>
        <Link href="/research/born-into-the-machine" className="underline underline-offset-4 hover:no-underline">Born Into the Machine</Link>
        <span aria-hidden="true">/</span>
        <span>Water &amp; AI</span>
      </nav>

      <header className="border-b border-stone-300 pb-12 dark:border-stone-700 md:pb-16">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
          Artist research note · 2026 · Work in development
        </p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          The cloud <span className="italic font-normal">is thirsty.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-stone-700 dark:text-stone-200 md:text-2xl">
          Water, artificial intelligence, and the material internet.
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
          Moises Sanabria · Research / speculative sculpture / AI-assisted image studies
        </p>
      </header>

      <section aria-labelledby="opening" className="grid gap-10 border-b border-stone-300 py-14 dark:border-stone-700 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <h2 id="opening" className="text-xl font-semibold">The question</h2>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">
            What keeps the machine alive?
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-stone-800 dark:text-stone-200 md:col-span-8">
          <p>
            The internet is routinely described as a cloud, as though computation takes place somewhere
            without bodies, geography, or material cost. Water complicates that fiction. Servers need cooling.
            Electronic systems have physical dependencies. Our everyday drinking water and a machine’s survival
            can suddenly appear in the same frame.
          </p>
          <p>
            I am not trying to illustrate a statistic about AI. I start with objects we already recognize:
            generic bottles of water, computer hardware, an obsolete workstation, the shallow reservoir under a
            leak. Through AI-assisted image-making I rearrange their relationship until an absurd proposal
            becomes almost plausible as a real sculpture.
          </p>
          <p>
            In this series, water shifts roles: <strong>resource, coolant, tear, leak, and residue.</strong> Each
            shift makes a normally hidden dependency easier to notice.
          </p>
        </div>
      </section>

      <section aria-labelledby="studies" className="py-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
              Selected studies / 2026
            </p>
            <h2 id="studies" className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">The object relations</h2>
          </div>
          <span className="max-w-xs text-sm text-stone-500 dark:text-stone-400">
            These are proposed works and image studies, not documentation of fabricated installations.
          </span>
        </div>

        <div className="space-y-20 md:space-y-28">
          {waterStudies.map((study, index) => (
            <article key={study.id} id={study.id} className="grid items-center gap-9 md:grid-cols-12 md:gap-14">
              <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                {study.image ? (
                  <figure>
                    <Image
                      src={study.image.src}
                      alt={study.image.alt}
                      width={960}
                      height={1200}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="mt-3 text-sm text-stone-500 dark:text-stone-400">{study.image.caption}</figcaption>
                  </figure>
                ) : (
                  <PendingStudyVisual number={study.number} premise={study.premise} />
                )}
              </div>
              <div className="md:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">
                  {study.number} / {study.date}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{study.title}</h3>
                <p className="mt-4 text-lg font-medium">{study.premise}</p>
                <p className="mt-5 text-base leading-relaxed text-stone-700 dark:text-stone-300">{study.text}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                  {study.medium} · {study.status}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="method" className="border-y border-stone-300 py-14 dark:border-stone-700">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
              Working method
            </p>
            <h2 id="method" className="mt-3 text-3xl font-semibold tracking-tight">
              Materializing the internet
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-stone-800 dark:text-stone-200 md:col-span-8">
            <p>
              My process begins with a contradiction between ordinary things, not a desire to make a
              spectacular AI image. I use image generation to test recognition, physical support, scale,
              cost, and whether an object seems inevitable inside a gallery.
            </p>
            <p>
              This is part of <Link href="/research/born-into-the-machine" className="underline underline-offset-4">Born Into the Machine</Link> and
              the <Link href="/research/born-into-the-machine/365-post-ai-readymades" className="underline underline-offset-4">365 Post-AI Readymades</Link>:
              the image can precede the sculpture, circulate as a proposal, and sometimes do some of its
              cultural work before fabrication. The labor remains in selecting, refining, rejecting,
              sourcing materials, and deciding whether physical construction will sharpen the idea.
            </p>
            <p>
              A successful study should feel cheap enough to make, recognizable at a glance, and difficult
              to forget once its ordinary components have changed roles.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="lineage" className="py-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
          From earlier work to current research
        </p>
        <h2 id="lineage" className="mt-3 mb-9 text-3xl font-semibold tracking-tight md:text-5xl">
          A longer material conversation
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {waterResearchReferences.map((work) => (
            <article key={work.id} className="border border-stone-300 dark:border-stone-700">
              <Link href={work.href} className="block group">
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
                  <p className="mt-3 text-base leading-relaxed text-stone-700 dark:text-stone-300">{work.description}</p>
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
          This is a living artist research note. The two water-based 2026 studies and the related paper-flow
          study currently await final image selection. Existing portfolio images above are verified studies
          and are labeled separately; no illustrative substitute is presented as an artwork.
        </p>
        <p className="mt-5">
          <Link href="/research" className="underline underline-offset-4">← More research</Link>
        </p>
      </footer>
    </main>
  );
}
