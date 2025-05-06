'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Printer, Users, BookOpen, DollarSign } from 'lucide-react';

const ROI_DATA = [
  {
    category: "Hardware/Software",
    oldModel: 25,
    newModel: 25,
    oldDescription: "1 specialist 50K printer used 10 hrs/wk.",
    newDescription: "Two prosumer 10K printers + 5 free skill clinics + open scheduling app.",
    impact: "40 learners trained → 8 new revenue-generating lines for the org."
  },
  {
    category: "Staff/Fellows",
    oldModel: 50,
    newModel: 50,
    oldDescription: "Maintains gear, limited outreach.",
    newDescription: "Teaches, streams, publishes templates; runs pop-ups that recruit partners.",
    impact: "Staff output visible to 1,500+; toolkit forked by 3 peer orgs."
  },
  {
    category: "Community & Docs",
    oldModel: 25,
    newModel: 25,
    oldDescription: "Ad-hoc, lives in one hard drive.",
    newDescription: "LMS, Discord Q&A, public KPI dashboard, digital signage.",
    impact: "Knowledge searchable forever; replicable in Akron & Detroit w/ zero redesign cost."
  }
];

const PRINTER_COMPARISON = {
  traditional: {
    cost: 10000,
    training: 0,
    operators: 1,
    hoursUse: 10,
    value: 2500
  },
  enhanced: {
    cost: 10000,
    training: 6000,
    operators: 40,
    hoursUse: 300,
    value: 15000
  }
};

export default function ROIComparison() {
  const { theme } = useTheme();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = ROI_DATA.find(item => item.category === label);
      return (
        <div className={`p-4 rounded-lg shadow-lg ${
          theme === 'dark' 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{label}</h3>
          <div className="space-y-2">
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <span className="font-medium">Old Model:</span> {data?.oldDescription}
            </p>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <span className="font-medium">AI24 Model:</span> {data?.newDescription}
            </p>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-green-400' : 'text-green-600'
            }`}>
              <span className="font-medium">Impact:</span> {data?.impact}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-12">
      {/* Budget Allocation Comparison */}
      <div className={`p-6 rounded-xl border ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>Budget Allocation & Impact</h3>
        
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ROI_DATA}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} 
              />
              <XAxis 
                dataKey="category" 
                stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} 
              />
              <YAxis 
                stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'}
                label={{ value: 'Budget %', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                name="Traditional Model" 
                dataKey="oldModel" 
                fill={theme === 'dark' ? '#60A5FA' : '#3B82F6'} 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                name="AI24 Model" 
                dataKey="newModel" 
                fill={theme === 'dark' ? '#34D399' : '#10B981'} 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Printer ROI Example */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          className={`p-6 rounded-xl border ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h4 className={`text-xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Traditional Approach</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Equipment Cost
              </span>
              <span className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>${PRINTER_COMPARISON.traditional.cost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Training Budget
              </span>
              <span className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>${PRINTER_COMPARISON.traditional.training.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Trained Operators
              </span>
              <span className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{PRINTER_COMPARISON.traditional.operators}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Monthly Usage (hours)
              </span>
              <span className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{PRINTER_COMPARISON.traditional.hoursUse}</span>
            </div>
            <div className="pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Annual Community Value
                </span>
                <span className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>${PRINTER_COMPARISON.traditional.value.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`p-6 rounded-xl border ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h4 className={`text-xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>AI24 People-First Model</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Equipment Cost
              </span>
              <span className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>${PRINTER_COMPARISON.enhanced.cost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Training Budget
              </span>
              <span className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>${PRINTER_COMPARISON.enhanced.training.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Trained Operators
              </span>
              <span className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{PRINTER_COMPARISON.enhanced.operators}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Monthly Usage (hours)
              </span>
              <span className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{PRINTER_COMPARISON.enhanced.hoursUse}</span>
            </div>
            <div className="pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Annual Community Value
                </span>
                <span className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>${PRINTER_COMPARISON.enhanced.value.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Insight */}
      <div className={`p-6 rounded-xl border ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <p className={`text-center text-lg ${
          theme === 'dark' ? 'text-green-400' : 'text-green-600'
        }`}>
          600% value uplift with only 60% more spend through people-first approach
        </p>
      </div>
    </div>
  );
} 