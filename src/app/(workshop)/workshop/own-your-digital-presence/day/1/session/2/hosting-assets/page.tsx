'use client';

import { motion } from 'framer-motion';
import { Image, Video, FileText, Cloud, Download, Upload, Database, HardDrive } from 'lucide-react';
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

const hostingOptions = [
  {
    title: "Cloud Storage",
    icon: Cloud,
    color: "from-blue-500 to-blue-600",
    description: "Use cloud services like Google Drive, Dropbox, or specialized art platforms",
    pros: [
      "Easy sharing and access",
      "Automatic backups",
      "Scalable storage",
      "Cross-platform compatibility"
    ]
  },
  {
    title: "CDN Services",
    icon: Database,
    color: "from-purple-500 to-purple-600",
    description: "Content Delivery Networks for fast, global asset delivery",
    pros: [
      "Fast loading times",
      "Global distribution",
      "Automatic optimization",
      "Reliable uptime"
    ]
  },
  {
    title: "Local Storage",
    icon: HardDrive,
    color: "from-pink-500 to-pink-600",
    description: "Store files directly on your website's server",
    pros: [
      "Full control",
      "No third-party dependencies",
      "Cost-effective for small sites",
      "Direct integration"
    ]
  }
];

const assetTypes = [
  {
    title: "Images",
    icon: Image,
    color: "from-blue-500 to-blue-600",
    tips: [
      "Use WebP format for better compression",
      "Optimize for different screen sizes",
      "Add descriptive alt text",
      "Consider lazy loading"
    ]
  },
  {
    title: "Videos",
    icon: Video,
    color: "from-purple-500 to-purple-600",
    tips: [
      "Use streaming services for large files",
      "Provide multiple quality options",
      "Include captions and transcripts",
      "Optimize for mobile viewing"
    ]
  },
  {
    title: "Documents",
    icon: FileText,
    color: "from-pink-500 to-pink-600",
    tips: [
      "Use PDF for universal compatibility",
      "Keep file sizes reasonable",
      "Include preview images",
      "Provide download options"
    ]
  }
];

export default function HostingAssetsPage() {
  const [activeTab, setActiveTab] = useState('hosting');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Header */}
          <motion.section variants={fadeIn} className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hosting & Asset Management
            </h1>
            <p className="text-xl text-gray-600">
              Learn how to effectively host and manage your website's media files
            </p>
          </motion.section>

          {/* Tabs */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('hosting')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'hosting'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Hosting Options
            </button>
            <button
              onClick={() => setActiveTab('assets')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'assets'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Asset Types
            </button>
          </motion.div>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            {activeTab === 'hosting' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {hostingOptions.map((option) => (
                  <motion.div
                    key={option.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${option.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <option.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{option.title}</h3>
                    </div>
                    <p className="text-white/90 mb-4">{option.description}</p>
                    <div className="space-y-2">
                      {option.pros.map((pro) => (
                        <div
                          key={pro}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {assetTypes.map((type) => (
                  <motion.div
                    key={type.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${type.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <type.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{type.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {type.tips.map((tip) => (
                        <div
                          key={tip}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Best Practices Section */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Best Practices
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <Upload className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Upload Guidelines</h3>
                      <p className="text-sm text-gray-600">
                        Optimize files before uploading, use descriptive names, and organize in folders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <Download className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Download Management</h3>
                      <p className="text-sm text-gray-600">
                        Provide clear download options, track usage, and update regularly
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <Cloud className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Backup Strategy</h3>
                      <p className="text-sm text-gray-600">
                        Regular backups, version control, and disaster recovery plans
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <Database className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Storage Management</h3>
                      <p className="text-sm text-gray-600">
                        Monitor usage, archive old files, and maintain organization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 