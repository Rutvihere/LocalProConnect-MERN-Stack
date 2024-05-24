import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customer from './Customer';
import CustomerReview from './CustomerReview';
import Navbar from "./Navbar";
import Home from "./Home"
import Services from './Services';
import Signup from './Signup';
import Login from './Login';

function MyApp() {
  return (
    <div>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Services />} />
        <Route path="/cr" element={<Customer />} />
        <Route path="/sr" element={<CustomerReview />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </div>
  );
}

export default MyApp;
