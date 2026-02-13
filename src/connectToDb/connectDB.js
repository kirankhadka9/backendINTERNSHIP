const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log(' connecting to MongoDB...');
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI not defined in .env file');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected to:', conn.connection.name);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
