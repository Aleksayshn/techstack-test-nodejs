const mongoose = require('mongoose');

/**
 * Mongoose connection to MongoDB
 * @async
 * @returns connection to the DB
 */
const connectMongo = async () => {
  mongoose.set('strictQuery', true);
  return await mongoose.connect(
    'mongodb+srv://renter:8080@cluster0.ftuvqys.mongodb.net/?retryWrites=true&w=majority'
  );
};

module.exports = {
  connectMongo,
};
