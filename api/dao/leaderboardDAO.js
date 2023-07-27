const Leaderboard = require("../models/leaderboard");
const moment = require("moment");

const getLeaderboard = async () => {
  const leaderboard = await Leaderboard.find({});
  return leaderboard;
};
//get leaderboard data by date
const getByDate = async (date) => {
  const leaderboard = await Leaderboard.findOne({
    date: {
      $gte: moment(date).startOf("day").toDate(),
      $lte: moment(date).endOf("day").toDate(),
    },
  });
  return leaderboard;
};

const createLeaderboard = async (date, leaderboardData) => {
  let leaderboard = await getByDate(date);
  if (leaderboard) {
    leaderboard.leaderboard.push(...leaderboardData);
  } else {
    leaderboard = new Leaderboard({
      date,
      password: generatePassword(),
      leaderboard: leaderboardData,
    });
  }
  await leaderboard.save();
  return leaderboard;
};

const generatePassword = () => {
  const digits = new Set();
  while (digits.size < 4) {
    digits.add(Math.floor(Math.random() * 10));
  }
  return Array.from(digits).join("");
};

module.exports = {
  getLeaderboard,
  getByDate,
  createLeaderboard,
};
