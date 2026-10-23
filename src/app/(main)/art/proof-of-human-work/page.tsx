import type { Metadata } from 'next';
import Link from 'next/link';
import { proofOfHumanWorkPhrases } from '@/content/art/proof-of-human-work';

const description = 'One hundred imitation $100 bills, each bearing a different phrase handwritten in cursive, numbered and signed by Moises Sanabria. A performance in development about labor, intelligence, and value.';

export const metadata: Metadata = {
  title: 'Proof of Human Work — Moises Sanabria',
  description,
  alternates: { canonical: '/art/proof-of-human-work' },
  openGraph: {
    title: 'Proof of Human Work',
    description,
    url: 'https://moises.tech/art/proof-of-human-work',
    type: 'article',
  },
};

export default function ProofOfHumanWorkPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-48 text-neutral-950 dark:bg-black dark:text-neutral-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/portfolio" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">
          Back to portfolio
        </Link>
        <header className="mt-12 border-b border-neutral-300 pb-12 dark:border-neutral-700">
          <p className="text-xs uppercase tracking-widest">Moises Sanabria · 2026 · In development</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-tight tracking-tight sm:text-7xl">Proof of Human Work</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">One hundred promises, written by hand.</p>
          <dl className="mt-10 grid gap-6 text-sm sm:grid-cols-3">
            <div><dt className="text-neutral-500 dark:text-neutral-400">Medium</dt><dd className="mt-2">Handwritten text, imitation currency, performance</dd></div>
            <div><dt className="text-neutral-500 dark:text-neutral-400">Series</dt><dd className="mt-2">100 unique numbered works</dd></div>
            <div><dt className="text-neutral-500 dark:text-neutral-400">Material</dt><dd className="mt-2">Party-money $100 bills and ink</dd></div>
          </dl>
        </header>

        <section aria-labelledby="work-heading" className="grid gap-8 py-14 md:grid-cols-3">
          <h2 id="work-heading" className="text-sm uppercase tracking-widest">The work</h2>
          <div className="space-y-6 text-lg leading-relaxed md:col-span-2">
            <p>One hundred imitation hundred-dollar bills become the surfaces for one hundred different sentences. I write each phrase manually in cursive across the center, number the bill on the left, and sign the bottom corner.</p>
            <p>The bills imitate a promise of purchasing power. Handwriting, numbering, and an autograph introduce another promise: that attention and authorship might make this piece of paper worth keeping.</p>
            <p>Developed in dialogue with AI, the phrases move between the voices of the artist, the machine, the worker, the money, and its recipient. They contradict one another. Confidence becomes doubt; efficiency becomes exhaustion; a gift becomes a possible possession.</p>
            <p>The work brings the commodification of intelligence into contact with bodily labor. Language can be generated quickly; each inscription still takes a hand and time. Hyperinflation, burnout, and cognitive surrender form its background: what happens when signs of value multiply, and judgment becomes something we delegate?</p>
          </div>
        </section>

        <section aria-labelledby="performance-heading" className="grid gap-8 border-t border-neutral-300 py-14 dark:border-neutral-700 md:grid-cols-3">
          <h2 id="performance-heading" className="text-sm uppercase tracking-widest">The performance</h2>
          <div className="space-y-6 text-lg leading-relaxed md:col-span-2">
            <p>The planned performance makes the inscription visible. Visitors can watch me write and sign; each recipient receives the bill itself, given freely. The AI dialogue remains outside the immediate encounter.</p>
            <p>Someone may keep the bill, give it away, or discard it. The signature proposes value without securing it. The recipient decides what, if anything, has changed.</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Work in development. Distribution has not yet begun. The text register below records proposed inscriptions, not completed or distributed objects. Photographs of the handwritten bills will be added as documentation becomes available.</p>
          </div>
        </section>

        <section aria-labelledby="register-heading" className="border-t border-neutral-300 py-14 dark:border-neutral-700">
          <div className="max-w-2xl">
            <h2 id="register-heading" className="text-3xl font-medium">The hundred inscriptions</h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">A proposed text register. Each five- or six-word phrase will be handwritten in cursive on its own bill. These typeset entries preserve the wording; they do not reproduce the physical handwriting.</p>
          </div>
          <ol className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {proofOfHumanWorkPhrases.map((phrase, index) => (
              <li key={phrase} className="flex gap-5 border-t border-neutral-200 py-6 dark:border-neutral-800">
                <span aria-label={`Number ${index + 1} of 100`} className="pt-1 font-mono text-xs tabular-nums text-neutral-500 dark:text-neutral-400">{String(index + 1).padStart(3, '0')}/100</span>
                <p className="text-lg leading-relaxed">{phrase}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="related-heading" className="border-t border-neutral-300 pt-12 dark:border-neutral-700">
          <h2 id="related-heading" className="text-sm uppercase tracking-widest">Within the practice</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">The work continues an inquiry into currency, bodily effort, and the systems through which value is assigned.</p>
          <ul className="mt-6 space-y-4">
            <li><Link className="underline underline-offset-4" href="/art/price_of_existence">The Price of Existence</Link><p className="mt-1 text-sm">Currency and the body as unstable measures of worth.</p></li>
            <li><Link className="underline underline-offset-4" href="/art/doomscrolling_treadmill">Doomscrolling Treadmill</Link><p className="mt-1 text-sm">A working body inside a continuous system of attention.</p></li>
            <li><Link className="underline underline-offset-4" href="/research/born-into-the-machine">Born into the Machine</Link><p className="mt-1 text-sm">The broader research into machine systems as everyday environments.</p></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
