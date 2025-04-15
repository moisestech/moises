'use client'

import { motion } from 'framer-motion'
import { Layout, FileText, Wand2, Image as ImageIcon } from 'lucide-react'
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

const setupSections = [
  {
    id: 'examples',
    title: 'Artist Website Examples',
    description: 'Explore 10 carefully curated artist websites that demonstrate effective design principles and content organization.',
    icon: Layout,
    link: '/workshop/own-your-digital-presence/day/1/session/1/studio-setup/examples'
  },
  {
    id: 'worksheet',
    title: 'Site Planning Worksheet',
    description: 'Use our interactive worksheet to plan your website structure, content, and design elements.',
    icon: FileText,
    link: '/workshop/own-your-digital-presence/day/1/session/1/studio-setup/worksheet'
  },
  {
    id: 'ai-tools',
    title: 'AI Tools Toolbox',
    description: 'Access our curated collection of AI tools for layout suggestions, content generation, and asset creation.',
    icon: Wand2,
    link: '/workshop/own-your-digital-presence/day/1/session/1/studio-setup/ai-tools'
  },
  {
    id: 'file-prep',
    title: 'File Preparation Hub',
    description: 'Learn best practices for preparing and optimizing your artwork images and other media files.',
    icon: ImageIcon,
    link: '/workshop/own-your-digital-presence/day/1/session/1/studio-setup/file-prep'
  }
]

export default function StudioSetupPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Welcome to Your Digital Studio</h2>
            <p className="text-lg text-gray-600">
              This section provides all the tools and resources you need to prepare for building your website. 
              From artist examples to AI-powered tools, we've got you covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {setupSections.map((section) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.id}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={section.link}
                    className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-50 rounded-lg">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {section.title}
                        </h3>
                        <p className="text-gray-600">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </main>
    </div>
  )
} 