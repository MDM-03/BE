const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    Diagnostic: {
      type: String,
    },
    DayInject: {
      type: String,
    },
    Status: {
      type: String,
    },
    Date: {
      type: Date,
    },
    Customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    Doctor: { type: Schema.Types.ObjectId, ref: "Doctor" },
    Vaccine: { type: Schema.Types.ObjectId, ref: "Vaccine" },
  },
  {
    collection: "RegisterAppointment",
  },
);
module.exports = mongoose.model("RegisterAppointment", schema);
