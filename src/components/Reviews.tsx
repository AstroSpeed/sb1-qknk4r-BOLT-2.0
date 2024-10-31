import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The food quality and presentation are exceptional. Delivery was prompt and the packaging kept everything fresh.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Best food delivery service I\'ve ever used. The attention to detail and customer service are outstanding.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Emma Davis',
    rating: 5,
    comment: 'The variety of dishes is amazing, and everything I\'ve tried has been delicious. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    date: '2 weeks ago'
  }
];

export function Reviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#2F2F2F]">What Our Customers Say</h3>
          <p className="text-gray-600 mt-4">Don't just take our word for it</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200" />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#2F2F2F]">{review.name}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <span className="text-sm text-gray-500">{review.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}