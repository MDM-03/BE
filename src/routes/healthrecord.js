const express = require("express");
const healthrecordController = require("../controllers/healthRecord");
const router = express.Router();
router.get("/", healthrecordController.List);
router.put("/:id", healthrecordController.Update);
router.post("/", healthrecordController.Create);
module.exports = router;
