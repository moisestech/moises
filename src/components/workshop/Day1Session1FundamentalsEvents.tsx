'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Image as ImageIcon,
  FileText,
  Globe,
  Settings,
  Sparkles,
  Filter,
  MessageSquare,
  Share2,
  Map,
  Ticket,
  CalendarDays,
  Camera,
  Video,
  Megaphone,
  Mail
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import DecorativeDivider from '@/components/common/DecorativeDivider'
import { PlatformIcon } from './PlatformIcons'

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

type Platform = 'all' | 'squarespace' | 'wix' | 'github'

const eventFeatures = [
  {
    title: "Event Calendar",
    description: "Display upcoming exhibitions and events",
    icon: CalendarDays,
    color: "from-blue-500 to-indigo-500",
    platforms: {
      squarespace: {
        features: [
          "Built-in calendar block",
          "Event registration integration",
          "Automatic time zone conversion",
          "RSVP functionality",
          "Calendar sync options"
        ]
      },
      wix: {
        features: [
          "Events Manager app",
          "Ticket sales integration",
          "Event scheduling system",
          "Recurring events support",
          "Calendar widget"
        ]
      },
      github: {
        features: [
          "Markdown event listings",
          "Static calendar generation",
          "iCal feed integration",
          "Custom event templates",
          "GitHub Pages hosting"
        ]
      }
    }
  },
  {
    title: "Exhibition Documentation",
    description: "Showcase past and current exhibitions",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    platforms: {
      squarespace: {
        features: [
          "Gallery blocks for exhibitions",
          "Virtual tour integration",
          "Image optimization",
          "Lightbox presentations",
          "Exhibition archives"
        ]
      },
      wix: {
        features: [
          "Pro Gallery feature",
          "Virtual exhibition tools",
          "Media management",
          "Portfolio layouts",
          "Exhibition categories"
        ]
      },
      github: {
        features: [
          "Image galleries in markdown",
          "Exhibition documentation",
          "Version-controlled archives",
          "Static site galleries",
          "Custom image layouts"
        ]
      }
    }
  },
  {
    title: "Event Promotion",
    description: "Market and share your events effectively",
    icon: Megaphone,
    color: "from-green-500 to-teal-500",
    platforms: {
      squarespace: {
        features: [
          "Social media integration",
          "Email marketing tools",
          "Event sharing buttons",
          "SEO optimization",
          "Newsletter signup"
        ]
      },
      wix: {
        features: [
          "Social media tools",
          "Email campaigns",
          "Event promotions",
          "Marketing integrations",
          "Visitor analytics"
        ]
      },
      github: {
        features: [
          "RSS feed generation",
          "Social sharing setup",
          "Event announcement system",
          "Automated notifications",
          "Email subscription integration"
        ]
      }
    }
  }
]

const eventTypes = [
  {
    title: "Exhibitions",
    description: "Solo and group shows",
    icon: Map,
    items: [
      "Opening receptions",
      "Artist talks",
      "Gallery walkthroughs",
      "Virtual exhibitions",
      "Pop-up shows"
    ]
  },
  {
    title: "Workshops",
    description: "Educational events",
    icon: Users,
    items: [
      "Art workshops",
      "Technique demonstrations",
      "Master classes",
      "Studio visits",
      "Artist mentoring"
    ]
  },
  {
    title: "Presentations",
    description: "Speaking engagements",
    icon: Video,
    items: [
      "Artist lectures",
      "Panel discussions",
      "Conference talks",
      "Online webinars",
      "Portfolio reviews"
    ]
  }
]

export default function Day1Session1FundamentalsEvents() {
  const { theme } = useTheme()
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('all')

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 border-gray-800' 
          : 'bg-white/80 border-gray-200'
      } backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals"
              className={`flex items-center ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Fundamentals</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Events & Exhibitions
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
          {/* Hero Section */}
          <motion.section
            variants={fadeIn}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-indigo-900 via-purple-900 to-pink-900'
                : 'from-indigo-500 via-purple-500 to-pink-500'
            }`}>
              <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-20" />
            </div>
            <div className="relative p-8 text-white">
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
                <Calendar className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Events & Exhibitions
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Learn how to showcase your exhibitions and events effectively across different platforms.
              </p>
            </div>
          </motion.section>

          {/* Platform Filter */}
          <motion.section variants={fadeIn} className="flex justify-center gap-4">
            {(['all', 'squarespace', 'wix', 'github'] as const).map((platform) => (
              <motion.button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedPlatform === platform
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-500 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {platform === 'all' ? (
                  <>
                    <Filter className="w-5 h-5" />
                    <span>All Platforms</span>
                  </>
                ) : (
                  <>
                    <PlatformIcon platform={platform} size={20} />
                    <span className="capitalize">{platform}</span>
                  </>
                )}
              </motion.button>
            ))}
          </motion.section>

          {/* Event Features */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Platform Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {eventFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{feature.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {(selectedPlatform === 'all' 
                      ? feature.platforms.squarespace.features 
                      : feature.platforms[selectedPlatform].features
                    ).map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Settings}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Event Types */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Event Types</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {eventTypes.map((type) => (
                <div
                  key={type.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <type.icon className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{type.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{type.description}</p>
                  
                  <ul className="space-y-2">
                    {type.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Sparkles}
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
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Best Practices</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Clock className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Timing & Planning</h3>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Plan events well in advance</li>
                  <li>Consider time zones</li>
                  <li>Set clear schedules</li>
                  <li>Include setup/cleanup time</li>
                  <li>Schedule content updates</li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Share2 className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Promotion</h3>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Use social media effectively</li>
                  <li>Create email campaigns</li>
                  <li>Leverage partnerships</li>
                  <li>Optimize for search engines</li>
                  <li>Cross-promote events</li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <MessageSquare className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Communication</h3>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Clear event details</li>
                  <li>Regular updates</li>
                  <li>Responsive to inquiries</li>
                  <li>Follow-up communication</li>
                  <li>Gather feedback</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 