const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb://127.0.0.1:27017/mechintest'; 
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectDB };