'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  LayoutGrid, 
  AlignCenter, 
  AlignLeft, 
  AlignRight, 
  AlignJustify,
  Space,
  Type,
  Contrast,
  Scale,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Grid,
  Columns,
  SplitSquareHorizontal,
  List,
  Layout,
  Smartphone,
  Eye,
  Accessibility,
  Palette,
  TypeIcon,
  SmartphoneIcon,
  FileText,
  Image,
  GalleryHorizontal,
  Split,
  Sparkles,
  Settings
} from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import DecorativeDivider from '@/components/common/DecorativeDivider'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const principles = [
  {
    title: "Visual Hierarchy",
    description: "Guide visitors through your content by creating clear visual paths and emphasizing important elements",
    icon: Scale,
    details: [
      "Use size and spacing to indicate importance",
      "Create clear visual paths for the eye to follow",
      "Group related elements together",
      "Use contrast to highlight key information"
    ],
    visualization: (
      <div className="relative w-full h-48 bg-gray-100 rounded-lg p-4">
        <motion.div 
          className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500 rounded-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-400 rounded-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
        />
        <motion.div 
          className="absolute top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-300 rounded-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
        />
      </div>
    )
  },
  {
    title: "Grid Systems",
    description: "Organize content effectively using consistent spacing and alignment",
    icon: Grid,
    details: [
      "Use consistent column widths",
      "Maintain proper spacing between elements",
      "Align elements to create visual order",
      "Break the grid intentionally for emphasis"
    ],
    visualization: (
      <div className="relative w-full h-48 bg-gray-100 rounded-lg p-4">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-3/4 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
    )
  },
  {
    title: "White Space",
    description: "Use space effectively to create visual separation and improve readability",
    icon: Space,
    details: [
      "Give content room to breathe",
      "Create visual separation between sections",
      "Use margins and padding consistently",
      "Balance filled and empty spaces"
    ],
    visualization: (
      <div className="relative w-full h-48 bg-gray-100 rounded-lg p-4">
        <motion.div 
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-purple-500 rounded-full"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-2/3 w-12 h-12 bg-purple-500 rounded-full"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    )
  },
  {
    title: "Responsive Design",
    description: "Ensure your layout works well across all devices and screen sizes",
    icon: Smartphone,
    details: [
      "Test layouts on different devices",
      "Use flexible grid systems",
      "Consider touch interactions",
      "Optimize for different screen sizes"
    ],
    visualization: (
      <div className="relative w-full h-48 bg-gray-100 rounded-lg p-4">
        <motion.div 
          className="absolute top-1/2 left-1/3 w-20 h-20 bg-red-500 rounded-lg"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-2/3 w-20 h-20 bg-blue-500 rounded-lg"
          animate={{ 
            scale: [1, 0.8, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    )
  },
  {
    title: "Accessibility",
    description: "Make your layout inclusive and usable for everyone",
    icon: Accessibility,
    details: [
      "Ensure proper contrast ratios",
      "Maintain readable text sizes",
      "Use semantic HTML structure",
      "Include proper alt text"
    ],
    visualization: (
      <div className="relative w-full h-48 bg-gray-100 rounded-lg p-4">
        <motion.div 
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 rounded-lg"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-2/3 w-16 h-16 bg-yellow-400 rounded-lg"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    )
  }
]

const layoutPatterns = [
  {
    title: "Single Column",
    description: "Ideal for focused, linear content presentation",
    icon: FileText,
    details: [
      "Artist statements and bios",
      "Long-form content",
      "Process documentation",
      "Exhibition essays"
    ],
    visualization: (
      <div className="relative w-full h-48 bg-gray-100 rounded-lg p-4">
        <motion.div 
          className="absolute top-4 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-indigo-500 rounded-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div 
            className="absolute top-4 left-4 w-1/2 h-8 bg-indigo-400 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-16 left-4 w-3/4 h-8 bg-indigo-400 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="absolute top-28 left-4 w-2/3 h-8 bg-indigo-400 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>
    )
  },
  {
    title: "Grid Layout",
    description: "Perfect for showcasing multiple items in an organized way",
    icon: GalleryHorizontal,
    details: [
      "Portfolio galleries",
      "Project showcases",
      "Exhibition documentation",
      "Process work"
    ],
    visualization: (
      <div className="relative w-full h-48 bg-gray-100 rounded-lg p-4">
        <motion.div 
          className="absolute top-4 left-1/4 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-4 left-1/2 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-4 left-3/4 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-24 left-1/4 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.25 }}
        />
        <motion.div 
          className="absolute top-24 left-1/2 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.75 }}
        />
        <motion.div 
          className="absolute top-24 left-3/4 w-16 h-16 bg-green-500 rounded-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.25 }}
        />
      </div>
    )
  },
  {
    title: "Split Screen",
    description: "Great for comparing or combining different types of content",
    icon: Split,
    details: [
      "Image and text combinations",
      "Before/after comparisons",
      "Process documentation",
      "Project highlights"
    ],
    visualization: (
      <div className="relative w-full h-48 bg-gray-100 rounded-lg p-4">
        <motion.div 
          className="absolute top-4 left-4 w-1/2 h-40 bg-purple-500 rounded-lg"
          animate={{ 
            scale: [1, 1.05, 1],
            x: [0, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="absolute top-4 left-4 w-3/4 h-8 bg-purple-400 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.div 
          className="absolute top-4 right-4 w-1/2 h-40 bg-purple-500 rounded-lg"
          animate={{ 
            scale: [1, 1.05, 1],
            x: [0, 5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="absolute top-4 left-4 w-3/4 h-8 bg-purple-400 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>
    )
  }
]

export default function Day1Session1FundamentalsLayout() {
  const { theme } = useTheme()
  const [activePrinciple, setActivePrinciple] = useState(0)
  const [activePattern, setActivePattern] = useState(0)
  const [showPatterns, setShowPatterns] = useState(false)

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 border-gray-800' 
          : 'bg-white/80 border-gray-200'
      } backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals"
              className={`flex items-center ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Fundamentals</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Layout Fundamentals
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
          {/* Header */}
          <motion.section
            variants={fadeIn}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-indigo-900 via-purple-900 to-pink-900'
                : 'from-indigo-500 via-purple-500 to-pink-500'
            }`}>
              <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-20" />
            </div>
            <div className="relative p-8 text-white">
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
                <LayoutGrid className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Layout Fundamentals
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Master the core principles of effective layout design
              </p>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Grid}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Toggle between Principles and Patterns */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <motion.button
              className={`px-4 py-2 rounded-lg transition-colors ${
                !showPatterns
                  ? theme === 'dark'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-500 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setShowPatterns(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Principles
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg transition-colors ${
                showPatterns
                  ? theme === 'dark'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-500 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setShowPatterns(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Patterns
            </motion.button>
          </motion.div>

          {/* Navigation */}
          <motion.section variants={fadeIn} className="flex flex-wrap justify-center gap-4">
            {(showPatterns ? layoutPatterns : principles).map((item, index) => (
              <motion.button
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  (showPatterns ? activePattern : activePrinciple) === index
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-500 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => showPatterns ? setActivePattern(index) : setActivePrinciple(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </motion.button>
            ))}
          </motion.section>

          {/* Active Content */}
          <AnimatePresence mode="wait">
            <motion.section
              key={showPatterns ? `pattern-${activePattern}` : `principle-${activePrinciple}`}
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <div className={`rounded-xl shadow-lg p-6 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  }`}>
                    {React.createElement(
                      (showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].icon,
                      { 
                        className: theme === 'dark' ? 'w-6 h-6 text-indigo-400' : 'w-6 h-6 text-indigo-600',
                        key: `icon-${showPatterns ? activePattern : activePrinciple}`
                      }
                    )}
                  </div>
                  <h2 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {(showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].title}
                  </h2>
                </div>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } mb-6`}>
                  {(showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].description}
                </p>
                <ul className={`list-disc list-inside ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } space-y-2 mb-6`}>
                  {(showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                {(showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].visualization}
              </div>
            </motion.section>
          </AnimatePresence>

          <DecorativeDivider
            icon={Settings}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
              via: theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.2)',
              to: theme === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-pink-400/50' : 'text-pink-500/50'}
          />

          {/* Additional Tips */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Pro Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>For Artists</h3>
                <ul className="space-y-3">
                  <li className={`flex items-start gap-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`} />
                    Let your work breathe with ample white space
                  </li>
                  <li className={`flex items-start gap-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`} />
                    Use consistent spacing between portfolio items
                  </li>
                  <li className={`flex items-start gap-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`} />
                    Consider the visual hierarchy of your portfolio
                  </li>
                </ul>
              </div>
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>For Designers</h3>
                <ul className="space-y-3">
                  <li className={`flex items-start gap-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`} />
                    Maintain a consistent grid system
                  </li>
                  <li className={`flex items-start gap-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`} />
                    Use modular scales for typography
                  </li>
                  <li className={`flex items-start gap-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`} />
                    Test layouts across different devices
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Sparkles}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              via: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
              to: theme === 'dark' ? 'rgba(244, 63, 94, 0.3)' : 'rgba(244, 63, 94, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-purple-400/50' : 'text-purple-500/50'}
          />
        </motion.div>
      </main>
    </div>
  )
} 