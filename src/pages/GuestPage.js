// src/pages/GuestPage.js
import React from 'react';
import './GuestPage.css';

const GuestPage = () => {
  return (
    <div className="guest-container">
      {/* Guest Page Banner */}
      <div className="guest-image">
        <img src="/images/banner-image.jpg" alt="Guest Event Banner" />
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="card">
          <h2>Guest Card 1</h2>
          <p>Add content here.</p>
        </div>
        <div className="card">
          <h2>Guest Card 2</h2>
          <p>Add content here.</p>
        </div>
        <div className="card">
          <h2>Guest Card 3</h2>
          <p>Add content here.</p>
        </div>
      </div>
    </div>
  );
};

export default GuestPage;
