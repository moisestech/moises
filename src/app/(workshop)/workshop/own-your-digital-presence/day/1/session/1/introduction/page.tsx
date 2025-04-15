'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Users, Globe, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IntroductionPage() {
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
              Introduction & Participant Intros
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
          {/* Welcome Section */}
          <motion.section
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to the Workshop</h1>
            <p className="text-xl text-indigo-100">
              Let's get to know each other and set the foundation for your digital presence journey.
            </p>
          </motion.section>

          {/* Introduction Form */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-indigo-100">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Introduce Yourself</h2>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="art-practice" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Art Practice
                </label>
                <textarea
                  id="art-practice"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Describe your art practice and what you hope to achieve with your digital presence"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Website (if any)
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Introduction
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-600 mb-6">
              After introducing yourself, we'll explore the fundamentals of digital presence and how to create an effective online portfolio.
            </p>
            <div className="flex items-center gap-2 text-indigo-600">
              <span className="font-medium">Continue to Digital Presence</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 