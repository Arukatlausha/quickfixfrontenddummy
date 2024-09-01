import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import MainNavbar from "../navbars/MainNavbar";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setError("");

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sessionId="));
    if (token) {
      navigate("/admin");
    } else {
      setError("");
    }
  }, [navigate, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseadmins = await axios.get(
        "http://localhost:3000/adminusers.json"
      );
      const admins = responseadmins.data;
      const admin = admins.find(
        (u) => u.email === email && u.password === password
      );

      const responseusers = await axios.get("http://localhost:3000/users.json");
      const users = responseusers.data;
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      const responsesp = await axios.get(
        "http://localhost:3000/serviceProvider.json"
      );
      const sps = responsesp.data;
      const serviceProvider = sps.find(
        (u) => u.email === email && u.password === password
      );

      if (admin) {
        const sessionId = admin.sessionId;
        document.cookie = `sessionId=${sessionId}; path=/; secure; SameSite=Strict`;

        setError("");
        console.log("Login successful");
        navigate("/admin");
      } else if (user) {
        const sessionId = user.sessionId;
        document.cookie = `sessionId=${sessionId}; path=/; secure; SameSite=Strict`;

        setError("");
        console.log("Login successful");
        navigate("/home");
      } else if (serviceProvider) {
        const sessionId = serviceProvider.sessionId;
        document.cookie = `sessionId=${sessionId}; path=/; secure; SameSite=Strict`;

        setError("");
        console.log("Login successful");
        navigate("/nav1");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Error fetching", err);
    }
  };

  return (
    <>
      <MainNavbar />
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
              <span className="text-blue-500">
                believe in the beauty of their dreams.
              </span>
            </p>
            <p className="text-gray-600">- Eleanor Roosevelt</p>
          </div>
        </div>

        {/* Right side with login form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6">Log In</h2>
            {error && <p>{error}</p>}
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
              <a href="#" className="text-blue-500 text-sm">
                Forgot password?
              </a>
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
              Don't have an account?{" "}
              <a href="#" className="text-blue-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
