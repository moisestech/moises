'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Image, Grid, Video, User, Type, MousePointerClick } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import { motion } from 'framer-motion'

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

const layoutOptions = [
  {
    title: "Banner Image",
    description: "A striking full-width image that immediately captures attention and sets the tone for your artistic practice",
    icon: Image,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Grid Layout",
    description: "A clean, organized grid showcasing multiple works at once, perfect for visual artists",
    icon: Grid,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Artist Video",
    description: "A dynamic video introduction or portfolio highlight that brings your work to life",
    icon: Video,
    color: "from-amber-500 to-orange-500"
  }
];

const essentialElements = [
  {
    title: "Name & Discipline",
    description: "Clearly display your name and artistic discipline to establish your professional identity",
    icon: User,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Artist Statement",
    description: "A concise introduction or statement that gives context to your work and practice",
    icon: Type,
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Clear Call-to-Action",
    description: "An obvious and simple CTA like 'View My Work' to guide visitors to your portfolio",
    icon: MousePointerClick,
    color: "from-violet-500 to-purple-500"
  }
];

const HomepagePage = () => {
  return (
    <>
      <ContentPage
      title="Homepage Foundations"
      description="Learn the essential elements and best practices for creating an effective artist portfolio homepage."
      icon={Home}
      sections={[
        {
          title: "Essential Homepage Elements",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Hero Section</h4>
                  <p className="text-gray-600 mb-2">Your homepage's first impression should include:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>A striking visual (your best artwork or a professional photo)</li>
                    <li>Your name and artistic identity</li>
                    <li>A brief, compelling tagline or artist statement</li>
                    <li>Clear navigation to key sections</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Portfolio Preview</h4>
                  <p className="text-gray-600 mb-2">Showcase your best work with:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>High-quality images of your artwork</li>
                    <li>Consistent image sizes and spacing</li>
                    <li>Clear categories or series groupings</li>
                    <li>Easy navigation to full portfolio</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">About Section</h4>
                  <p className="text-gray-600 mb-2">Include a brief introduction with:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Your artistic background and practice</li>
                    <li>Key themes or concepts in your work</li>
                    <li>Professional achievements or exhibitions</li>
                    <li>Link to full about page</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Contact Information</h4>
                  <p className="text-gray-600 mb-2">Make it easy for visitors to reach you:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Email address or contact form</li>
                    <li>Social media links</li>
                    <li>Studio location (if applicable)</li>
                    <li>Newsletter signup (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Visual Hierarchy</h4>
                  <p className="text-gray-600 mb-2">Guide visitors through your content:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use clear headings and subheadings</li>
                    <li>Maintain consistent spacing and alignment</li>
                    <li>Highlight important elements with size and color</li>
                    <li>Keep the layout clean and uncluttered</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Mobile Responsiveness</h4>
                  <p className="text-gray-600 mb-2">Ensure your site works well on all devices:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Test on different screen sizes</li>
                    <li>Optimize image loading for mobile</li>
                    <li>Use touch-friendly navigation</li>
                    <li>Maintain readability on small screens</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Loading Speed</h4>
                  <p className="text-gray-600 mb-2">Keep your site fast and efficient:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Optimize image sizes and formats</li>
                    <li>Minimize use of heavy animations</li>
                    <li>Use efficient code and caching</li>
                    <li>Test loading times regularly</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Brand Consistency</h4>
                  <p className="text-gray-600 mb-2">Maintain a cohesive look and feel:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use consistent colors and fonts</li>
                    <li>Maintain your artistic style throughout</li>
                    <li>Keep navigation consistent</li>
                    <li>Align with your social media presence</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Common Mistakes to Avoid",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Content Issues</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Too much text on the homepage</li>
                    <li>Unclear or missing contact information</li>
                    <li>Poor quality or inconsistent images</li>
                    <li>Outdated content or exhibitions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Technical Problems</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Slow loading times</li>
                    <li>Broken links or images</li>
                    <li>Non-responsive design</li>
                    <li>Poor mobile experience</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Design Pitfalls</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Overly complex navigation</li>
                    <li>Inconsistent branding</li>
                    <li>Poor color contrast</li>
                    <li>Cluttered layout</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Interactive Exercise",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Analyze Your Current Site</h4>
                  <p className="text-gray-600 mb-2">What do visitors see first? Is it clear who you are and what you do?</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Choose Your Hero Element</h4>
                  <p className="text-gray-600 mb-2">Select one key artwork, video, or statement to feature prominently.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Write Your Elevator Pitch</h4>
                  <p className="text-gray-600 mb-2">Craft a 2-3 sentence introduction that captures your artistic identity.</p>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />

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
              What Makes a Good Homepage?
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
          {/* Hero Section */}
          <motion.section
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Crafting Your Digital Front Door</h1>
            <p className="text-xl text-indigo-100">
              Your homepage is the first impression visitors have of your artistic practice. Make it count with these essential elements.
            </p>
          </motion.section>

          {/* Layout Options */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Layout Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {layoutOptions.map((option) => (
                <motion.div
                  key={option.title}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${option.color} shadow-lg`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                    </div>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Essential Elements */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Elements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {essentialElements.map((element) => (
                <motion.div
                  key={element.title}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${element.color} shadow-lg`}>
                        <element.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{element.title}</h3>
                    </div>
                    <p className="text-gray-600">{element.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Best Practices */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Keep It Simple</h3>
                  <p className="text-gray-600">Focus on clarity and ease of navigation. Visitors should immediately understand who you are and what you do.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Show Your Best Work</h3>
                  <p className="text-gray-600">Feature your strongest pieces prominently to make a lasting first impression.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                  <span className="text-indigo-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Make Contact Easy</h3>
                  <p className="text-gray-600">Ensure your contact information or inquiry form is easily accessible from the homepage.</p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </>    
  )
}

export default HomepagePage 