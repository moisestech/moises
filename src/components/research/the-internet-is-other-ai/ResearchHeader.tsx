'use client';

import Link from 'next/link';
import { navSections, projectMeta } from '@/content/research/the-internet-is-other-ai/projectData';

type Props = {
  simulationLabel: string;
};

export function ResearchHeader({ simulationLabel }: Props) {
  return (
    <header className="border-b border-[#f0eee5]/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8d9088] transition-colors hover:text-[#f0eee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            >
              MOISES SANABRIA
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#f0eee5]">
              {projectMeta.researchSeries} / {projectMeta.researchCode}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex min-h-11 items-center border border-[#b6e2ba]/50 px-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b6e2ba]">
              {projectMeta.status}
            </span>
            <span className="inline-flex min-h-11 items-center border border-[#8d9088]/50 px-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
              {simulationLabel}
            </span>
          </div>
        </div>

        <nav aria-label="Project sections" className="overflow-x-auto">
          <ul className="flex min-w-max gap-1 md:gap-2">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex min-h-11 items-center px-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088] transition-colors hover:text-[#f0eee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba] md:px-3"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
