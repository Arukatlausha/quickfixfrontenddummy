// components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold"
        >
          Quick Fix
        </motion.h1>
        <motion.ul
          className="flex space-x-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {['Home', 'Plumber', 'Carpenter', 'Electrician', 'Saloon', 'Tutor'].map((item, index) => (
            <li key={item} className={`cursor-pointer ${index === 0 ? 'text-blue-500' : ''}`}>
              {item}
            </li>
          ))}
        </motion.ul>
        <FaUserCircle className="text-2xl text-gray-600" />
      </div>
    </nav>
  );
};

export default Navbar;
