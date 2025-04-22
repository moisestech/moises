'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Import Three.js components with dynamic loading to avoid SSR issues
const WorkshopCanvas = dynamic(
  () => import('@/components/canvas/WorkshopCanvas'),
  { ssr: false }
)

export default function WorkshopClient() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* Canvas Background - will be loaded client-side only */}
      <div className="absolute inset-0 z-0">
        <WorkshopCanvas />
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Glowing title with animation */}
          <div className="glow-container mb-6 relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent animate-text-gradient"
            >
              <span className="block hover-lift transition-transform duration-300">Art × Technology</span>
              <span className="block hover-lift transition-transform duration-300">Workshops</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="glow-effect absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
            />
          </div>
          
          {/* Animated subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl text-white/80 animate-fade-in hover-lift transition-transform duration-300"
          >
            Explore the intersection of creativity and innovation through 
            immersive learning experiences designed for artists and technologists.
          </motion.p>
          
          {/* Animated workshop link */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 animate-float"
          >
            <Link
              href="/workshop/own-your-digital-presence"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.8)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
              <span className="absolute inset-0 flex justify-center items-center">
                <span className="h-full w-full animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,white_10%,transparent_80%)] opacity-0 group-hover:opacity-20"></span>
              </span>
              <span className="relative flex items-center gap-2 font-medium transition-all duration-300">
                Own Your Digital Presence Workshop
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </motion.div>
          
          {/* Workshop features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Digital Presence",
                description: "Build and optimize your online portfolio and website.",
                link: "/workshop/own-your-digital-presence",
                disabled: false
              },
              {
                title: "SEO Workshop",
                description: "Get found, get seen, and expand your reach with search engine optimization strategies.",
                link: "https://fabiola.io/workshop_seo/index.html",
                disabled: false
              },
              {
                title: "Scale Tech Non-Profits",
                description: "Custom software solutions to help your organization and community grow.",
                link: "/workshop/tech-nonprofit",
                disabled: false
              },
              {
                title: "AI & Art",
                description: "Learn how to integrate AI tools into your creative process.",
                link: "/workshop/ai-and-the-arts",
                disabled: true
              },
              {
                title: "The Art of AI Marketing",
                description: "Learn how to stand out in the age of AI-generated content.",
                link: "/workshop/the-art-of-ai-marketing",
                disabled: true
              }
            ].map((feature, index) => (
              feature.disabled ? (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  className="backdrop-blur-md bg-white/5 p-6 rounded-xl transform transition-all duration-300 card-glass h-full flex flex-col border border-white/10 relative overflow-hidden cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-black/30 z-10"></div>
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-purple-500/80 text-white text-xs px-2 py-1 rounded-full">Coming Soon</span>
                  </div>
                  <div className="relative z-0">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400/50 to-purple-400/50 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-white/50">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <Link 
                  href={feature.link}
                  key={index}
                  target={feature.link.startsWith('http') ? '_blank' : '_self'}
                  rel={feature.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                    className="backdrop-blur-md bg-white/10 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] card-glass cursor-pointer h-full flex flex-col border border-white/10 group-hover:border-purple-500/50 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(147,51,234,0.2),rgba(0,0,0,0))]"></div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                        {feature.description}
                      </p>
                      <div className="mt-4 flex items-center text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm font-medium">Explore workshop</span>
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Glass footer with credits */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/10 p-4 text-center text-white/60 text-sm"
      >
        <p>
          Artist Tech Initiative — 
          <Link href="https://moises.tech" target="_blank" className="underline hover:text-white transition-colors">
            Moises Sanabria & Fabiola Larios
          </Link>
        </p>
      </motion.div>

      {/* Add some global styles for animations */}
      <style jsx global>{`
        @keyframes text-gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient 5s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .hover-lift:hover {
          transform: translateY(-3px);
        }
        
        .glow-effect {
          animation: glow 3s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          0% {
            opacity: 0.2;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }
        
        .card-glass {
          position: relative;
          overflow: hidden;
        }
        
        .card-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
        }
        
        .card-glass:hover::before {
          left: 100%;
        }
      `}</style>
    </main>
  )
} 