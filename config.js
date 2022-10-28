const dotenv = require('dotenv').config()

const config = {
  db: {
    // don't expose password or any sensitive info
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.DB_PWD,
    database: process.env.DB,
  },
  listPerPage: 50,
};

module.exports = config;
