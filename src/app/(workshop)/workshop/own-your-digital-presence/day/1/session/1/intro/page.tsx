'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Globe, MessageSquare, Users } from 'lucide-react'
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

const keyPoints = [
  {
    icon: Globe,
    title: "Public Digital Presence",
    description: "We're building a professional online space that represents your artistic identity and makes your work accessible to a global audience."
  },
  {
    icon: MessageSquare,
    title: "Storytelling & Clarity",
    description: "Learn how to present your work with clear narratives and professional presentation that engages viewers and communicates your artistic vision."
  },
  {
    icon: Users,
    title: "Professional Hub",
    description: "Create a space where curators, collectors, and collaborators can discover your work, understand your practice, and connect with you."
  }
]

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Welcome & Workshop Overview
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-8"
        >
          {/* Introduction */}
          <motion.section variants={fadeIn} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h1 className="text-3xl font-space-mono font-bold text-gray-900 mb-4">
              Welcome to the Workshop
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Over the next four days, we'll help you build a professional digital presence that effectively showcases your work and connects you with your audience.
            </p>
          </motion.section>

          {/* Key Points */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-2xl font-space-mono font-bold text-gray-900">
              What We're Building
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {keyPoints.map((point) => (
                <motion.div
                  key={point.title}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <point.icon className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-space-mono font-bold text-gray-900">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Workshop Structure */}
          <motion.section variants={fadeIn} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-space-mono font-bold text-gray-900 mb-6">
              Workshop Structure
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 1: Strategy & Planning</h3>
                  <p className="text-gray-600">Virtual session focusing on digital presence fundamentals and website architecture.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 2 & 3: Hands-on Building</h3>
                  <p className="text-gray-600">In-person sessions for website creation, customization, and content organization.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 4: Final Touches & Launch</h3>
                  <p className="text-gray-600">Virtual session for final adjustments, testing, and preparing for launch.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section variants={fadeIn} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-space-mono font-bold text-gray-900 mb-4">
              Next Steps
            </h2>
            <p className="text-gray-600 mb-6">
              Let's begin by understanding why digital presence matters for artists today.
            </p>
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/digital-presence"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
            >
              Continue to Digital Presence
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 