const express = require("express");
const router = express.Router();
const leaderboardDao = require("../dao/leaderboardDAO");

router.use(express.json());

router.get("/", async (req, res) => {
  const data = await leaderboardDao.getLeaderboard();
  res.json(data);
});

router.get("/date", async (req, res) => {
  const data = await leaderboardDao.getByDate(req.body.date);
  res.json(data);
});

//get today leaderboard
router.get("/today", async (req, res) => {
  const data = await leaderboardDao.getByDate(new Date());
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = await leaderboardDao.createLeaderboard(
    req.body.date,
    req.body.leaderboard
  );
  res.json(data);
});

module.exports = router;
