'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, MessageCircle, Share2, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const posts = [
  {
    id: 1,
    username: "artist_creative",
    avatar: "/images/avatars/artist.jpg",
    content: "Just finished my latest digital painting! What do you think? 🎨✨",
    image: "/images/social/artwork.jpg",
    likes: 245,
    comments: 32,
    shares: 12,
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    username: "design_studio",
    avatar: "/images/avatars/studio.jpg",
    content: "Behind the scenes of our latest project. Stay tuned for the final reveal! 🚀",
    image: "/images/social/studio.jpg",
    likes: 189,
    comments: 24,
    shares: 8,
    timestamp: "5 hours ago"
  },
  {
    id: 3,
    username: "creative_mind",
    avatar: "/images/avatars/creative.jpg",
    content: "New tutorial coming soon! Here's a sneak peek of what we'll be covering. 💡",
    image: "/images/social/tutorial.jpg",
    likes: 312,
    comments: 45,
    shares: 15,
    timestamp: "1 day ago"
  }
];

export default function SocialMediaClient() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Social Media</h1>
          <p className="text-xl text-gray-600">Connect and share with your audience</p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.username}</h3>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-purple-600">Post</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-gray-500">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-2 hover:text-red-500"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        likedPosts.includes(post.id) 
                          ? 'text-red-500 fill-red-500' 
                          : ''
                      }`}
                    />
                    <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-purple-600">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-purple-600">
                    <Share2 className="w-5 h-5" />
                    <span>{post.shares}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 