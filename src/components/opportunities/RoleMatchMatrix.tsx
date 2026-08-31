'use client';

import { useEffect, useId, useMemo, useState } from 'react';
import Image from 'next/image';
import { Eye, type LucideIcon } from 'lucide-react';
import type { Opportunity, RoleMatchRow } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { OpportunityZoomTrigger } from '@/components/opportunities/OpportunityZoomLightbox';
import { EvidenceTypeBadge, MATURITY_LEGEND } from '@/components/opportunities/EvidenceTypeBadge';
import { FieldKitLoopDiagram } from '@/components/opportunities/FieldKitLoopDiagram';
import { AepHarnessVisual } from '@/components/opportunities/AepHarnessDiagrams';
import { DesignForwardFdeLoopDiagram } from '@/components/opportunities/DesignForwardFdeLoopDiagram';
import { LifecycleStageChip } from '@/components/opportunities/LifecycleStageChip';
import { LIFECYCLE_META, LIFECYCLE_STAGES, isLifecycleStage } from '@/content/opportunities/lifecycle';

type RoleMatchMatrixProps = {
  opportunity: Opportunity;
  /** When nested in OpportunityColorSection — drop outer section chrome. */
  framed?: boolean;
};

const STAGE_ICONS: Record<string, LucideIcon> = Object.fromEntries(
  LIFECYCLE_STAGES.map((stage) => [stage, LIFECYCLE_META[stage].icon]),
);

function IllustrationFrame({
  src,
  alt,
  local,
}: {
  src: string;
  alt: string;
  local?: boolean;
}) {
  if (local) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top"
      sizes="(max-width: 1024px) 100vw, 42rem"
      priority={false}
    />
  );
}

function rowKey(row: RoleMatchRow, index: number) {
  return `${row.requirement}::${index}`;
}

function StageIcon({ stage }: { stage?: string }) {
  const Icon = (stage && STAGE_ICONS[stage]) || Eye;
  const color = stage && isLifecycleStage(stage) ? LIFECYCLE_META[stage].textClass : 'text-cyan-600 dark:text-cyan-400';
  return <Icon className={cn('h-4 w-4 shrink-0', color)} aria-hidden />;
}

function ExplorerLegend() {
  return (
    <div className={`mt-4 space-y-2 ${opp.subtle}`}>
      <p>
        <span className="font-semibold text-stone-600 dark:text-stone-300">Stage</span>
        {' — '}
        hue + icon (Discover through Handoff).
      </p>
      <p>
        <span className="font-semibold text-stone-600 dark:text-stone-300">Maturity</span>
        {' — '}
        line treatment, not more hues:{' '}
        {MATURITY_LEGEND.map((item, i) => (
          <span key={item.type}>
            {i > 0 ? ' · ' : null}
            {item.mark}
          </span>
        ))}
        .
      </p>
    </div>
  );
}

