'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail, Globe } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AIArtsLandingClientFooter() {
  return (
    <motion.footer 
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="bg-black border-t border-white/10 py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Course Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">AI & The Arts</h3>
            <p className="text-gray-400 text-sm">
              Master the intersection of artificial intelligence and creative expression.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/workshop/ai-and-the-arts/intro" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Course Introduction
                </Link>
              </li>
              <li>
                <Link href="/workshop/ai-and-the-arts/syllabus" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Full Syllabus
                </Link>
              </li>
              <li>
                <Link href="/workshop/ai-and-the-arts/tools" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Tools & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:m@moises.tech" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  m@moises.tech
                </a>
              </li>
              <li>
                <a href="https://moises.tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  moises.tech
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/moisesrw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/moisestech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/moisesrw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AI & The Arts. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
} 