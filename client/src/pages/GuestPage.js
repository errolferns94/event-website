// src/pages/GuestPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GuestPage.css';
import { supabase } from '../supabaseClient';

const GuestPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('date', { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleAddEvent = () => {
    // Redirect to login if not authenticated
    navigate('/login');
  };

  if (loading) return <div className="loading">Loading events...</div>;

  return (
    <div className="guest-container">
      <div className="guest-image">
        <img src="/images/banner-image.jpg" alt="Guest Event Banner" />
      </div>

      <div className="cards-container">
        {events.map(event => (
          <div className="card" key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div className="event-details">
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="add-event-button"
        onClick={handleAddEvent}
      >
        Add New Event
      </button>
    </div>
  );
};

export default GuestPage;