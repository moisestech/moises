'use client';

import { motion } from 'framer-motion';
import { 
  Upload, 
  CheckCircle, 
  FileText, 
  Image, 
  Link2,
  Calendar,
  AlertCircle
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

const requirements = [
  {
    title: "Website Structure",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    items: [
      "Homepage with clear navigation",
      "About page with artist statement",
      "Portfolio/Work section",
      "Contact information"
    ]
  },
  {
    title: "Content Requirements",
    icon: Image,
    color: "from-purple-500 to-purple-600",
    items: [
      "High-quality images of your work",
      "Updated artist biography",
      "Current CV or resume",
      "Contact form or email"
    ]
  },
  {
    title: "Technical Requirements",
    icon: Link2,
    color: "from-green-500 to-green-600",
    items: [
      "Mobile-responsive design",
      "Working navigation",
      "Social media links",
      "Optimized images"
    ]
  }
];

export default function FinalAssignmentPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmissionComplete(true);
    setSelectedFiles([]);
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
              Final Assignment
            </h1>
            <p className="text-xl text-gray-600">
              Submit your completed website for review and feedback
            </p>
          </motion.section>

          {/* Requirements */}
          <motion.section variants={fadeIn} className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Assignment Requirements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {requirements.map((requirement) => (
                <motion.div
                  key={requirement.title}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-r ${requirement.color} rounded-xl p-6 text-white`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/20">
                      <requirement.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{requirement.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {requirement.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-4 h-4" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Submission Form */}
          <motion.section variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Submit Your Work
            </h2>
            
            {submissionComplete ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Submission Complete!
                </h3>
                <p className="text-gray-600">
                  Your work has been submitted successfully. We'll review it and provide feedback soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Website Files
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-12 h-12 text-gray-400 mb-3" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          ZIP, HTML, CSS, JS files (MAX. 10MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  
                  {selectedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium text-gray-700">
                        Selected Files:
                      </h4>
                      <ul className="space-y-1">
                        {selectedFiles.map((file, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-yellow-500" />
                  <p className="text-sm text-yellow-700">
                    Please ensure all files are properly organized and include a README with setup instructions.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || selectedFiles.length === 0}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    isSubmitting || selectedFiles.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Assignment'}
                </button>
              </form>
            )}
          </motion.section>

          {/* Timeline */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Submission Timeline
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Submission Deadline</h3>
                  <p className="text-sm text-gray-600">
                    Friday, April 25, 2025 at 11:59 PM EST
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="p-3 rounded-lg bg-purple-100">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Feedback Provided</h3>
                  <p className="text-sm text-gray-600">
                    Within 48 hours of submission
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 