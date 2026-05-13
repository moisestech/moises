import type { Metadata } from 'next';
import { knightResumePrint } from '@/content/knightApplicationDocuments';
import { resumeData } from '@/constants/resume';

export const metadata: Metadata = {
  title: 'Résumé (print) | Moises Sanabria — Technology product strategy',
  description: 'Print-friendly résumé for Knight Foundation Technology Product Strategist application.',
  robots: { index: false, follow: false },
};

export default function KnightResumePrintPage() {
  const p = knightResumePrint;
  return (
    <>
      <style>{`
        @page { margin: 0.6in; }
        @media print {
          .no-print { display: none !important; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>
      <div className="min-h-screen bg-white px-6 py-8 text-stone-900 print:px-0 print:py-0">
        <p className="no-print mb-6 text-center text-sm text-stone-500">
          Use your browser&apos;s <strong>Print</strong> dialog → <strong>Save as PDF</strong>. Suggested filename:{' '}
          <code className="rounded bg-stone-100 px-1">Moises-Sanabria-Technology-Product-Strategist.pdf</code>
        </p>
        <article className="mx-auto max-w-[720px] text-sm leading-relaxed">
          <header className="border-b border-stone-300 pb-4">
            <h1 className="text-2xl font-bold tracking-tight">{p.headline}</h1>
            <p className="mt-1 text-stone-600">{p.titleLine}</p>
            <p className="mt-1 text-stone-600">{p.location}</p>
            <p className="mt-3 text-stone-700">
              {p.contact.email} · {p.contact.site} · {p.contact.linkedin}
            </p>
          </header>

          <section className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wide text-stone-500">Summary</h2>
            {p.summary.map((para, i) => (
              <p key={i} className="mt-2">
                {para}
              </p>
            ))}
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wide text-stone-500">Skills</h2>
            <div className="mt-2 grid gap-4 sm:grid-cols-3">
              {p.skillGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="font-semibold text-stone-900">{g.title}</h3>
                  <ul className="mt-1 list-disc pl-4 text-stone-700">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wide text-stone-500">Experience</h2>
            <p className="mt-2 text-xs text-stone-500">{p.experienceIntro}</p>
            <div className="mt-3 space-y-5">
              {resumeData.experience.map((job, i) => (
                <div key={`${job.company}-${job.title}-${i}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-stone-900">{job.title}</h3>
                    <span className="text-xs text-stone-500">{job.period}</span>
                  </div>
                  <p className="text-sm text-stone-600">
                    {job.company} — {job.location}
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-stone-700">
                    {job.description.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  {job.technologies?.length ? (
                    <p className="mt-1 text-xs text-stone-500">Tech: {job.technologies.join(', ')}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wide text-stone-500">Education</h2>
            {resumeData.education.map((ed) => (
              <div key={ed.institution} className="mt-2">
                <p className="font-semibold text-stone-900">{ed.institution}</p>
                <p className="text-stone-700">
                  {ed.degree} ({ed.period}) — {ed.location}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-6 border-t border-stone-200 pt-4 text-xs text-stone-500">
            <p>
              Full exhibition and artwork history: moises.tech/cv — strategic dossier for this role:{' '}
              {p.contact.site}
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
