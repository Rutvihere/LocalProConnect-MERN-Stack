import React, { useState } from 'react';
import axios from 'axios';
import '../signup.css'; // Import the CSS file

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/signup', formData);
      console.log(response.data); 
      
      window.location.href = '/products';
    } catch (error) {
      console.error('Error:', error); 
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="existing-user">
          <p>Already an existing user? <a href='/login'>Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
