const Leaderboard = require("../models/leaderboard");
const moment = require("moment");

//get all leaderboard
const getLeaderboard = async () => {
  const leaderboard = await Leaderboard.find();
  return leaderboard;
};

//check if the date and password is exist
// this is needs to make afteer pagee is loaded 
const checkData = async () => {
  // get the current date 
  const today = new Date();
  //check if its the same day with the database 
  const leaderboard = await Leaderboard.findOne({
    date: {
      $gte: moment(today).startOf("day").toDate(),
      $lte: moment(today).endOf("day").toDate(),
    },
  });
  // if its null then create new leaderboard
  if (!leaderboard) {
    const leaderboard = new Leaderboard({
      date: today,
      password: generatePassword(),
      leaderboard: [],
    });
    await leaderboard.save();
  }
  return true;
};

//get by date
const getByDate = async (date) => {
  const leaderboard = await Leaderboard.findOne({
    date: {
      $gte: moment(date).startOf("day").toDate(),
      $lte: moment(date).endOf("day").toDate(),
    },
  });
  if (leaderboard) {
    leaderboard.leaderboard.sort((a, b) => b.score - a.score);
  }
  // sorting only top 10
  if (leaderboard.leaderboard.length > 10) {
    leaderboard.leaderboard = leaderboard.leaderboard.slice(0, 10);
  }
  return leaderboard;
};


// push into the leaderboard
const pushLeaderboard = async (newSubmission) => {
  let date = new Date();
  let leaderboard = await Leaderboard.findOne({
    date: {
      $gte: moment(date).startOf("day").toDate(),
      $lte: moment(date).endOf("day").toDate(),
    },
  });
  if (leaderboard) {
    leaderboard.leaderboard.push(newSubmission);
    await leaderboard.save();
  }
};

//check password
const checkPassword = async (password) => {
  //get today password
  const today = new Date();
  const leaderboard = await Leaderboard.findOne({
    date: {
      $gte: moment(today).startOf("day").toDate(),
      $lte: moment(today).endOf("day").toDate(),
    },
  });
  password = parseInt(password);
  if (leaderboard) {
    if (leaderboard.password === password) {
      return true;
    }
    if (leaderboard.password < password) {
      return 1;
    }
    if (leaderboard.password > password) {
      return -1;
    }
  }
  return false;
};

//return date
const getDate = async () => {
  const today = new Date();
  return today;
};
 












  


//additional function for password generation
const generatePassword = () => {
  const digits = new Set();
  while (digits.size < 4) {
    digits.add(Math.floor(Math.random() * 10));
  }
  return Array.from(digits).join("");
};

module.exports = {
  getLeaderboard,
  checkData,
  getByDate,
  pushLeaderboard,
  checkPassword,
  getDate,
  
};
