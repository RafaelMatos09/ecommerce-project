const express = require("express");
const product = require("./controller/products");
const route = express();

route.get("/api/products", product.list);

module.exports = route;
