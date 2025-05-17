'use client'

import { motion } from 'framer-motion'
import { Project } from '@/constants/resume'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">PROJECTS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            
            <p className="text-gray-300">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 