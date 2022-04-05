const vaccine = require("../models/vaccine");
const customer = require("../models/customer");
const register = require("../models/registerappointment");
const order = require("../models/order");
const { StatusCodes } = require("http-status-codes");

class AppointmentController {
  async List(req, res) {
    try {
      let data = await register.find().populate("Vaccine Customer");
      return res.status(StatusCodes.OK).send({ data: data });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server error");
      console.log(err);
      return err;
    }
  }
  async Detail(req, res) {
    try {
      const ID = req.params.id;
      const data = await register.findById(ID).populate("Vaccine Customer");
      console.log(data);
      return res.status(StatusCodes.OK).send({ data: data });
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server error");
      console.log(err);
      return err;
    }
  }
  async Create(req, res) {
    try {
      const body = req.body;
      const data = await register.create(req.body);
      console.log(data);
      if (!data) {
        return res.status(StatusCodes.BAD_REQUEST).send("create unsuccess");
      }
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server error");
      console.log(err);
      return err;
    }
  }
  async Update(req, res) {
    try {
      const body = req.body;
      const ID = req.params.id;
      const key = Object.keys(body);
      const data = await register.findById(ID);
      console.log(typeof data);
      if (!data.model) {
        return res.status(StatusCodes.NOT_FOUND).send("Not found appointment");
      }
      key.forEach((update) => (data[update] = body[update]));
      await data.save();
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
}
module.exports = new AppointmentController();
