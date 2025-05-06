'use client';

import { useState, createElement } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Calendar, CheckCircle, Clock, Target, Users, Rocket } from 'lucide-react';

const ROADMAP_DATA = {
  "Phase 1: Foundation (Q3 2024)": [
    {
      title: "Team & Infrastructure Setup",
      status: "planned",
      date: "July 2024",
      milestones: [
        "Hire core team members",
        "Set up development environment",
        "Establish project management workflows"
      ]
    },
    {
      title: "Initial Workshop Development",
      status: "planned",
      date: "August 2024",
      milestones: [
        "Design curriculum for first 6 workshops",
        "Create workshop materials",
        "Set up evaluation frameworks"
      ]
    },
    {
      title: "Community Engagement",
      status: "planned",
      date: "September 2024",
      milestones: [
        "Launch community outreach program",
        "Establish partnerships with local organizations",
        "Create feedback channels"
      ]
    }
  ],
  "Phase 2: Implementation (Q4 2024)": [
    {
      title: "Workshop Rollout",
      status: "upcoming",
      date: "October 2024",
      milestones: [
        "Launch first series of workshops",
        "Implement feedback system",
        "Document best practices"
      ]
    },
    {
      title: "Technology Integration",
      status: "upcoming",
      date: "November 2024",
      milestones: [
        "Deploy digital signage system",
        "Integrate CRM system",
        "Launch community portal"
      ]
    },
    {
      title: "Impact Assessment",
      status: "upcoming",
      date: "December 2024",
      milestones: [
        "Conduct initial impact evaluation",
        "Gather community feedback",
        "Adjust programs based on learnings"
      ]
    }
  ],
  "Phase 3: Scaling (Q1-Q2 2025)": [
    {
      title: "Program Expansion",
      status: "future",
      date: "Q1 2025",
      milestones: [
        "Double workshop offerings",
        "Expand to new locations",
        "Launch advanced programs"
      ]
    },
    {
      title: "Sustainability Development",
      status: "future",
      date: "Q2 2025",
      milestones: [
        "Implement revenue streams",
        "Develop partnership model",
        "Create sustainability plan"
      ]
    }
  ]
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function KFProjectRoadmap() {
  const { theme } = useTheme();
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return theme === 'dark' ? 'text-green-400' : 'text-green-600';
      case 'in-progress':
        return theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
      case 'planned':
        return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
      default:
        return theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle;
      case 'in-progress':
        return Clock;
      case 'planned':
        return Target;
      default:
        return Rocket;
    }
  };

  return (
    <div className="space-y-8">
      {/* Phase Navigation */}
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(ROADMAP_DATA).map((phase) => (
          <motion.button
            key={phase}
            onClick={() => setSelectedPhase(phase)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedPhase === phase
                ? theme === 'dark'
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-600 text-white'
                : theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {phase}
          </motion.button>
        ))}
      </div>

      {/* Timeline View */}
      <div className="relative">
        <div className={`absolute left-8 top-0 bottom-0 w-px ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
        }`} />
        
        {Object.entries(ROADMAP_DATA).map(([phase, milestones], phaseIndex) => (
          <motion.div
            key={phase}
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className={`mb-12 ${selectedPhase && selectedPhase !== phase ? 'opacity-50' : ''}`}
          >
            <h3 className={`text-xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{phase}</h3>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`absolute left-6 w-4 h-4 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  } transform -translate-x-1/2 mt-2`}>
                    <div className={`w-2 h-2 rounded-full ${
                      theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
                  </div>
                  
                  <div className={`p-6 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border border-gray-700'
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className={`text-lg font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{milestone.title}</h4>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>{milestone.date}</p>
                      </div>
                      {createElement(getStatusIcon(milestone.status), {
                        className: `w-5 h-5 ${getStatusColor(milestone.status)}`
                      })}
                    </div>
                    
                    <ul className="space-y-2">
                      {milestone.milestones.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-2 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            theme === 'dark' ? 'bg-gray-500' : 'bg-gray-400'
                          }`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { label: 'Total Milestones', value: Object.values(ROADMAP_DATA).flat().length },
          { label: 'Completed', value: Object.values(ROADMAP_DATA).flat().filter(m => m.status === 'completed').length },
          { label: 'In Progress', value: Object.values(ROADMAP_DATA).flat().filter(m => m.status === 'in-progress').length },
          { label: 'Upcoming', value: Object.values(ROADMAP_DATA).flat().filter(m => m.status === 'planned' || m.status === 'future').length }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>{stat.label}</p>
            <p className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 