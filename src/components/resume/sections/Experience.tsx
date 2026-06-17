'use client'

import { motion } from 'framer-motion'
import { Experience as ExperienceType } from '@/constants/resume'

interface ExperienceProps {
  experiences: ExperienceType[]
}

function CompanyName({ company, url }: { company: string; url?: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:text-blue-400"
      >
        {company}
      </a>
    )
  }
  return <>{company}</>
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">EXPERIENCE</h2>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.period}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="space-y-2"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  <CompanyName company={experience.company} url={experience.companyUrl} />
                </h3>
                <p className="text-gray-300">{experience.title}</p>
              </div>
              <div className="text-gray-400 text-sm">
                {experience.period}
                <span className="mx-2">•</span>
                {experience.location}
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {experience.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            {experience.technologies && (
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
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