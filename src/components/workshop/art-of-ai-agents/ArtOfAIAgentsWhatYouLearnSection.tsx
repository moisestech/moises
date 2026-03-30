'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const hoverScale = {
  scale: 1.05,
  transition: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 10,
  },
}

const BULLETS = [
  'Automate workflows and business processes in n8n without writing complex code',
  'Build AI‑powered automation with n8n AI Agents, OpenAI/Gemini integration, and RAG models',
  'Integrate APIs, Webhooks, and third‑party services for seamless automation',
  'Deploy, self‑host, and scale n8n workflows using Docker and cloud solutions',
  'Debug and optimize n8n workflows for production readiness',
  'Create and monetize AI agents and automation solutions',
]

export function ArtOfAIAgentsWhatYouLearnSection({
  reducedMotion,
}: {
  reducedMotion: boolean
}) {
  return (
    <motion.div className="mx-auto max-w-7xl px-4 py-16" variants={fadeIn}>
      <h2 className="mb-8 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        What You&apos;ll Learn
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BULLETS.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm neon-border dark:border-transparent dark:bg-[#0a0a0f]/50 dark:shadow-none"
            variants={fadeIn}
            whileHover={reducedMotion ? {} : hoverScale}
          >
            <p className="text-zinc-700 dark:text-zinc-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
