import Image from 'next/image';
import Link from 'next/link';
import { modalGrayAreaMeta, modalGrayAreaProposalCard } from '@/content/grants/modal-gray-area-2026/meta';
import { modalGrayAreaArtistBio, modalGrayAreaWorkSamples } from '@/content/grants/modal-gray-area-2026/shared';
import {
  machineSentenceMedia,
  machineSentenceMediaDisclosure,
} from '@/content/grants/modal-gray-area-2026/machine-sentence-media';
import { ProposalFigure } from './ProposalFigure';

export function ModalGrayAreaHubPage() {
  const meta = modalGrayAreaMeta;
  const card = modalGrayAreaProposalCard;
  const hero = machineSentenceMedia.grayAreaActive;

  return (
    <div className="min-h-screen bg-[#f3f1eb] text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <header className="mb-10 sm:mb-12">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">Modal × Gray Area — 2026</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">{meta.shortName}</h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            A public application packet for a new AI-infrastructure sculpture proposed for Gray Area, San
            Francisco, October 2026.
          </p>
        </header>

        <dl className="grid sm:grid-cols-2 gap-3 text-sm border border-stone-300 dark:border-stone-700 p-4 sm:p-5 mb-10">
          <div>
            <dt className="text-stone-500 uppercase tracking-wide text-[10px] mb-1">Deadline</dt>
            <dd className="font-medium">{meta.deadline}</dd>
          </div>
          <div>
            <dt className="text-stone-500 uppercase tracking-wide text-[10px] mb-1">Honorarium</dt>
            <dd className="font-medium">{meta.honorarium}</dd>
          </div>
          <div>
            <dt className="text-stone-500 uppercase tracking-wide text-[10px] mb-1">Production</dt>
            <dd className="font-medium">{meta.production}</dd>
          </div>
          <div>
            <dt className="text-stone-500 uppercase tracking-wide text-[10px] mb-1">Compute</dt>
            <dd className="font-medium">{meta.compute}</dd>
          </div>
        </dl>

        <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
          {card.thesis}
        </p>

        <div className="mb-3">
          <ProposalFigure media={hero} priority />
        </div>
        <p className="text-xs text-stone-500 mb-10 leading-relaxed">{machineSentenceMediaDisclosure}</p>

        <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight mb-8 border-l-2 border-stone-900 dark:border-stone-100 pl-4">
          The sculpture does not illustrate what you say. It becomes a machine sentence.
        </p>

        <Link
          href={card.href}
          className="inline-flex min-h-11 items-center border border-stone-900 dark:border-stone-100 px-5 py-2.5 text-sm font-medium hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-black transition-colors mb-16"
        >
          Open full proposal →
        </Link>

        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-3">Artist</h2>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
            {modalGrayAreaArtistBio}
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-6">Selected prior works</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {modalGrayAreaWorkSamples.slice(0, 6).map((sample) => (
              <li key={sample.slug}>
                <Link href={`/art/${sample.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-900 mb-2">
                    <Image
                      src={sample.image}
                      alt={sample.title}
                      fill
                      className="object-cover group-hover:opacity-90 transition"
                      sizes="(max-width: 640px) 50vw, 12rem"
                    />
                  </div>
                  <p className="text-xs font-medium leading-snug group-hover:underline">{sample.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-stone-300 dark:border-stone-700 pt-8 text-sm text-stone-600 dark:text-stone-400 space-y-2">
          <p>
            Apply:{' '}
            <a href={meta.applyUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              modal.art
            </a>
          </p>
          <p>
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>
            {' · '}
            <Link href={meta.bitmRoute} className="underline underline-offset-4">
              Born into the Machine
            </Link>
            {' · '}
            <Link href="/grants" className="underline underline-offset-4">
              Grants directory
            </Link>
          </p>
          <p className="pt-4 text-stone-500">Moises Sanabria · Miami, Florida · {meta.year}</p>
        </section>
      </article>
    </div>
  );
}
