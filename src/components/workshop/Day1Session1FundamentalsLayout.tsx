'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Split
} from 'lucide-react'
import { useState } from 'react'

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
  const [activePrinciple, setActivePrinciple] = useState(0)
  const [activePattern, setActivePattern] = useState(0)
  const [showPatterns, setShowPatterns] = useState(false)

  return (
    <div className="min-h-screen bg-white">
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
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Layout Fundamentals</h1>
            <p className="text-xl text-gray-600">
              Master the core principles of effective layout design
            </p>
          </motion.section>

          {/* Toggle between Principles and Patterns */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <motion.button
              className={`px-4 py-2 rounded-lg transition-colors ${
                !showPatterns
                  ? 'bg-blue-500 text-white'
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
                  ? 'bg-blue-500 text-white'
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
                    ? 'bg-blue-500 text-white'
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
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-blue-100">
                    {React.createElement(
                      (showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].icon,
                      { 
                        className: "w-6 h-6 text-blue-600",
                        key: `icon-${showPatterns ? activePattern : activePrinciple}`
                      }
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {(showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {(showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].description}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  {(showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                {(showPatterns ? layoutPatterns : principles)[showPatterns ? activePattern : activePrinciple].visualization}
              </div>
            </motion.section>
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  )
} 