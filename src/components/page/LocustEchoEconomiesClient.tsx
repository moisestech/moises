'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { useTheme } from '@/contexts/ThemeContext'
import { ChevronDown, ArrowRight, DollarSign, Brain, Tv, ShoppingCart, Disc3, Users, Target, Zap, Code2, Eye, Heart, BarChart3, PieChart as PieChartIcon, List } from 'lucide-react'
import Image from 'next/image'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Placeholder images - replace with actual project images
const images = {
  overview: "/images/research/locust/overview.jpg",
  datafall: "/images/research/locust/datafall-spine.jpg", 
  babyagi: "/images/research/locust/baby-agi.jpg",
  shoppers: "/images/research/locust/smart-shoppers.jpg",
  bootleg: "/images/research/locust/bootleg-future.jpg",
  statement: "/images/research/locust/artist-statement.jpg",
  budget: "/images/research/locust/budget.jpg",
  impact: "/images/research/locust/impact.jpg",
  // Additional images from previous works
  doomscrolling: "/images/research/locust/doomscrolling-treadmill.jpg",
  priceOfExistence: "/images/research/locust/price-of-existence.jpg",
  touchGrass: "/images/research/locust/touch-grass-station.jpg",
  digitalDivinities: "/images/research/locust/digital-divinities.jpg",
  artist: "/images/research/locust/artist-statement.jpg"
}

// Fallback gradient images when actual images aren't available
const gradientImages = {
  overview: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  datafall: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  babyagi: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  shoppers: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  bootleg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  statement: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  budget: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  impact: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  doomscrolling: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
  priceOfExistence: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  touchGrass: "linear-gradient(135deg, #00b894 0%, #00cec9 100%)",
  digitalDivinities: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)",
  artist: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
}

// Add budget data after the existing constants
const budgetData = {
  total: 3750,
  categories: [
    {
      name: "Hardware & Equipment",
      amount: 2100,
      percentage: 56,
      items: [
        { name: "9 × 42\" TVs (borrowed)", amount: 0, note: "Borrowed from partners" },
        { name: "3 × Raspberry Pi 4B", amount: 180, note: "Data processing hubs" },
        { name: "Servo motors & arms", amount: 450, note: "Kinetic sculpture movement" },
        { name: "3D printing materials", amount: 300, note: "Custom mounting hardware" },
        { name: "Holographic DVD sleeves", amount: 120, note: "BOOTLEG FUTURE component" },
        { name: "Cables & connectors", amount: 150, note: "Power and data distribution" },
        { name: "Backup equipment", amount: 900, note: "Spare parts and redundancy" }
      ]
    },
    {
      name: "Software & Development",
      amount: 800,
      percentage: 21,
      items: [
        { name: "MQTT server setup", amount: 200, note: "Data synchronization backbone" },
        { name: "Motion control scripts", amount: 300, note: "Servo programming" },
        { name: "Data visualization", amount: 200, note: "Real-time metrics display" },
        { name: "Backup & monitoring", amount: 100, note: "System reliability" }
      ]
    },
    {
      name: "Installation & Labor",
      amount: 600,
      percentage: 16,
      items: [
        { name: "Technical installation", amount: 400, note: "Professional setup" },
        { name: "Documentation", amount: 200, note: "Installation guides" }
      ]
    },
    {
      name: "Contingency",
      amount: 250,
      percentage: 7,
      items: [
        { name: "Unexpected costs", amount: 250, note: "10% buffer for adjustments" }
      ]
    }
  ]
}

const COLORS = ['#A4FF4E', '#3B82F6', '#8B5CF6', '#EC4899']

