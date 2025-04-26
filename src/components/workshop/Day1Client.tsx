'use client'

import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  BookOpen,
  Globe,
  LayoutGrid,
  Sparkles,
  Trophy,
  Rocket
} from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

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

const sessions = [
  {
    number: 1,
    title: "Understanding Digital Presence",
    description: "Learn the fundamentals of digital presence and how websites serve as your online home base.",
    duration: "1 hours",
    topics: [
      "Why digital presence matters for artists",
      "Understanding Web Vitals and performance",
      "Choosing the right platform",
      "Portfolio essentials"
    ],
    platforms: ["Squarespace", "Wix", "GitHub"],
    icon: Globe,
    color: "from-blue-500 to-indigo-500"
  },
  {
    number: 2,
    title: "Content Organization & Customization",
    description: "Learn how to organize your content effectively and customize your website to reflect your artistic style.",
    duration: "1 hour",
    topics: [
      "Content hierarchy and structure",
      "Navigation and user experience",
      "Visual customization",
      "Mobile responsiveness"
    ],
    platforms: ["Squarespace", "Wix", "GitHub"],
    icon: LayoutGrid,
    color: "from-purple-500 to-pink-500"
  }
]

export function Day1Client() {
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
              href="/workshop/own-your-digital-presence/schedule"
              className={`flex items-center transition-colors ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Schedule</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Day 1: Understanding Websites & Digital Presence
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
          {/* Overview */}
          <motion.section 
            variants={fadeIn} 
            className={`rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-900/20 to-indigo-900/20'
                : 'bg-gradient-to-r from-blue-50 to-indigo-50'
            }`}
          >
            <h2 className={`text-3xl font-space-mono font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Day 1 Overview
            </h2>
            <p className={`text-lg max-w-3xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Day 1 focuses on understanding the fundamentals of digital presence and choosing the right platform for your portfolio. 
              You&apos;ll learn about different website building options and get started with your chosen platform.
            </p>
            <div className={`flex items-center gap-4 mt-4 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Virtual Session</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>2.5 hours total</span>
              </div>
            </div>
          </motion.section>

          {/* Sessions Grid */}
          <div className="space-y-8">
            <h2 className={`text-2xl font-space-mono font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Today&apos;s Sessions
            </h2>
            <motion.div variants={fadeIn} className="space-y-6">
              {sessions.map((session) => (
                <Link
                  key={session.number}
                  href={`/workshop/own-your-digital-presence/day/1/session/${session.number}`}
                  className="group block"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`rounded-xl p-6 transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-gray-700 hover:border-indigo-700 hover:bg-indigo-900/20'
                        : 'bg-white border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${session.color} shadow-lg`}>
                        <session.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className={`text-sm font-medium mb-1 ${
                          theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                        }`}>
                          Session {session.number}
                        </div>
                        <h3 className={`text-xl font-space-mono font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {session.title}
                        </h3>
                      </div>
                    </div>
                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{session.description}</p>
                    
                    <div className="mb-6">
                      <div className={`text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>Topics covered:</div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {session.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                              theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                            }`} />
                            <span className={
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {session.platforms.map((platform) => (
                          <span 
                            key={platform}
                            className={`px-3 py-1 rounded-full text-sm ${
                              theme === 'dark'
                                ? 'bg-blue-900/50 text-blue-400'
                                : 'bg-blue-100 text-blue-600'
                            }`}
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                      <div className={`flex items-center gap-2 text-sm group-hover:translate-x-1 transition-all ${
                        theme === 'dark'
                          ? 'text-indigo-400 group-hover:text-indigo-300'
                          : 'text-indigo-600 group-hover:text-indigo-700'
                      }`}>
                        <span>Start Session</span>
                        <span>→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Day 1 Challenge */}
          <motion.section variants={fadeIn}>
            <h2 className={`text-2xl font-space-mono font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Day 1 Challenge
            </h2>
            <Link
              href="/workshop/own-your-digital-presence/day/1/challenge"
              className="block group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-8 transition-colors ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-800/30 hover:border-amber-700'
                    : 'bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-space-mono font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Build Your First Page
                    </h3>
                    <p className={theme === 'dark' ? 'text-gray-300 mt-2' : 'text-gray-600 mt-2'}>
                      Put your learning into practice by creating your first portfolio page
                    </p>
                  </div>
                </div>
                <div className={`flex items-center gap-2 text-sm group-hover:translate-x-1 transition-all ${
                  theme === 'dark'
                    ? 'text-amber-400 group-hover:text-amber-300'
                    : 'text-amber-600 group-hover:text-amber-700'
                }`}>
                  <span>Start Challenge</span>
                  <span>→</span>
                </div>
              </motion.div>
            </Link>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 