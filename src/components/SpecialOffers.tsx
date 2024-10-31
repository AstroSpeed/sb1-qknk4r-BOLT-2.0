import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Weekend Special',
    description: 'Get 20% off on all main courses every weekend',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80',
    validUntil: '2024-03-31',
    discount: '20%'
  },
  {
    id: 2,
    title: 'Family Feast',
    description: 'Order for 4 people and get a free dessert',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80',
    validUntil: '2024-03-31',
    discount: 'Free Dessert'
  }
];

export function SpecialOffers() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-[#2F2F2F] mb-12 text-center">Special Offers</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-2xl font-bold mb-2">{offer.title}</h4>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">{offer.discount} OFF</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Valid until {offer.validUntil}</span>
                  </div>
                  <button className="btn-primary">Claim Offer</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}