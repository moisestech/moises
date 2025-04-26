'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Gauge,
  Laptop,
  RefreshCw,
  Network,
  Settings,
  MonitorSmartphone,
  Zap,
  Layout,
  ChevronRight,
  KeyRound,
  Command,
  Keyboard,
  ExternalLink,
  Image as ImageIcon,
  FileText,
  Globe
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

const steps = [
  {
    title: "Open Chrome DevTools",
    description: "Access Chrome's built-in performance tools:",
    icon: Laptop,
    color: "from-blue-500 to-indigo-500",
    shortcuts: [
      {
        os: "Mac",
        key: "⌘ + ⌥ + I",
        description: "Command + Option + I"
      },
      {
        os: "Windows",
        key: "Ctrl + Shift + I",
        description: "Control + Shift + I"
      },
      {
        os: "Alternative",
        key: "Right Click → Inspect",
        description: "Use mouse context menu"
      }
    ]
  },
  {
    title: "Go to Performance Tab",
    description: "Switch to the Performance tab to monitor metrics",
    icon: Gauge,
    color: "from-purple-500 to-pink-500",
    shortcuts: [
      {
        os: "Mac",
        key: "⌘ + Shift + P",
        description: "Open Command Menu, type 'Performance'"
      },
      {
        os: "Windows",
        key: "Ctrl + Shift + P",
        description: "Open Command Menu, type 'Performance'"
      },
      {
        os: "Alternative",
        key: "Click 'Performance'",
        description: "Click the Performance tab in DevTools"
      }
    ]
  },
  {
    title: "Record Performance",
    description: "Record your site's performance metrics",
    icon: RefreshCw,
    color: "from-green-500 to-teal-500",
    shortcuts: [
      {
        os: "Start Recording",
        key: "Click Record ⏺",
        description: "Click the record button (circle) in Performance panel"
      },
      {
        os: "Refresh Page",
        key: "⌘/Ctrl + R",
        description: "Refresh the page while recording"
      },
      {
        os: "Stop Recording",
        key: "Click Stop ⏹",
        description: "Click stop when page is fully loaded"
      }
    ]
  }
]

const artistFocusPoints = [
  {
    title: "Image Loading",
    description: "Check how quickly your artwork images load",
    icon: ImageIcon,
    color: "from-amber-500 to-orange-500",
    tips: [
      "Optimize image sizes for web",
      "Use appropriate image formats",
      "Implement lazy loading",
      "Consider using thumbnails"
    ]
  },
  {
    title: "Gallery Performance",
    description: "Ensure smooth gallery browsing experience",
    icon: Layout,
    color: "from-blue-500 to-indigo-500",
    tips: [
      "Test with multiple images",
      "Check scrolling smoothness",
      "Monitor memory usage",
      "Optimize transitions"
    ]
  },
  {
    title: "Content Loading",
    description: "Measure how fast your content appears",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    tips: [
      "Prioritize visible content",
      "Optimize text loading",
      "Check font loading",
      "Monitor layout shifts"
    ]
  }
]

const metrics = [
  {
    name: "Largest Contentful Paint (LCP)",
    icon: Layout,
    description: "Time until your largest artwork or content is visible",
    good: "2.5s or less",
    needsImprovement: "2.5s - 4s",
    poor: "Over 4s",
    color: "from-green-500 to-emerald-500",
    artistContext: "Critical for portfolio sites where artwork needs to load quickly"
  },
  {
    name: "First Input Delay (FID)",
    icon: Zap,
    description: "How quickly your site responds to interactions",
    good: "100ms or less",
    needsImprovement: "100ms - 300ms",
    poor: "Over 300ms",
    color: "from-blue-500 to-indigo-500",
    artistContext: "Important for interactive galleries and portfolio navigation"
  },
  {
    name: "Cumulative Layout Shift (CLS)",
    icon: MonitorSmartphone,
    description: "Visual stability of your page",
    good: "0.1 or less",
    needsImprovement: "0.1 - 0.25",
    poor: "Over 0.25",
    color: "from-purple-500 to-pink-500",
    artistContext: "Ensures your artwork and content stays where it should be"
  }
]

