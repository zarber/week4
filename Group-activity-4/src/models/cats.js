const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 0,
    max: 30
  },
  color: {
    type: String,
    minlength: 3,
    maxlength: 15
  },
  toys: [{ type: String, minlength: 2 }],
  country: {
    type: String,
    match: /^[A-Z][A-Z]$/
  },
  photoUrl: {
    type: String,
    match: /^https?:\/\//,
    default:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;