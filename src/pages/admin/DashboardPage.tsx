import React from 'react';
import { DashboardStats } from '../../components/admin/DashboardStats';
import { motion } from 'framer-motion';
import { BarChart, Calendar, ArrowUpRight } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardStats />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <button className="text-[#FF6B35] hover:text-[#ff5a1f] text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <BarChart className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Order #{order}234</h4>
                    <p className="text-sm text-gray-600">2 items • $45.99</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-green-500">Completed</span>
                  <p className="text-sm text-gray-600">2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((event) => (
              <div key={event} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-sm font-semibold text-[#FF6B35]">Mar</span>
                  <span className="text-xs text-[#FF6B35]">{event + 14}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-medium">Special Promotion</h4>
                  <p className="text-xs text-gray-600">10:00 AM - 11:00 AM</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}