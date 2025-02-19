// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GuestPage from './pages/GuestPage';
import EventsPage from './pages/EventsPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
};

export default App;