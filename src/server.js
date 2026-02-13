require('dotenv').config(); 

const connectDB = require('./connectToDb/connectDB.js');  
const app = require('./app');

const startServer = async () => {
  try {
    await connectDB(); 
    const PORT = process.env.PORT || 3000;
    
  
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Server crashed:', err);
  }
};

startServer();