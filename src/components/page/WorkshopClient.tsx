'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Mail,
  CheckCircle,
  Building2,
  Users,
  Package,
  Settings,
  Phone,
  Instagram,
  LayoutGrid,
  Search,
  HeartHandshake,
  Workflow,
  BrainCircuit,
  Layers,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { WORKSHOP_HUB, CALENDLY_URL } from '@/constants/workshop-hub'
import { WORKSHOP_FEATURES, type WorkshopCardVisual } from '@/constants/workshop-features'
import { institutionalWorkshopOfferings } from '@/content/institutions/workshopsOfferings'
import { track } from '@/lib/analytics'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

const WorkshopCanvas = dynamic(
  () => import('@/components/canvas/WorkshopCanvas'),
  { ssr: false }
)

function useUtmUrl(baseUrl: string): string {
  const [url, setUrl] = useState(baseUrl)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const utm = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term']
    const u = new URLSearchParams()
    utm.forEach((k) => {
      const v = params.get(k)
      if (v) u.set(k, v)
    })
    const qs = u.toString()
    const sep = baseUrl.includes('?') ? '&' : baseUrl.startsWith('/') ? '?' : '&'
    setUrl(qs ? `${baseUrl}${sep}${qs}` : baseUrl)
  }, [baseUrl])
  return url
}

const CARD_VISUAL_ICONS: Record<WorkshopCardVisual, LucideIcon> = {
  'digital-presence': LayoutGrid,
  seo: Search,
  nonprofit: HeartHandshake,
  'ai-agents': Workflow,
  'learn-ai': BrainCircuit,
  generic: Layers,
}

function WorkshopCardIconStrip({
  visual,
  isDark,
  muted,
}: {
  visual: WorkshopCardVisual
  isDark: boolean
  muted?: boolean
}) {
  const Icon = CARD_VISUAL_ICONS[visual]
  return (
    <div
      className={cn(
        'relative flex h-40 sm:h-44 w-full items-center justify-center rounded-t-xl border-b',
        muted
          ? isDark
            ? 'border-white/10 bg-white/[0.04]'
            : 'border-zinc-200 bg-zinc-100/80'
          : isDark
            ? 'border-white/10 bg-gradient-to-br from-violet-600/35 via-indigo-600/25 to-cyan-600/25'
            : 'border-zinc-200/80 bg-gradient-to-br from-violet-200/90 via-indigo-100/80 to-cyan-100/70'
      )}
      aria-hidden
    >
      <Icon
        className={cn(
          'h-[5.5rem] w-[5.5rem] sm:h-24 sm:w-24',
          muted
            ? isDark
              ? 'text-white/25'
              : 'text-zinc-300'
            : isDark
              ? 'text-white/90 drop-shadow-[0_0_24px_rgba(167,139,250,0.35)]'
              : 'text-violet-700/90'
        )}
        strokeWidth={1.25}
      />
    </div>
  )
}

