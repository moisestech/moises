'use client';

import { motion } from 'framer-motion';
import { ClipboardList, FileText, Image, Link, Calendar, Save } from 'lucide-react';
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

const contentTypes = [
  {
    title: "Portfolio",
    icon: Image,
    color: "from-blue-500 to-blue-600",
    fields: [
      "Project Title",
      "Year",
      "Medium",
      "Description",
      "Images/Videos"
    ]
  },
  {
    title: "About",
    icon: FileText,
    color: "from-purple-500 to-purple-600",
    fields: [
      "Artist Statement",
      "Bio",
      "CV",
      "Contact Information",
      "Social Links"
    ]
  },
  {
    title: "Events",
    icon: Calendar,
    color: "from-pink-500 to-pink-600",
    fields: [
      "Exhibition Title",
      "Date",
      "Location",
      "Description",
      "Press/Reviews"
    ]
  },
  {
    title: "Resources",
    icon: Link,
    color: "from-indigo-500 to-indigo-600",
    fields: [
      "Press Kit",
      "Artist Statement",
      "CV",
      "Teaching Materials",
      "Publications"
    ]
  }
];

export default function WorksheetPage() {
  const [savedContent, setSavedContent] = useState<Record<string, string>>({});

  const handleSave = (type: string, field: string, value: string) => {
    setSavedContent(prev => ({
      ...prev,
      [`${type}-${field}`]: value
    }));
  };

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
              Content Worksheet
            </h1>
            <p className="text-xl text-gray-600">
              Organize and plan your website content
            </p>
          </motion.section>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Content Planning
              </h2>
              <p className="text-gray-600 mb-6">
                Use this worksheet to organize your content and plan your website structure. 
                Save your work as you go, and you can return to it later.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {contentTypes.map((type) => (
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
                    <div className="space-y-4">
                      {type.fields.map((field) => (
                        <div key={field} className="space-y-2">
                          <label className="text-white/90">{field}</label>
                          <textarea
                            className="w-full p-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-white/50 focus:outline-none"
                            placeholder={`Enter your ${field.toLowerCase()}...`}
                            value={savedContent[`${type.title}-${field}`] || ''}
                            onChange={(e) => handleSave(type.title, field, e.target.value)}
                            rows={3}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Save Section */}
            <motion.div variants={fadeIn} className="bg-indigo-50 rounded-xl p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Save Your Progress
                  </h2>
                  <p className="text-gray-600">
                    Your content will be saved automatically as you type
                  </p>
                </div>
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  onClick={() => {
                    const blob = new Blob([JSON.stringify(savedContent, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'website-content.json';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Save className="w-5 h-5" />
                  <span>Download JSON</span>
                </button>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Next Steps
              </h2>
              <p className="text-gray-600 mb-4">
                After completing your worksheet:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Review your content for completeness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Organize your media files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Prepare your images and videos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Join the group check-in to share your progress</span>
                </li>
              </ul>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 