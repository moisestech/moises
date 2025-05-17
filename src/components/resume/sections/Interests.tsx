'use client'

import { motion } from 'framer-motion'

interface InterestsProps {
  interests: string[]
}

export function Interests({ interests }: InterestsProps) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">INTERESTS</h2>
      
      <div className="flex flex-wrap gap-4">
        {interests.map((interest, index) => (
          <motion.div
            key={interest}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="px-4 py-2 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 rounded-full text-white"
          >
            {interest}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 