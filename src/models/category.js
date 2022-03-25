const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    Name: { type: String },
  },
  {
    collection: "Category",
  },
);
module.exports = mongoose.model("Category", schema);
