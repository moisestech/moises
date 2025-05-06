'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Brain, Wrench, BookOpen, Users } from 'lucide-react';

interface CapacityMetric {
  name: string;
  value: number;
  icon: typeof Brain | typeof Wrench | typeof BookOpen | typeof Users;
  description: string;
  examples: string[];
}

const INITIAL_METRICS: CapacityMetric[] = [
  {
    name: "People-Fluency",
    value: 70,
    icon: Brain,
    description: "Every stakeholder can confidently describe, select and shape the tech—not just click buttons.",
    examples: [
      "Tech literacy workshops",
      "Hands-on training sessions",
      "Skill assessment frameworks"
    ]
  },
  {
    name: "Lean Tool Stack",
    value: 30,
    icon: Wrench,
    description: "Minimal hardware + modular, cloud-first software that can be swapped or scaled.",
    examples: [
      "Cloud-based solutions",
      "Open-source alternatives",
      "Modular architecture"
    ]
  },
  {
    name: "Process Playbooks",
    value: 60,
    icon: BookOpen,
    description: "Documented, repeatable workflows (prompt sheets, safety check-lists, media-archiving SOPs).",
    examples: [
      "Documentation templates",
      "Standard procedures",
      "Training materials"
    ]
  },
  {
    name: "Community Network",
    value: 50,
    icon: Users,
    description: "Shared announcement board + LMS + public dashboards that broadcast progress and invite feedback.",
    examples: [
      "Public dashboards",
      "Community forums",
      "Feedback systems"
    ]
  }
];

export default function CapacityFormula() {
  const { theme } = useTheme();
  const [metrics, setMetrics] = useState<CapacityMetric[]>(INITIAL_METRICS);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const calculateCapacity = () => {
    const peopleAndProcess = (metrics[0].value * metrics[2].value) / 100;
    const toolsAndCommunity = (metrics[1].value * metrics[3].value) / 100;
    return Math.round(peopleAndProcess + toolsAndCommunity);
  };

  const handleSliderChange = (index: number, value: number) => {
    const newMetrics = [...metrics];
    newMetrics[index].value = value;
    setMetrics(newMetrics);
  };

  return (
    <div className="space-y-12">
      {/* Formula Display */}
      <div className={`p-6 rounded-xl border ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 text-center ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Digital Capacity Formula
        </h3>
        <div className="flex flex-col items-center space-y-4">
          <p className={`text-xl font-mono ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Capacity = (People × Process) + (Tools × Community)
          </p>
          <div className={`text-3xl font-bold ${
            theme === 'dark' ? 'text-green-400' : 'text-green-600'
          }`}>
            {calculateCapacity()}%
          </div>
        </div>
      </div>

      {/* Interactive Sliders */}
      <div className="grid md:grid-cols-2 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            className={`p-6 rounded-xl border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredMetric(metric.name)}
            onHoverEnd={() => setHoveredMetric(null)}
          >
            <div className="flex items-center gap-4 mb-4">
              {React.createElement(metric.icon, {
                className: `w-6 h-6 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`
              })}
              <h4 className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{metric.name}</h4>
            </div>

            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>{metric.description}</p>

            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                value={metric.value}
                onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between">
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>0%</span>
                <span className={`text-sm font-bold ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>{metric.value}%</span>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>100%</span>
              </div>
            </div>

            {hoveredMetric === metric.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                <ul className="space-y-2">
                  {metric.examples.map((example, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                      }`} />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Key Insight */}
      <div className={`p-6 rounded-xl border ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <p className={`text-center italic ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          A dollar spent on tools only multiplies impact after the other three factors are in place.
        </p>
      </div>
    </div>
  );
} 