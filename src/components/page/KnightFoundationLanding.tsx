'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { 
  Code,
  Users,
  Calendar,
  DollarSign,
  Clock,
  BarChart,
  Tv,
  Target,
  ArrowRight,
  Brain,
  Heart,
  Sparkles,
  FileText,
  Network,
  Play,
  CheckCircle,
} from 'lucide-react';
import { MicroMotif } from '../shared/MicroMotif';
import { ChromeIcon } from '../shared/ChromeIcon';
import { NeonText } from '../shared/NeonText';
import { ChromeButton } from '../shared/ChromeButton';
import { CursorTrail } from '../shared/CursorTrail';
import '../../styles/theme.css';
import { KFPrinciplesSection } from '@/components/knight-foundation/KFPrinciplesSection';
import { KFProgramDetailsGrid } from '@/components/knight-foundation/KFProgramDetailsGrid';
import { KFMetricsBar } from '@/components/knight-foundation/KFMetricsBar';

// Micro-motifs as SVG paths
const motifs = {
  wiggle: "M0 10 Q5 0 10 10 T20 10 T30 10 T40 10",
  binary: "M0 0 L10 0 M0 10 L10 10 M20 0 L30 0 M20 10 L30 10",
  plusMinus: "M0 5 L10 5 M5 0 L5 10 M20 5 L30 5 M25 0 L25 10"
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const pulse = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.1, 1],
    transition: { duration: 0.5 }
  }
};

// Cursor trail effect
const useCursorTrail = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { position, isVisible };
};

const KnightFoundationLanding: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { position, isVisible } = useCursorTrail();

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorTrail />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#1a1a1a]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <h1 className="text-[120px] md:text-[140px] font-bold leading-[1] tracking-tight mb-8 text-white">
              MAKE AI FOR ALL
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Knight-seeded pilot turning idle screens into culture hubs
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/grant/knight-foundation/pilot"
                className="px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
              >
                See the 6-Month Pilot
              </Link>
              <Link
                href="/grant/knight-foundation/proposal.pdf"
                className="px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
              >
                Download 1-page PDF
              </Link>
            </div>
          </motion.div>
        </div>
        <MicroMotif type="wiggle" className="absolute bottom-10 left-10 text-[#A4FF4E]" />
        <MicroMotif type="binary" className="absolute top-10 right-10 text-[#A4FF4E]" />
      </section>

      {/* Animated Metrics Bar with narrative header */}
      <KFMetricsBar />

      {/* Impact Bar */}
      <section className="sticky top-0 bg-black/80 backdrop-blur-sm z-30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <NeonText text="120+" size="sm" />
                <p className="text-sm text-gray-400">Learners</p>
              </div>
              <div className="text-center">
                <NeonText text="6" size="sm" />
                <p className="text-sm text-gray-400">Screens</p>
              </div>
              <div className="text-center">
                <NeonText text="3" size="sm" />
                <p className="text-sm text-gray-400">Venues</p>
              </div>
              <div className="text-center">
                <NeonText text="100%" size="sm" />
                <p className="text-sm text-gray-400">Bilingual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <KFPrinciplesSection />

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: 'rgba(59, 130, 246, 0.1)',
          via: 'rgba(147, 51, 234, 0.1)',
          to: 'rgba(59, 130, 246, 0.1)'
        }}
        iconColor="text-blue-400/50"
      />

      {/* Program Details Grid */}
      <KFProgramDetailsGrid />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(59, 130, 246, 0.1)',
          via: 'rgba(147, 51, 234, 0.1)',
          to: 'rgba(59, 130, 246, 0.1)'
        }}
        iconColor="text-blue-400/50"
      />

      {/* Ethics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-[120px] font-bold leading-[1] tracking-tight text-white"
            >
              ETHICS
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                    <Code className="w-4 h-4 text-[#A4FF4E]" />
                  </div>
                  Creative Commons code
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                    <BarChart className="w-4 h-4 text-[#A4FF4E]" />
                  </div>
                  Live equity metrics
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                    <Network className="w-4 h-4 text-[#A4FF4E]" />
                  </div>
                  Open API
                </li>
              </ul>
              <Link
                href="/grant/knight-foundation/ethics"
                className="inline-flex items-center gap-2 text-[#A4FF4E] hover:underline"
              >
                See our Responsible-AI rubric
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-0 bg-black">
          <div className="p-12 bg-gradient-to-r from-[#A4FF4E]/20 to-transparent">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Knight's $24,850 sparks a self-funded, bilingual tech spine for Miami's creatives. Ready to light the fuse?
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/grant/knight-foundation/support"
                className="px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
              >
                Sign Support Letter
              </Link>
              <Link
                href="/grant/knight-foundation/demo"
                className="px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
              >
                Book Demo
              </Link>
            </div>
          </div>
          <div className="p-12 bg-black" />
        </div>
      </section>
    </div>
  );
};

export default KnightFoundationLanding; 