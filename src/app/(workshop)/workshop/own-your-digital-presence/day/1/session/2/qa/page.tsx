'use client';

import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle,
  ArrowRight,
  Users,
  Laptop,
  Code
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

const saturdayPreview = [
  {
    title: "Hands-on Website Building",
    icon: Laptop,
    color: "from-blue-500 to-blue-600",
    description: "Put your knowledge into practice with guided website building sessions.",
    duration: "2.5 hours",
    time: "10:00 AM - 12:30 PM"
  },
  {
    title: "Advanced Customization",
    icon: Code,
    color: "from-purple-500 to-purple-600",
    description: "Learn advanced customization techniques and prepare your website for launch.",
    duration: "2.5 hours",
    time: "1:00 PM - 3:30 PM"
  }
];

export default function QAPage() {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setQuestion('');
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
              Q&A Session
            </h1>
            <p className="text-xl text-gray-600">
              Ask your questions and get a preview of Saturday's workshop
            </p>
          </motion.section>

          {/* Question Form */}
          <motion.section variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ask Your Question
            </h2>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Question Submitted!
                </h3>
                <p className="text-gray-600">
                  We'll address your question during the session.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Type your question here..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Submit Question
                </button>
              </form>
            )}
          </motion.section>

          {/* Saturday Preview */}
          <motion.section variants={fadeIn} className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Preview of Saturday's Workshop
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {saturdayPreview.map((session) => (
                <motion.div
                  key={session.title}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-r ${session.color} rounded-xl p-6 text-white`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/20">
                      <session.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{session.title}</h3>
                  </div>
                  <p className="text-white/80 mb-4">{session.description}</p>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{session.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{session.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What to Bring */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              What to Bring on Saturday
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Laptop className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Laptop or Tablet</h3>
                  <p className="text-sm text-gray-600">
                    Bring your device with your website files and any necessary software installed
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="p-3 rounded-lg bg-purple-100">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Notebook & Pen</h3>
                  <p className="text-sm text-gray-600">
                    For taking notes and sketching ideas
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section variants={fadeIn} className="text-center">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-medium">
              <span>See you on Saturday!</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 