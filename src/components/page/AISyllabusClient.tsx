'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { GlassmorphicPanel } from "@/components/glassmorphic-panel"

interface Module {
  title: string
  description: string
  topics: string[]
  readings?: string[]
  assignments?: string[]
}

export default function AISyllabusClient() {
  const { theme } = useTheme()

  const modules: Module[] = [
    {
      title: "Introduction to AI in the Arts",
      description: "An overview of artificial intelligence and its impact on creative practices.",
      topics: [
        "History of AI in art",
        "Current state of AI art tools",
        "Ethical considerations",
        "Future implications"
      ],
      readings: [
        "The Artist in the Machine by Arthur I. Miller",
        "Artificial Intelligence and the Arts by Various Authors"
      ]
    },
    {
      title: "Generative AI and Creative Expression",
      description: "Exploring how AI can be used as a creative tool and collaborator.",
      topics: [
        "Text-to-image generation",
        "Style transfer",
        "Neural networks in art",
        "Creative coding with AI"
      ],
      assignments: [
        "Create an AI-generated artwork",
        "Experiment with style transfer",
        "Document your creative process"
      ]
    },
    {
      title: "AI and Traditional Art Forms",
      description: "Examining the intersection of AI with traditional artistic practices.",
      topics: [
        "AI in painting and drawing",
        "Music composition with AI",
        "Dance and movement",
        "Theater and performance"
      ],
      readings: [
        "AI and the Future of Creativity by Various Authors",
        "Selected research papers on AI in traditional arts"
      ]
    },
    {
      title: "Ethics and Responsibility",
      description: "Critical examination of ethical considerations in AI art.",
      topics: [
        "Copyright and ownership",
        "Bias in AI systems",
        "Cultural appropriation",
        "Environmental impact"
      ],
      assignments: [
        "Ethical analysis of AI art tools",
        "Create a responsible AI art project",
        "Group discussion on ethical implications"
      ]
    }
  ]

  return (
    <main className="relative w-full min-h-screen py-20">
      <div className="w-full max-w-4xl px-4 mx-auto">
        <GlassmorphicPanel className={`p-8 mb-12 border ${theme === 'dark' ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                AI and the Arts
              </h1>
              <p className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                Exploring the intersection of artificial intelligence and creative expression
              </p>
            </div>

            <div className="space-y-12">
              {modules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl ${
                    theme === 'dark' 
                      ? 'bg-black/30 border-white/10' 
                      : 'bg-white/30 border-black/10'
                  } border backdrop-blur-sm`}
                >
                  <h2 className={`text-xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {module.title}
                  </h2>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    {module.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-white/90' : 'text-black/90'
                      }`}>
                        Topics
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        {module.topics.map((topic) => (
                          <li key={topic} className={`text-sm ${
                            theme === 'dark' ? 'text-white/70' : 'text-black/70'
                          }`}>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {module.readings && (
                      <div>
                        <h3 className={`text-sm font-medium mb-2 ${
                          theme === 'dark' ? 'text-white/90' : 'text-black/90'
                        }`}>
                          Readings
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {module.readings.map((reading) => (
                            <li key={reading} className={`text-sm ${
                              theme === 'dark' ? 'text-white/70' : 'text-black/70'
                            }`}>
                              {reading}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {module.assignments && (
                      <div>
                        <h3 className={`text-sm font-medium mb-2 ${
                          theme === 'dark' ? 'text-white/90' : 'text-black/90'
                        }`}>
                          Assignments
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {module.assignments.map((assignment) => (
                            <li key={assignment} className={`text-sm ${
                              theme === 'dark' ? 'text-white/70' : 'text-black/70'
                            }`}>
                              {assignment}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </GlassmorphicPanel>
      </div>
    </main>
  )
} 