export default function LocustEchoEconomiesClient() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const imageRef = useRef<HTMLDivElement>(null)

  // Intersection observers for each section
  const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.3 })
  const { ref: datafallRef, inView: datafallInView } = useInView({ threshold: 0.3 })
  const { ref: babyagiRef, inView: babyagiInView } = useInView({ threshold: 0.3 })
  const { ref: shoppersRef, inView: shoppersInView } = useInView({ threshold: 0.3 })
  const { ref: bootlegRef, inView: bootlegInView } = useInView({ threshold: 0.3 })
  const { ref: statementRef, inView: statementInView } = useInView({ threshold: 0.3 })
  const { ref: budgetRef, inView: budgetInView } = useInView({ threshold: 0.3 })
  const { ref: impactRef, inView: impactInView } = useInView({ threshold: 0.3 })
  const { ref: previousWorksRef, inView: previousWorksInView } = useInView({ threshold: 0.3 })
  const { ref: artistStatementRef, inView: artistStatementInView } = useInView({ threshold: 0.3 })

  // Determine which image to show based on current section
  const getCurrentImage = () => {
    if (datafallInView) return 'datafall'
    if (babyagiInView) return 'babyagi'
    if (shoppersInView) return 'shoppers'
    if (bootlegInView) return 'bootleg'
    if (statementInView) return 'statement'
    if (budgetInView) return 'budget'
    if (impactInView) return 'impact'
    if (previousWorksInView) return 'doomscrolling'
    if (artistStatementInView) return 'artist-statement'
    return 'overview'
  }

  const currentImage = getCurrentImage()

  // Add scroll function after the existing functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-200/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Echo Economies</h1>
              <p className="text-sm text-gray-500">Locust Projects Installation</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Algorithmic Capitalism Installation</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex">
        {/* Left Side - Text Content */}
        <div className="w-1/2 p-8 space-y-16">
          
          {/* Project Overview Section */}
          <motion.section
            ref={overviewRef}
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Echo Economies converts Locust's Project Room into a materialization of algorithmic capitalism, where every interaction, swipe, like, purchase, loops back as capitalized echo.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  The installation features four interconnected pieces positioned around the room: <span 
                    className="cursor-pointer text-blue-600 hover:text-blue-800 underline"
                    onClick={() => scrollToSection('doomscrolling-monolith')}
                  >DOOMSCROLLING MONOLITH</span> on the east wall, <span 
                    className="cursor-pointer text-blue-600 hover:text-blue-800 underline"
                    onClick={() => scrollToSection('artificial-allegiance')}
                  >ARTIFICIAL ALLEGIANCE</span> on the west wall, <span 
                    className="cursor-pointer text-blue-600 hover:text-blue-800 underline"
                    onClick={() => scrollToSection('baby-agi')}
                  >BABY AGI</span> on the north wall, and <span 
                    className="cursor-pointer text-blue-600 hover:text-blue-800 underline"
                    onClick={() => scrollToSection('smart-shoppers')}
                  >SMART SHOPPERS</span> on the south wall.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Together the four works stage a conversation about attention, governance, labour, and liquidity. Screens ascend like offerings, flags dissolve into platforms, the child learns to code before it walks, and cognition sits on a discount shelf, inviting visitors to feel the circuitry of the 4th industrial revolution in their own bodies.
                </p>

                <p className="text-lg leading-relaxed">
                  For more context on the artist's practice and approach, see the <span 
                    className="cursor-pointer text-blue-600 hover:text-blue-800 underline"
                    onClick={() => scrollToSection('artist-statement')}
                  >Artist Statement</span>.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DOOMSCROLLING MONOLITH Section */}
          <motion.section
            id="doomscrolling-monolith"
            ref={datafallRef}
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold">DOOMSCROLLING MONOLITH</h2>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Location:</span> East Wall
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Nine portrait-mounted screens stacked into a tower. Social content scrolls upward without end; visitors can "like" content through a button sensor, immediately promoting that content, converting private scrolling into a public leaderboard on platform power.
                </p>
                <p className="text-lg leading-relaxed">
                  The monolith serves as the central nervous system of the installation, processing and displaying the raw data that feeds into the other three pieces. Each screen represents a different data stream, from cryptocurrency prices to social media engagement metrics, creating a mesmerizing display of our digital ecosystem's constant activity.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ARTIFICIAL ALLEGIANCE Section */}
          <motion.section
            id="artificial-allegiance"
            ref={bootlegRef}
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold">ARTIFICIAL ALLEGIANCE</h2>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Location:</span> West Wall
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Angled overhead, this LED video banner features national flags, corporate logos, and meme symbols that fluidly morph via an AI-interpolation model, asking whether sovereignty now lies with nations or with networks, and what governance looks like in a co-habited, intelligent future.
                </p>
                <p className="text-lg leading-relaxed">
                  The piece explores how entertainment has become a liquid asset, flowing between platforms and formats based on market demand and algorithmic optimization. The holographic displays show shifting content recommendations, streaming statistics, and viewer engagement metrics, creating a visual representation of how entertainment value is constantly being reassessed and redistributed in our digital economy.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BABY AGI Section */}
          <motion.section
            id="baby-agi"
            ref={babyagiRef}
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold">BABY AGI</h2>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Location:</span> North Wall
                  <span className="ml-4">
                    <a 
                      href="/art/baby-agi" 
                      className="text-blue-600 hover:text-blue-800 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View 2023 Baby AGI installation
                    </a>
                  </span>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  A stroller retrofitted with acrylic servo hands. An onboard language model parrots visitor phrases while the fingers twitch, hinting at parent-child relation humans have with AI, and the algorithmic grip content has over new generations at an earlier age.
                </p>
                <p className="text-lg leading-relaxed">
                  The piece explores the intersection of artificial intelligence, human development, and algorithmic capitalism. The robotic hands gently guide the stroller, symbolizing how AI systems are increasingly involved in shaping human experience and decision-making processes.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SMART SHOPPERS Section */}
          <motion.section
            id="smart-shoppers"
            ref={shoppersRef}
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold">SMART SHOPPERS</h2>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Location:</span> South Wall
                  <span className="ml-4">
                    <a 
                      href="/art/smart-shoppers" 
                      className="text-blue-600 hover:text-blue-800 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View 2024 Smart Shoppers installation
                    </a>
                  </span>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  A retail cart overflowing with neon 3-D-printed brains whose glow intensifies when viewers approach with matching acrylic servo hands. A screen in the front of the cart displays the live "price of intelligence," pegged to the average cost of a GPT prompt.
                </p>
                <p className="text-lg leading-relaxed">
                  The piece critiques the commercialization of human intelligence in the age of algorithmic capitalism, showing how our cognitive processes are increasingly commodified and optimized for market efficiency. The shopping cart serves as a container for this commodified intelligence, highlighting the tension between human identity and digital marketplace demands.
                </p>
              </div>
            </div>
          </motion.section>

          {/* LIQUID ENTERTAINMENT Section */}
          <motion.section
            id="liquid-entertainment"
            ref={bootlegRef}
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold">LIQUID ENTERTAINMENT</h2>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Previous version:</span> New piece for Echo Economies
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  A kinetic installation featuring holographic DVD sleeves that rotate and display changing content based on real-time entertainment industry data. The piece explores how entertainment has become a liquid asset, flowing between platforms and formats based on market demand and algorithmic optimization.
                </p>
                <p className="text-lg leading-relaxed">
                  The holographic displays show shifting content recommendations, streaming statistics, and viewer engagement metrics, creating a visual representation of how entertainment value is constantly being reassessed and redistributed in our digital economy. The piece questions what happens when culture becomes as fluid and tradeable as currency.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Artist Statement Section */}
          <motion.section
            id="artist-statement"
            ref={artistStatementRef}
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Artist Statement</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  I materialize the digital to explore the reality of living inside algorithmic networks. Born in Venezuela and based in Miami, I treat AI, code, and retail detritus as sculptural vocabulary. My practice asks how software platform logic, attention, infinite scrolling rewrites trust, labor, and desire.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Early works like "Doomscrolling Treadmill" (2024) and "Price of Existence" (2024) made bodies literally walk data feeds or wrap depreciated currency around skeletons. Recent pieces introduce interactive code in real time "Digital Divinities" (2023), a cart "Smart Shoppers" (2024) where 3-D printed brains glow and pulsate.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Technically I work full-stack: NodeJS backends feed frontend ReactJS dashboards, which signal dynamic content on screens. Ethically I insist on asking the hard questions now, and speculate on the techno-problem space that will reflect on our community in the future; so audiences can "reflect on the algorithm" as soon as silicon valley and for themselves.
                </p>

                <p className="text-lg leading-relaxed">
                  "Echo Economies" is an installation and a techno-political conversation, showing viewers not only the marketing of algorithmic capitalism but also the pipes, pulses, and power draws underneath. I believe artworks should make complexity felt in the gut, and parsed intellectually second. That friction between digital infrastructure and lived emotion is where my practice lives.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Production Budget Section */}
          <motion.section
            ref={budgetRef}
            className="py-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Production Budget</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Total production budget of $3,750 for a comprehensive algorithmic capitalism installation
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Budget Overview */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-6">
                      <DollarSign className="w-8 h-8 text-green-500" />
                      <h3 className="text-2xl font-bold">Budget Overview</h3>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-green-500 mb-2">
                        ${budgetData.total.toLocaleString()}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">Total Production Budget</p>
                    </div>

                    <div className="space-y-4">
                      {budgetData.categories.map((category, index) => (
                        <div key={category.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full" 
                              style={{ backgroundColor: COLORS[index] }}
                            />
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">${category.amount.toLocaleString()}</div>
                            <div className="text-sm text-gray-500">{category.percentage}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-4">Budget Highlights</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Hardware is consumer-grade, modular, and largely owned or loaned</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Single Pi hub minimizes points of failure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Daily reboot scripts and backup SD card provide resilience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>10% contingency buffer for unexpected costs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Budget Visualization */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="w-8 h-8 text-blue-500" />
                    <h3 className="text-2xl font-bold">Budget Distribution</h3>
                  </div>
                  
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={budgetData.categories}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="amount"
                          label={({ name, percentage }) => `${name} ${percentage}%`}
                        >
                          {budgetData.categories.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={COLORS[index % COLORS.length]} 
                              opacity={0.8}
                            />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Amount']}
                          contentStyle={{
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            border: 'none',
                            borderRadius: '8px',
                            color: 'white'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Detailed Cost Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {budgetData.categories.map((category, index) => (
                    <div 
                      key={category.name}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        <h4 className="text-xl font-bold">{category.name}</h4>
                        <span className="ml-auto font-bold text-green-500">
                          ${category.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-gray-500">{item.note}</div>
                            </div>
                            <div className="text-right font-mono">
                              {item.amount > 0 ? `$${item.amount.toLocaleString()}` : 'Borrowed'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Impact */}
          <motion.section
            ref={impactRef}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-500" />
              <h2 className="text-3xl font-bold">Project Impact</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Risk-taking & Experimentation</h3>
                <p className="text-lg leading-relaxed">
                  Echo Economies wires four discrete objects — waterfall, stroller, cart, shelf — into a 
                  single live network. If the data feed spikes, water flow, screen edits, and servo 
                  gestures all accelerate in unison. This cross-talk pushes my practice beyond static 
                  assemblage into cyber-kinetic orchestration: sculpture behaves like code, code behaves 
                  like weather.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Speculation as Public Research</h3>
                <p className="text-lg leading-relaxed">
                  The installation stages questions economists and technologists are only beginning to 
                  ask. How does attention liquefy into currency, turning screen time into "liquidity"? 
                  Where does power concentrate when algorithms treat human labor as a series of 
                  micro-futures — effectively trading our work via data-driven performance metrics?
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Community Engagement</h3>
                <p className="text-lg leading-relaxed">
                  Visitors can converse with BABY AGI, use tone of voice to trigger price shifts in 
                  SMART SHOPPERS, and generate custom "pirate" DVD sleeves during an in-gallery 
                  data-scrape workshop. These activations demystify AI pipelines; participants leave 
                  holding a physical artifact that contains their data fingerprint.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Societal Concerns</h3>
                <p className="text-lg leading-relaxed">
                  Algorithmic capitalism sits at the intersection of basic needs (economic precarity) 
                  and media saturation (psychosocial health). Miami's skyrocketing cost of living, 
                  coupled with its emerging tech scene, makes Locust an ideal site for this dialogue. 
                  The project posits a future where liquidity flows faster than regulation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Feasibility</h3>
                <p className="text-lg leading-relaxed">
                  Hardware is consumer-grade, modular, and largely owned or loaned. A single Pi hub 
                  minimizes points of failure; daily reboot scripts and a backup SD card provide 
                  resilience. All heavy elements sit below the 12′10″ ceiling and maintain 36″ ADA 
                  clearances. The waterfall's self-contained basin avoids plumbing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Extension of Practice</h3>
                <p className="text-lg leading-relaxed">
                  Past works isolated treadmill, cart, or LED wall as lone metaphors. Echo Economies 
                  connects them in a circular flow, mirroring the feed's feedback loops. It is a risk 
                  — not one object but a system — yet that leap embodies the very acceleration the 
                  show critiques. Success will deepen my trajectory toward networked, responsive 
                  installations that make the politics of code tangible.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Previous Works */}
          <motion.section
            ref={previousWorksRef}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-purple-500" />
              <h2 className="text-3xl font-bold">Previous Works</h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-100/10 border border-gray-200/20">
                <h3 className="font-semibold text-lg mb-2">Doomscrolling Treadmill (2024)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  Performance piece where bodies literally walk data, exploring the physical toll of 
                  infinite scrolling and digital consumption.
                </p>
                <p className="text-sm text-gray-500">Performance, 3-min documentation video</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-100/10 border border-gray-200/20">
                <h3 className="font-semibold text-lg mb-2">Price of Existence (2024)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  Sculpture that wraps currency around skeletons, examining the relationship between 
                  economic value and human existence.
                </p>
                <p className="text-sm text-gray-500">Sculpture, high-res photo</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-100/10 border border-gray-200/20">
                <h3 className="font-semibold text-lg mb-2">Touch Grass Station (2024)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  Interactive installation exploring the disconnect between digital and physical 
                  experiences in our increasingly virtual world.
                </p>
                <p className="text-sm text-gray-500">Installation, 10-sec video reel</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-100/10 border border-gray-200/20">
                <h3 className="font-semibold text-lg mb-2">Digital Divinities (2023)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  Interactive installation examining how we worship and interact with digital 
                  technologies in contemporary society.
                </p>
                <p className="text-sm text-gray-500">Interactive installation, YouTube documentation</p>
              </div>
            </div>
          </motion.section>

        </div>

        {/* Right Side - Sticky Image */}
        <div className="w-1/2 sticky top-0 h-screen">
          <div 
            ref={imageRef}
            className="w-full h-full relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
              >
                {/* Fallback gradient background */}
                <div 
                  className="w-full h-full"
                  style={{ 
                    background: gradientImages[currentImage as keyof typeof gradientImages],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Overlay with section info */}
                <div className="absolute inset-0 bg-black/20 flex items-end">
                  <div className="p-8 text-white">
                                         <h3 className="text-2xl font-bold mb-2">
                       {currentImage === 'datafall' && 'DATAFALL SPINE'}
                       {currentImage === 'babyagi' && 'BABY AGI'}
                       {currentImage === 'shoppers' && 'SMART SHOPPERS'}
                       {currentImage === 'bootleg' && 'BOOTLEG FUTURE'}
                       {currentImage === 'statement' && 'Artist Statement'}
                       {currentImage === 'budget' && 'Production Budget'}
                       {currentImage === 'impact' && 'Project Impact'}
                       {currentImage === 'doomscrolling' && 'Previous Works'}
                       {currentImage === 'overview' && 'Echo Economies'}
                     </h3>
                     <p className="text-sm opacity-90">
                       {currentImage === 'datafall' && 'Liquid timeline with live market data'}
                       {currentImage === 'babyagi' && 'Newborn algorithm with robotic interaction'}
                       {currentImage === 'shoppers' && 'Sentiment-driven brain marketplace'}
                       {currentImage === 'bootleg' && 'Holographic media transformation'}
                       {currentImage === 'statement' && 'Exploring life inside the feed'}
                       {currentImage === 'budget' && 'Under $5k production budget'}
                       {currentImage === 'impact' && 'Community engagement & experimentation'}
                       {currentImage === 'doomscrolling' && 'Evolution of algorithmic art practice'}
                       {currentImage === 'overview' && 'Echo Economies installation'}
                     </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
} 