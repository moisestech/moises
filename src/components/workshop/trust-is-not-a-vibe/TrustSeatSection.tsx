'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  HiOutlineCommandLine,
  HiOutlineEye,
  HiOutlineViewfinderCircle,
} from 'react-icons/hi2'
import { TbCompass } from 'react-icons/tb'
import {
  getTrustRole,
  TRUST_FOUR_SEATS_BODY,
  TRUST_ROLES,
  TRUST_SEND_OBJECT,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustRolePattern } from './TrustRolePattern'
import { useTrustPresentation } from './TrustPresentation'
import { TRUST_ROLE_TONE, trustPresent } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

/** One glyph per seat, so the seat never depends on color alone. */
export const ROLE_ICON: Record<TrustRoleId, IconType> = {
  pm: HiOutlineViewfinderCircle,
  engineering: HiOutlineCommandLine,
  design: HiOutlineEye,
  strategy: TbCompass,
}

const SeatPreviewContext = createContext<{
  preview: TrustRoleId | null
  pinned: TrustRoleId | null
  hold: (id: TrustRoleId | null) => void
} | null>(null)

export function TrustSeatPreviewProvider({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()
  const [held, setHeld] = useState<TrustRoleId | null>(null)
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    if (reduceMotion || held) return
    const tick = window.setInterval(() => {
      setPulse((current) => (current + 1) % TRUST_ROLES.length)
    }, 1700)
    return () => window.clearInterval(tick)
  }, [held, reduceMotion])

  const preview = held ?? (reduceMotion ? null : TRUST_ROLES[pulse]?.id ?? null)

  return (
    <SeatPreviewContext.Provider value={{ preview, pinned: held, hold: setHeld }}>
      {children}
    </SeatPreviewContext.Provider>
  )
}

function useSeatPreview() {
  return useContext(SeatPreviewContext)
}

function isSeatControl(node: EventTarget | null) {
  return (
    node instanceof HTMLElement &&
    Boolean(node.closest('[data-trust-seat-role], [data-trust-seat-roles], [data-trust-seat-picker]'))
  )
}

