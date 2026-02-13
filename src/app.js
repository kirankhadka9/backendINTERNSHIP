const express = require('express');
const cors = require('cors');
const saleRoutes = require('./router/saleRoutes'); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



app.use('/api', saleRoutes);


app.get('/', (req, res) => res.send('API is running...'));

module.exports = app;