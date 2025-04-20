'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Layout, Image, FileText, Users, Zap, Shield, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    title: "Design Tools",
    icon: Layout,
    description: "Professional design capabilities",
    details: [
      "Custom templates",
      "Style editor",
      "Mobile optimization",
      "Design flexibility"
    ]
  },
  {
    title: "Portfolio Features",
    icon: Image,
    description: "Specialized tools for artists",
    details: [
      "Gallery layouts",
      "Portfolio templates",
      "Image optimization",
      "Lightbox effects"
    ]
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Sell your artwork online",
    details: [
      "Product galleries",
      "Inventory management",
      "Payment processing",
      "Order tracking"
    ]
  },
  {
    title: "Content Management",
    icon: FileText,
    description: "Easy content organization",
    details: [
      "Blog functionality",
      "Page scheduling",
      "Multiple authors",
      "Content versioning"
    ]
  }
];

const steps = [
  {
    title: "Getting Started",
    description: "Set up your Squarespace account and choose a template",
    checklist: [
      "Create Squarespace account",
      "Select a portfolio template",
      "Choose a domain name",
      "Set up your profile"
    ]
  },
  {
    title: "Design",
    description: "Customize your website's appearance",
    checklist: [
      "Upload your artwork",
      "Customize colors and fonts",
      "Add your branding",
      "Set up navigation"
    ]
  },
  {
    title: "Content",
    description: "Add and organize your content",
    checklist: [
      "Create portfolio pages",
      "Add artwork descriptions",
      "Set up your blog",
      "Add contact information"
    ]
  },
  {
    title: "E-commerce Setup",
    description: "Configure your online store",
    checklist: [
      "Add product listings",
      "Set up payment methods",
      "Configure shipping options",
      "Test checkout process"
    ]
  }
];

const bestPractices = [
  {
    title: "Design",
    icon: Layout,
    items: [
      "Keep design clean and focused",
      "Use consistent branding",
      "Ensure good contrast",
      "Optimize for mobile"
    ]
  },
  {
    title: "Content",
    icon: FileText,
    items: [
      "Write compelling descriptions",
      "Use high-quality images",
      "Add alt text",
      "Keep content fresh"
    ]
  },
  {
    title: "Performance",
    icon: Zap,
    items: [
      "Optimize image sizes",
      "Use built-in tools",
      "Regular updates",
      "Monitor analytics"
    ]
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      "Enable SSL",
      "Use strong passwords",
      "Regular backups",
      "Secure forms"
    ]
  }
];

export default function SquarespacePlatformClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Squarespace Platform Guide
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
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Squarespace Platform Guide</h1>
            <p className="text-xl text-purple-100">
              Learn how to create a professional artist website using Squarespace
            </p>
          </motion.section>

          {/* Features */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Steps */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Getting Started</h2>
            <div className="grid grid-cols-1 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.checklist.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Best Practices */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <practice.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{practice.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {practice.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 