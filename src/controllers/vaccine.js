const vaccine = require("../models/vaccine");
const vaccine_mysql = require("../models/vaccine_mysql");
const subCategory = require("../models/sub-category");
const { StatusCodes } = require("http-status-codes");

class VaccineController {
  async ListVaccineCate(req, res) {
    try {
      let data = await vaccine_mysql.getVaccineCate();
      return res.status(StatusCodes.OK).send({ vaccine: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      return err;
    }
  }
  async ListPack(req, res) {
    try {
      let data = await vaccine_mysql.getPack();
      return res.status(StatusCodes.OK).send({ pack: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      return err;
    }
  }
  async VaccineByPack(req, res) {
    try {
      let data = await vaccine_mysql.getVaccineByPack(req.params.id);
      return res.status(StatusCodes.OK).send({ vaccine: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      return err;
    }
  }
}
module.exports = new VaccineController();
