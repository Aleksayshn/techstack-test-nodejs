const mongoose = require('mongoose');

const { Schema } = mongoose;

const apartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length > 99) {
        throw new Error('Name is too long')
      }
    }
  },
  rooms: {
    type: Number,
    required: true,
    validate(value) {
      if (value <= 0) {
        throw new Error('Number of rooms should be more than 0')
      }
    }
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value <= 0) {
        throw new Error('Apartment price should be more than 0')
      }
    }
  },
  description: {
    type: String,
    trim: true,
    validate(value) {
      if (value.length > 999) {
        throw new Error('Description is too long')
      }
    }
  }
});

/**
 * MongoDB apartment model
 */
const Apartment = mongoose.model('apartments', apartmentSchema);

module.exports = {
  Apartment,
};
