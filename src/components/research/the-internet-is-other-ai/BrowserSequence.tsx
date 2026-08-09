'use client';

import Image from 'next/image';
import { useState } from 'react';
import { media } from '@/content/research/the-internet-is-other-ai/projectData';

type Study = {
  key: string;
  label: string;
  alt: string;
  src?: string;
  available: boolean;
  placeholderTitle: string;
  placeholderBody: string;
};

const studies: Study[] = [
  {
    key: 'entry',
    label: media.entry.label,
    alt: media.entry.alt,
    src: media.entry.src,
    available: media.entry.available,
    placeholderTitle: 'Human instruction',
    placeholderBody: 'Visitor seeds one instruction into the agent web.',
  },
  {
    key: 'conflict',
    label: media.conflict.label,
    alt: media.conflict.alt,
    src: media.conflict.available ? media.conflict.src : undefined,
    available: media.conflict.available,
    placeholderTitle: 'Agent dispute',
    placeholderBody:
      'Interpreter, Predictor, Circulator, and Materializer contest meaning, sequence, distribution, and form.',
  },
  {
    key: 'materialize',
    label: media.materialize.label,
    alt: media.materialize.alt,
    src: media.materialize.available ? media.materialize.src : undefined,
    available: media.materialize.available,
    placeholderTitle: 'Materialization threshold',
    placeholderBody:
      'A provisional object waits. Only the visitor can authorize physical residue.',
  },
];

function StudyFrame({
  study,
  onOpen,
}: {
  study: Study;
  onOpen: (study: Study) => void;
}) {
  if (study.available && study.src) {
    return (
      <button
        type="button"
        onClick={() => onOpen(study)}
        className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
        aria-label={`Open full view: ${study.label}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden border border-[#f0eee5]/20">
          <Image
            src={study.src}
            alt={study.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-opacity group-hover:opacity-90"
          />
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
          {study.label}
        </p>
      </button>
    );
  }

  return (
    <div className="w-full">
      <div
        className="flex aspect-[16/10] flex-col justify-between border border-dashed border-[#f0eee5]/25 bg-[#10110f] p-4"
        role="img"
        aria-label={study.alt}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
          Study pending
        </p>
        <div>
          <p className="text-lg font-semibold tracking-[-0.02em]">
            {study.placeholderTitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#f0eee5]/75">
            {study.placeholderBody}
          </p>
        </div>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
        {study.label}
      </p>
    </div>
  );
}

export function BrowserSequence() {
  const [lightbox, setLightbox] = useState<Study | null>(null);

  return (
    <section
      id="sequence"
      className="scroll-mt-28 border-b border-[#f0eee5]/15"
      aria-labelledby="sequence-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8d9088]">
          Browser sequence
        </p>
        <h2
          id="sequence-heading"
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.03em]"
        >
          Three interface states
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {studies.map((study) => (
            <StudyFrame key={study.key} study={study} onOpen={setLightbox} />
          ))}
        </div>
      </div>

      {lightbox?.src ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#10110f]/92 p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setLightbox(null);
          }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center border border-[#f0eee5]/40 font-mono text-[11px] uppercase tracking-[0.14em] text-[#f0eee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6e2ba]"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
          <div
            className="relative h-[min(80vh,720px)] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
