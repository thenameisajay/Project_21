const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  database: {
    url: process.env.DATABASE_URL,
  },
  server: {
    port: process.env.PORT || 3000,
  },
};
