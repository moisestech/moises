import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign, Calendar, Tv, Target, Clock, FileText, ArrowRight, Info
} from 'lucide-react';

const details = [
  {
    title: 'Impact You Can Screenshot',
    description: 'Detailed breakdown of the $24,850 pilot program with interactive visualizations.',
    icon: DollarSign,
    href: '/grant/knight-foundation/budget',
    ascii: '$$',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    funFact: 'Every dollar is visualized!'
  },
  {
    title: '4 Zero-Cost Skill Sprints',
    description: 'Free capacity clinics with accessibility-first approach.',
    icon: Calendar,
    href: '/grant/knight-foundation/workshops',
    ascii: '===',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    funFact: 'Workshops are always free.'
  },
  {
    title: 'Plug-n-Play Community Screens',
    description: 'Open-source React + Supabase digital signage solution.',
    icon: Tv,
    href: '/grant/knight-foundation/smart-sign',
    ascii: '[TV]',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    funFact: 'Screens run on open source!'
  },
  {
    title: 'License → Re-fuel → Repeat',
    description: 'Measurable outcomes and return on investment across sectors.',
    icon: Target,
    href: '/grant/knight-foundation/impact-roi',
    ascii: '->',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    funFact: 'ROI is tracked in real time.'
  },
  {
    title: 'Human-Ready AI Toolkits',
    description: '6-month pilot roadmap from launch to sustainability.',
    icon: Clock,
    href: '/grant/knight-foundation/roadmap',
    ascii: 'AI',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    funFact: 'AI tools for everyone.'
  },
  {
    title: 'Full Proposal',
    description: 'Read our complete 1,000-word proposal narrative.',
    icon: FileText,
    ascii: '[TXT]',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    funFact: 'The full story, in one place.'
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
          Explore each aspect of our lean, focused approach
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