const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    Price: { type: String },
    Status: { type: String },
    Customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    RegisterAppointment: {
      type: Schema.Types.ObjectId,
      ref: "RegisterAppointment",
    },
    Vaccine: { type: Schema.Types.ObjectId, ref: "Vaccine" },
  },
  {
    collection: "Order",
  },
);
module.exports = mongoose.model("Order", schema);
