'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Globe, BookOpen, Lightbulb, Users, Search, Share2, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { PlatformBadge, PLATFORM_STYLES } from '@/components/workshop/PlatformIcons';

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

const benefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Showcase your work to a worldwide audience and connect with potential clients, galleries, and collaborators."
  },
  {
    icon: Users,
    title: "Audience Building",
    description: "Build and engage with your audience, creating a community around your artistic practice."
  },
  {
    icon: Search,
    title: "Discoverability",
    description: "Make your work easily discoverable by curators, collectors, and art enthusiasts searching online."
  },
  {
    icon: Share2,
    title: "Professional Presence",
    description: "Establish a professional online presence that reflects your artistic identity and practice."
  }
]

const platforms = [
  {
    name: "squarespace" as const,
    title: "Squarespace",
    description: "Professional templates with built-in e-commerce and analytics"
  },
  {
    name: "wix" as const,
    title: "Wix",
    description: "Drag-and-drop website builder with extensive customization"
  },
  {
    name: "github" as const,
    title: "GitHub Pages",
    description: "Free hosting for static websites with version control"
  },
  {
    name: "webflow" as const,
    title: "Webflow",
    description: "Design-focused platform with advanced customization"
  }
]

const keyPoints = [
  {
    title: "Your Digital Archive",
    description: "Your site is your archive, studio visit, and CV all in one",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "First Impressions",
    description: "Impressions are formed within 5 seconds",
    icon: Clock,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Online Translation",
    description: "Your website can help translate your offline presence online",
    icon: Globe,
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Identity Bridge",
    description: "Explore the digital vs. in-person identity gap",
    icon: Users,
    color: "from-emerald-500 to-teal-500"
  }
];

export default function DigitalPresencePage() {
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
              Digital Presence
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
          <motion.section
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">The Importance of Digital Presence</h1>
            <p className="text-xl text-indigo-100">
              In today&apos;s digital age, having a strong online presence is crucial for artists to showcase their work and connect with their audience.
            </p>
          </motion.section>

          {/* Benefits */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <benefit.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Points */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Aspects of Digital Presence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyPoints.map((point) => (
                <motion.div
                  key={point.title}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${point.color} shadow-lg`}>
                        <point.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                    </div>
                    <p className="text-gray-600">{point.description}</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Consistent Branding</h3>
                  <p className="text-gray-600">It&apos;s important to maintain a consistent brand</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Content</h3>
                  <p className="text-gray-600">Showcase high-quality images of your work and provide engaging descriptions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Regular Updates</h3>
                  <p className="text-gray-600">Keep your website and social media profiles updated with your latest work and news.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-600 mb-6">
              Now that you understand the importance of digital presence, let&apos;s explore some successful artist websites for inspiration.
            </p>
            <div className="flex items-center gap-2 text-indigo-600">
              <span className="font-medium">Continue to Example Websites</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 