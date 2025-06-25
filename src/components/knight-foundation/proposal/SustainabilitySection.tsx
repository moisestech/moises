'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { BookOpen, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function SustainabilitySection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sustainabilityPoints = [
    {
      title: 'Cost-Effective Infrastructure',
      items: [
        'WebApp is MIT-licensed and costs <$30/month to self-host',
        'Most venues prefer the convenience of managed hosting',
        '$99/month nonprofit SaaS tier covers Supabase/PostHog costs'
      ]
    },
    {
      title: 'Revenue Streams',
      items: [
        'Optional premium modules (sponsor slides, multi-venue dashboard)',
        '$9–$29 LMS micro-courses generate cash for mentor stipends',
        'New venues can join the network cheaply, driving additional subscriptions'
      ]
    },
    {
      title: 'Long-term Sustainability',
      items: [
        'If all three pilot hosts convert, Year-2 hosting is covered',
        'Bug-fix time is entirely community-funded',
        'Hardware is commodity and tutorials are Creative Commons'
      ]
    }
  ];

  return (
    <section id="sustainability" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className={`w-8 h-8 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
            <h2 className={`text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Sustainability Plan
            </h2>
          </div>

          <div className="space-y-8">
            {sustainabilityPoints.map((category) => (
              <div key={category.title}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                }`}>
                  {category.title}
                </h3>
                <ul className={`space-y-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`mt-8 p-6 rounded-xl border-2 ${
            isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
          } shadow-neon`}>
            <p className={`${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The WebApp is MIT-licensed and costs &lt;$30/month to self-host, but most venues prefer convenience. 
              A $99/month nonprofit SaaS tier covers Supabase/PostHog costs and funds upgrades. Optional 
              premium modules (sponsor slides, multi-venue dashboard) provide upsell revenue, while $9–$29 LMS 
              micro-courses generate cash for mentor stipends. Because hardware is commodity and tutorials are 
              Creative Commons, new venues can join the network cheaply, driving additional subscriptions. If all 
              three pilot hosts convert, Year-2 hosting and bug-fix time are entirely community-funded.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 