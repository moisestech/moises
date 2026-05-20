import React from 'react';

function Step({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-center text-xs font-medium text-stone-800 shadow-sm sm:text-sm">
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex shrink-0 items-center justify-center text-cyan-500" aria-hidden>
      →
    </div>
  );
}

export function AiMediaStackDiagram() {
  const steps = [
    'Research',
    'Editorial frame',
    'AI-assisted production',
    'Human review',
    'Distribution',
    'Audience feedback',
    'Learning loop',
  ];
  return (
    <figure className="rounded-xl border border-stone-200 bg-stone-50/80 p-4">
      <figcaption className="mb-3 text-sm font-semibold text-stone-900">AI media production stack (schematic)</figcaption>
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {steps.map((label, i) => (
          <React.Fragment key={label}>
            {i > 0 ? <Arrow /> : null}
            <Step>{label}</Step>
          </React.Fragment>
        ))}
      </div>
    </figure>
  );
}

export function CivicInformationStackDiagram() {
  const layers = [
    'Local knowledge',
    'Data + reporting',
    'Editorial / narrative',
    'Interfaces + distribution',
    'Community feedback',
    'Trust + measurement',
  ];
  return (
    <figure className="rounded-xl border border-stone-200 bg-stone-50/80 p-4">
      <figcaption className="mb-3 text-sm font-semibold text-stone-900">Civic information stack (schematic)</figcaption>
      <div className="mx-auto flex max-w-md flex-col gap-2">
        {layers.map((label) => (
          <div
            key={label}
            className="rounded-lg border border-cyan-400/25 bg-white px-4 py-2.5 text-center text-sm font-medium text-stone-800"
          >
            {label}
          </div>
        ))}
      </div>
    </figure>
  );
}

export function InvestmentLensDiagram() {
  const items = [
    'Community need',
    'Product capability',
    'Adoption path',
    'Sustainability',
    'Replicability',
    'Risk (AI, privacy, trust, labor)',
    'Measurement',
  ];
  return (
    <figure className="rounded-xl border border-stone-200 bg-stone-50/80 p-4">
      <figcaption className="mb-3 text-sm font-semibold text-stone-900">Technology investment lens</figcaption>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((label) => (
          <li
            key={label}
            className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-800"
          >
            {label}
          </li>
        ))}
      </ul>
    </figure>
  );
}
