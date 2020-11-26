const mongoose = require('mongoose');

const Collection = new mongoose.Schema({
  name: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId
  },
  videos: [{
    type: Schema.Types.ObjectId,
    ref: 'Video'
  }]
})

module.exports = mongoose.model('Collection', Collection)