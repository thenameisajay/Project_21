const express = require("express");
const router = express.Router();
const leaderboardDao = require("../dao/leaderboardDAO");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
const { faker } = require("@faker-js/faker");
const moment = require("moment");

router.use(express.json());

//check data if its exist
router.get("/check", async (req, res) => {
  const data = await leaderboardDao.checkData();
  if (data) {
    const checkleaderboard = await leaderboardDao.getByDate(moment.utc().toDate());
    if (checkleaderboard.leaderboard.length === 0) {
      for (let i = 0; i < 7; i++) {
        const newRank = {
          username: faker.name.firstName().slice(0, 11),
          numberOfTries: 100,
          timeTaken: 100, 
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
  const data = await leaderboardDao.getByDate(moment.utc().toDate());
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
    res.json({ message: "something went wrong" });
  }
});

//push leaderboard
router.post("/push", async (req, res) => {
  // useername , number of tries I will get
  const { username, numberOfTries,timeTaken, score } = req.body;

  const newRank = {
    username: username,
    numberOfTries: numberOfTries,
    timeTaken: timeTaken,
    score: score,
  };

  const data = await leaderboardDao.pushLeaderboard(newRank);
  res.json(data);
});


//show score
router.post("/score", async (req, res) => {
  const { numberOfTries, timeTaken } = req.body;
  const score = Math.floor(calculateScore(numberOfTries,timeTaken));
  res.json(score);
});

//getDate from database js
router.get("/getdate1", async (req, res) => {
  const data = await leaderboardDao.getDate();
  res.json(data);
});

//get date from node app
router.get("/getdate2", async (req, res) => {
  const today = moment.utc().toDate();
  res.json(today);
});


//calculate score
const calculateScore = (numberOfTries, timeTaken) => {
  const maxScore = 1000000;
  const timeTakenWeight = 0.3;
  const timeTakenForADayWeight = 0.5;
  const numberOfTriesWeight = 0.2;
  const now = moment.utc().toDate();
  const secondsPassed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const timeTakenForADay = 86400 - secondsPassed;


  const timeTakenForADayScore =  maxScore * timeTakenForADayWeight * (1 / 86400 * timeTakenForADay)
  const numberOfTriesScore = maxScore * numberOfTriesWeight * (1 - Math.floor((numberOfTries - 1) / 10) * 0.05);
  const timeTakenScore = maxScore * timeTakenWeight * (1 - timeTaken / 30 * 0.05);

  return Math.round(timeTakenForADayScore + numberOfTriesScore + timeTakenScore);
};


module.exports = router;
