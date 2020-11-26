const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You have to add your name.'],
    unique: true,
    maxlength: [20, 'Name can not be more than 20 characters.']
  },
  password: {
    type: String,
    required: true
  },
  collections: [{
    type: Schema.Types.ObjectId,
    ref: 'Collection'
  }],
  videos: [{
    type: Schema.Types.ObjectId,
    ref: 'Video'
  }]
})

module.exports = mongoose.model('User', User);