export function RoleMatchMatrix({ opportunity, framed = false }: RoleMatchMatrixProps) {
  const accent = getOpportunityCompactAccent('fit');
  const headers = opportunity.roleMatchColumnHeaders ?? {
    left: 'Skill/Experience',
    right: 'Relevant experience',
  };

  const rows = opportunity.roleMatchRows;
  const explorer = useMemo(() => rows.some((r) => r.claim || r.evidenceType), [rows]);
  const storytelling = useMemo(() => rows.some((r) => r.illustration), [rows]);
  const sectionClass = framed ? 'scroll-mt-32' : opp.section;

  const firstIllustrated = useMemo(() => {
    const i = rows.findIndex((r) => r.illustration);
    return i >= 0 ? i : 0;
  }, [rows]);

  const explorerTabId = useId();
  const [activeIndex, setActiveIndex] = useState(firstIllustrated);

  useEffect(() => {
    setActiveIndex(firstIllustrated);
  }, [firstIllustrated, rows]);

  const activeRow = rows[activeIndex];
  const activeIllustration = activeRow?.illustration;

  if (!storytelling && !explorer) {
    return (
      <section id="fit" className={sectionClass}>
        <h2 className={opp.h2}>{opportunity.roleMatchSectionTitle ?? 'Role fit'}</h2>
        {opportunity.roleMatchIntro ? <p className={`mt-3 max-w-3xl ${opp.muted}`}>{opportunity.roleMatchIntro}</p> : null}
        <div className={`mt-6 ${opp.tableWrap}`}>
          <table className="w-full text-left text-sm">
            <thead className={opp.tableHead}>
              <tr>
                <th className="px-4 py-3 sm:w-[42%]">{headers.left}</th>
                <th className="px-4 py-3">{headers.right}</th>
              </tr>
            </thead>
            <tbody className={opp.divide}>
              {rows.map((row, index) => (
                <tr key={rowKey(row, index)} className="align-top">
                  <td className={cn(opp.tableCellStrong, opp.matrixPrimary, 'py-3')}>
                    <span className="block">{row.requirement}</span>
                    {row.status ? <EvidenceStatusPill status={row.status} className="mt-2" /> : null}
                  </td>
                  <td className={cn(opp.tableCell, opp.matrixSecondary, 'mt-0 py-3')}>{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (explorer) {
    const tabBase = `${explorerTabId}-tab`;
    const panelId = `${explorerTabId}-panel`;
    return (
      <section id="fit" className={sectionClass}>
        <h2 className={opp.h2}>{opportunity.roleMatchSectionTitle ?? 'Evidence explorer'}</h2>
        {opportunity.roleMatchIntro ? <p className={`mt-3 max-w-3xl ${opp.muted}`}>{opportunity.roleMatchIntro}</p> : null}
        <p className={`mt-4 ${opp.subtle}`}>
          Coverage checklist — Discover through Handoff. Select a stage to inspect the artifact.
        </p>
        <ExplorerLegend />

        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-start lg:gap-6">
          <div className={cn(opp.tableWrap, 'order-1')}>
            <div className={opp.matrixHeader}>
              <span>Stage</span>
              <span>Claim</span>
            </div>
            <div
              className={opp.divide}
              role="tablist"
              aria-label="FDE lifecycle stages"
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                  event.preventDefault();
                  setActiveIndex((i) => (i + 1) % rows.length);
                }
                if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                  event.preventDefault();
                  setActiveIndex((i) => (i - 1 + rows.length) % rows.length);
                }
              }}
            >
              {rows.map((row, index) => {
                const active = index === activeIndex;
                const tabId = `${tabBase}-${index}`;
                return (
                  <button
                    key={rowKey(row, index)}
                    type="button"
                    role="tab"
                    id={tabId}
                    aria-selected={active}
                    aria-controls={panelId}
                    tabIndex={active ? 0 : -1}
                    className={cn(
                      'min-h-[3rem] w-full px-3 py-3.5 text-left transition-colors sm:px-4',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
                      accent.focusRing,
                      active ? accent.activeRow : opp.rowHover,
                    )}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                  >
                    <span className="flex items-start gap-3">
                      <StageIcon stage={row.stage} />
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className={opp.matrixPrimary}>{row.stage ?? row.requirement}</span>
                          {row.evidenceType ? <EvidenceTypeBadge type={row.evidenceType} /> : null}
                        </span>
                        <span className={cn(opp.matrixSecondary, 'mt-1 block')}>
                          {row.claim ?? row.evidence}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={cn(opp.illustrationPanel, 'order-2 lg:sticky lg:top-36')}
            role="tabpanel"
            id={panelId}
            aria-labelledby={`${tabBase}-${activeIndex}`}
            tabIndex={0}
          >
            <ExplorerVisual row={activeRow} />
            {activeRow ? (
              <div className={opp.illustrationCaption}>
                <div className="flex flex-wrap items-center gap-2">
                  {activeRow.stage ? (
                    <LifecycleStageChip stage={activeRow.stage} />
                  ) : (
                    <p className={opp.accentCategory}>{activeRow.requirement}</p>
                  )}
                  {activeRow.evidenceType ? <EvidenceTypeBadge type={activeRow.evidenceType} /> : null}
                </div>
                {activeRow.whatChanged ? (
                  <div className="mt-3">
                    <p className={opp.label}>What changed</p>
                    <p className={cn(opp.matrixSecondary, 'mt-1')}>{activeRow.whatChanged}</p>
                  </div>
                ) : null}
                {activeRow.whatThisProves ? (
                  <div className="mt-3">
                    <p className={opp.label}>What this proves</p>
                    <p className={cn(opp.matrixSecondary, 'mt-1')}>{activeRow.whatThisProves}</p>
                  </div>
                ) : null}
                {activeRow.inspectHref ? (
                  <a
                    href={activeRow.inspectHref}
                    className={cn(
                      'mt-3 inline-flex min-h-11 items-center text-sm',
                      opp.linkAccent,
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                      accent.focusRing,
                    )}
                    {...(activeRow.inspectHref.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                  >
                    {activeRow.inspectLabel ?? 'Inspect evidence'}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="fit" className={sectionClass}>
      <h2 className={opp.h2}>{opportunity.roleMatchSectionTitle ?? 'Role fit'}</h2>
      {opportunity.roleMatchIntro ? <p className={`mt-3 max-w-3xl ${opp.muted}`}>{opportunity.roleMatchIntro}</p> : null}

      <p className={`mt-4 ${opp.subtle} lg:hidden`}>Tap a row to update the visual — swipe-friendly on phone.</p>
      <p className={`mt-4 hidden ${opp.subtle} lg:block`}>Hover or focus a row — the image updates to match that line.</p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-start lg:gap-6">
        <div
          className={cn(
            opp.illustrationPanel,
            'order-1 lg:order-2 lg:sticky lg:top-36',
          )}
          aria-live="polite"
        >
          <div className="relative aspect-[16/10] w-full bg-stone-200 dark:bg-stone-800 sm:aspect-[4/3]">
            {activeIllustration?.src ? (
              <OpportunityZoomTrigger
                key={activeIndex}
                src={activeIllustration.src}
                alt={activeIllustration.alt ?? activeRow?.requirement ?? ''}
                caption={activeRow?.requirement}
                className="absolute inset-0 h-full animate-in fade-in-0 duration-300 motion-reduce:animate-none"
              >
                <div className="relative h-full w-full">
                  <IllustrationFrame
                    src={activeIllustration.src}
                    alt={activeIllustration.alt ?? ''}
                    local={activeIllustration.local}
                  />
                </div>
              </OpportunityZoomTrigger>
            ) : (
              <div className={`flex h-full min-h-[160px] flex-col items-center justify-center gap-2 p-6 text-center text-sm ${opp.muted}`}>
                <p>No preview for this row yet.</p>
                <p className={opp.subtle}>{activeRow?.requirement}</p>
              </div>
            )}
          </div>
          {activeRow ? (
            <div className={opp.illustrationCaption}>
              <div className="flex flex-wrap items-center gap-2">
                <p className={opp.accentCategory}>{activeRow.requirement}</p>
                {activeRow.status ? <EvidenceStatusPill status={activeRow.status} /> : null}
              </div>
              <p className={cn(opp.matrixSecondary, 'mt-1 line-clamp-4 lg:line-clamp-none')}>{activeRow.evidence}</p>
            </div>
          ) : null}
        </div>

        <div className={cn(opp.tableWrap, 'order-2 lg:order-1')}>
          <div className={opp.matrixHeader}>
            <span>{headers.left}</span>
            <span className="hidden sm:inline">{headers.right}</span>
            <span className="sm:hidden">Evidence</span>
          </div>
          <ul className={opp.divide} role="list">
            {rows.map((row, index) => {
              const active = index === activeIndex;
              return (
                <li key={rowKey(row, index)}>
                  <button
                    type="button"
                    className={cn(
                      'min-h-[3rem] w-full px-3 py-3.5 text-left transition-colors sm:px-4',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
                      accent.focusRing,
                      active ? accent.activeRow : opp.rowHover,
                    )}
                    aria-current={active ? 'true' : undefined}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="grid gap-2 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-4">
                      <span className="min-w-0">
                        <span className={cn(opp.matrixPrimary, 'block')}>{row.requirement}</span>
                        {row.status ? <EvidenceStatusPill status={row.status} className="mt-2" /> : null}
                      </span>
                      <span className={cn(opp.matrixSecondary, 'mt-0')}>{row.evidence}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExplorerVisual({ row }: { row?: RoleMatchRow }) {
  const illustration = row?.illustration;
  if (illustration?.visual === 'field-kit-loop') {
    return <FieldKitLoopDiagram className="rounded-none border-0" />;
  }
  if (illustration?.visual === 'harness' || illustration?.visual === 'allow-ask-deny') {
    return <AepHarnessVisual />;
  }
  if (illustration?.visual === 'thin-slice') {
    return <DesignForwardFdeLoopDiagram className="rounded-none border-0" />;
  }
  if (illustration?.src) {
    return (
      <div className="relative aspect-[16/10] w-full bg-stone-200 dark:bg-stone-800">
        <OpportunityZoomTrigger
          src={illustration.src}
          alt={illustration.alt ?? row?.requirement ?? ''}
          caption={row?.stage ?? row?.requirement}
          className="absolute inset-0 h-full"
        >
          <div className="relative h-full w-full">
            <IllustrationFrame
              src={illustration.src}
              alt={illustration.alt ?? ''}
              local={illustration.local}
            />
          </div>
        </OpportunityZoomTrigger>
      </div>
    );
  }
  return (
    <div className={`flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-stone-100 p-6 text-center text-sm dark:bg-stone-800 ${opp.muted}`}>
      <p>No preview for this stage yet.</p>
      <p className={opp.subtle}>{row?.stage ?? row?.requirement}</p>
    </div>
  );
}

function EvidenceStatusPill({
  status,
  className,
}: {
  status: NonNullable<RoleMatchRow['status']>;
  className?: string;
}) {
  const styles: Record<NonNullable<RoleMatchRow['status']>, string> = {
    demonstrated:
      'border-emerald-300/80 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
    transferable:
      'border-sky-300/80 bg-sky-50 text-sky-900 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-200',
    'role-specific':
      'border-violet-300/80 bg-violet-50 text-violet-900 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-200',
    learning:
      'border-amber-300/80 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100',
    todo: 'border-stone-300 bg-stone-100 text-stone-700 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200',
  };
  const labels: Record<NonNullable<RoleMatchRow['status']>, string> = {
    demonstrated: 'Demonstrated',
    transferable: 'Transferable',
    'role-specific': 'Role-specific',
    learning: 'Ramp priority',
    todo: 'Pending',
  };
  return (
    <span
      className={cn(
        'inline-flex w-fit rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
        styles[status],
        className,
      )}
    >
      {labels[status]}
    </span>
  );
}
