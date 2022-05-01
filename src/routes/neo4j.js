const express = require("express");
const neo4jController = require("../controllers/neo4j");
const router = express.Router();
router.get("/", neo4jController.getInjected_with);
module.exports = router;
