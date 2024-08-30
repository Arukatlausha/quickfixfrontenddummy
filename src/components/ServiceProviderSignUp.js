// ServiceProviderSignUp.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt, FaPhoneAlt, FaImage, FaStar, FaBriefcase, FaCity, FaMoneyBill, FaCog, FaClock } from 'react-icons/fa';

const ServiceProviderSignUp = () => {
  const [formData, setFormData] = useState({
    sid: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    rating: 0,
    experience: '',
    city: '',
    description: '',
    serviceCost: 0,
    profileImage: null,
    serviceType: '',
    working: '',
    workTimings: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      profileImage: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left side with quote and image */}
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col justify-center items-center p-12">
        <div className="max-w-md">
          <p className="text-2xl mb-4">
            The only way to <span className="text-blue-500">do great work</span> is to{' '}
            <span className="text-blue-500">love what you do</span>.
          </p>
          <p className="text-gray-600">- Steve Jobs</p>
        </div>
        <img 
          src="3.jpg" 
          alt="Decorative plant" 
          className="mt-8 max-w-sm"
        />
      </div>

      {/* Right side with sign-up form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Repeat Password"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaStar className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.rating}
                  onChange={handleChange}
                  min="0"
                  max="5"
                />
              </div>
              <div className="relative">
                <FaBriefcase className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="experience"
                  placeholder="Experience"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaCity className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaMoneyBill className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="number"
                  name="serviceCost"
                  placeholder="Service Cost"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.serviceCost}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaCog className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="serviceType"
                  placeholder="Service Type"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <select
                  name="working"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.working}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="relative">
                <FaClock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="workTimings"
                  placeholder="Work Timings"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={formData.workTimings}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaImage className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  onChange={handleImageUpload}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <a href="#" className="text-blue-500">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderSignUp;
