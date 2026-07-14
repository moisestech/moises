import Link from 'next/link';
import { ApplicationAnswerCard } from '@/components/grant/pioneer-works-residency-2027/ApplicationAnswerCard';
import { SubmissionChecklist } from '@/components/grant/pioneer-works-residency-2027/SubmissionChecklist';
import { UnverifiedClaims } from '@/components/grant/pioneer-works-residency-2027/UnverifiedClaims';
import { WorkSampleIndex } from '@/components/grant/pioneer-works-residency-2027/WorkSampleIndex';
import { pioneerWorks2027Application } from '@/content/applications/pioneer-works-residency-2027';
import { pioneerWorksMeta, pioneerWorksProposalCard } from '@/content/grants/pioneer-works-residency-2027/meta';
import {
  pioneerWorksArtistBio,
  pioneerWorksChecklistFields,
  pioneerWorksPrivateFields,
  pioneerWorksSubmissionChecklist,
  pioneerWorksUnverifiedClaims,
  pioneerWorksWorkSamples,
} from '@/content/grants/pioneer-works-residency-2027/shared';

function FieldStatusPill({
  status,
}: {
  status: 'completed' | 'incomplete' | 'draft-ready';
}) {
  if (status === 'draft-ready') {
    return (
      <span className="inline-flex text-[10px] font-semibold uppercase tracking-wide border border-[#3d5a3a] text-[#3d5a3a] bg-[#a3be8c]/20 px-2 py-0.5">
        Draft ready
      </span>
    );
  }
  if (status === 'completed') {
    return (
      <span className="inline-flex text-[10px] font-semibold uppercase tracking-wide border border-[#3d5a3a] text-[#3d5a3a] px-2 py-0.5">
        Private field completed
      </span>
    );
  }
  return (
    <span className="inline-flex text-[10px] font-semibold uppercase tracking-wide border border-[#8b3a2a]/60 text-[#8b3a2a] px-2 py-0.5">
      Incomplete
    </span>
  );
}

