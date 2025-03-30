import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GuestPage from './pages/GuestPage';
import AddEventPage from './pages/AddEventPage';
import EventsPage from './pages/EventsPage'; // Make sure this component exists

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/events" element={<EventsPage />} /> {/* Add this line */}
        <Route path="/events/:eventId" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;