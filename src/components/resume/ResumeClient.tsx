'use client'

import { motion } from 'framer-motion'
import { resumeData } from '@/constants/resume'
import { Header } from './sections/Header'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Education } from './sections/Education'
import { Projects } from './sections/Projects'
import { Interests } from './sections/Interests'

export default function ResumeClient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 max-w-6xl"
    >
      <div className="space-y-12">
        <Header
          name={resumeData.name}
          title={resumeData.title}
          location={resumeData.location}
          email={resumeData.email}
          linkedin={resumeData.linkedin}
          github={resumeData.github}
        />
        
        <Experience experiences={resumeData.experience} />
        
        <Skills skills={resumeData.skills} />
        
        <Education education={resumeData.education} />
        
        <Projects projects={resumeData.projects} />
        
        <Interests interests={resumeData.interests} />
      </div>
    </motion.div>
  )
} 