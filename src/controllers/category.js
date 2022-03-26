const category = require("../models/category");
const subCategory = require("../models/sub-category");
const { StatusCodes } = require("http-status-codes");

class CategoryController {
  async List(req, res) {
    try {
      let data = await subCategory.find().populate("Category");
      return res.status(StatusCodes.OK).send({ category: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      return err;
    }
  }
}
module.exports = new CategoryController();
