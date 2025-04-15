'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, BookOpen } from 'lucide-react';
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
    title: "Advanced Website Features",
    description: "Learn about advanced features and customization options for your website.",
    duration: "2.5 hours",
    platforms: ["Squarespace", "Wix", "GitHub"]
  },
  {
    number: 2,
    title: "Analytics & Performance",
    description: "Learn how to track and analyze your website's performance.",
    duration: "2.5 hours",
    platforms: ["Squarespace", "Wix", "GitHub"]
  }
];

export default function Day3Page() {
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
              Day 3: Advanced Features & Analytics
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
              Day 3 Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Day 3 focuses on advanced website features and analytics. You'll learn how to add interactive elements, 
              optimize for search engines, and understand your website's performance.
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

          {/* Homework Section */}
          <Link href="/workshop/own-your-digital-presence/day/3/homework">
            <motion.section 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-space-mono font-bold text-gray-900">
                    Day 3 Homework
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Implement advanced features and set up analytics on your website
                  </p>
                </div>
              </div>
            </motion.section>
          </Link>

          {/* Sessions Grid */}
          <motion.section variants={fadeIn} className="space-y-6">
            {sessions.map((session) => (
              <Link
                key={session.number}
                href={`/workshop/own-your-digital-presence/day/3/session/${session.number}`}
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