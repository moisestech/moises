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
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import FlipText from "@/components/ui/flip-text"
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
  { name: "Course Index", href: "#course-index" },
  { name: "Day 1", href: "#day-1" },
  { name: "Day 2", href: "#day-2" },
  { name: "Day 3", href: "#day-3" },
  { name: "Day 4", href: "#day-4" },
];

export default function DigitalPresenceClient() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  // Add smooth scrolling behavior
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
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`
                  w-full px-6 py-4 text-left text-lg font-medium transition-colors
                  ${activeSection === item.href.slice(1)
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-black hover:bg-gray-50"
                  }
                `}
              >
                {item.name}
              </button>
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

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo + Text */}
          <div className="flex items-end justify-end gap-4">
            <div className="flex items-end justify-end gap-2">
              <FlipText
                duration={0.5}
                delayMultiple={0.05}
                className="text-2xl text-indigo-600 tracking-tight"
              >
                Own Your Digital Presence
              </FlipText>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-black hover:text-indigo-600"
                }`}
              >
                {item.name}
              </button>
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
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
          <div className="relative container py-12 md:py-24">
            <div className="max-w-3xl space-y-4 md:space-y-5">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                Build Your Website: Own Your Digital Presence
              </h1>
              <p className="text-lg md:text-xl text-white">
                A practical, hands-on course designed to teach accessible and open-source solutions to design, host, and manage your website domain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-white/90"
                >
                  Join Waitlist
                </Button>
              </div>
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                  Workshop Overview
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  This four-day intensive weekend workshop equips artists and creators with the knowledge, skills, and web fundamentals needed to build and optimize their websites.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Layers className="text-blue-600 h-5 w-5" />
                    Scope of the Course
                  </h3>
                  <p className="text-gray-700">
                    {`Attendees will learn web design principles, build shareable websites and explore UX/UI fundamentals. The course covers how to launch, host, and build websites using SquareSpace, Wix, Github, as well as HTML, CSS, JS. By the end, you'll have a functional webpage and a strong foundation in web design principles.`}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-purple-100"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="text-purple-600 h-5 w-5" />
                    Who Can Participate
                  </h3>
                  <p className="text-gray-700">
                    Open to beginners, artists, and creators from Bakehouse with no prior experience in coding or web design. The instructor will be available for questions during breaks and after sessions.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-sm border border-indigo-100"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="text-indigo-600 h-5 w-5" />
                    Course Length
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Duration:</strong> 4 Days (Friday - Monday)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Schedule:</strong> Friday, Saturday, Sunday, and Monday. 6 hours each day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Sessions:</strong> 3 hours in the morning, break, then 3 hours in the afternoon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Total Hours:</strong> 24 hours (6 hours/day)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span><strong>Format:</strong> Combination of virtual and in-person, with office hours for individual guidance</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-sm border border-purple-100"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="text-blue-600 h-5 w-5" />
                    Fee Structure
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Market Rate:</strong> $50 x 24 hours = $1,200 per participant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Discounted Rate:</strong> $2,000 total (group rate)</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                variants={fadeIn}
                className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Laptop className="h-5 w-5" />
                  Requirements for Participation
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-200 mt-1">•</span>
                    <span>Laptop or desktop computer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-200 mt-1">•</span>
                    <span>Reliable internet connection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-200 mt-1">•</span>
                    <span>No prior coding or design knowledge required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-200 mt-1">•</span>
                    <span>Basic familiarity with using a web browser and file management is helpful</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <SectionDivider />

        {/* Course Index Section */}
        <section id="course-index" className="py-16 bg-gray-50">
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
                  Course Index
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive curriculum is structured to give you a complete overview of web development fundamentals.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="mt-8 space-y-6"
              >
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 group transition-all duration-300 hover:shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600 flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Pre-Engagement: Virtual Application Survey
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Before the workshop begins, participants will complete a survey to tailor the course to their needs. The survey will collect information such as your background, interests, experience level, and reference websites.
                  </p>
                  <div className="pl-6 border-l-2 border-indigo-200">
                    <p className="text-gray-600 italic">
                      As an attendee, you should have all of your assets ready ahead of time to take the most advantage of this workshop.
                    </p>
                  </div>
                </div>

                <div id="day-1" className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100 group transition-all duration-300 hover:shadow-md">
                  <motion.h3 
                    variants={fadeIn}
                    className="text-lg font-semibold mb-3 text-blue-600 flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Day 1 (Virtual - Friday Late Afternoon): Foundations of Website Creation
                  </motion.h3>
                  
                  <div className="space-y-4 mt-4">
                    <motion.div 
                      variants={fadeIn}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2">Session 1: Understanding Websites & Digital Presence (1 Hour)</h4>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        <li>Introduction and participant intros</li>
                        <li>Discussion: Reference websites artists admire and why</li>
                        <li>Key considerations: Costs, complexity, maintainability, link rot</li>
                        <li>Making a sustainable web presence for artists</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      variants={fadeIn}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2">Session 2: Domains, Hosting, and Web Platforms (1 Hour)</h4>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        <li>Domains and hosting overview: Namecheap, GoDaddy, shared vs. cloud hosting</li>
                        <li>AI-Powered Domain, and Website Creation Tools</li>
                        <li>Choosing the right platform: SquareSpace, Wix, WordPress</li>
                        <li>No-code vs. custom-coded sites: Evaluating trade-offs</li>
                        <li>Introduction to GitHub as a hosting solution</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>

                <div id="day-2" className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-indigo-100 group transition-all duration-300 hover:shadow-md">
                  <motion.h3 
                    variants={fadeIn}
                    className="text-lg font-semibold mb-3 text-indigo-600 flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Day 2 (In-Person - Saturday): Architecting Your Website
                  </motion.h3>
                  
                  <div className="space-y-4 mt-4">
                    <motion.div 
                      variants={fadeIn}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2">Morning Session: Essential Web Components & Functionality</h4>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        <li>Understanding web structure: Headers, footers, sections, and grids</li>
                        <li>Add AI wireframing tools (Figma with AI)</li>
                        <li>Components overview: Carousels, modals, menus, image galleries</li>
                        <li>Mobile-first design: Why it matters and how to optimize</li>
                        <li>Hands-on: Planning your site layout with sketches and wireframes</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      variants={fadeIn}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2">Afternoon Session: Connecting Content to Your Pages</h4>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        <li>How images, text, and links integrate into web pages</li>
                        <li>Structuring and linking sections for better navigation</li>
                        <li>Understanding file formats: JPG, PNG, SVG, and optimizing for the web</li>
                        <li>Workshop: Creating a basic site framework with placeholders</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>

                <div id="day-3" className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm border border-blue-100 group transition-all duration-300 hover:shadow-md">
                  <motion.h3 
                    variants={fadeIn}
                    className="text-lg font-semibold mb-3 text-purple-600 flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Day 3 (In-Person - Sunday): Building Your Website
                  </motion.h3>
                  
                  <div className="space-y-4 mt-4">
                    <motion.div 
                      variants={fadeIn}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2">Morning Session: HTML, Metadata, & GitHub Fundamentals</h4>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        <li>HTML Basics: Structure, tags, and elements</li>
                        <li>Introduction to GitHub: Repositories, version control, and GitHub Pages hosting</li>
                        <li>Workshop: Building a static homepage from scratch with HTML</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      variants={fadeIn}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2">Afternoon Session: Styling & Interactivity</h4>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        <li>CSS fundamentals: Layout, colors, typography, and spacing</li>
                        <li>Adding interactivity with JavaScript: Buttons, forms, and simple animations</li>
                        <li>Show AI animation tools that require minimal coding</li>
                        <li>Workshop: Implementing styles and interactive elements</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>

                <div id="day-4" className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-sm border border-purple-100 group transition-all duration-300 hover:shadow-md">
                  <motion.h3 
                    variants={fadeIn}
                    className="text-lg font-semibold mb-3 text-blue-600 flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Day 4 (Virtual - Monday Evening): Advanced Features & Launch
                  </motion.h3>
                  
                  <div className="space-y-4 mt-4">
                    <motion.div 
                      variants={fadeIn}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2">Morning Session: Responsive Design & Data Management</h4>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        <li>Adapting sites for mobile and desktop users</li>
                        <li>Connecting forms and collecting data securely</li>
                        <li>Basics of user data management and privacy policies</li>
                        <li>Hands-on: Ensuring your website is responsive and functional</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      variants={fadeIn}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2">Afternoon Session: Publishing, Optimization & Final Presentation</h4>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        <li>Debugging common issues and improving website performance</li>
                        <li>Hosting final sites: GitHub Pages, Wix, or Squarespace</li>
                        <li>Testing and optimizing for speed, usability, and accessibility</li>
                        <li>Final Project Showcase: Participants present their completed websites</li>
                        <li>Wrap-up: Resources for continued learning, and best practices for maintenance</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* Final CTA Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-6"
              >
                Ready to Own Your Digital Presence?
              </motion.h2>
              
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              >
                Join our community of artists and creators learning to build and manage their own digital spaces. Sign up for the waitlist and be the first to know when registration opens.
              </motion.p>
              
              <motion.div
                variants={fadeIn}
              >
                <Button 
                  size="lg" 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:opacity-90"
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Workshop Instructor Info */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
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
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
                    <div className="h-48 w-48 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                      <PenTool className="h-16 w-16 text-indigo-600" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Bakehouse Artist Tech Initiative</h2>
                    <p className="text-gray-600 mb-6">
                      A collaborative program designed to empower artists with technology skills for the digital age.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-indigo-600 mb-2">About the Instructor</h3>
                    <p className="text-gray-700 mb-4">
                      Our workshop is led by experienced web developers and designers who specialize in artist websites and digital presence. They bring years of practical experience helping creators establish their online identity.
                    </p>
                    
                    <div className="flex gap-4 mt-6">
                      <Link href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1">
                        Learn more <ChevronRight className="h-4 w-4" />
                      </Link>
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
              <h2 className="text-2xl font-bold mb-6">
                Bakehouse Artist Tech Initiative
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                {`Empowering artists with the digital skills needed to thrive in today's technology-driven world.`}
              </p>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Bakehouse Art Complex. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 