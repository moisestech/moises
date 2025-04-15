'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { type Segment, type Resource } from '@/constants/workshop'

interface BaseSessionClientProps {
  title: string
  description: string
  duration: string
  segments: Segment[]
}

const BaseSessionClient = ({ title, description, duration, segments }: BaseSessionClientProps) => {
  const [activeSegment, setActiveSegment] = useState<Segment>(segments[0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Session Header */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">{title}</h1>
              <span className="text-zinc-400">{duration}</span>
            </div>
            <p className="text-zinc-400 mt-4">{description}</p>
          </motion.div>

          {/* Segment Navigation */}
          <motion.div variants={itemVariants} className="flex space-x-4 overflow-x-auto">
            {segments.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(segment)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeSegment.id === segment.id
                    ? 'bg-yellow-500 text-zinc-900'
                    : 'hover:bg-zinc-700'
                }`}
              >
                {segment.title}
              </button>
            ))}
          </motion.div>

          {/* Segment Content */}
          <motion.div
            key={activeSegment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">{activeSegment.title}</h2>
            <p className="text-zinc-400">{activeSegment.description}</p>

            {/* Activities */}
            {activeSegment.activities && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Activities</h3>
                <ul className="list-disc list-inside space-y-2">
                  {activeSegment.activities.map((activity, index) => (
                    <li key={index} className="text-zinc-300">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Platform-Specific Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeSegment.wix && (
                <div className="p-4 rounded-lg bg-zinc-800">
                  <h3 className="text-lg font-semibold mb-2">Wix Guide</h3>
                  <p className="text-zinc-400">{activeSegment.wix}</p>
                </div>
              )}
              {activeSegment.squarespace && (
                <div className="p-4 rounded-lg bg-zinc-800">
                  <h3 className="text-lg font-semibold mb-2">Squarespace Guide</h3>
                  <p className="text-zinc-400">{activeSegment.squarespace}</p>
                </div>
              )}
              {activeSegment.github && (
                <div className="p-4 rounded-lg bg-zinc-800">
                  <h3 className="text-lg font-semibold mb-2">GitHub Resources</h3>
                  <p className="text-zinc-400">{activeSegment.github}</p>
                </div>
              )}
            </div>

            {/* Resources */}
            {activeSegment.resources && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeSegment.resources.map((resource) => (
                    <a
                      key={resource.id}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{resource.title}</h4>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <p className="text-zinc-400 mt-2">{resource.description}</p>
                      {resource.platform && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs rounded bg-zinc-700">
                          {resource.platform}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

export default BaseSessionClient 