'use client'

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
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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

// Custom divider component with blue/purple theme
const SectionDivider = () => (
  <div className="container py-8">
    <div className="flex items-center justify-center gap-4">
      <div className="h-px bg-indigo-200 flex-1" />
      <div className="flex gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-400" />
        <div className="h-2 w-2 rounded-full bg-indigo-500" />
        <div className="h-2 w-2 rounded-full bg-purple-500" />
      </div>
      <div className="h-px bg-indigo-200 flex-1" />
    </div>
  </div>
);

// Navigation items
const navigation = [
  { name: "Overview", href: "#overview" },
  { name: "Schedule", href: "#schedule" },
  { name: "What You'll Learn", href: "#learn" },
  { name: "Eligibility", href: "#eligibility" },
  { name: "Apply", href: "#apply" },
  { name: "Instructor", href: "#instructor" },
];

// Add placeholder image URLs
const PLACEHOLDER_IMAGES = {
  hero: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030235/own-your-digital-presence/website-building-hero-image_exoyv7.png",
  schedule: {
    day1: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030298/own-your-digital-presence/website-building-day-1-virtual-session_qk0esh.jpg",
    day2: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030278/own-your-digital-presence/website-building-day-2-3-weekend-in-person_jm1abi.jpg",
    day3: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030278/own-your-digital-presence/website-building-day-2-3-weekend-in-person_jm1abi.jpg",
    day4: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030367/own-your-digital-presence/website-building-day-4-online-presentations_tncppm.jpg"
  }
}

// Add animated gradient text component
const AnimatedGradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
    {children}
  </span>
);

