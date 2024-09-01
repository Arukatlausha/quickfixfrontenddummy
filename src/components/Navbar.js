import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaBars, FaTimes, FaHome } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const categories = ["Plumber", "Carpenter", "Electrician", "Saloon", "Tutor"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    // onCategoryClick(category);
    setIsMenuOpen(false);
    navigate(`${category.toLowerCase()}`);
  };
  const handleLogout = () => {
    document.cookie =
      "sessionId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; SameSite=Strict";
    navigate("/login");
    window.location.reload();
  };

  const getSessionIdFromCookie = () => {
    const match = document.cookie.match(/sessionId=([^;]+)/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const checkSessionAndFetchUser = async () => {
      const sessionId = getSessionIdFromCookie();

      if (!sessionId) {
        navigate("/login");
      } else {
        try {
          const response = await axios.get("http://localhost:3000/users.json");
          const users = response.data;

          const user = users.find((u) => u.sessionId === sessionId);

          if (user) {
            console.log("sesion exists");
          } else {
            navigate("/login");
          }
        } catch (err) {
          console.error("Error fetching users:", err);
        }
      }
    };

    checkSessionAndFetchUser();
  }, [navigate]);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            <Link to="">Quick Fix</Link>
          </motion.h1>
          <Link to="" className="text-gray-600 hover:text-blue-500">
            <FaHome size={24} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex space-x-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((item) => (
            <li
              key={item}
              className={`cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200`}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <Link to="/profile">
          <FaUserCircle className="text-2xl text-gray-600" />
        </Link>
        <button onClick={handleLogout}>Log out</button>
      </div>
      <main className="content">
        <Outlet />
      </main>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-2">
            {categories.map((item) => (
              <li
                key={item}
                className={`cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200`}
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
