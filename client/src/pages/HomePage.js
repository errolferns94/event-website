import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  if (loading) return <div className="loading">Loading events...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="home-container">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Image Section */}
      <div className="home-image">
        <img
          src="/images/banner-image.jpg"
          alt="Event Banner"
        />
      </div>
      
      {/* Events Cards Section */}
      <div className="cards-container">
        {events.length > 0 ? (
          events.map(event => (
            <div 
              className="card" 
              key={event.id}
              onClick={() => handleEventClick(event.id)}
              style={{ cursor: 'pointer' }} // Add pointer cursor
            >
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <div className="event-details">
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <p>No events available. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;