const express = require("express");
const router = express.Router();
const leaderboardDao = require("../dao/leaderboardDAO");

router.use(express.json());

router.get("/", async (req, res) => {
    const data = await leaderboardDao.getLeaderboard();
    res.json(data);
  });


module.exports = router;