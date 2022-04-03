const express = require("express");
const customerController = require("../controllers/customer");
const router = express.Router();
router.get("/", customerController.Líst);
router.get("/:id", customerController.Detail);
router.post("/", customerController.Assign);
module.exports = router;
