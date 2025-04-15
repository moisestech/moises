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

// Navigation items
const navigation = [
  { name: "Overview", href: "#overview" },
  { name: "Services", href: "#services" },
  { name: "Workshops", href: "#workshops" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
]

// Add placeholder image URLs
const PLACEHOLDER_IMAGES = {
  hero: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030235/own-your-digital-presence/website-building-hero-image_exoyv7.png",
  services: {
    communication: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030298/own-your-digital-presence/website-building-day-1-virtual-session_qk0esh.jpg",
    dashboard: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030278/own-your-digital-presence/website-building-day-2-3-weekend-in-person_jm1abi.jpg",
    workshop: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030278/own-your-digital-presence/website-building-day-2-3-weekend-in-person_jm1abi.jpg",
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
  const [activeSection, setActiveSection] = useState("overview")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Intersection observer for sections
  const [heroRef, heroInView] = useInView({ threshold: 0.5 })
  const [storyRef, storyInView] = useInView({ threshold: 0.5 })
  const [offerRef, offerInView] = useInView({ threshold: 0.5 })
  const [workshopsRef, workshopsInView] = useInView({ threshold: 0.5 })
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 })

  // Update active section based on scroll position
  useEffect(() => {
    if (heroInView) setActiveSection("overview")
    else if (storyInView) setActiveSection("story")
    else if (offerInView) setActiveSection("offer")
    else if (workshopsInView) setActiveSection("workshops")
    else if (ctaInView) setActiveSection("cta")
  }, [heroInView, storyInView, offerInView, workshopsInView, ctaInView])

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

  // Update the scrollToSection function to remove animation logic
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false) // Close mobile menu after clicking
    
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

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

  // Mobile menu component
  const MobileMenu = () => (
    <div className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-blue-400 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.substring(1))}
              className="text-left text-xl text-white hover:text-blue-400 transition-colors py-2"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Mobile Menu */}
      <MobileMenu />
      
      {/* Contact Modal */}
      <ContactModal />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Bakehouse Artist Tech Initiative
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            {/* Contact Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Contact Us
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Creative Innovation</span>
                <span className="block">Needs a <AnimatedGradientText>Digital Ally</AnimatedGradientText></span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl">
                {`Let's imagine what cultural institutions could do with their own tech arm — tailored, thoughtful, and built to amplify your impact across exhibitions, workshops, and community-led events.`}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
                >
                  Explore Our Services
                  <ChevronRight className="h-5 w-5" />
                </Button>
                
                <Button
                  onClick={() => setIsContactOpen(true)}
                  variant="outline"
                  className="border border-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full"
                >
                  Schedule a Call
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
                  ease: "easeInOut"
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
                  ease: "easeInOut",
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
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              What Happens When <AnimatedGradientText>Cultural Vision Meets Digital Power</AnimatedGradientText>?
            </h2>
            
            <p className="text-xl text-gray-300">
              Le Cube Garges already leads the way in creative innovation, transforming how we engage with digital culture, community, and the future. But what if every exhibition had a custom-built, lightweight digital companion? What if artists and audiences could connect online just as meaningfully as they do in person?
            </p>
            
            <p className="text-xl text-gray-300">
              {`We've seen what's possible when art institutions like Bakehouse empower their artists with workshops and tech. From DIY websites to performance optimization, and even automated content outreach—we build the tools that artists, staff, and audiences actually use.`}
            </p>
            
            <blockquote className="text-xl italic text-gray-300 border-l-4 border-blue-500 pl-4 my-8">
              &ldquo;Technology, at its best, is invisible—felt only in the clarity of communication and the ease of creation.&rdquo;
              <footer className="text-right text-gray-400 mt-2">— Moises Sanabria</footer>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Support for <AnimatedGradientText>Creative Organizations</AnimatedGradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Think of us as your flexible, mission-aligned tech partner. No overhead. Just targeted, scalable solutions to support your programming, audiences, and staff.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
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
              We believe culture deserves great technology. So we offer fractional services — only what you need, when you need it.
            </p>
          </motion.div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* Workshops Section */}
      <section id="workshops" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Teaching Artists to <AnimatedGradientText>Thrive Online</AnimatedGradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {`We've delivered hands-on digital workshops at institutions like Bakehouse, the ICA, and more—focused on helping artists grow their digital presence, visibility, and reach. All of our workshops are designed for non-coders, artists, and educators.`}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopDetails.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors"
              >
                <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400 w-fit mb-4">
                  {workshop.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-gray-300">{workshop.description}</p>
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
            <p className="text-xl italic text-gray-300">
              {`"We don't just teach artists how to code — we teach them how to connect."`}
            </p>
          </motion.div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* Case Studies Section */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Space as Bold as Your Mission Deserves a <AnimatedGradientText>Tech Partner Who Gets It</AnimatedGradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {`You're already doing the hard part: reaching the community, supporting interdisciplinary creation, and tackling societal change. Our goal is to amplify that with thoughtful, human tech.`}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6">{`Let's imagine together:`}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">An artist dashboard with workshop materials in both French and English</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{`A browser app where a family can see what's happening next weekend`}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">A prompt-based generative art tool for youth in your FabLab</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">A monthly content automation that schedules your entire calendar on Instagram and email in one click</span>
                </li>
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
                  ease: "easeInOut"
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
                  ease: "easeInOut",
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
      <section id="contact" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <AnimatedGradientText>Prototype a Better Future</AnimatedGradientText>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {`We'd love to start small — a co-hosted workshop, a custom browser experience for your next exhibition, or a digital training series for your staff and artists.`}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6">{`Let's build something for your next season.`}</h3>
              <p className="text-gray-300 mb-6">
                Schedule a discovery call to discuss your needs and how we can help.
              </p>
              <Button
                onClick={() => setIsContactOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Schedule a Call
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Download the One-Pager (PDF)</span>
                </li>
                <li className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">View Sample Workshop Curriculum</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Live Demo Available – App walkthrough + Workshop plan</span>
                </li>
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
            <p className="text-xl italic text-gray-300">
              &ldquo;A pôle of cultural innovation, open to all audiences.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Bakehouse Artist Tech Initiative
                </span>
              </h3>
              <p className="text-gray-400">Empowering artists with technology</p>
            </div>
            
            <div className="flex gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/workshop" className="text-gray-400 hover:text-white transition-colors">
                Workshops
              </Link>
              <Link href="https://moises.tech" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                Moises Sanabria
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Bakehouse Artist Tech Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 