const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  interested: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    maxlength: 25
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
