
const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/Menu'); 
const { connectDB } = require('./config/db');
const cors = require('cors'); 

const app = express();

connectDB().then(() => {
  console.log('DB connected');
  app.use(cors());
  app.use(express.json());

  app.use('/api', menuRoutes);
});
 

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
