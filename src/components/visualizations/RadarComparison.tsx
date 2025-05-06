'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface RadarData {
  category: string;
  current: number;
  target: number;
}

const data: RadarData[] = [
  { category: 'Digital Presence', current: 30, target: 90 },
  { category: 'Community Engagement', current: 40, target: 85 },
  { category: 'Impact Tracking', current: 20, target: 80 },
  { category: 'Resource Management', current: 35, target: 75 },
  { category: 'Automation', current: 15, target: 70 }
];

const RadarPoint = ({ 
  value, 
  index, 
  total, 
  radius, 
  color 
}: { 
  value: number; 
  index: number; 
  total: number; 
  radius: number;
  color: string;
}) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const scale = value / 100;
  const x = Math.cos(angle) * radius * scale;
  const y = Math.sin(angle) * radius * scale;

  return (
    <motion.circle
      initial={{ r: 0 }}
      animate={{ r: 4 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      cx={x}
      cy={y}
      fill={color}
    />
  );
};

const RadarLine = ({ 
  value1, 
  value2, 
  index1, 
  index2, 
  total, 
  radius,
  color 
}: { 
  value1: number; 
  value2: number; 
  index1: number; 
  index2: number; 
  total: number; 
  radius: number;
  color: string;
}) => {
  const angle1 = (index1 / total) * 2 * Math.PI - Math.PI / 2;
  const angle2 = (index2 / total) * 2 * Math.PI - Math.PI / 2;
  const scale1 = value1 / 100;
  const scale2 = value2 / 100;
  const x1 = Math.cos(angle1) * radius * scale1;
  const y1 = Math.sin(angle1) * radius * scale1;
  const x2 = Math.cos(angle2) * radius * scale2;
  const y2 = Math.sin(angle2) * radius * scale2;

  return (
    <motion.line
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: index1 * 0.1 }}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="2"
      strokeOpacity="0.5"
    />
  );
};

export default function RadarComparison() {
  const { theme } = useTheme();
  const radius = 100;
  const center = radius + 20;
  const size = center * 2;

  return (
    <div className={`p-6 rounded-lg ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h3 className={`text-xl font-bold mb-4 text-center ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>Gap Analysis</h3>
      
      <div className="relative">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="mx-auto"
        >
          <g transform={`translate(${center}, ${center})`}>
            {/* Background circles */}
            {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
              <motion.circle
                key={i}
                initial={{ r: 0 }}
                animate={{ r: radius * scale }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                cx={0}
                cy={0}
                fill="none"
                stroke={theme === 'dark' ? '#374151' : '#E5E7EB'}
                strokeWidth="1"
              />
            ))}

            {/* Category labels */}
            {data.map((item, i) => {
              const angle = (i / data.length) * 2 * Math.PI - Math.PI / 2;
              const x = Math.cos(angle) * (radius + 30);
              const y = Math.sin(angle) * (radius + 30);

              return (
                <motion.text
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-xs font-medium ${
                    theme === 'dark' ? 'fill-gray-400' : 'fill-gray-600'
                  }`}
                >
                  {item.category}
                </motion.text>
              );
            })}

            {/* Current state lines */}
            {data.map((item, i) => (
              <React.Fragment key={`current-${i}`}>
                <RadarPoint
                  value={item.current}
                  index={i}
                  total={data.length}
                  radius={radius}
                  color={theme === 'dark' ? '#60A5FA' : '#2563EB'}
                />
                <RadarLine
                  value1={item.current}
                  value2={data[(i + 1) % data.length].current}
                  index1={i}
                  index2={(i + 1) % data.length}
                  total={data.length}
                  radius={radius}
                  color={theme === 'dark' ? '#60A5FA' : '#2563EB'}
                />
              </React.Fragment>
            ))}

            {/* Target state lines */}
            {data.map((item, i) => (
              <React.Fragment key={`target-${i}`}>
                <RadarPoint
                  value={item.target}
                  index={i}
                  total={data.length}
                  radius={radius}
                  color={theme === 'dark' ? '#C084FC' : '#7C3AED'}
                />
                <RadarLine
                  value1={item.target}
                  value2={data[(i + 1) % data.length].target}
                  index1={i}
                  index2={(i + 1) % data.length}
                  total={data.length}
                  radius={radius}
                  color={theme === 'dark' ? '#C084FC' : '#7C3AED'}
                />
              </React.Fragment>
            ))}
          </g>
        </svg>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
            }`} />
            <span className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Current State</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
            }`} />
            <span className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Target State</span>
          </div>
        </div>
      </div>
    </div>
  );
} 