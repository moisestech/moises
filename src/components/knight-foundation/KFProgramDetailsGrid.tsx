import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign, Calendar, Tv, Target, Clock, FileText, ArrowRight, Info, BarChart, Users, Brain, RefreshCw
} from 'lucide-react';

const baseUrl = '/grant/knight-foundation';

const details = [
  {
    title: 'Impact Analytics',
    description: 'Real-time dashboard tracking community engagement, workshop participation, and digital skill development.',
    icon: BarChart,
    href: `${baseUrl}/impact-roi`,
    ascii: '$$',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750296175/ai24/app/ai24-impact-analytics_whswlb.png',
    funFact: 'Live metrics in real-time!'
  },
  {
    title: 'Zero-Cost Skill Sprints',
    description: 'Free, bilingual skill clinics with ASL interpretation, childcare, and accessibility-first design.',
    icon: Users,
    href: `${baseUrl}/workshops`,
    ascii: '===',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750296176/ai24/app/ai24-skill-clinics-accessibility_vtmheh.png',
    funFact: '100% accessible to all!'
  },
  {
    title: 'Community Screens',
    description: 'Plug-n-play Smart Signs transforming venue TVs into interactive community announcement boards.',
    icon: Tv,
    href: `${baseUrl}/community-smart-signs`,
    ascii: '[TV]',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750296177/ai24/app/ai24-community-event-screens_ko2n5f.png',
    funFact: 'Raspberry Pi powered!'
  },
  {
    title: 'License → Refuel → Repeat',
    description: 'Sustainable growth model with $39/month venue licenses funding continued expansion.',
    icon: RefreshCw,
    href: `${baseUrl}/sustainability-cycle`,
    ascii: '->',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750296202/ai24/app/ai24-license-refuel-repeat_mfouvn.png',
    funFact: 'Self-sustaining model!'
  },
  {
    title: 'Human-Ready AI Toolkits',
    description: 'Curated AI tools designed with human needs in mind—accessible, ethical, and empowering.',
    icon: Brain,
    href: `${baseUrl}/ai-toolkits`,
    ascii: 'AI',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750296307/ai24/app/ai24-human-ready-ai-toolkits_s4hid3.png',
    funFact: 'AI built for humans!'
  },
  {
    title: 'Full Proposal',
    description: 'Complete 20-page proposal with detailed technical specifications, budget, and implementation timeline.',
    icon: FileText,
    href: `${baseUrl}/proposal`,
    ascii: '[TXT]',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1750296308/ai24/app/ai24-full-proposal_aiiadr.png',
    funFact: 'Everything you need to know!'
  }
];

export function KFProgramDetailsGrid() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);

  // Animation for click: quick neon border flash
  const handleCardClick = (index: number) => {
    setClicked(index);
    setTimeout(() => setClicked(null), 250);
  };

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pilot Program Details</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore each aspect of our comprehensive AI24 mobile laboratory proposal
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {details.map((detail, index) => {
          const CardTag = detail.href ? motion.a : motion.div;
          return (
            <CardTag
              key={detail.title}
              href={detail.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.07, boxShadow: '0 0 48px #A4FF4E', borderColor: '#A4FF4E' }}
              whileTap={{ scale: 0.96 }}
              onClick={detail.href ? undefined : () => handleCardClick(index)}
              className={`relative p-8 rounded-xl border-2 border-transparent bg-gray-900/80 group overflow-hidden cursor-pointer flex flex-col justify-between min-h-[420px] ${clicked === index ? 'ring-4 ring-[#A4FF4E] ring-opacity-80' : ''}`}
              style={{
                borderImage: 'linear-gradient(120deg, #A4FF4E 0%, #3B82F6 100%) 1',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
              role="button"
              aria-label={detail.title}
            >
              {/* Animated ASCII/pixel-art motif */}
              <motion.div
                className="absolute top-4 right-4 text-[#A4FF4E]/30 text-2xl font-mono select-none pointer-events-none z-10"
                animate={{ rotate: [0, 10, -10, 0], color: hovered === index ? '#A4FF4E' : '#A4FF4E55', scale: hovered === index ? 1.2 : 1 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                {detail.ascii}
              </motion.div>
              {/* Movie-poster style image with overlayed title */}
              <motion.div
                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 shadow-lg"
                whileHover={{ y: -8, scale: 1.04 }}
                animate={hovered === index ? { y: -8, scale: 1.04 } : { y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="object-cover w-full h-full"
                  style={{ filter: 'brightness(0.95) contrast(1.1)' }}
                />
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(120deg, #A4FF4E44 0%, #3B82F644 100%)',
                    mixBlendMode: 'overlay',
                    opacity: 0.5,
                  }}
                  animate={{ opacity: hovered === index ? 0.7 : 0.5 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlayed big title */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  initial={false}
                  animate={hovered === index ? {
                    opacity: 1,
                    scale: 1.08,
                    color: '#A4FF4E',
                    textShadow: '0 0 32px #A4FF4E, 0 0 8px #fff',
                    letterSpacing: 2,
                    rotate: -2
                  } : {
                    opacity: 0.85,
                    scale: 1,
                    color: '#fff',
                    textShadow: '0 0 16px #3B82F6',
                    letterSpacing: 0,
                    rotate: 0
                  }}
                  transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                >
                  <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-tight text-center select-none pointer-events-none" style={{ lineHeight: 1.1 }}>
                    {detail.title}
                  </span>
                </motion.div>
              </motion.div>
              <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center mx-auto">
                {React.createElement(detail.icon, {
                  className: 'text-[#A4FF4E] w-7 h-7 drop-shadow-lg'
                })}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#A4FF4E] transition-colors text-center">
                {detail.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center">
                {detail.description}
              </p>
              <div className="flex items-center gap-2 text-[#A4FF4E] font-bold mt-auto group-hover:underline justify-center">
                Learn more
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </div>
              {/* Tooltip / Fun Fact */}
              <AnimatePresence>
                {hovered === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-black/90 text-[#A4FF4E] px-4 py-2 rounded-lg shadow-lg text-sm z-20 border border-[#A4FF4E]/40 flex items-center gap-2"
                  >
                    <Info className="w-4 h-4" />
                    {detail.funFact}
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Animated border flash on click */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-xl"
                animate={clicked === index ? { boxShadow: '0 0 0 8px #A4FF4E, 0 0 32px #A4FF4E' } : { boxShadow: 'none' }}
                transition={{ duration: 0.25 }}
              />
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
            </CardTag>
          );
        })}
      </div>
    </section>
  );
} 