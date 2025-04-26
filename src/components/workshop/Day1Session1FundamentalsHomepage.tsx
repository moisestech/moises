'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home, 
  ArrowLeft, 
  Image, 
  Grid, 
  Video, 
  User, 
  Type, 
  MousePointerClick,
  Sparkles,
  Settings,
  Layout,
  Globe,
  Users,
  Search,
  Briefcase,
  FileCheck,
  MessageSquare,
  Archive,
  AlertTriangle,
  Link2,
  RefreshCw,
  Trophy,
  ScrollText,
  LayoutGrid,
  Mail,
  FileText,
  Palette
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
]

const essentialSections = [
  {
    title: "Hero Section",
    description: "Your homepage's first impression",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-500",
    items: [
      "A striking visual (your best artwork or photo)",
      "Your name and artistic identity",
      "Brief, compelling tagline or statement",
      "Clear navigation to key sections"
    ]
  },
  {
    title: "Portfolio Preview",
    description: "Showcase your best work",
    icon: Image,
    color: "from-purple-500 to-pink-500",
    items: [
      "High-quality images of your artwork",
      "Consistent image sizes and spacing",
      "Clear categories or series groupings",
      "Easy navigation to full portfolio"
    ]
  },
  {
    title: "About Section",
    description: "Brief introduction to your practice",
    icon: User,
    color: "from-green-500 to-teal-500",
    items: [
      "Your artistic background and practice",
      "Key themes or concepts in your work",
      "Professional achievements or exhibitions",
      "Link to full about page"
    ]
  },
  {
    title: "Contact Information",
    description: "Make it easy to reach you",
    icon: Mail,
    color: "from-amber-500 to-orange-500",
    items: [
      "Email address or contact form",
      "Social media links",
      "Studio location (if applicable)",
      "Newsletter signup (optional)"
    ]
  }
]

const bestPractices = [
  {
    title: "Visual Hierarchy",
    description: "Guide visitors through your content",
    icon: Layout,
    color: "from-indigo-500 to-blue-500",
    items: [
      "Use clear headings and subheadings",
      "Maintain consistent spacing and alignment",
      "Highlight important elements with size and color",
      "Keep the layout clean and uncluttered"
    ]
  },
  {
    title: "Mobile Responsiveness",
    description: "Ensure your site works on all devices",
    icon: Grid,
    color: "from-purple-500 to-pink-500",
    items: [
      "Test on different screen sizes",
      "Optimize image loading for mobile",
      "Use touch-friendly navigation",
      "Maintain readability on small screens"
    ]
  },
  {
    title: "Loading Speed",
    description: "Keep your site fast and efficient",
    icon: RefreshCw,
    color: "from-green-500 to-teal-500",
    items: [
      "Optimize image sizes and formats",
      "Minimize use of heavy animations",
      "Use efficient code and caching",
      "Test loading times regularly"
    ]
  },
  {
    title: "Brand Consistency",
    description: "Maintain a cohesive look and feel",
    icon: Palette,
    color: "from-rose-500 to-pink-500",
    items: [
      "Use consistent colors and fonts",
      "Maintain your artistic style throughout",
      "Keep navigation consistent",
      "Align with your social media presence"
    ]
  }
]

const commonMistakes = [
  {
    title: "Content Issues",
    description: "Avoid these content-related pitfalls",
    icon: FileText,
    color: "from-red-500 to-rose-500",
    items: [
      "Too much text on the homepage",
      "Unclear or missing contact information",
      "Poor quality or inconsistent images",
      "Outdated content or exhibitions"
    ]
  },
  {
    title: "Technical Problems",
    description: "Common technical mistakes to avoid",
    icon: AlertTriangle,
    color: "from-amber-500 to-orange-500",
    items: [
      "Slow loading times",
      "Broken links or images",
      "Non-responsive design",
      "Poor mobile experience"
    ]
  },
  {
    title: "Design Pitfalls",
    description: "Design mistakes that hurt user experience",
    icon: LayoutGrid,
    color: "from-purple-500 to-pink-500",
    items: [
      "Overly complex navigation",
      "Inconsistent branding",
      "Poor color contrast",
      "Cluttered layout"
    ]
  }
]

const interactiveExercise = {
  title: "Homepage Quest",
  description: "Complete these challenges to create an effective homepage",
  steps: [
    {
      title: "Analyze Your Current Site",
      description: "What do visitors see first? Is it clear who you are and what you do?",
      icon: Search,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Choose Your Hero Element",
      description: "Select one key artwork, video, or statement to feature prominently",
      icon: Trophy,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Write Your Elevator Pitch",
      description: "Craft a 2-3 sentence introduction that captures your artistic identity",
      icon: FileText,
      color: "from-green-500 to-teal-500"
    }
  ]
}

export default function Day1Session1FundamentalsHomepage() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
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
                <Home className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Crafting Your Digital Front Door
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Your homepage is the first impression visitors have of your artistic practice. Make it count with these essential elements.
              </p>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Layout}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Essential Sections */}
          <motion.section
            variants={fadeIn}
            className={`rounded-xl shadow-lg p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Essential Homepage Sections</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {essentialSections.map((section) => (
                <motion.div
                  key={section.title}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${section.color} shadow-lg`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{section.title}</h3>
                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {section.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
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
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Layout Options */}
          <motion.section
            variants={fadeIn}
            className={`rounded-xl shadow-lg p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Layout Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {layoutOptions.map((option) => (
                <motion.div
                  key={option.title}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
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
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {option.description}
                    </p>
                  </div>
                </motion.div>
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
            className={`rounded-xl shadow-lg p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bestPractices.map((practice) => (
                <motion.div
                  key={practice.title}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${practice.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${practice.color} shadow-lg`}>
                        <practice.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{practice.title}</h3>
                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {practice.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {practice.items.map((item, index) => (
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
                </motion.div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={AlertTriangle}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.2)',
              via: theme === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-red-400/50' : 'text-red-500/50'}
          />

          {/* Common Mistakes */}
          <motion.section
            variants={fadeIn}
            className={`rounded-xl shadow-lg p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Common Mistakes to Avoid</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {commonMistakes.map((mistake) => (
                <motion.div
                  key={mistake.title}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${mistake.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${mistake.color} shadow-lg`}>
                        <mistake.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{mistake.title}</h3>
                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {mistake.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {mistake.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                            theme === 'dark' ? 'bg-red-400' : 'bg-red-600'
                          }`} />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Trophy}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
              via: theme === 'dark' ? 'rgba(5, 150, 105, 0.3)' : 'rgba(5, 150, 105, 0.2)',
              to: theme === 'dark' ? 'rgba(4, 120, 87, 0.3)' : 'rgba(4, 120, 87, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-emerald-400/50' : 'text-emerald-500/50'}
          />

          {/* Interactive Exercise */}
          <motion.section
            variants={fadeIn}
            className={`rounded-xl shadow-lg p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{interactiveExercise.title}</h2>
            <p className={`text-lg mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>{interactiveExercise.description}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {interactiveExercise.steps.map((step) => (
                <motion.div
                  key={step.title}
                  whileHover={{ y: -5 }}
                  className={`group relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${step.color} shadow-lg`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{step.title}</h3>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 