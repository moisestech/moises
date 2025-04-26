'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Globe, 
  BookOpen, 
  Lightbulb, 
  Users, 
  Search, 
  Share2, 
  ArrowRight, 
  Clock,
  Stars,
  Target,
  Sparkles,
  Compass
} from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { PlatformBadge, PLATFORM_STYLES } from '@/components/workshop/PlatformIcons'
import DecorativeDivider from '@/components/common/DecorativeDivider'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardHover = {
  scale: 1.02,
  y: -5,
  transition: { duration: 0.2 }
}

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
]

const bestPractices = [
  {
    number: "1",
    title: "Consistent Branding",
    description: "Maintain a consistent visual identity and messaging across all platforms."
  },
  {
    number: "2",
    title: "Quality Content",
    description: "Showcase high-quality images of your work and provide engaging descriptions."
  },
  {
    number: "3",
    title: "Regular Updates",
    description: "Keep your website and social media profiles updated with your latest work and news."
  }
]

export function Day1Session1IntroDigitalPresenceClient() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className={`flex items-center transition-colors ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
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
          className="space-y-12"
        >
          {/* Introduction */}
          <motion.section
            variants={fadeIn}
            className="relative overflow-hidden rounded-2xl p-8 text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-20" />
            </div>
            <div className="relative">
              <motion.div
                className="flex justify-center mb-8"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Globe className="w-16 h-16 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                The Importance of Digital Presence
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                In today&apos;s digital age, having a strong online presence is crucial for artists to showcase their work and connect with their audience.
              </p>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Target}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Benefits */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  whileHover={cardHover}
                  className={`rounded-xl p-6 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 hover:bg-gray-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  } transition-colors`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                    }`}>
                      <benefit.icon className={`w-6 h-6 ${
                        theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                      }`} />
                    </div>
                    <h3 className={`text-xl font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{benefit.title}</h3>
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Compass}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
              via: theme === 'dark' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.2)',
              to: theme === 'dark' ? 'rgba(20, 184, 166, 0.3)' : 'rgba(20, 184, 166, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-500/50'}
          />

          {/* Key Points */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Key Aspects of Digital Presence
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyPoints.map((point) => (
                <motion.div
                  key={point.title}
                  whileHover={cardHover}
                  className={`group relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600'
                      : 'bg-white border-gray-100'
                  } border`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${point.color} shadow-lg`}>
                        <point.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{point.title}</h3>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Stars}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
              via: theme === 'dark' ? 'rgba(5, 150, 105, 0.3)' : 'rgba(5, 150, 105, 0.2)',
              to: theme === 'dark' ? 'rgba(4, 120, 87, 0.3)' : 'rgba(4, 120, 87, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-emerald-400/50' : 'text-emerald-500/50'}
          />

          {/* Best Practices */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Best Practices
            </h2>
            <div className="space-y-6">
              {bestPractices.map((practice) => (
                <motion.div
                  key={practice.title}
                  whileHover={cardHover}
                  className="flex items-start gap-4"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } flex items-center justify-center mt-1`}>
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                    }`}>{practice.number}</span>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{practice.title}</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {practice.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Sparkles}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
              via: theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.2)',
              to: theme === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-pink-400/50' : 'text-pink-500/50'}
          />

          {/* Platforms */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Popular Platforms
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((platform) => (
                <motion.div
                  key={platform.name}
                  whileHover={cardHover}
                  className={`rounded-xl p-6 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 hover:bg-gray-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  } transition-colors`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <PlatformBadge platform={platform.name}>
                      {platform.title}
                    </PlatformBadge>
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {platform.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 