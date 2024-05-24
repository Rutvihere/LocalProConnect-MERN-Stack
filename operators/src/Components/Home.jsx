import React from 'react';
import { Link } from 'react-router-dom';
import home from "../images/img1.jpg";
import '../Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="intro-container">
        <div className="text-container">
          <h1>Welcome to LocalProConnect</h1>
          <p>
            <span className="bold">Connecting Local Professionals, Building Communities</span>
          </p>
          <p>
            Welcome to LocalProConnect, where you can find skilled professionals in your area for various services. Whether you need a plumber, electrician, carpenter, or fitness trainer, we've got you covered
          </p>
          <div className="cta-buttons">
            <Link to="/products" className="cta-button">
              Find a Professional
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img src={home} alt="Plumbing" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;