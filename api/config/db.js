const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const MONGO_URL = "mongodb+srv://apm30:3Js4bQDTPPVi!*b@cluster0.69jnclo.mongodb.net/projectt-21";
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection has been established");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
