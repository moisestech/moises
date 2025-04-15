'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Users, MessageSquare, Star } from 'lucide-react';
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

const agenda = [
  {
    time: "6:00 PM",
    title: "Welcome & Overview",
    description: "Introduction to the showcase session and presentation guidelines",
    duration: "15 minutes"
  },
  {
    time: "6:15 PM",
    title: "Participant Presentations",
    description: "Each participant presents their website (5 minutes each)",
    duration: "2 hours"
  },
  {
    time: "8:15 PM",
    title: "Feedback & Discussion",
    description: "Group discussion and feedback session",
    duration: "45 minutes"
  }
];

const presentationTips = [
  {
    title: "Structure Your Presentation",
    description: "Start with your website's purpose, showcase key features, and end with future plans",
    icon: Star
  },
  {
    title: "Engage Your Audience",
    description: "Make eye contact, speak clearly, and encourage questions",
    icon: Users
  },
  {
    title: "Handle Feedback",
    description: "Listen actively, take notes, and ask clarifying questions",
    icon: MessageSquare
  }
];

export default function Day4Session1Page() {
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
              Session 1: Final Project Showcase
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
              Final Project Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Present your completed website to the group, receive feedback, and celebrate your achievements. 
              This is your opportunity to showcase your work and learn from others' approaches.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>In-Person Session</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>3 hours total</span>
              </div>
            </div>
          </motion.section>

          {/* Agenda */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h3 className="text-2xl font-space-mono font-bold text-gray-900">
              Session Agenda
            </h3>
            <div className="space-y-4">
              {agenda.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-200 hover:bg-teal-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-lg font-medium">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-space-mono font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Presentation Tips */}
          <motion.section variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {presentationTips.map((tip, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-200 hover:bg-teal-50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-600">
                    <tip.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-space-mono font-bold text-gray-900">
                    {tip.title}
                  </h4>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* Feedback Guidelines */}
          <motion.section variants={fadeIn} className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-space-mono font-bold text-gray-900 mb-4">
              Feedback Guidelines
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>Be specific and constructive in your feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>Focus on both strengths and areas for improvement</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>Share your own experiences and suggestions</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>Ask questions to understand design choices</span>
              </li>
            </ul>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 