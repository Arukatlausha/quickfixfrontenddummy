import React from "react";
import { FaEdit } from "react-icons/fa"; // Example icon for the edit button
import Navbar from "./Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome, Amanda
            </h1>
            <p className="text-sm text-gray-500">Tue, 07 June 2022</p>
          </div>
          <img
            src="/path/to/profile-pic.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </header>

        {/* Profile Section */}
        <div className="p-6 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-md mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="/path/to/alexa-profile-pic.jpg"
              alt="Alexa Rawles"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Alexa Rawles
              </h2>
              <p className="text-sm text-gray-500">alexarawles@gmail.com</p>
            </div>
            <button className="ml-auto px-4 py-1 text-sm text-white bg-blue-500 rounded-md flex items-center space-x-2 hover:bg-blue-600">
              <FaEdit className="mr-1" /> Edit
            </button>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200">
              <option>Your First Name</option>
              {/* Add other options as needed */}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Time Zone
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200">
              <option>Your First Name</option>
              {/* Add other options as needed */}
            </select>
          </div>
        </form>

        {/* Email Section */}
        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <h3 className="text-md font-medium text-gray-800">
            My email Address
          </h3>
          <div className="flex items-center mt-2">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-200 p-2 rounded-full">
                <img
                  src="/path/to/email-icon.png"
                  alt="Email"
                  className="w-5 h-5"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  alexarawles@gmail.com
                </p>
                <p className="text-xs text-gray-500">1 month ago</p>
              </div>
            </div>
          </div>
          <button className="mt-4 text-blue-500 text-sm font-medium hover:underline">
            + Add Email Address
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
