import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  Categories, 
  Users, 
  ShoppingBag, 
  Settings,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';

const menuItems = [
  { 
    icon: LayoutDashboard, 
    label: 'Dashboard', 
    path: '/admin' 
  },
  { 
    icon: UtensilsCrossed, 
    label: 'Menu Items', 
    path: '/admin/menu' 
  },
  { 
    icon: Categories, 
    label: 'Categories', 
    path: '/admin/categories' 
  },
  { 
    icon: ShoppingBag, 
    label: 'Orders', 
    path: '/admin/orders' 
  },
  { 
    icon: Users, 
    label: 'Customers', 
    path: '/admin/customers' 
  },
  { 
    icon: Settings, 
    label: 'Settings', 
    path: '/admin/settings' 
  }
];

export function AdminLayout() {
  const location = useLocation();
  const { logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#2F2F2F]">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 ${
                  isActive ? 'bg-[#FF6B35]/10 text-[#FF6B35]' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            {menuItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
          </h2>
          
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
            >
              <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center text-white">
                A
              </div>
              <span>Admin</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {userMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1"
              >
                <button
                  onClick={logout}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </motion.div>
            )}
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}