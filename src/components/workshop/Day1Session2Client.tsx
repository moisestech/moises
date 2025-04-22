'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Stars,
  LucideImage,
  FileText,
  Link2,
  ClipboardList,
  FileCheck,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
}

const iconHover = {
  scale: 1.1,
  rotate: 5,
  transition: { duration: 0.2 }
}

const sections = [
  {
    title: "AI & Tools",
    color: "from-pink-500 to-pink-600",
    items: [
      {
        title: "Using AI to Mock Up Layouts",
        href: "/workshop/own-your-digital-presence/day/1/session/2/ai-tools/layout",
        icon: Stars,
        description: "Learn how to use AI to create and visualize website layouts"
      },
      {
        title: "Using AI for Art Assets",
        href: "/workshop/own-your-digital-presence/day/1/session/2/ai-tools/assets",
        icon: LucideImage,
        description: "Generate and optimize visual assets for your website"
      },
      {
        title: "Smart Bios + CVs with AI",
        href: "/workshop/own-your-digital-presence/day/1/session/2/ai-tools/content",
        icon: FileText,
        description: "Create compelling artist statements and professional bios"
      },
      {
        title: "Link Tools + Calendars",
        href: "/workshop/own-your-digital-presence/day/1/session/2/tools",
        icon: Link2,
        description: "Manage your online presence with smart tools"
      }
    ]
  },
  {
    title: "Resources",
    color: "from-indigo-500 to-indigo-600",
    items: [
      {
        title: "Worksheet",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/worksheet",
        icon: ClipboardList,
        description: "Step-by-step guide to plan your website"
      },
      {
        title: "Checklist",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/checklist",
        icon: FileCheck,
        description: "Ensure you have everything you need"
      },
      {
        title: "Templates",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/templates",
        icon: FileText,
        description: "Ready-to-use templates for your content"
      }
    ]
  }
]

export default function Day1Session2Client() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-20" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles className="w-16 h-16 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Session 2: AI & Resources
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover how AI can enhance your website creation process and access valuable resources to streamline your workflow.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {sections.map((section) => (
            <motion.section
              key={section.title}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{section.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item) => (
                  <Link 
                    key={item.title}
                    href={item.href}
                    className="group block"
                  >
                    <motion.div
                      whileHover={cardHover}
                      className={`bg-gradient-to-r ${section.color} rounded-xl p-6 shadow-md transition-all`}
                    >
                      <motion.div
                        whileHover={iconHover}
                        className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4"
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-white/90">{item.description}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </main>
    </div>
  )
} 