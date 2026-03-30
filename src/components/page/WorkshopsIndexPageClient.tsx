'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { WORKSHOP_FEATURES } from '@/constants/workshop-features'
import { track } from '@/lib/analytics'

export default function WorkshopsIndexPageClient() {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-4">
        Workshops
      </p>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-6">
        Workshops &amp; live programs
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-12 max-w-2xl">
        Public workshops and session formats. For the full program hub (automation, partnerships, and course
        listings), start from the main workshop page.
      </p>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
          Explore our workshops
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {WORKSHOP_FEATURES.map((feature, index) =>
            feature.disabled ? (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.06, duration: 0.4 }}
                className="backdrop-blur-md bg-zinc-50/90 dark:bg-white/5 p-6 rounded-xl border border-zinc-200 dark:border-white/10 relative overflow-hidden cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-zinc-100/50 dark:bg-black/30 z-10" />
                <div className="absolute top-3 right-3 z-20">
                  <span className="bg-purple-500/90 dark:bg-purple-500/80 text-white text-xs px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <div className="relative z-0">
                  <h3 className="text-lg font-bold text-zinc-700 dark:text-white/70 mb-2">{feature.title}</h3>
                  <p className="text-zinc-500 dark:text-white/50 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ) : (
              <Link
                href={feature.link}
                key={feature.title}
                target={feature.link.startsWith('http') ? '_blank' : undefined}
                rel={feature.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block"
                onClick={() => track('workshop_card_click', { workshop: feature.title })}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.06, duration: 0.4 }}
                  className="backdrop-blur-md bg-zinc-50/90 dark:bg-white/5 p-6 rounded-xl border border-zinc-200 dark:border-white/10 hover:border-purple-400/60 dark:hover:border-purple-500/50 transition-all h-full flex flex-col shadow-sm dark:shadow-none"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <p className="text-zinc-600 dark:text-white/70 text-sm mb-3 flex-1">{feature.description}</p>
                  {feature.instructor && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-200/80 dark:bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                        {feature.instructorAvatar ? (
                          <Image
                            src={feature.instructorAvatar}
                            alt={feature.instructor}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-purple-600 dark:text-purple-400/80 text-xs font-medium">
                            {feature.instructor
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-purple-700 dark:text-purple-400/90 text-xs font-medium">
                          with {feature.instructor}
                        </p>
                        {feature.instructorRole && (
                          <p className="text-zinc-500 dark:text-white/50 text-[10px]">{feature.instructorRole}</p>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </Link>
            )
          )}
        </div>
      </motion.section>

      <p className="mt-14 pt-10 border-t border-zinc-200 dark:border-white/10 text-center">
        <Link
          href="/workshop"
          className="text-lg text-zinc-700 dark:text-zinc-300 underline underline-offset-4 hover:no-underline"
        >
          Workshop hub — all programs &amp; formats →
        </Link>
      </p>
    </div>
  )
}
