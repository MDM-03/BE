const express = require("express");
const db = require("./config/connect");
require("dotenv").config();
// create our express app
const app = express();
// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// route
db.connect();
const routes = require("./routes/index");
routes(app);
//start server
app.listen(process.env.PORT, () => {
  console.log(`listeniing at port:${process.env.PORT}`);
});
