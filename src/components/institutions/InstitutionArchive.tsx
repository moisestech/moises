'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  institutionsHub as H,
  type InstitutionOrg,
  type OrgRelationship,
} from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  INST_ACCENT,
  InstContainer,
  InstReveal,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

const ORG_FILTERS: Array<{ id: 'all' | OrgRelationship; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'employment', label: 'Employment' },
  { id: 'lab', label: 'Lab' },
  { id: 'residency', label: 'Residency' },
  { id: 'workshop', label: 'Teaching' },
  { id: 'platform', label: 'Platform' },
  { id: 'exhibition', label: 'Exhibition' },
  { id: 'festival', label: 'Festival' },
  { id: 'education', label: 'Education' },
  { id: 'funder', label: 'Funder context' },
];

export function InstitutionArchive() {
  const [orgFilter, setOrgFilter] = useState<'all' | OrgRelationship>('all');
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    if (orgFilter === 'all') return H.organizations;
    return H.organizations.filter((o) => o.relationship === orgFilter);
  }, [orgFilter]);

  const visible = useMemo(() => {
    if (expanded || orgFilter !== 'all') return filtered;
    return filtered.filter((o) => o.archiveFeatured);
  }, [expanded, filtered, orgFilter]);

  const hiddenCount = filtered.length - visible.length;

  return (
    <section
      id="archive"
      className="scroll-mt-32 border-b border-neutral-200 py-16 sm:py-20"
      aria-labelledby="archive-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="ocean">Institutional experience</InstSectionLabel>
          <h2 id="archive-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            Institutional experience and cultural contexts
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            Secondary proof after the three flagship case studies. Relationship type is always visible.
          </p>
        </InstReveal>

        <div
          className="mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filter institutional experience"
        >
          {ORG_FILTERS.map((filter) => {
            const active = orgFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setOrgFilter(filter.id);
                  if (filter.id !== 'all') setExpanded(true);
                }}
                className={cn(
                  'min-h-11 shrink-0 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition',
                  active
                    ? INST_ACCENT.ocean.chipActive
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500',
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((org, i) => (
            <InstReveal key={org.id} delay={Math.min(0.03 * i, 0.24)}>
              <li>
                <OrgCard org={org} />
              </li>
            </InstReveal>
          ))}
        </ul>

        {hiddenCount > 0 ? (
          <button
            type="button"
            className="mt-8 inline-flex min-h-11 items-center border border-neutral-950 bg-white px-5 py-2.5 text-sm font-semibold"
            onClick={() => {
              setExpanded(true);
              track('institutions_archive_expand');
            }}
          >
            View full experience ({hiddenCount} more)
          </button>
        ) : null}

        <details className="mt-8 max-w-xl text-xs text-neutral-500">
          <summary className="cursor-pointer font-mono uppercase tracking-[0.12em]">
            How this list is verified
          </summary>
          <p className="mt-2 leading-relaxed">{H.honestyNote}</p>
        </details>
      </InstContainer>
    </section>
  );
}

function OrgCard({ org }: { org: InstitutionOrg }) {
  const body = (
    <>
      {org.imageSrc ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
          <Image
            src={org.imageSrc}
            alt={org.imageAlt ?? org.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-neutral-100 px-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
            {org.relationshipLabel}
          </p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
          {org.relationshipLabel}
        </p>
        <h3 className="mt-1.5 font-['MoMA_Sans'] text-base font-semibold leading-snug sm:text-lg">
          {org.name}
        </h3>
        <p className="mt-1 text-xs text-neutral-500">{org.location}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">{org.summary}</p>
        {org.href ? (
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
            View
            {org.external ? (
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            )}
          </span>
        ) : null}
      </div>
    </>
  );

  const className =
    'group flex h-full flex-col overflow-hidden border border-neutral-200 bg-white transition hover:border-neutral-400';

  if (!org.href) {
    return <div className={className}>{body}</div>;
  }

  if (org.external) {
    return (
      <a href={org.href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }

  return (
    <Link href={org.href} className={className}>
      {body}
    </Link>
  );
}
