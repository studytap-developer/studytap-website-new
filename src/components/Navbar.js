import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img 
              src="/study.png"
              alt="StudyTap Logo"
              className="w-14 h-14 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link to="/" className="text-gray-900 font-medium hover:text-blue-500 transition">
            Home
          </Link>

          <Link to="/products" className="text-blue-500 font-medium hover:text-blue-600 transition">
            Products
          </Link>

          <Link to="/branches" className="text-gray-900 font-medium hover:text-blue-500 transition">
            Branches
          </Link>

          <Link to="/about" className="text-gray-900 font-medium hover:text-blue-500 transition">
            About
          </Link>

          <Link to="/reviews" className="text-gray-900 font-medium hover:text-blue-500 transition">
            Reviews
          </Link>

          <Link to="/contact" className="text-gray-900 font-medium hover:text-blue-500 transition">
            Contact
          </Link>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
            Get Started
          </button>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 space-y-4">

          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-900 font-medium hover:text-blue-500">
            Home
          </Link>

          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-blue-500 font-medium">
            Products
          </Link>

          <Link to="/branches" onClick={() => setIsOpen(false)} className="block text-gray-900 font-medium hover:text-blue-500">
            Branches
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-900 font-medium hover:text-blue-500">
            About
          </Link>

          <Link to="/reviews" onClick={() => setIsOpen(false)} className="block text-gray-900 font-medium hover:text-blue-500">
            Reviews
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-900 font-medium hover:text-blue-500">
            Contact
          </Link>

          <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

