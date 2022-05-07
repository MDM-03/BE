const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    Name: { type: String },
    PhoneNumber: { type: String },
    Email: { type: String },
    Gender: { type: String },
    Specialist: { type: String },
    Experience: { type: String },
  },
  {
    collection: "Doctor",
  },
);
module.exports = mongoose.model("Doctor", schema);
