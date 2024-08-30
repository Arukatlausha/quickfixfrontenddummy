// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ServicesDashboard from './components/ServiceDashboard';
import ServiceProviderPage from './components/ServiceProviderPage';
import Profile from './components/Profile';
import UserSignUp from './components/UserSignUp';
import ServiceProviderSignUp from './components/ServiceProviderSignUp';
import LoginPage from './components/LoginPage';
import Dashboard from './components/pages/Dashboard';
import OrderDetails from './components/OrderDetails';
import PopupButton from './components/PopupButton';
function App() {
  return (
  //   <div className="App">
  //     <Homepage />
  //     <ServicesDashboard />
  //     <ServiceProviderPage />
  //     <UserTypeModal />
  //     <UserSignUp />
  //  <ServiceProviderSignUp />
  //  <LoginPage />
  
  //   </div>

<Router>
<div className="App">
 
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<UserSignUp/>} />
   <Route path="/register" element={<ServiceProviderSignUp />}/>
    <Route path="/services" element={<ServicesDashboard />} />
    <Route path="/serviceprovider" element={<ServiceProviderPage />} />
<Route path="/orders" element ={<OrderDetails/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/popup" element={<PopupButton/>} />
  </Routes>
</div>
</Router>




  );
}

export default App;
