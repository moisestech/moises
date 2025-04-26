'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Globe, 
  Laptop,
  LayoutGrid,
  Sparkles,
  Trophy,
  Clock,
  Calendar,
  BookOpen,
  Link2
} from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import DecorativeDivider from '@/components/common/DecorativeDivider'

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
  y: -5,
  transition: { duration: 0.2 }
}

const topics = [
  {
    title: "Digital Presence Fundamentals",
    description: "Understand why having a strong online presence is crucial for artists",
    icon: Globe,
    color: "from-blue-500 to-indigo-500",
    points: [
      "The role of websites in an artist's career",
      "Building your digital identity",
      "Connecting with your audience online",
      "Professional presentation strategies"
    ]
  },
  {
    title: "Platform Selection",
    description: "Learn about different website platforms and choose the right one for you",
    icon: Laptop,
    color: "from-purple-500 to-pink-500",
    points: [
      "Comparing popular website platforms",
      "Understanding platform features",
      "Cost and maintenance considerations",
      "Platform-specific advantages"
    ]
  },
  {
    title: "Website Structure",
    description: "Plan your website's organization and navigation",
    icon: LayoutGrid,
    color: "from-green-500 to-teal-500",
    points: [
      "Essential pages and sections",
      "Navigation best practices",
      "Content hierarchy",
      "Mobile-friendly structure"
    ]
  }
]

const resources = [
  {
    title: "Platform Guides",
    description: "Step-by-step guides for each supported platform",
    link: "/resources/platform-guides",
    icon: BookOpen
  },
  {
    title: "Example Sites",
    description: "Curated collection of artist portfolio websites",
    link: "/resources/examples",
    icon: Link2
  }
]

export function Day1Session1Client() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1"
              className={`flex items-center transition-colors ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Day 1</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Session 1: Understanding Digital Presence
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Session Overview */}
          <motion.section 
            variants={fadeIn} 
            className={`rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-900/20 to-indigo-900/20'
                : 'bg-gradient-to-r from-blue-50 to-indigo-50'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className={`text-3xl font-space-mono font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Session Overview
                </h2>
                <div className={`flex items-center gap-4 mt-2 text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>1 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Part 1 of Day 1</span>
                  </div>
                </div>
              </div>
            </div>
            <p className={`text-lg max-w-3xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              In this session, we'll explore the fundamentals of digital presence and help you choose the right platform for your portfolio website. You'll learn about different options available and how to start building your online presence.
            </p>
          </motion.section>

          <DecorativeDivider
            icon={Sparkles}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Topics */}
          <motion.section variants={fadeIn}>
            <h2 className={`text-2xl font-space-mono font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              What We&apos;ll Cover
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <motion.div
                  key={topic.title}
                  whileHover={cardHover}
                  className={`rounded-xl p-6 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border border-gray-700'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${topic.color} shadow-lg mb-4`}>
                    <topic.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{topic.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{topic.description}</p>
                  <ul className="space-y-2">
                    {topic.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={BookOpen}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
              via: theme === 'dark' ? 'rgba(5, 150, 105, 0.3)' : 'rgba(5, 150, 105, 0.2)',
              to: theme === 'dark' ? 'rgba(4, 120, 87, 0.3)' : 'rgba(4, 120, 87, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-emerald-400/50' : 'text-emerald-500/50'}
          />

          {/* Resources */}
          <motion.section variants={fadeIn}>
            <h2 className={`text-2xl font-space-mono font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Session Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.link}
                  className="group block"
                >
                  <motion.div
                    whileHover={cardHover}
                    className={`rounded-xl p-6 transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-gray-700 hover:border-emerald-700'
                        : 'bg-white border border-gray-200 hover:border-emerald-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        theme === 'dark'
                          ? 'bg-emerald-900/50 text-emerald-400'
                          : 'bg-emerald-100 text-emerald-600'
                      }`}>
                        <resource.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{resource.title}</h3>
                        <p className={`mt-1 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>{resource.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 