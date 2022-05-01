const express = require("express");
const categoryController = require("../controllers/category");
const router = express.Router();
router.get("/", categoryController.List);
router.get("/pack/:id", categoryController.getPackByCate);
module.exports = router;
