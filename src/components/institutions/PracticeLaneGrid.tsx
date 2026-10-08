'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Database,
  FlaskConical,
  RadioTower,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import {
  CONCEPTUAL_SYSTEM_VIEW_LABEL,
  institutionsHub as H,
  type PracticeLaneAccent,
} from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  INST_ACCENT,
  INST_ACCENT_WASH,
  InstContainer,
  InstReveal,
  InstSectionLabel,
  LANE_ACCENT,
  INST_ANCHOR_SCROLL_MT_CLASS,
} from '@/components/institutions/InstitutionalUi';
import { LaneStackVisual } from '@/components/institutions/IcaSystemsDiagram';
import { cn } from '@/lib/utils';

const LANE_ICON: Record<(typeof H.lanes)[number]['icon'], LucideIcon> = {
  database: Database,
  workflow: Workflow,
  radio: RadioTower,
  flask: FlaskConical,
};

export function PracticeLaneGrid() {
  return (
    <section
      id="services"
      className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-16 sm:py-20')}
      aria-labelledby="lanes-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="ocean">Practice lanes</InstSectionLabel>
          <h2 id="lanes-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            Outcomes an engagement can pursue
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-800">
            These are directions a project can take. They are not results already delivered for every institution.
          </p>
        </InstReveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {H.lanes.map((lane, index) => {
            const accentKey = LANE_ACCENT[lane.accent as PracticeLaneAccent];
            const accent = INST_ACCENT[accentKey];
            const Icon = LANE_ICON[lane.icon];
            return (
              <InstReveal key={lane.id} delay={0.05 * index}>
                <li
                  id={lane.id}
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden border border-neutral-200 bg-white transition duration-300',
                    accent.ring,
                  )}
                >
                  <div
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none',
                      INST_ACCENT_WASH[accentKey],
                    )}
                  />
                  <figure className="relative">
                    <div className="relative aspect-square overflow-hidden bg-[#F4F1EA]">
                      <Image
                        src={lane.illustration.src}
                        alt={lane.illustration.alt}
                        fill
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                        sizes="(min-width: 640px) 40vw, 100vw"
                      />
                    </div>
                    <figcaption className="border-b border-neutral-200 bg-[#F4F1EA] px-5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 sm:px-6">
                      {CONCEPTUAL_SYSTEM_VIEW_LABEL}
                    </figcaption>
                  </figure>
                  <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={cn(
                          'inline-flex h-10 w-10 items-center justify-center',
                          accent.iconBg,
                        )}
                        aria-hidden
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                        {lane.index}
                      </p>
                    </div>
                    <div className="mt-4 rounded-sm p-2 transition duration-300 hover:bg-white/80">
                      <h3 className="font-['MoMA_Sans'] text-xl font-semibold leading-snug sm:text-2xl">
                        {lane.title}
                      </h3>
                      <p className={cn('mt-3 text-base font-medium leading-relaxed', accent.text)}>
                        Potential outcome: {lane.solves}
                      </p>
                    </div>
                    <div className="group/prior mt-2 rounded-sm border-t border-neutral-200 p-2 pt-3 transition duration-300 hover:bg-white/80">
                      <details className="peer">
                        <summary className="cursor-pointer text-base font-medium text-neutral-900">
                          Prior work in this lane
                        </summary>
                        <p className="mt-3 text-base leading-relaxed text-neutral-800">{lane.description}</p>
                        <p className="mt-3 text-base leading-relaxed text-neutral-800">{lane.priorExample}</p>
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {lane.proofTags.map((tag) => (
                            <li
                              key={tag}
                              className={cn(
                                'border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em]',
                                accent.chip,
                              )}
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </details>
                      <div
                        className={cn(
                          'lane-logos grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none',
                          'grid-rows-[0fr] opacity-0',
                          'peer-open:!grid-rows-[1fr] peer-open:!opacity-100',
                          'group-hover/prior:!grid-rows-[1fr] group-hover/prior:!opacity-100',
                        )}
                      >
                        <div className="overflow-hidden">
                          <LaneStackVisual logos={lane.stack} />
                        </div>
                      </div>
                    </div>
                    <Link
                      href={lane.href}
                      className={cn(
                        'mt-5 inline-flex min-h-11 items-center gap-1.5 text-base font-semibold',
                        accent.text,
                      )}
                      onClick={() => track('institutions_lane_select', { lane: lane.id })}
                    >
                      {lane.linkLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </li>
              </InstReveal>
            );
          })}
        </ul>
      </InstContainer>
    </section>
  );
}
