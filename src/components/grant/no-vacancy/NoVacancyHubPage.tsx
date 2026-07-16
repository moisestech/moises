import Image from 'next/image';
import Link from 'next/link';
import { noVacancyGrantMeta, noVacancyProposalCards } from '@/content/grants/no-vacancy-2026/meta';
import {
  noVacancyArtistBioShort,
  noVacancyArtistStatement,
  noVacancySharedContact,
  noVacancyWorkSamples,
} from '@/content/grants/no-vacancy-2026/shared';

export function NoVacancyHubPage() {
  const meta = noVacancyGrantMeta;
  const proposal = noVacancyProposalCards[0];

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <header className="mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">
            Application packet · {meta.callId}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">{meta.projectName}</h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 font-medium mb-6">
            Official proposal for temporary hotel installation, Art Week 2026
          </p>
          <dl className="grid sm:grid-cols-2 gap-3 text-sm border border-stone-200 dark:border-stone-700 p-4 sm:p-5 bg-white/60 dark:bg-black/30">
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Deadline</dt>
              <dd className="font-medium">{meta.deadline}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Stipend</dt>
              <dd className="font-medium">{meta.stipend}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Duration</dt>
              <dd className="font-medium">{meta.duration}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Submit</dt>
              <dd>
                <a
                  href={meta.submittableUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  City of Miami Beach Submittable
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <section className="mb-14">
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed border-l-2 border-stone-400 pl-4">
            This packet presents a single official proposal — Volver a Valer: The Value We Carry — structured for
            reviewers as concept, site adaptation, materials, budget, and prior work.
          </p>
        </section>

        {proposal ? (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Official proposal</h2>
            <Link
              href={proposal.href}
              className="block border border-stone-300 dark:border-stone-600 bg-white/70 dark:bg-black/40 p-5 sm:p-6 hover:border-stone-900 dark:hover:border-stone-200 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-wide border border-stone-400 px-2 py-0.5 text-stone-600 dark:text-stone-300">
                  {proposal.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">{proposal.title}</h3>
              <p className="text-stone-500 mt-1">{proposal.subtitle}</p>
              <p className="mt-3 text-stone-700 dark:text-stone-300 leading-relaxed">{proposal.thesis}</p>
              <p className="mt-3 text-sm text-stone-500">Spatial system: {proposal.gesture}</p>
              <p className="mt-4 text-sm font-medium underline underline-offset-4">Open full proposal →</p>
            </Link>
          </section>
        ) : null}

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Artist statement</h2>
          <p className="text-xs text-stone-500 mb-4">Submittable field</p>
          <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line text-stone-700 dark:text-stone-300 leading-relaxed">
            {noVacancyArtistStatement}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Artist</h2>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{noVacancyArtistBioShort}</p>
          <p className="text-sm text-stone-500">
            {noVacancySharedContact.email} ·{' '}
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>{' '}
            ·{' '}
            <a
              href={noVacancySharedContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Instagram
            </a>
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Work samples</h2>
          <ul className="grid sm:grid-cols-2 gap-6">
            {noVacancyWorkSamples.slice(0, 6).map((sample) => (
              <li key={`${sample.slug}-${sample.title}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-900 mb-2">
                  <Image
                    src={sample.cloudinaryUrl}
                    alt={sample.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 20rem"
                  />
                </div>
                <h3 className="font-semibold text-sm">{sample.title}</h3>
                <p className="text-xs text-stone-500 mt-1">{sample.description}</p>
              </li>
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
                <p className="text-stone-600 dark:text-stone-400">
                  {c.phone} ·{' '}
                  <a href={`mailto:${c.email}`} className="underline underline-offset-4">
                    {c.email}
                  </a>
                </p>
              </li>
            ))}
          </ul>
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
