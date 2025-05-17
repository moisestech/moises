'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

interface HeaderProps {
  name: string
  title: string
  location: string
  email: string
  linkedin: string
  github: string
}

export function Header({ name, title, location, email, linkedin, github }: HeaderProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D9DE0] via-[#E041B5] to-[#41E079]">
        {name}
      </h1>
      
      <h2 className="text-xl md:text-2xl text-gray-300">
        {title}
      </h2>
      
      <div className="flex items-center justify-center space-x-4 text-gray-400">
        <span>{location}</span>
        <span>•</span>
        <a
          href={`mailto:${email}`}
          className="hover:text-white transition-colors flex items-center space-x-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-4 h-4" />
          <span>{email}</span>
        </a>
        <span>•</span>
        <a
          href={`https://linkedin.com${linkedin}`}
          className="hover:text-white transition-colors flex items-center space-x-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <span>•</span>
        <a
          href={`https://${github}`}
          className="hover:text-white transition-colors flex items-center space-x-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </motion.div>
  )
} 