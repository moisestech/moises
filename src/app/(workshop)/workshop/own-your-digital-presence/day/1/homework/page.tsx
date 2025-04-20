'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Home, Palette, User, Calendar, Mail, FileText, Image, Video, Brain, Upload, Wrench, MessageSquare } from 'lucide-react';
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

const pageOptions = [
  {
    title: "Homepage",
    icon: Home,
    color: "from-blue-500 to-indigo-500",
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/homepage"
  },
  {
    title: "Gallery/Portfolio",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/gallery"
  },
  {
    title: "About/CV",
    icon: User,
    color: "from-amber-500 to-orange-500",
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/about-cv"
  },
  {
    title: "Events",
    icon: Calendar,
    color: "from-emerald-500 to-teal-500",
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/events"
  },
  {
    title: "Contact",
    icon: Mail,
    color: "from-rose-500 to-pink-500",
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/contact"
  }
];

const tools = [
  {
    name: "Canva",
    description: "For layout mockups or text-over-image designs",
    icon: Image
  },
  {
    name: "Notion",
    description: "For writing your bio or structuring your CV",
    icon: FileText
  },
  {
    name: "Diagram.com / Mermaid AI",
    description: "For site structure maps",
    icon: Wrench
  },
  {
    name: "Runway / Firefly / DALL·E",
    description: "For image extensions or backgrounds",
    icon: Image
  },
  {
    name: "Airtable",
    description: "For listing works by title, year, medium",
    icon: Wrench
  }
];

export default function HomeworkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Day 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Day 1 Homework
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
            <h1 className="text-4xl font-bold mb-4">Build Your First Page Block</h1>
            <p className="text-xl text-indigo-100">
              After today&apos;s session, you&apos;ve seen what makes a compelling artist website — now let&apos;s begin yours!
            </p>
          </motion.section>

          {/* Mission Section */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Mission</h2>
            </div>
            <p className="text-gray-600 mb-6">Choose one page you&apos;d like to work on:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageOptions.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  className="group block"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${option.color} shadow-lg`}>
                          <option.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                      </div>
                      <p className="text-sm text-indigo-600 group-hover:text-indigo-700">
                        View platform instructions →
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* Steps Section */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Guide</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Add 1 Text Block</h3>
                  <p className="text-gray-600 mb-2">Write 2–4 sentences introducing something on that page:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>A short bio (first-person or third-person)</li>
                    <li>A paragraph about a specific project</li>
                    <li>A mission statement or artist intention</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Add 1 Image or Video</h3>
                  <p className="text-gray-600 mb-2">Upload or embed media to go with your text:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>A portrait of you or a behind-the-scenes photo</li>
                    <li>A piece of artwork you want to highlight</li>
                    <li>A video of a past performance or installation</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reflect for a Moment</h3>
                  <p className="text-gray-600 mb-2">Ask yourself:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>What feeling do I want this page to give off?</li>
                    <li>Would I be proud to share this with a curator or collaborator?</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tools Section */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools You Can Use</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-gray-500 to-gray-600 shadow-lg">
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                    </div>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bonus Section */}
          <motion.section
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-xl bg-white/10 shadow-lg">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Bonus: Share in the Chat</h2>
            </div>
            <p className="text-indigo-100">
              If you want feedback or ideas, share your WIP in the group thread or message me directly!
            </p>
            <p className="text-indigo-100 mt-4">
              We&apos;ll build on this in-person Saturday — this block will become your first live page draft ✨
            </p>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 