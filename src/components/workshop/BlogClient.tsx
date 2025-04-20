'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const blogPosts = [
  {
    title: "Getting Started with Web Development",
    excerpt: "Learn the basics of web development and how to build your first website.",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Web Development", "Beginners"],
    image: "/images/blog/web-dev.jpg"
  },
  {
    title: "Design Principles for Artists",
    excerpt: "Essential design principles that every artist should know when building their website.",
    date: "March 10, 2024",
    readTime: "7 min read",
    tags: ["Design", "Art"],
    image: "/images/blog/design.jpg"
  },
  {
    title: "Optimizing Your Portfolio",
    excerpt: "Tips and tricks to make your portfolio stand out and attract more opportunities.",
    date: "March 5, 2024",
    readTime: "6 min read",
    tags: ["Portfolio", "Optimization"],
    image: "/images/blog/portfolio.jpg"
  }
];

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Examples
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Insights and tips for building your digital presence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">Blog</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-600"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 