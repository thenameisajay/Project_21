const express = require("express");
const router = express.Router();
const leaderboardDao = require("../dao/leaderboardDAO");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
const { faker } = require("@faker-js/faker");

router.use(express.json());

//check data if its exist
router.get("/check", async (req, res) => {
  const data = await leaderboardDao.checkData();
  if (data) {
    const checkleaderboard = await leaderboardDao.getByDate(new Date());
    if (checkleaderboard.leaderboard.length === 0) {
      for (let i = 0; i < 5; i++) {
        const newRank = {
          username: faker.name.firstName().slice(0, 11),
          numberOfTries: 100,
          score: Math.floor(Math.random() * 50001) + 50000,
        };

        const data = await leaderboardDao.pushLeaderboard(newRank);
      }
    }

    res.json(true);
  } else {
    res.json(false);
  }
});

//get today leaderboard
router.get("/today", async (req, res) => {
  const data = await leaderboardDao.getByDate(new Date());
  res.json(data);
});

//get godmode
router.get("/godmode", async (req, res) => {
  const data = await leaderboardDao.GodMode(new Date());
  res.json(data);
});

// for specific date
router.get("/date", async (req, res) => {
  const { date } = req.body.date;
  const data = await leaderboardDao.getByDate(date);
  res.json(data);
});

//check password
router.post("/passwordCheck", async (req, res) => {
  const { password } = req.body;
  if (password === undefined) {
    res.status(400).json({ message: "password is required" });
  }
  const data = await leaderboardDao.checkPassword(password);
  if (data) {
    if (data === 1) {
      //for more
      res.json(1);
    }
    if (data === -1) {
      //for less
      res.json(-1);
    }
    if (data === true) {
      res.json(0);
    }
  } else {
    res.json({ message: "somethin went wrong" });
  }
});

//push leaderboard
router.post("/push", async (req, res) => {
  // useername , number of tries I will get
  const { username, numberOfTries, score } = req.body;

  const newRank = {
    username: username,
    numberOfTries: numberOfTries,
    score: score,
  };

  const data = await leaderboardDao.pushLeaderboard(newRank);
  res.json(data);
});

//show score
router.post("/score", async (req, res) => {
  const { numberOfTries } = req.body;
  const score = Math.floor(calculateScore(numberOfTries));
  res.json(score);
});

//getDate from database js
router.get("/getdate1", async (req, res) => {
  const data = await leaderboardDao.getDate();
  res.json(data);
});

//get date from node app
router.get("/getdate2", async (req, res) => {
  const today = new Date();
  res.json(today);
});


//calculate score
const calculateScore = (numberOfTries) => {
  if (numberOfTries) {
    const now = new Date();
    // figure out how many seconds passed since the day started
    const secondsPassed =
      now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();

    if (numberOfTries < 10) {
      return (score = 1000000 - secondsPassed * (1000000 / 86400));
    }
    if (numberOfTries >= 10 && numberOfTries < 50) {
      return (score = (1000000 - secondsPassed * (1000000 / 86400)) * 0.9);
    }
    if (numberOfTries >= 50) {
      return (score = (1000000 - secondsPassed * (1000000 / 86400)) * 0.8);
    }
  } else {
    return (score = (1000000 - secondsPassed * (1000000 / 86400)) * 0.5);
  }
};

module.exports = router;
