const db_config = {
  dev: {
    host: "localhost",
    user: "root",
    port: "33060",
    password: "secret",
    database: "test",
  },
  dev_cli: {
    host: "212.192.31.62",
    user: "root",
    port: "3306",
    password: "",
    database: "vuedb",
  },
};

// module.exports = db_config.dev_cli;
module.exports = db_config.dev;
