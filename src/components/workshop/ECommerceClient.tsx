'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Star, Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const products = [
  {
    id: 1,
    name: "Digital Art Collection",
    price: 49.99,
    description: "A collection of high-resolution digital artworks",
    rating: 4.8,
    reviews: 24,
    image: "/images/products/digital-art.jpg"
  },
  {
    id: 2,
    name: "Art Prints Bundle",
    price: 29.99,
    description: "Set of 5 premium quality art prints",
    rating: 4.5,
    reviews: 18,
    image: "/images/products/prints.jpg"
  },
  {
    id: 3,
    name: "Online Course",
    price: 99.99,
    description: "Learn digital art techniques from professionals",
    rating: 4.9,
    reviews: 32,
    image: "/images/products/course.jpg"
  }
];

export default function ECommerceClient() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCart(prev => [...prev, productId]);
  };

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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
              <p className="text-xl text-gray-600">Browse our collection of digital products</p>
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-square bg-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">Product</span>
                </div>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    onClick={() => addToCart(product.id)}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 