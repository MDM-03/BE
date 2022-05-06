const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    Title: {
      type: String,
    },
    Description: {
      type: String,
    },
    Image: {
      type: String,
    },
    Created_at: {
      type: Date,
    },
  },
  {
    collection: "Blog",
  },
);
module.exports = mongoose.model("Blog", schema);
