// server/controllers/eventController.js
const supabase = require('../config/supabaseClient');

// GET all events
const getEvents = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });

    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ 
      message: 'Failed to fetch events',
      error: err.message 
    });
  }
};

// POST new event
const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    
    const { data, error } = await supabase
      .from('events')
      .insert([{ title, description, date, location }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ 
      message: 'Failed to create event',
      error: err.message 
    });
  }
};

module.exports = { getEvents, createEvent };