'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
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

const sessions = [
  {
    number: 1,
    title: "Hands-on Website Building",
    description: "Put your knowledge into practice with guided website building sessions.",
    duration: "2.5 hours",
    platforms: ["Squarespace", "Wix", "GitHub"]
  },
  {
    number: 2,
    title: "Advanced Customization & Launch",
    description: "Learn advanced customization techniques and prepare your website for launch.",
    duration: "2.5 hours",
    platforms: ["Squarespace", "Wix", "GitHub"]
  }
];

export default function Day2Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/schedule"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Schedule</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Day 2: Hands-on Website Creation
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
              Day 2 Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Day 2 is all about hands-on practice. You'll build your website using your chosen platform, 
              learn advanced customization techniques, and prepare your site for launch.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>In-Person Session</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 hours total</span>
              </div>
            </div>
          </motion.section>

          {/* Sessions Grid */}
          <motion.section variants={fadeIn} className="space-y-6">
            {sessions.map((session) => (
              <Link
                key={session.number}
                href={`/workshop/own-your-digital-presence/day/2/session/${session.number}`}
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg font-medium">
                      {session.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-space-mono font-bold text-gray-900">
                        {session.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{session.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{session.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {session.platforms.map((platform) => (
                      <span 
                        key={platform}
                        className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-indigo-600 group-hover:text-indigo-700">
                    <span>View session details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 