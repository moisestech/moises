'use client'

import { motion } from "framer-motion";
import { User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function PortfoliosClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/workshop/own-your-digital-presence/day/1/session/1/examples" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Examples
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Websites</h1>
          <p className="text-xl text-gray-600">Explore inspiring portfolio websites from artists and creatives</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Visual Artist Portfolio",
              description: "A stunning showcase of paintings and digital art",
              image: "/images/examples/visual-artist.jpg",
              link: "https://example.com/visual-artist"
            },
            {
              title: "Photography Portfolio",
              description: "Professional photography portfolio with gallery",
              image: "/images/examples/photography.jpg",
              link: "https://example.com/photography"
            },
            {
              title: "Design Portfolio",
              description: "Interactive design portfolio with case studies",
              image: "/images/examples/design.jpg",
              link: "https://example.com/design"
            }
          ].map((portfolio, index) => (
            <motion.div
              key={portfolio.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-video bg-gray-100">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-purple-100">
                  <User className="w-12 h-12 text-purple-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{portfolio.title}</h3>
                <p className="text-gray-600 mb-4">{portfolio.description}</p>
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  View Website →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 