var express = require("express");
var router = express.Router();
const category = require("../routes/category");
const customer = require("../routes/customer");
const vaccine = require("../routes/vaccine");
const order = require("../routes/order");
const appointment = require("../routes/appointment");
const healthrecord = require("../routes/healthrecord");
const neo4j = require("../routes/neo4j");
function route(app) {
  app.use("/category", category);
  app.use("/customer", customer);
  app.use("/vaccine", vaccine);
  app.use("/order", order);
  app.use("/appointment", appointment);
  app.use("/neo4j", neo4j);
  app.use("/healthrecord", healthrecord);
}
module.exports = route;
