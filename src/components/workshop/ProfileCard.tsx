'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, Code, User, ChevronDown, ChevronUp } from 'lucide-react';
import { PlatformIcon } from './PlatformIcons';
import { ProfileBanner } from './ProfileBanner';
import { WebsitePreview } from './WebsitePreview';
import { useState } from 'react';
import Image from 'next/image';
import { GradientBanner } from './GradientBanner';
import { ProfileIcon } from './ProfileIcon';

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
}

const LevelIndicator = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
          i < level ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
      />
    ))}
  </div>
);

const WebsiteArchitecture = ({ architecture }: { architecture: ProfileCardProps['participant']['architecture'] }) => {
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
          <div className={`w-2 h-2 rounded-full ${hasChildren ? 'bg-blue-500' : 'bg-gray-300'}`} />
          <span className="ml-2 text-sm font-medium">{node.title}</span>
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
    <div className="p-4 bg-gray-50 rounded-lg">
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

export function ProfileCard({ participant }: ProfileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { gradient, from, to } = useParticipantColor(participant.name);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Gradient Banner */}
      <div className={`h-24 bg-gradient-to-r ${gradient}`} />

      <div className="p-6">
        <div className="flex flex-col items-center text-center -mt-16 mb-4">
          <div className="w-16 h-16 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center mb-3">
            <User className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{participant.name}</h3>
            <a 
              href={`https://${participant.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center justify-center gap-1"
            >
              <Globe className="w-4 h-4" />
              {participant.website}
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {participant.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Web Design Level</h4>
              <LevelIndicator level={participant.webDesignLevel} />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">AI Level</h4>
              <LevelIndicator level={participant.aiLevel} />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Goals</h4>
            <p className="text-sm text-gray-700">{Array.isArray(participant.goals) ? participant.goals.join(', ') : participant.goals}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Overview</h4>
            <p className="text-sm text-gray-700">{participant.overview}</p>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 sm:mt-4 w-full p-1.5 sm:p-2 flex items-center justify-between text-xs sm:text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          <span>View Website Architecture</span>
          {isExpanded ? (
            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
          ) : (
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
          )}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 sm:mt-4"
          >
            <WebsiteArchitecture architecture={participant.architecture} />
          </motion.div>
        )}
      </div>
    </div>
  );
} 