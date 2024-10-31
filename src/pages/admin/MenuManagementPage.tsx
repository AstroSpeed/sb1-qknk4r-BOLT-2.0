import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter } from 'lucide-react';
import { MenuItemForm } from '../../components/admin/MenuItemForm';
import { useMenu } from '../../hooks/useMenu';
import { MenuItem } from '../../types/menu';
import { formatPrice } from '../../lib/utils';

export function MenuManagementPage() {
  const [isAddingItem, setIsAddingItem] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const { getMenuItems, getCategories, createMenuItem } = useMenu();
  const { data: menuItems, isLoading } = getMenuItems();
  const { data: categories } = getCategories();

  const filteredItems = React.useMemo(() => {
    if (!menuItems) return [];
    return menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || item.categoryId === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [menuItems, searchTerm, selectedCategory]);

  const handleCreateMenuItem = async (data: Omit<MenuItem, 'id'>) => {
    await createMenuItem.mutateAsync(data);
    setIsAddingItem(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Menu Management</h1>
        <button
          onClick={() => setIsAddingItem(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Menu Item</span>
        </button>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input pl-10"
          >
            <option value="">All Categories</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isAddingItem && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
          <MenuItemForm onSubmit={handleCreateMenuItem} />
        </motion.div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="font-semibold text-[#FF6B35]">
                    {formatPrice(item.price)}
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.isAvailable
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                  <div className="space-x-2">
                    <button className="text-gray-600 hover:text-[#FF6B35]">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}