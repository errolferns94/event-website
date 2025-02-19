// src/pages/EventsPage.js
import React from 'react';
import './EventPage.css';

const EventsPage = () => {
  return (
    <div className="events-container">
      {/* Events Page Banner */}
      <div className="events-image">
        <img src="/images/banner-image.jpg" alt="Upcoming Events" />
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="card">
          <h2>Event Card 1</h2>
          <p>Add content here.</p>
        </div>
        <div className="card">
          <h2>Event Card 2</h2>
          <p>Add content here.</p>
        </div>
        <div className="card">
          <h2>Event Card 3</h2>
          <p>Add content here.</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
