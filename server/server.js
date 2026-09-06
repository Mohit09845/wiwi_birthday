const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for React frontend
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
connectDB();

// API Routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Wiwi Birthday Wish Backend Running 💖' });
});

// Start Express Server locally if run directly
if (require.main === module) {
  const server = app.listen(PORT, () => {
    console.log(`🚀 Wiwi Birthday Server listening on port ${PORT}`);
    console.log(`🔗 Health Check: http://localhost:${PORT}/health`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`❌ Port ${PORT} is already in use by another process.`);
      console.error(`💡 Tip: Close the existing node process or run: npx kill-port ${PORT}`);
    } else {
      console.error('Server error:', err);
    }
  });
}


module.exports = app;

