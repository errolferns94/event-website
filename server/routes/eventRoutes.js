// server/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const { getEvents, createEvent } = require('../controllers/eventController');

// POST endpoint for creating events
router.post('/', createEvent);

// GET endpoint for fetching events
router.get('/', getEvents);

router.get('/events/:id', async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) return res.status(404).json({ message: 'Event not found' });
      res.json(event);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Only one module.exports needed
module.exports = router;