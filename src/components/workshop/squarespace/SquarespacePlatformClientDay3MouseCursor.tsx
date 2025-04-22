'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Image, MousePointer, Code, Upload, Download, HelpCircle } from 'lucide-react'
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

const steps = [
  {
    title: "Create Cursor Images",
    description: "Design your cursor images in Canva or any image editor. Remember: images must be 30x30 pixels or smaller.",
    icon: Image,
    tips: [
      "Use Canva or any image editor",
      "Keep images under 30x30 pixels",
      "Create both normal and hover states"
    ]
  },
  {
    title: "Resize Images",
    description: "Use an image resizer to ensure your cursor images are exactly 30x30 pixels.",
    icon: Download,
    tips: [
      "Use an online image resizer",
      "Set dimensions to 30x30 pixels",
      "Maintain image quality"
    ]
  },
  {
    title: "Upload to Squarespace",
    description: "Upload your cursor images to the Custom Files section in your site's CSS.",
    icon: Upload,
    tips: [
      "Go to Design > Custom CSS",
      "Click 'Manage Custom Files'",
      "Upload both cursor images"
    ]
  },
  {
    title: "Add CSS Code",
    description: "Add the CSS code to implement your custom cursors.",
    icon: Code,
    tips: [
      "Target the body element",
      "Specify cursor sizes",
      "Set hover states"
    ]
  }
]

const codeExample = `body {
  cursor: url('your-normal-cursor.png') 15 15, auto;
}

body a:hover,
body button:hover {
  cursor: url('your-hover-cursor.png') 15 15, auto;
}`

const faqs = [
  {
    question: "Why can't my cursor images be larger than 30x30 pixels?",
    answer: "Squarespace limits cursor images to 30x30 pixels to ensure optimal performance and compatibility across different browsers and devices."
  },
  {
    question: "Do I need two different cursor images?",
    answer: "Yes, you need two images: one for the normal state and one for the hover state. This allows for visual feedback when users interact with clickable elements."
  },
  {
    question: "Will custom cursors work on mobile devices?",
    answer: "No, custom cursors only work on desktop devices where a mouse cursor is visible. Mobile devices use touch interfaces instead."
  }
]

export default function SquarespacePlatformClientDay3MouseCursor() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/3/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Advanced Layout</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Custom Mouse Cursor Guide
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
            className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Custom Mouse Cursor Guide</h1>
            <p className="text-xl text-blue-100">
              Learn how to add custom mouse cursors to your Squarespace site
            </p>
          </motion.section>

          {/* Implementation Steps */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Implementation Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Code Example */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">CSS Code Example</h2>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <pre className="text-gray-300 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </motion.section>

          {/* FAQs */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 