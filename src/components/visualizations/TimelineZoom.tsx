'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Calendar, CheckCircle, Clock, Flag } from 'lucide-react';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  icon: React.ElementType;
  phase: 1 | 2 | 3;
}

const timelineData: TimelineEvent[] = [
  {
    id: 'setup',
    title: 'Initial Setup & Team Formation',
    description: 'Establish core team, set up development environment',
    date: 'Q3 2025',
    status: 'upcoming',
    icon: Flag,
    phase: 1
  },
  {
    id: 'development',
    title: 'Platform Development',
    description: 'Build core CMS and signage infrastructure',
    date: 'Q3-Q4 2025',
    status: 'upcoming',
    icon: Clock,
    phase: 1
  },
  {
    id: 'pilot',
    title: 'Pilot Program',
    description: 'Launch with 3 partner organizations',
    date: 'Q4 2025',
    status: 'upcoming',
    icon: Flag,
    phase: 1
  },
  {
    id: 'workshops',
    title: 'Workshop Series Launch',
    description: 'Begin community training and engagement',
    date: 'Q4 2025',
    status: 'upcoming',
    icon: Calendar,
    phase: 2
  },
  {
    id: 'expansion',
    title: 'Partner Expansion',
    description: 'Scale to 8 partner organizations',
    date: 'Q1 2026',
    status: 'upcoming',
    icon: Clock,
    phase: 2
  },
  {
    id: 'features',
    title: 'Feature Enhancement',
    description: 'Add advanced analytics and automation',
    date: 'Q1 2026',
    status: 'upcoming',
    icon: Flag,
    phase: 2
  },
  {
    id: 'sustainability',
    title: 'Sustainability Model',
    description: 'Launch subscription and licensing program',
    date: 'Q2 2026',
    status: 'upcoming',
    icon: CheckCircle,
    phase: 3
  },
  {
    id: 'community',
    title: 'Community Handoff',
    description: 'Transfer ownership to community leaders',
    date: 'Q2 2026',
    status: 'upcoming',
    icon: Calendar,
    phase: 3
  }
];

export default function TimelineZoom() {
  const { theme } = useTheme();
  const [activePhase, setActivePhase] = useState<1 | 2 | 3>(1);
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const getStatusColor = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'completed':
        return theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600';
      case 'in-progress':
        return theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600';
      case 'upcoming':
        return theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600';
    }
  };

  const filteredEvents = timelineData.filter(event => event.phase === activePhase);

  return (
    <div className="space-y-8">
      {/* Phase Selection */}
      <div className="flex justify-center gap-4 mb-12">
        {[1, 2, 3].map((phase) => (
          <button
            key={phase}
            onClick={() => setActivePhase(phase as 1 | 2 | 3)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activePhase === phase
                ? theme === 'dark'
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-600 text-white'
                : theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Phase {phase}
          </button>
        ))}
      </div>

      {/* Timeline Events */}
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        
        <div className="space-y-8">
          {filteredEvents.map((event, index) => {
            const Icon = event.icon;
            const isActive = activeEvent === event.id;
            const statusColor = getStatusColor(event.status);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveEvent(event.id)}
                onHoverEnd={() => setActiveEvent(null)}
                className={`relative pl-16 transition-all duration-300 ${
                  isActive ? 'scale-105' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`absolute left-7 top-1.5 w-3 h-3 rounded-full border-2 ${
                    event.status === 'completed'
                      ? theme === 'dark' ? 'bg-green-500 border-green-400' : 'bg-green-600 border-green-500'
                      : event.status === 'in-progress'
                      ? theme === 'dark' ? 'bg-blue-500 border-blue-400' : 'bg-blue-600 border-blue-500'
                      : theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'
                  }`}
                  style={{
                    transform: 'translateX(-50%)'
                  }}
                />

                <div className={`p-6 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                } ${
                  isActive
                    ? theme === 'dark'
                      ? 'shadow-lg shadow-blue-500/10'
                      : 'shadow-lg shadow-blue-500/20'
                    : ''
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${statusColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{event.title}</h3>
                        <span className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>{event.date}</span>
                      </div>
                      <p className={`text-sm mt-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{event.description}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 