const express = require("express");
const orderController = require("../controllers/order");
const router = express.Router();
router.get("/", orderController.List);
router.post("/", orderController.create);
router.put("/:id", orderController.Update);

module.exports = router;
