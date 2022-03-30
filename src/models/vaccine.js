const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    Name: {
      type: String,
    },
    Price: { type: String },
    Prevention: {
      type: String,
    },
    Description: {
      type: String,
    },
    Source: {
      type: String,
    },
    Status: {
      type: String,
    },
    SubCategory: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
  },
  {
    collection: "Vaccine",
  },
);
module.exports = mongoose.model("Vaccine", schema);
