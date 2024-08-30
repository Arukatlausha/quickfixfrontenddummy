import React, { useState } from 'react';

const PopupButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the pop-up
//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Trigger Button */}
      {/* <button
        onClick={togglePopup}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Open Pop Up
      </button> */}

      {/* Pop-Up Modal */}
      
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Let me know!</h2>
            <div className="flex space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => alert('User button clicked')}
              >
                User
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => alert('Service Provider button clicked')}
              >
                Service Provider
              </button>
            </div>
            {/* <button
              className="mt-4 text-gray-500 hover:text-gray-700"
              onClick={togglePopup}
            >
              Close
            </button> */}
          </div>
        </div>
      
    </div>
  );
};

export default PopupButton;
