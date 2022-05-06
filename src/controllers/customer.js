const customer = require("../models/customer");
const Relative = require("../models/relative");
const { StatusCodes } = require("http-status-codes");

class CustomerController {
  async List(req, res) {
    try {
      let data = await customer.find({}).populate("Relative");
      return res.status(StatusCodes.OK).send({ data: data });
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send("Server error");
      console.log(err);
      return err;
    }
  }
  async Detail(req, res) {
    const ID = req.params.id;
    try {
      let data = await customer.findbyId({ _id: ID }).populate("Relative");
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
      const key = Object.keys(body);
      const data = await customer.findById({ _id: body._id });
      if (!data) {
        return res.status(StatusCodes.NOT_FOUND).send("Not found customer");
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
  async Assign(req, res) {
    try {
      const data = new customer(req.body);
      await data.save();
      //console.log(await data.save());
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
  async login(req, res) {
    const { error } = loginValidate(req.body);
    if (error) return result.BAD_REQUEST(res, error.details[0].message);
    try {
      const body = req.body;
      const data = await user.getUserByEmail(body.email);
      if (data.length === 0) {
        return result.BAD_REQUEST(res, "email incorrect");
      }
      if (body.password != data[0].passwordHash) {
        return result.BAD_REQUEST(res, "password incorrect");
      }
      let payload = {
        user_id: data[0].id,
      };
      const token = jwt.sign(payload, process.env.SECRETKEY);
      redisClient.set(data[0].id, token);
      return result.OK(res, token, "login success");
    } catch (err) {
      console.log(err);
      return result.BAD_REQUEST(res, "server error");
    }
  }

  async logout(req, res) {
    try {
      const token =
        req.headers.authorization.split(" ")[process.env.token_value_index];
      const verified = jwt.verify(token, process.env.SECRETKEY);
      const id = verified.user_id;
      await redisClient.del(id);
      return result.OK(res, "", "logout success");
    } catch (error) {
      return result.BAD_REQUEST(res, "server error");
    }
  }
}

module.exports = new CustomerController();
