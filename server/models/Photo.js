const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Photo', PhotoSchema);
