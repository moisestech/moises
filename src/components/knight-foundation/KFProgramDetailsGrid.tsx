import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign, Calendar, Tv, Target, Clock, FileText, ArrowRight
} from 'lucide-react';

const details = [
  {
    title: 'Impact You Can Screenshot',
    description: 'Detailed breakdown of the $24,850 pilot program with interactive visualizations.',
    icon: DollarSign,
    href: '/grant/knight-foundation/budget',
    ascii: '$$'
  },
  {
    title: '4 Zero-Cost Skill Sprints',
    description: 'Free capacity clinics with accessibility-first approach.',
    icon: Calendar,
    href: '/grant/knight-foundation/workshops',
    ascii: '==='
  },
  {
    title: 'Plug-n-Play Community Screens',
    description: 'Open-source React + Supabase digital signage solution.',
    icon: Tv,
    href: '/grant/knight-foundation/smart-sign',
    ascii: '[TV]'
  },
  {
    title: 'License → Re-fuel → Repeat',
    description: 'Measurable outcomes and return on investment across sectors.',
    icon: Target,
    href: '/grant/knight-foundation/impact-roi',
    ascii: '->'
  },
  {
    title: 'Human-Ready AI Toolkits',
    description: '6-month pilot roadmap from launch to sustainability.',
    icon: Clock,
    href: '/grant/knight-foundation/roadmap',
    ascii: 'AI'
  },
  {
    title: 'Full Proposal',
    description: 'Read our complete 1,000-word proposal narrative.',
    icon: FileText,
    href: '/grant/knight-foundation/proposal',
    ascii: '[TXT]'
  }
];

export function KFProgramDetailsGrid() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pilot Program Details</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore each aspect of our lean, focused approach
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {details.map((detail, index) => (
          <motion.a
            key={detail.title}
            href={detail.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px #A4FF4E' }}
            className="relative p-8 rounded-xl border-2 border-transparent bg-gray-900/80 group overflow-hidden cursor-pointer flex flex-col justify-between min-h-[260px]"
            style={{
              borderImage: 'linear-gradient(120deg, #A4FF4E 0%, #3B82F6 100%) 1',
            }}
          >
            {/* Animated ASCII/pixel-art motif */}
            <motion.div
              className="absolute top-4 right-4 text-[#A4FF4E]/30 text-2xl font-mono select-none pointer-events-none"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              {detail.ascii}
            </motion.div>
            <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
              {React.createElement(detail.icon, {
                className: 'text-[#A4FF4E] w-7 h-7 drop-shadow-lg'
              })}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#A4FF4E] transition-colors">
              {detail.title}
            </h3>
            <p className="text-gray-300 mb-4">
              {detail.description}
            </p>
            <div className="flex items-center gap-2 text-[#A4FF4E] font-bold mt-auto group-hover:underline">
              Learn more
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(120deg, #A4FF4E22 0%, #3B82F622 100%)',
                filter: 'blur(32px)',
                opacity: 0.5,
              }}
              animate={{ opacity: [0.5, 0.7, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
} 