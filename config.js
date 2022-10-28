const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "nice_user_name",
    password: "super_secret_pwd",
    database: "my_database",
  },
  listPerPage: 50,
};

module.exports = config;
