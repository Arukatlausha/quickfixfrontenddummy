import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaUser, FaUsers } from 'react-icons/fa'; // Example icons
import { MdOutlineMenu } from 'react-icons/md'; // Menu icon
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
    onClick={() => onClick(user)}
  >
    <img src={`5.png`} alt={user.username} className="w-24 h-24 rounded-full mb-2" />
    <h3 className="text-lg font-semibold">{user.username}</h3>
    <p className="text-sm text-gray-500">{user.workplace || 'Workplace not specified'}</p>
    <div className="mt-2 text-center">
      <p className="text-sm truncate w-full">{user.contact}</p>
      <p className="text-sm truncate w-full">{user.email}</p>
    </div>
  </motion.div>
);

const UserDetailsModal = ({ user, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
      >
        ✕
      </button>
      <img src={`5.png`} alt={user.username} className="w-32 h-32 rounded-full mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-center">{user.username}</h3>
      <p className="text-sm text-gray-500 text-center">{user.workplace || 'Workplace not specified'}</p>
      <div className="mt-4 text-center">
        <p className="text-sm">Contact: {user.contact}</p>
        <p className="text-sm">Email: {user.email}</p>
        <p className="text-sm">Additional Info: {user.additionalInfo || 'No additional info available'}</p>
      </div>
    </div>
  </motion.div>
);

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [userData, setUserData] = useState([]);
  const [providerData, setProviderData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (activeTab === 'users') {
      fetchUserData();
    } else if (activeTab === 'providers') {
      fetchProviderData();
    }
  }, [activeTab]);

  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8888/user/getall');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchProviderData = async () => {
    try {
      const response = await axios.get('http://localhost:8888/provider');
      setProviderData(response.data);
    } catch (error) {
      console.error('Error fetching provider data:', error);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <MdOutlineMenu className="text-xl mr-4 cursor-pointer sm:hidden" />
              <span className="text-xl font-bold">Quick Fix</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <button
                onClick={() => setActiveTab('users')}
                className={`${
                  activeTab === 'users'
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                <FaUsers className="mr-2" />
                USERS
              </button>
              <button
                onClick={() => setActiveTab('providers')}
                className={`${
                  activeTab === 'providers'
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                <FaUser className="mr-2" />
                SERVICE PROVIDERS
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <FaUser className="h-8 w-8 text-gray-500"  onClick={()=>navigate("/profile")}/>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {activeTab === 'users' &&
            userData.map((user, index) => (
              <UserCard key={index} user={user} onClick={handleUserClick} />
            ))}
          {activeTab === 'providers' &&
            providerData.map((provider, index) => (
              <UserCard key={index} user={provider} onClick={handleUserClick} />
            ))}
        </motion.div>
      </div>

      {selectedUser && <UserDetailsModal user={selectedUser} onClose={handleCloseModal} />}
    </div>
  );
};

export default Navigation;
