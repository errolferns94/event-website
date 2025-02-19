// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Image Section */}
      <div className="home-image">
        <img
          src="/images/banner-image.jpg" // Path to your image
          alt="Event Banner"
        />
      </div>
      
      {/* Cards Section */}
      <div className="cards-container">
        <div className="card">
          <h2>Card 1</h2>
          <p>Add content here.</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>Add content here.</p>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>Add content here.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
