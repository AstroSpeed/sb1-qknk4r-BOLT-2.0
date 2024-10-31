import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '$12,345',
    icon: DollarSign,
    trend: '+12.5%',
    trendUp: true
  },
  {
    label: 'Total Orders',
    value: '156',
    icon: ShoppingBag,
    trend: '+8.2%',
    trendUp: true
  },
  {
    label: 'Total Customers',
    value: '1,245',
    icon: Users,
    trend: '+15.3%',
    trendUp: true
  },
  {
    label: 'Avg. Order Value',
    value: '$79.12',
    icon: TrendingUp,
    trend: '+5.7%',
    trendUp: true
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div className="bg-[#FF6B35]/10 p-3 rounded-lg">
                <Icon className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <span className={`text-sm ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trend}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}