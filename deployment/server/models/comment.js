const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  name:{
    type: String,
    required: [true, 'provide a name for the commenter'],
    trim: true,
    minlength: [3, 'too few charactrers in name']
  },
  stars: {
      type: Number,
      required: [true, "Please provide a star rating"],
      min: [1, 'too few stars for rating'],
      max: [5, 'too many stars for rating']
  },
  desc: {
    type: String,
    required: [true, 'provide a comment'],
    minlength: [3, 'too few characters for comment']
  },
  for_rest: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Comm', commentSchema);