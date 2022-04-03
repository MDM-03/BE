var express = require("express");
var router = express.Router();
const category = require("../routes/category");
const customer = require("../routes/customer");
const vaccine = require("../routes/vaccine");
const order = require("../routes/order");
const appointment = require("../routes/appointment");
function route(app) {
  app.use("/category", category);
  app.use("/customer", customer);
  app.use("/vaccine", vaccine);
  app.use("/order", order);
  app.use("/appointment", appointment);
}
module.exports = route;
