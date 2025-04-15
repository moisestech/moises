'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, Paintbrush, ArrowUpRight, Layout, Code, Globe } from 'lucide-react';
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

const topics = [
  {
    title: "Advanced Customization",
    description: "Learn advanced techniques to customize your website's design and functionality.",
    icon: Paintbrush,
    color: "blue",
    items: [
      "Custom CSS and styling",
      "Advanced layout techniques",
      "Interactive elements",
      "Animation and transitions"
    ]
  },
  {
    title: "Launch Preparation",
    description: "Prepare your website for launch with essential optimizations and checks.",
    icon: ArrowUpRight,
    color: "purple",
    items: [
      "Performance optimization",
      "Cross-browser testing",
      "Mobile responsiveness",
      "Launch checklist"
    ]
  }
];

export default function Session2Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/2"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Day 2</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Session 2: Advanced Customization & Launch
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
          {/* Overview */}
          <motion.section variants={fadeIn} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-3xl font-space-mono font-bold text-gray-900 mb-4">
              Session Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              In this session, we&apos;ll focus on advanced website customization techniques and prepare your site for launch.
              You&apos;ll learn how to add unique styling, optimize performance, and ensure your site is ready for visitors.
            </p>
          </motion.section>

          {/* Topics Grid */}
          <motion.section variants={fadeIn} className="grid md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <div 
                key={topic.title}
                className={`bg-white rounded-xl p-6 border border-gray-200 hover:border-${topic.color}-200 hover:bg-${topic.color}-50 transition-colors`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <topic.icon className={`h-6 w-6 text-${topic.color}-600`} />
                  <h3 className="text-xl font-space-mono font-bold text-gray-900">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {topic.description}
                </p>
                <ul className="space-y-2">
                  {topic.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`text-${topic.color}-500 mt-1`}>•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.section>

          {/* Resources Section */}
          <motion.section variants={fadeIn} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h2 className="text-2xl font-space-mono font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link 
                href="/workshop/own-your-digital-presence/day/2/session/2/customization"
                className="group block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Layout className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-medium text-gray-900">Design Guide</h3>
                </div>
                <p className="text-sm text-gray-600">Advanced design techniques and best practices</p>
              </Link>
              <Link 
                href="/workshop/own-your-digital-presence/day/2/session/2/optimization"
                className="group block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-medium text-gray-900">Optimization Tips</h3>
                </div>
                <p className="text-sm text-gray-600">Performance optimization techniques</p>
              </Link>
              <Link 
                href="/workshop/own-your-digital-presence/day/2/session/2/launch"
                className="group block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-medium text-gray-900">Launch Checklist</h3>
                </div>
                <p className="text-sm text-gray-600">Pre-launch checklist and final steps</p>
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 