export function Day1Session1IntroAnalysisClient() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/introduction"
              className={`flex items-center transition-colors ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Introduction</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Website Analysis for Artists
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
          {/* Introduction */}
          <motion.section
            variants={fadeIn}
            className="relative overflow-hidden rounded-2xl p-8 text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-20" />
            </div>
            <div className="relative">
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
                <Gauge className="w-16 h-16 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                Analyzing Your Portfolio
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Learn how to check your website's performance to ensure your artwork shines online
              </p>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Settings}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Artist Focus Points */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              What to Look For
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {artistFocusPoints.map((point) => (
                <motion.div
                  key={point.title}
                  whileHover={cardHover}
                  className={`rounded-xl p-6 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${point.color} mb-4`}>
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{point.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{point.description}</p>
                  
                  <ul className="space-y-2">
                    {point.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Laptop}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
              via: theme === 'dark' ? 'rgba(5, 150, 105, 0.3)' : 'rgba(5, 150, 105, 0.2)',
              to: theme === 'dark' ? 'rgba(4, 120, 87, 0.3)' : 'rgba(4, 120, 87, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-emerald-400/50' : 'text-emerald-500/50'}
          />

          {/* Step by Step Guide */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              How to Check Performance
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  whileHover={cardHover}
                  className={`relative rounded-xl p-6 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{step.title}</h3>
                      <p className={`mb-4 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{step.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        {step.shortcuts.map((shortcut) => (
                          <div
                            key={shortcut.os}
                            className={`p-4 rounded-lg ${
                              theme === 'dark'
                                ? 'bg-gray-800'
                                : 'bg-white'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Keyboard className={`w-4 h-4 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              }`} />
                              <span className={`text-sm font-medium ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                              }`}>{shortcut.os}</span>
                            </div>
                            <div className={`inline-flex items-center px-2 py-1 rounded ${
                              theme === 'dark'
                                ? 'bg-gray-900 text-gray-300'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              <KeyRound className="w-3 h-3 mr-1" />
                              <span className="text-sm font-mono">{shortcut.key}</span>
                            </div>
                            <p className={`mt-2 text-sm ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>{shortcut.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Gauge}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
              via: theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.2)',
              to: theme === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-pink-400/50' : 'text-pink-500/50'}
          />

          {/* Key Metrics */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Understanding the Metrics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {metrics.map((metric) => (
                <motion.div
                  key={metric.name}
                  whileHover={cardHover}
                  className={`rounded-xl p-6 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color} mb-4`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{metric.name}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{metric.description}</p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className={`flex items-center gap-2 ${
                        theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`}>
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm">Good: {metric.good}</span>
                      </div>
                      <div className={`flex items-center gap-2 ${
                        theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                      }`}>
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="text-sm">Needs Improvement: {metric.needsImprovement}</span>
                      </div>
                      <div className={`flex items-center gap-2 ${
                        theme === 'dark' ? 'text-red-400' : 'text-red-600'
                      }`}>
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-sm">Poor: {metric.poor}</span>
                      </div>
                    </div>
                    
                    <div className={`mt-4 p-4 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}>
                      <h4 className={`text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>Why it matters for artists:</h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{metric.artistContext}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Additional Resources */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="https://pagespeed.web.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 rounded-xl transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-700/50 hover:bg-gray-700'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                  <h3 className={`text-xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>PageSpeed Insights</h3>
                </div>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Get detailed performance analysis and recommendations for your portfolio site
                </p>
                <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  <span>Try it now</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </a>

              <div className={`p-6 rounded-xl ${
                theme === 'dark'
                  ? 'bg-gray-700/50'
                  : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <Settings className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                  <h3 className={`text-xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Chrome DevTools</h3>
                </div>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  All Web Vitals features are now integrated directly into Chrome DevTools Performance panel
                </p>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  No additional extensions needed
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 