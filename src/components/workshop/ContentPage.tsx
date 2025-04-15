'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

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

interface ContentPageProps {
  title: string
  description: string
  icon: LucideIcon
  sections: {
    title: string
    content: React.ReactNode
  }[]
}

export default function ContentPage({ title, description, icon: Icon, sections }: ContentPageProps) {
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
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <div className="prose prose-indigo max-w-none">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
} 