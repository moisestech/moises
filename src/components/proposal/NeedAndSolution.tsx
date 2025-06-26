import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Brain, Play, CheckCircle } from 'lucide-react';

const needItems = [
  "IG hides open calls",
  "Emails die in spam",
  "Unused TVs collect dust",
  "Latinx & Afro-Caribbean creatives miss out on AI skills"
];

const solutionItems = [
  "Plug-n-Play Community Screens — <$200 Pi kits",
  "4 Zero-Cost Skill Sprints — EN/ES",
  "Templates you can clone",
  "Live metrics you can screenshot"
];

const icons = [Tv, Brain, Play, CheckCircle];

export function NeedAndSolution() {
  return (
    <div className="grid md:grid-cols-2 gap-8 py-20">
      {/* Need Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 rounded-xl bg-gray-900 border border-gray-800"
      >
        <h2 className="text-3xl font-bold mb-8 text-white">The Signal Collapse</h2>
        <ul className="space-y-6">
          {needItems.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                {React.createElement(icons[index], {
                  className: 'w-4 h-4 text-red-400'
                })}
              </div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Solution Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 rounded-xl bg-gray-900 border border-gray-800"
      >
        <h2 className="text-3xl font-bold mb-8 text-white">The AI24 Stack</h2>
        <ul className="space-y-6">
          {solutionItems.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center flex-shrink-0">
                {React.createElement(icons[index], {
                  className: 'w-4 h-4 text-[#A4FF4E]'
                })}
              </div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
} 