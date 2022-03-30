const vaccine = require("../models/vaccine");
const customer = require("../models/customer");
const register = require("../models/registerappointment");
const order = require("../models/order");
const { StatusCodes } = require("http-status-codes");

class OrderController {
  async Detail(req, res) {
    try {
      let data = await order
        .find()
        .populate("Vaccine Customer RegisterAppointment");
      return res.status(StatusCodes.OK).send({ data: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      console.log(err);
      return err;
    }
  }
}
module.exports = new OrderController();
