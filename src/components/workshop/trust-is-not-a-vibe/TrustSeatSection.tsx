'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { IconType } from 'react-icons'
import {
  HiOutlineBuildingLibrary,
  HiOutlineClipboardDocumentCheck,
  HiOutlineSwatch,
  HiOutlineUsers,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2'
import {
  getTrustRole,
  TRUST_FOUR_SEATS_BODY,
  TRUST_FOUR_SEATS_LEAD,
  TRUST_PLACEHOLDERS,
  TRUST_ROLES,
  type TrustPlaceholder,
  type TrustPlaceholderKey,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_ROLE_TONE } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

const ROLE_STILL: Record<TrustRoleId, TrustPlaceholderKey> = {
  pm: 'peelOpenHero',
  engineering: 'fullHarness',
  design: 'verdictCards',
  strategy: 'sharedOwnership',
}

export const ROLE_ICON: Record<TrustRoleId, IconType> = {
  pm: HiOutlineClipboardDocumentCheck,
  engineering: HiOutlineWrenchScrewdriver,
  design: HiOutlineSwatch,
  strategy: HiOutlineBuildingLibrary,
}

function TrustSeatStill({ active }: { active: TrustRoleId | null }) {
  const assetKey = active ? ROLE_STILL[active] : 'roleLensCards'
  const item: TrustPlaceholder = TRUST_PLACEHOLDERS[assetKey]
  const tone = active ? TRUST_ROLE_TONE[active] : null
  const RoleIcon = active ? ROLE_ICON[active] : HiOutlineUsers
  const role = TRUST_ROLES.find((entry) => entry.id === active)
  const src = item.src
  const remote = Boolean(src?.startsWith('https://'))

  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border transition duration-200',
        tone ? cn(tone.border, tone.ring) : 'border-stone-200 dark:border-stone-700'
      )}
    >
      <div className="relative aspect-[16/9] bg-stone-100 dark:bg-stone-900">
        {src ? (
          <Image
            key={assetKey}
            src={src}
            alt={item.alt}
            fill
            unoptimized={remote}
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        ) : null}
        {tone ? <div className={cn('pointer-events-none absolute inset-0', tone.overlay)} aria-hidden /> : null}
        <span
          className={cn(
            'absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide',
            tone ? tone.fill : 'bg-stone-950/80 text-stone-50'
          )}
        >
          <RoleIcon className="h-3.5 w-3.5" aria-hidden />
          {role ? role.label : 'Four seats'}
        </span>
      </div>
      <figcaption className="border-t border-stone-200 bg-white/90 px-4 py-4 dark:border-stone-700 dark:bg-stone-900/90">
        {role ? (
          <>
            <p className={cn('text-lg font-medium leading-snug', tone?.text)}>{role.primaryQuestions[0]}</p>
            <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-stone-300">{role.onThisCase}</p>
            <p className="mt-2 text-sm text-stone-500">Blind spot: {role.blindSpot}</p>
          </>
        ) : (
          <p className="text-base text-stone-600 dark:text-stone-300">
            Hover a seat. The still and the example change. The case stays The send.
          </p>
        )}
      </figcaption>
    </figure>
  )
}

function TrustSeatBrief({
  roleId,
  showNeedToSee,
  needToSee,
  onNeedToSeeChange,
}: {
  roleId: TrustRoleId | null
  showNeedToSee?: boolean
  needToSee: string
  onNeedToSeeChange: (value: string) => void
}) {
  const role = getTrustRole(roleId)
  if (!role) {
    return (
      <p className="rounded-xl border border-dashed border-stone-300 px-4 py-3 text-sm text-stone-600 dark:border-stone-600 dark:text-stone-400">
        Hover or tap a seat. You will see what that job watches for on The send.
      </p>
    )
  }
  const tone = TRUST_ROLE_TONE[role.id]
  return (
    <div className={cn('rounded-xl border px-4 py-4', tone.border, tone.wash)}>
      <p className={cn('font-space-mono text-[11px] uppercase tracking-[0.16em]', tone.icon)}>{role.label} on The send</p>
      <p className="mt-2 text-base font-medium text-stone-950 dark:text-stone-50">{role.watchesFor}</p>
      <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{role.onThisCase}</p>
      <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
        <span className="font-semibold text-stone-800 dark:text-stone-200">Example you could write. </span>
        {role.exampleNeedToSee}
      </p>
      <p className="mt-2 text-xs text-stone-500">Blind spot: {role.blindSpot}</p>
      {showNeedToSee ? (
        <label className="mt-4 block">
          <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{role.needToSeePrompt}</span>
          <textarea
            value={needToSee}
            onChange={(event) => onNeedToSeeChange(event.target.value)}
            rows={3}
            placeholder={role.exampleNeedToSee}
            className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
          />
        </label>
      ) : null}
    </div>
  )
}

