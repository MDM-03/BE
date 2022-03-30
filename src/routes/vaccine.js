const express = require("express");
const vaccineController = require("../controllers/vaccine");
const router = express.Router();
router.get("/", vaccineController.List);
module.exports = router;
