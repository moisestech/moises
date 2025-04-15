'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Circle, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface SidebarSection {
  id: string
  title: string
  completed: boolean
  subsections?: {
    id: string
    title: string
    completed: boolean
  }[]
}

const sidebarSections: SidebarSection[] = [
  {
    id: 'overview',
    title: 'Workshop Overview',
    completed: true,
    subsections: [
      { id: 'welcome', title: 'Welcome + Overview', completed: true },
      { id: 'digital-presence', title: 'Why Digital Presence Matters', completed: true }
    ]
  },
  {
    id: 'examples',
    title: 'Artist Examples',
    completed: false,
    subsections: [
      { id: 'case-studies', title: '10 Artist Website Examples', completed: false },
      { id: 'analysis', title: 'Group Reflections', completed: false }
    ]
  },
  {
    id: 'foundations',
    title: 'Website Foundations',
    completed: false,
    subsections: [
      { id: 'vocabulary', title: 'Vocabulary Basics', completed: false },
      { id: 'homepage', title: 'Homepage Principles', completed: false },
      { id: 'media', title: 'Media Management', completed: false }
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI Tools Toolbox',
    completed: false,
    subsections: [
      { id: 'layout', title: 'Layout Mockups', completed: false },
      { id: 'assets', title: 'Art Assets', completed: false },
      { id: 'content', title: 'Content Generation', completed: false }
    ]
  },
  {
    id: 'resources',
    title: 'Resources & Worksheets',
    completed: false,
    subsections: [
      { id: 'worksheet', title: 'Site Planning Worksheet', completed: false },
      { id: 'checklist', title: 'Asset Checklist', completed: false },
      { id: 'templates', title: 'Templates & Guides', completed: false }
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>(['overview'])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const isActive = (sectionId: string, subsectionId?: string) => {
    const path = subsectionId 
      ? `/workshop/own-your-digital-presence/day/1/session/1/${sectionId}/${subsectionId}`
      : `/workshop/own-your-digital-presence/day/1/session/1/${sectionId}`
    return pathname === path
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-0 h-screen w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto"
    >
      <div className="space-y-4">
        {sidebarSections.map((section) => (
          <div key={section.id} className="space-y-2">
            <button
              onClick={() => toggleSection(section.id)}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                isActive(section.id) ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2">
                {section.completed ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <Circle className="h-4 w-4 text-gray-300" />
                )}
                <span className="font-medium">{section.title}</span>
              </div>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  expandedSections.includes(section.id) ? 'rotate-90' : ''
                }`}
              />
            </button>
            
            {expandedSections.includes(section.id) && section.subsections && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="pl-6 space-y-1"
              >
                {section.subsections.map((subsection) => (
                  <Link
                    key={subsection.id}
                    href={`/workshop/own-your-digital-presence/day/1/session/1/${section.id}/${subsection.id}`}
                    className={`block p-2 rounded-lg transition-colors ${
                      isActive(section.id, subsection.id)
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {subsection.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-300" />
                      )}
                      <span>{subsection.title}</span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
} 