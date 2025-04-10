"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="w-full shadow-sm border-b border-gray-200 bg-white z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <img src="https://i.imgur.com/c2GLYEG.png"></img>

        {/* Search */}
        <div className="hidden md:flex flex-1 justify-center mx-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-md rounded-md bg-gray-100 px-4 py-2 outline-none text-sm"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          <a href="#" className="font-semibold text-black">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>

          {/* Icons */}
          <button aria-label="Favorites">
            <img src="https://i.imgur.com/5AdMrQj.png" alt="Favorites" className="w-5 h-5" />
          </button>
          <button aria-label="Cart">
            <img src="https://i.imgur.com/IxyjfBx.png" alt="Cart" className="w-5 h-5" />
          </button>
          <button aria-label="Profile">
            <img src="https://i.imgur.com/i01fyfP.png" alt="Profile" className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Open menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-white flex flex-col p-6 z-50 md:hidden transition-transform duration-150 ease-in-out`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.2 }}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4" aria-label="Close menu">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Nav Items */}
        <div className="flex flex-col space-y-6 pt-20 text-lg text-gray-800">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Contact Us</a>
          <a href="#" className="hover:text-black">Blog</a>

          {/* Mobile Icons */}
          <div className="flex space-x-6 pt-4">
            <img src="https://i.imgur.com/5AdMrQj.png" alt="Favorites" className="w-6 h-6" />
            <img src="https://i.imgur.com/IxyjfBx.png" alt="Cart" className="w-6 h-6" />
            <img src="https://i.imgur.com/i01fyfP.png" alt="Profile" className="w-6 h-6" />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
