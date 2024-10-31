import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold">Amic Foods</h4>
            <p className="text-gray-400">Premium food delivery service bringing exceptional dining experiences to your doorstep.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <ul className="space-y-2 text-gray-400">
              <li>123 Food Street</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>contact@amicfoods.com</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Newsletter</h5>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              />
              <button className="w-full bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#ff5a1f] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Amic Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}