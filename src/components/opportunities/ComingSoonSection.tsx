import Image from 'next/image';
import { Award, Clapperboard, Code2, FlaskConical, GraduationCap } from 'lucide-react';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import { opp } from '@/components/opportunities/opportunityTheme';
import type {
  RolePortfolioComingSoonBlock,
  RolePortfolioComingSoonKind,
} from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type ComingSoonSectionProps = {
  data: RolePortfolioComingSoonBlock;
  sectionId?: string;
  className?: string;
};

const KIND_META: Record<
  RolePortfolioComingSoonKind,
  { label: string; panel: string; iconWrap: string; Icon: typeof Code2 }
> = {
  repo: {
    label: 'Example repo',
    panel: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    iconWrap: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
    Icon: Code2,
  },
  cert: {
    label: 'Certificate',
    panel: 'from-violet-500/20 via-violet-500/5 to-transparent',
    iconWrap: 'bg-violet-500/15 text-violet-700 dark:text-violet-300',
    Icon: Award,
  },
  skill: {
    label: 'Skill track',
    panel: 'from-amber-500/20 via-amber-500/5 to-transparent',
    iconWrap: 'bg-amber-500/15 text-amber-800 dark:text-amber-200',
    Icon: GraduationCap,
  },
  demo: {
    label: 'Demo',
    panel: 'from-sky-500/20 via-sky-500/5 to-transparent',
    iconWrap: 'bg-sky-500/15 text-sky-700 dark:text-sky-300',
    Icon: Clapperboard,
  },
  research: {
    label: 'Discovery',
    panel: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    iconWrap: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
    Icon: FlaskConical,
  },
};

export function ComingSoonSection({
  data,
  sectionId = 'coming-soon',
  className,
}: ComingSoonSectionProps) {
  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.intro ? (
        <p className={`mt-2 max-w-3xl ${opp.muted}`}>
          <OpportunityRichText text={data.intro} />
        </p>
      ) : null}

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {data.items.map((item) => {
          const kind = item.kind ?? 'skill';
          const meta = KIND_META[kind];
          const Icon = meta.Icon;

          return (
            <li key={item.id} className={cn(opp.card, 'flex flex-col overflow-hidden p-0')}>
              <div
                className={cn(
                  'relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br',
                  meta.panel,
                )}
              >
                {item.imageSrc ? (
                  item.imageLocal || !item.imageSrc.startsWith('http') ? (
                    <OpportunityCardImage src={item.imageSrc} alt={item.imageAlt ?? item.title} local />
                  ) : (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  )
                ) : (
                  <div className="flex flex-col items-center gap-2 px-4 text-center">
                    <span
                      className={cn(
                        'inline-flex h-12 w-12 items-center justify-center rounded-2xl',
                        meta.iconWrap,
                      )}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 dark:text-stone-300">
                      {meta.label} · placeholder
                    </span>
                  </div>
                )}
                <span className="absolute right-3 top-3 rounded-md border border-stone-200/80 bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-700 shadow-sm dark:border-stone-600 dark:bg-stone-900/90 dark:text-stone-200">
                  {item.badge ?? 'Coming soon'}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className={opp.h3MoMA}>{item.title}</h3>
                  <span
                    className={cn(
                      'rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                      meta.iconWrap,
                      'border-transparent',
                    )}
                  >
                    {meta.label}
                  </span>
                </div>
                <p className={`mt-3 flex-1 ${opp.body}`}>
                  <OpportunityRichText text={item.body} />
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`mt-4 inline-flex text-sm ${opp.linkAccent}`}
                  >
                    {item.linkLabel ?? 'Open link'}
                  </a>
                ) : (
                  <p className={`mt-4 ${opp.subtle}`}>Link lands here when published.</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
