import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Clock, Truck, Check } from 'lucide-react';

const steps = [
  {
    icon: Utensils,
    title: 'Choose Your Meal',
    description: 'Browse our menu and select your favorite dishes'
  },
  {
    icon: Clock,
    title: 'Place Your Order',
    description: 'Customize your order and proceed to checkout'
  },
  {
    icon: Truck,
    title: 'Track Delivery',
    description: 'Follow your order in real-time'
  },
  {
    icon: Check,
    title: 'Enjoy Your Food',
    description: 'Savor your delicious meal at home'
  }
];

export function OrderProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-[#2F2F2F]">How It Works</h3>
          <p className="text-gray-600 mt-4">Simple steps to get your favorite meals</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-[#FF6B35]" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#FF6B35]/20 to-transparent" />
                )}
              </div>
              <h4 className="text-xl font-semibold text-[#2F2F2F] mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}