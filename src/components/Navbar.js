import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "text-blue-600 font-semibold";
  const normalClass = "text-gray-900 font-medium hover:text-blue-500 transition";

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/">
          <img
            src="/study.png"
            alt="StudyTap Logo"
            className="w-14 h-14 object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Products
          </NavLink>

          <NavLink
            to="/branches"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Branches
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            About
          </NavLink>

          <NavLink
            to="/reviews"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Reviews
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Contact
          </NavLink>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 space-y-4">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Products
          </NavLink>

          <NavLink
            to="/branches"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Branches
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            About
          </NavLink>

          <NavLink
            to="/reviews"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Reviews
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Contact
          </NavLink>

        </div>
      )}
    </nav>
  );
}
