'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface OrgNode {
  id: string;
  title: string;
  role: string;
  children?: OrgNode[];
}

const orgData: OrgNode = {
  id: 'ceo',
  title: 'Project Lead',
  role: 'Executive Director',
  children: [
    {
      id: 'tech',
      title: 'Technical Team',
      role: 'Development Lead',
      children: [
        {
          id: 'frontend',
          title: 'Frontend Developer',
          role: 'UI/UX Specialist'
        },
        {
          id: 'backend',
          title: 'Backend Developer',
          role: 'Systems Architect'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community Team',
      role: 'Engagement Manager',
      children: [
        {
          id: 'outreach',
          title: 'Outreach Coordinator',
          role: 'Community Relations'
        },
        {
          id: 'content',
          title: 'Content Creator',
          role: 'Digital Media'
        }
      ]
    }
  ]
};

const NodeComponent = ({ node, level = 0 }: { node: OrgNode; level?: number }) => {
  const { theme } = useTheme();
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: level * 0.2 
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className={`p-4 rounded-lg shadow-lg mb-4 w-48 text-center ${
          theme === 'dark' 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}
      >
        <h3 className={`font-bold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{node.title}</h3>
        <p className={`text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>{node.role}</p>
      </motion.div>
      
      {node.children && node.children.length > 0 && (
        <>
          <div className={`w-px h-8 ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          }`} />
          <div className="flex gap-8">
            {node.children.map((child, index) => (
              <div key={child.id} className="flex flex-col items-center">
                {index > 0 && (
                  <div className={`w-8 h-px ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                  }`} />
                )}
                <NodeComponent node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function OrgChart() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[800px] flex justify-center">
        <NodeComponent node={orgData} />
      </div>
    </div>
  );
} 