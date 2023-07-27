const express = require("express");
const router = express.Router();
const leaderboardDao = require("../dao/leaderboardDAO");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());

//check data if its exist

router.get("/check", async (req, res) => {
  const data = await leaderboardDao.checkData();
  if (data) {
    return true;
  } else {
    return false;
  }
});

//get all leaderboard
router.get("/", async (req, res) => {
  const data = await leaderboardDao.getLeaderboard();
  res.json(data);
});

//get today leaderboard
router.get("/today", async (req, res) => {
  const data = await leaderboardDao.getByDate(new Date());
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
    if (data === "greater" ){
      res.json({ result : "greater" });
    }
    if(data === "less"){
      res.json({ result : "less" });
    }
    if(data === true){
      res.json({ result : true });
    }
  } else {
    res.json({ result : false });
  }
});

//push leaderboard
router.post("/push", async (req, res) => {
  // useername , number of tries I will get
  const { username, numberOfTries } = req.body;
  const score = Math.floor(calculateScore(numberOfTries));

  const newRank = {
    username: username,
    numberOfTries: numberOfTries,
    score: score,
  };

  const data = await leaderboardDao.pushLeaderboard(newRank);
  res.json(data);
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
