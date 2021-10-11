const mongoose = require("mongoose");

// connect to database

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectdb;
