const category = require("../models/category");
const subCategory = require("../models/sub-category");
const { StatusCodes } = require("http-status-codes");

class CategoryController {
  async List(req, res) {
    try {
      let data = await category.getCate();
      return res.status(StatusCodes.OK).send({ category: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      return err;
    }
  }
  async getPackByCate(req, res) {
    try {
      const data = await category.getPackByCate(req.params.id);
      const vaccine = await category.getVaccineCate(req.params.id);
      return res.status(StatusCodes.OK).send({ pack: data, vaccine: vaccine });
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
module.exports = new CategoryController();
