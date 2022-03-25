const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI.toString(), {});
    console.log("Connect MongoDB successfully");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect };
