import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-[#2F2F2F] leading-tight"
            >
              Savor the Moment with Premium Cuisine
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Experience exceptional dining delivered to your doorstep. Fresh ingredients, masterful preparation, and impeccable service.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-4"
            >
              <button className="btn-primary flex items-center space-x-2">
                <span>Order Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-[#2F2F2F] rounded-lg hover:bg-gray-50 transition-colors duration-200">
                View Menu
              </button>
            </motion.div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
              alt="Signature dish"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-[#FF6B35] rounded-full p-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Delivery Time</p>
                  <p className="font-semibold">25-35 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}