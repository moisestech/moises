'use client';

import { useEffect, useId, useState } from 'react';
import {
  ChevronDown,
  Code2,
  Database,
  Palette,
  Server,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { SkillRow } from '@/components/capabilities/SkillRow';
import {
  countByStatus,
  getSkillsByPillar,
  type CapabilityPillarMeta,
} from '@/content/capabilities';
import { cn } from '@/lib/utils';

const ICONS: Record<CapabilityPillarMeta['icon'], LucideIcon> = {
  sparkles: Sparkles,
  code2: Code2,
  database: Database,
  palette: Palette,
  server: Server,
  users: Users,
};

type PillarCardProps = {
  pillar: CapabilityPillarMeta;
  /** When true (e.g. hash target), expand this pillar. */
  preferOpen?: boolean;
};

export function PillarCard({ pillar, preferOpen = false }: PillarCardProps) {
  const [open, setOpen] = useState(preferOpen);
  const panelId = useId();
  const skills = getSkillsByPillar(pillar.id);
  const counts = countByStatus(skills);
  const Icon = ICONS[pillar.icon];

  useEffect(() => {
    if (preferOpen) setOpen(true);
  }, [preferOpen]);

  return (
    <article
      id={pillar.id}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-900 sm:scroll-mt-32"
      style={{ borderLeftWidth: 4, borderLeftColor: pillar.color }}
    >
      <h2 className="sr-only">{pillar.name}</h2>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-3 p-4 text-left transition hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:hover:bg-stone-800/60 sm:gap-4 sm:p-5"
      >
        <span
          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white sm:h-11 sm:w-11"
          style={{ backgroundColor: pillar.color }}
          aria-hidden
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-base font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-lg">
            {pillar.name}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-stone-600 dark:text-stone-400 sm:text-sm">
            {pillar.description}
          </p>
          <p className="mt-2 text-[11px] font-semibold tabular-nums text-stone-500 dark:text-stone-400">
            <span style={{ color: pillar.color }}>{counts.proven} Proven</span>
            <span className="mx-1.5 text-stone-300 dark:text-stone-600">·</span>
            <span>{counts.building} Building</span>
            {counts.planned > 0 ? (
              <>
                <span className="mx-1.5 text-stone-300 dark:text-stone-600">·</span>
                <span className="opacity-70">{counts.planned} Planned</span>
              </>
            ) : null}
          </p>
        </div>
        <ChevronDown
          className={cn(
            'mt-1 h-5 w-5 shrink-0 text-stone-400 transition duration-300 motion-reduce:transition-none',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <ul className="border-t border-stone-100 px-4 pb-4 dark:border-stone-800 sm:px-5 sm:pb-5">
            {skills.map((skill) => (
              <SkillRow key={skill.id} skill={skill} color={pillar.color} />
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
