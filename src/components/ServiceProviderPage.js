import React, { useEffect, useState } from "react";
import { FaUser, FaCaretDown } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ServiceProviderPage = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Trivandrum");
  const [sortOption, setSortOption] = useState("price"); // Default sorting by price
  const { category } = useParams();

  const serviceEndpoints = {
    plumber: "http://localhost:8888/provider/plumbers",
    carpenter: "http://localhost:8888/provider/carpenters",
    electrician: "http://localhost:8888/provider/electricians",
    saloon: "http://localhost:8888/provider/saloons",
    tutor: "http://localhost:8888/provider/tutors",
  };

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      setError(null);

      try {
        const endpoint = serviceEndpoints[category.toLowerCase()];
        const response = await axios.get(endpoint);
        // Filter by selected city
        const filteredProviders = response.data.filter(
          (provider) =>
            provider.city.toLowerCase() === selectedCity.toLowerCase()
        );
        setServiceProviders(filteredProviders);
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch service providers for ${category}`);
        setLoading(false);
      }
    };

    fetchProviders();
  }, [category, selectedCity]);

  // Sort service providers based on the selected sort option
  const sortedProviders = [...serviceProviders].sort((a, b) => {
    if (sortOption === "price") return a.serviceCost - b.serviceCost;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "experience") return b.experience - a.experience;
    return 0;
  });

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto mt-8 px-4">
        <div className="flex justify-end space-x-4 mb-6">
          <div className="relative">
            <Navbar />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 cursor-pointer"
            >
              <option value="price">Sort By: Price (Low to High)</option>
              <option value="rating">Sort By: Ratings (High to Low)</option>
              <option value="experience">
                Sort By: Experience (High to Low)
              </option>
            </select>
            <FaCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 cursor-pointer"
            >
              <option value="Trivandrum">City: Trivandrum</option>
              <option value="Chennai">City: Chennai</option>
              <option value="Bangalore">City: Bangalore</option>
              <option value="Hyderabad">City: Hyderabad</option>
            </select>
            <FaCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {sortedProviders.length === 0 ? (
          <p className="text-center text-gray-500">
            No providers available for {category} in {selectedCity}.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProviders.map((provider) => (
              <div
                key={provider.sid}
                className="bg-white p-6 rounded-lg shadow-md"
              >
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
                    <h2 className="text-xl font-semibold">
                      {provider.username}
                    </h2>
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
