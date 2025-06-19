'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Calendar, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function TimelineSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const timelineItems = [
    {
      month: 'Month 1',
      title: 'Project Setup',
      items: [
        'Order hardware and set up development environment',
        'Create initial WebApp MVP',
        'Design LMS micro-course structure'
      ]
    },
    {
      month: 'Month 2',
      title: 'Development & Content',
      items: [
        'Complete WebApp development',
        'Record and edit video tutorials',
        'Set up analytics and reporting systems'
      ]
    },
    {
      month: 'Month 3',
      title: 'Testing & Training',
      items: [
        'Install hardware at pilot venues',
        'Train venue staff and mentors',
        'Conduct initial user testing'
      ]
    },
    {
      month: 'Month 4',
      title: 'Launch & Outreach',
      items: [
        'Public launch of the platform',
        'Begin marketing campaign',
        'Host first community events'
      ]
    },
    {
      month: 'Month 5-12',
      title: 'Growth & Optimization',
      items: [
        'Monitor and optimize performance',
        'Gather user feedback',
        'Implement improvements and new features'
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className={`w-8 h-8 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
            <h2 className={`text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Project Timeline
            </h2>
          </div>

          <div className="space-y-8">
            {timelineItems.map((phase, index) => (
              <div key={phase.month} className="relative">
                {index < timelineItems.length - 1 && (
                  <div className={`absolute left-4 top-12 bottom-0 w-0.5 ${
                    isDark ? 'bg-[#A4FF4E]/30' : 'bg-blue-200'
                  }`} />
                )}
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-[#A4FF4E]' : 'bg-blue-500'
                  }`}>
                    <span className={`text-sm font-bold ${
                      isDark ? 'text-black' : 'text-white'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`text-xl font-bold ${
                        isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                      }`}>
                        {phase.month}
                      </h3>
                      <span className={`text-lg ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        - {phase.title}
                      </span>
                    </div>
                    <ul className={`space-y-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-8 p-6 rounded-xl border-2 ${
            isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
          } shadow-neon`}>
            <p className={`${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              This timeline represents our planned implementation schedule. We've built in buffer time 
              for unexpected challenges and will maintain flexibility to adjust the schedule based on 
              feedback and learnings from each phase. Regular progress updates will be provided to 
              all stakeholders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 