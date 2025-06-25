'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import { BackToOverview } from '@/components/shared/BackToOverview';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { 
  Calendar,
  ChevronLeft,
  Users,
  MapPin,
  Monitor,
  Brain,
  Laptop,
  Sparkles,
  ArrowRight,
  Clock,
  Target,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Workshop data
const confirmedWorkshops = [
  {
    host: "Bakehouse Art Complex",
    quarter: "Q3 '25",
    workshops: [
      "GPT-4 on $0 budget",
      "Gen-4 Storyboarding",
      "Prompt Gym"
    ],
    activation: "Night-wall projection of workshop outputs",
    reach: { inPerson: 60, stream: 300 }
  },
  {
    host: "Edge Zones",
    quarter: "Q4 '25",
    workshops: [
      "Community Archives × Stable Diffusion",
      "AI Mural Mapping",
      "Canva-AI Meme Ethics"
    ],
    activation: "Block-party DJ set + AI visuals",
    reach: { inPerson: 75, stream: 250 }
  },
  {
    host: "Locust Projects",
    quarter: "Q1 '26",
    workshops: [
      "Voice-clone captions for accessibility",
      "Curating AI in museums"
    ],
    activation: "AI on the Terrace outdoor screening",
    reach: { inPerson: 400, stream: 500 }
  }
];

const potentialWorkshops = [
  {
    host: "PAMM",
    quarter: "TBD",
    workshops: [
      "AI Ethics in Museum Collections",
      "Digital Curation with AI Tools"
    ],
    activation: "AI-curated exhibition preview",
    reach: { inPerson: 200, stream: 800 }
  },
  {
    host: "NWSA",
    quarter: "TBD",
    workshops: [
      "No-GPU Short-Film Pipeline",
      "GitHub Copilot for Performance"
    ],
    activation: "5-hr hackathon; judged by faculty",
    reach: { inPerson: 90, stream: 600 }
  },
  {
    host: "The Lab Miami",
    quarter: "TBD",
    workshops: [
      "AI for Startup Branding",
      "Automated Content Creation"
    ],
    activation: "Startup pitch night with AI demos",
    reach: { inPerson: 120, stream: 400 }
  }
];

export default function WorkshopsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TechNonprofitNavKF />
      <BackToOverview />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
              isDark 
                ? 'bg-[#A4FF4E]/10 border border-[#A4FF4E]/30' 
                : 'bg-[#A4FF4E]/20 border border-[#A4FF4E]/50'
            } mb-6`}>
              <Calendar className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Workshop Program
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Hands-on AI Education
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              8 free workshops across Miami's creative community
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Brain}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Workshop Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Confirmed Workshop Schedule</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              8 workshops across 3 confirmed community venues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {confirmedWorkshops.map((venue, index) => (
              <motion.div
                key={venue.host}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 border-[#A4FF4E] ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
                } shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#A4FF4E]">{venue.host}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-[#A4FF4E]/80" />
                      <span className="text-sm text-[#A4FF4E]/80">{venue.quarter}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${
                    isDark 
                      ? 'bg-[#A4FF4E]/10 text-[#A4FF4E] border border-[#A4FF4E]/30'
                      : 'bg-[#A4FF4E]/20 text-[#A4FF4E] border border-[#A4FF4E]/50'
                  }`}>
                    {venue.workshops.length} Workshops
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-[#A4FF4E]/80">Workshop Topics</h4>
                    <ul className="space-y-2">
                      {venue.workshops.map((workshop) => (
                        <li
                          key={workshop}
                          className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          <Laptop className="w-4 h-4 text-[#A4FF4E]" />
                          {workshop}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2 text-[#A4FF4E]/80">Community Activation</h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {venue.activation}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-dashed border-[#A4FF4E]/30">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="text-sm font-medium text-[#A4FF4E]/80">In-Person</div>
                        <div className="text-xl font-bold text-[#A4FF4E]">{venue.reach.inPerson}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#A4FF4E]/80">Streaming</div>
                        <div className="text-xl font-bold text-[#A4FF4E]">{venue.reach.stream}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Potential Workshops */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Potential Future Workshops</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Additional venues for potential expansion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {potentialWorkshops.map((venue, index) => (
              <motion.div
                key={venue.host}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 ${
                  isDark 
                    ? 'border-gray-500 bg-black/60 text-white shadow-neon hover:shadow-[0_0_30px_rgba(128,128,128,0.3)] hover:border-gray-400'
                    : 'border-gray-300 bg-white/60 text-black shadow-neon hover:shadow-[0_0_30px_rgba(128,128,128,0.3)] hover:border-gray-400'
                } transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{venue.host}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{venue.quarter}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${
                    isDark 
                      ? 'bg-gray-500/10 text-gray-300 border border-gray-500/30'
                      : 'bg-gray-300/20 text-gray-600 border border-gray-300/50'
                  }`}>
                    {venue.workshops.length} Workshops
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Workshop Topics</h4>
                    <ul className="space-y-2">
                      {venue.workshops.map((workshop) => (
                        <li
                          key={workshop}
                          className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          <Laptop className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                          {workshop}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Community Activation</h4>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {venue.activation}
                    </p>
                  </div>

                  <div className={`flex items-center justify-between pt-4 border-t border-dashed ${
                    isDark ? 'border-gray-500/30' : 'border-gray-300/30'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>In-Person</div>
                        <div className={`text-xl font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{venue.reach.inPerson}</div>
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Streaming</div>
                        <div className={`text-xl font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{venue.reach.stream}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Workshop Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Workshop Features</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Every workshop includes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Hybrid Format",
                description: "In-person + live streaming with chat",
                icon: Monitor
              },
              {
                title: "Take-home Resources",
                description: "Code templates and workflow guides",
                icon: Brain
              },
              {
                title: "Community Focus",
                description: "Designed for Miami's creative community",
                icon: Users
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 border-[#A4FF4E] ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
                } shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300`}
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                  {React.createElement(feature.icon, {
                    className: 'text-[#A4FF4E] w-7 h-7'
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#A4FF4E]">{feature.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Workshop Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Workshop Impact</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Expected outcomes from our workshop program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "8",
                label: "Total Workshops",
                description: "Across 3 venues",
                icon: Calendar,
                color: "text-[#A4FF4E]"
              },
              {
                metric: "3",
                label: "Venues",
                description: "Community partners",
                icon: MapPin,
                color: "text-[#3B82F6]"
              },
              {
                metric: "535",
                label: "In-Person Reach",
                description: "Total participants",
                icon: Users,
                color: "text-[#EC4899]"
              },
              {
                metric: "1,050",
                label: "Streaming Reach",
                description: "Total viewers",
                icon: Monitor,
                color: "text-[#8B5CF6]"
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 border-[#A4FF4E] ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
                } shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center`}>
                  {React.createElement(item.icon, {
                    className: `${item.color} w-7 h-7`
                  })}
                </div>
                <div className={`text-3xl font-bold mb-2 ${item.color}`}>{item.metric}</div>
                <div className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{item.label}</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <div className={`p-8 rounded-xl border-2 border-[#A4FF4E] ${
              isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
            } shadow-neon`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A4FF4E]">
                Ready to Join a Workshop?
              </h2>
              <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Free, hands-on AI education for Miami's creative community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/grant/knight-foundation"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  Back to Overview
                </Link>
                <Link
                  href="/grant/knight-foundation/ai-toolkits"
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] ${
                    isDark ? 'hover:bg-[#A4FF4E]/10' : 'hover:bg-[#A4FF4E]/5'
                  } transition-colors`}
                >
                  <Brain className="w-5 h-5" />
                  Explore AI Toolkits
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 