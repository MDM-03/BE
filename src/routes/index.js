var express = require("express");
var router = express.Router();
const category = require("../routes/category");
function route(app) {
  app.use("/category", category);
}
module.exports = route;
