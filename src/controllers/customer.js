const customer = require("../models/customer");
const Relative = require("../models/relative");
const { StatusCodes } = require("http-status-codes");

class CustomerController {
  async Detail(req, res) {
    try {
      let data = await customer.find().populate("Relative");
      return res.status(StatusCodes.OK).send({ data: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      console.log(err);
      return err;
    }
  }
}
module.exports = new CustomerController();
