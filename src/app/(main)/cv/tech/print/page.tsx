import type { Metadata } from 'next';
import { technologyCvPrint } from '@/content/technologyCvPrint';
import { resumeData } from '@/constants/resume';

export const metadata: Metadata = {
  title: 'Technology CV (print) | Moises Sanabria',
  description: 'Print-friendly technology CV for engineering and data roles.',
  robots: { index: false, follow: false },
};

function CompanyName({ company, url }: { company: string; url?: string }) {
  if (url) {
    return (
      <a href={url} className="text-stone-900 underline">
        {company}
      </a>
    );
  }
  return <>{company}</>;
}

export default function TechnologyCvPrintPage() {
  const p = technologyCvPrint;
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
          <code className="rounded bg-stone-100 px-1">{p.suggestedPdfFilename}</code>
        </p>
        <article className="mx-auto max-w-[720px] text-sm leading-relaxed">
          <header className="border-b border-stone-300 pb-4">
            <h1 className="text-2xl font-bold tracking-tight">{p.headline}</h1>
            <p className="mt-1 text-stone-600">{p.titleLine}</p>
            <p className="mt-1 text-stone-600">{p.location}</p>
            <p className="mt-3 text-stone-700">
              {p.contact.email} · {p.contact.site} · {p.contact.linkedin} · {p.contact.github}
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

          <section className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wide text-stone-500">Core skills</h2>
            <div className="mt-2 grid gap-4 sm:grid-cols-3">
              {p.skillGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="font-semibold text-stone-800">{g.title}</h3>
                  <ul className="mt-1 list-disc pl-4 text-stone-700">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wide text-stone-500">Experience</h2>
            <p className="mt-2 text-stone-600">{p.experienceIntro}</p>
            <ul className="mt-3 space-y-4">
              {resumeData.experience.map((job) => (
                <li key={`${job.company}-${job.period}`}>
                  <p className="font-semibold text-stone-900">
                    {job.title} — <CompanyName company={job.company} url={job.companyUrl} />
                  </p>
                  <p className="text-stone-600">
                    {job.location} · {job.period}
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-stone-700">
                    {job.description.map((line) => (
                      <li key={line.slice(0, 48)}>{line}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wide text-stone-500">Education</h2>
            <ul className="mt-2 space-y-2">
              {resumeData.education.map((edu) => (
                <li key={edu.institution}>
                  <p className="font-semibold text-stone-900">{edu.degree}</p>
                  <p className="text-stone-600">
                    {edu.institution} · {edu.location} · {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
