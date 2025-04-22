'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Map,
  GalleryHorizontal,
  Palette,
  BookOpen,
  Type,
  Smartphone,
  Accessibility,
  Settings,
  FolderGit2,
  Calendar,
  Link2,
  Sparkles,
  LayoutGrid,
  Image as LucideImage,
  FileText,
  ClipboardList,
  FileCheck
} from 'lucide-react'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
}

const iconHover = {
  scale: 1.1,
  rotate: 5,
  transition: { duration: 0.2 }
}

const sections = [
  {
    title: "Structure & Layout",
    color: "from-blue-500 to-blue-600",
    icon: Map,
    description: "Learn how to organize your site like a gallery walkthrough",
    items: [
      {
        title: "Site Structure",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/structure",
        icon: LayoutGrid,
        description: "Create a clear sitemap and navigation flow"
      },
      {
        title: "Layout Design",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/layout",
        icon: GalleryHorizontal,
        description: "Design layouts that showcase your work effectively"
      },
      {
        title: "Platform Layouts",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/platforms",
        icon: Palette,
        description: "Compare layout options across different platforms"
      }
    ]
  },
  {
    title: "Showcasing Your Work",
    color: "from-purple-500 to-purple-600",
    icon: LucideImage,
    description: "Present your portfolio with impact and clarity",
    items: [
      {
        title: "Portfolio Display",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/portfolio",
        icon: GalleryHorizontal,
        description: "Choose the best way to display your work"
      },
      {
        title: "Media Optimization",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/media",
        icon: LucideImage,
        description: "Optimize images and videos for the web"
      },
      {
        title: "AI Visual Tools",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/ai-visuals",
        icon: Sparkles,
        description: "Use AI to enhance your visual presentation"
      }
    ]
  },
  {
    title: "Telling Your Story",
    color: "from-pink-500 to-pink-600",
    icon: BookOpen,
    description: "Write compelling content that connects with your audience",
    items: [
      {
        title: "Artist Statements",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/statements",
        icon: FileText,
        description: "Craft effective bios and artist statements"
      },
      {
        title: "Project Descriptions",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/projects",
        icon: Type,
        description: "Write engaging project descriptions"
      },
      {
        title: "AI Writing Tools",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/ai-writing",
        icon: Sparkles,
        description: "Use AI to refine your writing"
      }
    ]
  },
  {
    title: "Mobile & Accessibility",
    color: "from-green-500 to-green-600",
    icon: Smartphone,
    description: "Ensure your site works beautifully on all devices",
    items: [
      {
        title: "Mobile Design",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/mobile",
        icon: Smartphone,
        description: "Optimize for mobile viewing"
      },
      {
        title: "Accessibility",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/accessibility",
        icon: Accessibility,
        description: "Make your site accessible to everyone"
      }
    ]
  },
  {
    title: "Maintaining Your Site",
    color: "from-indigo-500 to-indigo-600",
    icon: Settings,
    description: "Build systems to keep your site fresh and up-to-date",
    items: [
      {
        title: "Asset Management",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/assets",
        icon: FolderGit2,
        description: "Organize and manage your digital assets"
      },
      {
        title: "Content Updates",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/updates",
        icon: Calendar,
        description: "Create a sustainable update schedule"
      },
      {
        title: "Link Management",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/links",
        icon: Link2,
        description: "Keep your external links organized"
      }
    ]
  },
  {
    title: "Resources",
    color: "from-yellow-500 to-yellow-600",
    icon: ClipboardList,
    description: "Access tools and templates to streamline your workflow",
    items: [
      {
        title: "Worksheet",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/worksheet",
        icon: ClipboardList,
        description: "Step-by-step guide to plan your website"
      },
      {
        title: "Checklist",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/checklist",
        icon: FileCheck,
        description: "Ensure you have everything you need"
      },
      {
        title: "Templates",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/templates",
        icon: FileText,
        description: "Ready-to-use templates for your content"
      }
    ]
  }
]

export default function Day1Session1Fundamentals() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-20" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <motion.div
              className="flex justify-center gap-8 mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles className="w-16 h-16 text-white" />
              <LayoutGrid className="w-16 h-16 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web Fundamentals
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Learn how to structure, showcase, and maintain your digital presence like a professional gallery.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {sections.map((section) => (
            <motion.section
              key={section.title}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color}`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  <p className="text-lg text-gray-600">{section.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <Link 
                    key={item.title}
                    href={item.href}
                    className="group block"
                  >
                    <motion.div
                      whileHover={cardHover}
                      className={`bg-gradient-to-r ${section.color} rounded-xl p-6 shadow-md transition-all`}
                    >
                      <motion.div
                        whileHover={iconHover}
                        className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4"
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-white/90">{item.description}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </main>
    </div>
  )
} 