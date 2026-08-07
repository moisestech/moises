import { StatusBadge } from '@/components/capabilities/StatusBadge';
import { EvidenceLink } from '@/components/capabilities/EvidenceLink';
import type { CapabilitySkill } from '@/content/capabilities';
import { cn } from '@/lib/utils';

type SkillRowProps = {
  skill: CapabilitySkill;
  color: string;
};

export function SkillRow({ skill, color }: SkillRowProps) {
  const muted = skill.status === 'planned';

  return (
    <li
      className={cn(
        'flex flex-col gap-1.5 border-b border-stone-100 py-3 last:border-0 dark:border-stone-800 sm:flex-row sm:items-start sm:justify-between sm:gap-4',
        muted && 'opacity-60',
      )}
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">{skill.name}</p>
          <StatusBadge status={skill.status} color={color} />
        </div>
        {skill.note ? (
          <p className="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">{skill.note}</p>
        ) : null}
      </div>
      {skill.evidence?.href ? (
        <div className="shrink-0 sm:pt-0.5">
          <EvidenceLink href={skill.evidence.href} label={skill.evidence.label} />
        </div>
      ) : (
        <span className="shrink-0 text-[11px] text-stone-400 dark:text-stone-500">—</span>
      )}
    </li>
  );
}
