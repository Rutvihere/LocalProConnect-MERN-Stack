import React, { useState } from 'react';
import '../Services.css';
import { Link } from 'react-router-dom';
import plumbing from "../images/plumbing.jpg"
import electrical from "../images/electrical.jpg"
import beauty from "../images/beauty.jpg"
import carpentry from "../images/carpentry.jpeg"
import fitness from "../images/fitness.jpg"
import homedecor from "../images/homedecor.jpg"

function Services() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.text();
      console.log('Server response:', data);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      // Show alert message
      alert('Service has been booked successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message
      alert('Failed to book the service. Please try again later.');
    }
  };

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Plumbing Services</h3>
          <img src={plumbing} alt="Plumbing Services" className='plumbing-image'/>
        </div>
        <div className="service-card">
          <h3>Electrical Services</h3>
          <img src={electrical} alt="Electrical Services" className='electrical-image'/>
        </div>
        <div className="service-card">
          <h3>Beauty Services</h3>
          <img src={beauty} alt="Beauty Services" className='beauty-image'/>
        </div>
        <div className="service-card">
          <h3>Carpentry Services</h3>
          <img src={carpentry} alt="Carpentry Services" className='carpentry-image'/>
        </div>
        <div className="service-card">
          <h3>Fitness Services</h3>
          <img src={fitness} alt="Fitness Services" className='fitness-image'/>
        </div>
        <div className="service-card">
          <h3>Home Decor Services</h3>
          <img src={homedecor} alt="Home Decor Services" className='homedecor-image'/>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="booking-form">
        <h3>Book Service</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Description about the service:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Services;
