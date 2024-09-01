// ServiceProviderSignUp.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt, FaBriefcase, FaCity, FaMoneyBill, FaCog } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid'; 
import axios from 'axios';

const ServiceProviderSignUp = () => {
  const [formData, setFormData] = useState({
    sid: uuidv4(), // SID is generated on component load
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rating: 0,
    experience: '',
    city: '',
    description: '',
    serviceCost: 0,
    serviceType: '',
    working: '',
    status: 'PENDING', // Default status set as PENDING
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    const payload = {
      sid: formData.sid,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      rating: formData.rating,
      experience: formData.experience,
      city: formData.city,
      description: formData.description,
      serviceCost: formData.serviceCost,
      serviceType: formData.serviceType,
      working: formData.working,
      status: formData.status, // Default as 'PENDING'
    };

    try {
      const response = await axios.post('http://localhost:8888/provider', payload);
      console.log('Response:', response);

      if (response.status === 201) {
        setSuccess('Service provider registered successfully!');
        setFormData({
          sid: uuidv4(),
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          rating: 0,
          experience: '',
          city: '',
          description: '',
          serviceCost: 0,
          serviceType: '',
          working: '',
          status: 'PENDING',
        });
      } else {
        setError('Registration failed. Please check your input and try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        setError(error.response.data.message || 'Registration failed. Please check your input and try again.');
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Service Provider Sign Up
        </h1>

        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                placeholder="Confirm Password"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
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
                <option value="" disabled>Select Working Status</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceProviderSignUp;
