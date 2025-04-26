'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutClient() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples" 
            className={`inline-flex items-center ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-indigo-400' 
                : 'text-gray-600 hover:text-gray-900'
            } mb-8`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Examples
          </Link>
          <h1 className={`text-4xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } mb-4`}>About Us</h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>Learn more about our mission and team</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className={`text-3xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Our Story</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              Founded in 2024, we're dedicated to helping artists and creatives establish their digital presence. 
              Our team combines technical expertise with creative vision to build beautiful, functional websites.
            </p>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              We believe that every artist deserves a platform to showcase their work and connect with their audience. 
              Our mission is to make web development accessible and empowering for the creative community.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative aspect-square rounded-2xl overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${
              theme === 'dark'
                ? 'from-purple-900/50 to-blue-900/50'
                : 'from-purple-100 to-blue-100'
            }`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-6xl font-bold ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>About</span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              description: "Empowering artists with the tools and knowledge to build their digital presence.",
              icon: "🎯"
            },
            {
              title: "Our Values",
              description: "Creativity, accessibility, and community are at the heart of everything we do.",
              icon: "❤️"
            },
            {
              title: "Our Vision",
              description: "A world where every artist has the digital tools they need to succeed.",
              icon: "✨"
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 border-gray-700'
                  : 'bg-white hover:bg-gray-50 border-gray-100'
              } rounded-xl shadow-sm hover:shadow-md transition-all p-6 border`}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{value.title}</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 