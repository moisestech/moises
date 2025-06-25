import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, Clock } from 'lucide-react';

const milestones = [
  { text: "Sign MOUs with Bakehouse & Locust Projects", month: "Oct '25 (M1)" },
  { text: "Order 2 Smart Signs + 12 Pi learning kits", month: "Oct '25 (M1)" },
  { text: "Create Supabase project and GitHub repo skeleton", month: "Oct '25 (M1)" },
  { text: "Skin UI (EN/ES) and deploy Web-App MVP to Vercel", month: "Nov '25 (M2)" },
  { text: "PostHog + Looker Studio wired to demo data", month: "Nov '25 (M2)" },
  { text: "Draft Micro-Course #1 outline", month: "Nov '25 (M2)" },
  { text: "Push open-core repo public", month: "Dec '25 (M3)" },
  { text: "Film & edit Micro-Course #1: Web-Design for Smart Signs", month: "Dec '25 (M3)" },
  { text: "Install Smart Sign #1 in Bakehouse lobby", month: "Jan '26 (M4)" },
  { text: "Assemble 6 Pi kits for in-house beta", month: "Jan '26 (M4)" },
  { text: "Internal beta & bug-fix sprint", month: "Jan '26 (M4)" },
  { text: "Record Micro-Course #2 (Ethical AI Agents)", month: "Feb '26 (M5)" },
  { text: "Add QR flyers + live metrics slide", month: "Feb '26 (M5)" },
  { text: "Start gathering early user testimonials", month: "Feb '26 (M5)" },
  { text: "Run Screen-Admin Skill Sprint #1 (EN/ES, captioned)", month: "Mar '26 (M6)" },
  { text: "Launch Micro-Course #2 to LMS", month: "Mar '26 (M6)" },
  { text: "Install Smart Sign #2 at Locust Projects", month: "Apr '26 (M7)" },
  { text: "Assemble remaining 6 Pi kits", month: "Apr '26 (M7)" },
  { text: "LaserCube Pop-Up #1 (Little Haiti w/ Edge Zones)", month: "May '26 (M8)" },
  { text: "Live KPI dashboard public", month: "May '26 (M8)" },
  { text: "Run Skill Sprint #2 + capture footage", month: "Jun '26 (M9)" },
  { text: "Reach 100 course completions milestone", month: "Jun '26 (M9)" },
  { text: "LaserCube Pop-Up #2 (Design District)", month: "Jul '26 (M10)" },
  { text: "Publish open-source playbook + parts list", month: "Jul '26 (M10)" },
  { text: "Secure first nonprofit license ($39/mo) → covers Year-2 hosting", month: "Aug '26 (M11)" },
  { text: "Merge external pull-request #1", month: "Aug '26 (M11)" },
  { text: "Produce \"Year-1 Impact Reel\" (for Knight + partners)", month: "Sep '26 (M12)" },
  { text: "Hit 200 course completions / 40k bilingual impressions", month: "Sep '26 (M12)" },
  { text: "Prepare grant close-out report & next-city prospectus", month: "Sep '26 (M12)" }
];

// Group milestones by quarter for compact view
const quarterlyMilestones = [
  {
    quarter: "Q4 2025",
    period: "Oct – Dec '25",
    phase: "Build & Stage",
    milestones: milestones.slice(0, 8),
    color: "from-[#A4FF4E] to-[#00FF88]"
  },
  {
    quarter: "Q1 2026", 
    period: "Jan – Mar '26",
    phase: "Deploy",
    milestones: milestones.slice(8, 16),
    color: "from-[#3B82F6] to-[#1D4ED8]"
  },
  {
    quarter: "Q2 2026",
    period: "Apr – Jun '26", 
    phase: "Teach & Test",
    milestones: milestones.slice(16, 22),
    color: "from-[#8B5CF6] to-[#7C3AED]"
  },
  {
    quarter: "Q3 2026",
    period: "Jul – Sep '26",
    phase: "Engage & Sustain", 
    milestones: milestones.slice(22, 28),
    color: "from-[#EC4899] to-[#DB2777]"
  }
];

function MilestoneItem({ milestone, index }: { milestone: { text: string; month: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-16 mb-8 last:mb-0"
    >
      {/* Dot */}
      <div className="absolute left-6 w-4 h-4 rounded-full bg-[#A4FF4E] transform -translate-x-1/2 mt-2" />

      {/* Content */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-[#A4FF4E]/30 transition-colors">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-[#A4FF4E] font-bold">0{index + 1}</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">
              {milestone.text}
            </h3>
            <p className="text-sm text-[#A4FF4E]/80 mt-1">{milestone.month}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CompactQuarterView({ quarter, isExpanded }: { quarter: typeof quarterlyMilestones[0]; isExpanded: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${quarter.color} flex items-center justify-center`}>
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{quarter.quarter}</h3>
          <p className="text-[#A4FF4E]/80">{quarter.period} · {quarter.phase}</p>
        </div>
      </div>
      
      {isExpanded ? (
        <div className="ml-16">
          {quarter.milestones.map((milestone, index) => (
            <MilestoneItem key={index} milestone={milestone} index={index} />
          ))}
        </div>
      ) : (
        <div className="ml-16 space-y-2">
          {quarter.milestones.slice(0, 3).map((milestone, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-[#A4FF4E]" />
              <span className="text-sm">{milestone.text}</span>
            </div>
          ))}
          {quarter.milestones.length > 3 && (
            <div className="text-sm text-[#A4FF4E]/60 italic">
              +{quarter.milestones.length - 3} more milestones...
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

export function TimelineVertical() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">12-Month Implementation Timeline</h2>
          <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-6">
            Detailed month-by-month breakdown of all project milestones
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30">
            <Clock className="w-4 h-4 text-[#A4FF4E]" />
            <span className="text-sm text-[#A4FF4E]">28 total milestones across 4 quarters</span>
          </div>
        </motion.div>

        {/* Compact View */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#A4FF4E]/20" />

          <div className="space-y-8">
            {quarterlyMilestones.map((quarter, index) => (
              <CompactQuarterView key={quarter.quarter} quarter={quarter} isExpanded={isExpanded} />
            ))}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium border-2 border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(164,255,78,0.3)]"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Show Compact View</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>View in Detail</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 rounded-xl border border-[#A4FF4E]/20 bg-black/40 max-w-2xl mx-auto text-center"
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold text-[#A4FF4E]">28</div>
              <div className="text-sm text-gray-400">Total Milestones</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#A4FF4E]">4</div>
              <div className="text-sm text-gray-400">Quarters</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#A4FF4E]">12</div>
              <div className="text-sm text-gray-400">Months</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 