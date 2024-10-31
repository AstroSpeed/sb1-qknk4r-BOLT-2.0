import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-[#2F2F2F]">Amic Foods</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#menu" className="text-[#2F2F2F] hover:text-[#FF6B35]">Menu</a>
              <a href="#about" className="text-[#2F2F2F] hover:text-[#FF6B35]">About</a>
              <a href="#contact" className="text-[#2F2F2F] hover:text-[#FF6B35]">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Search">
              <Search className="w-5 h-5 text-[#2F2F2F]" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative" aria-label="Shopping cart">
              <ShoppingBag className="w-5 h-5 text-[#2F2F2F]" />
              <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}