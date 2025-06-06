'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Sparkles, CheckCircle2 } from 'lucide-react';

const milestones = [
  'Install 3 pilot screens in Miami venues',
  'Host 2 free community clinics',
  'Launch live equity metrics dashboard',
  'Publish open-source signage code',
  'Gather feedback from 100+ participants',
  'Document outcomes for Knight Foundation',
];

export default function KnightFoundationPilotClient() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Back Link */}
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
      <section className="pt-32 pb-20 text-center relative">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-[#A4FF4E] drop-shadow-lg"
          >
            1 Year Pilot: <span className="text-white">Turning Idle Screens into Culture Hubs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-[#A4FF4E]/80 mb-10"
          >
            A Knight-seeded experiment to transform public screens into vibrant, bilingual community platforms. This pilot brings together artists, technologists, and neighbors to co-create digital culture in Miami.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/grant/knight-foundation/proposal#timeline"
              className="px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors inline-flex items-center gap-2"
            >
              View Full Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/grant/knight-foundation/budget"
              className="px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors inline-flex items-center gap-2"
            >
              See Budget
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <Sparkles className="absolute right-10 top-10 w-16 h-16 text-[#A4FF4E]/30 animate-pulse" />
      </section>

      {/* Pilot Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Pilot <span className="text-[#A4FF4E]">Milestones</span>
          </h2>
          <div className="max-w-2xl mx-auto grid gap-6">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-center gap-4 p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon"
              >
                <CheckCircle2 className="w-6 h-6 text-[#A4FF4E] flex-shrink-0" />
                <span className="text-lg text-[#A4FF4E]/90">{milestone}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 