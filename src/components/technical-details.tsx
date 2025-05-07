'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Globe, Layers } from 'lucide-react'

export function TechnicalDetails() {
  const details = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web-Based Experience",
      description: "Built with Next.js, React Three Fiber, and WebGL for seamless 3D rendering in the browser."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Interactive Layers",
      description: "Multiple layers of interaction including 3D models, animations, and responsive UI elements."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Optimized for smooth performance across devices with dynamic loading and efficient rendering."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Modern Technologies",
      description: "Utilizing cutting-edge web technologies for immersive digital art experiences."
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
      {details.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-6 backdrop-blur-md bg-background/5 border border-foreground/10 rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-background/10">
              {detail.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
              <p className="text-foreground/70">{detail.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 