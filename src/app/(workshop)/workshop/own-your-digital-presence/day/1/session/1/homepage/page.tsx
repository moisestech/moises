'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Image, Grid, Video, User, Type, MousePointerClick } from 'lucide-react';
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

const layoutOptions = [
  {
    title: "Banner Image",
    description: "A striking full-width image that immediately captures attention and sets the tone for your artistic practice",
    icon: Image,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Grid Layout",
    description: "A clean, organized grid showcasing multiple works at once, perfect for visual artists",
    icon: Grid,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Artist Video",
    description: "A dynamic video introduction or portfolio highlight that brings your work to life",
    icon: Video,
    color: "from-amber-500 to-orange-500"
  }
];

const essentialElements = [
  {
    title: "Name & Discipline",
    description: "Clearly display your name and artistic discipline to establish your professional identity",
    icon: User,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Artist Statement",
    description: "A concise introduction or statement that gives context to your work and practice",
    icon: Type,
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Clear Call-to-Action",
    description: "An obvious and simple CTA like 'View My Work' to guide visitors to your portfolio",
    icon: MousePointerClick,
    color: "from-violet-500 to-purple-500"
  }
];

export default function HomepagePage() {
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
              What Makes a Good Homepage?
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
          {/* Hero Section */}
          <motion.section
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Crafting Your Digital Front Door</h1>
            <p className="text-xl text-indigo-100">
              Your homepage is the first impression visitors have of your artistic practice. Make it count with these essential elements.
            </p>
          </motion.section>

          {/* Layout Options */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Layout Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {layoutOptions.map((option) => (
                <motion.div
                  key={option.title}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${option.color} shadow-lg`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                    </div>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Essential Elements */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Elements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {essentialElements.map((element) => (
                <motion.div
                  key={element.title}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${element.color} shadow-lg`}>
                        <element.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{element.title}</h3>
                    </div>
                    <p className="text-gray-600">{element.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Best Practices */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Keep It Simple</h3>
                  <p className="text-gray-600">Focus on clarity and ease of navigation. Visitors should immediately understand who you are and what you do.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Show Your Best Work</h3>
                  <p className="text-gray-600">Feature your strongest pieces prominently to make a lasting first impression.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Make Contact Easy</h3>
                  <p className="text-gray-600">Ensure your contact information or inquiry form is easily accessible from the homepage.</p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 