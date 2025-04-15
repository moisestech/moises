'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Image, Video, Paintbrush, Code, Users } from 'lucide-react';
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

const disciplines = [
  {
    title: "Sculptors",
    icon: Image,
    examples: [
      {
        name: "Jason Arkles",
        url: "jasonarkles.com",
        platform: "Squarespace",
        description: "Classical sculptor and educator with a clean, gallery-like website featuring minimal navigation and ample whitespace."
      },
      {
        name: "Andrea Lawl Manning",
        url: "andreamanningart.com",
        platform: "Format",
        description: "Sculptural artist using dried paint, with a visual-first experience and intuitive gallery interface."
      }
    ],
    bestPractices: [
      "High-quality photos on neutral backgrounds",
      "Simple menus (Work, About, Contact)",
      "Fullscreen image view for details",
      "Mobile-responsive image grids"
    ]
  },
  {
    title: "Performers",
    icon: Video,
    examples: [
      {
        name: "Anneliese Charek",
        url: "anneliesecharek.com",
        platform: "Custom",
        description: "Choreographer/Performer with vibrant, image-rich portfolio showcasing performances and collaborations."
      },
      {
        name: "Jake Howard",
        url: "jakehoward.net",
        platform: "Squarespace",
        description: "Actor with clean, effective portfolio featuring video reels and professional headshots."
      }
    ],
    bestPractices: [
      "Bold use of imagery and video",
      "Clear calls-to-action (Watch Reel, Download Resume)",
      "Mobile-friendly video galleries",
      "Integration with social media and IMDb"
    ]
  },
  {
    title: "Digital Artists",
    icon: Code,
    examples: [
      {
        name: "Yukai Du",
        url: "yukaidu.com",
        platform: "Wix",
        description: "Illustrator/Animator with dynamic, interactive website featuring animated hero sections and shop integration."
      },
      {
        name: "Daniel Aristizábal",
        url: "danielaristizabal.net",
        platform: "Wix Editor X",
        description: "3D Digital Artist with immersive one-page design and bold visual elements."
      }
    ],
    bestPractices: [
      "Interactive elements and animations",
      "Clear categorization by medium",
      "Shop integration for digital assets",
      "Responsive design with mobile fallbacks"
    ]
  },
  {
    title: "Painters",
    icon: Paintbrush,
    examples: [
      {
        name: "Zaria Forman",
        url: "zariaforman.com",
        platform: "Custom",
        description: "Pastel artist with gallery-like design and comprehensive exhibition listings."
      },
      {
        name: "Samantha Keely Smith",
        url: "samanthakeelysmith.com",
        platform: "Squarespace",
        description: "Oil painter with 'white cube' aesthetic and chronological portfolio organization."
      }
    ],
    bestPractices: [
      "Minimalistic, gallery-like design",
      "Chronological or thematic organization",
      "High-resolution image viewing",
      "Print sales integration"
    ]
  },
  {
    title: "Interdisciplinary Artists",
    icon: Users,
    examples: [
      {
        name: "Manuel Lozano",
        url: "manuel-lozano.art",
        platform: "Hostinger",
        description: "Multidisciplinary artist with chronological navigation and comprehensive portfolio sections."
      },
      {
        name: "Sophie Kahn",
        url: "sophiekahn.net",
        platform: "Squarespace",
        description: "Digital sculptor with hybrid portfolio format and clear navigation structure."
      }
    ],
    bestPractices: [
      "Clear categorization by medium",
      "Chronological or project-based organization",
      "Multimedia integration",
      "Mobile-optimized navigation"
    ]
  }
];

export default function ArtistWebsitesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              Artist Website Examples
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Introduction */}
          <motion.section variants={fadeIn} className="space-y-4">
            <h2 className="text-3xl font-space-mono font-bold text-gray-900">
              Artist Portfolio Websites: Examples and Best Practices
            </h2>
            <p className="text-lg text-gray-600">
              Explore real-world examples of successful artist websites across different disciplines. 
              Each example demonstrates how to effectively showcase artwork while maintaining usability 
              and clear navigation.
            </p>
          </motion.section>

          {/* Disciplines */}
          {disciplines.map((discipline) => (
            <motion.section key={discipline.title} variants={fadeIn} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-100">
                  <discipline.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-space-mono font-bold text-gray-900">
                  {discipline.title}
                </h3>
              </div>

              {/* Examples */}
              <div className="grid md:grid-cols-2 gap-6">
                {discipline.examples.map((example) => (
                  <div 
                    key={example.url}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-200 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {example.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-4">
                      {example.platform}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {example.description}
                    </p>
                    <a 
                      href={`https://${example.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Visit Website →
                    </a>
                  </div>
                ))}
              </div>

              {/* Best Practices */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Best Practices
                </h4>
                <ul className="space-y-2">
                  {discipline.bestPractices.map((practice) => (
                    <li key={practice} className="flex items-start gap-2 text-gray-600">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}

          {/* Summary */}
          <motion.section variants={fadeIn} className="bg-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                • Clarity and accessibility are paramount - core information should be easy to find
              </p>
              <p>
                • Visual style should complement the art - whether minimal or bold
              </p>
              <p>
                • Template-based builders (Squarespace, Wix, Format) offer mobile-ready designs
              </p>
              <p>
                • Custom implementations can push boundaries while maintaining usability
              </p>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 