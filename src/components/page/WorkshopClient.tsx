'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Mail, CheckCircle, Building2, Users, Package, Settings, Phone, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { WORKSHOP_HUB, CALENDLY_URL } from '@/constants/workshop-hub'
/** Workshop grid data: shared with /workshops index; add entries here only (not inline). */
import { WORKSHOP_FEATURES } from '@/constants/workshop-features'
import { track } from '@/lib/analytics'

const WorkshopCanvas = dynamic(
  () => import('@/components/canvas/WorkshopCanvas'),
  { ssr: false }
)

/** Append UTM params from current URL to a base path or URL */
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
    const sep = baseUrl.includes('?') ? '&' : (baseUrl.startsWith('/') ? '?' : '&')
    setUrl(qs ? `${baseUrl}${sep}${qs}` : baseUrl)
  }, [baseUrl])
  return url
}

export default function WorkshopClient() {
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

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <WorkshopCanvas />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero - flashy headline, mobile-friendly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3"
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #f472b6 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(167, 139, 250, 0.3)',
            }}
          >
            {WORKSHOP_HUB.HERO.HEADLINE}
          </h1>
          <p className="text-lg sm:text-xl text-purple-300/90 font-medium">
            {WORKSHOP_HUB.HERO.SUBHEADLINE}
          </p>
        </motion.div>

        {/* Two CTA cards - stacked on mobile, side-by-side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16"
        >
          {/* Card A: Institutions → /contact */}
          <Link
            href={contactUrl}
            onClick={() => track('cta_institutions_click', { source: 'talk_hub' })}
            className="group/card block"
          >
          <div className="backdrop-blur-md bg-white/10 p-4 sm:p-6 rounded-xl border border-white/10 flex flex-col transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:shadow-cyan-500/20">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {WORKSHOP_HUB.CTA_INSTITUTIONS.TITLE}
              </h2>
            </div>
            <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-white/80 text-xs sm:text-sm">
              {WORKSHOP_HUB.CTA_INSTITUTIONS.BULLETS.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 mt-0.5 shrink-0" />
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

          {/* Card B: Workshop Waitlist */}
          <div className="backdrop-blur-md bg-white/10 p-4 sm:p-6 rounded-xl border border-white/10 flex flex-col transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {WORKSHOP_HUB.CTA_WORKSHOP.TITLE}
              </h2>
            </div>
            <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-white/80 text-xs sm:text-sm">
              {WORKSHOP_HUB.CTA_WORKSHOP.BULLETS.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            {submitted ? (
              <div className="mt-auto">
                <p className="text-green-400 text-sm font-medium flex items-center gap-2">
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
                  className="w-full rounded-lg bg-black/30 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[44px] text-base"
                  aria-label="Email for workshop waitlist"
                />
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
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

        {/* Get the resources - mini-section with icons + glow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-base sm:text-lg font-semibold text-white/90 mb-4 text-center">
            Get the resources
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            {WORKSHOP_HUB.RESOURCES.map((r, i) => {
              const Icon = r.icon === 'package' ? Package : r.icon === 'cog' ? Settings : Phone;
              const resourceLinkClass =
                'inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] hover:bg-white/10 text-purple-300 hover:text-cyan-300 text-sm sm:text-base font-medium';
              return r.external ? (
                <a
                  key={i}
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceLinkClass}
                >
                  <span className="p-2 rounded-lg bg-cyan-500/20">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </span>
                  {r.label}
                </a>
              ) : (
                <Link key={i} href={r.href} className={resourceLinkClass}>
                  <span className="p-2 rounded-lg bg-cyan-500/20">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </span>
                  {r.label}
                </Link>
              );
            })}
          </div>
        </motion.section>

        {/* What you'll leave with */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-lg font-semibold text-white/90 mb-4 text-center">
            What you&apos;ll leave with
          </h2>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            {WORKSHOP_HUB.WHAT_YOU_LEAVE_WITH.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-white/80 text-sm sm:text-base"
              >
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* 360 Experiences */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                src={WORKSHOP_HUB.ABOUT.FABIOLA.avatar}
                alt={WORKSHOP_HUB.ABOUT.FABIOLA.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-semibold text-white mb-1">360 Experiences</h2>
              <p className="text-white/70 text-sm mb-1">
                Immersive 360° photo captures of exhibitions and studios.
              </p>
              <p className="text-purple-400 text-sm font-medium">
                {WORKSHOP_HUB.ABOUT.FABIOLA.name} — Director of Digital at Oolite Arts, 360 Lead
              </p>
            </div>
          </div>
        </motion.section>

        {/* About us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-xl font-bold text-white mb-8 text-center">About us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden mb-4">
                <Image
                  src={WORKSHOP_HUB.ABOUT.MOISES.avatar}
                  alt={WORKSHOP_HUB.ABOUT.MOISES.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-white mb-1">{WORKSHOP_HUB.ABOUT.MOISES.name}</h3>
              <p className="text-purple-400 text-xs font-medium mb-2">{WORKSHOP_HUB.ABOUT.MOISES.role}</p>
              <p className="text-white/70 text-sm mb-3">{WORKSHOP_HUB.ABOUT.MOISES.bio}</p>
              <a
                href={`https://instagram.com/${WORKSHOP_HUB.ABOUT.MOISES.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @{WORKSHOP_HUB.ABOUT.MOISES.instagram}
              </a>
            </div>
            <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden mb-4">
                <Image
                  src={WORKSHOP_HUB.ABOUT.FABIOLA.avatar}
                  alt={WORKSHOP_HUB.ABOUT.FABIOLA.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-white mb-1">{WORKSHOP_HUB.ABOUT.FABIOLA.name}</h3>
              <p className="text-purple-400 text-xs font-medium mb-2">{WORKSHOP_HUB.ABOUT.FABIOLA.role}</p>
              <p className="text-white/70 text-sm mb-3">{WORKSHOP_HUB.ABOUT.FABIOLA.bio}</p>
              <a
                href={`https://instagram.com/${WORKSHOP_HUB.ABOUT.FABIOLA.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @{WORKSHOP_HUB.ABOUT.FABIOLA.instagram}
              </a>
            </div>
          </div>
          <p className="text-center text-white/50 text-xs mt-4">Follow us on IG</p>
        </motion.section>

        {/* Trust signals */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 text-white/50 text-xs sm:text-sm">
            {WORKSHOP_HUB.ABOUT.TRUST_SIGNALS.map((sig, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0">
                  {sig.logo ? (
                    <Image src={sig.logo} alt="" width={24} height={24} />
                  ) : (
                    <span className="text-white/30 text-[10px] font-medium">
                      {sig.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <span>{sig.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Explore our workshops */}
        <motion.section
          id="explore-workshops"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          aria-labelledby="explore-workshops-heading"
        >
          <h2 id="explore-workshops-heading" className="text-xl font-bold text-white mb-6 text-center">
            Explore our workshops
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {WORKSHOP_FEATURES.map((feature, index) => (
              feature.disabled ? (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 relative overflow-hidden cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-black/30 z-10" />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-purple-500/80 text-white text-xs px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <div className="relative z-0">
                    <h3 className="text-lg font-bold text-white/70 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ) : (
                <Link
                  href={feature.link}
                  key={feature.title}
                  target={feature.link.startsWith('http') ? '_blank' : '_self'}
                  rel={feature.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group block"
                  onClick={() =>
                    track('workshop_card_click', { workshop: feature.title })
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className={
                      'backdrop-blur-md p-6 rounded-xl border transition-all h-full flex flex-col ' +
                      (feature.featured
                        ? 'bg-white/[0.12] border-purple-400/50 ring-2 ring-purple-500/30 hover:border-purple-400/80'
                        : 'bg-white/10 border-white/10 hover:border-purple-500/50')
                    }
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <p className="text-white/70 text-sm mb-3 flex-1">
                      {feature.description}
                    </p>
                    {feature.instructor && (
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                          {feature.instructorAvatar ? (
                            <Image
                              src={feature.instructorAvatar}
                              alt={feature.instructor}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          ) : (
                            <span className="text-purple-400/80 text-xs font-medium">
                              {feature.instructor
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="text-purple-400/90 text-xs font-medium">
                            with {feature.instructor}
                          </p>
                          {feature.instructorRole && (
                            <p className="text-white/50 text-[10px]">
                              {feature.instructorRole}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </Link>
              )
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <a
            href={`mailto:${WORKSHOP_HUB.FOOTER.EMAIL}`}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            {WORKSHOP_HUB.FOOTER.EMAIL}
          </a>
          <p className="mt-4 text-white/50 text-sm">
            Artist Tech Initiative —{' '}
            <Link href="https://moises.tech" target="_blank" className="underline hover:text-white">
              Moises Sanabria
            </Link>
            {' & '}
            <Link href="https://fabiola.io" target="_blank" className="underline hover:text-white">
              Fabiola Larios
            </Link>
          </p>
        </motion.footer>
      </div>

      <style jsx global>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glow {
          0% { opacity: 0.2; transform: scale(0.95); }
          100% { opacity: 0.4; transform: scale(1.05); }
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
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
        }
        .card-glass:hover::before {
          left: 100%;
        }
      `}</style>
    </main>
  )
}
