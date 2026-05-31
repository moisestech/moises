import type { WorkSkillTier } from '@/content/work/types';
import { resolveTechLogos } from '@/content/evidence/tech-logos';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type SkillLogoTierGridProps = {
  tiers: WorkSkillTier[];
};

function SkillLogoCell({ logoId, label, framing }: { logoId: string; label: string; framing: string }) {
  const entry = resolveTechLogos([logoId])[0];

  return (
    <li className="flex gap-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-3 shadow-sm transition-colors hover:border-cyan-400/30 dark:hover:border-cyan-500/35">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/80 p-1.5">
        {entry.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={entry.imageSrc} alt="" className="h-full w-full object-contain" />
        ) : (
          <span className="text-[10px] font-bold uppercase text-stone-500 dark:text-stone-400">{label.slice(0, 4)}</span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className={opp.matrixPrimary}>{label}</p>
        <p className={cn(opp.matrixSecondary, 'mt-0')}>{framing}</p>
      </div>
    </li>
  );
}

export function SkillLogoTierGrid({ tiers }: SkillLogoTierGridProps) {
  return (
    <section id="skills" className={opp.section}>
      <h2 className={opp.h2}>Role match</h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Core production experience plus image-tool stack alignment. SAM and IIIF are integration-ready — not
        claimed as prior production IIIF leadership.
      </p>
      <div className="mt-8 space-y-10">
        {tiers.map((tier) => (
          <div key={tier.id}>
            <h3 className={cn(opp.h3MoMA, 'text-lg')}>{tier.title}</h3>
            {tier.subtitle ? <p className={`mt-1 ${opp.subtle}`}>{tier.subtitle}</p> : null}
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {tier.skills.map((skill) => (
                <SkillLogoCell key={`${tier.id}-${skill.logoId}`} {...skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
