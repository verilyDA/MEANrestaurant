const mongoose = require('mongoose');
const { Schema } = mongoose;

const restSchema = new Schema({
  name:{
    type: String,
    required: [true, 'provide a name for the restauarant'],
    trim: true,
    unique: true,
    minlength: [3, 'too few characters for name']
  },
  cuisine: {
    type: String,
    required: [true, 'provide a type of cuisine for the restaurant'],
    minlength: [3, 'too few characrters for cuisine type']
  }
});

module.exports = mongoose.model('Rest', restSchema);