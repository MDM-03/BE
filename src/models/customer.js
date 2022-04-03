const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    Relative: [
      {
        type: Schema.Types.ObjectId,
        ref: "Relative",
      },
    ],
    Name: {
      type: String,
    },
    Email: { type: String },
    PhoneNumber: {
      type: String,
    },
    Address: {
      type: String,
    },
    Gender: {
      type: String,
    },
    City: {
      type: String,
    },
    TypeCustomer: {
      type: String,
    },
  },
  {
    collection: "Customer",
  },
);
module.exports = mongoose.model("Customer", schema);
