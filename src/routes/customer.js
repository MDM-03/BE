const express = require("express");
const customerController = require("../controllers/customer");
const router = express.Router();
router.get("/", customerController.Detail);
router.post("/", customerController.Assign);
module.exports = router;