export default function DigitalPresenceClient() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Add schedule details
  const scheduleDetails = {
    day1: [
      "Introduction to website building fundamentals",
      "Understanding domains and hosting options",
      "Overview of no-code platforms",
      "Basic design principles and best practices",
      "Setting up your development environment"
    ],
    day2: [
      "Hands-on website creation workshop",
      "Customizing templates and layouts",
      "Adding and organizing content",
      "Mobile responsiveness basics",
      "Integrating social media links"
    ],
    day4: [
      "Advanced features and customization",
      "Social media integration",
      "Website performance optimization",
      "Final website review and feedback",
      "Launch preparation and next steps"
    ]
  };

  // Add countdown timer state
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  });
  
  // Set the deadline date - April 14, 2025 at 11:59 pm EST
  useEffect(() => {
    const deadline = new Date("April 14, 2025 23:59:00 EDT").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = deadline - now;
      
      if (timeLeft <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true
        });
      } else {
        setCountdown({
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
          expired: false
        });
      }
    };
    
    // Update countdown immediately and then every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Add scroll spy effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Update the scrollToSection function to remove animation logic
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close mobile menu after clicking
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or a service
    console.log("Submitting waitlist request:", { name, email });
    // Simulate successful submission
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsWaitlistOpen(false);
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 3000);
  };

  // Enhanced mobile menu with better styling and interaction
  const MobileMenu = () => (
    <div 
      className={`
        fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Menu Content */}
      <div className="relative w-4/5 max-w-sm h-full bg-white">
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-bold text-lg text-black">Navigation</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`
                  w-full px-6 py-4 text-left text-lg font-medium transition-colors
                  ${activeSection === item.href.slice(1)
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-black hover:bg-gray-50"
                  }
                `}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="p-4 border-t">
            <p className="text-sm text-black/60">
              © {new Date().getFullYear()} Bakehouse Artist Tech Initiative
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Waitlist Modal
  const WaitlistModal = () => (
    <div 
      className={`
        fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out
        ${isWaitlistOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsWaitlistOpen(false)}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-11/12 max-w-md rounded-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out">
        <button
          onClick={() => setIsWaitlistOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-xl font-bold mb-4">Join the Waitlist</h3>
        
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-medium">Thank you for joining!</p>
            <p className="text-gray-600 mt-2">{`We'll notify you when registration opens.`}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleWaitlistSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
              Join Waitlist
            </Button>
          </form>
        )}
      </div>
    </div>
  );

  // Add mouse move handler for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.querySelector('section');
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom || 
          e.clientX < rect.left || e.clientX > rect.right) {
        setMousePosition({ x: 0, y: 0 });
        return;
      }

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // 20px max movement
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo + Text */}
          <div className="flex items-end justify-end gap-4">
            <div className="flex items-end justify-end gap-2">
              <h1 className="text-2xl text-indigo-600 tracking-tight font-bold">
                Own Your Digital Presence
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-black hover:text-indigo-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Waitlist Modal */}
      <WaitlistModal />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-90"></div>
          <div className="relative container py-12 md:py-24 h-full">
            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
              <div className="space-y-4 md:space-y-5">
                <motion.div 
                  className="space-y-4 md:space-y-5"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.h1 
                    variants={textReveal}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white font-space-mono"
                  >
                    Website Building Workshop
                  </motion.h1>
                  <motion.p 
                    variants={textReveal}
                    className="text-lg md:text-xl text-white"
                  >
                    A practical, hands-on workshop designed to teach accessible and open-source solutions to design, host, and manage your website.
                  </motion.p>
                </motion.div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-full sm:w-auto group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                    <button 
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdnzQvUzZGQnyj6f9fQBepDDF-e7BuesQJLdzdldqVlk1h5mQ/viewform', '_blank')}
                      className="relative w-full px-8 py-4 bg-white rounded-lg leading-none flex items-center justify-center divide-x divide-gray-300"
                    >
                      <span className="pr-4 text-indigo-600 font-bold">APPLY</span>
                      <span className="pl-4 text-indigo-500 group-hover:text-indigo-700 flex items-center justify-center transition-colors">
                        NOW <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  </motion.div>
                </div>
                <div className="text-white/80 text-sm mt-4">
                  <p>Applications open: April 1, 2025</p>
                  <div className="font-semibold text-white mt-2">
                    <p className="mb-2">Application deadline: Monday, April 14, 2025 at 11:59 pm EST</p>
                    
                    {/* Countdown timer animation */}
                    {!countdown.expired ? (
                      <div className="flex justify-center gap-3 mt-3 text-base">
                        <div className="flex flex-col items-center">
                          <div className="bg-indigo-600/30 rounded-md px-3 py-1 min-w-[3.5rem] text-xl font-bold">
                            {countdown.days.toString().padStart(2, '0')}
                          </div>
                          <span className="text-xs mt-1 text-white/70">DAYS</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-indigo-600/30 rounded-md px-3 py-1 min-w-[3.5rem] text-xl font-bold animate-pulse-slow">
                            {countdown.hours.toString().padStart(2, '0')}
                          </div>
                          <span className="text-xs mt-1 text-white/70">HOURS</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-indigo-600/30 rounded-md px-3 py-1 min-w-[3.5rem] text-xl font-bold">
                            {countdown.minutes.toString().padStart(2, '0')}
                          </div>
                          <span className="text-xs mt-1 text-white/70">MINS</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-indigo-600/30 rounded-md px-3 py-1 min-w-[3.5rem] text-xl font-bold animate-pulse">
                            {countdown.seconds.toString().padStart(2, '0')}
                          </div>
                          <span className="text-xs mt-1 text-white/70">SECS</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-yellow-300">Application deadline has passed</p>
                    )}
                  </div>
                  <p className="font-semibold text-white mt-3">No Coding Experience Required!</p>
                </div>
              </div>
              <motion.div 
                className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <Image
                  src={PLACEHOLDER_IMAGES.hero}
                  alt="Website Building Workshop"
                  fill
                  className="object-cover"
                  style={{
                    transform: `scale(1.1)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workshop Overview Section */}
        <section id="overview" className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                variants={fadeIn}
                className="space-y-4 text-center mb-12"
              >
                <motion.h2 
                  variants={fadeIn}
                  className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 font-space-mono"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Workshop Overview
                </motion.h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  As <Link href="https://www.bacfl.org/" className="text-indigo-600 hover:text-indigo-800">Bakehouse</Link> continues to expand its <AnimatedGradientText>digital initiatives</AnimatedGradientText>, we are committed to providing artists with the tools to <AnimatedGradientText>navigate the evolving online landscape</AnimatedGradientText>. This workshop will give participants the technical and conceptual knowledge necessary to <AnimatedGradientText>establish a compelling online presence</AnimatedGradientText>.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-6">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1743021790/own-your-digital-presence/website-building-workshop-focus_wvkiwk.jpg"
                        alt="Workshop Focus"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Layers className="text-blue-600 h-5 w-5" />
                        Workshop Focus
                      </h3>
                      <p className="text-gray-700">
                        Led by Bakehouse artist Moises Sanabria, this workshop will equip artists and creators with the knowledge, skills, and web fundamentals needed to build and optimize their websites, while seamlessly incorporating AI tools throughout the process.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-purple-100"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-6">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1743022346/own-your-digital-presence/website-building-who-can-participate_egsesz.jpg"
                        alt="Who Can Participate"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="text-purple-600 h-5 w-5" />
                        Who Can Participate
                      </h3>
                      <p className="text-gray-700">
                        Open to artists affiliated with Bakehouse Art Complex, including studio residents and associate members, with no prior experience in coding or web design required.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section id="learn" className="py-16 bg-gray-50">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                variants={fadeIn}
                className="space-y-4 text-center mb-12"
              >
                <motion.h2 
                  variants={fadeIn}
                  className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 font-space-mono"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {`What You'll Learn`}
                </motion.h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive web design knowledge and practical skills for artists
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="space-y-6">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030835/own-your-digital-presence/website-building-technical-skills_a6sfj2.jpg"
                        alt="Technical Skills"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Code className="text-indigo-600 h-5 w-5" />
                        Technical Skills
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>Fundamentals of website creation (domains, hosting, platforms)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>No-code platforms like Squarespace and Wix</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>Basic coding with GitHub and version control</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="space-y-6">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030824/own-your-digital-presence/website-building-digital-presence_i5pkjy.jpg"
                        alt="Digital Presence"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Globe className="text-indigo-600 h-5 w-5" />
                        Digital Presence
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>Social link optimization, and Mobile-first responsive design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>Metadata optimization and accessibility best practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>Portfolio presentation and online engagement strategies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                variants={fadeIn}
                className="space-y-4 text-center mb-12"
              >
                <motion.h2 
                  variants={fadeIn}
                  className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 font-space-mono"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Workshop Schedule
                </motion.h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A four-day intensive hybrid workshop combining virtual and in-person sessions
                </p>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="text-blue-600 h-5 w-5" />
                        Day 1: Virtual Introduction
                      </h3>
                      <p className="text-gray-700">
                        Monday, April 24, 2025 at 6:00 - 8:30 PM - An introductory virtual session on the foundations of website building and design basics
                      </p>
                      <Link 
                        href="#learn" 
                        className="text-blue-600 hover:text-blue-800 mt-4 inline-flex items-center gap-1 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          setExpandedDay(expandedDay === "day1" ? null : "day1");
                        }}
                      >
                        Learn more <ChevronRight className={`h-4 w-4 transition-transform ${expandedDay === "day1" ? "rotate-90" : ""}`} />
                      </Link>
                    </div>
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={PLACEHOLDER_IMAGES.schedule.day1}
                        alt="Day 1 Workshop"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {expandedDay === "day1" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {scheduleDetails.day1.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm border border-indigo-100"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="text-indigo-600 h-5 w-5" />
                        Day 2 & 3: In-Person Workshop
                      </h3>
                      <p className="text-gray-700">
                        Saturday, April 26 & Sunday, April 27, 2025 at 10:00 AM - 3:00 PM at Bakehouse - Hands-on practice and website customization
                      </p>
                      <Link 
                        href="#learn" 
                        className="text-indigo-600 hover:text-indigo-800 mt-4 inline-flex items-center gap-1 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          setExpandedDay(expandedDay === "day2" ? null : "day2");
                        }}
                      >
                        Learn more <ChevronRight className={`h-4 w-4 transition-transform ${expandedDay === "day2" ? "rotate-90" : ""}`} />
                      </Link>
                    </div>
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={PLACEHOLDER_IMAGES.schedule.day2}
                        alt="Day 2 & 3 Workshop"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {expandedDay === "day2" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {scheduleDetails.day2.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl shadow-sm border border-purple-100"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="text-purple-600 h-5 w-5" />
                        Day 4: Virtual Wrap-up
                      </h3>
                      <p className="text-gray-700">
                        Monday, April 28, 2025 at 6:00 - 8:30 PM - A wrap-up virtual session on advanced features to ensure your website is responsive and functional
                      </p>
                      <Link 
                        href="#learn" 
                        className="text-purple-600 hover:text-purple-800 mt-4 inline-flex items-center gap-1 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          setExpandedDay(expandedDay === "day4" ? null : "day4");
                        }}
                      >
                        Learn more <ChevronRight className={`h-4 w-4 transition-transform ${expandedDay === "day4" ? "rotate-90" : ""}`} />
                      </Link>
                    </div>
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={PLACEHOLDER_IMAGES.schedule.day4}
                        alt="Day 4 Workshop"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {expandedDay === "day4" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {scheduleDetails.day4.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="py-16 bg-gray-50">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                variants={fadeIn}
                className="space-y-4 text-center mb-12"
              >
                <motion.h2 
                  variants={fadeIn}
                  className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 font-space-mono"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Eligibility & Requirements
                </motion.h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Open to Bakehouse artists with varying levels of experience
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    Who Can Apply
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Bakehouse studio residents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Bakehouse associate members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Artists with existing websites looking to redesign</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Laptop className="text-blue-600 h-5 w-5" />
                    Technical Requirements
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Laptop or desktop computer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Reliable internet connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Basic familiarity with web browsers</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Section */}
        <section id="apply" className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                variants={fadeIn}
                className="space-y-4 text-center mb-12"
              >
                <div className="relative h-[300px] w-full max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden bg-gray-50">
                  <Image
                    src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1743031965/own-your-digital-presence/website-building-survey-image_pu9rk3.png"
                    alt="Application Survey"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 font-space-mono">
                  How to Apply
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Submit your application to join our next workshop
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <ClipboardList className="h-6 w-6" />
                  Application Process
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                      <ClipboardList className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Pre-engagement Survey</h4>
                      <p className="text-white/80 text-sm">
                        Help us understand your goals and tailor the course to your needs
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Application Submission</h4>
                      <p className="text-white/80 text-sm">
                        Share your interest and goals for the workshop
                      </p>
                    </div>
                    <Send className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">Review Process</h4>
                      <p className="text-white/80 text-sm">
                        Applications reviewed by Bakehouse staff and Moises Sanabria
                      </p>
                    </div>
                    <UserCheck className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80">
                    Selected participants will be notified by April 15, 2025
                  </p>
                  <div className="mt-4 bg-white/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold mb-2 text-white">
                      Application Deadline: Monday, April 14, 2025 at 11:59 PM EST
                    </p>
                    {/* Countdown timer for application section */}
                    {!countdown.expired ? (
                      <div className="flex justify-start gap-3 mt-2">
                        <div className="flex flex-col items-center">
                          <div className="bg-white/10 rounded-md px-2 py-1 min-w-[2.5rem] text-sm font-bold">
                            {countdown.days.toString().padStart(2, '0')}
                          </div>
                          <span className="text-[10px] mt-1 text-white/70">DAYS</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-white/10 rounded-md px-2 py-1 min-w-[2.5rem] text-sm font-bold">
                            {countdown.hours.toString().padStart(2, '0')}
                          </div>
                          <span className="text-[10px] mt-1 text-white/70">HOURS</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-white/10 rounded-md px-2 py-1 min-w-[2.5rem] text-sm font-bold">
                            {countdown.minutes.toString().padStart(2, '0')}
                          </div>
                          <span className="text-[10px] mt-1 text-white/70">MINS</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-white/10 rounded-md px-2 py-1 min-w-[2.5rem] text-sm font-bold animate-pulse">
                            {countdown.seconds.toString().padStart(2, '0')}
                          </div>
                          <span className="text-[10px] mt-1 text-white/70">SECS</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-yellow-300 text-sm">Application deadline has passed</p>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="mt-8 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdnzQvUzZGQnyj6f9fQBepDDF-e7BuesQJLdzdldqVlk1h5mQ/viewform', '_blank')}
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:opacity-90 text-xl px-8 py-6 shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 animate-pulse [animation-duration:3s]"
                  >
                    Start Application
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Instructor Section */}
        <section id="instructor" className="py-16 bg-gray-50">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                variants={fadeIn}
                className="space-y-4 text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 font-space-mono">
                  About the Instructor
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet Moises Sanabria
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
                    <div className="relative h-full w-full">
                      <Image
                        src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1743020508/own-your-digital-presence/MoisesTech_Zepeto_2025_drfjjf.png"
                        alt="Moises Sanabria"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href="https://moises.tech" 
                        target="_blank"
                        className="hover:text-indigo-600 transition-colors"
                      >
                        Moises Sanabria
                      </Link>
                    </motion.h3>
                    <p className="text-gray-600 mb-6">
                      A Venezuelan-born, Miami-based interdisciplinary artist whose work explores the intersections of machine philosophy, digital culture, and memetics within the context of networked social media life.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-indigo-600 mb-2">Experience</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• 12 years of Frontend Engineering experience in JavaScript, HTML, CSS, and UI/UX</li>
                          <li>• Co-founder of AI24 Live</li>
                          <li>• Co-founder of digital art collective ART404 (Artnotfound)</li>
                          <li>• Resident artist at Bakehouse Art Complex since 2023</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-indigo-600 mb-2">Education</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• School of Poetic Computation</li>
                          <li>• The Cooper Union, New York</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div 
                className="relative h-16 w-48 mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1743038354/own-your-digital-presence/bac-logo-white_nzrksu.png"
                  alt="Bakehouse Art Complex Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h2 className="text-2xl font-bold mb-6">
                Bakehouse Artist Tech Initiative
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                {`Empowering artists with the digital skills needed to thrive in today's technology-driven world.`}
              </p>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Moises Sanabria. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Add keyframe animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}