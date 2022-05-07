const { StatusCodes } = require("http-status-codes");
const HealthRecord = require("../models/healthrecord");
const customer = require("../models/customer");
const doctor = require("../models/doctor");
const vaccine = require("../models/vaccine");

class healthController {
  async List(req, res) {
    try {
      let data = await HealthRecord.find().populate("customer");
      return res.status(StatusCodes.OK).send({ data: data });
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).send("Server error");
    }
  }
  async Detail(req, res) {
    try {
      const customer_id = req.body.customer;
      let data = await HealthRecord.findOne({ customer: customer_id }).populate(
        "customer Doctor",
      );
      return res.status(StatusCodes.OK).send({ data: data });
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).send("Server error");
    }
  }
  async Create(req, res) {
    try {
      let data = new HealthRecord(req.body);
      console.log(data);
      await data.save();
      return res.status(StatusCodes.OK).send({ data: data });
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).send("Server error");
    }
  }
  async Update(req, res) {
    try {
      const body = req.body;
      const ID = req.params.id;
      const key = Object.keys(body);
      const data = await HealthRecord.findById(ID);
      if (!data) {
        return res.status(StatusCodes.NOT_FOUND).send("Not found record");
      }
      data.record.push(body);
      await data.save();
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).send("Server error");
    }
  }
}
module.exports = new healthController();
