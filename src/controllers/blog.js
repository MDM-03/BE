const blog = require("../models/blog");
const moment = require("moment");
const { StatusCodes } = require("http-status-codes");

class BlogController {
  async List(req, res) {
    try {
      let data = await blog.find({});
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
      let data = await blog.findById({ _id: ID });
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
      const id = req.params.id;
      const data = await blog.findById({ _id: id });
      if (!data) {
        return res.status(StatusCodes.NOT_FOUND).send("Not found blog");
      }
      key.forEach((update) => (data[update] = body[update]));
      const new_data = new blog(data);
      console.log(data);
      await data.save();
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
  async Create(req, res) {
    try {
      const current = moment().format("YYYY-MM-DD");
      const data = new blog(req.body);
      data["Created_at"] = current;
      await data.save();
      //console.log(await data.save());
      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
  async Delete(req, res) {
    try {
      const id = req.params.id;
      await blog.findByIdAndDelete(id);
      return res.status(StatusCodes.OK).send("Delete success");
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send("Server error");
      console.log(err);
      return err;
    }
  }
}

module.exports = new BlogController();
