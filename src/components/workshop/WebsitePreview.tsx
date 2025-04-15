'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface WebsitePreviewProps {
  mobileImage: string;
  desktopImage: string;
  alt: string;
}

export function WebsitePreview({ mobileImage, desktopImage, alt }: WebsitePreviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-medium text-gray-900">Website Preview</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 space-y-4"
        >
          {/* Desktop Preview */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={desktopImage}
              alt={`${alt} - Desktop View`}
              fill
              className="object-cover"
            />
          </div>

          {/* Mobile Preview */}
          <div className="relative w-48 mx-auto aspect-[9/16] rounded-2xl overflow-hidden border-8 border-gray-900">
            <Image
              src={mobileImage}
              alt={`${alt} - Mobile View`}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
} 