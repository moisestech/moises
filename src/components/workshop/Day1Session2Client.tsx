'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Globe,
  Layout,
  FileText,
  Link2,
  ClipboardList,
  FileCheck,
  Sparkles,
  Code2,
  Palette,
  Stars,
  Settings,
  BookOpen
} from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { PlatformIcon } from './PlatformIcons'

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
    title: "Platform Guides",
    color: "from-indigo-500 to-indigo-600",
    items: [
      {
        title: "Squarespace Guide",
        href: "/workshop/own-your-digital-presence/day/1/session/2/platforms/squarespace",
        platform: "squarespace",
        description: "Build your site with Squarespace's intuitive tools"
      },
      {
        title: "Wix Guide",
        href: "/workshop/own-your-digital-presence/day/1/session/2/platforms/wix",
        platform: "wix",
        description: "Create your website using Wix's drag-and-drop builder"
      },
      {
        title: "GitHub Pages Guide",
        href: "/workshop/own-your-digital-presence/day/1/session/2/platforms/github",
        platform: "github",
        description: "Host your site with GitHub Pages"
      }
    ]
  },
  {
    title: "Essential Tools",
    color: "from-purple-500 to-purple-600",
    items: [
      {
        title: "Design Tools",
        href: "/workshop/own-your-digital-presence/day/1/session/2/tools/design",
        icon: Palette,
        description: "Essential design tools for your website"
      },
      {
        title: "Development Tools",
        href: "/workshop/own-your-digital-presence/day/1/session/2/tools/development",
        icon: Code2,
        description: "Useful development tools and extensions"
      },
      {
        title: "Productivity Tools",
        href: "/workshop/own-your-digital-presence/day/1/session/2/tools/productivity",
        icon: Settings,
        description: "Tools to streamline your workflow"
      }
    ]
  },
  {
    title: "Resources",
    color: "from-pink-500 to-pink-600",
    items: [
      {
        title: "Getting Started Guide",
        href: "/workshop/own-your-digital-presence/day/1/session/2/resources/guide",
        icon: BookOpen,
        description: "Comprehensive guide to begin your journey"
      },
      {
        title: "Platform Checklist",
        href: "/workshop/own-your-digital-presence/day/1/session/2/resources/checklist",
        icon: FileCheck,
        description: "Essential items for each platform"
      },
      {
        title: "Templates & Assets",
        href: "/workshop/own-your-digital-presence/day/1/session/2/resources/templates",
        icon: FileText,
        description: "Ready-to-use templates and resources"
      }
    ]
  }
]

export default function Day1Session2Client() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <header className="relative h-96 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${
          theme === 'dark'
            ? 'from-indigo-900 via-purple-900 to-pink-900'
            : 'from-indigo-500 via-purple-500 to-pink-500'
        }`}>
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
              <Globe className="w-16 h-16 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Session 2: Platform Guides
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Learn how to build your website using popular platforms and access essential resources.
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
              className={`rounded-2xl shadow-xl p-8 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h2 className={`text-3xl font-bold mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{section.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
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
                        {'platform' in item ? (
                          <PlatformIcon platform={item.platform} size={24} />
                        ) : (
                          <item.icon className="w-6 h-6 text-white" />
                        )}
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