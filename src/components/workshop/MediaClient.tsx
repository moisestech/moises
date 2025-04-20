'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Image, Video, Music, Upload, Download, Settings, Globe, Layout, Code, Zap, Shield, FileImage, FileVideo, FileAudio } from 'lucide-react';
import Link from 'next/link';

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

const mediaTypes = [
  {
    title: "Images",
    icon: Image,
    description: "Managing your artwork and photography",
    bestPractices: [
      "Use appropriate file formats (JPEG for photos, PNG for graphics)",
      "Optimize file sizes without losing quality",
      "Maintain consistent dimensions",
      "Use descriptive filenames",
      "Include alt text for accessibility",
      "Consider responsive image loading"
    ],
    optimizationTips: [
      "Compress images before uploading",
      "Use appropriate resolution (72 DPI for web)",
      "Consider using WebP format for better compression",
      "Implement lazy loading for better performance",
      "Use image CDNs for faster delivery"
    ]
  },
  {
    title: "Videos",
    icon: Video,
    description: "Handling video content and time-based media",
    bestPractices: [
      "Compress videos for web delivery",
      "Use appropriate codecs (H.264, WebM)",
      "Consider streaming services",
      "Provide fallback images",
      "Include captions for accessibility",
      "Optimize for different devices"
    ],
    optimizationTips: [
      "Keep videos under 2 minutes for better engagement",
      "Use appropriate bitrates (2-5 Mbps for HD)",
      "Consider adaptive streaming",
      "Provide multiple quality options",
      "Use video thumbnails effectively"
    ]
  },
  {
    title: "Audio",
    icon: Music,
    description: "Managing sound files and music",
    bestPractices: [
      "Use appropriate formats (MP3, AAC)",
      "Optimize bitrates (128-192 kbps)",
      "Include metadata",
      "Consider streaming options",
      "Provide download alternatives",
      "Ensure proper licensing"
    ],
    optimizationTips: [
      "Compress audio files appropriately",
      "Use appropriate sample rates (44.1 kHz)",
      "Consider streaming services",
      "Provide multiple format options",
      "Include proper metadata"
    ]
  }
];

const platforms = [
  {
    name: "Wix",
    icon: Globe,
    description: "A user-friendly platform with built-in media optimization tools",
    mediaFeatures: [
      "Drag-and-drop media upload",
      "Automatic image optimization",
      "Gallery templates for artwork",
      "Video player integration",
      "Audio player options",
      "Media library organization"
    ],
    pros: [
      "Easy media management",
      "Built-in optimization tools",
      "Automatic mobile optimization",
      "Good for portfolios",
      "Built-in gallery templates"
    ],
    cons: [
      "Limited file size (25MB per file)",
      "Compression can reduce quality",
      "No batch processing",
      "Limited format support",
      "Storage limitations"
    ],
    artistTips: [
      "Use Wix's built-in image editor for quick adjustments",
      "Upload high-quality images (max 25MB)",
      "Use the Art Store app for selling artwork",
      "Enable lazy loading for better performance",
      "Use Wix's video player for better compatibility"
    ],
    bestFor: "Artists who want an easy-to-use platform with built-in media tools"
  },
  {
    name: "Squarespace",
    icon: Layout,
    description: "A premium platform with excellent media presentation features",
    mediaFeatures: [
      "High-quality image display",
      "Gallery blocks for portfolios",
      "Video background options",
      "Audio player integration",
      "Custom media layouts",
      "Image zoom functionality"
    ],
    pros: [
      "Excellent image quality",
      "Professional gallery layouts",
      "Built-in image protection",
      "Good for high-res artwork",
      "Customizable media layouts"
    ],
    cons: [
      "Limited storage (30GB on Business plan)",
      "No built-in image editor",
      "Can be slow with many images",
      "Higher price point",
      "Limited video hosting"
    ],
    artistTips: [
      "Use the Gallery Block for portfolios",
      "Enable image protection for artwork",
      "Use custom aspect ratios for consistency",
      "Optimize images before uploading",
      "Use external video hosting for better performance"
    ],
    bestFor: "Professional artists who need high-quality media presentation"
  },
  {
    name: "GitHub Pages",
    icon: Code,
    description: "A developer-friendly platform with full control over media assets",
    mediaFeatures: [
      "Unlimited storage (with Git LFS)",
      "Full control over optimization",
      "Custom media processing",
      "Version control for assets",
      "CDN integration possible",
      "Custom media players"
    ],
    pros: [
      "Complete control over media",
      "No file size limits",
      "Version control for assets",
      "Custom optimization tools",
      "Flexible hosting options"
    ],
    cons: [
      "Requires technical knowledge",
      "Manual optimization needed",
      "No built-in media tools",
      "Steeper learning curve",
      "Requires custom implementation"
    ],
    artistTips: [
      "Use Git LFS for large files",
      "Implement custom image optimization",
      "Use a CDN for better performance",
      "Set up automated media processing",
      "Consider using a static site generator"
    ],
    bestFor: "Tech-savvy artists who want full control over their media assets"
  }
];

export default function MediaClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Fundamentals</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Media Management
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Introduction */}
          <motion.section
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Media Management for Artists</h1>
            <p className="text-xl text-indigo-100">
              Learn how to effectively manage and optimize your media assets across different platforms
            </p>
          </motion.section>

          {/* Media Types */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Media Types & Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mediaTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <type.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Best Practices</h4>
                      <ul className="space-y-2">
                        {type.bestPractices.map((practice, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                            <span className="text-gray-600">{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Optimization Tips</h4>
                      <ul className="space-y-2">
                        {type.optimizationTips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                            <span className="text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Platform Comparison */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Platform-Specific Media Management</h2>
            <div className="grid grid-cols-1 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <platform.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{platform.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Features</h4>
                        <ul className="space-y-2">
                          {platform.mediaFeatures.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Pros</h4>
                        <ul className="space-y-2">
                          {platform.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                              <span className="text-gray-600">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Cons</h4>
                        <ul className="space-y-2">
                          {platform.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                              <span className="text-gray-600">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Artist Tips</h4>
                        <ul className="space-y-2">
                          {platform.artistTips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                              <span className="text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 