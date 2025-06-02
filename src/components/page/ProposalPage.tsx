'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { ChevronLeft, FileText } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ProposalPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <TechNonprofitNavKF />

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          } transition-colors`}
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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Full Proposal
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              AI24: Community Screens & Skills
              <br />
              for a Digital-First Miami
            </h1>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              A lean pilot program to prove demand, gather real-world feedback, and generate the data needed for sustainable growth
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={FileText}
        gradientColors={{
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Proposal Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <h2>Project Overview</h2>
            <p>
              AI24 will pilot a bilingual, open-source "Community Announcement Board" and four free AI-capacity clinics 
              that teach Miami artists and neighborhood groups to run it. Six Raspberry Pi players will transform idle 
              TVs at Bakehouse Art Complex, Edge Zones, and Pérez Art Museum Miami into live, data-driven bulletin boards. 
              The six-month project equips creatives with the same tech it installs—building people-first digital capacity 
              that can be forked city-wide.
            </p>

            <h2>Need</h2>
            <p>
              Emerging artists and small organizations struggle to surface events and open calls in today's algorithm-heavy 
              media landscape. Instagram buries posts; email lists skew to insiders; hardware often gathers dust for lack 
              of staff who know how to use it. Miami's multilingual, mobile audiences are especially hard to reach, and 
              affordable hands-on AI training is scarce for Latinx and Afro-Caribbean communities. Without a low-cost way 
              to broadcast opportunities and the skills to produce hybrid content, many cultural voices stay local, unseen 
              by the greater community and potential funders.
            </p>

            <h2>Solution</h2>
            <p>
              AI24 addresses both halves of the problem—hardware + human fluency.
            </p>
            <p>
              <strong>Community Announcement Board</strong> – a lightweight React + Supabase web app that cycles posts, 
              QR codes, and live metrics; runs on &lt;$200 Raspberry Pi kits so any TV can join the network.
            </p>
            <p>
              <strong>Capacity Clinics</strong> – four free, accessibility-first workshops (EN/ES/ASL):
            </p>
            <ul>
              <li>"Zero-Budget AI Storyboarding" (Bakehouse)</li>
              <li>"Archive-to-AI Mural Mapping" (Edge Zones block party)</li>
              <li>"AI on the Terrace: Captions & Voice Clones for Accessibility" (PAMM rooftop + stream)</li>
              <li>"No-GPU Short-Film Pipeline" (NWSA)</li>
            </ul>
            <p>
              Learners leave with prompt sheets, editable templates, and admin access to schedule content on the screens 
              they just saw in action.
            </p>

            <h2>Activities & Timeline (April – September 2025)</h2>
            <ul>
              <li><strong>Month 1:</strong> finalize UI skin, order hardware, collect design feedback from venue partners.</li>
              <li><strong>Month 2:</strong> install three pilot screens; soft-launch with internal testing; recruit workshop cohort.</li>
              <li><strong>Month 3–4:</strong> deliver first two clinics; stream and archive bilingual tutorials; turn feedback into UX tweaks; bring total screens to six.</li>
              <li><strong>Month 5:</strong> run remaining two clinics; project live dashboard on the screens to show reach and equity stats in real time.</li>
              <li><strong>Month 6:</strong> publish open-source repo, release data-driven impact report, and secure at least one paid signage-board license or master-class booking.</li>
            </ul>

            <h2>Outcomes & Evaluation</h2>
            <ul>
              <li><strong>Access</strong> – 120 in-person learners + 400 livestream viewers; ≥40% women-identifying and ≥30% Spanish/Haitian-Creole speakers.</li>
              <li><strong>Reach</strong> – 3,000 public impressions & QR scans across six screens (tracked by PostHog).</li>
              <li><strong>Adoption</strong> – Two outside pull requests to the GitHub repo and one community-submitted prompt library.</li>
              <li><strong>Sustained use</strong> – At least one venue commits to a paid board license or underwrites a follow-up clinic before project end.</li>
            </ul>
            <p>KPIs feed into a Tableau Public dashboard that Knight staff can monitor live.</p>

            <h2>Equity & Accessibility</h2>
            <p>
              Workshops provide childcare, snacks, and transit vouchers; all videos include EN/ES captions and ASL 
              picture-in-picture. The screens display rolling metrics—attendance by ZIP code, gender balance—so 
              participants see transparency in action. Templates and docs ship under Creative Commons BY so peers 
              in Akron and Detroit can replicate the model without new grant dollars.
            </p>

            <h2>Sustainability and Scaling</h2>
            <p>
              After the pilot, AI24 offers a sliding-scale master-class series and a signage SaaS tier ($39/mo for 
              non-profits). One signed license pays annual cloud hosting; additional revenue funds mentor stipends 
              and more screens. Because the code is open-source and runs on commodity hardware, Akron and Detroit 
              partners can adopt it quickly—extending Knight's investment across its three focus cities.
            </p>

            <h2>Team</h2>
            <p>
              <strong>Moises Sanabria</strong> (Project Lead/Developer, 0.3 FTE) brings 12 years of React and AI-media 
              experience and directs the Digital Lab at Bakehouse.
            </p>
            <p>
              <strong>Fabiola Larios</strong> (Community & Growth, 0.15 FTE) is a bilingual strategist who has run 
              accessibility-driven art programs across Miami.
            </p>
            <p>
              Three paid mentors anchor each workshop with localized expertise; volunteer film students from New World 
              School of the Arts handle streaming.
            </p>

            <h2>Long-term Vision</h2>
            <p>
              By year three the board network will span 30+ screens, AI24 toolkits will embed in six Southeast U.S. 
              art programs, and a self-funding loop of memberships, SaaS fees, and B2B audits will drive a culturally 
              rooted Miami tech hub—proof that digital capacity is not just about gadgets, but about confident creators 
              amplifying their communities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 