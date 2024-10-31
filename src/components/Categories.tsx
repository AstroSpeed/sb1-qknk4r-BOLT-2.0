import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Main Course',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80'
  },
  {
    name: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80'
  },
  {
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80'
  },
  {
    name: 'Beverages',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80'
  }
];

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#2F2F2F]">Popular Categories</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 text-center cursor-pointer group"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h4 className="font-semibold text-[#2F2F2F]">{category.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}