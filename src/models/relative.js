const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    NameRelative: { type: String },
    Relationship: { type: String },
    PhoneNumber: { type: String },
  },
  {
    collection: "Relative",
  },
);
module.exports = mongoose.model("Relative", schema);
