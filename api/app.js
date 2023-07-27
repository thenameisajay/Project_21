const express = require("express");
const connectDB = require("./database/connection");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const config = require("./config");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", leaderboardRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Connect to the database and start the server
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    // Start the server
    const PORT = config.server.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to the database: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  });
