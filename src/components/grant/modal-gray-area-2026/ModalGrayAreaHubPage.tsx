import Image from 'next/image';
import Link from 'next/link';
import { modalGrayAreaMeta, modalGrayAreaProposalCard } from '@/content/grants/modal-gray-area-2026/meta';
import {
  modalGrayAreaArtistBio,
  modalGrayAreaArtistStatement,
  modalGrayAreaUnverifiedClaims,
  modalGrayAreaWorkSamples,
} from '@/content/grants/modal-gray-area-2026/shared';

export function ModalGrayAreaHubPage() {
  const meta = modalGrayAreaMeta;
  const card = modalGrayAreaProposalCard;

  return (
    <div className="min-h-screen bg-[#f3f1eb] text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <header className="mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">
            Application packet · {meta.callId}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">{meta.shortName}</h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 font-medium mb-6">
            Single proposal dossier for new AI-infrastructure work at Gray Area, October 2026
          </p>
          <dl className="grid sm:grid-cols-2 gap-3 text-sm border border-stone-200 dark:border-stone-700 p-4 sm:p-5 bg-white/60 dark:bg-black/30">
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Deadline</dt>
              <dd className="font-medium">{meta.deadline}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Honorarium</dt>
              <dd className="font-medium">{meta.honorarium}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Production</dt>
              <dd className="font-medium">{meta.production}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Compute</dt>
              <dd className="font-medium">{meta.compute}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Apply</dt>
              <dd>
                <a
                  href={meta.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  {meta.applyUrl}
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <section className="mb-14">
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed border-l-2 border-stone-400 pl-4">
            Public and shareable with reviewers, Idea Center / MDC collaborators, and partners — an example of
            how an application packet is structured: concept, prototype, site logic, budget, risks, and prior work.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Proposal</h2>
          <Link
            href={card.href}
            className="block border border-stone-300 dark:border-stone-600 bg-white/70 dark:bg-black/40 p-5 sm:p-6 hover:border-stone-900 dark:hover:border-stone-200 transition-colors"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wide border border-stone-400 px-2 py-0.5 text-stone-600 dark:text-stone-300">
              {card.status}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold mt-3">{card.title}</h3>
            <p className="text-stone-500 mt-1">{card.subtitle}</p>
            <p className="mt-3 text-stone-700 dark:text-stone-300 leading-relaxed">{card.thesis}</p>
            <p className="mt-3 text-sm text-stone-500">Spatial gesture: {card.gesture}</p>
            <p className="mt-4 text-sm font-medium underline underline-offset-4">Open proposal →</p>
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Artist statement</h2>
          <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line text-stone-700 dark:text-stone-300 leading-relaxed">
            {modalGrayAreaArtistStatement}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Artist</h2>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{modalGrayAreaArtistBio}</p>
          <p className="text-sm text-stone-500">
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>{' '}
            ·{' '}
            <Link href={meta.bitmRoute} className="underline underline-offset-4">
              Born into the Machine
            </Link>
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Work samples</h2>
          <ul className="grid sm:grid-cols-2 gap-6">
            {modalGrayAreaWorkSamples.map((sample) => (
              <li key={sample.slug}>
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-900 mb-2">
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 20rem"
                  />
                </div>
                <h3 className="font-semibold text-sm">
                  {sample.title} <span className="text-stone-500 font-normal">({sample.year})</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">{sample.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Application-stage honesty</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400">
            {modalGrayAreaUnverifiedClaims.map((claim) => (
              <li key={claim}>{claim}</li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Program contacts</h2>
          <ul className="space-y-4 text-sm">
            {meta.contacts.map((c) => (
              <li key={c.email}>
                <p className="font-medium">{c.name}</p>
                <p className="text-stone-500">{c.role}</p>
                <a href={`mailto:${c.email}`} className="underline underline-offset-4 text-stone-600 dark:text-stone-400">
                  {c.email}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-stone-500">
            Call briefing:{' '}
            <a href={meta.callPageUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              grayarea.org
            </a>
          </p>
        </section>

        <footer className="border-t border-stone-200 dark:border-stone-700 pt-8 text-sm text-stone-500">
          <p>Moises Sanabria · Miami, Florida · {meta.year}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/grants" className="underline underline-offset-4">
              ← Grants directory
            </Link>
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
