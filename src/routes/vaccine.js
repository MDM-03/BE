const express = require("express");
const vaccineController = require("../controllers/vaccine");
const router = express.Router();
router.get("/vaccinecate", vaccineController.ListVaccineCate);
router.get("/pack", vaccineController.ListPack);
router.get("/vaccinepack/:id", vaccineController.VaccineByPack);
module.exports = router;
