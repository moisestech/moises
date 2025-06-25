import React from 'react';
import { motion, useInView } from 'framer-motion';

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

function MilestoneItem({ milestone, index }: { milestone: { text: string; month: string }; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-16 mb-12 last:mb-0"
    >
      {/* Dot */}
      <div className="absolute left-6 w-4 h-4 rounded-full bg-[#A4FF4E] transform -translate-x-1/2 mt-2" />

      {/* Content */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-[#A4FF4E] font-bold">0{index + 1}</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">
              {milestone.text}
            </h3>
            <p className="text-sm text-[#A4FF4E]/80 mt-1">{milestone.month}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TimelineVertical() {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#A4FF4E]/20" />

          {milestones.map((milestone, index) => (
            <MilestoneItem key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
} 