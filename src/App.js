import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './components/pages/Dashboard';
import ServiceProviderPage from './components/ServiceProviderPage';
import Profile from './components/Profile';
import UserSignUp from './components/UserSignUp';
import ServiceProviderSignUp from './components/ServiceProviderSignUp';
import LoginPage from './components/LoginPage';
import OrderDetails from './components/OrderDetails';
import PopupButton from './components/PopupButton';

function App() {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onCategoryClick={handleCategoryClick} activeCategory={activeCategory} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/register" element={<ServiceProviderSignUp />} />
          <Route path="/orders" element={<OrderDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/popup" element={<PopupButton />} />
          <Route 
            path="/service/:category" 
            element={<ServiceProviderPage activeCategory={activeCategory} />} 
          />
          <Route path="/pop" element={<PopupButton />} />
          {/* Redirect any unknown routes to the dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;