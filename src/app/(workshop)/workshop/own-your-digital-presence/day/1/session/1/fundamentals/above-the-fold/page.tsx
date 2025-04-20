'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Eye, Layout, MessageSquare, Share2 } from 'lucide-react'
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

const principles = [
  {
    icon: Eye,
    title: "First Impressions Matter",
    description: "Viewers form opinions within 5 seconds. Your above-the-fold content should immediately communicate who you are and what you do."
  },
  {
    icon: Layout,
    title: "Strategic Layout",
    description: "Choose between a single hero image, grid layout, or video banner based on your work and message."
  },
  {
    icon: MessageSquare,
    title: "Clear Messaging",
    description: "Include your name, discipline, and a concise artist statement or introduction."
  },
  {
    icon: Share2,
    title: "Call to Action",
    description: "Make your primary action obvious - whether it's viewing work, contacting you, or exploring your portfolio."
  }
]

export default function AboveTheFoldPage() {
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
              Above-the-Fold Principles
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
              Above-the-Fold Principles
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              The &quot;above the fold&quot; section is crucial for your website&apos;s success. It&apos;s your digital first impression and should immediately communicate your artistic identity.
            </p>
          </motion.section>

          {/* Key Principles */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-2xl font-space-mono font-bold text-gray-900">
              Key Principles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle) => (
                <motion.div
                  key={principle.title}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <principle.icon className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-space-mono font-bold text-gray-900">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Interactive Exercise */}
          <motion.section variants={fadeIn} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-space-mono font-bold text-gray-900 mb-6">
              Interactive Exercise
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyze Your Current Site</h3>
                  <p className="text-gray-600">What do visitors see first? Is it clear who you are and what you do?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Hero Element</h3>
                  <p className="text-gray-600">Select one key artwork, video, or statement to feature prominently.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Write Your Elevator Pitch</h3>
                  <p className="text-gray-600">Craft a 2-3 sentence introduction that captures your artistic identity.</p>
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
              Now that you understand above-the-fold principles, let's explore how to choose the right pages for your website.
            </p>
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/key-pages"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
            >
              Continue to Choosing Key Pages
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 