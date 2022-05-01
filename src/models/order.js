const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = new mongoose.Schema(
  {
    Price: { type: String },
    Status: { type: String, default: "Chưa thanh toán" },
    Customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    RegisterAppointment: {
      type: Schema.Types.ObjectId,
      ref: "RegisterAppointment",
    },
    Pack: {
      NAMEPACK: { type: String },
      Vaccine: { type: Object },
    },
  },
  {
    collection: "Order",
  },
);
module.exports = mongoose.model("Order", schema);
