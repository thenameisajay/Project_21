const Leaderboard = require("../models/leaderboard");

const getLeaderboard = async () => {
  const leaderboard = await Leaderboard.find({});
  return leaderboard;
};

module.exports = {
  getLeaderboard,
};
