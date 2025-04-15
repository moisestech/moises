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
    title: "Final Project Showcase",
    description: "Present your completed website and receive feedback from peers and instructors.",
    duration: "3 hours",
    platforms: ["All"]
  },
  {
    number: 2,
    title: "Future Growth & Maintenance",
    description: "Learn strategies for maintaining and growing your digital presence over time.",
    duration: "2 hours",
    platforms: ["All"]
  }
];

export default function Day4Page() {
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
              Day 4: Showcase & Future Growth
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
          <motion.section variants={fadeIn} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
            <h2 className="text-3xl font-space-mono font-bold text-gray-900 mb-4">
              Day 4 Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              The final day of the workshop is dedicated to showcasing your completed websites and 
              learning about long-term digital presence maintenance. Celebrate your achievements and 
              plan for future growth.
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
          <Link href="/workshop/own-your-digital-presence/day/4/homework">
            <motion.section 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-200 hover:border-teal-300 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-space-mono font-bold text-gray-900">
                    Day 4 Homework
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Prepare your final presentation and create a maintenance plan
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
                href={`/workshop/own-your-digital-presence/day/4/session/${session.number}`}
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-200 hover:bg-teal-50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-lg font-medium">
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
                        className="px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-600"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-teal-600 group-hover:text-teal-700">
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