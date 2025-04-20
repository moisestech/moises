'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Code, GitBranch, FileCode, Shield, Zap, Terminal, Globe } from 'lucide-react';
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
    title: "Version Control",
    icon: GitBranch,
    description: "Track and manage changes to your website",
    details: [
      "Git version control",
      "Branch management",
      "Commit history",
      "Collaboration tools"
    ]
  },
  {
    title: "Static Site Hosting",
    icon: Globe,
    description: "Fast and reliable hosting for your portfolio",
    details: [
      "Free hosting",
      "Custom domains",
      "SSL certificates",
      "Global CDN"
    ]
  },
  {
    title: "Jekyll Integration",
    icon: FileCode,
    description: "Powerful static site generator",
    details: [
      "Markdown support",
      "Custom themes",
      "Blog functionality",
      "Plugin ecosystem"
    ]
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    description: "Advanced development features",
    details: [
      "GitHub Actions",
      "Pull requests",
      "Issue tracking",
      "Project management"
    ]
  }
];

const steps = [
  {
    title: "Setup",
    description: "Create your GitHub account and repository",
    checklist: [
      "Create GitHub account",
      "Set up SSH keys",
      "Create new repository",
      "Enable GitHub Pages"
    ]
  },
  {
    title: "Development",
    description: "Set up your local development environment",
    checklist: [
      "Install Git",
      "Install Jekyll",
      "Clone repository",
      "Configure local environment"
    ]
  },
  {
    title: "Content Creation",
    description: "Add and organize your content",
    checklist: [
      "Create portfolio pages",
      "Add artwork content",
      "Set up blog posts",
      "Configure navigation"
    ]
  },
  {
    title: "Deployment",
    description: "Deploy and maintain your website",
    checklist: [
      "Push changes to GitHub",
      "Set up custom domain",
      "Configure SSL",
      "Monitor performance"
    ]
  }
];

const bestPractices = [
  {
    title: "Development",
    icon: Code,
    items: [
      "Use semantic HTML",
      "Follow Git best practices",
      "Write clear commit messages",
      "Use feature branches"
    ]
  },
  {
    title: "Performance",
    icon: Zap,
    items: [
      "Optimize images",
      "Minimize CSS/JS",
      "Use lazy loading",
      "Enable caching"
    ]
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      "Keep dependencies updated",
      "Use strong passwords",
      "Enable 2FA",
      "Regular backups"
    ]
  },
  {
    title: "Content",
    icon: FileCode,
    items: [
      "Use Markdown effectively",
      "Organize content structure",
      "Add meta descriptions",
      "Include alt text"
    ]
  }
];

export default function GitHubPlatformClient() {
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
              GitHub Pages Guide
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
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">GitHub Pages Guide</h1>
            <p className="text-xl text-gray-200">
              Learn how to create a professional artist website using GitHub Pages and Jekyll
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
                    <div className="p-3 rounded-lg bg-gray-100">
                      <feature.icon className="w-6 h-6 text-gray-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2" />
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
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.checklist.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2" />
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
                    <div className="p-3 rounded-lg bg-gray-100">
                      <practice.icon className="w-6 h-6 text-gray-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{practice.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {practice.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2" />
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