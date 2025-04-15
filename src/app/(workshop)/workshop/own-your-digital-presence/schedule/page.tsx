'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronRight, ArrowUpRight, Laptop, Users, Monitor, Globe, ArrowLeft } from 'lucide-react'
import { workshopContent } from '@/constants/workshop'

// Animation variants
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

// Add new animation variants
const hoverScale = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
}

const hoverRotate = {
  hover: { rotate: 5 },
  tap: { rotate: 0 }
}

const hoverLift = {
  hover: { y: -5 },
  tap: { y: 0 }
}

// Add new animation variants for text reveal
const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Add new animation variants for staggered children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const workshopDays = [
  {
    id: 1,
    title: "Foundations of Website Creation",
    date: "Monday, April 24, 2025",
    time: "6:00 - 8:30 PM",
    location: "Virtual",
    description: "An introductory virtual session on the foundations of website building and design basics",
    icon: Laptop,
    sessions: [
      {
        title: "Understanding Websites & Digital Presence",
        duration: "1.5 hours"
      },
      {
        title: "Domains, Hosting & Web Platforms",
        duration: "1.5 hours"
      }
    ]
  },
  {
    id: 2,
    title: "Architecting Your Website",
    date: "Saturday, April 26, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "In-Person at Bakehouse",
    description: "Hands-on practice and website customization",
    icon: Users,
    sessions: [
      {
        title: "Site Planning & Structure",
        duration: "2.5 hours"
      },
      {
        title: "Wireframing and Layouts",
        duration: "2.5 hours"
      }
    ]
  },
  {
    id: 3,
    title: "Building Your Website",
    date: "Sunday, April 27, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "In-Person at Bakehouse",
    description: "Hands-on practice and website customization",
    icon: Monitor,
    sessions: [
      {
        title: "Content Integration – Text, Media, Galleries",
        duration: "2.5 hours"
      },
      {
        title: "Design Customization",
        duration: "2.5 hours"
      }
    ]
  },
  {
    id: 4,
    title: "Analytics & Performance",
    date: "Monday, April 28, 2025",
    time: "6:00 - 8:30 PM",
    location: "Virtual",
    description: "Learn about analytics and performance tracking for your website",
    icon: Globe,
    sessions: [
      {
        title: "Analytics, Performance, and Accessibility",
        duration: "1.5 hours"
      },
      {
        title: "Publishing & Maintenance",
        duration: "1.5 hours"
      }
    ]
  }
]

export default function WorkshopSchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/workshop/own-your-digital-presence"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Workshop</span>
          </Link>
          <h1 className="text-2xl text-indigo-600 tracking-tight font-bold">
            Workshop Schedule
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={textReveal} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 font-space-mono">
              Workshop Schedule
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive journey through website building and digital presence
            </p>
          </motion.div>

          {/* Days Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {workshopDays.map((day) => {
              const Icon = day.icon
              return (
                <motion.div
                  key={day.id}
                  variants={fadeIn}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold text-gray-900">{day.title}</h2>
                      </div>
                      <span className="text-indigo-600 font-medium">Day {day.id}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{day.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{day.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          day.location.includes('Virtual') 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-indigo-100 text-indigo-800'
                        }`}>
                          {day.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600">{day.description}</p>

                    {/* Sessions List */}
                    <div className="space-y-4">
                      {day.sessions.map((session, sessionIndex) => (
                        <Link
                          key={session.title}
                          href={`/workshop/own-your-digital-presence/day/${day.id}/session/${sessionIndex + 1}`}
                        >
                          <motion.div
                            className="group p-4 rounded-lg bg-white hover:bg-indigo-50 transition-colors border border-gray-200"
                            whileHover="hover"
                            whileTap="tap"
                            variants={hoverLift}
                          >
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <h3 className="font-semibold group-hover:text-indigo-600 transition-colors">
                                  {session.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {session.duration}
                                  </span>
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={fadeIn}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-900">Ready to Start Learning?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose a session to begin your journey in website building and digital presence
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/workshop/own-your-digital-presence/day/1/session/1"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Start with Day 1
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
} 