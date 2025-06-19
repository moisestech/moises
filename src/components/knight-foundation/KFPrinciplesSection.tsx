import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Target, Info } from 'lucide-react';

const principles = [
  {
    title: 'Human-Centric',
    description: "Technology that amplifies human efforts, not replaces them",
    icon: Heart,
    ascii: '<3',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214598/ai24/app/ai24-knight-foundation/Futuristic_Philosophy_in_Metallic_Design_qolmr3.png',
    funFact: 'We design for people first!'
  },
  {
    title: 'Sustainable Impact',
    description: "Self-sustaining model through license revenue",
    icon: Target,
    ascii: '->',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214591/ai24/app/ai24-knight-foundation/Sustainability_Flywheel_in_Neon_Gradients_a5617k.png',
    funFact: 'We build for long-term change.'
  },
  // {
  //   title: 'AI24 Academy',
  //   description: "Boot-camp for ethical, creative AI in Miami.",
  //   icon: Users,
  //   ascii: 'AI',
  //   image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214582/ai24/app/ai24-knight-foundation/AI24_Academy_Boot-Camp_Promo_fhtvvt.png',
  //   funFact: 'Training the next wave.'
  // },
  {
    title: 'Ethical Creativity',
    description: "AI24: Ethical creativity in action.",
    icon: Info,
    ascii: 'EC',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214568/ai24/app/ai24-knight-foundation/AI24__Ethical_Creativity_in_Action_jlukuu.png',
    funFact: 'Ethics meets art.'
  },
  {
    title: 'Enhance Your Impact',
    description: "AI24 Promo: Enhance your impact.",
    icon: Heart,
    ascii: 'EYI',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214556/ai24/app/ai24-knight-foundation/AI24_Promo__Enhance_Your_Impact_nn3qlb.png',
    funFact: 'Amplify your reach.'
  },
  // {
  //   title: 'Ethics Meets Innovation',
  //   description: "AI24: Ethics meets innovation.",
  //   icon: Target,
  //   ascii: 'EMI',
  //   image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214536/ai24/app/ai24-knight-foundation/AI24__Ethics_Meets_Innovation_agmnga.png',
  //   funFact: 'Where values drive tech.'
  // },
  {
    title: 'AI Ethics in Design',
    description: "AI Ethics in digital design.",
    icon: Info,
    ascii: 'AED',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214526/ai24/app/ai24-knight-foundation/AI_Ethics_in_Digital_Design_dfpg5k.png',
    funFact: 'Designing with conscience.'
  },
  // {
  //   title: 'Innovating for Everyone',
  //   description: "AI24: Innovating for everyone.",
  //   icon: Users,
  //   ascii: 'IFE',
  //   image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214515/ai24/app/ai24-knight-foundation/AI24__Innovating_for_Everyone_nl7v9x.png',
  //   funFact: 'Tech for all.'
  // },
  // {
  //   title: 'Sustainability Strategy',
  //   description: "Impact flywheel: Sustainability strategy.",
  //   icon: Heart,
  //   ascii: 'SS',
  //   image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214503/ai24/app/ai24-knight-foundation/Impact_Flywheel__Sustainability_Strategy_vb4f9o.png',
  //   funFact: 'Circular impact.'
  // },
  {
    title: 'Impact Targets',
    description: "Impact targets for Miami's future.",
    icon: Target,
    ascii: 'IT',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214491/ai24/app/ai24-knight-foundation/Impact_Targets_for_Miami_s_Future_duh3ib.png',
    funFact: 'Aiming for change.'
  },
  // {
  //   title: 'Announcement Board',
  //   description: "Community announcement board design.",
  //   icon: Info,
  //   ascii: 'CAB',
  //   image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1749214479/ai24/app/ai24-knight-foundation/Community_Announcement_Board_Design_yxfblq.png',
  //   funFact: 'Broadcasting community.'
  // }
];

export function KFPrinciplesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Principles</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Core values that guide our approach
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.07, boxShadow: '0 0 48px #A4FF4E', borderColor: '#A4FF4E' }}
            className={`relative p-6 rounded-xl border-2 border-transparent bg-gray-900/80 group overflow-hidden cursor-pointer`}
            style={{
              borderImage: 'linear-gradient(120deg, #A4FF4E 0%, #3B82F6 100%) 1',
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Animated ASCII/pixel-art motif */}
            <motion.div
              className="absolute top-4 right-4 text-[#A4FF4E]/30 text-3xl font-mono select-none pointer-events-none z-10"
              animate={{ rotate: [0, 10, -10, 0], color: hovered === index ? '#A4FF4E' : '#A4FF4E55', scale: hovered === index ? 1.2 : 1 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              {principle.ascii}
            </motion.div>
            {/* Vertical Placeholder Image */}
            <motion.div
              className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 shadow-lg"
              whileHover={{ y: -8, scale: 1.04 }}
              animate={hovered === index ? { y: -8, scale: 1.04 } : { y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <img
                src={principle.image}
                alt={principle.title}
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
            </motion.div>
            <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center mx-auto">
              {React.createElement(principle.icon, {
                className: 'text-[#A4FF4E] w-7 h-7 drop-shadow-lg'
              })}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#A4FF4E] transition-colors text-center">
              {principle.title}
            </h3>
            <p className="text-gray-300 text-center">
              {principle.description}
            </p>
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
                  {principle.funFact}
                </motion.div>
              )}
            </AnimatePresence>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
} 