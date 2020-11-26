const mongoose = require('mongoose');

const Video = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  publishedAt: {
    type: Date
  },
  videoId: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  collection: {
    type: Schema.Types.ObjectId,
    ref: 'Collection'
  }
})

module.exports = mongoose.model('Video', Video)