export function PioneerWorksResidencyHubPage() {
  const meta = pioneerWorksMeta;
  const card = pioneerWorksProposalCard;
  const answers = pioneerWorks2027Application.answers;

  return (
    <div className="min-h-screen bg-[#f3f1eb] text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <header className="mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">
            Application packet · {meta.callId}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">{meta.shortName}</h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 font-medium mb-2">
            {meta.projectName}
          </p>
          <p className="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
            Submission dashboard for MACHINE SENTENCES — paste-ready answers, work samples, and
            honesty checklist. Private personal values never appear on this page.
          </p>
          <dl className="grid sm:grid-cols-2 gap-3 text-sm border border-[#c4beb4] dark:border-stone-700 p-4 sm:p-5 bg-white/60 dark:bg-black/30">
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Application status</dt>
              <dd className="font-medium">{meta.applicationStatus}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Deadline</dt>
              <dd className="font-medium">{meta.deadline}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Residency selected</dt>
              <dd className="font-medium">{meta.residencyTrack}</dd>
            </div>
            <div>
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Availability</dt>
              <dd className="font-medium text-[#8b3a2a]">Incomplete — confirm in form</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-stone-500 uppercase tracking-wide text-xs mb-1">Award note</dt>
              <dd className="font-medium">{meta.awardNote}</dd>
            </div>
          </dl>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Application-field checklist</h2>
          <ul className="divide-y divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-700">
            {pioneerWorksChecklistFields.map((field) => (
              <li
                key={field.id}
                className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm"
              >
                <div>
                  <p className="font-medium text-stone-900 dark:text-stone-100">{field.label}</p>
                  {field.note ? <p className="text-xs text-stone-500 mt-0.5">{field.note}</p> : null}
                </div>
                <FieldStatusPill status={field.status} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-2">Paste-ready answers</h2>
          <p className="text-sm text-stone-500 mb-6">
            Live word counts against form maxima. Copy into the official application only.
          </p>
          <div className="space-y-5">
            <ApplicationAnswerCard
              prompt={answers.timeAtPioneerWorks.prompt}
              text={answers.timeAtPioneerWorks.text}
              maxWords={answers.timeAtPioneerWorks.maxWords}
              wordCount={answers.timeAtPioneerWorks.wordCount}
            />
            <ApplicationAnswerCard
              prompt={answers.interestInPioneerWorks.prompt}
              text={answers.interestInPioneerWorks.text}
              maxWords={answers.interestInPioneerWorks.maxWords}
              wordCount={answers.interestInPioneerWorks.wordCount}
            />
            <ApplicationAnswerCard
              prompt={answers.workSamplesDescription.prompt}
              text={answers.workSamplesDescription.text}
              maxWords={answers.workSamplesDescription.maxWords}
              wordCount={answers.workSamplesDescription.wordCount}
            />
          </div>
          <p className="mt-4 text-sm text-stone-500">
            Website URL:{' '}
            <span className="font-medium text-stone-800 dark:text-stone-200">
              {pioneerWorks2027Application.website}
            </span>
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-2">Work-sample checklist</h2>
          <p className="text-sm text-stone-500 mb-6">
            Safer upload order for the form. Machine Sentence remains first on the public proposal page.
          </p>
          <WorkSampleIndex samples={pioneerWorksWorkSamples} />
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">CV checklist</h2>
          <div className="border border-stone-200 dark:border-stone-700 p-4 sm:p-5 text-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium">Artist CV · ≤3 pages for upload</p>
              <FieldStatusPill status="incomplete" />
            </div>
            <p className="mt-2 text-stone-600 dark:text-stone-400">
              Review and export from{' '}
              <Link href="/cv/artist" className="underline underline-offset-4">
                /cv/artist
              </Link>
              . Page-count compliance unverified against Pioneer Works limits.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Missing personal information</h2>
          <p className="text-sm text-stone-500 mb-4">
            Status only — values are never shown on this public dossier.
          </p>
          <ul className="divide-y divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-700">
            {pioneerWorksPrivateFields.map((field) => (
              <li
                key={field.id}
                className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm"
              >
                <p className="font-medium text-stone-900 dark:text-stone-100">{field.label}</p>
                <span
                  className={`inline-flex text-[10px] font-semibold uppercase tracking-wide border px-2 py-0.5 ${
                    field.status === 'completed'
                      ? 'border-[#3d5a3a] text-[#3d5a3a]'
                      : 'border-[#8b3a2a]/60 text-[#8b3a2a]'
                  }`}
                >
                  {field.status === 'completed'
                    ? 'Private field completed'
                    : 'Private field incomplete'}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Proposal & official application</h2>
          <div className="space-y-4">
            <Link
              href={card.href}
              className="block border border-[#a8a29a] dark:border-stone-600 bg-white/70 dark:bg-black/40 p-5 sm:p-6 hover:border-stone-900 dark:hover:border-stone-200 transition-colors"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wide border border-stone-400 px-2 py-0.5 text-stone-600 dark:text-stone-300">
                {card.status}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold mt-3">{card.title}</h3>
              <p className="text-stone-500 mt-1">{card.subtitle}</p>
              <p className="mt-3 text-stone-700 dark:text-stone-300 leading-relaxed">{card.thesis}</p>
              <p className="mt-2 text-sm text-stone-500">Central work: {card.centralWork}</p>
              <p className="mt-4 text-sm font-medium underline underline-offset-4">Open residency dossier →</p>
            </Link>
            <a
              href={meta.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-stone-800 dark:border-stone-200 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-center hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
            >
              Official application → pioneerworks.org/residency
            </a>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Unverified claims</h2>
          <UnverifiedClaims claims={pioneerWorksUnverifiedClaims} />
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Final submission checklist</h2>
          <SubmissionChecklist items={pioneerWorksSubmissionChecklist} />
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Artist</h2>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
            {pioneerWorksArtistBio}
          </p>
          <p className="text-sm text-stone-500">
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>{' '}
            ·{' '}
            <Link href={meta.bitmRoute} className="underline underline-offset-4">
              Born into the Machine
            </Link>{' '}
            ·{' '}
            <Link href={meta.modalProposalRoute} className="underline underline-offset-4">
              Modal × Gray Area / Machine Sentence No. 1
            </Link>
          </p>
        </section>

        <footer className="border-t border-stone-200 dark:border-stone-700 pt-8 text-sm text-stone-500">
          <p>Moises Sanabria · Miami, Florida · Application year 2026 · Residency 2027</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/grants" className="underline underline-offset-4">
              ← Grants directory
            </Link>
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>
            <a
              href={meta.faqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Pioneer Works FAQ
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}
