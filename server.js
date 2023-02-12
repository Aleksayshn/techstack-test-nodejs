const app = require('./app');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set('strictQuery', false);

const { HOST_URI, PORT } = process.env;

async function main() {
  try {
    await mongoose.connect(HOST_URI);
    console.log("Database connection successful");

    app.listen(PORT || 3000, () => {
      console.log(`Server running. Use our API on https://marketplace-apartment.netlify.app:${PORT || 3000}`)
    })

  } catch (error) {
    console.error("Error while connecting to mongodb", error.message);
    process.exit(1);
  }
}
main()