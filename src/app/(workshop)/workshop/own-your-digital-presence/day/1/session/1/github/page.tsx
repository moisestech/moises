'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { PlatformBadge } from '@/components/workshop/PlatformIcons';

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

const steps = [
  {
    title: 'Create GitHub Account',
    description: 'Set up your GitHub account to start building your portfolio.',
    details: [
      'Sign up with your email address',
      'Choose a username (this will be part of your portfolio URL)',
      'Complete your profile with basic information'
    ]
  },
  {
    title: 'GitHub Pages Setup',
    description: 'Learn how to use GitHub Pages to host your portfolio.',
    details: [
      'Create a new repository for your portfolio',
      'Enable GitHub Pages in repository settings',
      'Choose a publishing source (main branch)'
    ]
  },
  {
    title: 'Choose a Jekyll Theme',
    description: 'Select a theme that best suits your artistic style.',
    details: [
      'Browse through GitHub Pages compatible themes',
      'Preview themes with your content in mind',
      'Understand theme customization options'
    ]
  },
  {
    title: 'Basic Git Commands',
    description: 'Learn essential Git commands to manage your portfolio.',
    details: [
      'Clone your repository locally',
      'Make and commit changes',
      'Push updates to GitHub'
    ]
  }
];

export default function GitHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session</span>
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-space-mono font-medium text-gray-900">
                GitHub Workshop
              </h1>
              <PlatformBadge platform="github">GitHub</PlatformBadge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-8"
        >
          {/* Overview */}
          <motion.section variants={fadeIn} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-3xl font-space-mono font-bold text-gray-900 mb-4">
              Building Your Portfolio with GitHub
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Learn how to create a custom portfolio website using GitHub Pages and Jekyll themes. 
              This approach gives you full control over your website's design and functionality.
            </p>
          </motion.section>

          {/* Steps */}
          <motion.section variants={fadeIn} className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="space-y-4">
                    <h3 className="text-xl font-space-mono font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                    <ul className="space-y-2 text-gray-500">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <span className="text-indigo-500">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Next Steps */}
          <motion.section variants={fadeIn} className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-space-mono font-bold text-gray-900 mb-4">
              Next Steps
            </h3>
            <p className="text-gray-600 mb-4">
              After completing these steps, you'll have a solid foundation for your GitHub portfolio. 
              Continue to Session 2 to learn about content organization and customization.
            </p>
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/2"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-colors"
            >
              Continue to Session 2
            </Link>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 