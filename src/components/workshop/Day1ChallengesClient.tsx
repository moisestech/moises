'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Trophy,
  CheckCircle2,
  CheckCircle,
  FileText,
  Layout,
  Image as ImageIcon,
  Globe,
  Sparkles,
  Settings,
  Users,
  MessageSquare,
  Upload,
  FileCheck,
  Home,
  Palette,
  User,
  Calendar,
  Mail,
  Video,
  Brain,
  Wrench
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
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

const challenges = [
  {
    title: "Content Audit",
    description: "Review and organize your existing content",
    icon: FileText,
    color: "from-blue-500 to-indigo-500",
    tasks: [
      "Create an inventory of all your existing content",
      "Identify gaps in your content",
      "Organize content into categories",
      "List content that needs updating",
      "Document your content structure"
    ],
    tips: [
      "Use a spreadsheet to track content",
      "Include all media types",
      "Note content creation dates",
      "Mark priority updates"
    ]
  },
  {
    title: "Website Structure",
    description: "Plan your website's organization",
    icon: Layout,
    color: "from-purple-500 to-pink-500",
    tasks: [
      "Create a sitemap",
      "Define main navigation",
      "Plan content hierarchy",
      "Outline page templates",
      "Document user flows"
    ],
    tips: [
      "Keep navigation simple",
      "Group related content",
      "Consider user journey",
      "Plan for future content"
    ]
  },
  {
    title: "Media Organization",
    description: "Prepare and organize your media assets",
    icon: ImageIcon,
    color: "from-green-500 to-teal-500",
    tasks: [
      "Gather all media assets",
      "Create folder structure",
      "Optimize images for web",
      "Prepare video content",
      "Document media metadata"
    ],
    tips: [
      "Use consistent naming",
      "Create backup copies",
      "Optimize file sizes",
      "Track usage rights"
    ]
  },
  {
    title: "Platform Setup",
    description: "Prepare your chosen platform",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    tasks: [
      "Choose your platform",
      "Set up account/repository",
      "Configure basic settings",
      "Test platform features",
      "Document access details"
    ],
    tips: [
      "Review platform limits",
      "Enable security features",
      "Document setup steps",
      "Save configuration details"
    ]
  }
]

const resources = [
  {
    title: "Content Templates",
    description: "Starter templates for organizing your content",
    icon: FileCheck,
    link: "/workshop/own-your-digital-presence/resources/templates"
  },
  {
    title: "Platform Guides",
    description: "Detailed guides for each supported platform",
    icon: Settings,
    link: "/workshop/own-your-digital-presence/resources/platforms"
  },
  {
    title: "Community Support",
    description: "Connect with other workshop participants",
    icon: Users,
    link: "/workshop/own-your-digital-presence/community"
  }
]

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
]

const tools = [
  {
    name: "Canva",
    description: "For layout mockups or text-over-image designs",
    icon: ImageIcon
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
    icon: ImageIcon
  },
  {
    name: "Airtable",
    description: "For listing works by title, year, medium",
    icon: Wrench
  }
]

const steps = [
  {
    title: "Add 1 Text Block",
    description: "Write 2–4 sentences introducing something on that page:",
    items: [
      "A short bio (first-person or third-person)",
      "A paragraph about a specific project",
      "A mission statement or artist intention"
    ]
  },
  {
    title: "Add 1 Image or Video",
    description: "Upload or embed media to go with your text:",
    items: [
      "A portrait of you or a behind-the-scenes photo",
      "A piece of artwork you want to highlight",
      "A video of a past performance or installation"
    ]
  },
  {
    title: "Reflect for a Moment",
    description: "Ask yourself:",
    items: [
      "What feeling do I want this page to give off?",
      "Would I be proud to share this with a curator or collaborator?"
    ]
  }
]

export default function Day1ChallengesClient() {
  const { theme } = useTheme()

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
              href="/workshop/own-your-digital-presence/day/1"
              className={`flex items-center ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Day 1</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Day 1 Challenges
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
                <Trophy className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Build Your First Page Block
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                After today&apos;s session, you&apos;ve seen what makes a compelling artist website — now let&apos;s begin yours!
              </p>
            </div>
          </motion.section>

          {/* Mission Section */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Your Mission</h2>
            </div>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>Choose one page you&apos;d like to work on:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageOptions.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  className="group block"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                      theme === 'dark'
                        ? 'bg-gray-700/50 border-gray-600'
                        : 'bg-white border-gray-100'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${option.color} shadow-lg`}>
                          <option.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{option.title}</h3>
                      </div>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                      } group-hover:${
                        theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'
                      }`}>
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
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Step-by-Step Guide</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } flex items-center justify-center mt-1`}>
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                    }`}>{index + 1}</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{step.title}</h3>
                    <p className={`mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{step.description}</p>
                    <ul className={`list-disc list-inside space-y-1 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Tools Section */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Tools You Can Use</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${
                        theme === 'dark'
                          ? 'from-gray-600 to-gray-700'
                          : 'from-gray-500 to-gray-600'
                      } shadow-lg`}>
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{tool.name}</h3>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bonus Section */}
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
            </div>
          </motion.section>

          {/* Challenges */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge) => (
                <div
                  key={challenge.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${challenge.color} mb-4`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{challenge.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{challenge.description}</p>
                  
                  {/* Tasks */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>Tasks:</h4>
                    <ul className="space-y-2">
                      {challenge.tasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                            theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                          }`} />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>Tips:</h4>
                    <ul className="space-y-2">
                      {challenge.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                            theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
                          }`} />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Sparkles}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Resources */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.link}
                  className={`block rounded-xl p-6 transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 hover:bg-gray-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <resource.icon className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{resource.title}</h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 