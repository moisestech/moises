'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/constants/resume'

interface SkillsProps {
  skills: Skill[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">SKILLS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <span className="text-sm text-gray-400">{skill.years} years</span>
            </div>
            
            {skill.technologies && (
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 