import Link from 'next/link';
import { projectMeta } from '@/content/research/the-internet-is-other-ai/projectData';

export function ResearchFooter() {
  return (
    <footer className="border-t border-[#f0eee5]/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-6">
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
            Moises Sanabria
          </p>
          <p className="text-sm text-[#f0eee5]/8">
            <a
              href={`mailto:${projectMeta.contactEmail}`}
              className="underline underline-offset-4 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            >
              {projectMeta.contactEmail}
            </a>
          </p>
          <p className="text-sm text-[#f0eee5]/8">
            <Link
              href="/"
              className="underline underline-offset-4 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            >
              moises.tech
            </Link>
          </p>
          <div className="flex gap-4 pt-1">
            <a
              href={projectMeta.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8d9088] underline underline-offset-4 hover:text-[#f0eee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            >
              Instagram
            </a>
            <a
              href={projectMeta.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8d9088] underline underline-offset-4 hover:text-[#f0eee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            >
              X
            </a>
          </div>
        </div>
        <div className="max-w-md space-y-2 text-sm text-[#8d9088] md:text-right">
          <p>Concept, artwork, and final decisions by Moises Sanabria.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em]">
            Status: RESEARCH PAGE IN DEVELOPMENT / {projectMeta.year}
          </p>
          <p>
            <Link
              href="/research"
              className="underline underline-offset-4 hover:text-[#f0eee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            >
              ← Research index
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
