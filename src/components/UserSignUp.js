import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt, FaPhoneAlt, FaImage } from 'react-icons/fa';

const UserSignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    contact: '',
    profileImg: null,
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          profileImg: reader.result.split(',')[1], // base64 data
        }));
      };
      reader.readAsDataURL(file);
    }
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
      username: formData.username,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      contact: formData.contact,
      profileImg: formData.profileImg,
    };

    try {
      const response = await fetch('http://localhost:8888/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess('User registered successfully!');
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: '',
          contact: '',
          profileImg: null,
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed. Please check your input and try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Sign Up
        </h1>

        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}

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
              <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaPhoneAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="tel"
                name="contact"
                placeholder="Phone Number"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaImage className="absolute top-3 left-3 text-gray-400" />
              <input
                type="file"
                name="profileImg"
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
      </div>
    </div>
  );
};

export default UserSignUp;