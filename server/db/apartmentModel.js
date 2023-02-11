const mongoose = require('mongoose');

const { Schema } = mongoose;

const apartmentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name apartment"],
    unique: true
  },
  rooms: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

/**
 * MongoDB apartment model
 */
const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = {
  Apartment,
};
