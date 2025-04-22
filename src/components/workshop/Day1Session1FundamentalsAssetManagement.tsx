'use client'

import { motion } from 'framer-motion'
import { 
  FolderGit2,
  FileImage,
  FileVideo,
  FileAudio,
  FileText,
  FolderOpen,
  HardDrive,
  Cloud,
  RefreshCw,
  Tags,
  Search,
  FolderTree
} from 'lucide-react'

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

const sections = [
  {
    title: "File Organization",
    description: "Create a clear and maintainable file structure",
    icon: FolderTree,
    color: "from-blue-500 to-blue-600",
    items: [
      {
        title: "Directory Structure",
        description: "Learn how to organize files by type and project",
        icon: FolderOpen
      },
      {
        title: "Naming Conventions",
        description: "Best practices for naming your files and folders",
        icon: Tags
      },
      {
        title: "Search & Retrieval",
        description: "Efficiently find and manage your assets",
        icon: Search
      }
    ]
  },
  {
    title: "Media Types",
    description: "Handle different types of media effectively",
    icon: FileImage,
    color: "from-purple-500 to-purple-600",
    items: [
      {
        title: "Images",
        description: "Manage your image files and formats",
        icon: FileImage
      },
      {
        title: "Videos",
        description: "Organize video content and thumbnails",
        icon: FileVideo
      },
      {
        title: "Documents",
        description: "Keep track of text and document files",
        icon: FileText
      }
    ]
  },
  {
    title: "Storage Solutions",
    description: "Choose the right storage for your needs",
    icon: HardDrive,
    color: "from-pink-500 to-pink-600",
    items: [
      {
        title: "Local Storage",
        description: "Organize assets on your computer",
        icon: HardDrive
      },
      {
        title: "Cloud Storage",
        description: "Use cloud services for backup and sharing",
        icon: Cloud
      },
      {
        title: "Version Control",
        description: "Track changes and maintain backups",
        icon: RefreshCw
      }
    ]
  }
]

export default function Day1Session1FundamentalsAssetManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
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
              <FolderGit2 className="w-16 h-16 text-white" />
              <FolderTree className="w-16 h-16 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Asset Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Learn how to organize and manage your digital assets like a professional studio.
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
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${section.color} rounded-xl p-6 shadow-md`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4"
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/90">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </main>
    </div>
  )
} 