const express = require("express");
const db = require("./config/connect");
const cors = require("cors");
require("dotenv").config();
// create our express app
const app = express();
// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// route
db.connect();
const routes = require("./routes/index");
routes(app);
//start server
app.listen(process.env.PORT, () => {
  console.log(`listeniing at port:${process.env.PORT}`);
});
