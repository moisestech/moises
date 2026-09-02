'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { APPLICATION_BANNER_FRAME } from '@/components/opportunities/OpportunityApplicationBanner'
import {
  TRUST_CENTRAL_QUESTION,
  TRUST_PLACEHOLDERS,
  TRUST_SESSION_TITLE,
  TRUST_TITLE,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'

export function TrustLabBanner() {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const [peeled, setPeeled] = useState(false)
  const asset = TRUST_PLACEHOLDERS.labBanner

  return (
    <div
      data-site-chrome
      className={cn(APPLICATION_BANNER_FRAME, 'overflow-hidden border-b border-stone-200 print:hidden dark:border-stone-800')}
    >
      <div
        className="relative h-full w-full bg-stone-100 dark:bg-stone-900"
        onMouseEnter={() => setPeeled(true)}
        onMouseLeave={() => setPeeled(false)}
        onFocus={() => setPeeled(true)}
        onBlur={() => setPeeled(false)}
        tabIndex={0}
        role="img"
        aria-label={asset.alt}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.16),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(244,63,94,0.12),transparent_40%)]" />

        {!reduceMotion ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent dark:via-white/10"
            animate={{ x: ['-50%', '220%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          />
        ) : null}

        <div className="relative z-[1] flex h-full flex-col justify-between px-4 py-3 sm:px-6 sm:py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            {asset.surfaceFilename} · designed slot · still pending
          </p>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
              {TRUST_SESSION_TITLE}
            </p>
            <p className="mt-1 text-lg font-bold leading-tight text-stone-950 dark:text-stone-50 sm:text-2xl">
              {TRUST_TITLE}
            </p>
            <p className="mt-1 max-w-xl text-sm text-stone-700 dark:text-stone-300">{TRUST_CENTRAL_QUESTION}</p>
          </div>
          <p className="text-[11px] text-stone-500">{asset.depiction}</p>
        </div>

        <motion.div
          className="absolute right-0 top-0 z-[2] flex h-full w-[42%] flex-col items-center justify-center gap-3 border-l border-stone-200/80 bg-white/90 px-4 dark:border-stone-700 dark:bg-stone-950/90"
          initial={false}
          animate={{
            clipPath: peeled || reduceMotion ? 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(100% 0, 100% 0, 100% 0, 100% 0)',
          }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.35 }}
          aria-hidden={!peeled}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">Inspect</p>
          <ul className="flex items-center gap-4">
            <li className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-wide text-stone-500">
              <TrustMark id="evidence" className="h-8 w-8" />
              Evidence
            </li>
            <li className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-wide text-stone-500">
              <TrustMark id="authority" className="h-8 w-8" />
              Authority
            </li>
            <li className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-wide text-stone-500">
              <TrustMark id="impact" className="h-8 w-8" />
              Impact
            </li>
          </ul>
        </motion.div>

        <motion.div
          key={pathname}
          className="absolute bottom-3 right-4 z-[3] flex items-center gap-1.5"
          initial={reduceMotion ? false : { scale: 0.85, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.45 }}
        >
          <TrustMark id="allow" className="h-5 w-5" />
          <TrustMark id="ask" className="h-5 w-5" />
          <TrustMark id="deny" className="h-5 w-5" />
        </motion.div>
      </div>
    </div>
  )
}
