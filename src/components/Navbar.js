
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
        
  <img 
    src="/study.png" 
    alt="StudyTap Logo" 
    className="w-14 h-14 object-contain" 
  />

        </div>

        <div className="hidden md:flex gap-4">

 <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-900 font-medium hover:text-blue-500 transition">
            Home
          </a>
          <a href="/products" className="text-blue-500 font-medium hover:text-blue-600 transition">
            Products
          </a>
          <a href="/branches" className="text-gray-900 font-medium hover:text-blue-500 transition">
            Branches
          </a>
          <a href="/about" className="text-gray-900 font-medium hover:text-blue-500 transition">
            About
          </a>
            <a href="/reviews" className="text-gray-900 font-medium hover:text-blue-500 transition">
    Reviews
          </a>
          <a href="/contact" className="text-gray-900 font-medium hover:text-blue-500 transition">
            Contact
          </a>
        </div>


          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 space-y-4">
          <a href="/" className="block text-gray-900 font-medium hover:text-blue-500">
            Home
          </a>
          <a href="/products" className="block text-blue-500 font-medium">
            Products
          </a>
          <a href="branches" className="block text-gray-900 font-medium hover:text-blue-500">
            Branches
          </a>
          <a href="/about" className="block text-gray-900 font-medium hover:text-blue-500">
            About
          </a>
          <a href="/contact" className="block text-gray-900 font-medium hover:text-blue-500">
            Contact
          </a>
          <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
