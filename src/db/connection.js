const mongoose = require('mongoose');

/**
 * Mongoose connection to MongoDB
 * @async
 * @returns connection to the DB
 */
const connectMongo = async () => {
  const HOST_URI = process.env.HOST_URI;

  mongoose.set('strictQuery', true);
  return await mongoose.connect(
    HOST_URI
  );
};

module.exports = {
  connectMongo,
};
