require('dotenv').config({ path: '../.env' });
const express = require("express");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require('path')
const buildPath = path.join(__dirname, 'build')


// Importing the database models
const leaderboard = require("./models/leaderboard");

// Initializing the express app
const app = express();
app.use(express.static(buildPath))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// INITIASLING THE DATABASE CONNECTION
connectDB();


// Using the routes
app.use("/api", leaderboardRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})


// Opening the server on port 3000 and logging the port number to the console.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});