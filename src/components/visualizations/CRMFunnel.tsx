'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronRight, Users, MessageSquare, Calendar, CheckCircle } from 'lucide-react';

interface FunnelStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  metrics: {
    count: number;
    label: string;
  };
}

const funnelData: FunnelStep[] = [
  {
    id: 'outreach',
    title: 'Initial Outreach',
    description: 'Identifying and reaching out to potential nonprofit partners',
    icon: Users,
    metrics: {
      count: 100,
      label: 'Organizations contacted'
    }
  },
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'Understanding needs and discussing potential solutions',
    icon: MessageSquare,
    metrics: {
      count: 50,
      label: 'Consultations scheduled'
    }
  },
  {
    id: 'workshop',
    title: 'Workshop Planning',
    description: 'Scheduling and preparing customized workshops',
    icon: Calendar,
    metrics: {
      count: 25,
      label: 'Workshops planned'
    }
  },
  {
    id: 'implementation',
    title: 'Implementation',
    description: 'Executing workshops and implementing solutions',
    icon: CheckCircle,
    metrics: {
      count: 15,
      label: 'Active implementations'
    }
  }
];

export default function CRMFunnel() {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {funnelData.map((step, index) => {
        const Icon = step.icon;
        const width = 100 - (index * 15); // Decreasing width for funnel effect
        
        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setActiveStep(step.id)}
            onHoverEnd={() => setActiveStep(null)}
            className={`relative mx-auto transition-all duration-300 cursor-pointer ${
              activeStep === step.id ? 'scale-105' : ''
            }`}
            style={{ width: `${width}%` }}
          >
            <div className={`p-6 rounded-lg border ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            } ${
              activeStep === step.id
                ? theme === 'dark'
                  ? 'shadow-lg shadow-blue-500/10'
                  : 'shadow-lg shadow-blue-500/20'
                : ''
            }`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{step.title}</h3>
                    <div className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {step.metrics.count}
                    </div>
                  </div>
                  <p className={`text-sm mt-1 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{step.description}</p>
                  <div className={`text-xs mt-2 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {step.metrics.label}
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 ${
                  theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                }`} />
              </div>
            </div>
            {index < funnelData.length - 1 && (
              <div className={`h-4 w-px mx-auto ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`} />
            )}
          </motion.div>
        );
      })}
    </div>
  );
} 