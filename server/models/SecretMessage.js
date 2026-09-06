const mongoose = require('mongoose');

const SecretMessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    default: 'Wiwi Adawiyah Robiya'
  },
  recipient: {
    type: String,
    default: 'Mohit Sharma'
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  secretType: {
    type: String,
    enum: ['love_note', 'birthday_wish', 'secret_confession', 'memory'],
    default: 'secret_confession'
  },
  mood: {
    type: String,
    default: '🥰 Lovely'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SecretMessage', SecretMessageSchema);
