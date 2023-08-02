const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const connectDB = require("./database/connection");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const config = require("./config");
const cors = require("cors");
const path = require('path')
const buildPath = path.join(__dirname, 'build')



const app = express();
app.use(express.static(buildPath))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", leaderboardRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

// Connect to the database and start the server
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to the database: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  });
