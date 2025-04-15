'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, RefreshCw, TrendingUp, Shield, Zap } from 'lucide-react';
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
    title: "Content Strategy",
    description: "Learn how to plan and schedule content updates to keep your website fresh and engaging",
    icon: RefreshCw,
    keyPoints: [
      "Content calendar creation",
      "Seasonal updates planning",
      "News and announcements",
      "Portfolio updates"
    ]
  },
  {
    title: "Growth Strategies",
    description: "Explore techniques to expand your website's reach and impact over time",
    icon: TrendingUp,
    keyPoints: [
      "Performance optimization",
      "Social media integration",
      "Email marketing",
      "Analytics tracking"
    ]
  },
  {
    title: "Technical Maintenance",
    description: "Understand the essential technical tasks to keep your website running smoothly",
    icon: Shield,
    keyPoints: [
      "Security updates",
      "Performance optimization",
      "Backup procedures",
      "Domain management"
    ]
  },
  {
    title: "Feature Roadmap",
    description: "Plan and prioritize new features and improvements for your website",
    icon: Zap,
    keyPoints: [
      "Feature prioritization",
      "User feedback integration",
      "Resource planning",
      "Timeline management"
    ]
  }
];

export default function Day4Session2Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/4"
              className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Day 4</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Session 2: Future Growth & Maintenance
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
          <motion.section variants={fadeIn} className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-3xl font-space-mono font-bold text-gray-900 mb-4">
              Future Growth & Maintenance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Learn strategies for maintaining and growing your digital presence over time. 
              This session will help you create a sustainable plan for your website's future.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>In-Person Session</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>2 hours total</span>
              </div>
            </div>
          </motion.section>

          {/* Topics Grid */}
          <motion.section variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-200 hover:bg-teal-50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-600">
                    <topic.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-space-mono font-bold text-gray-900">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.section>

          {/* Maintenance Checklist */}
          <motion.section variants={fadeIn} className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-space-mono font-bold text-gray-900 mb-4">
              Monthly Maintenance Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Content Updates</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                    <span>Review and update portfolio items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                    <span>Check and update contact information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                    <span>Update news and announcements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Technical Tasks</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                    <span>Run security updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                    <span>Check website performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                    <span>Backup website data</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 