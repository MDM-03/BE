const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    record: [
      {
        Doctor: { type: Object },
        Diagnostic: { type: String },
        Vaccine: { type: Object },
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
