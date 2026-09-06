const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const SecretMessage = require('../models/SecretMessage');
const Photo = require('../models/Photo');
const connectDB = require('../config/db');

// Local persistent JSON storage fallback
const isVercel = process.env.VERCEL || process.env.NODE_ENV === 'production';
const dataDir = isVercel ? '/tmp/data' : path.join(__dirname, '../data');
const secretsFile = path.join(dataDir, 'secrets.json');

try {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
} catch (err) {
  console.error('Error creating data directory:', err);
}

const loadLocalSecrets = () => {
  try {
    if (fs.existsSync(secretsFile)) {
      const data = fs.readFileSync(secretsFile, 'utf8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error loading local secrets:', e);
  }
  return [];
};

const saveLocalSecrets = (secrets) => {
  try {
    fs.writeFileSync(secretsFile, JSON.stringify(secrets, null, 2), 'utf8');
  } catch (e) {
    console.error('Error saving local secrets file:', e);
  }
};

const memorySecrets = loadLocalSecrets();

// GET /api/wishes - Birthday wishes from Mohit Sharma to Wiwi
router.get('/wishes', (req, res) => {
  res.json({
    recipient: 'Wiwi Adawiyah Robiya',
    sender: 'Mohit Sharma',
    specialTitle: 'Happy Birthday Queen Robiya! 💖✨',
    mainWish: 'To the sweetest, most amazing girl Wiwi Adawiyah Robiya — May your birthday be as magical, gorgeous, and full of happiness as you make my life every single day! 🌹✨',
    surpriseMessage: 'Something immensely special, sweet, and adorable is waiting for you, my queen! 💋😘✨'
  });
});

// POST /api/secrets - Save a secret message from Wiwi to Mohit
router.post('/secrets', async (req, res) => {
  try {
    await connectDB(); // Ensure DB is connected for Serverless
    
    const { message, secretType, mood } = req.body;
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Please write a message or secret!' });
    }

    let savedNote;
    try {
      const newSecret = new SecretMessage({
        sender: 'Wiwi Adawiyah Robiya',
        recipient: 'Mohit Sharma',
        message,
        secretType: secretType || 'secret_thought',
        mood: mood || '🥰 Lovely'
      });
      savedNote = await newSecret.save();
    } catch (dbErr) {
      console.error('❌ MONGODB SAVE ERROR:', dbErr);
      // Persistent file backup fallback if DB is disconnected
      savedNote = {
        _id: 'note_' + Date.now(),
        sender: 'Wiwi Adawiyah Robiya',
        recipient: 'Mohit Sharma',
        message,
        secretType: secretType || 'secret_thought',
        mood: mood || '🥰 Lovely',
        createdAt: new Date()
      };
      memorySecrets.unshift(savedNote);
      saveLocalSecrets(memorySecrets);
    }

    res.status(201).json({
      success: true,
      message: 'Your secret note has been delivered safely to Mohit Sharma! 💌',
      data: savedNote
    });
  } catch (err) {
    console.error('Error saving secret:', err);
    res.status(500).json({ error: 'Server error saving message' });
  }
});

// GET /api/secrets - Fetch secrets sent to Mohit
router.get('/secrets', async (req, res) => {
  try {
    await connectDB(); // Ensure DB is connected for Serverless
    let list = [];
    try {
      list = await SecretMessage.find().sort({ createdAt: -1 });
      if (!list || list.length === 0) {
        list = loadLocalSecrets();
      }
    } catch (dbErr) {
      list = loadLocalSecrets();
    }
    res.json({ success: true, count: list.length, data: list });
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
});

// GET /api/photos - Fetch photo gallery
router.get('/photos', async (req, res) => {
  try {
    let photos = [];
    try {
      photos = await Photo.find().sort({ createdAt: -1 });
    } catch (err) {
      photos = [];
    }
    res.json({ success: true, data: photos });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

module.exports = router;
