import type { Metadata } from 'next';
import { knightCoverLetterPrint } from '@/content/knightApplicationDocuments';

export const metadata: Metadata = {
  title: 'Cover letter (print) | Moises Sanabria — Knight Foundation',
  description: 'Print-friendly cover letter for Knight Foundation Technology Product Strategist application.',
  robots: { index: false, follow: false },
};

export default function KnightCoverLetterPrintPage() {
  const c = knightCoverLetterPrint;
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
          <code className="rounded bg-stone-100 px-1">Moises-Sanabria-Knight-Cover-Letter.pdf</code>
        </p>
        <article className="mx-auto max-w-[640px] text-sm leading-relaxed">
          <p className="text-right text-stone-600">{c.date}</p>
          <p className="mt-8 font-medium text-stone-900">{c.recipient}</p>
          <p className="mt-8">{c.salutation}</p>
          {c.paragraphs.map((para, i) => (
            <p key={i} className="mt-4">
              {para}{' '}
              {para.includes('Supporting materials') ? (
                <a href={c.materialsUrl} className="font-medium text-cyan-800 underline">
                  {c.materialsUrl}
                </a>
              ) : null}
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
