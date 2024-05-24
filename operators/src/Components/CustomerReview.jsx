import React, { useRef, useState  } from 'react';
import axios from 'axios';
import "../CustomerReview.css";

const CustomerReview = () => {
  const nameRef = useRef();
  const ratingRef = useRef();
  const interestedRef = useRef();
  const messageRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const rating = parseInt(ratingRef.current.value); 
    const interested = interestedRef.current.checked;
    const message = messageRef.current.value;

    axios.post('http://localhost:5000/api/reviews', { name, rating, interested, message })
      .then(response => {
        console.log('Review submitted successfully');
        setSubmitted(true);
        nameRef.current.value = '';
        ratingRef.current.value = '1'; 
        interestedRef.current.checked = false; 
        messageRef.current.value = '';
      })
      .catch(error => {
        console.error('Error submitting review:', error);
      });
      
  };

  return (
    <div>
        {submitted && (
        <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginBottom: '10px' }}>
          Review submitted successfully
        </div>
      )}
    <form onSubmit={handleSubmit} className="container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} required />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <select id="rating" ref={ratingRef}>
          {[1, 2, 3, 4, 5].map(value => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <div className="checkbox-label">
          <input type="checkbox" id="interested" ref={interestedRef} />
          <label htmlFor="interested">Interested in buying again in future?</label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message (max 25 characters)</label>
        <textarea id="message" rows="3" maxLength="25" ref={messageRef}></textarea>
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
    </div>
  );
};

export default CustomerReview;
