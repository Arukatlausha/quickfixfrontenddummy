import React, { useEffect, useState } from 'react';
import { FaUser, FaCaretDown } from 'react-icons/fa';
import axios from 'axios';

const ServiceProviderPage = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Plumber'); // Default active category

  // Service categories and corresponding API endpoints
  const serviceEndpoints = {
    Plumber: 'http://localhost:8888/provider/plumbers',
    Carpenter: 'http://localhost:8888/provider/carpenters',
    Electrician: 'http://localhost:8888/provider/electricians',
    Saloon: 'http://localhost:8888/provider/saloons',
    Tutor: 'http://localhost:8888/provider/tutors',
  };

  // Fetch data from the backend based on the selected category
  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(serviceEndpoints[activeCategory]);
        setServiceProviders(response.data); // Assuming response.data is an array of provider objects
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch service providers for ${activeCategory}`);
        setLoading(false);
      }
    };

    fetchProviders();
  }, [activeCategory]); // Re-fetch data when activeCategory changes

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Render loading, error, or data
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold">Quick Fix</h1>
            <ul className="flex space-x-4">
              {Object.keys(serviceEndpoints).map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer ${activeCategory === item ? 'text-blue-500 font-semibold' : ''}`}
                  onClick={() => handleCategoryClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <FaUser className="text-2xl text-gray-600" />
        </div>
      </nav>

      <div className="container mx-auto mt-8 px-4">
        <div className="flex justify-end space-x-4 mb-6">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 cursor-pointer">
              <option>Sort By :- Price(Low to High)</option>
            </select>
            <FaCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 cursor-pointer">
              <option>City :- Trivandrum</option>
            </select>
            <FaCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {serviceProviders.length === 0 ? (
          <p className="text-center text-gray-500">No providers available for {activeCategory}.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceProviders.map((provider) => (
              <div key={provider.sid} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  {provider.profileImg ? (
                    <img
                      src={provider.profileImg}
                      alt={provider.username}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                  ) : (
                    <FaUser className="text-5xl text-gray-400 mr-4" />
                  )}
                  <div>
                    <h2 className="text-xl font-semibold">{provider.username}</h2>
                    <p>Rating: {provider.rating} / 5</p>
                    <p>Experience: {provider.experience} years</p>
                    <p>City: {provider.city}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p>{provider.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Service Cost</p>
                    <p>{provider.serviceCost}/hr</p>
                  </div>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProviderPage;
