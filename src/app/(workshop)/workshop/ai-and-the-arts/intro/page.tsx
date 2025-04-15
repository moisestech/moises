"use client";

import { motion } from "framer-motion";
import TimelineSection from "@/lib/workshops/components/TimelineSection";
import ToolGrid from "@/lib/workshops/components/ToolGrid";
import { AI_VIDEO_TIMELINE, DOCUMENTARY_EXAMPLES } from "@/lib/workshops/constants/timeline";
import { VIDEO_COMPANIES } from "@/lib/workshops/constants/companies";

export default function AIArtsIntroPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI & The Arts
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Let&apos;s explore how AI is transforming the art world
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition-colors">
              Start Learning
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-colors">
              View Syllabus
            </button>
          </div>
        </motion.div>
      </section>

      {/* Course Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In this comprehensive workshop, you&apos;ll learn how to harness the power of AI tools
                  to enhance your creative process and produce compelling artistic works.
                </p>
                <p>
                  From video generation to music composition, we&apos;ll explore the latest AI technologies
                  and their practical applications in various artistic domains.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "4+", label: "Weeks of Content" },
                { number: "20+", label: "AI Tools Covered" },
                { number: "10+", label: "Hands-on Projects" },
                { number: "∞", label: "Creative Possibilities" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 p-6 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Generation Tools */}
      <ToolGrid
        tools={VIDEO_COMPANIES}
        title="Video Generation Tools"
        description="Explore the latest AI-powered tools for video creation and editing."
      />

      {/* Timeline */}
      <TimelineSection
        events={AI_VIDEO_TIMELINE}
        title="Evolution of AI Video Generation"
        description="Track the rapid development of AI video technologies from 2022 to present."
      />

      {/* Case Studies */}
      <TimelineSection
        events={DOCUMENTARY_EXAMPLES}
        title="Real-World Applications"
        description="Discover how filmmakers and artists are using AI in groundbreaking ways."
      />
    </main>
  );
} 