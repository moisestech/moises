'use client'

import { useState } from 'react'
import { HiCheck } from 'react-icons/hi2'
import {
  getTrustRole,
  TRUST_CASE_A,
  TRUST_ROLE_STANCE,
  TRUST_ROLES,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustCaseStage } from './TrustCaseStage'
import { TrustRolePattern } from './TrustRolePattern'
import { ROLE_ICON } from './TrustSeatSection'
import { usePresentationMode } from './TrustPresentation'
import { TRUST_ROLE_TONE, TRUST_SCROLL_MT, trustPresent } from './trust-tokens'

type SeeView = 'card' | 'seat'

function SeeViewSwitch({
  view,
  onChange,
}: {
  view: SeeView
  onChange: (view: SeeView) => void
}) {
  const { present } = usePresentationMode()

  return (
    <div
      role="group"
      aria-label="See it view"
      data-trust-four-lenses-view={view}
      className={cn(
        'inline-flex rounded-xl border border-stone-300 p-1 dark:border-stone-600',
        present ? 'mb-6' : 'mb-4'
      )}
    >
      {(['card', 'seat'] as const).map((id) => {
        const active = view === id
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(id)}
            className={cn(
              'rounded-lg font-semibold transition',
              present ? 'px-5 py-3 text-xl sm:px-6 sm:text-2xl' : 'px-3.5 py-2 text-sm sm:text-base',
              active
                ? 'bg-stone-900 text-white dark:bg-cyan-500 dark:text-stone-950'
                : 'text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800'
            )}
          >
            {id === 'card' ? 'The card' : 'Your seat'}
          </button>
        )
      })}
    </div>
  )
}

function SeatJob({
  roleId,
  signal,
}: {
  roleId: TrustRoleId
  signal?: string
}) {
  const { present } = usePresentationMode()
  const role = getTrustRole(roleId)
  if (!role) return null
  const tone = TRUST_ROLE_TONE[roleId]
  const body = present ? trustPresent.body : 'text-lg leading-snug sm:text-xl'
  const label = present ? 'text-xl font-semibold sm:text-2xl' : 'text-sm font-semibold'

  return (
    <div
      data-trust-four-lenses-job
      aria-live="polite"
      className={cn('rounded-xl border px-4 py-4', tone.border, tone.wash, present && 'px-6 py-6')}
    >
      <p className={cn('font-semibold', tone.text, present ? 'text-3xl sm:text-4xl' : 'text-xl')}>
        If you pick {role.label}
      </p>
      <p className={cn('mt-2', tone.text, present ? trustPresent.note : 'text-base')}>
        {TRUST_ROLE_STANCE[roleId]}
      </p>
      <p className={cn('mt-4 text-stone-500 dark:text-stone-400', label)}>Your job</p>
      <p className={cn('mt-1 text-stone-800 dark:text-stone-200', body)}>{role.learnerJob}</p>
      {signal ? (
        <>
          <p className={cn('mt-4 text-stone-500 dark:text-stone-400', label)}>On this card</p>
          <p className={cn('mt-1 text-stone-800 dark:text-stone-200', body)}>{signal}</p>
        </>
      ) : null}
    </div>
  )
}

export function TrustFourSeatsDiagram({
  role,
  signals,
  caption,
  lead,
  onSelect,
}: {
  role: TrustRoleId | null
  signals: Partial<Record<TrustRoleId, string>>
  caption: string
  lead?: string
  onSelect: (id: TrustRoleId) => void
}) {
  const { present } = usePresentationMode()
  const [view, setView] = useState<SeeView>('card')
  const picked = getTrustRole(role)

  const cardCopy = (
    <p
      data-trust-four-lenses-card-copy
      className={cn(
        present
          ? 'text-3xl font-medium leading-snug text-stone-800 sm:text-4xl md:text-5xl dark:text-stone-200'
          : 'text-xl leading-relaxed text-stone-800 dark:text-stone-200'
      )}
    >
      {lead ?? caption}
    </p>
  )

  const seatCopy = (
    <div className="space-y-5">
      <p
        className={cn(
          'text-stone-700 dark:text-stone-300',
          present ? trustPresent.note : 'text-base leading-snug'
        )}
      >
        {caption}
      </p>
      <div className="grid grid-cols-1 gap-3">
        {TRUST_ROLES.map((entry) => {
          const Icon = ROLE_ICON[entry.id]
          const tone = TRUST_ROLE_TONE[entry.id]
          const selected = role === entry.id
          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => onSelect(entry.id)}
              aria-pressed={selected}
              className={cn(
                'relative overflow-hidden rounded-xl border text-left transition duration-200 hover:border-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                TRUST_SCROLL_MT,
                present ? 'px-5 py-5 sm:px-6 sm:py-6' : 'px-4 py-4',
                selected
                  ? cn(tone.border, tone.wash, 'border-2 shadow-md')
                  : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900'
              )}
            >
              {selected ? <span className="sr-only">Selected seat. </span> : null}
              {selected ? (
                <span className={cn('absolute inset-0', tone.icon)} aria-hidden>
                  <TrustRolePattern role={entry.id} />
                </span>
              ) : null}
              <span className={cn('relative flex items-center gap-2 font-semibold', tone.text)}>
                <Icon
                  className={cn('shrink-0', present ? 'h-8 w-8 sm:h-10 sm:w-10' : 'h-6 w-6', tone.icon)}
                  aria-hidden
                />
                <span
                  data-trust-four-lenses-seat-label
                  className={present ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-lg sm:text-xl'}
                >
                  {entry.label}
                </span>
              </span>
              <span
                className={cn(
                  'relative mt-2 block text-stone-700 dark:text-stone-300',
                  present ? trustPresent.note : 'text-base leading-snug'
                )}
              >
                {TRUST_ROLE_STANCE[entry.id]}
              </span>
              {selected ? (
                <span
                  className={cn(
                    'relative mt-3 inline-flex items-center gap-1 rounded-full font-semibold',
                    tone.fill,
                    present ? 'px-3 py-1 text-lg' : 'px-2 py-0.5 text-sm'
                  )}
                >
                  <HiCheck className={present ? 'h-5 w-5' : 'h-3.5 w-3.5'} aria-hidden />
                  Your seat
                </span>
              ) : null}
            </button>
          )
        })}
      </div>
      {picked ? (
        <SeatJob roleId={picked.id} signal={signals[picked.id]} />
      ) : (
        <p
          className={cn(
            'text-stone-600 dark:text-stone-400',
            present ? trustPresent.note : 'text-base'
          )}
        >
          Pick a seat to see what that job must protect.
        </p>
      )}
    </div>
  )

  return (
    <div data-trust-four-lenses-see>
      <SeeViewSwitch view={view} onChange={setView} />
      <TrustCaseStage
        key={view}
        peek
        reserve={view === 'seat'}
        caseData={TRUST_CASE_A}
        copy={view === 'card' ? cardCopy : seatCopy}
      />
    </div>
  )
}
