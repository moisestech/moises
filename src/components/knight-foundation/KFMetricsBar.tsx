import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeonText } from '../shared/NeonText';
import Image from 'next/image';
import { Users, Target, DollarSign, Building2, Brain, Globe, Award, Clock, ChevronDown } from 'lucide-react';

const metrics = [
  { 
    value: '120+', 
    label: 'Workshop Participants', 
    info: "Miami's creative community, engaged and growing!",
    detailSection: 'outcomes' // Links to Expected Outcomes section
  },
  { 
    value: '8', 
    label: 'Free Clinics', 
    info: 'Zero-cost, high-impact learning sprints.',
    detailSection: 'activities' // Links to Key Activities section
  },
  { 
    value: '3', 
    label: 'Partner Venues', 
    info: "From Little Haiti to Downtown, we're everywhere.",
    detailSection: 'activities' // Links to Key Activities section
  },
  { 
    value: '100%', 
    label: 'Bilingual Content', 
    info: 'English & Spanish, no one left behind.',
    detailSection: 'about' // Links to About AI24 section
  }
];

const detailedSections = [
  {
    id: 'about',
    title: 'About AI24',
    icon: Building2,
    content: {
      description: "AI24 is an artist-led technology studio founded by Moises Sanabria (Venezuelan-born, Miami-based AI engineer and interdisciplinary artist) and Fabiola Larios (Mexican New Media Artist). We operate a micro-lab at the Bakehouse Art Complex, where we prototype open-source tools that merge ethical AI, community storytelling, and measurable impact.",
      highlights: [
        "Artist-led technology studio",
        "Micro-lab at Bakehouse Art Complex",
        "Open-source ethical AI tools",
        "Community storytelling focus"
      ],
      image: "/images/placeholder-ai24-team.jpg",
      additionalInfo: "Our bilingual approach isn't just translation—it's cultural adaptation that respects Miami's diverse community. Every piece of content, from workshop materials to digital signage, is created in both English and Spanish, ensuring accessibility and cultural relevance for all participants."
    }
  },
  {
    id: 'activities',
    title: 'Key Activities',
    icon: Target,
    content: {
      items: [
        {
          title: "Deploy 3 Smart Signs",
          description: "Across three partner venues",
          status: "Planned",
          icon: Globe,
          details: "Digital signage system that displays community content, event information, and educational materials in real-time. These signs serve as both information hubs and community engagement tools."
        },
        {
          title: "Build Bilingual LMS Portal",
          description: "With comprehensive video lessons",
          status: "In Development",
          icon: Brain,
          details: "Learning Management System with 40+ video lessons covering AI fundamentals, digital storytelling, and creative technology. All content available in English and Spanish."
        },
        {
          title: "Lead Skill Sprints",
          description: "Screen-Admin training (EN/ES)",
          status: "Active",
          icon: Users,
          details: "Intensive 4-hour workshops focused on practical skills. These are free because we believe access to creative technology education should not be limited by financial barriers."
        }
      ],
      image: "/images/placeholder-activities.jpg",
      additionalInfo: "Our activities are designed to be replicable and sustainable. The Smart Signs can be easily deployed in other cities, the LMS content is open-source, and our workshop curriculum is freely available for other organizations to adapt."
    }
  },
  {
    id: 'outcomes',
    title: 'Expected Outcomes',
    icon: Award,
    content: {
      metrics: [
        {
          value: "220",
          label: "Artists Complete LMS",
          description: "Micro-courses with certification",
          icon: Users,
          details: "Participants will complete our comprehensive learning modules, gaining practical skills in AI tools, digital storytelling, and creative technology. Each participant receives a certificate and portfolio piece."
        },
        {
          value: "60K",
          label: "Bilingual Impressions",
          description: "Across all partner venues",
          icon: Globe,
          details: "Smart Signs will display community content, event information, and educational materials, reaching thousands of visitors at our partner venues throughout Miami."
        },
        {
          value: "40%",
          label: "Women Participants",
          description: "Exceeding diversity goals",
          icon: Award,
          details: "We're committed to ensuring our programs reflect Miami's diverse community. Our outreach specifically targets underrepresented groups in creative technology."
        }
      ],
      image: "/images/placeholder-workshop-participants.jpg",
      additionalInfo: "Our 120+ workshop participants at Bakehouse represent just the beginning. These artists, designers, and creatives are already applying their new skills in their communities, creating a ripple effect of digital literacy and creative innovation across Miami."
    }
  },
  {
    id: 'budget',
    title: 'Budget Overview',
    icon: DollarSign,
    content: {
      breakdown: [
        {
          label: "Total Project Budget",
          amount: "$24,950",
          color: "text-white"
        },
        {
          label: "Knight Foundation Request",
          amount: "$24,950",
          color: "text-[#A4FF4E]"
        },
      ],
      distribution: [
        {
          category: "Program Salaries & Wages",
          percentage: "41%",
          amount: "$10,300",
          description: "Part-time staff to build, secure, document the stack and translate UI, caption videos, run help desk"
        },
        {
          category: "Contracted Services",
          percentage: "23%",
          amount: "$5,850",
          description: "One-off tech work including building the web/LMS codebase plus automation scripts"
        },
        {
          category: "Hardware & Materials",
          percentage: "28%",
          amount: "$6,900",
          description: "Hardware fleet including Smart Signs, Pi kits, projectors, and demo equipment"
        },
        {
          category: "Cloud & Admin Costs",
          percentage: "6%",
          amount: "$1,400",
          description: "Six months of cloud services for reliable platform operation"
        },
        {
          category: "Contingency & Spare Parts",
          percentage: "2%",
          amount: "$500",
          description: "Backup equipment to keep everything running if something fails mid-event"
        }
      ],
      note: "83% of total budget requested from Knight Foundation",
      image: "/images/placeholder-budget.jpg",
      additionalInfo: "Our budget prioritizes human capital and community impact. 60% goes directly to Miami talent (salaries, mentors, interpreters), ensuring the majority of funds stay in the local economy and create lasting community value.",
      fullBudgetLink: "/grant/knight-foundation/budget"
    }
  }
];