export default function WorkshopClient() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const contactUrl = useUtmUrl(WORKSHOP_HUB.CTA_INSTITUTIONS.LINK)
  const calendlyUrl = useUtmUrl(CALENDLY_URL)

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          utm_source: params.get('utm_source'),
          utm_campaign: params.get('utm_campaign'),
          utm_medium: params.get('utm_medium'),
          utm_content: params.get('utm_content'),
          utm_term: params.get('utm_term'),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      setSubmitted(true)
      track('waitlist_submit_success', { source: 'talk_hub' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const cardBase =
    'backdrop-blur-md rounded-xl border p-4 sm:p-6 flex flex-col transition-all duration-300 ' +
    (isDark
      ? 'bg-white/10 border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]'
      : 'bg-white/95 border-zinc-200 shadow-sm hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/10')

  const accentIcon = isDark ? 'text-purple-400' : 'text-violet-600'
  const heading = isDark ? 'text-white' : 'text-zinc-900'
  const bodyMuted = isDark ? 'text-white/80' : 'text-zinc-600'
  const sectionTitle = isDark ? 'text-white/90' : 'text-zinc-800'
  const avatarRing = isDark ? 'bg-white/10' : 'bg-zinc-200'

  return (
    <main
      className={cn(
        'relative flex min-h-screen flex-col items-center overflow-hidden',
        /* Follows html.dark (same toggle as nav); avoids relying on context alone */
        'bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white'
      )}
    >
      <div
        className={cn(
          'absolute inset-0 z-0 opacity-[0.22] transition-opacity duration-300 dark:opacity-100'
        )}
        aria-hidden
      >
        <WorkshopCanvas />
      </div>
      <div
        className={cn(
          'pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b',
          'from-zinc-100/95 via-zinc-100/88 to-zinc-100 dark:from-black/40 dark:via-transparent dark:to-black/70'
        )}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 md:pt-[200px] pb-12 sm:pb-20">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto"
        >
          <p
            className={cn(
              'text-[11px] sm:text-xs uppercase tracking-[0.22em] mb-4',
              isDark ? 'text-zinc-500' : 'text-zinc-500'
            )}
          >
            {WORKSHOP_HUB.INTRO.EYEBROW}
          </p>
          <h1
            className={cn(
              'text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] mb-5',
              heading
            )}
          >
            {WORKSHOP_HUB.INTRO.TITLE}
          </h1>
          <p className={cn('text-base sm:text-lg leading-relaxed', bodyMuted)}>{WORKSHOP_HUB.INTRO.LEAD}</p>
          <div
            className={cn(
              'mt-8 h-px w-24 mx-auto rounded-full bg-gradient-to-r from-transparent to-transparent',
              isDark ? 'via-purple-500/40' : 'via-violet-400/60'
            )}
            aria-hidden
          />
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16"
        >
          <Link
            href={contactUrl}
            onClick={() => track('cta_institutions_click', { source: 'talk_hub' })}
            className="group/card block"
          >
            <div className={cn(cardBase, isDark && 'hover:shadow-cyan-500/20')}>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Building2 className={cn('w-5 h-5 sm:w-6 sm:h-6', accentIcon)} />
                <h2 className={cn('text-lg sm:text-xl font-bold', heading)}>{WORKSHOP_HUB.CTA_INSTITUTIONS.TITLE}</h2>
              </div>
              <ul className={cn('space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm', bodyMuted)}>
                {WORKSHOP_HUB.CTA_INSTITUTIONS.BULLETS.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className={cn('w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0', accentIcon)} />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 sm:py-3 text-white font-medium group-hover/card:opacity-90 transition-opacity min-h-[44px] text-sm sm:text-base">
                {WORKSHOP_HUB.CTA_INSTITUTIONS.BUTTON_LABEL}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          <div className={cn(cardBase, isDark && 'hover:shadow-cyan-500/20')}>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Users className={cn('w-5 h-5 sm:w-6 sm:h-6', accentIcon)} />
              <h2 className={cn('text-lg sm:text-xl font-bold', heading)}>{WORKSHOP_HUB.CTA_WORKSHOP.TITLE}</h2>
            </div>
            <ul className={cn('space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm', bodyMuted)}>
              {WORKSHOP_HUB.CTA_WORKSHOP.BULLETS.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className={cn('w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0', accentIcon)} />
                  {b}
                </li>
              ))}
            </ul>
            {submitted ? (
              <div className="mt-auto">
                <p className="text-emerald-600 dark:text-green-400 text-sm font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  You&apos;re on the list. Check your inbox soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="mt-auto space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  inputMode="email"
                  autoComplete="email"
                  className={cn(
                    'w-full rounded-lg border px-4 py-3 min-h-[44px] text-base focus:outline-none focus:ring-2 focus:ring-purple-500',
                    isDark
                      ? 'bg-black/30 border-white/20 text-white placeholder:text-white/50'
                      : 'bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400'
                  )}
                  aria-label="Email for workshop waitlist"
                />
                {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3.5 sm:py-3 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[44px] text-sm sm:text-base"
                >
                  {loading ? 'Joining…' : WORKSHOP_HUB.CTA_WORKSHOP.BUTTON_LABEL}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 sm:mb-16"
          aria-labelledby="institutional-offerings-heading"
        >
          <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            <p
              className={cn(
                'text-[11px] font-semibold uppercase tracking-[0.18em] mb-2',
                isDark ? 'text-purple-300/90' : 'text-violet-700'
              )}
            >
              {institutionalWorkshopOfferings.intro.eyebrow}
            </p>
            <h2
              id="institutional-offerings-heading"
              className={cn('text-xl sm:text-2xl font-bold', heading)}
            >
              {institutionalWorkshopOfferings.intro.title}
            </h2>
            <p className={cn('mt-2 text-sm sm:text-base leading-relaxed', bodyMuted)}>
              {institutionalWorkshopOfferings.intro.lead}
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('cta_institutions_click', { source: 'workshops_offerings_calendly' })}
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {institutionalWorkshopOfferings.intro.calendlyLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {institutionalWorkshopOfferings.offerings.map((offering) => (
              <li key={offering.id} className={cn(cardBase)}>
                <h3 className={cn('text-base sm:text-lg font-bold leading-snug', heading)}>
                  {offering.title}
                </h3>
                <p className={cn('mt-3 text-xs sm:text-sm leading-relaxed flex-1', bodyMuted)}>
                  {offering.body}
                </p>
                <p className={cn('mt-3 text-[11px] uppercase tracking-wide', bodyMuted)}>
                  Fits: {offering.fits}
                </p>
                <Link
                  href={offering.relatedHref}
                  className={cn(
                    'mt-4 inline-flex items-center gap-1 text-sm font-semibold',
                    isDark ? 'text-cyan-300' : 'text-violet-700'
                  )}
                >
                  {offering.relatedLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 sm:mb-16"
          aria-labelledby="resources-heading"
        >
          <h2 id="resources-heading" className={cn('text-lg sm:text-xl font-semibold mb-6 text-center', sectionTitle)}>
            Get the resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {WORKSHOP_HUB.RESOURCES.map((r, i) => {
              const Icon = r.icon === 'package' ? Package : r.icon === 'cog' ? Settings : Phone
              const href = r.external ? calendlyUrl : r.href
              const cta = r.ctaLabel
              const inner = (
                <>
                  <div
                    className={cn(
                      'flex h-28 items-center justify-center rounded-t-xl border-b',
                      isDark
                        ? 'border-white/10 bg-gradient-to-br from-cyan-500/15 to-violet-600/20'
                        : 'border-zinc-200 bg-gradient-to-br from-cyan-50 to-violet-100'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-14 w-14 sm:h-16 sm:w-16',
                        isDark ? 'text-cyan-300' : 'text-cyan-700'
                      )}
                      strokeWidth={1.15}
                    />
                  </div>
                  <div className={cn('flex flex-col flex-1 p-5 sm:p-6', isDark ? 'bg-white/[0.07]' : 'bg-white')}>
                    <h3 className={cn('text-base font-semibold mb-2', heading)}>{r.label}</h3>
                    <p className={cn('text-sm leading-relaxed mb-5 flex-1', bodyMuted)}>{r.description}</p>
                    <span
                      className={cn(
                        'inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                        isDark
                          ? 'bg-white/15 text-white hover:bg-white/20'
                          : 'bg-zinc-900 text-white hover:bg-zinc-800'
                      )}
                    >
                      {cta}
                      <ArrowUpRight className="h-4 w-4 opacity-80" />
                    </span>
                  </div>
                </>
              )
              const cardShell = cn(
                'rounded-xl border overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-0.5',
                isDark
                  ? 'border-white/10 bg-white/5 hover:border-cyan-400/35 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]'
                  : 'border-zinc-200 bg-white shadow-sm hover:border-violet-300 hover:shadow-md'
              )
              return r.external ? (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardShell}
                >
                  {inner}
                </a>
              ) : (
                <Link key={i} href={href} className={cardShell}>
                  {inner}
                </Link>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className={cn('text-lg font-semibold mb-4 text-center', sectionTitle)}>What you&apos;ll leave with</h2>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            {WORKSHOP_HUB.WHAT_YOU_LEAVE_WITH.map((item, i) => (
              <li key={i} className={cn('flex items-center gap-2 text-sm sm:text-base', bodyMuted)}>
                <CheckCircle className={cn('w-4 h-4 shrink-0', accentIcon)} />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <div className={cn(cardBase, 'flex-col sm:flex-row sm:items-center gap-4 sm:gap-6')}>
            <div
              className={cn(
                'w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden',
                avatarRing
              )}
            >
              <Image
                src={WORKSHOP_HUB.ABOUT.FABIOLA.avatar}
                alt={WORKSHOP_HUB.ABOUT.FABIOLA.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className={cn('text-lg font-semibold mb-1', heading)}>360 Experiences</h2>
              <p className={cn('text-sm mb-1', bodyMuted)}>Immersive 360° photo captures of exhibitions and studios.</p>
              <p className={cn('text-sm font-medium', accentIcon)}>
                {WORKSHOP_HUB.ABOUT.FABIOLA.name} — Director of Digital at Oolite Arts, 360 Lead
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className={cn('text-xl font-bold mb-8 text-center', heading)}>About us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {(['MOISES', 'FABIOLA'] as const).map((key) => {
              const person = WORKSHOP_HUB.ABOUT[key]
              return (
                <div key={key} className={cn(cardBase, 'items-center text-center')}>
                  <div
                    className={cn(
                      'w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden mb-4',
                      avatarRing
                    )}
                  >
                    <Image src={person.avatar} alt={person.name} width={80} height={80} className="rounded-full object-cover" />
                  </div>
                  <h3 className={cn('font-semibold mb-1', heading)}>{person.name}</h3>
                  <p className={cn('text-xs font-medium mb-2', accentIcon)}>{person.role}</p>
                  <p className={cn('text-sm mb-3', bodyMuted)}>{person.bio}</p>
                  <a
                    href={`https://instagram.com/${person.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-2 text-sm transition-colors',
                      isDark ? 'text-purple-400 hover:text-purple-300' : 'text-violet-700 hover:text-violet-900'
                    )}
                  >
                    <Instagram className="w-4 h-4" />@{person.instagram}
                  </a>
                </div>
              )
            })}
          </div>
          <p className={cn('text-center text-xs mt-4', isDark ? 'text-white/50' : 'text-zinc-500')}>
            Follow us on IG
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16 text-center"
        >
          <div
            className={cn(
              'flex flex-wrap justify-center gap-3 text-xs sm:text-sm',
              isDark ? 'text-white/50' : 'text-zinc-600'
            )}
          >
            {WORKSHOP_HUB.ABOUT.TRUST_SIGNALS.map((sig, i) => (
              <div
                key={i}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg border',
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white border-zinc-200 shadow-sm'
                )}
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded flex items-center justify-center shrink-0',
                    isDark ? 'bg-white/10' : 'bg-zinc-100'
                  )}
                >
                  {sig.logo ? (
                    <Image src={sig.logo} alt="" width={24} height={24} />
                  ) : (
                    <span className={cn('text-[10px] font-medium', isDark ? 'text-white/30' : 'text-zinc-400')}>
                      {sig.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <span>{sig.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="explore-workshops"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          aria-labelledby="explore-workshops-heading"
        >
          <h2 id="explore-workshops-heading" className={cn('text-xl sm:text-2xl font-bold mb-8 text-center', heading)}>
            Programs &amp; workshops
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {WORKSHOP_FEATURES.map((feature, index) => {
              const ctaText =
                feature.ctaLabel ??
                (feature.link.startsWith('http') ? 'Open link' : 'Open program')
              const outer = cn(
                'rounded-xl border overflow-hidden flex flex-col h-full transition-all duration-300',
                feature.disabled
                  ? isDark
                    ? 'border-white/10 bg-white/[0.04] cursor-not-allowed opacity-95'
                    : 'border-zinc-200 bg-zinc-50 cursor-not-allowed'
                  : feature.featured
                    ? isDark
                      ? 'border-purple-400/45 ring-2 ring-purple-500/25 shadow-lg shadow-purple-950/20 hover:border-purple-400/70'
                      : 'border-violet-400 ring-2 ring-violet-200 shadow-md hover:shadow-lg'
                    : isDark
                      ? 'border-white/10 bg-white/[0.06] hover:border-purple-500/40 hover:-translate-y-0.5'
                      : 'border-zinc-200 bg-white shadow-sm hover:border-violet-300 hover:-translate-y-0.5 hover:shadow-md'
              )

              if (feature.disabled) {
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.06, duration: 0.45 }}
                    className={cn(outer, 'relative')}
                  >
                    <WorkshopCardIconStrip visual={feature.cardVisual} isDark={isDark} muted />
                    <div className="relative p-6 sm:p-7 flex flex-col flex-1">
                      <div className="absolute top-3 right-3">
                        <span className="rounded-full bg-purple-500/85 px-2.5 py-1 text-xs font-medium text-white">
                          Coming soon
                        </span>
                      </div>
                      <h3 className={cn('text-xl font-semibold mb-3 pr-24', isDark ? 'text-white/65' : 'text-zinc-500')}>
                        {feature.title}
                      </h3>
                      <p className={cn('text-sm sm:text-base leading-relaxed', isDark ? 'text-white/45' : 'text-zinc-500')}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              }

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.06, duration: 0.45 }}
                  className={outer}
                >
                  <WorkshopCardIconStrip visual={feature.cardVisual} isDark={isDark} />
                  <div className={cn('flex flex-col flex-1 p-6 sm:p-7', isDark ? 'bg-black/25' : 'bg-white')}>
                    <h3 className={cn('text-xl sm:text-2xl font-semibold tracking-tight mb-3', heading)}>
                      {feature.title}
                    </h3>
                    <p className={cn('text-sm sm:text-base leading-relaxed mb-6 flex-1', bodyMuted)}>
                      {feature.description}
                    </p>
                    {feature.instructor && (
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={cn(
                            'h-10 w-10 rounded-full flex items-center justify-center overflow-hidden shrink-0',
                            avatarRing
                          )}
                        >
                          {feature.instructorAvatar ? (
                            <Image
                              src={feature.instructorAvatar}
                              alt={feature.instructor}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <span className={cn('text-sm font-medium', accentIcon)}>
                              {feature.instructor
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className={cn('text-sm font-medium', accentIcon)}>With {feature.instructor}</p>
                          {feature.instructorRole && (
                            <p className={cn('text-xs', isDark ? 'text-white/50' : 'text-zinc-500')}>
                              {feature.instructorRole}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    <Link
                      href={feature.link}
                      target={feature.link.startsWith('http') ? '_blank' : undefined}
                      rel={feature.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={() => track('workshop_card_click', { workshop: feature.title })}
                      className={cn(
                        'inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold transition-colors',
                        isDark
                          ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500'
                          : 'bg-zinc-900 text-white hover:bg-zinc-800'
                      )}
                    >
                      {ctaText}
                      <ArrowUpRight className="h-4 w-4 shrink-0 opacity-90" />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className={cn(
            'mt-16 pt-8 border-t text-center',
            isDark ? 'border-white/10' : 'border-zinc-200'
          )}
        >
          <a
            href={`mailto:${WORKSHOP_HUB.FOOTER.EMAIL}`}
            className={cn(
              'inline-flex items-center gap-2 text-sm transition-colors',
              isDark ? 'text-white/60 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
            )}
          >
            <Mail className="w-4 h-4" />
            {WORKSHOP_HUB.FOOTER.EMAIL}
          </a>
          <p className={cn('mt-4 text-sm', isDark ? 'text-white/50' : 'text-zinc-600')}>
            Artist Tech Initiative —{' '}
            <Link
              href="https://moises.tech"
              target="_blank"
              className={cn('underline', isDark ? 'hover:text-white' : 'hover:text-zinc-900')}
            >
              Moises Sanabria
            </Link>
            {' & '}
            <Link
              href="https://fabiola.io"
              target="_blank"
              className={cn('underline', isDark ? 'hover:text-white' : 'hover:text-zinc-900')}
            >
              Fabiola Larios
            </Link>
          </p>
        </motion.footer>
      </div>

      <style jsx global>{`
        @keyframes text-gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes glow {
          0% {
            opacity: 0.2;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient 5s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .card-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }
        .card-glass:hover::before {
          left: 100%;
        }
      `}</style>
    </main>
  )
}
