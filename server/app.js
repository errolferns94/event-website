// server/app.js
const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes'); // Verify this path
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/api/events', eventRoutes);

module.exports = app;