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
  async Assign(req, res) {
    try {
      const body = req.body;
      const key = Object.key(body);
      const ID = "";
      const data = customer.findById({ _id: body._id });
      if (!data) {
        return res.status(StatusCodes.NOT_FOUND).send("Not found customer");
      }
      key.foreach((update) => (data[update] = body[update]));
      await data.save();
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
}
module.exports = new CustomerController();
