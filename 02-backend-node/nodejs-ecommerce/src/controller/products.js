const knex = require("../connection");

const list = async (req, res) => {
  const listProducts = await knex("product").debug();

  return res.status(200).json(listProducts);
};

module.exports = {
  list,
};
