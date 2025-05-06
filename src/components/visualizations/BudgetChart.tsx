'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const BUDGET_DATA = [
  { name: 'Technology Development', value: 45000, description: 'Core platform development, AI integration, and testing' },
  { name: 'Community Programs', value: 30000, description: 'Workshop materials, venue costs, and participant support' },
  { name: 'Operations', value: 15000, description: 'Project management and administrative overhead' },
  { name: 'Marketing & Outreach', value: 10000, description: 'Community outreach and promotional materials' },
];

const COLORS = ['#60A5FA', '#34D399', '#A78BFA', '#F472B6'];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function BudgetChart() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-4 rounded-lg shadow-lg ${
          theme === 'dark' 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <p className={`font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{payload[0].name}</p>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            ${payload[0].value.toLocaleString()}
          </p>
          <p className={`text-xs mt-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {BUDGET_DATA.find(item => item.name === payload[0].name)?.description}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      className="w-full"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={BUDGET_DATA}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {BUDGET_DATA.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                opacity={activeIndex === null || activeIndex === index ? 1 : 0.6}
                stroke={theme === 'dark' ? '#1F2937' : '#F3F4F6'}
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value: string) => (
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {BUDGET_DATA.map((item, index) => (
          <motion.div
            key={item.name}
            className={`p-4 rounded-lg ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
            }`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <h3 className={`font-medium ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{item.name}</h3>
            </div>
            <p className={`mt-2 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>{item.description}</p>
            <p className={`mt-1 font-bold ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>${item.value.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 