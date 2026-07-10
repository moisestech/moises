'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { BitmCaseStudy } from '@/content/born-into-the-machine/bitm-case-studies';
import { cn } from '@/lib/utils';

export function BitmInfoBlock({ study }: { study: BitmCaseStudy }) {
  const [open, setOpen] = useState(false);
  const sections = [
    { key: 'Concept', value: study.concept },
    { key: 'How it works', value: study.howItWorks },
    { key: 'What the machine does', value: study.machineRole },
    { key: 'What the human decides', value: study.humanRole },
    { key: 'What the public experiences', value: study.publicExperience },
    { key: 'What must be maintained', value: study.maintenance },
  ];

  return (
    <div className="mt-3 border-t border-[#dedede] pt-3 dark:border-neutral-700">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#777777] hover:text-[#111111] dark:hover:text-neutral-200"
      >
        Information block
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>
      {open ? (
        <dl className="mt-3 space-y-3">
          {study.modelSoftware ? (
            <MetaRow label="Model / software" value={study.modelSoftware} />
          ) : null}
          {study.physicalMaterials ? (
            <MetaRow label="Physical materials" value={study.physicalMaterials} />
          ) : null}
          {study.publicContext ? (
            <MetaRow label="Public context" value={study.publicContext} />
          ) : null}
          <MetaRow label="Status" value={study.status} />
          {sections.map((s) => (
            <div key={s.key}>
              <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#ff5c00]">{s.key}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-[#111111] dark:text-neutral-200">{s.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-2 text-sm">
      <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#777777]">{label}</dt>
      <dd className="text-[#111111] dark:text-neutral-200">{value}</dd>
    </div>
  );
}
