'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Image, Layout, Settings, Smartphone, Video, HelpCircle } from 'lucide-react'
import Link from 'next/link'

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

const templates = [
  {
    name: "Iris",
    description: "Modern design with clean header and footer, featuring testimonials, Instagram feed, and subscription form.",
    features: ["Lightbox gallery", "Contact form", "Testimonials section"]
  },
  {
    name: "Verano",
    description: "Unique horizontal parallax scrolling with disappearing header and testimonial slider.",
    features: ["Horizontal parallax", "Blog section", "Portfolio showcase"]
  },
  {
    name: "Noire",
    description: "Sleek black design with elegant image sliding and blog carousel.",
    features: ["Dark theme", "Gallery page", "Testimonial slider"]
  },
  {
    name: "Unearth",
    description: "Clean yet bold design with three different gallery layouts.",
    features: ["Multiple gallery layouts", "Dark footer", "Text parallax"]
  },
  {
    name: "Luna",
    description: "Vast parallax backgrounds with elegant page transitions.",
    features: ["Instagram feed", "Contact form", "Service pages"]
  }
]

const setupSteps = [
  {
    title: "Choose Template",
    description: "Select a Squarespace template that supports parallax scrolling",
    icon: Layout
  },
  {
    title: "Customize Sections",
    description: "Add and customize sections for parallax scrolling",
    icon: Settings
  },
  {
    title: "Add Images",
    description: "Upload high-quality images for parallax sections",
    icon: Image
  },
  {
    title: "Enable Parallax",
    description: "Enable parallax scrolling in section settings",
    icon: Video
  },
  {
    title: "Mobile Preview",
    description: "Test and adjust for mobile responsiveness",
    icon: Smartphone
  }
]

const faqs = [
  {
    question: "Do all Squarespace templates support parallax scrolling?",
    answer: "Not all templates have built-in parallax features. Choose templates specifically designed with parallax effects."
  },
  {
    question: "Will parallax scrolling affect loading speed?",
    answer: "Parallax effects can impact loading times, especially with high-resolution images. Optimize images for web use."
  },
  {
    question: "Can I customize parallax scrolling speed?",
    answer: "Direct speed customization isn't available in standard settings. Custom CSS or JavaScript may be required."
  }
]

export default function SquarespacePlatformClientDay3Parallax() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/3/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Advanced Layout</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Squarespace Parallax Guide
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
          {/* Introduction */}
          <motion.section
            variants={fadeIn}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Squarespace Parallax Guide</h1>
            <p className="text-xl text-blue-100">
              Learn how to create immersive scrolling experiences with Squarespace's parallax features
            </p>
          </motion.section>

          {/* Setup Steps */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {setupSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Templates */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Popular Parallax Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <ul className="space-y-2">
                    {template.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQs */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-100">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 