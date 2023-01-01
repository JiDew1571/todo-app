const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, { useNewUrlParser: true });
    console.group('CONNECT DB:');
    console.log(`MongoDB connected on: ${conn.connection.host}`);
  } catch (error) {
    console.group('CONNECT DB error:');
    console.log(error);
    console.log('exiting now =>');
    process.exit(1);
  }
};

module.exports = connectDB;
