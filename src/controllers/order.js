const vaccine = require("../models/vaccine");
const customer = require("../models/customer");
const register = require("../models/registerappointment");
const order = require("../models/order");
const { StatusCodes } = require("http-status-codes");

class OrderController {
  async List(req, res) {
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
  async Update(req, res) {
    try {
      const body = req.body;
      const ID = req.params.id;
      const key = Object.keys(body);
      const data = await order.findById(ID);
      //.populate("Vaccine Customer RegisterAppointment");
      if (!data) {
        return res.status(StatusCodes.NOT_FOUND).send("Not found order");
      }
      key.forEach((update) => (data[update] = body[update]));
      await data.save();
      console.log(await data.save());
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
}
module.exports = new OrderController();
