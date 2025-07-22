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
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { TechNonprofitNav } from "@/components/workshop/TechNonprofitNavLeCube"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations/tech-nonprofit-lecube"
import { Mail, Phone, MapPin } from "lucide-react"
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'
import DecorativeDivider from '@/components/common/DecorativeDivider'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

// Custom divider component with blue/purple theme
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent ${className}`} />
)

// Add placeholder image URLs
const PLACEHOLDER_IMAGES = {
  hero: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-1_y8rgsz.png",
  services: {
    communication: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030298/own-your-digital-presence/website-building-day-1-virtual-session_qk0esh.jpg",
    dashboard: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-2_ctm1ft.png",
    workshop: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-3_qkdzir.png",
    microtools: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030367/own-your-digital-presence/website-building-day-4-online-presentations_tncppm.jpg"
  }
}

// Add animated gradient text component
const AnimatedGradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
    {children}
  </span>
)

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

  const t = translations[language]

  // Intersection observer for sections
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5 })
  const { ref: storyRef, inView: storyInView } = useInView({ threshold: 0.5 })
  const { ref: offerRef, inView: offerInView } = useInView({ threshold: 0.5 })
  const { ref: workshopsRef, inView: workshopsInView } = useInView({ threshold: 0.5 })
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.5 })

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

  // Add services details
  const servicesDetails = [
    {
      title: "Browser-Based Communication App",
      description: "Built-in messaging and event broadcasting system. Staff, artists, and attendees stay connected during festivals, exhibitions, and workshops—without needing WhatsApp or Slack.",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: "Artist & Staff Dashboards",
      description: "Log in, post updates, RSVP to events, and access internal resources. A unified, clean experience with roles and permissions.",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: "Workshop Infrastructure",
      description: "We build the tech layer behind live and hybrid events: registration flows, feedback surveys, AI co-pilots, and even post-event recaps.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Custom Microtools",
      description: "Need a light event map? A tool for kids to remix art with AI? A drop-in chatbot for your cinema program? We can make it, and make it simple.",
      icon: <Code className="h-6 w-6" />
    }
  ]

  // Add workshop details
  const workshopDetails = [
    {
      title: "Own Your Digital Presence",
      description: "Website Building, Performance, Accessibility",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "AI for Artists",
      description: "Prompting, Co-creation, Ethics of Generative Art",
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: "Creative Social Media & Meme Branding",
      description: "Engage your audience with creative content strategies",
      icon: <Network className="h-6 w-6" />
    },
    {
      title: "Marketing Automation for Cultural Orgs",
      description: "Streamline your outreach and engagement",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Build Your Portfolio",
      description: "Design, UX, and storytelling for artists",
      icon: <Paintbrush className="h-6 w-6" />
    }
  ]

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

  const openEmail = () => {
    window.location.href = 'mailto:m@moises.tech?subject=Schedule%20a%20Call%20-%20Artist%20Tech%20Initiative';
  }

  // Contact modal component
  const ContactModal = () => (
    <div className={`fixed inset-0 z-50 ${
      theme === 'dark' ? 'bg-black/80' : 'bg-white/80'
    } backdrop-blur-md flex items-center justify-center ${isContactOpen ? 'block' : 'hidden'}`}>
      <div className={`${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } rounded-lg p-6 max-w-md w-full mx-4`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Contact Us</h2>
          <button 
            onClick={() => setIsContactOpen(false)}
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
            } transition-colors`}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className={`h-12 w-12 ${
              theme === 'dark' ? 'text-green-400' : 'text-green-500'
            } mx-auto mb-4`} />
            <h3 className={`text-xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Message Sent!</h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>{`Thank you for reaching out. We'll get back to you soon.`}</p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } mb-1`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-2 border ${
                  theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'
                } rounded-md`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } mb-1`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border ${
                  theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'
                } rounded-md`}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } mb-1`}>
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className={`w-full px-4 py-2 border ${
                  theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'
                } rounded-md`}
                required
              ></textarea>
            </div>
            <Button 
              type="submit" 
              className={`w-full ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
              }`}
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
      <section id="overview" className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
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
                <span className="block">{t.hero.subtitle}</span>
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
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                  } px-6 py-3 rounded-full flex items-center justify-center gap-2`}
                >
                  {t.hero.exploreServices}
                  <ChevronRight className="h-5 w-5" />
                </Button>
                
                <Button
                  onClick={openEmail}
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
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={PLACEHOLDER_IMAGES.hero}
                  alt="Tech for Non-Profits"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                
                {/* Animated gradient overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 pointer-events-none"
                  style={{
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                  }}
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
                className="absolute -top-6 -right-6 bg-blue-500/10 backdrop-blur-md p-4 rounded-lg border border-blue-500/20"
              >
                <Building2 className="h-8 w-8 text-blue-400" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 bg-purple-500/10 backdrop-blur-md p-4 rounded-lg border border-purple-500/20"
              >
                <Rocket className="h-8 w-8 text-purple-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* The Story Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black/50' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.story.title}
            </h2>
            
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.story.description1}
            </p>
            
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.story.description2}
            </p>
            
            <blockquote className={`text-xl italic ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } border-l-4 border-blue-500 pl-4 my-8`}>
              &ldquo;{t.story.quote}&rdquo;
              <footer className={`text-right ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              } mt-2`}>— {t.story.quoteAuthor}</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.items.map((service: { title: string; description: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50' 
                    : 'bg-white/50 backdrop-blur-sm border-gray-200 hover:border-blue-500/50'
                } p-6 rounded-xl border transition-colors`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                    {servicesDetails[index].icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{service.title}</h3>
                    <p className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{service.description}</p>
                  </div>
                </div>
                {index === 1 && (
                  <div className="mt-4">
                    <Image
                      src={PLACEHOLDER_IMAGES.services.dashboard}
                      alt="Dashboard Example"
                      width={500}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl font-medium text-blue-400">
              {t.services.conclusion}
            </p>
          </motion.div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* Workshops Section */}
      <section id="workshops" className={`py-20 ${
        theme === 'dark' ? 'bg-black/50' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.workshops.items.map((workshop: { title: string; description: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${
                  theme === 'dark' 
                    ? 'bg-gray-800/30 backdrop-blur-sm border-gray-700 hover:border-purple-500/50' 
                    : 'bg-white/30 backdrop-blur-sm border-gray-200 hover:border-purple-500/50'
                } p-6 rounded-xl border transition-colors`}
              >
                <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400 w-fit mb-4">
                  {workshopDetails[index].icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{workshop.title}</h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>{workshop.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className={`text-2xl font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } max-w-3xl mx-auto leading-relaxed`}>
              We don't just teach artists how to code — we teach them how to connect.
            </p>
          </motion.div>
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
      
      {/* Case Studies Section */}
      <section id="case-studies" className={`py-20 ${
        theme === 'dark' ? 'bg-black/50' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                    <span className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={PLACEHOLDER_IMAGES.services.dashboard}
                  alt="Tech Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 pointer-events-none"
                  style={{
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                  }}
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
                className="absolute -top-6 -right-6 bg-blue-500/10 backdrop-blur-md p-4 rounded-lg border border-blue-500/20"
              >
                <Target className="h-8 w-8 text-blue-400" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 bg-purple-500/10 backdrop-blur-md p-4 rounded-lg border border-purple-500/20"
              >
                <Heart className="h-8 w-8 text-purple-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* Contact Section */}
      <section id="contact" className={`py-20 ${
        theme === 'dark' ? 'bg-black/50' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.contact.title}
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              {t.contact.subtitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/30 backdrop-blur-sm border-gray-700' 
                  : 'bg-white/30 backdrop-blur-sm border-gray-200'
              } p-8 rounded-xl border`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{t.contact.description}</h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } mb-6`}>
                {t.contact.buildSomething}
              </p>
              <Button
                onClick={openEmail}
                className={`w-full ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                }`}
              >
                {t.contact.scheduleCall}
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/30 backdrop-blur-sm border-gray-700' 
                  : 'bg-white/30 backdrop-blur-sm border-gray-200'
              } p-8 rounded-xl border`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{t.contact.resources}</h3>
              <ul className="space-y-4">
                {t.contact.resourcesList.map((resource, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {index === 0 && <FileText className={`h-5 w-5 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`} />}
                    {index === 1 && <ClipboardList className={`h-5 w-5 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`} />}
                    {index === 2 && <Sparkles className={`h-5 w-5 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`} />}
                    <span className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{resource.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className={`text-xl italic ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.contact.conclusion}
            </p>
          </motion.div>
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
      
      {/* Footer */}
      <footer className={`py-12 ${
        theme === 'dark' ? 'border-t border-gray-800' : 'border-t border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Artist Tech Initiative
                </span>
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>{t.footer.tagline}</p>
            </div>
            
            <div className="flex gap-6">
              <Link href="/" className={`${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              } transition-colors`}>
                {t.footer.links.home}
              </Link>
              <Link href="/workshop" className={`${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              } transition-colors`}>
                {t.footer.links.workshops}
              </Link>
              <Link href="https://moises.tech" target="_blank" className={`${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              } transition-colors`}>
                {t.footer.links.moises}
              </Link>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 ${
            theme === 'dark' ? 'border-t border-gray-800' : 'border-t border-gray-200'
          } text-center ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          } text-sm`}>
            <p>{t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 