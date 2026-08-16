'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Database,
  FlaskConical,
  RadioTower,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { institutionsHub as H, type PracticeLaneAccent } from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  INST_ACCENT,
  InstContainer,
  InstReveal,
  InstSectionLabel,
  LANE_ACCENT,
} from '@/components/institutions/InstitutionalUi';
import { LaneStackVisual } from '@/components/institutions/IcaSystemsDiagram';
import { cn } from '@/lib/utils';

const LANE_ICON: Record<(typeof H.lanes)[number]['icon'], LucideIcon> = {
  database: Database,
  workflow: Workflow,
  radio: RadioTower,
  flask: FlaskConical,
};

const LANE_FLOW: Record<(typeof H.lanes)[number]['id'], string> = {
  'web-salesforce': 'Salesforce → WordPress / ticketing → public site',
  'automation-operations': 'Intake → Airtable / n8n → documented handoff',
  'livestream-production': 'OBS → captions → YouTube / hybrid program',
  'digital-labs-programs': 'Equipment → workshop / open lab → documentation',
};

export function PracticeLaneGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-32 border-b border-neutral-200 py-16 sm:py-20"
      aria-labelledby="lanes-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="ocean">Practice lanes</InstSectionLabel>
          <h2 id="lanes-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            Four ways to engage the systems behind the program
          </h2>
        </InstReveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {H.lanes.map((lane, index) => {
            const accentKey = LANE_ACCENT[lane.accent as PracticeLaneAccent];
            const accent = INST_ACCENT[accentKey];
            const Icon = LANE_ICON[lane.icon];
            return (
              <InstReveal key={lane.id} delay={0.05 * index}>
                <li>
                  <Link
                    href={lane.href}
                    id={lane.id}
                    className={cn(
                      'group flex h-full flex-col border border-neutral-200 bg-white p-5 transition sm:p-6',
                      'hover:ring-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                      accent.ring,
                    )}
                    onClick={() =>
                      track('institutions_lane_select', { lane: lane.id })
                    }
                  >
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
                    <h3 className="mt-4 font-['MoMA_Sans'] text-lg font-semibold leading-snug sm:text-xl">
                      {lane.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">{lane.description}</p>
                    <p
                      className={cn(
                        'mt-3 text-sm font-medium opacity-0 transition-opacity duration-200',
                        'group-hover:opacity-100 group-focus-visible:opacity-100',
                        'max-sm:opacity-100',
                        accent.text,
                      )}
                    >
                      What this solves: {lane.solves}
                    </p>
                    <LaneStackVisual logos={lane.stack} />
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                      {LANE_FLOW[lane.id]}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {lane.proofTags.map((tag) => (
                        <li
                          key={tag}
                          className={cn(
                            'border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]',
                            accent.chip,
                          )}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className={cn('mt-5 inline-flex items-center gap-1.5 text-sm font-semibold', accent.text)}>
                      {lane.linkLabel}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </li>
              </InstReveal>
            );
          })}
        </ul>
      </InstContainer>
    </section>
  );
}