function TrustSeatBrief({
  roleId,
  present,
  reserve,
}: {
  roleId: TrustRoleId | null
  present?: boolean
  reserve?: boolean
}) {
  const role = getTrustRole(roleId)
  const tone = role ? TRUST_ROLE_TONE[role.id] : null
  const reduceMotion = useReducedMotion()

  return (
    <div
      data-trust-seat-brief
      className={cn(
        'flex h-full flex-col justify-center overflow-hidden rounded-xl border px-5 py-5',
        reserve && 'min-h-[21rem]',
        present && 'px-7 py-7',
        present && reserve && 'min-h-[26rem]',
        tone ? cn(tone.border, tone.wash) : 'border-dashed border-stone-300 dark:border-stone-600'
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={roleId ?? 'empty'}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          {role ? (
            <>
              <p
                className={cn(
                  'font-space-mono uppercase tracking-[0.16em]',
                  present ? 'text-base' : 'text-xs',
                  tone?.icon
                )}
              >
                {role.label} on The send
              </p>
              <p
                className={cn(
                  'mt-2 font-semibold text-stone-950 dark:text-stone-50',
                  present ? 'text-3xl leading-snug sm:text-4xl' : 'text-2xl leading-snug sm:text-3xl'
                )}
              >
                {role.primaryQuestions[0]}
              </p>
              <p
                className={cn(
                  'mt-4 leading-relaxed text-stone-800 dark:text-stone-200',
                  present ? 'text-2xl' : 'text-xl'
                )}
              >
                {role.onThisCase}
              </p>
              <p className={cn('mt-4 text-stone-600 dark:text-stone-400', present ? 'text-xl' : 'text-base')}>
                Blind spot: {role.blindSpot}
              </p>
            </>
          ) : (
            <p className={cn('text-stone-600 dark:text-stone-400', present ? 'text-2xl' : 'text-xl')}>
              Hover or tap a seat.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function TrustSeatCard({
  roleId,
  lit,
  selected,
  present,
  onSelect,
  onPreview,
}: {
  roleId: TrustRoleId
  lit: boolean
  selected: boolean
  present?: boolean
  onSelect: () => void
  onPreview: (id: TrustRoleId | null) => void
}) {
  const entry = TRUST_ROLES.find((role) => role.id === roleId)
  const reduceMotion = useReducedMotion()
  if (!entry) return null
  const Icon = ROLE_ICON[entry.id]
  const roleTone = TRUST_ROLE_TONE[entry.id]

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => onPreview(entry.id)}
      onFocus={() => onPreview(entry.id)}
      aria-pressed={selected}
      animate={reduceMotion ? undefined : { scale: lit ? 1.02 : 1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className={cn(
        'relative overflow-hidden rounded-xl border text-left',
        present ? 'p-4' : 'p-3',
        lit
          ? cn(roleTone.border, roleTone.fill, 'shadow-md')
          : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900'
      )}
    >
      <span className={cn('absolute inset-0', lit ? 'text-current' : roleTone.icon)} aria-hidden>
        <TrustRolePattern role={entry.id} />
      </span>
      {selected ? (
        <span
          className={cn(
            'absolute right-2 top-2 z-10 font-space-mono uppercase tracking-[0.14em]',
            present ? 'text-xs' : 'text-[10px]',
            lit ? 'text-current/80' : roleTone.icon
          )}
        >
          Yours
        </span>
      ) : null}
      <span className="relative flex items-center gap-3">
        <motion.span
          animate={reduceMotion ? undefined : { scale: lit ? 1.15 : 1, rotate: lit ? 8 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="shrink-0"
        >
          <Icon className={present ? 'h-8 w-8' : 'h-7 w-7'} aria-hidden />
        </motion.span>
        <span className="min-w-0">
          <span
            className={cn(
              'block font-semibold uppercase tracking-wide',
              present ? 'text-sm' : 'text-xs',
              lit ? 'text-current' : cn('text-stone-500', roleTone.icon)
            )}
          >
            {entry.shortLabel}
          </span>
          <span
            className={cn(
              'mt-0.5 block font-bold',
              present ? 'text-3xl' : 'text-2xl',
              lit ? 'text-current' : 'text-stone-950 dark:text-stone-50'
            )}
          >
            {entry.label}
          </span>
          <span
            className={cn(
              'mt-1 block leading-snug',
              present ? 'text-xl' : 'text-base',
              lit ? 'text-current/85' : 'text-stone-600 dark:text-stone-400'
            )}
          >
            {entry.primaryQuestions[0]}
          </span>
        </span>
      </span>
    </motion.button>
  )
}

function TrustSeatRoleLine({ present }: { present: boolean }) {
  const reduceMotion = useReducedMotion()
  const ctx = useSeatPreview()
  const { progress, update } = useTrustProgress()
  const [held, setHeld] = useState<TrustRoleId | null>(null)
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    if (ctx || reduceMotion || held) return
    const tick = window.setInterval(() => {
      setPulse((current) => (current + 1) % TRUST_ROLES.length)
    }, 1700)
    return () => window.clearInterval(tick)
  }, [Boolean(ctx), held, reduceMotion])

  const hold = (id: TrustRoleId | null) => {
    setHeld(id)
    ctx?.hold(id)
  }

  const active = ctx?.preview ?? held ?? TRUST_ROLES[pulse]?.id ?? null
  const live = TRUST_ROLES.find((role) => role.id === active)
  const liveTone = live ? TRUST_ROLE_TONE[live.id] : null
  const cycling = !(ctx?.pinned ?? held) && !reduceMotion

  return (
    <div
      data-trust-seat-roles
      onMouseLeave={(event) => {
        if (present && !isSeatControl(event.relatedTarget)) hold(null)
      }}
    >
      <p
        className={cn(
          'font-medium text-stone-600 dark:text-stone-400',
          present ? 'text-2xl' : 'text-xl'
        )}
      >
        Each seat asks a different question of that same card.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3" role="group" aria-label="Four seats">
        {TRUST_ROLES.map((entry) => {
          const Icon = ROLE_ICON[entry.id]
          const tone = TRUST_ROLE_TONE[entry.id]
          const lit = active === entry.id
          const selected = progress.role === entry.id
          return (
            <motion.button
              key={entry.id}
              type="button"
              data-trust-seat-role={entry.id}
              aria-pressed={selected}
              onClick={() => {
                hold(entry.id)
                update({ role: entry.id })
              }}
              onMouseEnter={() => hold(entry.id)}
              onFocus={() => hold(entry.id)}
              animate={reduceMotion ? undefined : { scale: lit ? 1.06 : 1 }}
              transition={{ type: 'spring', stiffness: 360, damping: 24 }}
              className={cn(
                'inline-flex items-center gap-2 rounded-xl border px-3 py-2 font-bold leading-none sm:px-4 sm:py-2.5',
                present ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl',
                lit
                  ? cn(tone.border, tone.fill, 'shadow-md')
                  : cn('border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900', tone.icon),
                selected && !lit && tone.ring
              )}
            >
              <motion.span
                animate={reduceMotion ? undefined : { rotate: lit ? 12 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="inline-flex"
              >
                <Icon className={present ? 'h-10 w-10' : 'h-8 w-8'} aria-hidden />
              </motion.span>
              {entry.label}
            </motion.button>
          )
        })}
      </div>
      <div className="mt-4 min-h-[3.2em]">
        <AnimatePresence mode="wait">
          <motion.p
            key={live?.id ?? 'empty'}
            aria-live="polite"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={cn(
              'font-semibold leading-snug text-stone-950 dark:text-stone-50',
              present ? trustPresent.body : 'text-2xl sm:text-3xl'
            )}
          >
            {live ? live.primaryQuestions[0] : null}
          </motion.p>
        </AnimatePresence>
        {liveTone && cycling ? (
          <motion.span
            key={`${live?.id}-tick`}
            aria-hidden
            className={cn('mt-3 block h-1 origin-left rounded-full', liveTone.fill)}
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.7, ease: 'linear' }}
          />
        ) : (
          <span aria-hidden className="mt-3 block h-1" />
        )}
      </div>
      <p className={cn('mt-2 text-stone-600 dark:text-stone-400', present ? trustPresent.note : 'text-lg')}>
        {TRUST_FOUR_SEATS_BODY}
      </p>
    </div>
  )
}

/** The send as a labeled object — one glance, then the four seats. */
export function TrustSeatLead() {
  const { present } = useTrustPresentation()

  return (
    <div data-trust-seat-lead className="space-y-6">
      <article
        data-trust-seat-object
        className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-900"
      >
        <div
          className={cn(
            'border-b border-stone-100 bg-stone-50 dark:border-stone-800 dark:bg-stone-800/60',
            present ? 'px-6 py-5' : 'px-4 py-4'
          )}
        >
          <p
            className={cn(
              'font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400',
              present ? 'text-base' : 'text-[11px]'
            )}
          >
            {TRUST_SEND_OBJECT.label}
          </p>
          <h3
            className={cn(
              'mt-2 font-semibold leading-snug text-stone-950 dark:text-stone-50',
              present ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
            )}
          >
            {TRUST_SEND_OBJECT.title}
          </h3>
          <p
            className={cn(
              'mt-2 inline-flex rounded-full bg-stone-200/80 px-2.5 py-0.5 font-semibold uppercase tracking-wide text-stone-700 dark:bg-stone-700 dark:text-stone-200',
              present ? 'text-sm' : 'text-[10px]'
            )}
          >
            {TRUST_SEND_OBJECT.note}
          </p>
        </div>
        <dl className="grid gap-px bg-stone-100 sm:grid-cols-3 dark:bg-stone-800">
          {TRUST_SEND_OBJECT.facts.map((fact) => (
            <div
              key={fact.label}
              className={cn(
                'bg-white dark:bg-stone-900 motion-safe:transition-colors',
                present ? 'px-6 py-5' : 'px-4 py-4'
              )}
            >
              <dt
                className={cn(
                  'uppercase tracking-wide text-stone-500',
                  present ? 'text-base' : 'text-xs'
                )}
              >
                {fact.label}
              </dt>
              <dd
                className={cn(
                  'mt-1 font-medium leading-snug text-stone-900 dark:text-stone-100',
                  present ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                )}
              >
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </article>
      <TrustSeatRoleLine present={present} />
    </div>
  )
}

export function TrustSeatSection({ variant }: { variant: 'studio' | 'dock' }) {
  const { present } = useTrustPresentation()
  const { progress, hydrated, update } = useTrustProgress()
  const ctx = useSeatPreview()
  const [hovered, setHovered] = useState<TrustRoleId | null>(null)
  const preview = ctx?.preview ?? hovered ?? progress.role
  const studio = variant === 'studio'

  return (
    <div
      data-trust-seat-picker={variant}
      onMouseLeave={(event) => {
        if (!isSeatControl(event.relatedTarget)) ctx?.hold(null)
      }}
    >
      {variant === 'dock' ? (
        <div className="mb-3">
          <p className="text-sm font-semibold text-stone-950 dark:text-stone-50">Your seat</p>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            Same section on every chapter. Keep one job, or change it here.
          </p>
        </div>
      ) : null}

      <p
        className={cn(
          'font-semibold text-stone-900 dark:text-stone-100',
          studio && present ? 'text-3xl sm:text-4xl' : studio ? 'text-2xl' : 'text-lg'
        )}
      >
        {hydrated && progress.role
          ? `Your seat: ${TRUST_ROLES.find((role) => role.id === progress.role)?.label}.`
          : 'Pick a seat to look at The send.'}
      </p>

      {studio ? (
        <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-[minmax(16rem,24rem)_minmax(0,1fr)]">
          <div className="grid grid-rows-4 gap-2">
            {TRUST_ROLES.map((entry) => (
              <TrustSeatCard
                key={entry.id}
                roleId={entry.id}
                lit={preview === entry.id}
                selected={progress.role === entry.id}
                present={present}
                onSelect={() => update({ role: entry.id })}
                onPreview={(id) => {
                  setHovered(id)
                  ctx?.hold(id)
                }}
              />
            ))}
          </div>
          <TrustSeatBrief roleId={preview} present={present} reserve />
        </div>
      ) : (
        <>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ROLES.map((entry) => (
              <TrustSeatCard
                key={entry.id}
                roleId={entry.id}
                lit={preview === entry.id}
                selected={progress.role === entry.id}
                onSelect={() => update({ role: entry.id })}
                onPreview={setHovered}
              />
            ))}
          </div>
          <div className="mt-4">
            <TrustSeatBrief roleId={preview} />
          </div>
        </>
      )}
    </div>
  )
}

export const TrustSeatStudio = Object.assign(
  function TrustSeatStudio({ children }: { children?: ReactNode }) {
    const ctx = useSeatPreview()
    const { present } = useTrustPresentation()
    return (
      <div
        data-trust-seat-studio
        className="space-y-8"
        onMouseLeave={(event) => {
          if (!present && !isSeatControl(event.relatedTarget)) ctx?.hold(null)
        }}
      >
        {children ?? (
          <>
            <TrustSeatLead />
            <TrustSeatSection variant="studio" />
          </>
        )}
      </div>
    )
  },
  { flattenPortions: true }
)

export function TrustSeatBar() {
  return <TrustSeatSection variant="dock" />
}
