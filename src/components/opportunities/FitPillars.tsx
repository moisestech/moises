import Image from 'next/image';
import { MatrixRowIcon } from '@/components/opportunities/ExperienceMatrixSection';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { FitPillar } from '@/content/opportunities/systemsDossier';
import type { SkillsMatrixIconKey } from '@/content/opportunities/types';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { cn } from '@/lib/utils';

type FitPillarsProps = {
  title: string;
  intro?: string;
  pillars: FitPillar[];
  sectionId?: string;
  className?: string;
};

const PILLAR_MEDIA_GRADIENTS = [
  'from-cyan-500/35 via-sky-500/10 to-transparent dark:from-cyan-400/40',
  'from-violet-500/35 via-fuchsia-500/10 to-transparent dark:from-violet-400/40',
  'from-amber-500/35 via-orange-500/10 to-transparent dark:from-amber-400/40',
  'from-rose-500/35 via-pink-500/10 to-transparent dark:from-rose-400/40',
  'from-teal-500/35 via-emerald-500/10 to-transparent dark:from-teal-400/40',
  'from-indigo-500/35 via-blue-500/10 to-transparent dark:from-indigo-400/40',
] as const;

const PILLAR_CARD_WASH = [
  'from-cyan-500/[0.07] via-transparent to-violet-500/[0.05]',
  'from-violet-500/[0.07] via-transparent to-fuchsia-500/[0.05]',
  'from-amber-500/[0.07] via-transparent to-orange-500/[0.05]',
  'from-rose-500/[0.07] via-transparent to-pink-500/[0.05]',
  'from-teal-500/[0.07] via-transparent to-emerald-500/[0.05]',
  'from-indigo-500/[0.07] via-transparent to-sky-500/[0.05]',
] as const;

const FALLBACK_ICONS: SkillsMatrixIconKey[] = [
  'image',
  'sparkles',
  'code2',
  'workflow',
  'users',
  'layers',
];

export function FitPillars({
  title,
  intro,
  pillars,
  sectionId = 'fit',
  className,
}: FitPillarsProps) {
  const accent = getOpportunityCompactAccent(sectionId);
  const eyebrow =
    sectionId === 'capabilities'
      ? 'Capabilities'
      : sectionId === 'fit'
        ? 'Role fit'
        : sectionId === 'gan'
          ? 'GAN · ML art'
          : 'Highlights';

  return (
    <section id={sectionId} className={cn(opp.section, className)} aria-labelledby={`${sectionId}-heading`}>
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        {eyebrow}
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {pillars.map((pillar, index) => {
          const mediaGradient = PILLAR_MEDIA_GRADIENTS[index % PILLAR_MEDIA_GRADIENTS.length];
          const cardWash = PILLAR_CARD_WASH[index % PILLAR_CARD_WASH.length];
          const icon = pillar.icon ?? FALLBACK_ICONS[index % FALLBACK_ICONS.length];
          const delayMs = Math.min(index * 55, 330);

          return (
            <li
              key={pillar.id}
              className={cn(
                'group relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white',
                'shadow-sm transition duration-300 ease-out',
                'hover:-translate-y-1.5 hover:shadow-xl hover:shadow-stone-900/12',
                'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                'dark:border-stone-700 dark:bg-stone-950 dark:hover:shadow-black/50',
                'border-l-[3px]',
                accent.rail,
                '[transform-style:preserve-3d]',
                'hover:[transform:perspective(1000px)_translateY(-6px)_rotateX(3deg)_rotateY(-2.5deg)]',
                'motion-reduce:hover:[transform:none]',
                'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both',
              )}
              style={{ animationDelay: `${delayMs}ms`, animationDuration: '480ms' }}
            >
              {/* Ambient card wash */}
              <div
                className={cn(
                  'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100',
                  cardWash,
                )}
                aria-hidden
              />

              {/* Hover sheen */}
              <span
                className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100 motion-reduce:hidden dark:via-white/10"
                aria-hidden
              />

              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-900">
                {pillar.imageSrc ? (
                  <Image
                    src={pillar.imageSrc}
                    alt={pillar.imageAlt ?? ''}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 dark:from-stone-800 dark:via-stone-900 dark:to-stone-950',
                    )}
                    aria-hidden
                  />
                )}

                <div
                  className={cn(
                    'pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/10 to-transparent',
                  )}
                  aria-hidden
                />
                <div
                  className={cn('pointer-events-none absolute inset-0 bg-gradient-to-br', mediaGradient)}
                  aria-hidden
                />

                <span className="absolute right-3 top-3 z-10 rounded-full border border-white/30 bg-stone-950/45 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
                <h3 className={opp.h3MoMA}>{pillar.title}</h3>
                <p className={`mt-2 ${opp.body}`}>{pillar.body}</p>

                {/* Single icon — footer only (no duplicate on media / title) */}
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-stone-200/80 pt-4 dark:border-stone-700/80">
                  <span
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm',
                      'bg-white/95 transition duration-300 group-hover:scale-105 dark:bg-stone-900/95',
                      'motion-reduce:group-hover:scale-100',
                      accent.navIdle,
                      accent.eyebrow,
                    )}
                    aria-hidden
                  >
                    <MatrixRowIcon icon={icon} className="h-[1.1rem] w-[1.1rem]" />
                  </span>
                  <span className={cn('text-[10px] font-semibold uppercase tracking-[0.14em]', accent.eyebrow)}>
                    Capability
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
