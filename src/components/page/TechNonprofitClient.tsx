"use client"

import Link from "next/link"
import {
  ChevronRight,
  Calendar,
  Globe,
  Code,
  Layers,
  Monitor,
  PenTool,
  MessageSquare,
  FileText,
  Menu,
  X,
  Paintbrush,
  Clock,
  DollarSign,
  Users,
  Laptop,
  CheckCircle,
  ClipboardList,
  Send,
  UserCheck,
  ArrowUpRight,
  Building2,
  Rocket,
  Lightbulb,
  BarChart,
  Cpu,
  Network,
  Zap,
  Target,
  Heart,
  Sparkles,
  ChevronDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { TechNonprofitNav } from "@/components/workshop/TechNonprofitNavLeCube"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations/tech-nonprofit-oolite"
import { Mail, Phone, MapPin } from "lucide-react"
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'
import DecorativeDivider from '@/components/common/DecorativeDivider'
import LargeIconCarousel from '@/components/common/LargeIconCarousel'

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
}

const pulse = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

// Icons for the carousel
const carouselIcons = [
  { icon: Building2, label: "Community Impact" },
  { icon: Rocket, label: "Digital Innovation" },
  { icon: Heart, label: "Social Good" },
  { icon: Globe, label: "Global Reach" },
  { icon: Users, label: "Team Collaboration" },
  { icon: Target, label: "Mission Focus" }
]

// Services data
const services = [
  {
    icon: MessageSquare,
    title: "Communication Platform",
    description: "Browser-based messaging and event broadcasting system for seamless team coordination."
  },
  {
    icon: Monitor,
    title: "Digital Dashboards",
    description: "Custom portals for staff, volunteers, and stakeholders with role-based access."
  },
  {
    icon: Code,
    title: "Tech Infrastructure",
    description: "Scalable solutions for events, programs, and community engagement."
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with smart workflows and AI-powered tools."
  }
]

// Workshop topics
const workshops = [
  {
    icon: Globe,
    title: "Digital Presence",
    description: "Build and optimize your online presence"
  },
  {
    icon: Cpu,
    title: "AI for Good",
    description: "Leverage AI for social impact"
  },
  {
    icon: Network,
    title: "Community Building",
    description: "Engage and grow your digital community"
  },
  {
    icon: Target,
    title: "Impact Metrics",
    description: "Track and visualize your social impact"
  }
]

export default function TechNonprofitClient() {
  const { language } = useLanguage()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()
  const [reducedMotion, setReducedMotion] = useState(false)
  const containerRef = useRef(null)

  const t = translations[language]

  // Intersection observer for sections
  const [heroRef, heroInView] = useInView({ threshold: 0.5 })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.5 })
  const [workshopsRef, workshopsInView] = useInView({ threshold: 0.5 })
  const [impactRef, impactInView] = useInView({ threshold: 0.5 })

  // Countdown timer
  useEffect(() => {
    const endDate = new Date("2024-05-01T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Mouse move effect for hero section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend or a service
    console.log("Submitting contact form:", { name, email, message })
    // Simulate successful submission
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsContactOpen(false)
      setSubmitted(false)
      setName("")
      setEmail("")
      setMessage("")
    }, 3000)
  }

  // Contact modal component
  const ContactModal = () => (
    <div className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center ${isContactOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <button 
            onClick={() => setIsContactOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-300">{`Thank you for reaching out. We'll get back to you soon.`}</p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              ></textarea>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  )

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      {/* Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <TechNonprofitNav />
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f133_1px,transparent_1px),linear-gradient(to_bottom,#6366f133_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-indigo-500/30 rounded-full"
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                  ],
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="block">{t.hero.title}</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  {t.hero.subtitle}
                </span>
              </h1>
              
              <p className={`text-xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } max-w-2xl`}>
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white' 
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
                  } px-6 py-3 rounded-full flex items-center justify-center gap-2`}
                >
                  {t.hero.exploreServices}
                  <ChevronRight className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  className={`border ${
                    theme === 'dark' 
                      ? 'border-gray-700 hover:bg-gray-800 text-white' 
                      : 'border-gray-300 hover:bg-gray-100 text-gray-900'
                  } px-6 py-3 rounded-full`}
                >
                  {t.hero.scheduleCall}
                </Button>
              </div>
            </motion.div>

            <div className="h-[400px] md:h-[500px] flex items-center justify-center">
              <LargeIconCarousel icons={carouselIcons} reducedMotion={reducedMotion} />
            </div>
          </div>
        </div>
      </section>
      
      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)',
          via: theme === 'dark' ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0.05)',
          to: theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)'
        }}
        iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
        className="my-16"
      />
      
      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.services.title}
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className={`${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-indigo-500/50' 
                    : 'bg-white/50 backdrop-blur-sm border-gray-200 hover:border-indigo-500/50'
                } p-6 rounded-xl border transition-colors`}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-indigo-500/10 p-3 rounded-lg ${
                    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{service.title}</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)',
          via: theme === 'dark' ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0.05)',
          to: theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)'
        }}
        iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
        className="my-16"
      />
      
      {/* Workshops Section */}
      <section id="workshops" ref={workshopsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.workshops.title}
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              {t.workshops.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={reducedMotion ? {} : hoverScale}
                className={`${
                  theme === 'dark' 
                    ? 'bg-gray-800/30 backdrop-blur-sm border-gray-700 hover:border-purple-500/50' 
                    : 'bg-white/30 backdrop-blur-sm border-gray-200 hover:border-purple-500/50'
                } p-6 rounded-xl border transition-colors`}
              >
                <div className={`bg-purple-500/10 p-3 rounded-lg text-purple-400 w-fit mb-4`}>
                  <workshop.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{workshop.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {workshop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <DecorativeDivider 
        icon={Heart}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)',
          via: theme === 'dark' ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0.05)',
          to: theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.05)'
        }}
        iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
        className="my-16"
      />
      
      {/* Impact Section */}
      <section id="impact" ref={impactRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.caseStudies.title}
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              {t.caseStudies.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/30 backdrop-blur-sm border-gray-700' 
                  : 'bg-white/30 backdrop-blur-sm border-gray-200'
              } p-8 rounded-xl border`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{t.caseStudies.description}</h3>
              <ul className="space-y-4">
                {t.caseStudies.examples.map((example, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className={`h-6 w-6 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    } mt-1 flex-shrink-0`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {example}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
              <div 
                className="absolute inset-0 bg-[linear-gradient(45deg,rgba(99,102,241,0.1)_25%,transparent_25%,transparent_50%,rgba(99,102,241,0.1)_50%,rgba(99,102,241,0.1)_75%,transparent_75%,transparent)] bg-[length:64px_64px]"
                style={{
                  animation: "gradient-move 3s linear infinite",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes gradient-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 64px 64px;
          }
        }
      `}</style>
    </div>
  )
} 