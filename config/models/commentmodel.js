const mongoose = require('mongoose');

const commentschema = new mongoose.Schema({
 addresspost: {
        type: String,
        required: true
      },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    default: () => new Date().toLocaleString('th-TH', {
      timeZone: 'Asia/Bangkok'
    })
  }
});

const comment = mongoose.model('comment', commentschema);

module.exports = comment;
