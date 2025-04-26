'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Layout,
  FileText,
  Globe,
  Briefcase,
  Mail,
  ShoppingCart,
  Home,
  Layers,
  Image,
  Users,
  DollarSign,
  MessageSquare,
  Globe2
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

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

const examples = [
  {
    title: "About",
    description: "Create a compelling about page",
    icon: FileText,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/about",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Blog",
    description: "Share your thoughts and insights",
    icon: Globe,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/blog",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Case Studies",
    description: "Showcase your project success stories",
    icon: Briefcase,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/case-studies",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Contact",
    description: "Connect with your audience",
    icon: Mail,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/contact",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "E-Commerce",
    description: "Sell your products online",
    icon: ShoppingCart,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/ecommerce",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Landing Page",
    description: "Create an impactful first impression",
    icon: Home,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/landing",
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Landing Pages",
    description: "Browse landing page templates",
    icon: Layers,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/landing-pages",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Portfolio",
    description: "Showcase your work",
    icon: Image,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/portfolio",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Portfolios",
    description: "Browse portfolio templates",
    icon: Layout,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/portfolios",
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Pricing",
    description: "Present your pricing plans",
    icon: DollarSign,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/pricing",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Services",
    description: "Showcase your services",
    icon: Users,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/services",
    color: "from-amber-500 to-yellow-500"
  },
  {
    title: "Social Media",
    description: "Share updates and engage",
    icon: MessageSquare,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/social-media",
    color: "from-lime-500 to-green-500"
  },
  {
    title: "Websites",
    description: "Browse website templates",
    icon: Globe2,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/websites",
    color: "from-teal-500 to-emerald-500"
  }
]

export default function Day1Session1FundamentalsExamples() {
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
              Example Components
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
                Example Components
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Explore a collection of pre-built components to help you build your digital presence.
              </p>
            </div>
          </motion.section>

          {/* Examples Grid */}
          <motion.section
            variants={fadeIn}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {examples.map((example) => (
              <Link
                key={example.title}
                href={example.href}
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } shadow-sm hover:shadow-md transition-all border ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${example.color} mb-4`}>
                    <example.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{example.title}</h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {example.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 