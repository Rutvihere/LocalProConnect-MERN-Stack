// Customer.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../customer.css'; 

const Customer = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div className="customer-reviews-container">
      <h2>Customer Reviews</h2>
      {Array.isArray(reviews) && reviews.map(review => (
        <div key={review._id} className="customer-review-card">
          <p><strong>Name:</strong> {review.name}</p>
          <p><strong>Message:</strong> {review.message}</p>
          <p><strong>Interested in buying:</strong> {review.interested ? 'Yes' : 'No'}</p>
          <p><strong>Rating:</strong> {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Customer;
