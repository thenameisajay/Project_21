const mongoose = require('mongoose');
const config = require('../config');

const connectDB = () => {
  return mongoose.connect(config.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
