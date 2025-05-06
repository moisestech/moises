'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

const IMPACT_DATA = {
  metrics: [
    {
      title: "Community Members",
      value: 500,
      increase: "+45%",
      icon: Users,
      description: "Active participants in our programs"
    },
    {
      title: "Workshop Completion",
      value: "92%",
      increase: "+12%",
      icon: Target,
      description: "Average workshop completion rate"
    },
    {
      title: "Skills Growth",
      value: "85%",
      increase: "+25%",
      icon: TrendingUp,
      description: "Reported improvement in digital skills"
    },
    {
      title: "Project Success",
      value: "88%",
      increase: "+15%",
      icon: Award,
      description: "Projects successfully implemented"
    }
  ],
  monthlyGrowth: [
    { month: 'Jan', participants: 100, projects: 5, satisfaction: 85 },
    { month: 'Feb', participants: 150, projects: 7, satisfaction: 87 },
    { month: 'Mar', participants: 200, projects: 10, satisfaction: 88 },
    { month: 'Apr', participants: 280, projects: 12, satisfaction: 90 },
    { month: 'May', participants: 350, projects: 15, satisfaction: 92 },
    { month: 'Jun', participants: 500, projects: 20, satisfaction: 95 }
  ]
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ImpactMetrics() {
  const { theme } = useTheme();
  const [activeMetric, setActiveMetric] = useState('participants');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-4 rounded-lg shadow-lg ${
          theme === 'dark' 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <p className={`font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{label}</p>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {payload[0].name}: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {IMPACT_DATA.metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              className={`p-6 rounded-xl border ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <h3 className={`mt-4 font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{metric.title}</h3>
                  <p className={`text-2xl font-bold mt-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{metric.value}</p>
                  <span className={`inline-block mt-1 text-sm ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}>{metric.increase}</span>
                  <p className={`mt-2 text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>{metric.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Growth Chart */}
      <div className={`p-6 rounded-xl border ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Growth Metrics</h3>
          <div className="flex gap-4">
            {[
              { key: 'participants', label: 'Participants' },
              { key: 'projects', label: 'Projects' },
              { key: 'satisfaction', label: 'Satisfaction %' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveMetric(item.key)}
                className={`px-3 py-1 rounded-lg text-sm ${
                  activeMetric === item.key
                    ? theme === 'dark'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-600 text-white'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={IMPACT_DATA.monthlyGrowth}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} 
              />
              <XAxis 
                dataKey="month" 
                stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} 
              />
              <YAxis 
                stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey={activeMetric}
                fill={theme === 'dark' ? '#3B82F6' : '#2563EB'}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
} 