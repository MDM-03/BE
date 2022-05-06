const express = require("express");
const blogController = require("../controllers/blog");
const router = express.Router();
router.get("/", blogController.List);
router.get("/:id", blogController.Detail);
router.put("/:id", blogController.Update);
router.post("/", blogController.Create);
router.delete("/:id", blogController.Delete);
module.exports = router;
