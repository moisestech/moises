'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Layers,
  Printer,
  Users,
  Workflow,
  ChevronDown,
  Clock,
  Target,
  Wrench,
  Sparkles,
} from 'lucide-react'
import { institutionalWorkshopOfferings } from '@/content/institutions/workshopsOfferings'
import { track } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const ACCENT = {
  violet: {
    bar: 'bg-violet-500',
    soft: 'bg-violet-500/15',
    text: 'text-violet-300',
    border: 'border-violet-400/35',
    glow: 'hover:shadow-[0_0_40px_-12px_rgba(167,139,250,0.55)]',
    chip: 'bg-violet-500/20 text-violet-200 border-violet-400/30',
  },
  cyan: {
    bar: 'bg-cyan-400',
    soft: 'bg-cyan-400/15',
    text: 'text-cyan-300',
    border: 'border-cyan-400/35',
    glow: 'hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.45)]',
    chip: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30',
  },
  coral: {
    bar: 'bg-rose-400',
    soft: 'bg-rose-400/15',
    text: 'text-rose-300',
    border: 'border-rose-400/35',
    glow: 'hover:shadow-[0_0_40px_-12px_rgba(251,113,133,0.45)]',
    chip: 'bg-rose-500/20 text-rose-200 border-rose-400/30',
  },
} as const

const ICONS = {
  workflow: Workflow,
  code: Code2,
  printer: Printer,
} as const

type Offering = (typeof institutionalWorkshopOfferings.offerings)[number]

function OfferingAccordionItem({
  offering,
  open,
  onToggle,
  isDark,
}: {
  offering: Offering
  open: boolean
  onToggle: () => void
  isDark: boolean
}) {
  const reduceMotion = useReducedMotion()
  const panelId = useId()
  const accent = ACCENT[offering.accent]
  const Icon = ICONS[offering.icon]

  return (
    <li
      id={offering.id}
      className={cn(
        'scroll-mt-28 overflow-hidden border transition-shadow duration-300',
        isDark
          ? cn('border-white/12 bg-white/[0.04] backdrop-blur-md', accent.glow)
          : 'border-neutral-200 bg-white',
        open && (isDark ? accent.border : 'border-neutral-400')
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-5"
      >
        <span
          className={cn(
            'mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
            accent.soft,
            accent.text
          )}
          aria-hidden
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span
            className={cn(
              'font-mono text-[10px] uppercase tracking-[0.16em]',
              isDark ? accent.text : 'text-neutral-600'
            )}
          >
            {offering.duration.split('·')[0]?.trim()} · {offering.capacity}
          </span>
          <span
            className={cn(
              'mt-1 block text-base font-bold leading-snug sm:text-lg',
              isDark ? 'text-white' : 'text-neutral-950'
            )}
          >
            {offering.title}
          </span>
          <span
            className={cn(
              'mt-2 block text-sm leading-relaxed',
              isDark ? 'text-white/75' : 'text-neutral-600'
            )}
          >
            {offering.promise}
          </span>
          <span
            className={cn(
              'mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold',
              isDark ? accent.chip : 'border-neutral-200 bg-neutral-50 text-neutral-700'
            )}
          >
            {offering.priceLabel}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className={cn(
            'mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border',
            isDark ? 'border-white/15 text-white/70' : 'border-neutral-200 text-neutral-600'
          )}
          aria-hidden
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className={cn(
                'space-y-4 border-t px-4 pb-5 pt-4 sm:px-5',
                isDark ? 'border-white/10' : 'border-neutral-100'
              )}
            >
              <p className={cn('text-sm leading-relaxed', isDark ? 'text-white/70' : 'text-neutral-600')}>
                {offering.body}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <Detail
                  isDark={isDark}
                  icon={Users}
                  label="Audience"
                  value={offering.audience}
                  accentClass={accent.text}
                />
                <Detail
                  isDark={isDark}
                  icon={Sparkles}
                  label="They make"
                  value={offering.artifact}
                  accentClass={accent.text}
                />
                <Detail
                  isDark={isDark}
                  icon={Target}
                  label="Outcomes"
                  value={offering.outcomes.join(' · ')}
                  accentClass={accent.text}
                />
                <Detail
                  isDark={isDark}
                  icon={Layers}
                  label="Formats"
                  value={offering.formats.join(' · ')}
                  accentClass={accent.text}
                />
                <Detail
                  isDark={isDark}
                  icon={Wrench}
                  label="Setup"
                  value={offering.setup}
                  accentClass={accent.text}
                />
                <Detail
                  isDark={isDark}
                  icon={Clock}
                  label="Fits"
                  value={offering.fits}
                  accentClass={accent.text}
                />
              </div>

              <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap">
                <a
                  href={offering.inquiryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex min-h-10 items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold',
                    isDark ? 'bg-white text-neutral-950 hover:bg-white/90' : 'bg-neutral-950 text-white'
                  )}
                  onClick={() =>
                    track('workshop_offering_inquire', { id: offering.id, source: 'workshops_accordion' })
                  }
                >
                  {offering.inquiryLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <Link
                  href={offering.toolkitHref}
                  className={cn(
                    'inline-flex min-h-10 items-center justify-center gap-1 px-3 text-sm font-semibold',
                    isDark ? accent.text : 'text-neutral-800'
                  )}
                >
                  {offering.toolkitLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
                <Link
                  href={offering.relatedHref}
                  className={cn(
                    'inline-flex min-h-10 items-center justify-center gap-1 px-3 text-sm',
                    isDark ? 'text-white/65' : 'text-neutral-600'
                  )}
                >
                  {offering.relatedLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={cn('h-1 w-full', accent.bar)} aria-hidden />
    </li>
  )
}

function Detail({
  isDark,
  icon: Icon,
  label,
  value,
  accentClass,
}: {
  isDark: boolean
  icon: typeof Users
  label: string
  value: string
  accentClass: string
}) {
  return (
    <div className={cn('rounded-lg border p-3', isDark ? 'border-white/10 bg-black/20' : 'border-neutral-100 bg-neutral-50')}>
      <p className={cn('flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]', isDark ? 'text-white/45' : 'text-neutral-500')}>
        <Icon className={cn('h-3.5 w-3.5', accentClass)} aria-hidden />
        {label}
      </p>
      <p className={cn('mt-1.5 text-sm leading-relaxed', isDark ? 'text-white/85' : 'text-neutral-800')}>
        {value}
      </p>
    </div>
  )
}

export function InstitutionalOfferingsAccordion({ isDark }: { isDark: boolean }) {
  const [openId, setOpenId] = useState<string | null>(
    institutionalWorkshopOfferings.offerings[0]?.id ?? null
  )

  return (
    <ul className="space-y-3">
      {institutionalWorkshopOfferings.offerings.map((offering) => (
        <OfferingAccordionItem
          key={offering.id}
          offering={offering}
          isDark={isDark}
          open={openId === offering.id}
          onToggle={() => setOpenId((cur) => (cur === offering.id ? null : offering.id))}
        />
      ))}
    </ul>
  )
}
