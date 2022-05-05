const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    record: [
      {
        Doctor: { type: Schema.Types.ObjectId, ref: "Doctor" },
        Diagnostic: { type: String },
        Vaccine: { type: String },
        DayInject: { type: Date },
        Status: { type: String },
      },
    ],
  },
  {
    collection: "HealthRecord",
  },
);
module.exports = mongoose.model("HealthRecord", schema);
