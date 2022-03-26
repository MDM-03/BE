var express = require("express");
var router = express.Router();
const category = require("../routes/category");
const customer = require("../routes/customer");
function route(app) {
  app.use("/category", category);
  app.use("/customer", customer);
}
module.exports = route;
