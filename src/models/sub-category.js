const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    Name: { type: String },
    Category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  },
  {
    collection: "SubCategory",
  },
);
module.exports = mongoose.model("SubCategory", schema);
