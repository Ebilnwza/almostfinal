const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
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

const BlogPost = mongoose.model('Posts', blogPostSchema);

module.exports = BlogPost;
