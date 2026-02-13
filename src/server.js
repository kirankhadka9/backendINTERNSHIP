require('dotenv').config();  // MUST be at the top

const connectDB = require('./connectToDb/connectDB.js');  
const app = require('./app');

const startServer = async () => {
  try {
    await connectDB();  // wait for DB
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Server crashed:', err);
  }
};

startServer();