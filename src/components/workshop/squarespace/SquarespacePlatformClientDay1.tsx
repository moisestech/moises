'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Layout,
  Image,
  FileText,
  Settings,
  Globe,
  Laptop,
  Code2,
  Palette,
  Sparkles,
  RefreshCw,
  Link2,
  Search,
  ShoppingCart,
  Users,
  MessageSquare
} from 'lucide-react'
import Link from 'next/link'
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

const features = [
  {
    title: "Visual Editor",
    description: "Intuitive drag-and-drop interface",
    icon: Layout,
    details: [
      "No coding required",
      "Real-time preview",
      "Mobile-responsive layouts",
      "Pre-designed sections"
    ]
  },
  {
    title: "Portfolio Features",
    description: "Professional portfolio tools",
    icon: Image,
    details: [
      "Gallery layouts",
      "Image optimization",
      "Lightbox effects",
      "Custom image captions"
    ]
  },
  {
    title: "Content Management",
    description: "Easy content organization",
    icon: FileText,
    details: [
      "Blog functionality",
      "Content scheduling",
      "Version history",
      "SEO tools"
    ]
  },
  {
    title: "E-commerce",
    description: "Built-in online store",
    icon: ShoppingCart,
    details: [
      "Product galleries",
      "Secure checkout",
      "Inventory management",
      "Digital products"
    ]
  }
]

const guides = [
  {
    title: "Getting Started",
    icon: Laptop,
    steps: [
      "Create a Squarespace account",
      "Choose a template",
      "Set up your domain",
      "Configure basic settings"
    ]
  },
  {
    title: "Design Customization",
    icon: Palette,
    steps: [
      "Customize colors and fonts",
      "Modify layout settings",
      "Add your branding",
      "Adjust spacing and styles"
    ]
  },
  {
    title: "Content Setup",
    icon: FileText,
    steps: [
      "Create main pages",
      "Set up navigation",
      "Add portfolio items",
      "Configure blog"
    ]
  },
  {
    title: "Advanced Features",
    icon: Settings,
    steps: [
      "Set up analytics",
      "Configure marketing tools",
      "Add third-party integrations",
      "Enable advanced features"
    ]
  }
]

const bestPractices = [
  {
    title: "Performance",
    icon: Sparkles,
    tips: [
      "Optimize images before upload",
      "Use lazy loading for galleries",
      "Minimize custom code",
      "Enable browser caching"
    ]
  },
  {
    title: "SEO",
    icon: Search,
    tips: [
      "Set up meta descriptions",
      "Use proper heading structure",
      "Add alt text to images",
      "Create SEO-friendly URLs"
    ]
  },
  {
    title: "Maintenance",
    icon: RefreshCw,
    tips: [
      "Regular content updates",
      "Monitor analytics",
      "Backup your content",
      "Check for broken links"
    ]
  },
  {
    title: "Engagement",
    icon: Users,
    tips: [
      "Add contact forms",
      "Enable comments",
      "Integrate social media",
      "Set up newsletters"
    ]
  }
]

export default function SquarespacePlatformClientDay1() {
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
              href="/workshop/own-your-digital-presence/day/1/session/2"
              className={`flex items-center ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 2</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Squarespace Guide
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
                <Layout className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Squarespace Guide
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Build your professional portfolio with Squarespace's powerful platform
              </p>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <feature.icon className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{feature.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Code2}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Step-by-Step Guide */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Step-by-Step Guide</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guides.map((guide) => (
                <div
                  key={guide.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <guide.icon className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{guide.title}</h3>
                  <ol className="space-y-2">
                    {guide.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${
                          theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                        } flex items-center justify-center text-sm ${
                          theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                        }`}>
                          {index + 1}
                        </span>
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Settings}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestPractices.map((practice) => (
                <div
                  key={practice.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <practice.icon className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{practice.title}</h3>
                  <ul className="space-y-2">
                    {practice.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 