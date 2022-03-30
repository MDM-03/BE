const vaccine = require("../models/vaccine");
const subCategory = require("../models/sub-category");
const { StatusCodes } = require("http-status-codes");

class VaccineController {
  async List(req, res) {
    try {
      let data = await vaccine.find().populate("SubCategory");
      return res.status(StatusCodes.OK).send({ vaccine: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      return err;
    }
  }
}
module.exports = new VaccineController();