export function TrustSeatSection({
  variant,
  showNeedToSee = false,
}: {
  variant: 'studio' | 'dock'
  showNeedToSee?: boolean
}) {
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const [hovered, setHovered] = useState<TrustRoleId | null>(null)
  const preview = hovered ?? progress.role

  return (
    <div>
      {variant === 'studio' ? (
        <>
          <p className="max-w-3xl text-lg leading-relaxed text-stone-800 dark:text-stone-100">{TRUST_FOUR_SEATS_LEAD}</p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-stone-600 dark:text-stone-300">
            {TRUST_FOUR_SEATS_BODY}
          </p>
        </>
      ) : (
        <div className="mb-3">
          <p className="text-sm font-semibold text-stone-950 dark:text-stone-50">Your seat</p>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            Same section on every chapter. Keep one job, or change it here.
          </p>
        </div>
      )}

      <p className="mt-3 text-sm font-semibold text-stone-900 dark:text-stone-100">
        {hydrated && progress.role
          ? `Your seat: ${TRUST_ROLES.find((role) => role.id === progress.role)?.label}.`
          : 'Pick a seat to look at The send.'}
      </p>

      {variant === 'studio' ? (
        <div className="mt-4">
          <TrustSeatStill active={preview} />
        </div>
      ) : null}

      <div className={cn('grid gap-3', variant === 'studio' ? 'mt-4 sm:grid-cols-2 lg:grid-cols-4' : 'mt-3 sm:grid-cols-2 lg:grid-cols-4')}>
        {TRUST_ROLES.map((entry) => {
          const Icon = ROLE_ICON[entry.id]
          const roleTone = TRUST_ROLE_TONE[entry.id]
          const lit = preview === entry.id
          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => {
                update({ role: entry.id })
                if (showNeedToSee && progress.needToSee.trim()) markChapterComplete('four-lenses')
              }}
              onMouseEnter={() => setHovered(entry.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(entry.id)}
              onBlur={() => setHovered(null)}
              aria-pressed={progress.role === entry.id}
              className={cn(
                'rounded-xl border text-left transition duration-200',
                variant === 'studio' ? 'p-5' : 'p-4',
                lit
                  ? cn(roleTone.border, roleTone.fill, 'motion-safe:-translate-y-0.5 shadow-md')
                  : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900'
              )}
            >
              <p
                className={cn(
                  'flex items-center gap-2 text-xs font-semibold uppercase tracking-wide',
                  lit ? 'text-current' : cn('text-stone-500', roleTone.icon)
                )}
              >
                <Icon className="h-5 w-5" aria-hidden />
                {entry.shortLabel}
              </p>
              <p className={cn('mt-1 font-bold', variant === 'studio' ? 'text-xl' : 'text-base', lit ? 'text-current' : 'text-stone-950 dark:text-stone-50')}>
                {entry.label}
              </p>
              <p className={cn('mt-2 leading-snug', variant === 'studio' ? 'text-base' : 'text-sm', lit ? 'text-current/85' : 'text-stone-600 dark:text-stone-400')}>
                {entry.primaryQuestions[0]}
              </p>
            </button>
          )
        })}
      </div>

      <div className="mt-4">
        <TrustSeatBrief
          roleId={preview}
          showNeedToSee={showNeedToSee}
          needToSee={progress.needToSee}
          onNeedToSeeChange={(needToSee) => {
            update({ needToSee })
            if (progress.role && needToSee.trim()) markChapterComplete('four-lenses')
          }}
        />
      </div>
    </div>
  )
}

export function TrustSeatStudio() {
  return <TrustSeatSection variant="studio" />
}

export function TrustSeatBar() {
  return <TrustSeatSection variant="dock" />
}
