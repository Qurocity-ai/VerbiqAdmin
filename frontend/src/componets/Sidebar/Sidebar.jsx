// Sidebar.jsx
import React, { useState } from "react";
import {
  FiFileText, // Posts icon
  FiBarChart2, // Stats icon
  FiMessageSquare, // Comments icon
  FiDollarSign, // Earnings icon
  FiCreditCard, // Pages icon
  FiLayout, // Layout icon
  FiPaperclip, // Theme icon
  FiSettings, // Settings icon
  FiBookmark, // Reading List icon
  FiLink, // View blog icon
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const navigate = useNavigate();

  const links = [
    { name: "Posts", icon: <FiFileText />, key: "posts" },
    { name: "Stats", icon: <FiBarChart2 />, key: "stats" },
    { name: "Comments", icon: <FiMessageSquare />, key: "comments" },
    { name: "Earnings", icon: <FiDollarSign />, key: "earnings" },
    { name: "Pages", icon: <FiCreditCard />, key: "pages" },
    { name: "Layout", icon: <FiLayout />, key: "layout" },
    { name: "Theme", icon: <FiPaperclip />, key: "theme" },
    { name: "Settings", icon: <FiSettings />, key: "settings" },
    { name: "Reading List", icon: <FiBookmark />, key: "readinglist" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg z-20 mt-14 
          transform transition-transform duration-300 border-r border-gray-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:w-64
          w-64
        `}
      >
        <img
          src="/assets/virbiqlogo.png"
          alt="verbiQ"
          className="-mt-10 ml-6"
        />
        <div className="p-4 ">
          <h2 className="text-lg font-normal">Computer Networking</h2>
        </div>
        <div className="p-4">
          <button
            className="flex items-center space-x-2 bg-white shadow-lg text-red-600 px-10 py-4 rounded-full hover:bg-orange-200"
            onClick={navigate("/blog")}
          >
            <span className="text-xl">+</span>
            <span>NEW POST</span>
          </button>
        </div>
        <nav className="px-2 space-y-1 border-t border-gray-200">
          {links.map((link) => (
            <a
              key={link.key}
              href={`#${link.key}`}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-3 text-xl">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </nav>
        <div className="mt-4 border-t border-gray-200 pt-2 px-4">
          <a
            href="#viewblog"
            className="flex items-center text-teal-600 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            <FiLink className="mr-2" />
            View blog
          </a>
        </div>
      </aside>

      {/* Mobile toggle button */}
      <button
        className="fixed bottom-6 right-6 p-3 bg-orange-600 text-white rounded-full shadow-lg lg:hidden z-30"
        onClick={toggle}
      >
        {isOpen ? <FiSettings /> : <FiSettings />}
      </button>
    </>
  );
}
