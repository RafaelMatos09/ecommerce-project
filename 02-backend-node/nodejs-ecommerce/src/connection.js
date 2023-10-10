const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "ecommerceapp",
    password: "ecommerceapp",
    database: "full-stack-ecommerce",
  },
});

module.exports = knex;
