'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Code, User, ChevronDown, ChevronUp, Stars, FileText, Layout } from 'lucide-react';
import { PlatformIcon } from './PlatformIcons';
import { ProfileBanner } from './ProfileBanner';
import { WebsitePreview } from './WebsitePreview';
import { useState } from 'react';
import Image from 'next/image';
import { GradientBanner } from './GradientBanner';
import { ProfileIcon } from './ProfileIcon';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface ProfileCardProps {
  participant: {
    name: string;
    website: string;
    platforms: string[];
    webDesignLevel: number;
    aiLevel: number;
    goals: string | string[];
    overview: string;
    architecture: {
      home: {
        title: string;
        children?: {
          [key: string]: {
            title: string;
            description?: string;
            children?: {
              [key: string]: {
                title: string;
              };
            };
          };
        };
      };
    };
    mobilePreview?: string;
    desktopPreview?: string;
  };
  activeSection: 'goals' | 'overview' | 'architecture';
}

const LevelIndicator = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
          i < level ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      />
    ))}
  </div>
);

const WebsiteArchitecture = ({ architecture }: { architecture: ProfileCardProps['participant']['architecture'] }) => {
  const { theme } = useTheme();

  interface TreeNodeProps {
    node: {
      title: string;
      children?: {
        [key: string]: {
          title: string;
          description?: string;
          children?: {
            [key: string]: {
              title: string;
            };
          };
        };
      };
    };
    level?: number;
  }

  const TreeNode = ({ node, level = 0 }: TreeNodeProps) => {
    const hasChildren = node.children && Object.keys(node.children).length > 0;
    const indent = level * 20;

    return (
      <div className="space-y-2">
        <div className="flex items-center" style={{ marginLeft: `${indent}px` }}>
          <div className={cn(
            "w-2 h-2 rounded-full",
            hasChildren ? 'bg-blue-500' : theme === 'dark' ? 'bg-gray-500' : 'bg-gray-300'
          )} />
          <span className={cn(
            "ml-2 text-sm font-medium",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          )}>{node.title}</span>
        </div>
        {hasChildren && node.children && (
          <div className="space-y-2">
            {Object.entries(node.children).map(([key, child]) => (
              <TreeNode key={key} node={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn(
      "p-4 rounded-lg",
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    )}>
      <TreeNode node={architecture.home} />
    </div>
  );
};

const useParticipantColor = (name: string) => {
  const colorPairs = [
    { from: 'from-blue-500', to: 'to-blue-600', via: 'via-blue-400' },
    { from: 'from-purple-500', to: 'to-purple-600', via: 'via-purple-400' },
    { from: 'from-pink-500', to: 'to-pink-600', via: 'via-pink-400' },
    { from: 'from-emerald-500', to: 'to-emerald-600', via: 'via-emerald-400' },
    { from: 'from-teal-500', to: 'to-teal-600', via: 'via-teal-400' },
    { from: 'from-cyan-500', to: 'to-cyan-600', via: 'via-cyan-400' },
    { from: 'from-amber-500', to: 'to-amber-600', via: 'via-amber-400' },
    { from: 'from-orange-500', to: 'to-orange-600', via: 'via-orange-400' },
    { from: 'from-violet-500', to: 'to-violet-600', via: 'via-violet-400' },
    { from: 'from-indigo-500', to: 'to-indigo-600', via: 'via-indigo-400' },
    { from: 'from-rose-500', to: 'to-rose-600', via: 'via-rose-400' },
    { from: 'from-lime-500', to: 'to-lime-600', via: 'via-lime-400' },
  ];

  const getColorIndex = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % colorPairs.length;
  };

  const colors = colorPairs[getColorIndex(name)];
  return {
    gradient: `${colors.from} ${colors.via} ${colors.to}`,
    from: colors.from,
    to: colors.to,
  };
};

export function ProfileCard({ participant, activeSection }: ProfileCardProps) {
  const { gradient, from, to } = useParticipantColor(participant.name);
  const { theme } = useTheme();

  return (
    <div className={cn(
      "rounded-xl shadow-sm border overflow-hidden",
      theme === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    )}>
      {/* Gradient Banner */}
      <div className={`h-24 bg-gradient-to-r ${gradient}`} />

      <div className="p-6">
        <div className="flex flex-col items-center text-center -mt-16 mb-4">
          <div className={cn(
            "w-16 h-16 rounded-full border-4 shadow-md flex items-center justify-center mb-3",
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-white'
          )}>
            <User className={cn(
              "w-8 h-8",
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            )} />
          </div>
          <div>
            <h3 className={cn(
              "text-lg font-medium",
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}>{participant.name}</h3>
            <a 
              href={`https://${participant.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "text-sm flex items-center justify-center gap-1",
                theme === 'dark' 
                  ? 'text-indigo-400 hover:text-indigo-300' 
                  : 'text-indigo-600 hover:text-indigo-700'
              )}
            >
              <Globe className="w-4 h-4" />
              {participant.website}
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className={cn(
              "text-sm font-medium mb-2",
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            )}>Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {participant.platforms.map((platform) => (
                <span
                  key={platform}
                  className={cn(
                    "px-2 py-1 rounded-full text-xs",
                    theme === 'dark'
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                  )}
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className={cn(
                "text-sm font-medium mb-2",
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              )}>Web Design Level</h4>
              <LevelIndicator level={participant.webDesignLevel} />
            </div>
            <div>
              <h4 className={cn(
                "text-sm font-medium mb-2",
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              )}>AI Level</h4>
              <LevelIndicator level={participant.aiLevel} />
            </div>
          </div>

          {/* Section Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="min-h-[100px]"
            >
              {activeSection === 'goals' && (
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <h4 className={cn(
                    "text-sm font-medium mb-2",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  )}>Goals</h4>
                  <p className={cn(
                    "text-sm",
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>{Array.isArray(participant.goals) ? participant.goals.join(', ') : participant.goals}</p>
                </div>
              )}
              
              {activeSection === 'overview' && (
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <h4 className={cn(
                    "text-sm font-medium mb-2",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  )}>Overview</h4>
                  <p className={cn(
                    "text-sm",
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>{participant.overview}</p>
                </div>
              )}
              
              {activeSection === 'architecture' && (
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <h4 className={cn(
                    "text-sm font-medium mb-2",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  )}>Website Architecture</h4>
                  <WebsiteArchitecture architecture={participant.architecture} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 
