const express = require("express");
const appointmentController = require("../controllers/appointment");
const router = express.Router();
router.get("/", appointmentController.List);
router.get("/:id", appointmentController.Detail);
router.post("/", appointmentController.Create);
router.put("/:id", appointmentController.Update);

module.exports = router;
