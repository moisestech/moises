'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Image, FileText, MessageSquare, Layout, Users, Calendar, Globe } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const tools = [
  {
    title: "Bio Writing & Artist Statements",
    icon: FileText,
    description: "Generate and refine your artist bio and statements",
    prompt: "Write a professional artist bio (150 words) for a [medium] artist whose work explores [themes]. Include [specific details].",
    examples: [
      "Generate a bio in third person",
      "Create a more casual, first-person version",
      "Focus on specific projects or exhibitions"
    ]
  },
  {
    title: "Grant Proposals & Exhibition Descriptions",
    icon: MessageSquare,
    description: "Craft compelling grant applications and exhibition texts",
    prompt: "Write a grant proposal for a [project type] that explores [theme]. Include [specific requirements].",
    examples: [
      "Structure a project description",
      "Write an artist statement for a specific exhibition",
      "Create a budget justification"
    ]
  },
  {
    title: "Website Content & Layout",
    icon: Layout,
    description: "Plan and structure your website content",
    prompt: "Suggest a website structure for a [medium] artist with [number] of works. Include sections for [specific needs].",
    examples: [
      "Generate homepage content",
      "Create navigation structure",
      "Write section descriptions"
    ]
  },
  {
    title: "Social Media & Marketing",
    icon: Users,
    description: "Create engaging social media content",
    prompt: "Write [number] Instagram captions for [type of artwork] that explore [theme]. Include relevant hashtags.",
    examples: [
      "Generate exhibition announcements",
      "Create behind-the-scenes content",
      "Write promotional posts"
    ]
  },
  {
    title: "Workshop Planning",
    icon: Calendar,
    description: "Structure and plan workshops or classes",
    prompt: "Create a [duration] workshop outline for teaching [skill/medium] to [audience]. Include [specific goals].",
    examples: [
      "Generate lesson plans",
      "Create workshop descriptions",
      "Write learning objectives"
    ]
  },
  {
    title: "Research & Documentation",
    icon: Globe,
    description: "Research and document your practice",
    prompt: "Research [topic] in contemporary art and provide key points and references.",
    examples: [
      "Summarize art historical movements",
      "Research exhibition opportunities",
      "Document project development"
    ]
  }
];

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              AI Tools for Artists
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-8"
        >
          {/* Introduction */}
          <motion.section
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">AI Tools for Artists</h1>
            <p className="text-xl text-indigo-100">
              Practical applications of AI for enhancing your artistic practice and digital presence.
            </p>
          </motion.section>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-indigo-100">
                    <tool.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{tool.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Sample Prompt:</h3>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      {tool.prompt}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Examples:</h3>
                    <ul className="space-y-2">
                      {tool.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                          <p className="text-sm text-gray-600">{example}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
} 