'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { wolfsonianInstitutionalRoles } from '@/content/grants/wolfsonian-fellowship';
import { getWolfsonianAccent } from '@/config/wolfsonian-section-theme';
import { WolfsonianAgentPortrait, getAgentColorClass } from './WolfsonianAgentPortrait';

function roleById(roleId: string) {
  return wolfsonianInstitutionalRoles.find((role) => role.id === roleId);
}

type WolfsonianRoleExplorerProps = {
  activeKeyword?: string | null;
};

function RoleDetailPanel({
  role,
  accent,
}: {
  role: (typeof wolfsonianInstitutionalRoles)[number];
  accent: ReturnType<typeof getWolfsonianAccent>;
}) {
  return (
    <div className="space-y-4">
      <div className={cn('relative overflow-hidden border bg-white p-5 dark:bg-neutral-900', accent.mediaBorder)}>
        <div className="flex items-start gap-4">
          <WolfsonianAgentPortrait role={role} active size="lg" />
          <div>
            <h3 className="text-lg font-semibold">{role.title}</h3>
            <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">{role.description}</p>
          </div>
        </div>

        {role.interpretiveBehavior ? (
          <p
            className={cn(
              'mt-4 border-l-2 pl-3 text-sm italic',
              accent.paragraphActiveBorder,
              'text-stone-700 dark:text-stone-300',
            )}
          >
            {role.interpretiveBehavior}
          </p>
        ) : null}

        <div className="mt-4">
          <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>Related themes</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {role.themes.map((theme) => (
              <span key={theme} className={cn('border px-2 py-1 text-xs', getAgentColorClass(role.color))}>
                {theme}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>Connected archive objects</p>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {role.archiveObjects.map((objectName) => (
              <li
                key={objectName}
                className="border border-stone-300 bg-stone-50 px-3 py-2 text-sm dark:border-stone-700 dark:bg-neutral-950"
              >
                {objectName}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 border-t border-stone-200 pt-4 dark:border-stone-700">
          <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>Relationship paths</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {role.connectedRoleIds.map((connectedRoleId) => {
              const connectedRole = roleById(connectedRoleId);
              if (!connectedRole) return null;
              return (
                <span
                  key={connectedRoleId}
                  className={cn('inline-flex items-center gap-2 border px-2 py-1 text-xs transition', accent.chipActive)}
                >
                  {role.title} → {connectedRole.title}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <aside className={cn('border bg-white p-5 dark:bg-neutral-900', accent.mediaBorder)}>
        <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>Source logic</p>
        <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{role.sourceLogic}</p>
      </aside>
    </div>
  );
}

export function WolfsonianRoleExplorer({ activeKeyword }: WolfsonianRoleExplorerProps) {
  const accent = getWolfsonianAccent('society-inside-archive');
  const [activeRoleId, setActiveRoleId] = useState(wolfsonianInstitutionalRoles[0]?.id ?? '');
  const activeRole = useMemo(
    () => wolfsonianInstitutionalRoles.find((role) => role.id === activeRoleId) ?? wolfsonianInstitutionalRoles[0],
    [activeRoleId],
  );

  useEffect(() => {
    if (!activeKeyword) return;
    const match = wolfsonianInstitutionalRoles.find((role) =>
      role.relatedKeywords?.some((kw) => kw.toLowerCase() === activeKeyword.toLowerCase()),
    );
    if (match) setActiveRoleId(match.id);
  }, [activeKeyword]);

  if (!activeRole) return null;

  const keywordMatch = (role: typeof activeRole) =>
    activeKeyword &&
    role.relatedKeywords?.some((kw) => kw.toLowerCase() === activeKeyword.toLowerCase());

  const roleChipLabel = (title: string) => title.replace(/^The /, '');

  return (
    <div className="mt-8">
      <div className="space-y-4 lg:hidden">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent dark:from-neutral-900"
            aria-hidden="true"
          />
          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Agent roles">
            {wolfsonianInstitutionalRoles.map((role) => {
              const active = role.id === activeRole.id;
              const keywordHighlight = keywordMatch(role);
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveRoleId(role.id)}
                  className={cn(
                    'shrink-0 rounded-full border px-3 py-2.5 text-xs font-medium uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500',
                    active
                      ? cn(accent.navActive, accent.navActiveText)
                      : cn(accent.navIdle, keywordHighlight && 'border-violet-400/60 bg-violet-50/50 dark:bg-violet-950/20'),
                  )}
                >
                  {roleChipLabel(role.title)}
                </button>
              );
            })}
          </div>
        </div>
        <RoleDetailPanel role={activeRole} accent={accent} />
      </div>

      <div className="hidden gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div className={cn('border bg-white p-3 dark:bg-neutral-900', accent.mediaBorder)}>
          <ul className="space-y-2" role="list">
            {wolfsonianInstitutionalRoles.map((role) => {
              const active = role.id === activeRole.id;
              const keywordHighlight = keywordMatch(role);
              return (
                <li key={role.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveRoleId(role.id)}
                    onFocus={() => setActiveRoleId(role.id)}
                    onClick={() => setActiveRoleId(role.id)}
                    className={cn(
                      'flex w-full items-start gap-3 border px-3 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500',
                      active
                        ? cn('border-l-4', accent.paragraphActiveBorder, accent.paragraphActiveBg)
                        : 'border-stone-300 hover:border-stone-500 dark:border-stone-700 dark:hover:border-stone-400',
                      keywordHighlight && !active && 'border-violet-400/60 bg-violet-50/50 dark:bg-violet-950/20',
                    )}
                    aria-current={active ? 'true' : undefined}
                  >
                    <WolfsonianAgentPortrait role={role} active={active} size="sm" />
                    <span>
                      <p className="text-sm font-semibold">{role.title}</p>
                      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{role.description}</p>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <RoleDetailPanel role={activeRole} accent={accent} />
      </div>
    </div>
  );
}
