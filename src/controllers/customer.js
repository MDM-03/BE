const customer = require("../models/customer");
const Relative = require("../models/relative");
const { StatusCodes } = require("http-status-codes");

class CustomerController {
  async Detail(req, res) {
    const ID = req.params.id;
    try {
      let data = await customer.findbyID({ _id: ID }).populate("Relative");
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
      const key = Object.key(body);
      const data = customer.findById({ _id: body._id });
      if (!data) {
        return res.status(StatusCodes.NOT_FOUND).send("Not found customer");
      }
      key.foreach((update) => (data[update] = body[update]));
      await data.save();
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
  async Assign(req, res) {
    try {
      const data = new customer(req.body);
      console.log(await data.save());
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
}
module.exports = new CustomerController();
