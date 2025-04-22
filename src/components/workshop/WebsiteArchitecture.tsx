'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  FileText, 
  Mail, 
  Image, 
  Plus, 
  ShoppingCart, 
  Briefcase, 
  BookOpen,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Video,
  Music,
  Users,
  Calendar,
  Info,
  Layout,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface TreeNode {
  id: string
  title: string
  description?: string
  children?: TreeNode[]
}

const websiteStructure: TreeNode = {
  id: 'home',
  title: 'Home',
  children: [
    {
      id: 'about',
      title: 'About & CV',
      children: [
        {
          id: 'bio',
          title: 'Biography',
          description: 'A brief description of the person'
        },
        {
          id: 'cv',
          title: 'Curriculum Vitae',
          description: 'A detailed document outlining the person\'s education and work experience'
        }
      ]
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      children: [
        {
          id: 'gallery',
          title: 'Gallery',
          description: 'A collection of images related to the person'
        },
        {
          id: 'projects',
          title: 'Projects',
          description: 'Completed projects related to the person'
        }
      ]
    },
    {
      id: 'events',
      title: 'Events',
      children: [
        {
          id: 'upcoming',
          title: 'Upcoming',
          description: 'Events that are scheduled to happen in the future'
        },
        {
          id: 'past',
          title: 'Past Events',
          description: 'Events that have already happened'
        }
      ]
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Information for contacting the person'
    }
  ]
};

function TreeNode({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 p-3 rounded-lg bg-white shadow-sm border border-gray-200 relative z-10">
        <span className="text-sm font-medium text-gray-700">{node.title}</span>
      </div>
      {hasChildren && (
        <div className="flex gap-8 mt-2">
          {node.children?.map((child, index) => (
            <div key={child.id} className="relative">
              <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-gray-200" />
              <TreeNode node={child} level={level + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WebsiteArchitecture() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Website Architecture
          </h1>
          <p className="text-gray-600">
            Visual representation of your website's page structure and relationships
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 overflow-x-auto"
        >
          <div className="min-w-[800px]">
            <TreeNode node={websiteStructure} />
          </div>
        </motion.div>

        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Key Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-2">Core Pages</h3>
              <p className="text-sm text-gray-600">
                Essential pages that form the foundation of your website, including
                Home, About, and Contact.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-2">Content Sections</h3>
              <p className="text-sm text-gray-600">
                Organized sections for your portfolio, media, and events, making it
                easy for visitors to find what they're looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 