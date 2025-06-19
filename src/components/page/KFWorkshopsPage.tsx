'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
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
const workshopData = [
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
    host: "PAMM",
    quarter: "Q4 '25",
    workshops: [
      "Voice-clone captions for accessibility",
      "Curating AI in museums"
    ],
    activation: "AI on the Terrace outdoor screening",
    reach: { inPerson: 400, stream: 500 }
  },
  {
    host: "NWSA",
    quarter: "Q1 '26",
    workshops: [
      "No-GPU Short-Film Pipeline",
      "GitHub Copilot for Performance"
    ],
    activation: "5-hr hackathon; judged by faculty",
    reach: { inPerson: 90, stream: 600 }
  }
];

export default function WorkshopsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen bg-black text-white">
      <TechNonprofitNavKF />

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] hover:bg-[#232323] text-[#A4FF4E] border border-[#A4FF4E] transition-colors shadow-neon"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Overview
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30 mb-6">
              <Calendar className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Workshop Program
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Hands-on AI Education
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              24 free workshops across Miami's creative community
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Workshop Schedule</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Tailored programs at key community venues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workshopData.map((venue, index) => (
              <motion.div
                key={venue.host}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#A4FF4E]">{venue.host}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-[#A4FF4E]/80" />
                      <span className="text-sm text-[#A4FF4E]/80">{venue.quarter}</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#A4FF4E]/10 text-[#A4FF4E] border border-[#A4FF4E]/30">
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
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <Laptop className="w-4 h-4 text-[#A4FF4E]" />
                          {workshop}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2 text-[#A4FF4E]/80">Community Activation</h4>
                    <p className="text-gray-300">
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
                title: "Inclusive Design",
                description: "ASL, childcare, and snacks provided",
                icon: Users
              },
              {
                title: "Take-home Resources",
                description: "Code templates and workflow guides",
                icon: Brain
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                  {React.createElement(feature.icon, {
                    className: 'text-[#A4FF4E] w-7 h-7'
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#A4FF4E]">{feature.title}</h3>
                <p className="text-gray-300">
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

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                metric: "24",
                label: "Total Workshops",
                description: "Across 4 venues",
                icon: Calendar,
                color: "text-[#A4FF4E]"
              },
              {
                metric: "1,025",
                label: "Total Reach",
                description: "In-person + streaming",
                icon: Users,
                color: "text-[#3B82F6]"
              },
              {
                metric: "100%",
                label: "Free Access",
                description: "No cost to participants",
                icon: Target,
                color: "text-[#EC4899]"
              },
              {
                metric: "4",
                label: "Venues",
                description: "Community partners",
                icon: MapPin,
                color: "text-[#8B5CF6]"
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center`}>
                  {React.createElement(item.icon, {
                    className: `${item.color} w-7 h-7`
                  })}
                </div>
                <div className={`text-3xl font-bold mb-2 ${item.color}`}>{item.metric}</div>
                <div className="font-medium mb-2 text-white">{item.label}</div>
                <div className="text-sm text-gray-300">{item.description}</div>
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
            <div className="p-8 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A4FF4E]">
                Ready to Join Our Workshops?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Free, accessible AI education for Miami's creative community
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
                  href="/grant/knight-foundation/impact-roi"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
                >
                  <Target className="w-5 h-5" />
                  View Impact Metrics
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 