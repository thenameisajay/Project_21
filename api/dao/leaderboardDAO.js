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
  // Remove the "password" field from the leaderboard object
  const sanitizedLeaderboard = {
    ...leaderboard.toObject(),
    password: undefined,
  };

  return sanitizedLeaderboard;
  
};
//get by date
const GodMode = async (date) => {
  const leaderboard = await Leaderboard.findOne({
    date: {
      $gte: moment(date).startOf("day").toDate(),
      $lte: moment(date).endOf("day").toDate(),
    },
  });
  if (leaderboard) {
    leaderboard.leaderboard.sort((a, b) => b.score - a.score);
  }

  // check the leaderboard leaderboard array if the number of tries os 100 then remove it
  leaderboard.leaderboard = leaderboard.leaderboard.filter(
    (item) => item.numberOfTries !== 100
  );

  // Remove the "password" field from the leaderboard object
  const sanitizedLeaderboard = {
    ...leaderboard.toObject(),
    password: undefined,
  };

  return sanitizedLeaderboard;
  
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
  const min = 0;
  const max = 9999;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const final =  randomNum.toString().padStart(4, '0');
  return Number(final);
};


console.log( generatePassword());

module.exports = {
  getLeaderboard,
  checkData,
  getByDate,
  pushLeaderboard,
  checkPassword,
  getDate,
  GodMode
  
};
