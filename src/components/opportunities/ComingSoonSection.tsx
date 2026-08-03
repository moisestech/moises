import Image from 'next/image';
import { Award, Clapperboard, Code2, FlaskConical, GraduationCap } from 'lucide-react';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import { opp } from '@/components/opportunities/opportunityTheme';
import type {
  RolePortfolioComingSoonBlock,
  RolePortfolioComingSoonItem,
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
    label: 'License / cert',
    panel: 'from-slate-500/15 via-cyan-500/5 to-transparent',
    iconWrap: 'bg-slate-500/15 text-slate-700 dark:text-slate-200',
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

/** Formal certificate / license face — placeholder until a real credential image ships. */
function CertificateLicenseFace({ item }: { item: RolePortfolioComingSoonItem }) {
  const credential = item.certCredential ?? item.title;
  const issuer = item.certIssuer ?? 'Credential issuer';
  const holder = item.certHolder ?? 'Moises Sanabria';
  const certId = item.certId ?? 'PENDING';
  const badge = item.badge ?? 'Coming soon';

  return (
    <div
      className={cn(
        'relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden p-3 sm:aspect-[16/10] sm:p-4 md:p-5',
        'bg-[linear-gradient(145deg,#f8fafc_0%,#e2e8f0_45%,#f1f5f9_100%)]',
        'dark:bg-[linear-gradient(145deg,#0f172a_0%,#1e293b_50%,#0f172a_100%)]',
      )}
      aria-hidden
    >
      {/* Outer mat */}
      <div className="absolute inset-2 rounded-sm border border-slate-300/80 dark:border-slate-600/70 sm:inset-3" />
      <div className="absolute inset-3 rounded-sm border border-slate-400/50 dark:border-slate-500/40 sm:inset-4" />

      {/* Corner marks */}
      <span className="absolute left-4 top-4 h-3 w-3 border-l-2 border-t-2 border-cyan-600/70 dark:border-cyan-400/60 sm:left-5 sm:top-5" />
      <span className="absolute right-4 top-4 h-3 w-3 border-r-2 border-t-2 border-cyan-600/70 dark:border-cyan-400/60 sm:right-5 sm:top-5" />
      <span className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-cyan-600/70 dark:border-cyan-400/60 sm:bottom-5 sm:left-5" />
      <span className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-cyan-600/70 dark:border-cyan-400/60 sm:bottom-5 sm:right-5" />

      <div className="relative z-[1] flex max-w-[92%] flex-col items-center px-2 text-center sm:max-w-[88%]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400 sm:text-[10px]">
          Certificate of achievement
        </p>
        <div className="mt-2 h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent sm:mt-2.5 sm:w-24" />

        {/* Seal */}
        <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-600/50 bg-white/80 shadow-sm dark:border-cyan-400/40 dark:bg-slate-900/70 sm:mt-3.5 sm:h-14 sm:w-14">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-slate-400/70 dark:border-slate-500 sm:h-9 sm:w-9">
            <Award className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-300 sm:h-4 sm:w-4" />
          </div>
        </div>

        <p className="mt-3 max-w-[18rem] text-sm font-bold leading-snug tracking-tight text-slate-900 dark:text-slate-50 sm:mt-3.5 sm:text-base md:text-lg">
          {credential}
        </p>
        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:text-[11px]">
          {issuer}
        </p>

        <p className="mt-3 text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:mt-4">
          Issued to
        </p>
        <p className="mt-0.5 text-xs font-semibold text-slate-800 dark:text-slate-100 sm:text-sm">
          {holder}
        </p>
        <div className="mt-2 h-px w-28 bg-slate-400/50 dark:bg-slate-500/50 sm:w-36" />

        <dl className="mt-3 grid w-full max-w-xs grid-cols-2 gap-x-3 gap-y-1 text-left text-[9px] text-slate-600 dark:text-slate-300 sm:mt-3.5 sm:text-[10px]">
          <div>
            <dt className="uppercase tracking-wide opacity-70">Credential ID</dt>
            <dd className="font-semibold tabular-nums">{certId}</dd>
          </div>
          <div className="text-right">
            <dt className="uppercase tracking-wide opacity-70">Status</dt>
            <dd className="font-semibold text-amber-700 dark:text-amber-300">{badge}</dd>
          </div>
        </dl>
      </div>

      <span className="absolute right-3 top-3 z-[2] rounded-md border border-amber-300/80 bg-amber-50/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 shadow-sm dark:border-amber-700 dark:bg-amber-950/90 dark:text-amber-100 sm:right-4 sm:top-4">
        {badge}
      </span>
    </div>
  );
}

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
      <h2 id={`${sectionId}-heading`} className={cn(opp.h2, 'text-xl sm:text-2xl')}>
        {data.title}
      </h2>
      {data.intro ? (
        <p className={`mt-2 max-w-3xl text-sm sm:text-sm ${opp.muted}`}>
          <OpportunityRichText text={data.intro} />
        </p>
      ) : null}

      <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
        {data.items.map((item) => {
          const kind = item.kind ?? 'skill';
          const meta = KIND_META[kind];
          const Icon = meta.Icon;
          const isCert = kind === 'cert';

          return (
            <li
              key={item.id}
              className={cn(
                opp.card,
                'flex flex-col overflow-hidden p-0',
                isCert && 'ring-1 ring-slate-300/60 dark:ring-slate-600/50',
              )}
            >
              {isCert && !item.imageSrc ? (
                <CertificateLicenseFace item={item} />
              ) : (
                <div
                  className={cn(
                    'relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br sm:aspect-[16/9]',
                    meta.panel,
                  )}
                >
                  {item.imageSrc ? (
                    item.imageLocal || !item.imageSrc.startsWith('http') ? (
                      <OpportunityCardImage
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        local
                      />
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
                          'inline-flex h-11 w-11 items-center justify-center rounded-2xl sm:h-12 sm:w-12',
                          meta.iconWrap,
                        )}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-600 dark:text-stone-300 sm:text-[11px]">
                        {meta.label} · placeholder
                      </span>
                    </div>
                  )}
                  <span className="absolute right-2.5 top-2.5 rounded-md border border-stone-200/80 bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-700 shadow-sm dark:border-stone-600 dark:bg-stone-900/90 dark:text-stone-200 sm:right-3 sm:top-3">
                    {item.badge ?? 'Coming soon'}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className={cn(opp.h3MoMA, 'text-base sm:text-lg')}>{item.title}</h3>
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
                <p className={`mt-2.5 flex-1 text-sm sm:mt-3 ${opp.body}`}>
                  <OpportunityRichText text={item.body} />
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`mt-3 inline-flex min-h-10 items-center text-sm sm:mt-4 sm:min-h-0 ${opp.linkAccent}`}
                  >
                    {item.linkLabel ?? 'Open link'}
                  </a>
                ) : (
                  <p className={`mt-3 sm:mt-4 ${opp.subtle}`}>
                    {isCert
                      ? 'Credential artwork / verification link lands here when issued.'
                      : 'Link lands here when published.'}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
