import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    // Here you would typically handle the login logic
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side with image and quote */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-100 flex-col justify-center items-center p-12">
        <img 
          src="4.png" 
          alt="Minimalist workspace" 
          className="max-w-md mb-8"
        />
        <div className="max-w-md text-center">
          <p className="text-xl mb-2">
            The future belongs to those who
            <br />
            <span className="text-blue-500">believe in the beauty of their dreams.</span>
          </p>
          <p className="text-gray-600">- Eleanor Roosevelt</p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="pl-10 pr-4 py-2 w-full border rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-4 text-right">
            <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
          </div>
          <div className="mt-6">
            <p className="text-center text-gray-600 mb-4">Or log in with</p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                <FaGoogle className="mr-2" /> Google
              </button>
              <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                <FaFacebook className="mr-2" /> Facebook
              </button>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;