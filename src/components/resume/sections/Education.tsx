'use client'

import { motion } from 'framer-motion'
import { Education as EducationType } from '@/constants/resume'

interface EducationProps {
  education: EducationType[]
}

export function Education({ education }: EducationProps) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">EDUCATION</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                <p className="text-gray-300">{edu.degree}</p>
              </div>
              <div className="text-gray-400 text-sm mt-2 md:mt-0">
                {edu.period}
                <span className="mx-2">•</span>
                {edu.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 