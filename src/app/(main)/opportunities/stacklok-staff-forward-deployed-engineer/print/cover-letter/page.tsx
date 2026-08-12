import type { Metadata } from 'next';
import { stacklokCoverLetterPrint } from '@/content/opportunities/stacklokCoverLetter';

export const metadata: Metadata = {
  title: 'Cover letter (print) | Moises Sanabria — Stacklok',
  description:
    'Print-friendly cover letter for Stacklok Staff Forward Deployed Engineer application.',
  robots: { index: false, follow: false },
};

export default function StacklokCoverLetterPrintPage() {
  const c = stacklokCoverLetterPrint;
  return (
    <>
      <style>{`
        @page { margin: 0.75in; }
        @media print {
          .no-print { display: none !important; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>
      <div className="min-h-screen bg-white px-6 py-8 text-stone-900 print:px-0 print:py-0">
        <p className="no-print mb-6 text-center text-sm text-stone-500">
          Use <strong>Print</strong> → <strong>Save as PDF</strong>. Suggested filename:{' '}
          <code className="rounded bg-stone-100 px-1">Moises_Sanabria_Stacklok_Cover_Letter.pdf</code>
        </p>
        <article className="mx-auto max-w-[640px] text-sm leading-relaxed">
          <p className="text-right text-stone-600">{c.date}</p>
          <p className="mt-8 whitespace-pre-line font-medium text-stone-900">{c.recipient}</p>
          <p className="mt-8">{c.salutation}</p>
          {c.paragraphs.map((para) => (
            <p key={para.slice(0, 48)} className="mt-4">
              {para.includes('Supporting materials') ? (
                <>
                  Supporting materials for this application are at{' '}
                  <a href={c.materialsUrl} className="font-medium text-cyan-800 underline">
                    {c.materialsUrl}
                  </a>
                  , including a role-fit matrix, selected experience, an operating model, and a 30/60/90
                  plan. I would welcome a conversation about how I can help Stacklok move enterprise AI
                  from evaluation into production.
                </>
              ) : (
                para
              )}
            </p>
          ))}
          <p className="mt-8">{c.closing}</p>
          <p className="mt-10">{c.signOff}</p>
          <p className="mt-2 font-semibold text-stone-900">{c.name}</p>
        </article>
      </div>
    </>
  );
}
