import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

const featuredDishes = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with herbs and lemon butter sauce',
    price: 24.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80',
    category: 'Seafood'
  },
  {
    id: 2,
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle and parmesan',
    price: 22.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80',
    category: 'Italian'
  },
  {
    id: 3,
    name: 'Wagyu Steak',
    description: 'Premium Japanese Wagyu with seasonal vegetables',
    price: 89.99,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80',
    category: 'Steaks'
  }
];

export function FeaturedMenu() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-3xl font-bold text-[#2F2F2F]">Featured Menu</h3>
          <button className="text-[#FF6B35] font-semibold hover:text-[#ff5a1f]">
            View All Menu
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  aria-label="Add to favorites"
                >
                  <Heart className="w-5 h-5 text-[#FF6B35]" />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-[#2F2F2F]">{dish.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#2F2F2F] mb-2">{dish.name}</h4>
                    <p className="text-gray-600 text-sm">{dish.description}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{dish.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#2F2F2F]">${dish.price}</span>
                  <button className="btn-primary">Add to Cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}