export function KFMetricsBar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const handleMetricClick = (metricIndex: number) => {
    const metric = metrics[metricIndex];
    setActiveSection(metric.detailSection);
    setShowDetails(true);
  };

  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#A4FF4E] drop-shadow-lg mb-4">
          Digital Capacity Vision
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          We're building Miami's first sustainable creative-tech infrastructure. 
          While our pilot is in early stages with two successful workshops at Bakehouse, 
          Knight's support will accelerate our vision of equipping every Miami artist 
          with the tools, skills, and community they need to thrive in the digital age.
        </p>
      </div>
      
      {/* Fun Animated Metrics Cards */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, type: 'spring', stiffness: 200, damping: 10 }}
            whileHover={{ scale: 1.12, boxShadow: '0 0 48px #A4FF4E', borderColor: '#A4FF4E' }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-6 rounded-2xl border-2 border-[#A4FF4E] bg-black/80 text-center cursor-pointer group overflow-hidden card-neon"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleMetricClick(index)}
            style={{ transition: 'border-color 0.3s' }}
          >
            <div className="mb-1">
              <NeonText text={metric.value} size="sm" />
            </div>
            <div className="text-base text-gray-200 font-mono mb-1">
              {metric.label}
            </div>
            {/* ASCII underline ticker */}
            <motion.div
              className="text-[#A4FF4E]/60 text-xs font-mono mt-2"
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            >
              {'======' + ' '.repeat(index * 2) + '======' }
            </motion.div>
            {/* Click hint */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-[#A4FF4E]/60 text-xs">Click for details</div>
            </div>
            {/* Tooltip on hover */}
            <AnimatePresence>
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black/90 text-[#A4FF4E] px-4 py-2 rounded-lg shadow-lg text-sm z-20 border border-[#A4FF4E]/40"
                >
                  {metric.info}
                </motion.div>
              )}
            </AnimatePresence>
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 60% 40%, #A4FF4E33 0%, transparent 80%)',
                filter: 'blur(24px)',
                opacity: 0.5,
              }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Expandable Details Section */}
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#A4FF4E] bg-black/50 text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-all duration-300 mb-6"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-medium">
            {showDetails ? 'Hide' : 'Show'} Detailed Information
          </span>
          <motion.div
            animate={{ rotate: showDetails ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Navigation Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {detailedSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                        activeSection === section.id
                          ? 'border-[#A4FF4E] bg-[#A4FF4E]/10 shadow-[0_0_20px_rgba(164,255,78,0.3)]'
                          : 'border-[#A4FF4E]/30 bg-black/50 hover:border-[#A4FF4E]/60 hover:bg-[#A4FF4E]/5'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4 text-[#A4FF4E]" />
                      <span className="text-sm font-medium text-gray-200">{section.title}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Detailed Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 shadow-neon"
                >
                  {activeSection === 'about' && (
                    <div className="space-y-6">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-[#A4FF4E] mb-3">About AI24</h3>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {detailedSections.find(s => s.id === 'about')?.content.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {detailedSections.find(s => s.id === 'about')?.content.highlights?.map((highlight, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20">
                                <div className="w-2 h-2 rounded-full bg-[#A4FF4E]" />
                                <span className="text-gray-200 text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="relative">
                          <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#A4FF4E]/30 bg-black/50">
                            <div className="w-full h-full bg-gradient-to-br from-[#A4FF4E]/10 to-transparent flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-6xl mb-4">👥</div>
                                <div className="text-[#A4FF4E]/60 text-sm">AI24 Team</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {detailedSections.find(s => s.id === 'about')?.content.additionalInfo}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeSection === 'activities' && (
                    <div className="space-y-6">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-[#A4FF4E] mb-4">Key Activities</h3>
                          <div className="space-y-4">
                            {detailedSections.find(s => s.id === 'activities')?.content.items?.map((item, index) => {
                              const Icon = item.icon;
                              return (
                                <div key={index} className="p-4 rounded-lg border border-[#A4FF4E]/30 bg-black/50">
                                  <div className="flex items-center gap-3 mb-3">
                                    <Icon className="w-5 h-5 text-[#A4FF4E]" />
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      item.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                                      item.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                                      'bg-yellow-500/20 text-yellow-400'
                                    }`}>
                                      {item.status}
                                    </span>
                                  </div>
                                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                  <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                                  <p className="text-xs text-gray-400">{item.details}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="relative">
                          <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#A4FF4E]/30 bg-black/50">
                            <div className="w-full h-full bg-gradient-to-br from-[#A4FF4E]/10 to-transparent flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-6xl mb-4">🎯</div>
                                <div className="text-[#A4FF4E]/60 text-sm">Activities</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {detailedSections.find(s => s.id === 'activities')?.content.additionalInfo}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeSection === 'outcomes' && (
                    <div className="space-y-6">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-[#A4FF4E] mb-4">Expected Outcomes</h3>
                          <div className="space-y-4">
                            {detailedSections.find(s => s.id === 'outcomes')?.content.metrics?.map((metric, index) => {
                              const Icon = metric.icon;
                              return (
                                <div key={index} className="p-4 rounded-lg border border-[#A4FF4E]/30 bg-black/50">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                                      <Icon className="w-5 h-5 text-[#A4FF4E]" />
                                    </div>
                                    <div>
                                      <div className="text-xl font-bold text-[#A4FF4E]">{metric.value}</div>
                                      <div className="text-sm font-medium text-white">{metric.label}</div>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-300 mb-2">{metric.description}</p>
                                  <p className="text-xs text-gray-400">{metric.details}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="relative">
                          <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#A4FF4E]/30 bg-black/50">
                            <div className="w-full h-full bg-gradient-to-br from-[#A4FF4E]/10 to-transparent flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-6xl mb-4">🎓</div>
                                <div className="text-[#A4FF4E]/60 text-sm">Workshop Participants</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {detailedSections.find(s => s.id === 'outcomes')?.content.additionalInfo}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeSection === 'budget' && (
                    <div className="space-y-6">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-[#A4FF4E] mb-4">Budget Overview</h3>
                          <div className="space-y-4">
                            {detailedSections.find(s => s.id === 'budget')?.content.breakdown?.map((item, index) => (
                              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-[#A4FF4E]/30 bg-black/50">
                                <span className="text-gray-200">{item.label}</span>
                                <span className={`text-xl font-bold ${item.color}`}>{item.amount}</span>
                              </div>
                            ))}
                          </div>
                          <div className="p-3 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20 mt-4">
                            <p className="text-sm text-[#A4FF4E]/80 text-center">
                              {detailedSections.find(s => s.id === 'budget')?.content.note}
                            </p>
                          </div>
                          
                          <h4 className="text-lg font-bold text-[#A4FF4E] mb-3 mt-6">Budget Distribution</h4>
                          <div className="space-y-2">
                            {detailedSections.find(s => s.id === 'budget')?.content.distribution?.map((dist, index) => (
                              <div key={index} className="p-3 bg-black/50 rounded-lg border border-[#A4FF4E]/30">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-gray-200 font-medium">{dist.category}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[#A4FF4E] font-bold">{dist.percentage}</span>
                                    <span className="text-white font-bold">{dist.amount}</span>
                                  </div>
                                </div>
                                <div className="text-xs text-gray-400">
                                  {dist.description}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 text-center">
                            <a 
                              href={detailedSections.find(s => s.id === 'budget')?.content.fullBudgetLink} 
                              className="inline-flex items-center gap-2 px-4 py-2 bg-[#A4FF4E]/20 border border-[#A4FF4E]/30 rounded-lg text-[#A4FF4E] hover:bg-[#A4FF4E]/30 transition-colors"
                            >
                              View Full Budget Details
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#A4FF4E]/30 bg-black/50">
                            <div className="w-full h-full bg-gradient-to-br from-[#A4FF4E]/10 to-transparent flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-6xl mb-4">💰</div>
                                <div className="text-[#A4FF4E]/60 text-sm">Budget</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {detailedSections.find(s => s.id === 'budget')?.content.additionalInfo}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 