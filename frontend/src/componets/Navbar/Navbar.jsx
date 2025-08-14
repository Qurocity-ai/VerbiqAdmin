// Navbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiHelpCircle } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-xl border-b-1 border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Left: Menu Icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 lg:hidden"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Center: Search Input */}
          <div className="flex-grow px-4 lg:px-0">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts"
                className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <nav className="space-y-2 bg-white p-4 shadow-lg">
            <a
              href="#"
              className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Info
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Apps
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
